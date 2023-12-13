var User = require('../models/user.model');

exports.all = function (req, res) {
    var data = req.body;
    User.all(data, function (response) {
        res.send({ result: response });
    });
}

exports.getByIdCard = function (req, res) {
    var id_card = req.params.id_card;
    User.getByIdCard(id_card, function (response) {
        res.send({ result: response });
    });
}

exports.add = function (req, res) {
    var data = req.body;
    User.add(data, function (response) {
        res.send({ result: response });
    });
};

exports.delete = function (req, res) {
    var id = req.params.id;
    User.delete(id, function (response) {
        res.send({ result: response });
    });
};

exports.update = function (req, res) {
    var data = req.body;
    User.update(data, function (response) {
        res.send({ result: response });
    });
};