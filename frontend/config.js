// Configuration for API endpoints
// This allows the frontend to work in different environments

const CONFIG = {
    // Configure the backend API URL based on the environment
    API_BASE_URL: (() => {
        const hostname = window.location.hostname;
        
        // Local development (Flask serving both frontend and backend)
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            return '/api';
        }
        
        // GitHub Pages deployment
        // IMPORTANT: Replace with your deployed backend URL when available
        // Example: 'https://your-backend.herokuapp.com/api'
        //          'https://your-backend.railway.app/api'
        //          'https://your-backend.render.com/api'
        if (hostname.includes('github.io')) {
            // TODO: Set your backend URL here
            const BACKEND_URL = '';  // e.g., 'https://your-backend.herokuapp.com/api'
            
            if (!BACKEND_URL) {
                console.warn('Backend URL not configured for GitHub Pages. Please update frontend/config.js');
                return '/api';  // Will fail but allows frontend to load
            }
            return BACKEND_URL;
        }
        
        // Default fallback
        return '/api';
    })()
};
