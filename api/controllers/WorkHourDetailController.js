/**
 * WorkHourDetailController
 *
 * @description :: Server-side logic for managing Workhourdetails
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	search: function (req, res) {
		WorkHourDetail
		.find()
		.where(req.body)
		.then(function (founds) {
			res.json(founds);
		})
		.fail(res.serverError);

	},

};

