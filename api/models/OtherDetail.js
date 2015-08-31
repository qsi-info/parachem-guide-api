/**
* OtherDetail.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'SP_GUIDE_AUTRES_DEPENSES_DETAIL',

  attributes: {

		Project: {
			type: 'string',
		},

		WorkOrder: {
			type: 'string',
		},

	  AccountingCode: {
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
	  	type: 'datetime',
	  },

	  WorkOrderDescription: {
	    type: 'string',
	  },


  }

};

