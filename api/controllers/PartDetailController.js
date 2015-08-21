/**
 * PartDetailController
 *
 * @description :: Server-side logic for managing Partdetails
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	search: function (req, res) {
		PartDetail
		.find()
		.where(req.body)
		.then(function (founds) {
			res.json(founds);
		})
		.fail(res.serverError);
	},

};

