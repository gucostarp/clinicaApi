const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    const authHeader = req.header('Authorization')

    if (!authHeader) {
        return res.status(401).send({ error: 'Acesso não autorizado!' });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2) {
        return res.status(401).send({ error: 'Acesso não autorizado!' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Acesso não autorizado!' });
    }

    try {
        jwt.verify(token, process.env.SECRET);
        next();
    } catch (err) {
        res.status(401).json({ message: 'Acesso não autorizado!' });
    }
};