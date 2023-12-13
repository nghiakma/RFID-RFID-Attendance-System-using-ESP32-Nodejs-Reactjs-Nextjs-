var mysql = require('mysql');

var dbConfig = {
    host: '127.0.0.1',
    user:'root',
    port: 3306,
    password:'123456',
    database:'attendance',
};


//#region New Version
var pool = mysql.createPool(dbConfig);

var connection = {
  query: function () {
    var queryArgs = Array.prototype.slice.call(arguments),
      events = [],
      eventNameIndex = {};

    pool.getConnection(function (err, conn) {
      if (err) {
        if (eventNameIndex.error) {
          eventNameIndex.error();
        }
      }
      if (conn) {
        var q = conn.query.apply(conn, queryArgs);
        q.on('end', function () {
          conn.release();
        });

        events.forEach(function (args) {
          q.on.apply(q, args);
        });
      }
    });

    return {
      on: function (eventName, callback) {
        events.push(Array.prototype.slice.call(arguments));
        eventNameIndex[eventName] = callback;
        return this;
      }
    };
  }
};


module.exports = connection;
//#endregion