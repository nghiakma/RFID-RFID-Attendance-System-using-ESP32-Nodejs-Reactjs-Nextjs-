const { domainToUnicode } = require('url');
const db = require('../commons/connect');

const Admin = function () {}



Admin.handleLogin = function (data, result) {
    try {
        var queryString = `SELECT * FROM admin WHERE email = ${data.email} AND password = ${data.password.toString()}`;
        console.log('queryString', queryString)
        db.query(queryString, function (err, table) {
            if (err) {
                result(
                    {
                        "status": "error",
                        "data": null,
                        "message": err
                    }
                );
            }
            else {
                result(
                    {
                        "status": "success",
                        "data": table,
                        "message": null
                    }
                );
            }
        });
    } catch (error) {
        return null;
    }
}



module.exports = Admin;