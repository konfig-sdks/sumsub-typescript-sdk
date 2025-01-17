/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Transaction institution address.
 * @export
 * @interface ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress
 */
export interface ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress {
    /**
     * Alpha-3 country code.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress
     */
    'country'?: string;
    /**
     * Postal code.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress
     */
    'postCode'?: string;
    /**
     * Town or city name.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress
     */
    'town'?: string;
    /**
     * Street name.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress
     */
    'street'?: string;
    /**
     * Additional street information.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress
     */
    'subStreet'?: string;
    /**
     * State name (if applicable).
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress
     */
    'state'?: string;
    /**
     * Building name (if applicable).
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress
     */
    'buildingName'?: string;
    /**
     * Flat or apartment number.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress
     */
    'flatNumber'?: string;
    /**
     * Building number.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantInstitutionInfoAddress
     */
    'buildingNumber'?: string;
}

