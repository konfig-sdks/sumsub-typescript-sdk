/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplicantSubmitTransactionDataRequest1Applicant } from './applicant-submit-transaction-data-request1-applicant';
import { ApplicantSubmitTransactionDataRequest1Counterparty } from './applicant-submit-transaction-data-request1-counterparty';
import { ApplicantSubmitTransactionDataRequest1Props } from './applicant-submit-transaction-data-request1-props';
import { ApplicantSubmitTransactionDataRequestInfo } from './applicant-submit-transaction-data-request-info';

/**
 * 
 * @export
 * @interface ApplicantSubmitTransactionDataRequest1
 */
export interface ApplicantSubmitTransactionDataRequest1 {
    /**
     * 
     * @type {ApplicantSubmitTransactionDataRequestInfo}
     * @memberof ApplicantSubmitTransactionDataRequest1
     */
    'info': ApplicantSubmitTransactionDataRequestInfo;
    /**
     * A unique transaction identification number. <br>**Note:** If the specified `txnId` already exists, a `409` error code \"Entity already exists\" is returned. To update an existing transaction, use the [bulk import method](doc:update-transactions-via-bulk-import-method).
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequest1
     */
    'txnId': string;
    /**
     * Date and time when the transaction was initiated (format `yyyy-MM-dd HH:mm:ss+XXXX`, e.g. 2022-11-24 23:37:02+0000).
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequest1
     */
    'txnDate'?: string;
    /**
     * 
     * @type {ApplicantSubmitTransactionDataRequest1Applicant}
     * @memberof ApplicantSubmitTransactionDataRequest1
     */
    'applicant': ApplicantSubmitTransactionDataRequest1Applicant;
    /**
     * 
     * @type {ApplicantSubmitTransactionDataRequest1Counterparty}
     * @memberof ApplicantSubmitTransactionDataRequest1
     */
    'counterparty': ApplicantSubmitTransactionDataRequest1Counterparty;
    /**
     * A transaction type. Expects values: </br> <ul>   <li><code>finance</code>(default)</li>   <li><code>gamblingBet</code></li>   <li><code>gamblingLimitChange</code></li>   <li><code>gamblingBonusChange</code></li>   <li><code>kyc</code></li>   <li><code>travelRule</code></li>   <li><code>userPlatformEvent</code></li>   <ul>     <li><code>login</code></li>     <li><code>signup</code></li>     <li><code>passwordChange</code></li>     <li><code>twoFaReset</code></li>   </ul> </ul>
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequest1
     */
    'type'?: string;
    /**
     * A source key indication to separate access to transactions.
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequest1
     */
    'sourceKey'?: string;
    /**
     * 
     * @type {ApplicantSubmitTransactionDataRequest1Props}
     * @memberof ApplicantSubmitTransactionDataRequest1
     */
    'props'?: ApplicantSubmitTransactionDataRequest1Props;
}

