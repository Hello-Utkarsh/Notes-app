const jwt = require("jsonwebtoken");
const jwt_sceret = "abcd";

const fetchuser = (req: any, res: any, next: any) => {
  let token = req.header("auth-token");

  if (!token) {

    res.status(401).send({ error: "please enter valid token" });
  }
  try {

    let auth = jwt.verify(token, jwt_sceret);
    req.user = auth.user;
    next();

  } catch (error: any) {

    res.status(401).send({error: error.message});
    
  }
};

module.exports = fetchuser;
