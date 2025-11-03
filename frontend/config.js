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
        // TODO: Replace with your deployed backend URL when available
        // Example: 'https://your-backend.herokuapp.com/api'
        //          'https://your-backend.railway.app/api'
        //          'https://your-backend.render.com/api'
        if (hostname.includes('github.io')) {
            return '/api';  // Change this to your backend URL
        }
        
        // Default fallback
        return '/api';
    })()
};
