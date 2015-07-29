/**
* Report.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'SP_GUIDE_MISSING_REPORT',

  attributes: {

  	Project: {
  		type: 'string',
  	},

  	WorkOrder: {
  		type: 'string',
  	},

  	Requisition: {
  		type: 'string',
  	},

  	PurchaseOrder: {
  		type: 'string',
  	},

  	Company: {
  		type: 'string',
  	},

  	Description: {
  		type: 'text',
  	},

  	Price: {
  		type: 'float',
  	},

    AccountingCode: {
      type: 'string',
    },

  }
};

