/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Transaction information.
 * @export
 * @interface TransactionBulkImportRequestDataInfo
 */
export interface TransactionBulkImportRequestDataInfo {
    /**
     * Can be `out` (applicant sends to counterparty) or `in` (counterparty sends to applicant).
     * @type {string}
     * @memberof TransactionBulkImportRequestDataInfo
     */
    'direction': string;
    /**
     * The amount of funds used in this transaction.
     * @type {number}
     * @memberof TransactionBulkImportRequestDataInfo
     */
    'amount': number;
    /**
     * The amount of funds used in this transaction in the default currency. For more precise calculations, you can submit already converted default currency amount in this field.
     * @type {number}
     * @memberof TransactionBulkImportRequestDataInfo
     */
    'amountInDefaultCurrency'?: number;
    /**
     * Currency code (`USD`, `GBP`, `BTC`, etc).
     * @type {string}
     * @memberof TransactionBulkImportRequestDataInfo
     */
    'currencyCode': string;
    /**
     * The crypto chain name. Mandatory for crypto tokens only. Specifies the network name to which the token at `currencyCode` belongs. Empty for native tokens (e.g. for `BTC`, `ETH`). For more information, see [chain codes](ref:crypto-chain-codes).
     * @type {string}
     * @memberof TransactionBulkImportRequestDataInfo
     */
    'cryptoChain'?: string;
    /**
     * Crypto transaction ID from the blockchain. Required for crypto check requests only.
     * @type {string}
     * @memberof TransactionBulkImportRequestDataInfo
     */
    'paymentTxnId'?: string;
    /**
     * A comment with payment details.
     * @type {string}
     * @memberof TransactionBulkImportRequestDataInfo
     */
    'paymentDetails'?: string;
    /**
     * Accepts any value that helps you categorize transactions. For example, for gambling transactions, you can specify `bonus`, `payroll`, or `cashback`.
     * @type {string}
     * @memberof TransactionBulkImportRequestDataInfo
     */
    'type'?: string;
}

