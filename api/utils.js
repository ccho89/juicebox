const jwt = require('jsonwebtoken');

async function requireUser(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401);
    next({
      name: 'MissingTokenError',
      message: 'You must include a valid token with your request'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await getUserById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    next({
      name: 'InvalidTokenError',
      message: 'Invalid or expired token'
    });
  }
}

module.exports = { requireUser };

// function requireUser(req, res, next) {
//   if (!req.user) {
//     res.status(401);
//     next({
//       name: "MissingUserError",
//       message: "You must be logged in to perform this action"
//     });
//   }
  
//   next();
//   }
  
//   module.exports = {
//     requireUser
//   }