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
 * @interface ApplicantCreateCryptoSourceOfFundsRequest1
 */
export interface ApplicantCreateCryptoSourceOfFundsRequest1 {
    /**
     * `BTC`, `ETH`, `BCH`, `LTC`, `USDT`, `ERC-20`, `BSV`, `XLM`, ...
     * @type {string}
     * @memberof ApplicantCreateCryptoSourceOfFundsRequest1
     */
    'currency': string;
    /**
     * Operation type. Can be `withdrawal` or `deposit`.
     * @type {string}
     * @memberof ApplicantCreateCryptoSourceOfFundsRequest1
     */
    'direction': string;
    /**
     * Transaction hash. For `withdrawals`, `txn` should not be set at all or set to `null`.
     * @type {string}
     * @memberof ApplicantCreateCryptoSourceOfFundsRequest1
     */
    'txn'?: string;
    /**
     * Target address hash.
     * @type {string}
     * @memberof ApplicantCreateCryptoSourceOfFundsRequest1
     */
    'address': string;
    /**
     * Check the [Get available tokens](ref:get-available-tokens) method to get the full list of available currencies and token IDs.
     * @type {string}
     * @memberof ApplicantCreateCryptoSourceOfFundsRequest1
     */
    'tokenId'?: string;
}

