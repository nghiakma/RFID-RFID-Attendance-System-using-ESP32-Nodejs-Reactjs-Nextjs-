const { domainToUnicode } = require('url');
const db = require('../commons/connect');

const User = function () {}

User.all = function (data, result) {
    try {
        var queryString = `SELECT * FROM user ORDER BY id DESC`;
        
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

User.getByIdCard = function (id_card, result) {
    try {
        var queryString = `SELECT * FROM user WHERE id_card = ${id_card} ORDER BY id DESC`;
        
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

User.add = function (data, result) {
    try {
        db.query("INSERT INTO user SET ?", data, function (err, table) {
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
                        "data": { id: table.insertId, ...data },
                        "message": null
                    }
                );
            }
        });
    } catch (error) {
        return null;
    }
}

User.update = function (data, result) {
    try {
        db.query("UPDATE user SET ? WHERE id = ?", data, function (err, table) {
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
                        "data": { data },
                        "message": null
                    }
                );
            }
        });
    } catch (error) {
        return null;
    }
}

User.delete = function (id, result) {
    try {
        db.query(`DELETE FROM user WHERE id = ?`, id, function (err, table) {
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

module.exports = User;