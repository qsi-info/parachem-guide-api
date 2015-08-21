/**
 * OtherDetailController
 *
 * @description :: Server-side logic for managing Otherdetails
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	search: function (req, res) {
		OtherDetail
		.find()
		.where(req.body)
		.then(function (founds) {
			res.json(founds);
		})
		.fail(res.serverError);

	},

};

