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
		if (req.body.Company !== undefined && req.body.Company !== '') {
			var company = req.body.Company;
			req.body.Company = { 'like': '%' + company + '%'};
		}

		WorkHour
		.find()
		.where(req.body)
		.then(function (founds) {
			var acc = 0;
			var hours = 0;
			founds.forEach(function (f) {
				acc += f.Cost;
				hours += f.NbHour
			})
			return res.json({ total: acc, hours: hours });
		})
		.fail(function () {
			return res.json({ total: 0 });
		})
	},


	
};

