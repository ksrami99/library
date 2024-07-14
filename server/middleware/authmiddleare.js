const jwt = require('jsonwebtoken');

const auth=  (req,res,next) =>  {
    const token = req.header('Authorization').replace('Bearer ','');
    if (!token) {
        return res.status(401).json({
            msg:'No token, authorization denied'
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userID=decoded.userID
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' + err });
        throw err
    }

}
module.exports=auth;