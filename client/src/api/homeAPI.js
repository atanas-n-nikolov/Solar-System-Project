import { useEffect, useState } from "react";
import request from './request.js';

const baseUrl = import.meta.env.VITE_API_URL 
  ? `${import.meta.env.VITE_API_URL}/` 
  : 'http://localhost:3000/';

export const useHome = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get(baseUrl);
                setData(response);
                setLoading(false);
            } catch (error) {
                setError('Failed to load data. Please try again later.');
                setLoading(false);
            };
        };

        fetchData();
    }, []);

    return { data, error, loading };
};