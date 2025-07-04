import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Associar Cartão com Comprador [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Associar cartão com comprador
     * @throws FetchError<404, types.PostV1MarketplacesMarketplaceIdCardsResponse404> Cartão associado sem sucesso
     */
    postV1MarketplacesMarketplace_idCards(body: types.PostV1MarketplacesMarketplaceIdCardsBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdCardsMetadataParam): Promise<FetchResponse<200, types.PostV1MarketplacesMarketplaceIdCardsResponse200>>;
    /**
     * Listar Detalhes de Cartão [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de cartão pelo identificador
     * @throws FetchError<404, types.GetV1MarketplacesMarketplaceIdCardsCardIdResponse404> Cartão recuperado com sucesso
     */
    getV1MarketplacesMarketplace_idCardsCard_id(metadata: types.GetV1MarketplacesMarketplaceIdCardsCardIdMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdCardsCardIdResponse200>>;
    /**
     * Remover Cartão [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Remover cartão pelo identificador
     * @throws FetchError<404, types.DeleteV1MarketplacesMarketplaceIdCardsCardIdResponse404> Cartão removido sem sucesso
     */
    deleteV1MarketplacesMarketplace_idCardsCard_id(metadata: types.DeleteV1MarketplacesMarketplaceIdCardsCardIdMetadataParam): Promise<FetchResponse<200, types.DeleteV1MarketplacesMarketplaceIdCardsCardIdResponse200>>;
    /**
     * Criar transação [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Criar transação
     * @throws FetchError<400, types.PostV1MarketplacesMarketplaceIdTransactionsResponse400> Bad Request
     * @throws FetchError<403, types.PostV1MarketplacesMarketplaceIdTransactionsResponse403> Forbidden
     * @throws FetchError<422, types.PostV1MarketplacesMarketplaceIdTransactionsResponse422> Request Failed
     * @throws FetchError<429, types.PostV1MarketplacesMarketplaceIdTransactionsResponse429> Bad Request
     */
    postV1MarketplacesMarketplace_idTransactions(body: types.PostV1MarketplacesMarketplaceIdTransactionsBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdTransactionsMetadataParam): Promise<FetchResponse<201, types.PostV1MarketplacesMarketplaceIdTransactionsResponse201>>;
    postV1MarketplacesMarketplace_idTransactions(metadata: types.PostV1MarketplacesMarketplaceIdTransactionsMetadataParam): Promise<FetchResponse<201, types.PostV1MarketplacesMarketplaceIdTransactionsResponse201>>;
    /**
     * Listar transações do marketplace
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar transações do marketplace
     */
    getV1MarketplacesMarketplace_idTransactions(metadata: types.GetV1MarketplacesMarketplaceIdTransactionsMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdTransactionsResponse200>>;
    /**
     * Listar transações por vendedor
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar transações por vendedor
     */
    getV1MarketplacesMarketplace_idSellersSeller_idTransactions(metadata: types.GetV1MarketplacesMarketplaceIdSellersSellerIdTransactionsMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdSellersSellerIdTransactionsResponse200>>;
    /**
     * Listar detalhes de transação pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de transação pelo identificador
     */
    getV1MarketplacesMarketplace_idTransactionsTransaction_id(metadata: types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdResponse200>>;
    /**
     * Alterar detalhes de transação pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Alterar detalhes de transação pelo identificador
     */
    putV1MarketplacesMarketplace_idTransactionsTransaction_id(body: types.PutV1MarketplacesMarketplaceIdTransactionsTransactionIdBodyParam, metadata: types.PutV1MarketplacesMarketplaceIdTransactionsTransactionIdMetadataParam): Promise<FetchResponse<200, types.PutV1MarketplacesMarketplaceIdTransactionsTransactionIdResponse200>>;
    /**
     * Estornar transação [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Estornar transação
     * @throws FetchError<400, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdVoidResponse400> Requisição/Parametros inválidos
     * @throws FetchError<402, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdVoidResponse402> Saldo insuficiente
     * @throws FetchError<404, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdVoidResponse404> Marketplace/Transação não encontrado
     */
    postV1MarketplacesMarketplace_idTransactionsTransaction_idVoid(body: types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdVoidBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdVoidMetadataParam): Promise<FetchResponse<200, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdVoidResponse200>>;
    /**
     * Disponibilizar link carta de cancelamento
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Disponibilizar link carta de cancelamento
     * @throws FetchError<513, types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdCancelledLetterResponse513> Transação não encontrada
     */
    getV1MarketplacesMarketplace_idTransactionsTransaction_idCancelledLetter(metadata: types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdCancelledLetterMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdCancelledLetterResponse200>>;
    /**
     * Capturar transação cartão não presente
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Capturar transação cartão não presente
     */
    postV1MarketplacesMarketplace_idTransactionsTransaction_idCapture(body: types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdCaptureBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdCaptureMetadataParam): Promise<FetchResponse<200, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdCaptureResponse200>>;
    /**
     * Criar source para utilização transação
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Criar source para utilização transação
     */
    postV1MarketplacesMarketplace_idSources(body: types.PostV1MarketplacesMarketplaceIdSourcesBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdSourcesMetadataParam): Promise<FetchResponse<201, types.PostV1MarketplacesMarketplaceIdSourcesResponse201>>;
    /**
     * Listar detalhes de source pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de source pelo identificador
     */
    getV1MarketplacesMarketplace_idSourcesSource_id(metadata: types.GetV1MarketplacesMarketplaceIdSourcesSourceIdMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdSourcesSourceIdResponse200>>;
    /**
     * Remover source pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Remover source pelo identificador
     */
    deleteV1MarketplacesMarketplace_idSourcesSource_id(metadata: types.DeleteV1MarketplacesMarketplaceIdSourcesSourceIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Enviar cobrança de boleto por email
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Enviar cobrança de boleto por email
     * @throws FetchError<404, types.PostV1MarketplacesMarketplaceIdBoletosBoletoIdEmailsResponse404> Boleto não enviado por email
     */
    postV1MarketplacesMarketplace_idBoletosBoleto_idEmails(metadata: types.PostV1MarketplacesMarketplaceIdBoletosBoletoIdEmailsMetadataParam): Promise<FetchResponse<200, types.PostV1MarketplacesMarketplaceIdBoletosBoletoIdEmailsResponse200>>;
    /**
     * Listar detalhes de boleto [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de boleto
     * @throws FetchError<404, types.GetV1MarketplacesMarketplaceIdBoletosBoletoIdResponse404> Marketplace/Boleto não encontrado
     */
    getV1MarketplacesMarketplace_idBoletosBoleto_id(metadata: types.GetV1MarketplacesMarketplaceIdBoletosBoletoIdMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdBoletosBoletoIdResponse200>>;
    /**
     * Aprovar boleto (somente sandbox)
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Aprovar boleto (somente sandbox)
     * @throws FetchError<404, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdApproveResponse404> Marketplace/Boleto não encontrado
     */
    postV1MarketplacesMarketplace_idTransactionsTransaction_idApprove(metadata: types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdApproveMetadataParam): Promise<FetchResponse<200, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdApproveResponse200>>;
    /**
     * Solicitar cancelamento de boleto
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Solicitar cancelamento de boleto
     * @throws FetchError<422, types.PostV1BoletosCancellationMarketplacesMarketplaceIdTransactionsTransactionIdResponse422> Inválido
     * @throws FetchError<500, types.PostV1BoletosCancellationMarketplacesMarketplaceIdTransactionsTransactionIdResponse500> Erro não esperadp
     */
    postV1BoletosCancellationMarketplacesMarketplace_idTransactionsTransaction_id(metadata: types.PostV1BoletosCancellationMarketplacesMarketplaceIdTransactionsTransactionIdMetadataParam): Promise<FetchResponse<202, types.PostV1BoletosCancellationMarketplacesMarketplaceIdTransactionsTransactionIdResponse202>>;
    /**
     * Parear terminal POS  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Parear terminal POS
     */
    postV1MarketplacesMarketplace_idTerminalsPairing(body: types.PostV1MarketplacesMarketplaceIdTerminalsPairingBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdTerminalsPairingMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Buscar informações sobre terminal
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Buscar informações sobre terminal
     */
    getV1CardPresentTerminalsIdentification_number(metadata: types.GetV1CardPresentTerminalsIdentificationNumberMetadataParam): Promise<FetchResponse<200, types.GetV1CardPresentTerminalsIdentificationNumberResponse200>>;
    /**
     * Buscar terminal por serial number
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Buscar terminal por serial number
     */
    getV1CardPresentTerminalsSearch(metadata: types.GetV1CardPresentTerminalsSearchMetadataParam): Promise<FetchResponse<200, types.GetV1CardPresentTerminalsSearchResponse200>>;
    /**
     * Criar Split por transação ou Multiplos Splits
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Criar Split por transação ou Multiplos Splits
     * @throws FetchError<409, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesResponse409> Regra de consistência da transação e recebiveis
     */
    postV1MarketplacesMarketplace_idTransactionsTransaction_idSplit_rules(body: types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesMetadataParam): Promise<FetchResponse<200, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesResponse200>>;
    postV1MarketplacesMarketplace_idTransactionsTransaction_idSplit_rules(metadata: types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesMetadataParam): Promise<FetchResponse<200, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesResponse200>>;
    /**
     * Listar detalhes de Split por transação
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de Split por transação
     */
    getV1MarketplacesMarketplace_idTransactionsTransaction_idSplit_rules(metadata: types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Recupera detalhes de Split por ID
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Recupera detalhes de Split por ID
     */
    getV1MarketplacesMarketplace_idTransactionsTransaction_idSplit_rulesId(metadata: types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remover Split por transação  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Remover Split por transação
     */
    deleteV1MarketplacesMarketplace_idTransactionsTransaction_idSplit_rulesId(metadata: types.DeleteV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Criar um plano [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Criar um plano
     */
    postV1MarketplacesMarketplace_idRecurrence_plans(body: types.PostV1MarketplacesMarketplaceIdRecurrencePlansBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdRecurrencePlansMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Listar planos por marketplace [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar planos por marketplace
     */
    getV1MarketplacesMarketplace_idRecurrence_plans(metadata: types.GetV1MarketplacesMarketplaceIdRecurrencePlansMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdRecurrencePlansResponse200>>;
    /**
     * Recupera um plano pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Recupera um plano pelo identificador
     */
    getV1MarketplacesMarketplace_idRecurrence_plansPlan_id(metadata: types.GetV1MarketplacesMarketplaceIdRecurrencePlansPlanIdMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdRecurrencePlansPlanIdResponse200>>;
    /**
     * Alterar plano pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Alterar plano pelo identificador
     */
    putV1MarketplacesMarketplace_idRecurrence_plansPlan_id(body: types.PutV1MarketplacesMarketplaceIdRecurrencePlansPlanIdBodyParam, metadata: types.PutV1MarketplacesMarketplaceIdRecurrencePlansPlanIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletar um plano pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Deletar um plano pelo identificador
     */
    deleteV1MarketplacesMarketplace_idRecurrence_plansPlan_id(metadata: types.DeleteV1MarketplacesMarketplaceIdRecurrencePlansPlanIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Criar uma assinatura  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Criar uma assinatura
     */
    postV1MarketplacesMarketplace_idRecurrence_subscriptions(body: types.PostV1MarketplacesMarketplaceIdRecurrenceSubscriptionsBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdRecurrenceSubscriptionsMetadataParam): Promise<FetchResponse<201, types.PostV1MarketplacesMarketplaceIdRecurrenceSubscriptionsResponse201>>;
    postV1MarketplacesMarketplace_idRecurrence_subscriptions(metadata: types.PostV1MarketplacesMarketplaceIdRecurrenceSubscriptionsMetadataParam): Promise<FetchResponse<201, types.PostV1MarketplacesMarketplaceIdRecurrenceSubscriptionsResponse201>>;
    /**
     * Listar todas as assinaturas de um marketplace
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar todas as assinaturas de um marketplace
     */
    getV1MarketplacesMarketplace_idRecurrence_subscriptions(metadata: types.GetV1MarketplacesMarketplaceIdRecurrenceSubscriptionsMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdRecurrenceSubscriptionsResponse200>>;
    /**
     * Listar todas as assinaturas de um seller
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar todas as assinaturas de um seller
     */
    getV1MarketplacesMarketplace_idSellersSeller_idSubscriptions(metadata: types.GetV1MarketplacesMarketplaceIdSellersSellerIdSubscriptionsMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdSellersSellerIdSubscriptionsResponse200>>;
    /**
     * Listar os detalhes de uma assinatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar os detalhes de uma assinatura pelo identificador
     */
    getV1MarketplacesMarketplace_idRecurrence_subscriptionsSubscription_id(metadata: types.GetV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdResponse200>>;
    /**
     * Alterar os detalhes de uma assinatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Alterar os detalhes de uma assinatura pelo identificador
     */
    putV1MarketplacesMarketplace_idRecurrence_subscriptionsSubscription_id(body: types.PutV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdBodyParam, metadata: types.PutV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    putV1MarketplacesMarketplace_idRecurrence_subscriptionsSubscription_id(metadata: types.PutV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remover uma assinatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Remover uma assinatura pelo identificador
     */
    deleteV1MarketplacesMarketplace_idRecurrence_subscriptionsSubscription_id(metadata: types.DeleteV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Suspender uma assinatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Suspender uma assinatura pelo identificador
     */
    postV1MarketplacesMarketplace_idRecurrence_subscriptionsSubscription_idSuspend(metadata: types.PostV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdSuspendMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Reativa uma assinatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Reativa uma assinatura pelo identificador
     */
    postV1MarketplacesMarketplace_idRecurrence_subscriptionsSubscription_idReactivate(metadata: types.PostV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdReactivateMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Criar uma fatura avulsa [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Criar uma fatura avulsa
     */
    postV1MarketplacesMarketplace_idInvoices(body: types.PostV1MarketplacesMarketplaceIdInvoicesBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdInvoicesMetadataParam): Promise<FetchResponse<number, unknown>>;
    postV1MarketplacesMarketplace_idInvoices(metadata: types.PostV1MarketplacesMarketplaceIdInvoicesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Listar todas as faturas de um marketplace
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar todas as faturas de um marketplace
     */
    getV1MarketplacesMarketplace_idInvoices(metadata: types.GetV1MarketplacesMarketplaceIdInvoicesMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdInvoicesResponse200>>;
    /**
     * Listar os detalhes de uma fatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar os detalhes de uma fatura pelo identificador
     */
    getV1MarketplacesMarketplace_idInvoicesInvoice_id(metadata: types.GetV1MarketplacesMarketplaceIdInvoicesInvoiceIdMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdInvoicesInvoiceIdResponse200>>;
    /**
     * Remover uma fatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Remover uma fatura pelo identificador
     */
    deleteV1MarketplacesMarketplace_idInvoicesInvoice_id(metadata: types.DeleteV1MarketplacesMarketplaceIdInvoicesInvoiceIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Aprovar fatura pendente [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Aprovar fatura pendente
     */
    postV1MarketplacesMarketplace_idInvoicesInvoice_idApprove(metadata: types.PostV1MarketplacesMarketplaceIdInvoicesInvoiceIdApproveMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Estornar e reembolsar fatura [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Estornar e reembolsar fatura
     */
    deleteV1MarketplacesMarketplace_idInvoicesInvoice_idVoid(metadata: types.DeleteV1MarketplacesMarketplaceIdInvoicesInvoiceIdVoidMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Listar faturas associadas a um vendedor pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar faturas associadas a um vendedor pelo identificador
     */
    getV1MarketplacesMarketplace_idSellersCustomer_idInvoices(metadata: types.GetV1MarketplacesMarketplaceIdSellersCustomerIdInvoicesMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdSellersCustomerIdInvoicesResponse200>>;
    /**
     * Enviar recibo por email [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Enviar recibo por email
     * @throws FetchError<404, types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdEmailsResponse404> Marketplace/Recibo não encontrada
     */
    postV1MarketplacesMarketplace_idReceiptsReceipt_idEmails(body: types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdEmailsBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdEmailsMetadataParam): Promise<FetchResponse<200, types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdEmailsResponse200>>;
    postV1MarketplacesMarketplace_idReceiptsReceipt_idEmails(metadata: types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdEmailsMetadataParam): Promise<FetchResponse<200, types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdEmailsResponse200>>;
    /**
     * Enviar recibo por SMS  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Enviar recibo por SMS
     * @throws FetchError<404, types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdTextsResponse404> Marketplace/Recibo não encontrada
     */
    postV1MarketplacesMarketplace_idReceiptsReceipt_idTexts(body: types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdTextsBodyParam, metadata: types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdTextsMetadataParam): Promise<FetchResponse<200, types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdTextsResponse200>>;
    postV1MarketplacesMarketplace_idReceiptsReceipt_idTexts(metadata: types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdTextsMetadataParam): Promise<FetchResponse<200, types.PostV1MarketplacesMarketplaceIdReceiptsReceiptIdTextsResponse200>>;
    /**
     * Recuperar detalhes do recibo  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Recuperar detalhes do recibo
     * @throws FetchError<404, types.GetV1MarketplacesMarketplaceIdReceiptsReceiptIdResponse404> Marketplace/Recibo não encontrada
     */
    getV1MarketplacesMarketplace_idReceiptsReceipt_id(metadata: types.GetV1MarketplacesMarketplaceIdReceiptsReceiptIdMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdReceiptsReceiptIdResponse200>>;
    /**
     * Renderizar template de recibo HTML
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Renderizar template de recibo HTML
     * @throws FetchError<404, types.GetV1ReceiptsMarketplaceIdReceiptIdResponse404> Marketplace/Recibo não encontrada
     */
    getV1ReceiptsMarketplace_idReceipt_id(metadata: types.GetV1ReceiptsMarketplaceIdReceiptIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Listar detalhes de recebível  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de recebível
     * @throws FetchError<404, types.GetV1MarketplacesMarketplaceIdReceivablesReceivableIdResponse404> Marketplace/Recebível não encontrado
     */
    getV1MarketplacesMarketplace_idReceivablesReceivable_id(metadata: types.GetV1MarketplacesMarketplaceIdReceivablesReceivableIdMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdReceivablesReceivableIdResponse200>>;
    /**
     * Listar recebíveis por transação
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar recebíveis por transação
     * @throws FetchError<400, types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdReceivablesResponse400> Marketplace/Transação não encontrado
     */
    getV1MarketplacesMarketplace_idTransactionsTransaction_idReceivables(metadata: types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdReceivablesMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdReceivablesResponse200>>;
    /**
     * Listar recebíveis por seller  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar recebíveis por seller
     * @throws FetchError<400, types.GetV1MarketplacesMarketplaceIdSellersSellerIdReceivablesResponse400> Marketplace/Seller não encontrado
     */
    getV1MarketplacesMarketplace_idSellersSeller_idReceivables(metadata: types.GetV1MarketplacesMarketplaceIdSellersSellerIdReceivablesMetadataParam): Promise<FetchResponse<200, types.GetV1MarketplacesMarketplaceIdSellersSellerIdReceivablesResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
