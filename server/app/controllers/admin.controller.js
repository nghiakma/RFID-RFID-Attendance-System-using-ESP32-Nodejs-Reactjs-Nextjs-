var Admin = require('../models/admin.model');




exports.handleLogin = function (req, res) {
    var data = req.body;
    console.log('data', data)
    Admin.handleLogin(data, function (response) {
        res.send({ result: response });
    });
};
