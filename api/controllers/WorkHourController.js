/**
 * WorkHourController
 *
 * @description :: Server-side logic for managing Workhours
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	all: function (req, res) {
		WorkHour
		.find()
		.then(function (founds) {
			res.json(founds);
		});
	},

	calculate: function (req, res) {
		WorkHour
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

