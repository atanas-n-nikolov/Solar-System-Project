import { Schema, Types, model } from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const answerSchema = new Schema({
  questionId: { type: String, ref: 'Quiz', required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  answeredOn: { type: Date, default: Date.now },
});

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Firstname is required.|Името е задължително.'],
    minLength: [3, 'Firstname should be at least 3 characters long.|Името трябва да бъде поне 3 символа.']
  },
  lastName: {
    type: String,
    required: [true, 'Lastname is required.|Фамилията е задължителна.'],
    minLength: [3, 'Lastname should be at least 3 characters long.|Фамилията трябва да бъде поне 3 символа.']
  },
  email: {
    type: String,
    required: [true, 'Email is required.|Имейлът е задължителен.'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required.|Паролата е задължителна.'],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])(.{8,})$/,
      'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.|Паролата трябва да бъде поне 8 символа и да съдържа поне една главна буква, една малка буква, една цифра и един специален символ.'
    ]
  },
  score: {
    type: Number,
    default: 0
  },
  answers: [answerSchema],
  comments: [{ type: Types.ObjectId, ref: 'Planet' }],
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function () {
  const hash = await bcrypt.hash(this.password, SALT_ROUNDS);
  this.password = hash;
});

const User = model('User', userSchema);

export default User;
