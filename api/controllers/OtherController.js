/**
 * OtherController
 *
 * @description :: Server-side logic for managing Others
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	

	all: function (req, res) {
		Other
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

		Other
		.find()
		.where(req.body)
		.then(function (founds) {
			var acc = 0;
			founds.forEach(function (f) {
				acc += f.Cost;
			})
			return res.json({ total: acc });
		})
		.fail(function () {
			return res.json({ total: 0 });
		})
	},

};

