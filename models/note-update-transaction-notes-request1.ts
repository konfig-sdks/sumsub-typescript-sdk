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
 * @interface NoteUpdateTransactionNotesRequest1
 */
export interface NoteUpdateTransactionNotesRequest1 {
    /**
     * [Tags](https://docs.sumsub.com/reference) that you may want to assign.
     * @type {Array<string>}
     * @memberof NoteUpdateTransactionNotesRequest1
     */
    'tags'?: Array<string>;
    /**
     * A unique transaction identifier.
     * @type {string}
     * @memberof NoteUpdateTransactionNotesRequest1
     */
    'txnId': string;
    /**
     * A unique note identifier.
     * @type {string}
     * @memberof NoteUpdateTransactionNotesRequest1
     */
    'id': string;
    /**
     * A new note.
     * @type {string}
     * @memberof NoteUpdateTransactionNotesRequest1
     */
    'note': string;
}
