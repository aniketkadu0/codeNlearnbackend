const verifyClient = (req, res, next) => {
    const credential = req.header("auth");
    if (!credential) return res.status(400).send("access denied");
  
    try {
      const verifiedUser = credential.username == client && credential.password == baby ? true : false 
      req.user = verifiedUser;
      next();
    } catch (err) {
      res.status(400).send("invalid credentials");
    }
};

module.exports = { verifyClient }