import { Router } from "express";
import Planets from '../models/Planets.js';
import User from '../models/User.js';
import { isAdmin, isAuth } from "../middleware/authMiddleware.js";
import asyncHandler from "../utils/asyncHandler.js";

const planetController = Router();

planetController.get('/planets', asyncHandler(async (req, res) => {
    const options = req.query;
    let selectedFields = '';

    if (options.fields) {
        const fields = options.fields.split(',');
        selectedFields = fields.join(' ');
    };

    const planets = selectedFields
        ? await Planets.find({}, selectedFields).sort({ order: 1 })
        : await Planets.find().sort({ order: 1 });

    return res.status(200).json(planets);
}));

planetController.get("/planets/:planetId", asyncHandler(async (req, res) => {
    const planet = await Planets.findById(req.params.planetId).populate('comments.user', 'firstName lastName');

    if (!planet) {
        const error = new Error('Planet not found.');
        error.name = 'NotFound';
        throw error;
    }

    return res.json(planet);
}));

planetController.post('/planet/create', isAuth, isAdmin, asyncHandler(async (req, res) => {
    const { name, type, image, distanceToSun, size, description, order } = req.body;
    const comments = [];
    const ownerId = req.user._id;

    if (!name || !type || !image || !distanceToSun || !size || !description || !order) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const existingPlanet = await Planets.findOne({ name });
    if (existingPlanet) {
        return res.status(400).json({ message: 'Planet with this name already exists.' });
    }

    const planet = await Planets.create({ name, type, image, distanceToSun, size, description, comments, order, ownerId });
    return res.status(201).json({
        message: 'Planet created successfully.',
        planet,
    });
}));

planetController.put('/planets/:planetId', isAuth, isAdmin, asyncHandler(async (req, res) => {
    const { name, type, image, distanceToSun, size, description, order } = req.body;
    const planetId = req.params.planetId;
    const ownerId = req.user._id;

    if (!name || !type || !image || !distanceToSun || !size || !description || !order || !ownerId) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const planet = await Planets.findByIdAndUpdate(planetId, { name, type, image, distanceToSun, size, description, order, comments: [] }, { new: true });

    if (!planet) {
        const error = new Error('Failed to update planet.');
        error.name = 'NotFound';
        throw error;
    }

    return res.status(200).json({
        message: 'Planet updated successfully.',
        planet,
    });
}));

planetController.delete('/planet/:planetId/delete', isAuth, isAdmin, asyncHandler(async (req, res) => {
    const planetId = req.params.planetId;
    const planet = await Planets.findByIdAndDelete(planetId);

    if (!planet) {
        const error = new Error('Failed to delete planet.');
        error.name = 'NotFound';
        throw error;
    }

    return res.status(200).json({ message: 'Planet deleted successfully.' });
}));

planetController.post('/planet/:planetId/comment', isAuth, asyncHandler(async (req, res) => {
    const { planetId } = req.params;
    const { text } = req.body;
    const userId = req.user._id;

    const planet = await Planets.findById(planetId);
    if (!planet) return res.status(404).json({ message: 'Planet not found.' });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found.' });

    const newComment = { user: userId, text, createdAt: Date.now() };

    planet.comments.push(newComment);
    user.comments.push(planetId);

    await planet.save();
    await user.save();

    const updatedPlanet = await Planets.findById(planetId).populate('comments.user', 'firstName lastName').exec();
    return res.status(201).json({
        message: 'Comment added successfully.',
        updatedPlanet,
    });
}));

planetController.put('/planet/:planetId/comment/:commentId', isAuth, asyncHandler(async (req, res) => {
    const { planetId, commentId } = req.params;
    const { text } = req.body;
    const userId = req.user._id;

    if (!text || text.trim() === '') {
        return res.status(400).json({ message: 'Text is required.' });
    }

    const planet = await Planets.findById(planetId);
    const user = await User.findById(userId);

    if (!planet) {
        return res.status(404).json({ message: 'Planet not found.' });
    }

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    const comment = planet.comments.id(commentId);
    if (!comment) {
        return res.status(404).json({ message: 'Comment not found.' });
    }

    if (comment.user.toString() !== userId.toString()) {
        return res.status(403).json({ message: 'Access denied.' });
    }

    comment.text = text;
    comment.updatedAt = Date.now();
    await planet.save();

    const updatedPlanet = await Planets.findById(planetId).populate('comments.user', 'firstName lastName').exec();

    if (!updatedPlanet) {
        return res.status(404).json({ message: 'Failed to update comment.' });
    }

    return res.status(200).json({
        message: 'Comment updated successfully.',
        updatedPlanet,
    });
}));

planetController.delete('/planet/:planetId/comment/:commentId', isAuth, asyncHandler(async (req, res) => {
    const { planetId, commentId } = req.params;
    const userId = req.user._id;

    const planet = await Planets.findById(planetId);
    const user = await User.findById(userId);

    if (!planet || !user) {
        return res.status(404).json({ message: 'Planet or user not found.' });
    }

    const comment = planet.comments.id(commentId);
    if (!comment) {
        return res.status(404).json({ message: 'Comment not found.' });
    }

    if (comment.user.toString() !== userId.toString()) {
        return res.status(403).json({ message: 'Access denied.' });
    }

    planet.comments.pull(commentId);
    user.comments.pull(planetId);

    await planet.save();
    await user.save();

    const updatedPlanet = await Planets.findById(planetId).populate('comments.user', 'firstName lastName').exec();

    if (!updatedPlanet) {
        return res.status(404).json({ message: 'Failed to delete comment.' });
    }

    return res.status(200).json({ message: 'Comment deleted successfully.' });
}));

export default planetController;
