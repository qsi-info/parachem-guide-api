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

    PricePO: {
      type: 'float',
    },

    AccountingCode: {
      type: 'string',
    },

    WorkOrderDescription: {
      type: 'string',
    },

  }
};


/*
SELECT 
  PROJECT.PRO_CODE as 'Project',
  WORK_ORDER.WOR_NO as 'WorkOrder',
  REQUISITION.RQS_NO as 'Requisition',
  PURCHASE_ORDER.POR_NO as 'PurchaseOrder',
  RESOURCE_CODE.RES_LAST_NAME as 'Company',
  PURCHASE_ORDER_DETAIL.PAR_DESCR as 'Description',
  PURCHASE_ORDER_DETAIL.PAR_COST as 'Price',
  ACCOUNTING_CODE.ACC_CODE as 'AccountingCode'
  
FROM REQUISITION_DETAIL

  INNER JOIN PURCHASE_ORDER_DETAIL ON REQUISITION_DETAIL.POD_ID = PURCHASE_ORDER_DETAIL.POD_ID
  INNER JOIN REQUISITION ON REQUISITION_DETAIL.RQS_ID = REQUISITION.RQS_ID
  INNER JOIN WORK_ORDER ON REQUISITION_DETAIL.WOR_ID = WORK_ORDER.WOR_ID
  INNER JOIN PROJECT ON WORK_ORDER.PRO_ID = PROJECT.PRO_ID
  INNER JOIN RESOURCE_CODE ON REQUISITION_DETAIL.RES_ID= RESOURCE_CODE.RES_ID
  INNER JOIN PURCHASE_ORDER ON PURCHASE_ORDER_DETAIL.POR_ID = PURCHASE_ORDER.POR_ID
  INNER JOIN ACCOUNTING_CODE ON PURCHASE_ORDER_DETAIL.ACC_ID = ACCOUNTING_CODE.ACC_ID
  */

