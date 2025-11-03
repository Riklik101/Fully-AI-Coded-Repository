// Configuration for API endpoints
// This allows the frontend to work in different environments

const CONFIG = {
    // For local development, use relative paths
    // For GitHub Pages, you can set this to your deployed backend URL
    API_BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? '/api'  // Local development with Flask serving the frontend
        : '/api', // GitHub Pages - update this to your backend URL when deployed
    
    // Alternative: Use environment detection
    // API_BASE_URL: window.location.hostname.includes('github.io')
    //     ? 'https://your-backend-url.com/api'  // Your deployed backend
    //     : '/api'  // Local development
};
