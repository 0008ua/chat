const login = (req, res, next) => {
  const user = req.body;
  console.log('user', user)
  res.status(200).json('login ok ' + user.login);
}

const signup = (req, res, next) => {
  const user = req.body;
  console.log('user', user)
  res.status(200).json('login ok ' + user.login);
}

module.exports = {
  login,
  signup,
};
