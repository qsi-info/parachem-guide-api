/**
 * ReportController
 *
 * @description :: Server-side logic for managing Reports
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


	search: function (req, res) {
		if (req.body.Company !== undefined && req.body.Company !== '') {
			var company = req.body.Company;
			req.body.Company = { 'like': '%' + company + '%'};
		}

		Report
		.find()
		.where(req.body)
		.then(function (reports) {
			res.json(reports);
		})
		.fail(res.serverError);
	},


	calculate: function (req, res) {
		Report
		.find()
		.where(req.body)
		.then(function (founds) {
			var acc = 0;
			founds.forEach(function (f) {
				acc += f.Price;
			})
			return res.json({ total: acc });
		})
		.fail(function () {
			return res.json({ total: 0 });
		})
	}
	
};

