const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = res.headers.authorization;

    if (!authHeader || authHeader.startsWith('Bearer')) {
        return res.status(401).json({ messaage: 'Authorization denied. No token procided.'});
    }

    const token =authHeader.salt('')[1];

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error){
        return res.status(401).json ({ message: 'Token is not valid'});
    }
};

module.export = authMiddleware; 