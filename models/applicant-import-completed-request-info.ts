/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplicantImportCompletedRequestInfoAddressesInner } from './applicant-import-completed-request-info-addresses-inner';

/**
 * User\'s personal data
 * @export
 * @interface ApplicantImportCompletedRequestInfo
 */
export interface ApplicantImportCompletedRequestInfo {
    /**
     * The first name of the applicant.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'firstName'?: string;
    /**
     * The last name of the applicant.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'lastName'?: string;
    /**
     * The middle name of the applicant.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'middleName'?: string;
    /**
     * Automatic transliteration of the first name.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'firstNameEn'?: string;
    /**
     * Automatic transliteration of the last name.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'lastNameEn'?: string;
    /**
     * Automatic transliteration of the middle name.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'middleNameEn'?: string;
    /**
     * Legal name.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'legalName'?: string;
    /**
     * An applicant gender (`M` or `F`).
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'gender'?: string;
    /**
     * Applicant date of birth (format `YYYY-mm-dd`, e.g. 2001-09-25).
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'dob'?: string;
    /**
     * The applicant birthplace.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'placeOfBirth'?: string;
    /**
     * Applicant country of birth.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'countryOfBirth'?: string;
    /**
     * Applicant state of birth.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'stateOfBirth'?: string;
    /**
     * Alpha-3 country code (e.g. `DEU` or `GBR`).
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'country'?: string;
    /**
     * Alpha-3 country code.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'nationality'?: string;
    /**
     * List of applicant addresses.
     * @type {Array<ApplicantImportCompletedRequestInfoAddressesInner>}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'addresses'?: Array<ApplicantImportCompletedRequestInfoAddressesInner>;
    /**
     * Tax identification number.
     * @type {string}
     * @memberof ApplicantImportCompletedRequestInfo
     */
    'tin'?: string;
}
