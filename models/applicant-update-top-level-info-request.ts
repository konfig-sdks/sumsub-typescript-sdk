/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ApplicantUpdateTopLevelInfoRequest
 */
export interface ApplicantUpdateTopLevelInfoRequest {
    /**
     * A unique applicant identifier.
     * @type {string}
     * @memberof ApplicantUpdateTopLevelInfoRequest
     */
    'id': string;
    /**
     * An external applicant identifier.
     * @type {string}
     * @memberof ApplicantUpdateTopLevelInfoRequest
     */
    'externalUserId'?: string;
    /**
     * A new email address that you want to assign to the given applicant.
     * @type {string}
     * @memberof ApplicantUpdateTopLevelInfoRequest
     */
    'email'?: string;
    /**
     * A new phone number that you want to assign to the given applicant.
     * @type {string}
     * @memberof ApplicantUpdateTopLevelInfoRequest
     */
    'phone'?: string;
    /**
     * A new [source key](https://docs.sumsub.com/reference) that you want to assign to the given applicant.
     * @type {string}
     * @memberof ApplicantUpdateTopLevelInfoRequest
     */
    'sourceKey'?: string;
    /**
     * The language, in which the applicant should see the verification results.
     * @type {string}
     * @memberof ApplicantUpdateTopLevelInfoRequest
     */
    'lang'?: string;
    /**
     * A [questionnaire](https://docs.sumsub.com/reference) configuration with answers.
     * @type {Array<any>}
     * @memberof ApplicantUpdateTopLevelInfoRequest
     */
    'questionnaires'?: Array<any>;
    /**
     * Additional information about the applicant.
     * @type {Array<any>}
     * @memberof ApplicantUpdateTopLevelInfoRequest
     */
    'metadata'?: Array<any>;
    /**
     * Marks an applicant as inactive if set to `true`. The applicant will not be considered a duplicate. SDKs will not initiate checks for this applicant.
     * @type {boolean}
     * @memberof ApplicantUpdateTopLevelInfoRequest
     */
    'deleted'?: boolean;
}

