/**
* Other.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'SP_GUIDE_AUTRES_DEPENSES',

  attributes: {

		Project: {
			type: 'string',
		},

		WorkOrder: {
			type: 'string',
		},

		Cost: {
			type: 'float',
		},

	  AccountingCode: {
	    type: 'string',
	  },

  }
};

