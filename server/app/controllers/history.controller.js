var History = require('../models/history.model');

exports.all = function (req, res) {
    var data = req.body;
    History.all(data, function (response) {
        res.send({ result: response });
    });
}

exports.getLimit = function (req, res) {
    var data = {limit: req.params.limit};
    History.getLimit(data, function (response) {
        res.send({ result: response });
    });
}

exports.getByCardId = function (req, res) {
    var data = {
        id_card: req.params.id_card,
        from: req.params.from,
        to: req.params.to
    };
    History.getByCardId(data, function (response) {
        res.send({ result: response });
    });
}

exports.filter = function (req, res) {
    var from = req.params.from;
    var to = req.params.to;
    var sort = req.params.sort;
    History.filter(from, to, sort, function (response) {
        res.send({ result: response });
    });
}

exports.add = function (req, res) {
    var data = req.body;
    History.add(data, function (response) {
        res.send({ result: response });
    });
};

exports.delete = function (req, res) {
    var id = req.params.id;
    History.delete(id, function (response) {
        res.send({ result: response });
    });
};

exports.update = function (req, res) {
    var data = req.body;
    History.update(data, function (response) {
        res.send({ result: response });
    });
};