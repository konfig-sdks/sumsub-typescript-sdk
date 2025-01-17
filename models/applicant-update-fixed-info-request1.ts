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
 * @interface ApplicantUpdateFixedInfoRequest1
 */
export interface ApplicantUpdateFixedInfoRequest1 {
    /**
     * The first name of the applicant.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'firstName'?: string;
    /**
     * The last name of the applicant.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'lastName'?: string;
    /**
     * The middle name of the applicant.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'middleName'?: string;
    /**
     * Automatic transliteration of the first name.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'firstNameEn'?: string;
    /**
     * Automatic transliteration of the last name.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'lastNameEn'?: string;
    /**
     * Automatic transliteration of the middle name.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'middleNameEn'?: string;
    /**
     * Legal name.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'legalName'?: string;
    /**
     * An applicant gender (`M` or `F`).
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'gender'?: string;
    /**
     * Applicant date of birth (format `YYYY-mm-dd`, e.g. 2001-09-25).
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'dob'?: string;
    /**
     * The applicant birthplace.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'placeOfBirth'?: string;
    /**
     * Applicant country of birth.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'countryOfBirth'?: string;
    /**
     * Applicant state of birth.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'stateOfBirth'?: string;
    /**
     * Alpha-3 country code (e.g. `DEU` or `GBR`).
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'country'?: string;
    /**
     * Alpha-3 country code.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'nationality'?: string;
    /**
     * List of applicant addresses.
     * @type {Array<any>}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'addresses'?: Array<any>;
    /**
     * Tax identification number.
     * @type {string}
     * @memberof ApplicantUpdateFixedInfoRequest1
     */
    'tin'?: string;
}

