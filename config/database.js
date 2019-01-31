module.exports = {
    host: process.env.MONGODB_HOST || 'mongo',
    db: process.env.MONGODB_DATABASE || 'todo',
    user:  process.env.MONGODB_USERNAME || 'todouser', 
    pass:  process.env.MONGODB_PASSWORD || 'todopass'
};
