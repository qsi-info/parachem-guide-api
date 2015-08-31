/**
* PartDetail.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'SP_GUIDE_PIECES_MAGASIN_DETAIL',

  attributes: {

		Project: {
			type: 'string',
		},

		WorkOrder: {
			type: 'string',
		},

		Quantity: {
			type: 'float',
		},

		Price: {
			type: 'float',
		},

		Description: {
			type: 'string',
		},

		DateTime: {
			type: 'datetime'
		},

	  AccountingCode: {
	    type: 'string',
	  },

	  WorkOrderDescription: {
	    type: 'string',
	  },


  }
};

