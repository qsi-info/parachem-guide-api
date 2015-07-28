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
	}
	
};

