import { useEffect, useState } from "react";
import request from './request.js';

const baseUrl = import.meta.env.VITE_API_URL 
  ? `${import.meta.env.VITE_API_URL}/planets` 
  : 'http://localhost:3000/planets';

export const usePlanet = (planetId) => {
    const [planet, setPlanet] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const response = await request.get(`${baseUrl}/${planetId}`);
                setPlanet(response);
            } catch (error) {
                setError({ message: error.message });
            } finally {
                setLoading(false);
            };
        };

        fetchPlanet();
    }, [planetId]);

    return { planet, setPlanet, loading, error };
};