const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, process.env.SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        res.status(401).json(req.t('unauthorized'));
    }
};