/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    findall: (req, res) => {
        Users.find({ id: 3 }).exec((err, rs) => {
            if(err) {
                return res.json(err);
            } else {
                return res.json(rs);
            }
        });
    },

    create: (req, res) => {
        console.log(req.body);
        Users.create({ name: req.body.name, app: req.body.app, apm: req.body.apm, password: req.body.password }).then((userCreated) => {
            sails.log('Create user:', user);
            console.log('Create user:', user);
            return res.json(user);
        }).catch((err) => {
            console.log(err);
            return res.json(err);
        });

    }
}

