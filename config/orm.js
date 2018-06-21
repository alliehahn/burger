var connection = require("../config/connection.js");

var tableName = "burgers";

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

var orm = {
    all: function(tableName, callback) {
        var s = "SELECT * FROM " + tableName;
        connection.query(s, function(err, result) {
            callback(result);
        })
    },
    update: function(burgers, callback) {
        var s = "UPDATE" + tableName + "SET ate = TRUE";
        connection.query(s, function(err, result) {
            callback(result);
        })
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
}


module.exports = orm;
