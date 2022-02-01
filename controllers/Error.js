let path = require('path');
exports.Error = function(req,res,next){
    res.status(404).render("error");
}