var jwt = require('jsonwebtoken');

var uToken = { user: 'xm', pwds: '123456789!' }
let secretOrPrivateKey = "dgkye"

logins = () => {}

logins.createToken = (user) => {
    let tokens = jwt.sign(user, secretOrPrivateKey, { expiresIn: 600, algorithm: 'RS256' });
    console.log(tokens);
}

logins.createToken(uToken);


module.exports = logins;