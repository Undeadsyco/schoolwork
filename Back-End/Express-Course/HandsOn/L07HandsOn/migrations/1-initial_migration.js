'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2021-03-08T01:15:45.367Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "users",
        {
            "UserId": {
                "type": Sequelize.INTEGER,
                "field": "UserId",
                "primaryKey": true,
                "allowNull": false
            },
            "FirstName": {
                "type": Sequelize.STRING(255),
                "field": "FirstName",
                "allowNull": true
            },
            "LastName": {
                "type": Sequelize.STRING(255),
                "field": "LastName",
                "allowNull": true
            },
            "Email": {
                "type": Sequelize.STRING(255),
                "field": "Email",
                "unique": true,
                "allowNull": true
            },
            "Username": {
                "type": Sequelize.STRING(255),
                "field": "Username",
                "unique": true,
                "allowNull": true
            },
            "Password": {
                "type": Sequelize.STRING(255),
                "field": "Password",
                "allowNull": true
            },
            "Admin": {
                "type": Sequelize.BOOLEAN,
                "field": "Admin",
                "allowNull": true
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
