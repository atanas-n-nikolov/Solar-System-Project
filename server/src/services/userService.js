import bcrypt from 'bcrypt';
import jwt from '../jwt.js';
import User from '../models/User.js';

const userService = {
    async register(firstName, lastName, email, password) {
        const existingUser = await User.findOne({ email }).select('_id');
        if (existingUser) {
            const error = new Error('duplicateKeyError');
            error.statusCode = 400;
            throw error;
        }

        const newUser = await User.create({ firstName, lastName, email, password });
        return generateResponse(newUser);
    },

    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            const error = new Error('invalidCredentials');
            error.statusCode = 400;
            throw error;
        }

        return generateResponse(user);
    },

    async updateUser(userId, updateData) {
        const updatedFields = {};

        if (updateData.firstName) updatedFields.firstName = updateData.firstName;
        if (updateData.lastName) updatedFields.lastName = updateData.lastName;
        if (typeof updateData.score === 'number') updatedFields.$inc = { score: updateData.score };
        if (Array.isArray(updateData.answers)) updatedFields.$push = { answers: { $each: updateData.answers } };

        const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });

        if (!updatedUser) {
            const error = new Error('userNotFound');
            error.statusCode = 404;
            throw error;
        }

        return updatedUser;
    }
};

async function generateResponse(user) {
    const { _id, firstName, lastName, email, score, role } = user;
    const token = await jwt.sign({ _id, firstName, lastName, email, score, role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return { _id, firstName, lastName, email, score, accessToken: token, role };
}

export default userService;
