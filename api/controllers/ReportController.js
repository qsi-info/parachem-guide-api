/**
 * ReportController
 *
 * @description :: Server-side logic for managing Reports
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	all: function (req, res) {
		Report
		.find()
		.then(function (reports) {
			res.json(reports);
		});
	},


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
		});
	},
	
};

