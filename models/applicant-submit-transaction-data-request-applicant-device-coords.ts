/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Coordinates.
 * @export
 * @interface ApplicantSubmitTransactionDataRequestApplicantDeviceCoords
 */
export interface ApplicantSubmitTransactionDataRequestApplicantDeviceCoords {
    /**
     * Position latitude in decimal degrees.
     * @type {number}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantDeviceCoords
     */
    'lat'?: number;
    /**
     * Position longitude in decimal degrees.
     * @type {number}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantDeviceCoords
     */
    'lon'?: number;
    /**
     * Accuracy of the latitude and longitude properties, expressed in meters. #
     * @type {string}
     * @memberof ApplicantSubmitTransactionDataRequestApplicantDeviceCoords
     */
    'accuracy'?: string;
}
