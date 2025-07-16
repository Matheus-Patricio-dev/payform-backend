"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'zoop/1.1 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Associar Cartão com Comprador [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Associar cartão com comprador
     * @throws FetchError<404, types.PostV1MarketplacesMarketplaceIdCardsResponse404> Cartão associado sem sucesso
     */
    SDK.prototype.postV1MarketplacesMarketplace_idCards = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/cards', 'post', body, metadata);
    };
    /**
     * Listar Detalhes de Cartão [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de cartão pelo identificador
     * @throws FetchError<404, types.GetV1MarketplacesMarketplaceIdCardsCardIdResponse404> Cartão recuperado com sucesso
     */
    SDK.prototype.getV1MarketplacesMarketplace_idCardsCard_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/cards/{card_id}', 'get', metadata);
    };
    /**
     * Remover Cartão [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Remover cartão pelo identificador
     * @throws FetchError<404, types.DeleteV1MarketplacesMarketplaceIdCardsCardIdResponse404> Cartão removido sem sucesso
     */
    SDK.prototype.deleteV1MarketplacesMarketplace_idCardsCard_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/cards/{card_id}', 'delete', metadata);
    };
    SDK.prototype.postV1MarketplacesMarketplace_idTransactions = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions', 'post', body, metadata);
    };
    /**
     * Listar transações do marketplace
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar transações do marketplace
     */
    SDK.prototype.getV1MarketplacesMarketplace_idTransactions = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions', 'get', metadata);
    };
    /**
     * Listar transações por vendedor
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar transações por vendedor
     */
    SDK.prototype.getV1MarketplacesMarketplace_idSellersSeller_idTransactions = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/sellers/{seller_id}/transactions', 'get', metadata);
    };
    /**
     * Listar detalhes de transação pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de transação pelo identificador
     */
    SDK.prototype.getV1MarketplacesMarketplace_idTransactionsTransaction_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions/{transaction_id}', 'get', metadata);
    };
    /**
     * Alterar detalhes de transação pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Alterar detalhes de transação pelo identificador
     */
    SDK.prototype.putV1MarketplacesMarketplace_idTransactionsTransaction_id = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions/{transaction_id}', 'put', body, metadata);
    };
    /**
     * Estornar transação [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Estornar transação
     * @throws FetchError<400, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdVoidResponse400> Requisição/Parametros inválidos
     * @throws FetchError<402, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdVoidResponse402> Saldo insuficiente
     * @throws FetchError<404, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdVoidResponse404> Marketplace/Transação não encontrado
     */
    SDK.prototype.postV1MarketplacesMarketplace_idTransactionsTransaction_idVoid = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions/{transaction_id}/void', 'post', body, metadata);
    };
    /**
     * Disponibilizar link carta de cancelamento
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Disponibilizar link carta de cancelamento
     * @throws FetchError<513, types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdCancelledLetterResponse513> Transação não encontrada
     */
    SDK.prototype.getV1MarketplacesMarketplace_idTransactionsTransaction_idCancelledLetter = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions/{transaction_id}/cancelled-letter', 'get', metadata);
    };
    /**
     * Capturar transação cartão não presente
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Capturar transação cartão não presente
     */
    SDK.prototype.postV1MarketplacesMarketplace_idTransactionsTransaction_idCapture = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions/{transaction_id}/capture', 'post', body, metadata);
    };
    /**
     * Criar source para utilização transação
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Criar source para utilização transação
     */
    SDK.prototype.postV1MarketplacesMarketplace_idSources = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/sources', 'post', body, metadata);
    };
    /**
     * Listar detalhes de source pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de source pelo identificador
     */
    SDK.prototype.getV1MarketplacesMarketplace_idSourcesSource_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/sources/{source_id}', 'get', metadata);
    };
    /**
     * Remover source pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Remover source pelo identificador
     */
    SDK.prototype.deleteV1MarketplacesMarketplace_idSourcesSource_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/sources/{source_id}', 'delete', metadata);
    };
    /**
     * Enviar cobrança de boleto por email
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Enviar cobrança de boleto por email
     * @throws FetchError<404, types.PostV1MarketplacesMarketplaceIdBoletosBoletoIdEmailsResponse404> Boleto não enviado por email
     */
    SDK.prototype.postV1MarketplacesMarketplace_idBoletosBoleto_idEmails = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/boletos/{boleto_id}/emails', 'post', metadata);
    };
    /**
     * Listar detalhes de boleto [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de boleto
     * @throws FetchError<404, types.GetV1MarketplacesMarketplaceIdBoletosBoletoIdResponse404> Marketplace/Boleto não encontrado
     */
    SDK.prototype.getV1MarketplacesMarketplace_idBoletosBoleto_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/boletos/{boleto_id}', 'get', metadata);
    };
    /**
     * Aprovar boleto (somente sandbox)
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Aprovar boleto (somente sandbox)
     * @throws FetchError<404, types.PostV1MarketplacesMarketplaceIdTransactionsTransactionIdApproveResponse404> Marketplace/Boleto não encontrado
     */
    SDK.prototype.postV1MarketplacesMarketplace_idTransactionsTransaction_idApprove = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions/{transaction_id}/approve', 'post', metadata);
    };
    /**
     * Solicitar cancelamento de boleto
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Solicitar cancelamento de boleto
     * @throws FetchError<422, types.PostV1BoletosCancellationMarketplacesMarketplaceIdTransactionsTransactionIdResponse422> Inválido
     * @throws FetchError<500, types.PostV1BoletosCancellationMarketplacesMarketplaceIdTransactionsTransactionIdResponse500> Erro não esperadp
     */
    SDK.prototype.postV1BoletosCancellationMarketplacesMarketplace_idTransactionsTransaction_id = function (metadata) {
        return this.core.fetch('/v1/boletos/cancellation/marketplaces/{marketplace_id}/transactions/{transaction_id}', 'post', metadata);
    };
    /**
     * Parear terminal POS  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Parear terminal POS
     */
    SDK.prototype.postV1MarketplacesMarketplace_idTerminalsPairing = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/terminals/pairing', 'post', body, metadata);
    };
    /**
     * Buscar informações sobre terminal
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Buscar informações sobre terminal
     */
    SDK.prototype.getV1CardPresentTerminalsIdentification_number = function (metadata) {
        return this.core.fetch('/v1/card-present/terminals/{identification_number}', 'get', metadata);
    };
    /**
     * Buscar terminal por serial number
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Buscar terminal por serial number
     */
    SDK.prototype.getV1CardPresentTerminalsSearch = function (metadata) {
        return this.core.fetch('/v1/card-present/terminals/search', 'get', metadata);
    };
    SDK.prototype.postV1MarketplacesMarketplace_idTransactionsTransaction_idSplit_rules = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions/{transaction_id}/split_rules', 'post', body, metadata);
    };
    /**
     * Listar detalhes de Split por transação
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de Split por transação
     */
    SDK.prototype.getV1MarketplacesMarketplace_idTransactionsTransaction_idSplit_rules = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions/{transaction_id}/split_rules', 'get', metadata);
    };
    /**
     * Recupera detalhes de Split por ID
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Recupera detalhes de Split por ID
     */
    SDK.prototype.getV1MarketplacesMarketplace_idTransactionsTransaction_idSplit_rulesId = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions/{transaction_id}/split_rules/{id}', 'get', metadata);
    };
    /**
     * Remover Split por transação  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Remover Split por transação
     */
    SDK.prototype.deleteV1MarketplacesMarketplace_idTransactionsTransaction_idSplit_rulesId = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions/{transaction_id}/split_rules/{id}', 'delete', metadata);
    };
    /**
     * Criar um plano [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Criar um plano
     */
    SDK.prototype.postV1MarketplacesMarketplace_idRecurrence_plans = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_plans/', 'post', body, metadata);
    };
    /**
     * Listar planos por marketplace [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar planos por marketplace
     */
    SDK.prototype.getV1MarketplacesMarketplace_idRecurrence_plans = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_plans/', 'get', metadata);
    };
    /**
     * Recupera um plano pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Recupera um plano pelo identificador
     */
    SDK.prototype.getV1MarketplacesMarketplace_idRecurrence_plansPlan_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_plans/{plan_id}', 'get', metadata);
    };
    /**
     * Alterar plano pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Alterar plano pelo identificador
     */
    SDK.prototype.putV1MarketplacesMarketplace_idRecurrence_plansPlan_id = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_plans/{plan_id}', 'put', body, metadata);
    };
    /**
     * Deletar um plano pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Deletar um plano pelo identificador
     */
    SDK.prototype.deleteV1MarketplacesMarketplace_idRecurrence_plansPlan_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_plans/{plan_id}', 'delete', metadata);
    };
    SDK.prototype.postV1MarketplacesMarketplace_idRecurrence_subscriptions = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_subscriptions', 'post', body, metadata);
    };
    /**
     * Listar todas as assinaturas de um marketplace
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar todas as assinaturas de um marketplace
     */
    SDK.prototype.getV1MarketplacesMarketplace_idRecurrence_subscriptions = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_subscriptions', 'get', metadata);
    };
    /**
     * Listar todas as assinaturas de um seller
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar todas as assinaturas de um seller
     */
    SDK.prototype.getV1MarketplacesMarketplace_idSellersSeller_idSubscriptions = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/sellers/{seller_id}/subscriptions', 'get', metadata);
    };
    /**
     * Listar os detalhes de uma assinatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar os detalhes de uma assinatura pelo identificador
     */
    SDK.prototype.getV1MarketplacesMarketplace_idRecurrence_subscriptionsSubscription_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_subscriptions/{subscription_id}', 'get', metadata);
    };
    SDK.prototype.putV1MarketplacesMarketplace_idRecurrence_subscriptionsSubscription_id = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_subscriptions/{subscription_id}', 'put', body, metadata);
    };
    /**
     * Remover uma assinatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Remover uma assinatura pelo identificador
     */
    SDK.prototype.deleteV1MarketplacesMarketplace_idRecurrence_subscriptionsSubscription_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_subscriptions/{subscription_id}', 'delete', metadata);
    };
    /**
     * Suspender uma assinatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Suspender uma assinatura pelo identificador
     */
    SDK.prototype.postV1MarketplacesMarketplace_idRecurrence_subscriptionsSubscription_idSuspend = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_subscriptions/{subscription_id}/suspend', 'post', metadata);
    };
    /**
     * Reativa uma assinatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Reativa uma assinatura pelo identificador
     */
    SDK.prototype.postV1MarketplacesMarketplace_idRecurrence_subscriptionsSubscription_idReactivate = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/recurrence_subscriptions/{subscription_id}/reactivate', 'post', metadata);
    };
    SDK.prototype.postV1MarketplacesMarketplace_idInvoices = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/invoices', 'post', body, metadata);
    };
    /**
     * Listar todas as faturas de um marketplace
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar todas as faturas de um marketplace
     */
    SDK.prototype.getV1MarketplacesMarketplace_idInvoices = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/invoices', 'get', metadata);
    };
    /**
     * Listar os detalhes de uma fatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar os detalhes de uma fatura pelo identificador
     */
    SDK.prototype.getV1MarketplacesMarketplace_idInvoicesInvoice_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/invoices/{invoice_id}', 'get', metadata);
    };
    /**
     * Remover uma fatura pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Remover uma fatura pelo identificador
     */
    SDK.prototype.deleteV1MarketplacesMarketplace_idInvoicesInvoice_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/invoices/{invoice_id}', 'delete', metadata);
    };
    /**
     * Aprovar fatura pendente [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Aprovar fatura pendente
     */
    SDK.prototype.postV1MarketplacesMarketplace_idInvoicesInvoice_idApprove = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/invoices/{invoice_id}/approve', 'post', metadata);
    };
    /**
     * Estornar e reembolsar fatura [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Estornar e reembolsar fatura
     */
    SDK.prototype.deleteV1MarketplacesMarketplace_idInvoicesInvoice_idVoid = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/invoices/{invoice_id}/void', 'delete', metadata);
    };
    /**
     * Listar faturas associadas a um vendedor pelo identificador
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar faturas associadas a um vendedor pelo identificador
     */
    SDK.prototype.getV1MarketplacesMarketplace_idSellersCustomer_idInvoices = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/sellers/{customer_id}/invoices', 'get', metadata);
    };
    SDK.prototype.postV1MarketplacesMarketplace_idReceiptsReceipt_idEmails = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/receipts/{receipt_id}/emails', 'post', body, metadata);
    };
    SDK.prototype.postV1MarketplacesMarketplace_idReceiptsReceipt_idTexts = function (body, metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/receipts/{receipt_id}/texts', 'post', body, metadata);
    };
    /**
     * Recuperar detalhes do recibo  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Recuperar detalhes do recibo
     * @throws FetchError<404, types.GetV1MarketplacesMarketplaceIdReceiptsReceiptIdResponse404> Marketplace/Recibo não encontrada
     */
    SDK.prototype.getV1MarketplacesMarketplace_idReceiptsReceipt_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/receipts/{receipt_id}', 'get', metadata);
    };
    /**
     * Renderizar template de recibo HTML
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Renderizar template de recibo HTML
     * @throws FetchError<404, types.GetV1ReceiptsMarketplaceIdReceiptIdResponse404> Marketplace/Recibo não encontrada
     */
    SDK.prototype.getV1ReceiptsMarketplace_idReceipt_id = function (metadata) {
        return this.core.fetch('/v1/receipts/{marketplace_id}/{receipt_id}', 'get', metadata);
    };
    /**
     * Listar detalhes de recebível  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar detalhes de recebível
     * @throws FetchError<404, types.GetV1MarketplacesMarketplaceIdReceivablesReceivableIdResponse404> Marketplace/Recebível não encontrado
     */
    SDK.prototype.getV1MarketplacesMarketplace_idReceivablesReceivable_id = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/receivables/{receivable_id}', 'get', metadata);
    };
    /**
     * Listar recebíveis por transação
     * [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar recebíveis por transação
     * @throws FetchError<400, types.GetV1MarketplacesMarketplaceIdTransactionsTransactionIdReceivablesResponse400> Marketplace/Transação não encontrado
     */
    SDK.prototype.getV1MarketplacesMarketplace_idTransactionsTransaction_idReceivables = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/transactions/{transaction_id}/receivables', 'get', metadata);
    };
    /**
     * Listar recebíveis por seller  [mTLS](https://docs.zoop.co/v2.5/docs/fazendo-uma-chamada)
     *
     * @summary Listar recebíveis por seller
     * @throws FetchError<400, types.GetV1MarketplacesMarketplaceIdSellersSellerIdReceivablesResponse400> Marketplace/Seller não encontrado
     */
    SDK.prototype.getV1MarketplacesMarketplace_idSellersSeller_idReceivables = function (metadata) {
        return this.core.fetch('/v1/marketplaces/{marketplace_id}/sellers/{seller_id}/receivables', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
