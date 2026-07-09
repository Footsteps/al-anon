export function honeypot (req, res, next) {
     if(req.body.contactPerson) {
    
        return res.json( {
            success: true
        }) 
  } 
  next();
}