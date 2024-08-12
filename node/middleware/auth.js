const passport = require('passport');

module.exports = (req, res, next) => {
    console.log('Verificando autenticación...');
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err || !user) {
        console.log('Autenticación fallida', err, info);
        return res.status(403).json({ message: 'Unauthorized' });
      }
      console.log('Usuario autenticado:', user);
      req.user = user;
      next();
    })(req, res, next);
  };
  