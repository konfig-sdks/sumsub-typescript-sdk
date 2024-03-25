/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplicantAddBeneficiaryRequestApplicant } from './applicant-add-beneficiary-request-applicant';

/**
 * 
 * @export
 * @interface ApplicantAddBeneficiaryRequest
 */
export interface ApplicantAddBeneficiaryRequest {
    /**
     * 
     * @type {ApplicantAddBeneficiaryRequestApplicant}
     * @memberof ApplicantAddBeneficiaryRequest
     */
    'applicant': ApplicantAddBeneficiaryRequestApplicant;
    /**
     * Beneficiary applicant identified.
     * @type {string}
     * @memberof ApplicantAddBeneficiaryRequest
     */
    'applicantId': string;
    /**
     * The list of positions in the company (`[\"director\", \"shareholder\", \"other\"]`).
     * @type {Array<string>}
     * @memberof ApplicantAddBeneficiaryRequest
     */
    'positions'?: Array<string>;
    /**
     * Type of beneficiary: `ubo`, `shareholder`, `representative`.
     * @type {string}
     * @memberof ApplicantAddBeneficiaryRequest
     */
    'type': string;
}

