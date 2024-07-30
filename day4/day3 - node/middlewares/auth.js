const jwt = require('jsonwebtoken');
const { promisify } = require('util');

async function auth(req, res, next) {
    let authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({ message: 'No token provided, You must login first!' });
    }

    try {
        const decoded = await promisify(jwt.verify)(authorization, 'this_is_my_token_secret');
        req.id = decoded.data.id;
        
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token, You must login first!' });
    }
}

module.exports = {auth};