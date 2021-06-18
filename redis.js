if (process.env.NODE_ENV === 'development') {
    export default {
        host: process.env.REDIS_URL,
        port: process.env.REDIS_PORT,
    };
} else {
    export default {
        host: process.env.REDIS_URL,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
    };
};