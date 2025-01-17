/*
Sumsub API

Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { Pageable, PageParametersBase, PageRequest } from "./pageable";

/**
 * The set of parameters that appear in a paginated operation (requestBody or parameters)
 */
export type PageParameterProperties = {
  [key: string]: any
};

export type PageParameters = PageParametersBase<PageParameterProperties>;

/**
 * The set of properties that appear in a paginated operation's response
 */
export interface PageInfo {
  [key: string]: any
}

export class Page<
  Data extends PageInfo,
  Parameters extends PageParameters
> extends Pageable<Data, Parameters> {
  make(parameters: {
    data: Data;
    initialParameters: Parameters;
    request: PageRequest<Data, Parameters>;
  }): Pageable<Data, Parameters> {
    throw new Error("Method not implemented.");
  }

  protected get previousParameters(): PageParameterProperties | null {
    throw Error("Stub")
  }

  protected get nextParameters(): PageParameterProperties | null {
    throw Error("Stub")
  }

  hasPrevious(): boolean {
    throw Error("Stub")
  }

  hasNext(): boolean {
    throw Error("Stub")
  }
}
