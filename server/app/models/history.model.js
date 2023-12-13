const { domainToUnicode } = require('url');
const db = require('../commons/connect');

const History = function () {}

History.all = function (data, result) {
    try {
        var queryString = `SELECT history.id, history.id_card, user.username, history.date_time_in, history.date_time_out FROM history INNER JOIN user ON history.id_card = user.id_card ORDER BY id DESC`;
        
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

History.getLimit = function (data, result) {
    try {
        var queryString = `SELECT history.id, history.id_card, user.username, history.date_time_in, history.date_time_out FROM history INNER JOIN user ON history.id_card = user.id_card ORDER BY id DESC LIMIT ${data.limit}`;
        
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

History.getByCardId = function (data, result) {
    try {
        var queryString = `SELECT history.id, history.id_card, user.username, history.date_time_in, history.date_time_out FROM history INNER JOIN user ON history.id_card = user.id_card WHERE history.id_card = "${data.id_card}" AND history.date_time_in BETWEEN '${data.from}' AND '${data.to}' ORDER BY history.id DESC LIMIT 1`;
        
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

History.filter = function (from, to, sort, result) {
    try {
        var queryString = `SELECT history.id, history.id_card, user.username, history.date_time_in, history.date_time_out FROM history INNER JOIN user ON history.id_card = user.id_card WHERE date_time_in BETWEEN '${from}' AND '${to}' ORDER BY id ${sort}`;
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

History.add = function (data, result) {
    try {
        db.query("INSERT INTO history SET ?", data, function (err, table) {
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

History.update = function (data, result) {
    try {
        db.query("UPDATE history SET ? WHERE id = ?", data, function (err, table) {
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

History.delete = function (id, result) {
    try {
        db.query(`DELETE FROM history WHERE id = ?`, id, function (err, table) {
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

module.exports = History;