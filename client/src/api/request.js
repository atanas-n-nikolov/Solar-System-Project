import { getAccessToken} from '../util/authUtil.js';

async function request(method, url, data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    };

    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    if (data && method !== 'GET') {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const { message, error } = await response.json();
            const errorMessage = error || message || "Request failed";

            if (response.status !== 401 && response.status !== 400 && response.status !== 404) {
                console.error('Unexpected error:', errorMessage);
            }

            throw new Error(errorMessage);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        if (error.message && !error.message.includes('Invalid email or password!') && error.message !== 'Request failed') {
            console.error(error.message || 'Request failed');
        }
        throw new Error(error.message || 'Request failed');
    }
};

export default {
    get: request.bind(null, "GET"),
    post: request.bind(null, "POST"),
    put: request.bind(null, "PUT"),
    patch: request.bind(null, "PATCH"),
    delete: request.bind(null, "DELETE"),
};