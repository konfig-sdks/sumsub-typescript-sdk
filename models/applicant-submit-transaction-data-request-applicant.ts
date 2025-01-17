/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplicantSubmitTransactionDataRequestApplicantAddress } from './applicant-submit-transaction-data-request-applicant-address';
import { ApplicantSubmitTransactionDataRequestApplicantDevice } from './applicant-submit-transaction-data-request-applicant-device';
import { ApplicantSubmitTransactionDataRequestApplicantIdDocsInner } from './applicant-submit-transaction-data-request-applicant-id-docs-inner';
import { ApplicantSubmitTransactionDataRequestApplicantInstitutionInfo } from './applicant-submit-transaction-data-request-applicant-institution-info';
import { ApplicantSubmitTransactionDataRequestApplicantPaymentMethod } from './applicant-submit-transaction-data-request-applicant-payment-method';

/**
 * Transaction participant data with mandatory `applicantId` (sender or remitter, depending on `info.direction`).
 * @export
 * @interface ApplicantSubmitTransactionDataRequestApplicant
 */
export interface ApplicantSubmitTransactionDataRequestApplicant {
    /**
     * An external identifier of the transaction participant (applicant or counterparty). Each participant must have a unique identifier that must be reused during all subsequent transactions. Make sure to use the same `externalUserID` for the same counterparty or applicant.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicant
     */
    'externalUserId': string;
    /**
     * Full name of the participant.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicant
     */
    'fullName': string;
    /**
     * Participant entity type: `company` or `individual`. Set to `individual` by default.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicant
     */
    'type': string;
    /**
     * 
     * @type {ApplicantSubmitTransactionDataRequestApplicantAddress}
     * @memberof ApplicantSubmitTransactionDataRequestApplicant
     */
    'address'?: ApplicantSubmitTransactionDataRequestApplicantAddress;
    /**
     * 
     * @type {ApplicantSubmitTransactionDataRequestApplicantInstitutionInfo}
     * @memberof ApplicantSubmitTransactionDataRequestApplicant
     */
    'institutionInfo'?: ApplicantSubmitTransactionDataRequestApplicantInstitutionInfo;
    /**
     * 
     * @type {ApplicantSubmitTransactionDataRequestApplicantPaymentMethod}
     * @memberof ApplicantSubmitTransactionDataRequestApplicant
     */
    'paymentMethod'?: ApplicantSubmitTransactionDataRequestApplicantPaymentMethod;
    /**
     * 
     * @type {ApplicantSubmitTransactionDataRequestApplicantDevice}
     * @memberof ApplicantSubmitTransactionDataRequestApplicant
     */
    'device'?: ApplicantSubmitTransactionDataRequestApplicantDevice;
    /**
     * Data about the user and their documents.
     * @type {Array<ApplicantSubmitTransactionDataRequestApplicantIdDocsInner>}
     * @memberof ApplicantSubmitTransactionDataRequestApplicant
     */
    'idDocs'?: Array<ApplicantSubmitTransactionDataRequestApplicantIdDocsInner>;
}

