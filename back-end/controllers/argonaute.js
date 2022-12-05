require('dotenv').config();
const Argonaute = require('../models/Argonaute');

exports.createArgonaute = async (req, res, next) => {
    const argonaute = new Argonaute({ ...req.body })

    argonaute.save()
        .then(() => res.status(201).json({ message: 'New argonaute registered in database' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllArgonautes = (req, res, next) => {
    Argonaute.find()
        .then(members => res.status(200).json(members))
        .catch(error => res.status(400).json({ error }));
};




