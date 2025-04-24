import { Router } from "express";
import Planets from '../models/Planets.js';
import Facts from '../models/Facts.js';
import Quiz from "../models/Quiz.js";
import asyncHandler from "../utils/asyncHandler.js";

const homeController = Router();

homeController.get('/', asyncHandler(async (req, res) => {
    const today = new Date();
    const dateString = today.toLocaleDateString('bg-BG', { day: '2-digit', month: '2-digit' });

    const planets = await Planets.find();
    const latestQuiz = await Quiz.findOne().sort({ createdAt: -1 }).limit(1);
    const fact = await Facts.findOne({ date: dateString });

    return res.status(200).json({
        fact: fact || null,
        planets: planets.length ? planets : null,
        latestQuiz: latestQuiz || null
    });
}));

homeController.put('/lang', (req, res) => {
    const { lang } = req.body;

    if (lang && ['en', 'bg'].includes(lang)) {
        res.cookie('myLang', lang, {
            maxAge: 900000,
            httpOnly: false,
            sameSite: 'Lax'
        });
        return res.sendStatus(204);
    } else {
        return res.status(400).json({ message: i18next.t('invalidLanguageSelection') });
    }
});

export default homeController;