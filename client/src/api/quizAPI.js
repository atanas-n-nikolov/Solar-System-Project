import { useEffect, useState } from "react";
import request from "./request";

const baseUrl = import.meta.env.VITE_API_URL 
  ? `${import.meta.env.VITE_API_URL}/quiz` 
  : 'http://localhost:3000/quiz';

export const useCategoryQuiz = (category) => {
    const [quiz, setQuiz] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await request.get(`${baseUrl}?${category}`);
                setQuiz(response);
                setLoading(false);
            } catch (error) {
                setError('Failed to load Quiz. Please try again later.');
                setLoading(false);
            };
        };

        fetchQuiz();
    }, []);

    return { quiz, error, loading };
};