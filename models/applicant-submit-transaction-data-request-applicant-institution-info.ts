/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress } from './applicant-submit-transaction-data-request-applicant-institution-info-address';

/**
 * Transaction institution information
 * @export
 * @interface ApplicantSubmitTransactionDataRequestApplicantInstitutionInfo
 */
export interface ApplicantSubmitTransactionDataRequestApplicantInstitutionInfo {
    /**
     * Transaction institution code.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfo
     */
    'code'?: string;
    /**
     * Transaction institution name.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfo
     */
    'name'?: string;
    /**
     * 
     * @type {ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfo
     */
    'address'?: ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress;
    /**
     * VASP ID for counterparty transaction. If provided, we trust the exchange and use the expected VASP for transaction approval.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfo
     */
    'internalId'?: string;
}

