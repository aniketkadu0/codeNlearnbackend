const verifyClient = (req, res, next) => {
    const credential = req.body();
    if (!credential) return res.status(400).send("access denied");
  
    try {
        console.log(credential)
      const verifiedUser = credential.username == 'client' && credential.password == 'baby' ? true : false
      if(verifiedUser){
      next();
      }
      else throw new Exception();
    } catch (err) {
      res.status(400).send("invalid credentials");
    }
};

module.exports = { verifyClient }