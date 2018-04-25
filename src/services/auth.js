import dotenv from 'dotenv';
const env = dotenv.config();
const jwt = require('jsonwebtoken');

export default {
	
	verifyToken: ( (req, res, next) => {
		let token = req.body.token || req.query.token || req.headers['x-access-token'];
		
		if( token ) {
			
			jwt.verify(token, process.env.SECRET, (err, decoded) => {
				
				if (err) {
					return res.json({ success: false, message: 'Failed to authenticate token.' });
				} else {
					// all good, continue
					req.decoded = decoded;
					next();
				}
			});
			
		}  else {
			
			res.send({ success: false, message: 'No token exists.' });
			
		}
	})
}
