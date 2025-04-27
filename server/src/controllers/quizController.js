import { Router } from "express";
import { isAdmin, isAuth } from "../middleware/authMiddleware.js";
import asyncHandler from "../utils/asyncHandler.js";
import Quiz from '../models/Quiz.js';

const quizController = Router();

const ADMIN_ROLE = 'admin';
const validTypes = ['all', 'category-summary', 'summary'];

quizController.get('/quiz', isAuth, asyncHandler(async (req, res) => {
    const { type, category } = req.query;
    const userRole = req.user.role;

    if (type && !validTypes.includes(type)) {
        return res.status(400).json({ message: 'Invalid type' });
    }

    if (type === 'all' && userRole === ADMIN_ROLE) {
        const quizzes = await Quiz.find();
        return res.status(200).json(quizzes);
    }

    if (type === 'category-summary') {
        const categoriesSummary = await Quiz.aggregate([
            {
                $group: {
                    _id: '$category',
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    category: '$_id',
                    count: 1
                }
            },
            {
                $sort: { category: 1 }
            }
        ]);
        return res.status(200).json(categoriesSummary);
    }

    if (type === 'summary') {
        const quizzes = await Quiz.find({}, '_id title');
        return res.status(200).json(quizzes);
    }

    if (category) {
        const quizzes = await Quiz.find({ category });

        if (quizzes.length === 0) {
            return res.status(404).json({ message: 'No quizzes found in this category' });
        }

        return res.status(200).json(quizzes);
    }

    return res.status(400).json({ message: 'Invalid query' });
}));

quizController.post('/quiz/create', isAuth, isAdmin, asyncHandler(async (req, res) => {
    const { title, category, options, correctAnswer } = req.body;
    const ownerId = req.user._id;

    let optionsArray = Array.isArray(options) ? options : options.split(',').map(option => option.trim());

    if (!title || !category || !optionsArray || !correctAnswer) {
        return res.status(400).json({ message: 'Missing fields' });
    }

    if (optionsArray.length < 2) {
        return res.status(400).json({ message: 'At least two options required' });
    }

    if (!optionsArray.includes(correctAnswer)) {
        return res.status(400).json({ message: 'Correct answer must be one of the options' });
    }

    if (new Set(optionsArray).size !== optionsArray.length) {
        return res.status(400).json({ message: 'Options must be unique' });
    }

    const quiz = await Quiz.create({ title, category, options: optionsArray, correctAnswer, ownerId });

    return res.status(201).json({
        message: 'Quiz created successfully',
        quiz,
    });
}));

quizController.put('/quiz/:quizId/edit', isAuth, isAdmin, asyncHandler(async (req, res) => {
    const quizId = req.params.quizId;
    const { title, category, options, correctAnswer } = req.body;

    if (!title || !category || !options || !correctAnswer || !quizId) {
        return res.status(400).json({ message: 'Missing fields' });
    }

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
    }

    const updatedQuiz = await Quiz.findByIdAndUpdate(quizId, { title, category, options, correctAnswer }, { new: true });

    if (!updatedQuiz) {
        return res.status(404).json({ message: 'Failed to update quiz' });
    }

    return res.status(200).json({
        message: 'Quiz updated successfully',
        updatedQuiz,
    });
}));

quizController.delete('/quiz/:quizId/delete', isAuth, isAdmin, asyncHandler(async (req, res) => {
    const quizId = req.params.quizId;

    const quiz = await Quiz.findByIdAndDelete(quizId);

    if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
    }

    return res.status(200).json({ message: 'Quiz deleted successfully' });
}));

export default quizController;
