/**
 * PartController
 *
 * @description :: Server-side logic for managing Parts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	all: function (req, res) {
		Part
		.find()
		.then(function (parts) {
			res.json(parts);
		});
	},


	calculate: function (req, res) {
		Part
		.find()
		.where(req.body)
		.then(function (founds) {
			var acc = 0;
			founds.forEach(function (f) {
				acc += f.Cost;
			})
			return res.json({ total: acc });
		});
	},

};

