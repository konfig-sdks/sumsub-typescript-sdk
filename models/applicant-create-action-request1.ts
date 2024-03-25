/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplicantCreateActionRequestPaymentMethod } from './applicant-create-action-request-payment-method';

/**
 * 
 * @export
 * @interface ApplicantCreateActionRequest1
 */
export interface ApplicantCreateActionRequest1 {
    /**
     * An external action ID which will be bound to the token.
     * @type {string}
     * @memberof ApplicantCreateActionRequest1
     */
    'externalActionId': string;
    /**
     * 
     * @type {ApplicantCreateActionRequestPaymentMethod}
     * @memberof ApplicantCreateActionRequest1
     */
    'paymentMethod'?: ApplicantCreateActionRequestPaymentMethod;
    /**
     * Applicant email address.
     * @type {string}
     * @memberof ApplicantCreateActionRequest1
     */
    'email'?: string;
    /**
     * Applicant phone number.
     * @type {string}
     * @memberof ApplicantCreateActionRequest1
     */
    'phone'?: string;
}
