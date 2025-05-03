export const securityConfig = {
    // Content Security Policy (CSP) - Prevents XSS and other code injection attacks
    csp: {
        // Only allow resources (scripts, images, etc.) from the same origin
        defaultSrc: ["'self'"],

        // Only allow JavaScript from the same origin
        scriptSrc: ["'self'"],

        // Allow CSS from same origin and inline styles (needed for React)
        styleSrc: ["'self'", "'unsafe-inline'"],

        // Allow images from same origin, data URLs, and HTTPS sources
        imgSrc: ["'self'", "data:", "https:"],

        // Allow fonts from same origin, data URLs, and HTTPS sources
        fontSrc: ["'self'", "data:", "https:"],

        // Only allow API calls to the same origin
        connectSrc: ["'self'"],
    },

    // Security Headers - Protect against common web vulnerabilities
    headers: {
        // Prevent browsers from trying to guess the content type
        'X-Content-Type-Options': 'nosniff',

        // Prevent the site from being embedded in iframes (clickjacking protection)
        'X-Frame-Options': 'DENY',

        // Enable browser's built-in XSS protection
        'X-XSS-Protection': '1; mode=block',

        // Control how much referrer information is sent to other sites
        'Referrer-Policy': 'strict-origin-when-cross-origin',

        // Restrict browser features like camera, microphone, geolocation
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    },

    // API Security - Protect API communications
    api: {
        // Base URL for API calls (should be HTTPS in production)
        baseUrl: import.meta.env.VITE_API_URL || 'https://your-api-url.com',

        // Timeout for API requests (30 seconds)
        timeout: 30000,

        // Number of times to retry failed API requests
        retryAttempts: 3,
    },

    // Input Validation - Protect against malicious input
    validation: {
        // Maximum length for text inputs to prevent DoS attacks
        maxInputLength: 1000,

        // Only allow these file types to be uploaded
        allowedFileTypes: ['jpg', 'jpeg', 'png', 'pdf'],

        // Maximum file size for uploads (5MB)
        maxFileSize: 5 * 1024 * 1024,
    },
}; 