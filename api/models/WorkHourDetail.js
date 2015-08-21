/**
* WorkHourDetail.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'SP_GUIDE_MO_DETAIL',

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

	  NbHour: {
	  	type: 'float',
	  },

	  Rate: {
	  	type: 'float',
	  },

	  FirstName: {
	  	type: 'string',
	  },

	  LastName: {
	  	type: 'string',
	  },

	  DateTime: {
	  	type: 'datetime',
	  },

  }
  
};

