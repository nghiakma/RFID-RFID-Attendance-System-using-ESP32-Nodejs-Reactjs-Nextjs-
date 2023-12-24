const { domainToUnicode } = require('url');
const db = require('../commons/connect');

const Admin = function () {}



Admin.handleLogin = function (data, result) {
    try {
        db.query("SELECT *FROM admin", {data}, function (err, table) {
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