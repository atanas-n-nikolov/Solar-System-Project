import { Router } from "express";
import { isAuth } from "../middleware/authMiddleware.js";
import User from "../models/User.js";
import Planets from "../models/Planets.js";
import userService from "../services/userService.js";
import asyncHandler from '../utils/asyncHandler.js';

const userController = Router();

userController.post('/register', asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, rePassword } = req.body;

    if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({ message: 'All fields are required.' });
    };

    if (password !== rePassword) {
        const error = new Error('passwordsDoNotMatch');
        error.statusCode = 400;
        throw error;
    }

    const user = await userService.register(firstName, lastName, email, password);
    return res.status(201).json(user);
}));

userController.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const user = await userService.login(email, password);
    return res.status(200).json(user);
}));

userController.get('/profile/:userId', isAuth, asyncHandler(async (req, res) => {
    const userId = req.params.userId;

    const user = await User.findById(userId);
    
    if (!user) {
        const error = new Error('userNotFound');
        error.statusCode = 404;
        throw error;
    }

    const planets = await Planets.find({ 'comments.user': userId })
        .populate('comments.user', 'firstName lastName')
        .exec();

    const userComments = planets.flatMap(planet =>
        planet.comments
            .filter(comment => comment.user && comment.user._id.toString() === userId)
            .map(comment => ({
                planetId: planet._id,
                commentId: comment._id,
                planetName: planet.name,
                commentText: comment.text,
                createdAt: comment.createdAt,
            }))
    );

    return res.status(200).json({
        user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            score: user.score,
            answers: user.answers || [],
            createdAt: user.createdAt,
        },
        comments: userComments
    });
}));

userController.put('/profile/:userId/score', isAuth, asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const updateData = req.body;

    const updatedUser = await userService.updateUser(userId, updateData);

    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found.' });
    }

    return res.status(200).json(updatedUser);
}));

userController.put('/profile/:userId/edit', isAuth, asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const updateData = req.body;

    if (req.user.id !== userId) {
        return res.status(403).json({ message: 'Access denied.' });
    }

    const updatedUser = await userService.updateUser(userId, updateData);

    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found.' });
    }

    return res.status(200).json({
        message: 'User updated successfully.',
        updatedUser,
    });
}));

userController.delete('/profile/:userId', isAuth, asyncHandler(async (req, res) => {
    const userId = req.params.userId;

    if (req.user.id !== userId) {
        return res.status(403).json({ message: 'Access denied.' });
    }

    const user = await User.findByIdAndDelete(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    return res.status(200).json({ message: 'User deleted successfully.' });
}));

export default userController;
