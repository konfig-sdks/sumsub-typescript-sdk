/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An object representing an ID document.
 * @export
 * @interface ApplicantAddIdDocumentRequestMetadata
 */
export interface ApplicantAddIdDocumentRequestMetadata {
    /**
     * A document type.
     * @type {string}
     * @memberof ApplicantAddIdDocumentRequestMetadata
     */
    'idDocType': string;
    /**
     * `FRONT_SIDE`, `BACK_SIDE` or `null`.
     * @type {string}
     * @memberof ApplicantAddIdDocumentRequestMetadata
     */
    'idDocSubType'?: string;
    /**
     * ISO 3166-1 alpha-3 country code.
     * @type {string}
     * @memberof ApplicantAddIdDocumentRequestMetadata
     */
    'country': string;
    /**
     * The first applicant name.
     * @type {string}
     * @memberof ApplicantAddIdDocumentRequestMetadata
     */
    'firstName'?: string;
    /**
     * The middle applicant name.
     * @type {string}
     * @memberof ApplicantAddIdDocumentRequestMetadata
     */
    'middleName'?: string;
    /**
     * The last applicant name.
     * @type {string}
     * @memberof ApplicantAddIdDocumentRequestMetadata
     */
    'lastName'?: string;
    /**
     * Issued date (format `YYYY-mm-dd`, e.g. 2001-09-25).
     * @type {string}
     * @memberof ApplicantAddIdDocumentRequestMetadata
     */
    'issuedDate'?: string;
    /**
     * Valid until date (format `YYYY-mm-dd`, e.g. 2001-09-26).
     * @type {string}
     * @memberof ApplicantAddIdDocumentRequestMetadata
     */
    'validUntil'?: string;
    /**
     * A document number.
     * @type {string}
     * @memberof ApplicantAddIdDocumentRequestMetadata
     */
    'number'?: string;
    /**
     * The applicant date of birth.
     * @type {string}
     * @memberof ApplicantAddIdDocumentRequestMetadata
     */
    'dob'?: string;
    /**
     * The applicant birthplace.
     * @type {string}
     * @memberof ApplicantAddIdDocumentRequestMetadata
     */
    'placeOfBirth'?: string;
}

