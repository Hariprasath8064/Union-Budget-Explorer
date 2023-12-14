const isLoggedin = (req, res, next) => {
    req.locals = req.locals || {};
    req.locals.isLoggedin = req.session.user && req.session.user.id;
    next();
};

module.exports = { isLoggedin };