/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplicantSubmitTransactionDataRequestInfo } from './applicant-submit-transaction-data-request-info';
import { ApplicantSubmitTransactionForNonExistingRequest1Applicant } from './applicant-submit-transaction-for-non-existing-request1-applicant';
import { ApplicantSubmitTransactionForNonExistingRequest1Counterparty } from './applicant-submit-transaction-for-non-existing-request1-counterparty';

/**
 * 
 * @export
 * @interface ApplicantSubmitTransactionForNonExistingRequest1
 */
export interface ApplicantSubmitTransactionForNonExistingRequest1 {
    /**
     * 
     * @type {ApplicantSubmitTransactionDataRequestInfo}
     * @memberof ApplicantSubmitTransactionForNonExistingRequest1
     */
    'info': ApplicantSubmitTransactionDataRequestInfo;
    /**
     * A unique transaction identification number.
     * @type {string}
     * @memberof ApplicantSubmitTransactionForNonExistingRequest1
     */
    'txnId': string;
    /**
     * Date and time when the transaction was initiated (format `yyyy-MM-dd HH:mm:ss+XXXX`, e.g. 2022-11-24 23:37:02+0000).
     * @type {string}
     * @memberof ApplicantSubmitTransactionForNonExistingRequest1
     */
    'txnDate'?: string;
    /**
     * Transaction properties. Map of strings (JSON) of custom keys and string values.
     * @type {object}
     * @memberof ApplicantSubmitTransactionForNonExistingRequest1
     */
    'props'?: object;
    /**
     * 
     * @type {ApplicantSubmitTransactionForNonExistingRequest1Applicant}
     * @memberof ApplicantSubmitTransactionForNonExistingRequest1
     */
    'applicant': ApplicantSubmitTransactionForNonExistingRequest1Applicant;
    /**
     * 
     * @type {ApplicantSubmitTransactionForNonExistingRequest1Counterparty}
     * @memberof ApplicantSubmitTransactionForNonExistingRequest1
     */
    'counterparty': ApplicantSubmitTransactionForNonExistingRequest1Counterparty;
    /**
     * A transaction type. Expects values: </br> <ul>   <li><code>finance</code>(default)</li>   <li><code>gamblingBet</code></li>   <li><code>gamblingLimitChange</code></li>   <li><code>gamblingBonusChange</code></li>   <li><code>kyc</code></li>   <li><code>travelRule</code></li>   <li><code>userPlatformEvent</code></li>   <ul>     <li><code>login</code></li>     <li><code>signup</code></li>     <li><code>passwordChange</code></li>     <li><code>twoFaReset</code></li>   </ul> </ul>
     * @type {string}
     * @memberof ApplicantSubmitTransactionForNonExistingRequest1
     */
    'type'?: string;
    /**
     * A source key indication to separate access to transactions.
     * @type {string}
     * @memberof ApplicantSubmitTransactionForNonExistingRequest1
     */
    'sourceKey'?: string;
}

