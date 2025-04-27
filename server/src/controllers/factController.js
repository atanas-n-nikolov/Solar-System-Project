import { Router } from "express";
import { isAdmin, isAuth } from "../middleware/authMiddleware.js";
import asyncHandler from "../utils/asyncHandler.js";
import Facts from "../models/Facts.js";

const factController = Router();

const ERROR_MESSAGES = {
    NOT_FOUND: 'Fact not found.',
    MISSING_FIELDS: 'Missing required fields.',
    DUPLICATE_DATE: 'A fact already exists for this date.',
    UPDATE_FAILED: 'Failed to update fact.',
    DELETE_FAILED: 'Failed to delete fact.',
};

const SUCCESS_MESSAGES = {
    CREATE: 'Fact created successfully.',
    UPDATE: 'Fact updated successfully.',
    DELETE: 'Fact deleted successfully.',
};

function validateFactData({ title, date, year, description }) {
    if (!title?.trim() || !date?.trim() || !year?.trim() || !description?.trim()) {
        const error = new Error(ERROR_MESSAGES.MISSING_FIELDS);
        error.name = 'ValidationError';
        throw error;
    }
}

factController.get('/facts', isAuth, isAdmin, asyncHandler(async (req, res) => {
    const facts = await Facts.find().select('_id date');
    return res.status(200).json(facts);
}));

factController.get('/fact/:factId', isAuth, isAdmin, asyncHandler(async (req, res) => {
    const fact = await Facts.findById(req.params.factId);

    if (!fact) {
        const error = new Error(ERROR_MESSAGES.NOT_FOUND);
        error.name = 'NotFound';
        throw error;
    }

    return res.status(200).json(fact);
}));

factController.post('/fact/create', isAuth, isAdmin, asyncHandler(async (req, res) => {
    const { title, date, year, description } = req.body;
    const ownerId = req.user._id;

    validateFactData({ title, date, year, description });

    const existingFact = await Facts.findOne({ date });
    if (existingFact) {
        const error = new Error(ERROR_MESSAGES.DUPLICATE_DATE);
        error.name = 'ValidationError';
        throw error;
    }

    const fact = await Facts.create({ title, date, year, description, ownerId });

    return res.status(201).json({
        message: SUCCESS_MESSAGES.CREATE,
        fact,
    });
}));

factController.put('/fact/:factId', isAuth, isAdmin, asyncHandler(async (req, res) => {
    const { title, date, year, description } = req.body;

    validateFactData({ title, date, year, description });

    const duplicateDate = await Facts.findOne({ date, _id: { $ne: req.params.factId } });
    if (duplicateDate) {
        const error = new Error(ERROR_MESSAGES.DUPLICATE_DATE);
        error.name = 'ValidationError';
        throw error;
    }

    const fact = await Facts.findByIdAndUpdate(
        req.params.factId,
        { title, date, year, description },
        { new: true }
    );

    if (!fact) {
        const error = new Error(ERROR_MESSAGES.UPDATE_FAILED);
        error.name = 'NotFound';
        throw error;
    }

    return res.status(200).json({
        message: SUCCESS_MESSAGES.UPDATE,
        fact,
    });
}));

factController.delete('/fact/:factId', isAuth, isAdmin, asyncHandler(async (req, res) => {
    const fact = await Facts.findByIdAndDelete(req.params.factId);

    if (!fact) {
        const error = new Error(ERROR_MESSAGES.DELETE_FAILED);
        error.name = 'NotFound';
        throw error;
    }

    return res.status(200).json({ message: SUCCESS_MESSAGES.DELETE });
}));

export default factController;
