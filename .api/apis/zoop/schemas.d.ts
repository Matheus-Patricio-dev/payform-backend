declare const DeleteV1MarketplacesMarketplaceIdCardsCardId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly card_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do cartão";
                };
            };
            readonly required: readonly ["marketplace_id", "card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Identificador único do cartão";
                };
                readonly resource: {
                    readonly type: "string";
                    readonly description: "Tipo do recurso";
                    readonly examples: readonly ["card"];
                };
                readonly deleted: {
                    readonly type: "string";
                    readonly description: "cartão deletado";
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly description: "Código do erro";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Tipo de erro";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Categoria de erro";
                            readonly examples: readonly ["resource_not_found"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Mensagem de erro";
                            readonly examples: readonly ["Sorry, the resource you are trying to use does not exist or has been deleted."];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteV1MarketplacesMarketplaceIdInvoicesInvoiceId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly invoice_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "invoice_id"];
        }];
    };
};
declare const DeleteV1MarketplacesMarketplaceIdInvoicesInvoiceIdVoid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly invoice_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "invoice_id"];
        }];
    };
};
declare const DeleteV1MarketplacesMarketplaceIdRecurrencePlansPlanId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly plan_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "plan_id"];
        }];
    };
};
declare const DeleteV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly subscription_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "subscription_id"];
        }];
    };
};
declare const DeleteV1MarketplacesMarketplaceIdSourcesSourceId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly source_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do source";
                };
            };
            readonly required: readonly ["marketplace_id", "source_id"];
        }];
    };
};
declare const DeleteV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do split";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id", "id"];
        }];
    };
};
declare const GetV1CardPresentTerminalsIdentificationNumber: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly identification_number: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Informar o identificador Zoop do terminal";
                };
            };
            readonly required: readonly ["identification_number"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "ID indentificador do terminal na Zoop";
                };
                readonly resource: {
                    readonly type: "string";
                    readonly description: "Recurso";
                    readonly examples: readonly ["terminal"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly description: "";
                    readonly examples: readonly ["POI19999"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status do terminal";
                    readonly examples: readonly ["active"];
                };
                readonly serial_number: {
                    readonly type: "string";
                    readonly description: "Numero do serial";
                    readonly examples: readonly [99999999];
                };
                readonly terminal_model: {
                    readonly type: "string";
                    readonly description: "Modelo do terminal";
                    readonly examples: readonly ["D180"];
                };
                readonly manufacturer: {
                    readonly type: "string";
                    readonly description: "";
                    readonly examples: readonly [""];
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do Seller";
                };
                readonly pin_capability: {
                    readonly type: "string";
                    readonly description: "Mostra que o terminal está pronto para uso";
                    readonly examples: readonly ["capable"];
                };
                readonly contactless_enabled: {
                    readonly type: "boolean";
                    readonly description: "Pagamento por aproximação";
                    readonly examples: readonly [false];
                };
                readonly application_version: {
                    readonly type: "string";
                    readonly description: "Versão da aplicação";
                    readonly examples: readonly ["001.22 141123"];
                };
                readonly emv_lib_version: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly firmware_version: {
                    readonly type: "string";
                    readonly description: "Versão da firmeware";
                    readonly examples: readonly [1.1];
                };
                readonly hardware_version: {
                    readonly type: "string";
                    readonly description: "Versão do hardware";
                };
                readonly specification_version: {
                    readonly type: "string";
                    readonly description: "Versão da especificação";
                    readonly examples: readonly [1.08];
                };
                readonly metadata: {
                    readonly type: "string";
                    readonly description: "Metadados a serem inseridos";
                    readonly examples: readonly ["Terminal principal da loja"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Data da criação do boleto";
                    readonly format: "dateTime";
                    readonly examples: readonly ["2021-06-14 09:49:07+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1CardPresentTerminalsSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serial_number: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Serial number da maquininha";
                };
            };
            readonly required: readonly ["serial_number"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "ID indentificador do terminal na Zoop";
                };
                readonly resource: {
                    readonly type: "string";
                    readonly description: "Recurso";
                    readonly examples: readonly ["terminal"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly description: "";
                    readonly examples: readonly ["POI19999"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status do terminal";
                    readonly examples: readonly ["active"];
                };
                readonly serial_number: {
                    readonly type: "string";
                    readonly description: "Numero do serial";
                    readonly examples: readonly [99999999];
                };
                readonly terminal_model: {
                    readonly type: "string";
                    readonly description: "Modelo do terminal";
                    readonly examples: readonly ["D180"];
                };
                readonly manufacturer: {
                    readonly type: "string";
                    readonly description: "";
                    readonly examples: readonly [""];
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do Seller";
                };
                readonly pin_capability: {
                    readonly type: "string";
                    readonly description: "Mostra que o terminal está pronto para uso";
                    readonly examples: readonly ["capable"];
                };
                readonly contactless_enabled: {
                    readonly type: "boolean";
                    readonly description: "Pagamento por aproximação";
                    readonly examples: readonly [false];
                };
                readonly application_version: {
                    readonly type: "string";
                    readonly description: "Versão da aplicação";
                    readonly examples: readonly ["001.22 141123"];
                };
                readonly emv_lib_version: {
                    readonly type: "string";
                    readonly description: "";
                };
                readonly firmware_version: {
                    readonly type: "string";
                    readonly description: "Versão da firmeware";
                    readonly examples: readonly [1.1];
                };
                readonly hardware_version: {
                    readonly type: "string";
                    readonly description: "Versão do hardware";
                };
                readonly specification_version: {
                    readonly type: "string";
                    readonly description: "Versão da especificação";
                    readonly examples: readonly [1.08];
                };
                readonly metadata: {
                    readonly type: "string";
                    readonly description: "Metadados a serem inseridos";
                    readonly examples: readonly ["Terminal principal da loja"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Data da criação do boleto";
                    readonly format: "dateTime";
                    readonly examples: readonly ["2021-06-14 09:49:07+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdBoletosBoletoId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly boleto_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do boleto";
                };
            };
            readonly required: readonly ["marketplace_id", "boleto_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "ID do boleto";
                };
                readonly resource: {
                    readonly type: "string";
                    readonly description: "Tipo do recurso";
                    readonly examples: readonly ["Boleto"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Descrição";
                    readonly examples: readonly ["Venda de ingressos para o show do dia 30"];
                };
                readonly reference_number: {
                    readonly type: "string";
                    readonly description: "Numero de referência";
                };
                readonly document_number: {
                    readonly type: "string";
                    readonly description: "Numero do documento";
                };
                readonly expiration_date: {
                    readonly type: "string";
                    readonly description: "Data de vencimento";
                    readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                };
                readonly recipient: {
                    readonly type: "string";
                    readonly description: "Nome do recebedor";
                    readonly examples: readonly ["leonardoteste"];
                };
                readonly bank_code: {
                    readonly type: "string";
                    readonly description: "Codigo do banco";
                    readonly examples: readonly [109];
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer";
                };
                readonly address: {
                    readonly type: "string";
                    readonly description: "Endereço";
                };
                readonly sequence: {
                    readonly type: "string";
                    readonly description: "Sequencia";
                    readonly examples: readonly [20373];
                };
                readonly url: {
                    readonly type: "string";
                    readonly description: "URL do boleto gerado";
                    readonly examples: readonly ["https://api-boleto-production.s3.amazonaws.com/4efbad0e595343fbbe9f9725d6fc9769/047cf3697440496fa588672f76c0e3db/5cec4b26902fa60b8faefeb1.html"];
                };
                readonly accepted: {
                    readonly type: "string";
                    readonly description: "Aceite";
                    readonly examples: readonly [false];
                };
                readonly printed: {
                    readonly type: "string";
                    readonly description: "Impresso";
                    readonly examples: readonly [false];
                };
                readonly downloaded: {
                    readonly type: "string";
                    readonly description: "Download";
                    readonly examples: readonly [false];
                };
                readonly fingerprint: {
                    readonly type: "string";
                    readonly description: "Digital";
                };
                readonly paid_at: {
                    readonly type: "string";
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/boletos/{id boleto}"];
                };
                readonly barcode: {
                    readonly type: "string";
                    readonly description: "Representação númerica do código de barras do boleto";
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "string";
                    };
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly description: "Código do erro";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Tipo de erro";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Categoria de erro";
                            readonly examples: readonly ["resource_not_found"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Mensagem de erro";
                            readonly examples: readonly ["Sorry, the boleto you are trying to use does not exist or has been deleted"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdCardsCardId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly card_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do cartão";
                };
            };
            readonly required: readonly ["marketplace_id", "card_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Identificador único do cartão";
                };
                readonly resource: {
                    readonly type: "string";
                    readonly description: "Tipo de recurso";
                    readonly examples: readonly ["card"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Descrição do cartão";
                };
                readonly card_brand: {
                    readonly type: "string";
                    readonly description: "Bandeira do cartão";
                    readonly examples: readonly ["Visa"];
                };
                readonly first4_digits: {
                    readonly type: "string";
                    readonly description: "Primeiros 4 dígitos do cartão";
                    readonly examples: readonly ["9999"];
                };
                readonly last4_digits: {
                    readonly type: "string";
                    readonly description: "Primeiros 4 dígitos do cartão";
                    readonly examples: readonly ["9999"];
                };
                readonly expiration_month: {
                    readonly type: "string";
                    readonly description: "Mês de expiração";
                    readonly examples: readonly [1];
                };
                readonly expiration_year: {
                    readonly type: "string";
                    readonly description: "Ano de expiração do cartão (AAAA)";
                    readonly examples: readonly [2021];
                };
                readonly holder_name: {
                    readonly type: "string";
                    readonly description: "Nome do portador do cartão";
                    readonly examples: readonly ["Nome"];
                };
                readonly is_active: {
                    readonly type: "boolean";
                    readonly description: "Ativo";
                    readonly examples: readonly [true];
                };
                readonly is_valid: {
                    readonly type: "boolean";
                    readonly description: "Valido";
                    readonly examples: readonly [true];
                };
                readonly is_verified: {
                    readonly type: "boolean";
                    readonly description: "Verificado";
                    readonly examples: readonly [false];
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer";
                };
                readonly fingerprint: {
                    readonly type: "string";
                    readonly description: "Digital";
                };
                readonly address: {
                    readonly type: "string";
                    readonly description: "Endereço";
                };
                readonly verification_checklist: {
                    readonly type: "object";
                    readonly properties: {
                        readonly postal_code_check: {
                            readonly type: "string";
                            readonly description: "Verificação de código postal";
                            readonly examples: readonly ["unchecked"];
                        };
                        readonly security_code_check: {
                            readonly type: "string";
                            readonly description: "Verificação do código de segurança";
                            readonly examples: readonly ["fail"];
                        };
                        readonly address_line1_check: {
                            readonly type: "string";
                            readonly description: "Verificação de endereço";
                            readonly examples: readonly ["unchecked"];
                        };
                    };
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "string";
                    };
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly description: "Código do erro";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Tipo de erro";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Categoria de erro";
                            readonly examples: readonly ["resource_not_found"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Mensagem de erro";
                            readonly examples: readonly ["Sorry, the resource you are trying to use does not exist or has been deleted."];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdInvoices: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
            };
            readonly required: readonly ["marketplace_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 20;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limita o número de objetos retornados, podendo ser entre 1 e 100";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["time-descending", "time-ascending"];
                    readonly default: "time-descending";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determinar como ordenar a lista em relação a data de criação do objeto";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determina o ponto de inicio dos registros retornados";
                };
                readonly date_range: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filtro na lista base de objetos pela data de criação. O valor pode ser uma string com um horário em UTC timestamp, ou pode ser uma lista com os parametros abaixo";
                };
                readonly "date_range[gt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data maior que o timestamp informado";
                };
                readonly "date_range[gte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for maior ou igual que o timestamp informado";
                };
                readonly "date_range[lt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor que o timestamp informado";
                };
                readonly "date_range[lte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor ou igual que o timestamp informado";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["list"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/invoice/"];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly offset: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly has_more: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly query_count: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly total: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly subscription: {
                                readonly description: "referência a uma assinatura existente";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly on_behalf_of: {
                                readonly description: "Referência a um vendedor existente";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly invoice_customer: {
                                readonly description: "dados do comprador associado a assinaturas";
                                readonly type: "object";
                                readonly properties: {
                                    readonly uuid: {
                                        readonly readOnly: true;
                                        readonly description: "id do comprador na API de pagamento";
                                        readonly type: "string";
                                        readonly format: "uuid";
                                    };
                                    readonly first_name: {
                                        readonly readOnly: true;
                                        readonly description: "nome do comprador";
                                        readonly type: "string";
                                    };
                                    readonly last_name: {
                                        readonly readOnly: true;
                                        readonly description: "sobrenome do comprador";
                                        readonly type: "string";
                                    };
                                    readonly taxpayer_id: {
                                        readonly readOnly: true;
                                        readonly description: "documento de identificação";
                                        readonly type: "string";
                                    };
                                    readonly email: {
                                        readonly readOnly: true;
                                        readonly description: "endereço de email";
                                        readonly type: "string";
                                        readonly format: "email";
                                    };
                                };
                            };
                            readonly description: {
                                readonly description: "descrição da assinatura";
                                readonly type: "string";
                                readonly format: "text";
                            };
                            readonly payment_methods: {
                                readonly description: "métodos de pagamentos\n\n`credit`";
                                readonly type: "string";
                                readonly enum: readonly ["credit"];
                                readonly default: "credit";
                            };
                            readonly due_date: {
                                readonly description: "data da cobrança";
                                readonly type: "string";
                                readonly format: "date";
                                readonly examples: readonly ["2017-07-21"];
                            };
                            readonly expiration_date: {
                                readonly type: "string";
                                readonly description: "Data de vencimento";
                                readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                            };
                            readonly amount: {
                                readonly description: "valor em centavos";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly currency: {
                                readonly description: "moeda utilizada";
                                readonly type: "string";
                                readonly examples: readonly ["BRL"];
                            };
                            readonly paid_at: {
                                readonly readOnly: true;
                                readonly description: "data do pagamento";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly voided_at: {
                                readonly readOnly: true;
                                readonly description: "data do cancelamento";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly retries: {
                                readonly description: "quantidade de vezes que tentou efetuar o pagamento";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly max_retries: {
                                readonly description: "quantidade máxima de vezes que se deve tentar efetuar o pagamento";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly status: {
                                readonly description: "status da cobrança\n\n`pending` `paid` `over-due` `canceled` `failed`";
                                readonly type: "string";
                                readonly enum: readonly ["pending", "paid", "over-due", "canceled", "failed"];
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["invoice"];
                            };
                            readonly metadata: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly additionalProperties: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["/v1/marketplaces/{id marketplace}/invoice/{id invoice}"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdInvoicesInvoiceId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly invoice_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "invoice_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly subscription: {
                    readonly description: "referência a uma assinatura existente";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly on_behalf_of: {
                    readonly description: "Referência a um vendedor existente";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer";
                };
                readonly invoice_customer: {
                    readonly description: "dados do comprador associado a assinaturas";
                    readonly type: "object";
                    readonly properties: {
                        readonly uuid: {
                            readonly readOnly: true;
                            readonly description: "id do comprador na API de pagamento";
                            readonly type: "string";
                            readonly format: "uuid";
                        };
                        readonly first_name: {
                            readonly readOnly: true;
                            readonly description: "nome do comprador";
                            readonly type: "string";
                        };
                        readonly last_name: {
                            readonly readOnly: true;
                            readonly description: "sobrenome do comprador";
                            readonly type: "string";
                        };
                        readonly taxpayer_id: {
                            readonly readOnly: true;
                            readonly description: "documento de identificação";
                            readonly type: "string";
                        };
                        readonly email: {
                            readonly readOnly: true;
                            readonly description: "endereço de email";
                            readonly type: "string";
                            readonly format: "email";
                        };
                    };
                };
                readonly description: {
                    readonly description: "descrição da assinatura";
                    readonly type: "string";
                    readonly format: "text";
                };
                readonly payment_methods: {
                    readonly description: "métodos de pagamentos\n\n`credit`";
                    readonly type: "string";
                    readonly enum: readonly ["credit"];
                    readonly default: "credit";
                };
                readonly due_date: {
                    readonly description: "data da cobrança";
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["2017-07-21"];
                };
                readonly expiration_date: {
                    readonly type: "string";
                    readonly description: "Data de vencimento";
                    readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                };
                readonly amount: {
                    readonly description: "valor em centavos";
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly currency: {
                    readonly description: "moeda utilizada";
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly paid_at: {
                    readonly readOnly: true;
                    readonly description: "data do pagamento";
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly voided_at: {
                    readonly readOnly: true;
                    readonly description: "data do cancelamento";
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly retries: {
                    readonly description: "quantidade de vezes que tentou efetuar o pagamento";
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly max_retries: {
                    readonly description: "quantidade máxima de vezes que se deve tentar efetuar o pagamento";
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly status: {
                    readonly description: "status da cobrança\n\n`pending` `paid` `over-due` `canceled` `failed`";
                    readonly type: "string";
                    readonly enum: readonly ["pending", "paid", "over-due", "canceled", "failed"];
                };
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["invoice"];
                };
                readonly metadata: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/invoice/{id invoice}"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdReceiptsReceiptId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly receipt_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do recibo";
                };
            };
            readonly required: readonly ["marketplace_id", "receipt_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Identificador do recebível retornado";
                };
                readonly resource: {
                    readonly type: "string";
                    readonly description: "Recurso referente a informação retornada";
                    readonly examples: readonly ["receipt"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status do recibo";
                    readonly examples: readonly ["approved"];
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "Identificador do recebedor";
                    readonly examples: readonly ["2030.12"];
                };
                readonly sub_total: {
                    readonly type: "string";
                    readonly examples: readonly ["2030.12"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "Moeda da transação";
                    readonly examples: readonly ["BRL"];
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly description: "Tipo de transação";
                    readonly examples: readonly ["credit"];
                };
                readonly business_name: {
                    readonly type: "string";
                    readonly description: "Estabelecimento da transação";
                    readonly examples: readonly ["Teste ZXZX Vendedor Teste"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Descrição informada na transação";
                };
                readonly taxpayer_id: {
                    readonly type: "string";
                    readonly description: "Indentificação do vendedor";
                };
                readonly card: {
                    readonly type: "object";
                    readonly properties: {
                        readonly card_brand: {
                            readonly type: "string";
                            readonly description: "Bandeiara do cartão";
                            readonly examples: readonly ["Visa"];
                        };
                        readonly first4_digits: {
                            readonly type: "string";
                            readonly description: "4 primeiros digitos do cartão";
                            readonly examples: readonly ["9999"];
                        };
                        readonly first6_digits: {
                            readonly type: "string";
                            readonly description: "6 primeiros digitos do cartão";
                            readonly examples: readonly ["999999"];
                        };
                    };
                };
                readonly seller: {
                    readonly type: "string";
                    readonly description: "ID do seller";
                };
                readonly buyer: {
                    readonly type: "string";
                    readonly description: "ID do buyer";
                };
                readonly auth_number: {
                    readonly type: "string";
                };
                readonly receipt_number: {
                    readonly type: "string";
                    readonly examples: readonly ["000260004"];
                };
                readonly auth_nsu: {
                    readonly type: "string";
                    readonly description: "20180510122911535";
                };
                readonly application_identifier: {
                    readonly type: "string";
                };
                readonly application_cryptogram: {
                    readonly type: "string";
                };
                readonly order_number: {
                    readonly type: "string";
                };
                readonly terminal_id: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly merchant_id: {
                    readonly type: "string";
                    readonly examples: readonly ["001"];
                };
                readonly terminal: {
                    readonly type: "string";
                };
                readonly poi: {
                    readonly type: "string";
                };
                readonly business_address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly line1: {
                            readonly type: "string";
                            readonly examples: readonly ["Rua A"];
                        };
                        readonly line2: {
                            readonly type: "string";
                        };
                        readonly state: {
                            readonly type: "string";
                            readonly examples: readonly ["MG"];
                        };
                        readonly country_code: {
                            readonly type: "string";
                            readonly examples: readonly ["BR"];
                        };
                    };
                };
                readonly installment_plan: {
                    readonly type: "string";
                };
                readonly verification_method: {
                    readonly type: "string";
                };
                readonly original_receipt: {
                    readonly type: "object";
                    readonly properties: {
                        readonly sales_receipt_merchant: {
                            readonly type: "string";
                        };
                        readonly sales_receipt_cardholder: {
                            readonly type: "string";
                        };
                        readonly country_code: {
                            readonly type: "string";
                            readonly examples: readonly ["BR"];
                        };
                    };
                };
                readonly signature: {
                    readonly type: "string";
                };
                readonly subscription_track: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly bypass_list_management: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly template: {
                    readonly type: "string";
                    readonly examples: readonly ["email_template_zoop_checkout.html"];
                };
                readonly greeting_message: {
                    readonly type: "string";
                };
                readonly thank_you_message: {
                    readonly type: "string";
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["v1/marketplaces/{id marketplace}/receipts/{id repeipts}"];
                };
                readonly metadata: {
                    readonly type: "string";
                    readonly examples: readonly ["{}"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-03-02T20:20:28+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-03-02T20:20:28+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly examples: readonly ["resource_not_found"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly examples: readonly ["Sorry, the receipt you are trying to use does not exist or has been deleted."];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdReceivablesReceivableId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly receivable_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do recebível";
                };
            };
            readonly required: readonly ["marketplace_id", "receivable_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Identificador do recebível retornado";
                };
                readonly resource: {
                    readonly type: "string";
                    readonly description: "Recurso referente a informação retornada";
                    readonly examples: readonly ["receivable"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status do recebível";
                    readonly examples: readonly ["pending"];
                };
                readonly recipient: {
                    readonly type: "string";
                    readonly description: "Identificador do recebedor";
                };
                readonly transaction: {
                    readonly type: "string";
                    readonly description: "Identificador da transação que originou o recebível";
                };
                readonly split_rule: {
                    readonly type: "string";
                    readonly description: "Se houve o split da transação, irá aparecer o identificador do split";
                };
                readonly installment: {
                    readonly type: "string";
                    readonly description: "Informação se a respeito de parcelamento da transação";
                };
                readonly liable: {
                    readonly type: "string";
                    readonly description: "Liable da transação";
                    readonly examples: readonly [true];
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "Valor liquido da transação";
                    readonly examples: readonly ["34.40"];
                };
                readonly gross_amount: {
                    readonly type: "string";
                    readonly description: "Valor bruto da transação";
                    readonly examples: readonly ["36.00"];
                };
                readonly anticipation_fee: {
                    readonly type: "string";
                    readonly description: "Taxa da antecipação quando o recebível for antecipado";
                    readonly examples: readonly ["0.00"];
                };
                readonly paid_at: {
                    readonly type: "string";
                    readonly description: "Data da liquidação do recebível";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly transaction_created_at: {
                    readonly type: "string";
                    readonly description: "Data da criação da transação";
                    readonly examples: readonly ["2020-07-09T19:04:26+00:00"];
                };
                readonly canceled_at: {
                    readonly type: "string";
                    readonly description: "Data de cancelamento do recebível";
                };
                readonly expected_on: {
                    readonly type: "string";
                    readonly description: "Data prevista de liquidação do recebível";
                    readonly examples: readonly ["2020-08-10T00:00:00+00:00"];
                };
                readonly authorization_code: {
                    readonly type: "string";
                    readonly description: "Código de autorização da transação";
                };
                readonly id_original_receivable: {
                    readonly type: "string";
                    readonly description: "ID original do recebível";
                };
                readonly prepaid: {
                    readonly type: "string";
                    readonly description: "Se o recebível foi antecipado";
                    readonly examples: readonly [false];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["not_found_exception"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly examples: readonly ["not_found_exception"];
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdRecurrencePlans: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
            };
            readonly required: readonly ["marketplace_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 20;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limita o número de objetos retornados, podendo ser entre 1 e 100";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["time-descending", "time-ascending"];
                    readonly default: "time-descending";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determinar como ordenar a lista em relação a data de criação do objeto";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determina o ponto de inicio dos registros retornados";
                };
                readonly date_range: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filtro na lista base de objetos pela data de criação. O valor pode ser uma string com um horário em UTC timestamp, ou pode ser uma lista com os parametros abaixo";
                };
                readonly "date_range[gt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data maior que o timestamp informado";
                };
                readonly "date_range[gte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for maior ou igual que o timestamp informado";
                };
                readonly "date_range[lt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor que o timestamp informado";
                };
                readonly "date_range[lte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor ou igual que o timestamp informado";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["list"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{marketplace_id}/recurrence_plans"];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly offset: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly has_more: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly total: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["name", "frequency", "interval", "payment_methods"];
                        readonly properties: {
                            readonly uuid: {
                                readonly type: "string";
                                readonly format: "uuid";
                                readonly readOnly: true;
                            };
                            readonly frequency: {
                                readonly description: "Frequencia que o plano será cobrado\n\n`daily` `monthly` `weekly` `annually`";
                                readonly type: "string";
                                readonly enum: readonly ["daily", "monthly", "weekly", "annually"];
                            };
                            readonly interval: {
                                readonly description: "intervalo entre frequencia de cobrança";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly payment_methods: {
                                readonly description: "métodos de pagamento utilizados";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["credit"];
                                    readonly default: "credit";
                                    readonly description: "`credit`";
                                };
                            };
                            readonly amount: {
                                readonly description: "valor plano em centavos";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly setup_amount: {
                                readonly description: "valor do setup do plano em centavos";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly currency: {
                                readonly description: "moeda utilizada";
                                readonly type: "string";
                                readonly examples: readonly ["BRL"];
                            };
                            readonly description: {
                                readonly description: "descrição do plano";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "nome do plano";
                                readonly type: "string";
                            };
                            readonly duration: {
                                readonly description: "tempo de duração do plano em relação à frequencia escolhida";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly status: {
                                readonly description: "status do plano\n\n`active` `canceled`";
                                readonly type: "string";
                                readonly enum: readonly ["active", "canceled"];
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["plan"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["/v1/marketplaces/{marketplace_id}/recurrence_plans/{id plano}"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdRecurrencePlansPlanId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly plan_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "plan_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["name", "frequency", "interval", "payment_methods"];
            readonly properties: {
                readonly uuid: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly readOnly: true;
                };
                readonly frequency: {
                    readonly description: "Frequencia que o plano será cobrado\n\n`daily` `monthly` `weekly` `annually`";
                    readonly type: "string";
                    readonly enum: readonly ["daily", "monthly", "weekly", "annually"];
                };
                readonly interval: {
                    readonly description: "intervalo entre frequencia de cobrança";
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly payment_methods: {
                    readonly description: "métodos de pagamento utilizados";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["credit"];
                        readonly default: "credit";
                        readonly description: "`credit`";
                    };
                };
                readonly amount: {
                    readonly description: "valor plano em centavos";
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly setup_amount: {
                    readonly description: "valor do setup do plano em centavos";
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly currency: {
                    readonly description: "moeda utilizada";
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly description: "descrição do plano";
                    readonly type: "string";
                };
                readonly name: {
                    readonly description: "nome do plano";
                    readonly type: "string";
                };
                readonly duration: {
                    readonly description: "tempo de duração do plano em relação à frequencia escolhida";
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly status: {
                    readonly description: "status do plano\n\n`active` `canceled`";
                    readonly type: "string";
                    readonly enum: readonly ["active", "canceled"];
                };
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["plan"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{marketplace_id}/recurrence_plans/{id plano}"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdRecurrenceSubscriptions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
            };
            readonly required: readonly ["marketplace_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 20;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limita o número de objetos retornados, podendo ser entre 1 e 100";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["time-descending", "time-ascending"];
                    readonly default: "time-descending";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determinar como ordenar a lista em relação a data de criação do objeto";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determina o ponto de inicio dos registros retornados";
                };
                readonly date_range: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filtro na lista base de objetos pela data de criação. O valor pode ser uma string com um horário em UTC timestamp, ou pode ser uma lista com os parametros abaixo";
                };
                readonly "date_range[gt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data maior que o timestamp informado";
                };
                readonly "date_range[gte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for maior ou igual que o timestamp informado";
                };
                readonly "date_range[lt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor que o timestamp informado";
                };
                readonly "date_range[lte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor ou igual que o timestamp informado";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["list"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{marketplace_id}/sellers/{seller_id}/recurrence_subscriptions"];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly offset: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly has_more: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly query_count: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly total: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly uuid: {
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly plan: {
                                readonly description: "referência a um plano existente";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly on_behalf_of: {
                                readonly description: "Referência a um vendedor existente";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly description: {
                                readonly description: "descrição da assinatura";
                                readonly type: "string";
                                readonly format: "text";
                            };
                            readonly payment_method: {
                                readonly description: "método de pagamento\n\n`credit`";
                                readonly type: "string";
                                readonly enum: readonly ["credit"];
                                readonly default: "credit";
                            };
                            readonly due_date: {
                                readonly description: "data da cobrança";
                                readonly type: "string";
                                readonly format: "date";
                                readonly examples: readonly ["2017-07-21"];
                            };
                            readonly due_since_date: {
                                readonly description: "data da última cobrança da assinatura";
                                readonly type: "string";
                                readonly format: "date";
                                readonly examples: readonly ["2017-07-21"];
                            };
                            readonly expiration_date: {
                                readonly type: "string";
                                readonly description: "Data de vencimento";
                                readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                            };
                            readonly amount: {
                                readonly description: "valor em centavos";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly currency: {
                                readonly description: "moeda utilizada no formato ISO4217";
                                readonly type: "string";
                                readonly examples: readonly ["BRL"];
                            };
                            readonly status: {
                                readonly description: "status da assinatura\n\n`active` `suspended` `canceled` `expired`";
                                readonly type: "string";
                                readonly enum: readonly ["active", "suspended", "canceled", "expired"];
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["subscription"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                            readonly suspended_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2017-07-25"];
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["/v1/marketplaces/{marketplace_id}/recurrence_subscriptions/{subscription_id}"];
                            };
                            readonly card: {
                                readonly description: "Identificador Zoop do cartão a ser utilizado na recorrência";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly subscription_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "subscription_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly uuid: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly plan: {
                    readonly description: "referência a um plano existente";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly on_behalf_of: {
                    readonly description: "Referência a um vendedor existente";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer";
                };
                readonly description: {
                    readonly description: "descrição da assinatura";
                    readonly type: "string";
                    readonly format: "text";
                };
                readonly payment_method: {
                    readonly description: "método de pagamento\n\n`credit`";
                    readonly type: "string";
                    readonly enum: readonly ["credit"];
                    readonly default: "credit";
                };
                readonly due_date: {
                    readonly description: "data da cobrança";
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["2017-07-21"];
                };
                readonly due_since_date: {
                    readonly description: "data da última cobrança da assinatura";
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["2017-07-21"];
                };
                readonly expiration_date: {
                    readonly type: "string";
                    readonly description: "Data de vencimento";
                    readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                };
                readonly amount: {
                    readonly description: "valor em centavos";
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly currency: {
                    readonly description: "moeda utilizada no formato ISO4217";
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly status: {
                    readonly description: "status da assinatura\n\n`active` `suspended` `canceled` `expired`";
                    readonly type: "string";
                    readonly enum: readonly ["active", "suspended", "canceled", "expired"];
                };
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["subscription"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
                readonly suspended_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2017-07-25"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{marketplace_id}/recurrence_subscriptions/{subscription_id}"];
                };
                readonly card: {
                    readonly description: "Identificador Zoop do cartão a ser utilizado na recorrência";
                    readonly type: "string";
                    readonly format: "uuid";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdSellersCustomerIdInvoices: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly customer_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "customer_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 20;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limita o número de objetos retornados, podendo ser entre 1 e 100";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["time-descending", "time-ascending"];
                    readonly default: "time-descending";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determinar como ordenar a lista em relação a data de criação do objeto";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determina o ponto de inicio dos registros retornados";
                };
                readonly date_range: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filtro na lista base de objetos pela data de criação. O valor pode ser uma string com um horário em UTC timestamp, ou pode ser uma lista com os parametros abaixo";
                };
                readonly "date_range[gt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data maior que o timestamp informado";
                };
                readonly "date_range[gte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for maior ou igual que o timestamp informado";
                };
                readonly "date_range[lt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor que o timestamp informado";
                };
                readonly "date_range[lte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor ou igual que o timestamp informado";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["list"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/invoice/"];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly offset: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly has_more: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly query_count: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly total: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly subscription: {
                                readonly description: "referência a uma assinatura existente";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly on_behalf_of: {
                                readonly description: "Referência a um vendedor existente";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly invoice_customer: {
                                readonly description: "dados do comprador associado a assinaturas";
                                readonly type: "object";
                                readonly properties: {
                                    readonly uuid: {
                                        readonly readOnly: true;
                                        readonly description: "id do comprador na API de pagamento";
                                        readonly type: "string";
                                        readonly format: "uuid";
                                    };
                                    readonly first_name: {
                                        readonly readOnly: true;
                                        readonly description: "nome do comprador";
                                        readonly type: "string";
                                    };
                                    readonly last_name: {
                                        readonly readOnly: true;
                                        readonly description: "sobrenome do comprador";
                                        readonly type: "string";
                                    };
                                    readonly taxpayer_id: {
                                        readonly readOnly: true;
                                        readonly description: "documento de identificação";
                                        readonly type: "string";
                                    };
                                    readonly email: {
                                        readonly readOnly: true;
                                        readonly description: "endereço de email";
                                        readonly type: "string";
                                        readonly format: "email";
                                    };
                                };
                            };
                            readonly description: {
                                readonly description: "descrição da assinatura";
                                readonly type: "string";
                                readonly format: "text";
                            };
                            readonly payment_methods: {
                                readonly description: "métodos de pagamentos\n\n`credit`";
                                readonly type: "string";
                                readonly enum: readonly ["credit"];
                                readonly default: "credit";
                            };
                            readonly due_date: {
                                readonly description: "data da cobrança";
                                readonly type: "string";
                                readonly format: "date";
                                readonly examples: readonly ["2017-07-21"];
                            };
                            readonly expiration_date: {
                                readonly type: "string";
                                readonly description: "Data de vencimento";
                                readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                            };
                            readonly amount: {
                                readonly description: "valor em centavos";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly currency: {
                                readonly description: "moeda utilizada";
                                readonly type: "string";
                                readonly examples: readonly ["BRL"];
                            };
                            readonly paid_at: {
                                readonly readOnly: true;
                                readonly description: "data do pagamento";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly voided_at: {
                                readonly readOnly: true;
                                readonly description: "data do cancelamento";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly retries: {
                                readonly description: "quantidade de vezes que tentou efetuar o pagamento";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly max_retries: {
                                readonly description: "quantidade máxima de vezes que se deve tentar efetuar o pagamento";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly status: {
                                readonly description: "status da cobrança\n\n`pending` `paid` `over-due` `canceled` `failed`";
                                readonly type: "string";
                                readonly enum: readonly ["pending", "paid", "over-due", "canceled", "failed"];
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["invoice"];
                            };
                            readonly metadata: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly additionalProperties: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["/v1/marketplaces/{id marketplace}/invoice/{id invoice}"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdSellersSellerIdReceivables: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly seller_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do seller";
                };
            };
            readonly required: readonly ["marketplace_id", "seller_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 20;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limita o número de objetos retornados, podendo ser entre 1 e 100";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["time-descending", "time-ascending"];
                    readonly default: "time-descending";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determinar como ordenar a lista em relação a data de criação do objeto";
                };
                readonly page: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seleciona a página";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["paid", "pending"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filtra pelos status \"paid\" e \"pending\"";
                };
                readonly "paid_at_range[gte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna a data em que o recebivel foi pago";
                };
                readonly "paid_at_range[lte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna a data em que o recebivel foi pago";
                };
                readonly "expected_on_range[gte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna a data em que é esperado o pagamento do recebivel";
                };
                readonly "expected_on_range[lte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna a data em que é esperado o pagamento do recebivel";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Identificador do recebível retornado";
                };
                readonly resource: {
                    readonly type: "string";
                    readonly description: "Recurso referente a informação retornada";
                    readonly examples: readonly ["receivable"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status do recebível";
                    readonly examples: readonly ["pending"];
                };
                readonly recipient: {
                    readonly type: "string";
                    readonly description: "Identificador do recebedor";
                };
                readonly transaction: {
                    readonly type: "string";
                    readonly description: "Identificador da transação que originou o recebível";
                };
                readonly split_rule: {
                    readonly type: "string";
                    readonly description: "Se houve o split da transação, irá aparecer o identificador do split";
                };
                readonly installment: {
                    readonly type: "string";
                    readonly description: "Informação se a respeito de parcelamento da transação";
                };
                readonly liable: {
                    readonly type: "string";
                    readonly description: "Liable da transação";
                    readonly examples: readonly [true];
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "Valor liquido da transação";
                    readonly examples: readonly ["34.40"];
                };
                readonly gross_amount: {
                    readonly type: "string";
                    readonly description: "Valor bruto da transação";
                    readonly examples: readonly ["36.00"];
                };
                readonly anticipation_fee: {
                    readonly type: "string";
                    readonly description: "Taxa da antecipação quando o recebível for antecipado";
                    readonly examples: readonly ["0.00"];
                };
                readonly paid_at: {
                    readonly type: "string";
                    readonly description: "Data da liquidação do recebível";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly transaction_created_at: {
                    readonly type: "string";
                    readonly description: "Data da criação da transação";
                    readonly examples: readonly ["2020-07-09T19:04:26+00:00"];
                };
                readonly canceled_at: {
                    readonly type: "string";
                    readonly description: "Data de cancelamento do recebível";
                };
                readonly expected_on: {
                    readonly type: "string";
                    readonly description: "Data prevista de liquidação do recebível";
                    readonly examples: readonly ["2020-08-10T00:00:00+00:00"];
                };
                readonly authorization_code: {
                    readonly type: "string";
                    readonly description: "Código de autorização da transação";
                };
                readonly id_original_receivable: {
                    readonly type: "string";
                    readonly description: "ID original do recebível";
                };
                readonly prepaid: {
                    readonly type: "string";
                    readonly description: "Se o recebível foi antecipado";
                    readonly examples: readonly [false];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly examples: readonly [400];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["bad_request_exception"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly examples: readonly ["bad_request_exception"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly examples: readonly ["ObjectDoesNotExist"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdSellersSellerIdSubscriptions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly seller_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do seller";
                };
            };
            readonly required: readonly ["marketplace_id", "seller_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["list"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{marketplace_id}/sellers/{seller_id}/recurrence_subscriptions"];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly offset: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly has_more: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly query_count: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly total: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly uuid: {
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly plan: {
                                readonly description: "referência a um plano existente";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly on_behalf_of: {
                                readonly description: "Referência a um vendedor existente";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly description: {
                                readonly description: "descrição da assinatura";
                                readonly type: "string";
                                readonly format: "text";
                            };
                            readonly payment_method: {
                                readonly description: "método de pagamento\n\n`credit`";
                                readonly type: "string";
                                readonly enum: readonly ["credit"];
                                readonly default: "credit";
                            };
                            readonly due_date: {
                                readonly description: "data da cobrança";
                                readonly type: "string";
                                readonly format: "date";
                                readonly examples: readonly ["2017-07-21"];
                            };
                            readonly due_since_date: {
                                readonly description: "data da última cobrança da assinatura";
                                readonly type: "string";
                                readonly format: "date";
                                readonly examples: readonly ["2017-07-21"];
                            };
                            readonly expiration_date: {
                                readonly type: "string";
                                readonly description: "Data de vencimento";
                                readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                            };
                            readonly amount: {
                                readonly description: "valor em centavos";
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly currency: {
                                readonly description: "moeda utilizada no formato ISO4217";
                                readonly type: "string";
                                readonly examples: readonly ["BRL"];
                            };
                            readonly status: {
                                readonly description: "status da assinatura\n\n`active` `suspended` `canceled` `expired`";
                                readonly type: "string";
                                readonly enum: readonly ["active", "suspended", "canceled", "expired"];
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["subscription"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                            readonly suspended_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2017-07-25"];
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["/v1/marketplaces/{marketplace_id}/recurrence_subscriptions/{subscription_id}"];
                            };
                            readonly card: {
                                readonly description: "Identificador Zoop do cartão a ser utilizado na recorrência";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdSellersSellerIdTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly seller_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do seller";
                };
            };
            readonly required: readonly ["marketplace_id", "seller_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 20;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limita o número de objetos retornados, podendo ser entre 1 e 100";
                };
                readonly page: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seleciona a página";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["time-descending", "time-ascending"];
                    readonly default: "time-descending";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determinar como ordenar a lista em relação a data de criação do objeto";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determina o ponto de inicio dos registros retornados";
                };
                readonly date_range: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filtro na lista base de objetos pela data de criação. O valor pode ser uma string com um horário em UTC timestamp, ou pode ser uma lista com os parametros abaixo";
                };
                readonly "date_range[gt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data maior que o timestamp informado";
                };
                readonly "date_range[gte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for maior ou igual que o timestamp informado";
                };
                readonly "date_range[lt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor que o timestamp informado";
                };
                readonly "date_range[lte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor ou igual que o timestamp informado";
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna transações onde o reference id for igual o informado";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,";
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly enum: readonly ["credit", "boleto", "pix"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna transações onde o payment type for igual o informado. Para busca múltipla basta concatenar com \",\"(vírgula)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["list"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions"];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly offset: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly has_more: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly query_count: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly total: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,\n\n`succeeded` `failed` `canceled` `pre_authorized` `reversed` `refunded` `pending` `new` `partial_refunded` `dispute` `charged_back`";
                            readonly type: "string";
                            readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                        };
                        readonly resource: {
                            readonly type: "string";
                            readonly examples: readonly ["transaction"];
                        };
                        readonly amount: {
                            readonly type: "string";
                            readonly examples: readonly ["1.00"];
                        };
                        readonly original_amount: {
                            readonly type: "string";
                            readonly examples: readonly ["1.00"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly examples: readonly ["BRL"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly examples: readonly ["BRL"];
                        };
                        readonly payment_type: {
                            readonly enum: readonly ["credit", "boleto"];
                        };
                        readonly transaction_number: {
                            readonly type: "string";
                        };
                        readonly sales_receipt: {
                            readonly type: "string";
                        };
                        readonly on_behalf_of: {
                            readonly type: "string";
                        };
                        readonly statement_descriptor: {
                            readonly type: "string";
                            readonly examples: readonly ["SuaMarcaAqui"];
                        };
                        readonly payment_method: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly resource: {
                                    readonly type: "string";
                                    readonly examples: readonly ["card"];
                                };
                                readonly description: {
                                    readonly type: "string";
                                };
                                readonly card_brand: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Visa"];
                                };
                                readonly first4_digits: {
                                    readonly type: "string";
                                };
                                readonly last4_digits: {
                                    readonly type: "string";
                                };
                                readonly expiration_month: {
                                    readonly type: "string";
                                    readonly description: "Mês de expiração";
                                    readonly examples: readonly [99];
                                };
                                readonly expiration_year: {
                                    readonly type: "string";
                                    readonly description: "Ano de expiração do cartão (AAAA)";
                                    readonly examples: readonly [99];
                                };
                                readonly holder_name: {
                                    readonly type: "string";
                                    readonly description: "Nome do portador do cartão";
                                };
                                readonly is_active: {
                                    readonly type: "boolean";
                                    readonly description: "Ativo";
                                    readonly examples: readonly [false];
                                };
                                readonly is_valid: {
                                    readonly type: "boolean";
                                    readonly description: "Valido";
                                    readonly examples: readonly [true];
                                };
                                readonly is_verified: {
                                    readonly type: "boolean";
                                    readonly description: "Verificado";
                                    readonly examples: readonly [false];
                                };
                                readonly customer: {
                                    readonly type: "string";
                                    readonly description: "ID do customer";
                                };
                                readonly fingerprint: {
                                    readonly type: "string";
                                };
                                readonly uri: {
                                    readonly type: "string";
                                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                                };
                                readonly metadata: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly description: "Criado em";
                                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                                };
                                readonly updated_at: {
                                    readonly type: "string";
                                    readonly description: "Atualizado em";
                                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                                };
                            };
                        };
                        readonly point_of_sale: {
                            readonly type: "object";
                            readonly properties: {
                                readonly entry_mode: {
                                    readonly type: "string";
                                    readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                                    readonly examples: readonly ["chip"];
                                    readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                                };
                                readonly identification_number: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly refunded: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly voided: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly captured: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly fees: {
                            readonly type: "string";
                            readonly examples: readonly ["0.05"];
                        };
                        readonly fee_details: {
                            readonly type: "object";
                            readonly properties: {
                                readonly amount: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0.05"];
                                };
                                readonly prepaid: {
                                    readonly type: "boolean";
                                    readonly examples: readonly [true];
                                };
                                readonly currency: {
                                    readonly type: "string";
                                    readonly examples: readonly ["BRL"];
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["zoop_credit_fee_d0"];
                                };
                                readonly description: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Zoop prepaid card-present credit fee"];
                                };
                            };
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id Transaction}\n"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                            };
                        };
                        readonly expected_on: {
                            readonly type: "string";
                            readonly format: "dateTime";
                            readonly examples: readonly ["2015-04-17 06:39:52+00:00"];
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly description: "Criado em";
                            readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly description: "Atualizado em";
                            readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdSourcesSourceId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly source_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do source";
                };
            };
            readonly required: readonly ["marketplace_id", "source_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["pending", "charged", "deleted"];
                    readonly examples: readonly ["charged"];
                    readonly description: "`pending` `charged` `deleted`";
                };
                readonly usage: {
                    readonly type: "string";
                    readonly enum: readonly ["single_use", "reusable"];
                    readonly default: "single_use";
                    readonly description: "`single_use` `reusable`";
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "valor a ser cobrado na venda (opcional)";
                    readonly examples: readonly ["1.00"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "moeda do valor a ser cobrado na venda (opcional)";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "descrição da venda quando gerada (opcional)";
                    readonly examples: readonly ["BRL"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["card"];
                    readonly examples: readonly ["card"];
                    readonly description: "`card`";
                };
                readonly capture: {
                    readonly type: "boolean";
                    readonly description: "Capturar transação (true) ou criar uma pre-autorização (false) para ser capturada a posteriori";
                    readonly examples: readonly [false];
                };
                readonly on_behalf_of: {
                    readonly type: "string";
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly description: "ID referência da sua aplicação VARCHAR(500)";
                    readonly examples: readonly ["10902"];
                };
                readonly card: {
                    readonly type: "object";
                    readonly description: "objeto obrigatório no tipo card e card_and_wallet";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly amount: {
                            readonly type: "string";
                            readonly description: "valor a ser cobrado na venda (opcional)";
                            readonly examples: readonly ["1.00"];
                        };
                        readonly resource: {
                            readonly type: "string";
                            readonly examples: readonly ["card"];
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly card_brand: {
                            readonly type: "string";
                            readonly examples: readonly ["Visa"];
                        };
                        readonly first4_digits: {
                            readonly type: "string";
                            readonly examples: readonly ["4893"];
                        };
                        readonly last4_digits: {
                            readonly type: "string";
                        };
                        readonly expiration_month: {
                            readonly type: "string";
                            readonly description: "Mês de expiração";
                            readonly examples: readonly [99];
                        };
                        readonly expiration_year: {
                            readonly type: "string";
                            readonly description: "Ano de expiração do cartão (AAAA)";
                            readonly examples: readonly [9999];
                        };
                        readonly holder_name: {
                            readonly type: "string";
                            readonly description: "Nome do portador do cartão";
                            readonly examples: readonly ["Nome"];
                        };
                        readonly is_active: {
                            readonly type: "boolean";
                            readonly description: "Ativo";
                            readonly examples: readonly [false];
                        };
                        readonly is_valid: {
                            readonly type: "boolean";
                            readonly description: "Valido";
                            readonly examples: readonly [true];
                        };
                        readonly is_verified: {
                            readonly type: "boolean";
                            readonly description: "Verificado";
                            readonly examples: readonly [false];
                        };
                        readonly customer: {
                            readonly type: "string";
                            readonly description: "ID do customer";
                        };
                        readonly fingerprint: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                        };
                        readonly metadata: {
                            readonly type: "string";
                            readonly examples: readonly ["{'chave': 'valor' }"];
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly description: "Criado em";
                            readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly description: "Atualizado em";
                            readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                        };
                    };
                };
                readonly installment_plan: {
                    readonly type: "object";
                    readonly properties: {
                        readonly number_installments: {
                            readonly type: "integer";
                            readonly description: "Número de parcelas (1-12)";
                            readonly examples: readonly [5];
                        };
                    };
                };
                readonly statement_descriptor: {
                    readonly type: "string";
                    readonly examples: readonly ["CORRENTISTA 03  3011"];
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly example: {
                                readonly "id buyer": any;
                            };
                            readonly description: "identificador do comprador que será cobrado para source tipo customer, wallet e card_and_wallet";
                        };
                        readonly amount: {
                            readonly type: "integer";
                            readonly example: 100;
                            readonly description: "Valor a ser cobrado neste customer (opcional)";
                        };
                    };
                };
                readonly token: {
                    readonly type: "object";
                    readonly description: "Identificador do token de cartão que será cobrado obrigatorio no source tipo token";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Identificador do cartão para source tipo card";
                        };
                        readonly amount: {
                            readonly type: "integer";
                            readonly description: "Valor a ser cobrado neste token (opcional)";
                            readonly examples: readonly [100];
                        };
                    };
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/sources/{id source}\n"];
                };
                readonly metadata: {
                    readonly type: "string";
                    readonly examples: readonly ["{'chave': 'valor' }"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
            };
            readonly required: readonly ["marketplace_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 20;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limita o número de objetos retornados, podendo ser entre 1 e 100";
                };
                readonly page: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seleciona a página";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["time-descending", "time-ascending"];
                    readonly default: "time-descending";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determinar como ordenar a lista em relação a data de criação do objeto";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determina o ponto de inicio dos registros retornados";
                };
                readonly date_range: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filtro na lista base de objetos pela data de criação. O valor pode ser uma string com um horário em UTC timestamp, ou pode ser uma lista com os parametros abaixo";
                };
                readonly "date_range[gt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data maior que o timestamp informado";
                };
                readonly "date_range[gte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for maior ou igual que o timestamp informado";
                };
                readonly "date_range[lt]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor que o timestamp informado";
                };
                readonly "date_range[lte]": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna valores onde a data for menor ou igual que o timestamp informado";
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna transações onde o reference id for igual o informado";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,";
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly enum: readonly ["credit", "boleto", "pix"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retorna transações onde o payment type for igual o informado. Para busca múltipla basta concatenar com \",\"(vírgula)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["list"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions"];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly offset: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly has_more: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly query_count: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly total: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,\n\n`succeeded` `failed` `canceled` `pre_authorized` `reversed` `refunded` `pending` `new` `partial_refunded` `dispute` `charged_back`";
                            readonly type: "string";
                            readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                        };
                        readonly resource: {
                            readonly type: "string";
                            readonly examples: readonly ["transaction"];
                        };
                        readonly amount: {
                            readonly type: "string";
                            readonly examples: readonly ["1.00"];
                        };
                        readonly original_amount: {
                            readonly type: "string";
                            readonly examples: readonly ["1.00"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly examples: readonly ["BRL"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly examples: readonly ["BRL"];
                        };
                        readonly payment_type: {
                            readonly enum: readonly ["credit", "boleto"];
                        };
                        readonly transaction_number: {
                            readonly type: "string";
                        };
                        readonly sales_receipt: {
                            readonly type: "string";
                        };
                        readonly on_behalf_of: {
                            readonly type: "string";
                        };
                        readonly statement_descriptor: {
                            readonly type: "string";
                            readonly examples: readonly ["SuaMarcaAqui"];
                        };
                        readonly payment_method: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly resource: {
                                    readonly type: "string";
                                    readonly examples: readonly ["card"];
                                };
                                readonly description: {
                                    readonly type: "string";
                                };
                                readonly card_brand: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Visa"];
                                };
                                readonly first4_digits: {
                                    readonly type: "string";
                                };
                                readonly last4_digits: {
                                    readonly type: "string";
                                };
                                readonly expiration_month: {
                                    readonly type: "string";
                                    readonly description: "Mês de expiração";
                                    readonly examples: readonly [99];
                                };
                                readonly expiration_year: {
                                    readonly type: "string";
                                    readonly description: "Ano de expiração do cartão (AAAA)";
                                    readonly examples: readonly [99];
                                };
                                readonly holder_name: {
                                    readonly type: "string";
                                    readonly description: "Nome do portador do cartão";
                                };
                                readonly is_active: {
                                    readonly type: "boolean";
                                    readonly description: "Ativo";
                                    readonly examples: readonly [false];
                                };
                                readonly is_valid: {
                                    readonly type: "boolean";
                                    readonly description: "Valido";
                                    readonly examples: readonly [true];
                                };
                                readonly is_verified: {
                                    readonly type: "boolean";
                                    readonly description: "Verificado";
                                    readonly examples: readonly [false];
                                };
                                readonly customer: {
                                    readonly type: "string";
                                    readonly description: "ID do customer";
                                };
                                readonly fingerprint: {
                                    readonly type: "string";
                                };
                                readonly uri: {
                                    readonly type: "string";
                                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                                };
                                readonly metadata: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly description: "Criado em";
                                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                                };
                                readonly updated_at: {
                                    readonly type: "string";
                                    readonly description: "Atualizado em";
                                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                                };
                            };
                        };
                        readonly point_of_sale: {
                            readonly type: "object";
                            readonly properties: {
                                readonly entry_mode: {
                                    readonly type: "string";
                                    readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                                    readonly examples: readonly ["chip"];
                                    readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                                };
                                readonly identification_number: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly refunded: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly voided: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly captured: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly fees: {
                            readonly type: "string";
                            readonly examples: readonly ["0.05"];
                        };
                        readonly fee_details: {
                            readonly type: "object";
                            readonly properties: {
                                readonly amount: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0.05"];
                                };
                                readonly prepaid: {
                                    readonly type: "boolean";
                                    readonly examples: readonly [true];
                                };
                                readonly currency: {
                                    readonly type: "string";
                                    readonly examples: readonly ["BRL"];
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["zoop_credit_fee_d0"];
                                };
                                readonly description: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Zoop prepaid card-present credit fee"];
                                };
                            };
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id Transaction}\n"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                            };
                        };
                        readonly expected_on: {
                            readonly type: "string";
                            readonly format: "dateTime";
                            readonly examples: readonly ["2015-04-17 06:39:52+00:00"];
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly description: "Criado em";
                            readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly description: "Atualizado em";
                            readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdTransactionsTransactionId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,\n\n`succeeded` `failed` `canceled` `pre_authorized` `reversed` `refunded` `pending` `new` `partial_refunded` `dispute` `charged_back`";
                    readonly type: "string";
                    readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                };
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["transaction"];
                };
                readonly amount: {
                    readonly type: "string";
                    readonly examples: readonly ["1.00"];
                };
                readonly original_amount: {
                    readonly type: "string";
                    readonly examples: readonly ["1.00"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly payment_type: {
                    readonly enum: readonly ["credit", "boleto"];
                };
                readonly transaction_number: {
                    readonly type: "string";
                };
                readonly sales_receipt: {
                    readonly type: "string";
                };
                readonly on_behalf_of: {
                    readonly type: "string";
                };
                readonly statement_descriptor: {
                    readonly type: "string";
                    readonly examples: readonly ["SuaMarcaAqui"];
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly resource: {
                            readonly type: "string";
                            readonly examples: readonly ["card"];
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly card_brand: {
                            readonly type: "string";
                            readonly examples: readonly ["Visa"];
                        };
                        readonly first4_digits: {
                            readonly type: "string";
                        };
                        readonly last4_digits: {
                            readonly type: "string";
                        };
                        readonly expiration_month: {
                            readonly type: "string";
                            readonly description: "Mês de expiração";
                            readonly examples: readonly [99];
                        };
                        readonly expiration_year: {
                            readonly type: "string";
                            readonly description: "Ano de expiração do cartão (AAAA)";
                            readonly examples: readonly [99];
                        };
                        readonly holder_name: {
                            readonly type: "string";
                            readonly description: "Nome do portador do cartão";
                        };
                        readonly is_active: {
                            readonly type: "boolean";
                            readonly description: "Ativo";
                            readonly examples: readonly [false];
                        };
                        readonly is_valid: {
                            readonly type: "boolean";
                            readonly description: "Valido";
                            readonly examples: readonly [true];
                        };
                        readonly is_verified: {
                            readonly type: "boolean";
                            readonly description: "Verificado";
                            readonly examples: readonly [false];
                        };
                        readonly customer: {
                            readonly type: "string";
                            readonly description: "ID do customer";
                        };
                        readonly fingerprint: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly description: "Criado em";
                            readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly description: "Atualizado em";
                            readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                        };
                    };
                };
                readonly point_of_sale: {
                    readonly type: "object";
                    readonly properties: {
                        readonly entry_mode: {
                            readonly type: "string";
                            readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                            readonly examples: readonly ["chip"];
                            readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                        };
                        readonly identification_number: {
                            readonly type: "string";
                        };
                    };
                };
                readonly refunded: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly voided: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly captured: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly fees: {
                    readonly type: "string";
                    readonly examples: readonly ["0.05"];
                };
                readonly fee_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amount: {
                            readonly type: "string";
                            readonly examples: readonly ["0.05"];
                        };
                        readonly prepaid: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly examples: readonly ["BRL"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["zoop_credit_fee_d0"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly examples: readonly ["Zoop prepaid card-present credit fee"];
                        };
                    };
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id Transaction}\n"];
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "string";
                    };
                };
                readonly expected_on: {
                    readonly type: "string";
                    readonly format: "dateTime";
                    readonly examples: readonly ["2015-04-17 06:39:52+00:00"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdTransactionsTransactionIdCancelledLetter: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://zoop-cancelled-letters-prod.s3.amazonaws.com/Carta_Cancelamento_Venda_fe39ddda9b384ddc91c6efab6b74dc8e_2021-02-27T14%3A03%3A54.pdf"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "513": {
            readonly type: "object";
            readonly properties: {
                readonly erro: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly description: "status";
                            readonly examples: readonly ["Integration Failure"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly description: "Código do erro";
                            readonly examples: readonly [513];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Tipo do erro";
                            readonly examples: readonly ["processing_erro"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Categoria do erro";
                            readonly examples: readonly ["gateway_error"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Mensagem do erro";
                            readonly examples: readonly ["Internal server error"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdTransactionsTransactionIdReceivables: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Identificador do recebível retornado";
                };
                readonly resource: {
                    readonly type: "string";
                    readonly description: "Recurso referente a informação retornada";
                    readonly examples: readonly ["receivable"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status do recebível";
                    readonly examples: readonly ["pending"];
                };
                readonly recipient: {
                    readonly type: "string";
                    readonly description: "Identificador do recebedor";
                };
                readonly transaction: {
                    readonly type: "string";
                    readonly description: "Identificador da transação que originou o recebível";
                };
                readonly split_rule: {
                    readonly type: "string";
                    readonly description: "Se houve o split da transação, irá aparecer o identificador do split";
                };
                readonly installment: {
                    readonly type: "string";
                    readonly description: "Informação se a respeito de parcelamento da transação";
                };
                readonly liable: {
                    readonly type: "string";
                    readonly description: "Liable da transação";
                    readonly examples: readonly [true];
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "Valor liquido da transação";
                    readonly examples: readonly ["34.40"];
                };
                readonly gross_amount: {
                    readonly type: "string";
                    readonly description: "Valor bruto da transação";
                    readonly examples: readonly ["36.00"];
                };
                readonly anticipation_fee: {
                    readonly type: "string";
                    readonly description: "Taxa da antecipação quando o recebível for antecipado";
                    readonly examples: readonly ["0.00"];
                };
                readonly paid_at: {
                    readonly type: "string";
                    readonly description: "Data da liquidação do recebível";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly transaction_created_at: {
                    readonly type: "string";
                    readonly description: "Data da criação da transação";
                    readonly examples: readonly ["2020-07-09T19:04:26+00:00"];
                };
                readonly canceled_at: {
                    readonly type: "string";
                    readonly description: "Data de cancelamento do recebível";
                };
                readonly expected_on: {
                    readonly type: "string";
                    readonly description: "Data prevista de liquidação do recebível";
                    readonly examples: readonly ["2020-08-10T00:00:00+00:00"];
                };
                readonly authorization_code: {
                    readonly type: "string";
                    readonly description: "Código de autorização da transação";
                };
                readonly id_original_receivable: {
                    readonly type: "string";
                    readonly description: "ID original do recebível";
                };
                readonly prepaid: {
                    readonly type: "string";
                    readonly description: "Se o recebível foi antecipado";
                    readonly examples: readonly [false];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly examples: readonly [400];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["bad_request_exception"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly examples: readonly ["bad_request_exception"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly examples: readonly ["ObjectDoesNotExist"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRules: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id"];
        }];
    };
};
declare const GetV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do split";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id", "id"];
        }];
    };
};
declare const GetV1ReceiptsMarketplaceIdReceiptId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly receipt_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do recibo";
                };
            };
            readonly required: readonly ["marketplace_id", "receipt_id"];
        }];
    };
    readonly response: {
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly examples: readonly ["resource_not_found"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly examples: readonly ["Sorry, the receipt (id: ) you are trying to use does not exist or has been deleted."];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1BoletosCancellationMarketplacesMarketplaceIdTransactionsTransactionId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly anyOf: readonly [{
                readonly description: "Cancellation request created successfully";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["Requested"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Cancellation request created successfully"];
                    };
                    readonly transaction_id: {
                        readonly type: "string";
                    };
                };
            }, {
                readonly description: "Cancellation already requested successfully";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["Requested"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Cancellation already requested successfully"];
                    };
                    readonly transaction_id: {
                        readonly type: "string";
                    };
                };
            }];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly oneOf: readonly [{
                readonly description: "Transaction not found";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["ERROR"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Transaction not found"];
                    };
                };
            }, {
                readonly description: "Cancellation request already exists for this transaction";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["ERROR"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Cancellation request already exists for this transaction"];
                    };
                };
            }, {
                readonly description: "Transaction status is invalid";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["REFUSED"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Transaction status is invalid"];
                    };
                };
            }];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly description: "There was an issue not expected during the request";
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["ERROR"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["There was an issue not expected during the request"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1MarketplacesMarketplaceIdBoletosBoletoIdEmails: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly boleto_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do boleto";
                };
            };
            readonly required: readonly ["marketplace_id", "boleto_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "Mensagem";
                    readonly examples: readonly ["success"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly description: "Código do erro";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Tipo de erro";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Categoria de erro";
                            readonly examples: readonly ["resource_not_found"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Mensagem de erro";
                            readonly examples: readonly ["Sorry, the boleto you are trying to use does not exist or has been deleted."];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1MarketplacesMarketplaceIdCards: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["token", "customer"];
        readonly properties: {
            readonly token: {
                readonly type: "string";
                readonly description: "Identificador do token de cartão a ser associado ao customer";
            };
            readonly customer: {
                readonly type: "string";
                readonly description: "ID do customer";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
            };
            readonly required: readonly ["marketplace_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "ID do token";
                };
                readonly resource: {
                    readonly type: "string";
                    readonly description: "Tipo de recurso";
                    readonly examples: readonly ["card"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Descrição";
                };
                readonly card_brand: {
                    readonly type: "string";
                    readonly description: "Bandeira do cartão";
                    readonly examples: readonly ["Visa"];
                };
                readonly first4_digits: {
                    readonly type: "string";
                    readonly description: "Quatros primeiros dígitos do cartão.";
                    readonly examples: readonly [4539];
                };
                readonly last4_digits: {
                    readonly type: "string";
                    readonly description: "Quatros ultimos dígitos do cartão.";
                    readonly examples: readonly [5497];
                };
                readonly expiration_month: {
                    readonly type: "string";
                    readonly description: "Mês de expiração";
                    readonly examples: readonly [1];
                };
                readonly expiration_year: {
                    readonly type: "string";
                    readonly description: "Ano de expiração do cartão (AAAA)";
                    readonly examples: readonly [2021];
                };
                readonly holder_name: {
                    readonly type: "string";
                    readonly description: "Nome do portador do cartão";
                    readonly examples: readonly ["Nome"];
                };
                readonly is_active: {
                    readonly type: "boolean";
                    readonly description: "Ativo";
                    readonly examples: readonly [true];
                };
                readonly is_valid: {
                    readonly type: "boolean";
                    readonly description: "Valido";
                    readonly examples: readonly [true];
                };
                readonly is_verified: {
                    readonly type: "boolean";
                    readonly description: "Verificado";
                    readonly examples: readonly [false];
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer";
                };
                readonly fingerprint: {
                    readonly type: "string";
                    readonly description: "Digital";
                };
                readonly address: {
                    readonly type: "string";
                    readonly description: "Endereço";
                };
                readonly verification_checklist: {
                    readonly type: "object";
                    readonly properties: {
                        readonly postal_code_check: {
                            readonly type: "string";
                            readonly description: "Verificação de código postal";
                            readonly examples: readonly ["unchecked"];
                        };
                        readonly security_code_check: {
                            readonly type: "string";
                            readonly description: "Verificação do código de segurança";
                            readonly examples: readonly ["fail"];
                        };
                        readonly address_line1_check: {
                            readonly type: "string";
                            readonly description: "Verificação de endereço";
                            readonly examples: readonly ["unchecked"];
                        };
                    };
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "string";
                    };
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}\""];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly description: "Código do erro";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Tipo de erro";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Categoria de erro";
                            readonly examples: readonly ["resource_not_found"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Mensagem de erro";
                            readonly examples: readonly ["Sorry, the token/customer (id: customer id) you are trying to use does not exist or has been deleted. / Sorry, the card zero dollar validation has failed. "];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1MarketplacesMarketplaceIdInvoices: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subscription: {
                readonly description: "referência a uma assinatura existente";
                readonly type: "string";
                readonly format: "uuid";
            };
            readonly on_behalf_of: {
                readonly description: "Referência a um vendedor existente";
                readonly type: "string";
                readonly format: "uuid";
            };
            readonly customer: {
                readonly type: "string";
                readonly description: "ID do customer";
            };
            readonly description: {
                readonly description: "descrição da assinatura";
                readonly type: "string";
                readonly format: "text";
            };
            readonly payment_method: {
                readonly description: "método de pagamento";
                readonly type: "string";
                readonly enum: readonly ["credit"];
                readonly default: "credit";
            };
            readonly due_date: {
                readonly description: "data da cobrança";
                readonly type: "string";
                readonly format: "date";
                readonly examples: readonly ["2017-07-21"];
            };
            readonly expiration_date: {
                readonly type: "string";
                readonly description: "Data de vencimento";
                readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
            };
            readonly amount: {
                readonly description: "valor em centavos";
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly currency: {
                readonly description: "moeda utilizada seguindo o padrão ISO4217";
                readonly type: "string";
                readonly examples: readonly ["BRL"];
            };
            readonly paid_at: {
                readonly description: "data do pagamento";
                readonly readOnly: true;
                readonly type: "string";
                readonly format: "date-time";
            };
            readonly voided_at: {
                readonly description: "data do cancelamento";
                readonly readOnly: true;
                readonly type: "integer";
                readonly format: "date-time";
            };
            readonly status: {
                readonly description: "status da cobrança";
                readonly readOnly: true;
                readonly type: "string";
                readonly enum: readonly ["pending", "paid", "canceled", "failed"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
            };
            readonly required: readonly ["marketplace_id"];
        }];
    };
};
declare const PostV1MarketplacesMarketplaceIdInvoicesInvoiceIdApprove: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly invoice_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "invoice_id"];
        }];
    };
};
declare const PostV1MarketplacesMarketplaceIdReceiptsReceiptIdEmails: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly to: {
                readonly type: "string";
                readonly description: "Informar o email para envio";
                readonly examples: readonly ["teste@teste.com.br"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly receipt_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do recibo";
                };
            };
            readonly required: readonly ["marketplace_id", "receipt_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly delivery_method: {
                    readonly type: "string";
                    readonly examples: readonly ["email"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly examples: readonly ["resource_not_found"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly examples: readonly ["Sorry, the receipt you are trying to use does not exist or has been deleted."];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1MarketplacesMarketplaceIdReceiptsReceiptIdTexts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly to: {
                readonly type: "string";
                readonly description: "Informar país, código de área e o número do celular para envio";
                readonly examples: readonly ["+55 21999099999"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly receipt_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador do recibo";
                };
            };
            readonly required: readonly ["marketplace_id", "receipt_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly delivery_method: {
                    readonly type: "string";
                    readonly examples: readonly ["email"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly examples: readonly ["resource_not_found"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly examples: readonly ["Sorry, the receipt you are trying to use does not exist or has been deleted."];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1MarketplacesMarketplaceIdRecurrencePlans: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "frequency", "interval", "payment_methods", "currency"];
        readonly properties: {
            readonly frequency: {
                readonly description: "Frequencia que o plano será cobrado";
                readonly type: "string";
                readonly enum: readonly ["daily", "monthly", "weekly", "annually"];
            };
            readonly interval: {
                readonly description: "intervalo entre frequencia de cobrança";
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly payment_methods: {
                readonly description: "métodos de pagamento utilizados";
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly enum: readonly ["credit"];
                    readonly default: "credit";
                };
            };
            readonly amount: {
                readonly description: "valor plano em centavos";
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly setup_amount: {
                readonly description: "valor do setup do plano em centavos";
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly currency: {
                readonly description: "moeda utilizada no formato ISO 4217";
                readonly type: "string";
                readonly examples: readonly ["BRL"];
            };
            readonly description: {
                readonly description: "descrição do plano";
                readonly type: "string";
            };
            readonly name: {
                readonly description: "nome do plano";
                readonly type: "string";
            };
            readonly duration: {
                readonly description: "tempo de duração do plano em relação à frequencia escolhida";
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
            };
            readonly required: readonly ["marketplace_id"];
        }];
    };
};
declare const PostV1MarketplacesMarketplaceIdRecurrenceSubscriptions: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly plan: {
                readonly description: "referência a um plano existente";
                readonly type: "string";
                readonly format: "uuid";
            };
            readonly on_behalf_of: {
                readonly description: "Referência a um vendedor existente";
                readonly type: "string";
                readonly format: "uuid";
            };
            readonly customer: {
                readonly type: "string";
                readonly description: "ID do customer";
            };
            readonly payment_method: {
                readonly description: "método de pagamento";
                readonly type: "string";
                readonly enum: readonly ["credit"];
                readonly default: "credit";
            };
            readonly due_date: {
                readonly description: "data da cobrança";
                readonly type: "string";
                readonly format: "date";
                readonly examples: readonly ["2017-07-21"];
            };
            readonly expiration_date: {
                readonly type: "string";
                readonly description: "Data de vencimento";
                readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
            };
            readonly amount: {
                readonly description: "valor em centavos";
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly currency: {
                readonly description: "moeda utilizada, no formato ISO4217";
                readonly type: "string";
                readonly examples: readonly ["BRL"];
            };
            readonly card: {
                readonly description: "Identificado Zoop do cartão a ser utilizado na recorrência";
                readonly type: "string";
                readonly format: "uuid";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
            };
            readonly required: readonly ["marketplace_id"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly uuid: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly plan: {
                    readonly description: "referência a um plano existente";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly on_behalf_of: {
                    readonly description: "Referência a um vendedor existente";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer";
                };
                readonly description: {
                    readonly description: "descrição da assinatura";
                    readonly type: "string";
                    readonly format: "text";
                };
                readonly payment_method: {
                    readonly description: "método de pagamento\n\n`credit`";
                    readonly type: "string";
                    readonly enum: readonly ["credit"];
                    readonly default: "credit";
                };
                readonly due_date: {
                    readonly description: "data da cobrança";
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["2017-07-21"];
                };
                readonly due_since_date: {
                    readonly description: "data da última cobrança da assinatura";
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["2017-07-21"];
                };
                readonly expiration_date: {
                    readonly type: "string";
                    readonly description: "Data de vencimento";
                    readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                };
                readonly amount: {
                    readonly description: "valor em centavos";
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly currency: {
                    readonly description: "moeda utilizada no formato ISO4217";
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly status: {
                    readonly description: "status da assinatura\n\n`active` `suspended` `canceled` `expired`";
                    readonly type: "string";
                    readonly enum: readonly ["active", "suspended", "canceled", "expired"];
                };
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["subscription"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
                readonly suspended_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2017-07-25"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{marketplace_id}/recurrence_subscriptions/{subscription_id}"];
                };
                readonly card: {
                    readonly description: "Identificador Zoop do cartão a ser utilizado na recorrência";
                    readonly type: "string";
                    readonly format: "uuid";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdReactivate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly subscription_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "subscription_id"];
        }];
    };
};
declare const PostV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdSuspend: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly subscription_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "subscription_id"];
        }];
    };
};
declare const PostV1MarketplacesMarketplaceIdSources: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly usage: {
                readonly type: "string";
                readonly enum: readonly ["single_use", "reusable"];
                readonly default: "single_use";
            };
            readonly amount: {
                readonly type: "integer";
                readonly description: "Valor em centavos a ser cobrado na venda (opcional)";
                readonly examples: readonly [100];
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Moeda do valor a ser cobrado na venda";
                readonly examples: readonly ["BRL"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Descrição da venda quando gerada (opcional)";
                readonly examples: readonly ["BRL"];
            };
            readonly type: {
                readonly type: "string";
                readonly enum: readonly ["card"];
                readonly examples: readonly ["card"];
            };
            readonly capture: {
                readonly type: "boolean";
                readonly description: "Capturar transação (true) ou criar uma pre-autorização (false) para ser capturada a posteriori";
                readonly examples: readonly [false];
            };
            readonly on_behalf_of: {
                readonly type: "string";
            };
            readonly reference_id: {
                readonly type: "string";
                readonly description: "ID referência da sua aplicação VARCHAR(500)";
                readonly examples: readonly ["10902"];
            };
            readonly card: {
                readonly type: "object";
                readonly description: "Objeto obrigatório no tipo card e card_and_wallet";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Identificador do cartão para source tipo card";
                    };
                    readonly amount: {
                        readonly type: "integer";
                        readonly description: "Valor a ser cobrado neste cartao (opcional)";
                        readonly examples: readonly [100];
                    };
                    readonly holder_name: {
                        readonly type: "string";
                        readonly description: "Nome do portador do cartão";
                        readonly examples: readonly ["Julio Alvarenga"];
                    };
                    readonly expiration_month: {
                        readonly type: "string";
                        readonly description: "Mês de expiração";
                        readonly examples: readonly [12];
                    };
                    readonly expiration_year: {
                        readonly type: "string";
                        readonly description: "Ano de expiração do cartão (AAAA)";
                        readonly examples: readonly [2023];
                    };
                    readonly card_number: {
                        readonly type: "string";
                        readonly description: "Número do cartão";
                    };
                    readonly security_code: {
                        readonly type: "string";
                        readonly description: "Código de segurança do cartão (CVC)";
                    };
                };
            };
            readonly installment_plan: {
                readonly type: "object";
                readonly properties: {
                    readonly number_installments: {
                        readonly type: "integer";
                        readonly description: "Número de parcelas (1-12)";
                        readonly examples: readonly [5];
                    };
                };
            };
            readonly statement_descriptor: {
                readonly type: "string";
                readonly examples: readonly ["CORRENTISTA 03  3011"];
            };
            readonly customer: {
                readonly type: "string";
                readonly description: "ID do customer";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly example: {
                            readonly "id buyer": any;
                        };
                        readonly description: "Identificador do comprador que será cobrado para source tipo customer, wallet e card_and_wallet";
                    };
                    readonly amount: {
                        readonly type: "integer";
                        readonly example: 100;
                        readonly description: "Valor a ser cobrado neste customer (opcional)";
                    };
                };
            };
            readonly token: {
                readonly type: "object";
                readonly description: "Identificador do token de cartão que será cobrado obrigatorio no source tipo token";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Identificador do cartão para source tipo card";
                    };
                    readonly amount: {
                        readonly type: "integer";
                        readonly description: "Valor a ser cobrado neste token (opcional)";
                        readonly examples: readonly [100];
                    };
                };
            };
            readonly metadata: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
            };
        };
        readonly required: readonly ["type", "usage", "currency"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
            };
            readonly required: readonly ["marketplace_id"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["pending", "charged", "deleted"];
                    readonly examples: readonly ["charged"];
                    readonly description: "`pending` `charged` `deleted`";
                };
                readonly usage: {
                    readonly type: "string";
                    readonly enum: readonly ["single_use", "reusable"];
                    readonly default: "single_use";
                    readonly description: "`single_use` `reusable`";
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "valor a ser cobrado na venda (opcional)";
                    readonly examples: readonly ["1.00"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "moeda do valor a ser cobrado na venda (opcional)";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "descrição da venda quando gerada (opcional)";
                    readonly examples: readonly ["BRL"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["card"];
                    readonly examples: readonly ["card"];
                    readonly description: "`card`";
                };
                readonly capture: {
                    readonly type: "boolean";
                    readonly description: "Capturar transação (true) ou criar uma pre-autorização (false) para ser capturada a posteriori";
                    readonly examples: readonly [false];
                };
                readonly on_behalf_of: {
                    readonly type: "string";
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly description: "ID referência da sua aplicação VARCHAR(500)";
                    readonly examples: readonly ["10902"];
                };
                readonly card: {
                    readonly type: "object";
                    readonly description: "objeto obrigatório no tipo card e card_and_wallet";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly amount: {
                            readonly type: "string";
                            readonly description: "valor a ser cobrado na venda (opcional)";
                            readonly examples: readonly ["1.00"];
                        };
                        readonly resource: {
                            readonly type: "string";
                            readonly examples: readonly ["card"];
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly card_brand: {
                            readonly type: "string";
                            readonly examples: readonly ["Visa"];
                        };
                        readonly first4_digits: {
                            readonly type: "string";
                            readonly examples: readonly ["4893"];
                        };
                        readonly last4_digits: {
                            readonly type: "string";
                        };
                        readonly expiration_month: {
                            readonly type: "string";
                            readonly description: "Mês de expiração";
                            readonly examples: readonly [99];
                        };
                        readonly expiration_year: {
                            readonly type: "string";
                            readonly description: "Ano de expiração do cartão (AAAA)";
                            readonly examples: readonly [9999];
                        };
                        readonly holder_name: {
                            readonly type: "string";
                            readonly description: "Nome do portador do cartão";
                            readonly examples: readonly ["Nome"];
                        };
                        readonly is_active: {
                            readonly type: "boolean";
                            readonly description: "Ativo";
                            readonly examples: readonly [false];
                        };
                        readonly is_valid: {
                            readonly type: "boolean";
                            readonly description: "Valido";
                            readonly examples: readonly [true];
                        };
                        readonly is_verified: {
                            readonly type: "boolean";
                            readonly description: "Verificado";
                            readonly examples: readonly [false];
                        };
                        readonly customer: {
                            readonly type: "string";
                            readonly description: "ID do customer";
                        };
                        readonly fingerprint: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                        };
                        readonly metadata: {
                            readonly type: "string";
                            readonly examples: readonly ["{'chave': 'valor' }"];
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly description: "Criado em";
                            readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly description: "Atualizado em";
                            readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                        };
                    };
                };
                readonly installment_plan: {
                    readonly type: "object";
                    readonly properties: {
                        readonly number_installments: {
                            readonly type: "integer";
                            readonly description: "Número de parcelas (1-12)";
                            readonly examples: readonly [5];
                        };
                    };
                };
                readonly statement_descriptor: {
                    readonly type: "string";
                    readonly examples: readonly ["CORRENTISTA 03  3011"];
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly example: {
                                readonly "id buyer": any;
                            };
                            readonly description: "identificador do comprador que será cobrado para source tipo customer, wallet e card_and_wallet";
                        };
                        readonly amount: {
                            readonly type: "integer";
                            readonly example: 100;
                            readonly description: "Valor a ser cobrado neste customer (opcional)";
                        };
                    };
                };
                readonly token: {
                    readonly type: "object";
                    readonly description: "Identificador do token de cartão que será cobrado obrigatorio no source tipo token";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Identificador do cartão para source tipo card";
                        };
                        readonly amount: {
                            readonly type: "integer";
                            readonly description: "Valor a ser cobrado neste token (opcional)";
                            readonly examples: readonly [100];
                        };
                    };
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/sources/{id source}\n"];
                };
                readonly metadata: {
                    readonly type: "string";
                    readonly examples: readonly ["{'chave': 'valor' }"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1MarketplacesMarketplaceIdTerminalsPairing: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["seller_id"];
        readonly properties: {
            readonly seller: {
                readonly type: "string";
                readonly description: "Identificador do seller";
            };
            readonly marketplace_id: {
                readonly type: "boolean";
                readonly description: "Identificador do marketplace";
            };
            readonly token: {
                readonly type: "string";
                readonly description: "Identificador do token";
            };
            readonly isStaging: {
                readonly type: "boolean";
                readonly description: "false para ambiente de produção.";
                readonly examples: readonly [false];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
            };
            readonly required: readonly ["marketplace_id"];
        }];
    };
};
declare const PostV1MarketplacesMarketplaceIdTransactions: {
    readonly body: {
        readonly anyOf: readonly [{
            readonly type: "object";
            readonly title: "Autorizacao Direta";
            readonly required: readonly ["amount", "currency", "payment_type", "on_behalf_of", "source"];
            readonly properties: {
                readonly on_behalf_of: {
                    readonly type: "string";
                    readonly description: "Identificador do seller responsável pela venda.";
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["Uma descrição breve da motivação da sua transação"];
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly description: "Tipo do pagamento";
                    readonly enum: readonly ["credit"];
                    readonly default: "credit";
                };
                readonly capture: {
                    readonly type: "boolean";
                    readonly description: "Capturar transação (true - default),  ou criar uma pre-autorização (false) para ser capturada a posteriori";
                    readonly examples: readonly [true];
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly description: "ID referência único da sua aplicação VARCHAR(500)";
                    readonly examples: readonly ["10902"];
                };
                readonly source: {
                    readonly type: "object";
                    readonly properties: {
                        readonly usage: {
                            readonly type: "string";
                            readonly examples: readonly ["single_use"];
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "Valor em centavos a ser cobrado pela transação";
                            readonly examples: readonly [700];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "Moeda do valor a ser cobrado na venda BRL";
                            readonly examples: readonly ["BRL"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["card"];
                        };
                        readonly card: {
                            readonly type: "object";
                            readonly properties: {
                                readonly card_number: {
                                    readonly type: "string";
                                    readonly description: "Número do cartão";
                                };
                                readonly holder_name: {
                                    readonly type: "string";
                                    readonly description: "Nome do portador do cartão";
                                };
                                readonly expiration_month: {
                                    readonly type: "string";
                                    readonly description: "Mês de expiração";
                                    readonly examples: readonly [99];
                                };
                                readonly expiration_year: {
                                    readonly type: "string";
                                    readonly description: "Ano de expiração do cartão (AAAA)";
                                    readonly examples: readonly [99];
                                };
                                readonly security_code: {
                                    readonly type: "string";
                                    readonly description: "Código de segurança do cartão (CVC)";
                                };
                            };
                        };
                    };
                };
                readonly installment_plan: {
                    readonly type: "object";
                    readonly title: "Parcelamento";
                    readonly properties: {
                        readonly number_installments: {
                            readonly type: "integer";
                            readonly description: "Número de parcelas (1-12)";
                            readonly examples: readonly [5];
                        };
                    };
                };
                readonly three_d_secure: {
                    readonly title: "3DS";
                    readonly type: "object";
                    readonly anyOf: readonly [{
                        readonly type: "object";
                        readonly title: "Usando 3DS";
                        readonly required: readonly ["amount", "recipient", "charge_processing_fee"];
                        readonly properties: {
                            readonly embedded: {
                                readonly type: "boolean";
                                readonly description: "Informa se o serviço MPI utilizado será da Rede ou terceiro. (true) utiliza o serviço MPI da Rede; (false) utiliz serviço MPI terceiro.";
                                readonly examples: readonly [false];
                            };
                            readonly eci: {
                                readonly type: "string";
                                readonly description: "Codigo retornado ao MPI pelas bandeiras que indica o resultado da autenticação do portador junto ao Emissor. Transações de débito devem ser obrigatoriamente autenticadas";
                                readonly examples: readonly ["02"];
                            };
                            readonly cavv: {
                                readonly type: "string";
                                readonly description: "Codigo do criptograma utilizado na autenticação da transação e enviada pelo MPI do estabelecimento (pode conter caracteres especiais)";
                                readonly examples: readonly ["12345678901234567890123456789012"];
                            };
                            readonly three_d_indicator: {
                                readonly type: "integer";
                                readonly description: "Versão do 3DS usado no processo de autenticação pelo MPI";
                                readonly examples: readonly ["test_three_d_indicator"];
                            };
                            readonly xid: {
                                readonly type: "string";
                                readonly description: "ID da transação de autenticação incluída pelo MPI ao estabelecimento (pode conter caracteres especiais). Deve ser enviado apenas para utilização do serviço de autenticação 3DS. Campo utilizado somente para bandeira ***Visa.";
                                readonly examples: readonly ["test_this_is_a_test_for_three_d_s"];
                            };
                            readonly directory_server_transaction_id: {
                                readonly type: "string";
                                readonly description: "ID da transação de autenticação incluída pelo MPI ao estabelecimento (pode conter caracteres especiais). Deve ser enviado apenas para utilização do serviço de autenticação 3DS";
                                readonly examples: readonly ["test_this_is_a_test_for_three_d_secure_3d"];
                            };
                        };
                    }, {
                        readonly title: "Usando 3DS Data Only";
                        readonly required: readonly ["challenge_type", "ip_address", "on_failure", "device"];
                        readonly properties: {
                            readonly challenge_type: {
                                readonly type: "string";
                                readonly description: "Enviar o valor fixo DATA_ONLY.";
                                readonly examples: readonly ["DATA_ONLY"];
                            };
                            readonly ip_address: {
                                readonly type: "string";
                                readonly description: "Endereço IP do checkout. Não é aceito IPV6 e para esses casos, definir um valor default estático no padrão IPV4.";
                                readonly examples: readonly ["10.0.0.1"];
                            };
                            readonly user_agent: {
                                readonly type: "string";
                                readonly description: "Identificador do browser utilizado pelo comprador no momento da compra.";
                                readonly examples: readonly ["Mozilla/5.0"];
                            };
                            readonly on_failure: {
                                readonly type: "string";
                                readonly description: "Enviar como “continue”.";
                                readonly default: "continue";
                                readonly examples: readonly ["continue"];
                            };
                            readonly device: {
                                readonly type: "object";
                                readonly title: "Dados referentes ao device utilizado no momento da compra.";
                                readonly properties: {
                                    readonly color_depth: {
                                        readonly type: "integer";
                                        readonly description: "Campo que representa a estimativa da paleta de cores usada para a exibição de imagens, em bits por pixel. Sempre passar o valor fixo 24.";
                                        readonly examples: readonly [24];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Campo que indica o tipo de dispositivo no qual a autenticação ocorre. Sempre passar o valor fixo \"BROWSER\".";
                                        readonly examples: readonly ["BROWSER"];
                                    };
                                    readonly java_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "Campo booleano que representa a capacidade do navegador para executar Java. Sempre passar o valor fixo \"false\".";
                                        readonly default: "false";
                                        readonly examples: readonly [false];
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Idioma do navegador no formato [IETF BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt), contendo entre 1 e 8 caracteres";
                                        readonly examples: readonly ["pt-BR"];
                                    };
                                    readonly screen_height: {
                                        readonly type: "integer";
                                        readonly description: "A altura total da tela do cliente em pixels. O valor é aquele retornado pela propriedade screen.height";
                                        readonly examples: readonly [500];
                                    };
                                    readonly screen_width: {
                                        readonly type: "integer";
                                        readonly description: "A largura total da tela do cliente em pixels. O valor é aquele retornado pela propriedade screen.width";
                                        readonly examples: readonly [500];
                                    };
                                    readonly time_zone_offset: {
                                        readonly type: "integer";
                                        readonly description: "Diferença de horário, em horas, entre o UTC e a hora local do navegador do titular do cartão.\"";
                                        readonly examples: readonly [3];
                                    };
                                };
                            };
                            readonly billing: {
                                readonly type: "object";
                                readonly required: readonly ["postal_code"];
                                readonly title: "Dados referentes ao portador do cartão.";
                                readonly properties: {
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "Rua.";
                                        readonly examples: readonly ["Endereço"];
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly description: "Cidade.";
                                        readonly examples: readonly ["Cidade"];
                                    };
                                    readonly postal_code: {
                                        readonly type: "string";
                                        readonly description: "CEP com 8 digitos sem separador. Não é aceito CEP estrangeiro. Em casos de CEP estrangeiro, o marketplace deve enviar um valor default fixo do marketplace no campo.";
                                        readonly examples: readonly ["CEP"];
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                        readonly description: "Código ISO 3166-2 para o estado, com duas letras. Ex.: \"MG\",\"RJ\",\"PR\"";
                                        readonly examples: readonly ["UF"];
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly description: "ISO 3166-1 alpha-2 - códigos de país de duas letras. Valor padrão: \"BR\"";
                                        readonly examples: readonly ["BR"];
                                    };
                                    readonly email_address: {
                                        readonly type: "string";
                                        readonly description: "Email do portador do cartão";
                                        readonly examples: readonly ["Email@email.com.br"];
                                    };
                                    readonly phone_number: {
                                        readonly type: "integer";
                                        readonly description: "Telefone do portador do cartão";
                                        readonly examples: readonly ["(99)99999-9999"];
                                    };
                                };
                            };
                        };
                        readonly type: "object";
                    }];
                };
                readonly split_rules: {
                    readonly title: "Divisão entre participantes";
                    readonly items: {
                        readonly anyOf: readonly [{
                            readonly type: "object";
                            readonly title: "Split por valor taxas do seller (principal)";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "Identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define se o split será em cima do valor bruto - (0) ou false - ou liquido - (1) ou true";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem dividindo as taxas proporcionalmente";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor líquido (1) ou true da transação.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true. Só pode ser usado para apenas um participante do split";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipiente assume todo o valor da transacao";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "is_gross_amount"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor liquido 1 ou true";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly is_gross_amount: {
                                    readonly type: "boolean";
                                    readonly description: "Quando o valor (amount) é passado exatamente igual ao valor da transação ocorre o erro pois, o parceiro esquece da taxa Zoop. Para evitar esse tipo de problema, deve-se usar está opção como 1 ou true e, com isso, a API irá considerar a taxa Zoop antes do split.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }];
                    };
                    readonly type: "array";
                };
            };
        }, {
            readonly type: "object";
            readonly title: "Usando Customer ID";
            readonly required: readonly ["amount", "currency", "payment_type", "on_behalf_of"];
            readonly properties: {
                readonly on_behalf_of: {
                    readonly type: "string";
                    readonly description: "Identificador do seller responsável pela venda.";
                    readonly examples: readonly ["54f5445fd4544b454654fdf46545465g"];
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer (comprador)";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly description: "Valor em centavos a ser cobrado pela transação";
                    readonly examples: readonly [300];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "Moeda do valor a ser cobrado na venda BRL";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["Uma descrição breve da motivação da sua transação"];
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly description: "Tipo do pagamento";
                    readonly enum: readonly ["credit"];
                    readonly default: "credit";
                };
                readonly capture: {
                    readonly type: "boolean";
                    readonly description: "Capturar transação (true - default) ou criar uma pre-autorização (false) para ser capturada a posteriori";
                    readonly examples: readonly [true];
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly description: "ID referência único da sua aplicação VARCHAR(500)";
                    readonly examples: readonly ["10902"];
                };
                readonly installment_plan: {
                    readonly type: "object";
                    readonly title: "Parcelamento";
                    readonly properties: {
                        readonly number_installments: {
                            readonly type: "integer";
                            readonly description: "Número de parcelas (1-12)";
                            readonly examples: readonly [5];
                        };
                    };
                };
                readonly three_d_secure: {
                    readonly title: "3DS";
                    readonly type: "object";
                    readonly anyOf: readonly [{
                        readonly type: "object";
                        readonly title: "Usando 3DS";
                        readonly required: readonly ["amount", "recipient", "charge_processing_fee"];
                        readonly properties: {
                            readonly embedded: {
                                readonly type: "boolean";
                                readonly description: "Informa se o serviço MPI utilizado será da Rede ou terceiro. (true) utiliza o serviço MPI da Rede; (false) utiliz serviço MPI terceiro.";
                                readonly examples: readonly [false];
                            };
                            readonly eci: {
                                readonly type: "string";
                                readonly description: "Codigo retornado ao MPI pelas bandeiras que indica o resultado da autenticação do portador junto ao Emissor. Transações de débito devem ser obrigatoriamente autenticadas";
                                readonly examples: readonly ["02"];
                            };
                            readonly cavv: {
                                readonly type: "string";
                                readonly description: "Codigo do criptograma utilizado na autenticação da transação e enviada pelo MPI do estabelecimento (pode conter caracteres especiais)";
                                readonly examples: readonly ["12345678901234567890123456789012"];
                            };
                            readonly three_d_indicator: {
                                readonly type: "integer";
                                readonly description: "Versão do 3DS usado no processo de autenticação pelo MPI";
                                readonly examples: readonly ["test_three_d_indicator"];
                            };
                            readonly xid: {
                                readonly type: "string";
                                readonly description: "ID da transação de autenticação incluída pelo MPI ao estabelecimento (pode conter caracteres especiais). Deve ser enviado apenas para utilização do serviço de autenticação 3DS. Campo utilizado somente para bandeira ***Visa.";
                                readonly examples: readonly ["test_this_is_a_test_for_three_d_s"];
                            };
                            readonly directory_server_transaction_id: {
                                readonly type: "string";
                                readonly description: "ID da transação de autenticação incluída pelo MPI ao estabelecimento (pode conter caracteres especiais). Deve ser enviado apenas para utilização do serviço de autenticação 3DS";
                                readonly examples: readonly ["test_this_is_a_test_for_three_d_secure_3d"];
                            };
                        };
                    }, {
                        readonly title: "Usando 3DS Data Only";
                        readonly required: readonly ["challenge_type", "ip_address", "on_failure", "device"];
                        readonly properties: {
                            readonly challenge_type: {
                                readonly type: "string";
                                readonly description: "Enviar o valor fixo DATA_ONLY.";
                                readonly examples: readonly ["DATA_ONLY"];
                            };
                            readonly ip_address: {
                                readonly type: "string";
                                readonly description: "Endereço IP do checkout. Não é aceito IPV6 e para esses casos, definir um valor default estático no padrão IPV4.";
                                readonly examples: readonly ["10.0.0.1"];
                            };
                            readonly user_agent: {
                                readonly type: "string";
                                readonly description: "Identificador do browser utilizado pelo comprador no momento da compra.";
                                readonly examples: readonly ["Mozilla/5.0"];
                            };
                            readonly on_failure: {
                                readonly type: "string";
                                readonly description: "Enviar como “continue”.";
                                readonly default: "continue";
                                readonly examples: readonly ["continue"];
                            };
                            readonly device: {
                                readonly type: "object";
                                readonly title: "Dados referentes ao device utilizado no momento da compra.";
                                readonly properties: {
                                    readonly color_depth: {
                                        readonly type: "integer";
                                        readonly description: "Campo que representa a estimativa da paleta de cores usada para a exibição de imagens, em bits por pixel. Sempre passar o valor fixo 24.";
                                        readonly examples: readonly [24];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Campo que indica o tipo de dispositivo no qual a autenticação ocorre. Sempre passar o valor fixo \"BROWSER\".";
                                        readonly examples: readonly ["BROWSER"];
                                    };
                                    readonly java_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "Campo booleano que representa a capacidade do navegador para executar Java. Sempre passar o valor fixo \"false\".";
                                        readonly default: "false";
                                        readonly examples: readonly [false];
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Idioma do navegador no formato [IETF BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt), contendo entre 1 e 8 caracteres";
                                        readonly examples: readonly ["pt-BR"];
                                    };
                                    readonly screen_height: {
                                        readonly type: "integer";
                                        readonly description: "A altura total da tela do cliente em pixels. O valor é aquele retornado pela propriedade screen.height";
                                        readonly examples: readonly [500];
                                    };
                                    readonly screen_width: {
                                        readonly type: "integer";
                                        readonly description: "A largura total da tela do cliente em pixels. O valor é aquele retornado pela propriedade screen.width";
                                        readonly examples: readonly [500];
                                    };
                                    readonly time_zone_offset: {
                                        readonly type: "integer";
                                        readonly description: "Diferença de horário, em horas, entre o UTC e a hora local do navegador do titular do cartão.\"";
                                        readonly examples: readonly [3];
                                    };
                                };
                            };
                            readonly billing: {
                                readonly type: "object";
                                readonly required: readonly ["postal_code"];
                                readonly title: "Dados referentes ao portador do cartão.";
                                readonly properties: {
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "Rua.";
                                        readonly examples: readonly ["Endereço"];
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly description: "Cidade.";
                                        readonly examples: readonly ["Cidade"];
                                    };
                                    readonly postal_code: {
                                        readonly type: "string";
                                        readonly description: "CEP com 8 digitos sem separador. Não é aceito CEP estrangeiro. Em casos de CEP estrangeiro, o marketplace deve enviar um valor default fixo do marketplace no campo.";
                                        readonly examples: readonly ["CEP"];
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                        readonly description: "Código ISO 3166-2 para o estado, com duas letras. Ex.: \"MG\",\"RJ\",\"PR\"";
                                        readonly examples: readonly ["UF"];
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly description: "ISO 3166-1 alpha-2 - códigos de país de duas letras. Valor padrão: \"BR\"";
                                        readonly examples: readonly ["BR"];
                                    };
                                    readonly email_address: {
                                        readonly type: "string";
                                        readonly description: "Email do portador do cartão";
                                        readonly examples: readonly ["Email@email.com.br"];
                                    };
                                    readonly phone_number: {
                                        readonly type: "integer";
                                        readonly description: "Telefone do portador do cartão";
                                        readonly examples: readonly ["(99)99999-9999"];
                                    };
                                };
                            };
                        };
                        readonly type: "object";
                    }];
                };
                readonly split_rules: {
                    readonly type: "array";
                    readonly title: "Divisão entre participantes";
                    readonly items: {
                        readonly anyOf: readonly [{
                            readonly type: "object";
                            readonly title: "Split por valor taxas do seller (principal)";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "Identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define se o split será em cima do valor bruto - (0) ou false - ou liquido - (1) ou true";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem dividindo as taxas proporcionalmente";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor líquido (1) ou true da transação.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true. Só pode ser usado para apenas um participante do split";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipiente assume todo o valor da transacao";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "is_gross_amount"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor liquido 1 ou true";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly is_gross_amount: {
                                    readonly type: "boolean";
                                    readonly description: "Quando o valor (amount) é passado exatamente igual ao valor da transação ocorre o erro pois, o parceiro esquece da taxa Zoop. Para evitar esse tipo de problema, deve-se usar está opção como 1 ou true e, com isso, a API irá considerar a taxa Zoop antes do split.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }];
                    };
                };
            };
        }, {
            readonly type: "object";
            readonly title: "Usando Card ID";
            readonly required: readonly ["amount", "currency", "payment_type", "on_behalf_of", "source"];
            readonly properties: {
                readonly on_behalf_of: {
                    readonly type: "string";
                    readonly description: "Identificador do seller responsável pela venda.";
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly description: "Tipo do pagamento";
                    readonly enum: readonly ["credit"];
                    readonly default: "credit";
                };
                readonly source: {
                    readonly type: "object";
                    readonly properties: {
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "Moeda do valor a ser cobrado na venda \"BRL\"";
                            readonly examples: readonly ["BRL"];
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "Valor em centavos a ser cobrado pela transação";
                            readonly examples: readonly [700];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["card"];
                        };
                        readonly usage: {
                            readonly type: "string";
                            readonly examples: readonly ["single_use"];
                        };
                        readonly card: {
                            readonly description: "Objeto obrigatório no tipo card.";
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "identificador do cartão para source tipo card";
                                };
                            };
                        };
                    };
                };
                readonly capture: {
                    readonly type: "boolean";
                    readonly description: "Capturar transação (true) ou criar uma pre-autorização (false) para ser capturada a posteriori";
                    readonly examples: readonly [true];
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly description: "ID referência da sua aplicação VARCHAR(500)";
                    readonly examples: readonly ["10902"];
                };
                readonly installment_plan: {
                    readonly type: "object";
                    readonly title: "Parcelamento";
                    readonly properties: {
                        readonly number_installments: {
                            readonly type: "integer";
                            readonly description: "Número de parcelas (1-12)";
                            readonly examples: readonly [5];
                        };
                    };
                };
                readonly three_d_secure: {
                    readonly title: "3DS";
                    readonly type: "object";
                    readonly anyOf: readonly [{
                        readonly type: "object";
                        readonly title: "Usando 3DS";
                        readonly required: readonly ["amount", "recipient", "charge_processing_fee"];
                        readonly properties: {
                            readonly embedded: {
                                readonly type: "boolean";
                                readonly description: "Informa se o serviço MPI utilizado será da Rede ou terceiro. (true) utiliza o serviço MPI da Rede; (false) utiliz serviço MPI terceiro.";
                                readonly examples: readonly [false];
                            };
                            readonly eci: {
                                readonly type: "string";
                                readonly description: "Codigo retornado ao MPI pelas bandeiras que indica o resultado da autenticação do portador junto ao Emissor. Transações de débito devem ser obrigatoriamente autenticadas";
                                readonly examples: readonly ["02"];
                            };
                            readonly cavv: {
                                readonly type: "string";
                                readonly description: "Codigo do criptograma utilizado na autenticação da transação e enviada pelo MPI do estabelecimento (pode conter caracteres especiais)";
                                readonly examples: readonly ["12345678901234567890123456789012"];
                            };
                            readonly three_d_indicator: {
                                readonly type: "integer";
                                readonly description: "Versão do 3DS usado no processo de autenticação pelo MPI";
                                readonly examples: readonly ["test_three_d_indicator"];
                            };
                            readonly xid: {
                                readonly type: "string";
                                readonly description: "ID da transação de autenticação incluída pelo MPI ao estabelecimento (pode conter caracteres especiais). Deve ser enviado apenas para utilização do serviço de autenticação 3DS. Campo utilizado somente para bandeira ***Visa.";
                                readonly examples: readonly ["test_this_is_a_test_for_three_d_s"];
                            };
                            readonly directory_server_transaction_id: {
                                readonly type: "string";
                                readonly description: "ID da transação de autenticação incluída pelo MPI ao estabelecimento (pode conter caracteres especiais). Deve ser enviado apenas para utilização do serviço de autenticação 3DS";
                                readonly examples: readonly ["test_this_is_a_test_for_three_d_secure_3d"];
                            };
                        };
                    }, {
                        readonly title: "Usando 3DS Data Only";
                        readonly required: readonly ["challenge_type", "ip_address", "on_failure", "device"];
                        readonly properties: {
                            readonly challenge_type: {
                                readonly type: "string";
                                readonly description: "Enviar o valor fixo DATA_ONLY.";
                                readonly examples: readonly ["DATA_ONLY"];
                            };
                            readonly ip_address: {
                                readonly type: "string";
                                readonly description: "Endereço IP do checkout. Não é aceito IPV6 e para esses casos, definir um valor default estático no padrão IPV4.";
                                readonly examples: readonly ["10.0.0.1"];
                            };
                            readonly user_agent: {
                                readonly type: "string";
                                readonly description: "Identificador do browser utilizado pelo comprador no momento da compra.";
                                readonly examples: readonly ["Mozilla/5.0"];
                            };
                            readonly on_failure: {
                                readonly type: "string";
                                readonly description: "Enviar como “continue”.";
                                readonly default: "continue";
                                readonly examples: readonly ["continue"];
                            };
                            readonly device: {
                                readonly type: "object";
                                readonly title: "Dados referentes ao device utilizado no momento da compra.";
                                readonly properties: {
                                    readonly color_depth: {
                                        readonly type: "integer";
                                        readonly description: "Campo que representa a estimativa da paleta de cores usada para a exibição de imagens, em bits por pixel. Sempre passar o valor fixo 24.";
                                        readonly examples: readonly [24];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Campo que indica o tipo de dispositivo no qual a autenticação ocorre. Sempre passar o valor fixo \"BROWSER\".";
                                        readonly examples: readonly ["BROWSER"];
                                    };
                                    readonly java_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "Campo booleano que representa a capacidade do navegador para executar Java. Sempre passar o valor fixo \"false\".";
                                        readonly default: "false";
                                        readonly examples: readonly [false];
                                    };
                                    readonly language: {
                                        readonly type: "string";
                                        readonly description: "Idioma do navegador no formato [IETF BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt), contendo entre 1 e 8 caracteres";
                                        readonly examples: readonly ["pt-BR"];
                                    };
                                    readonly screen_height: {
                                        readonly type: "integer";
                                        readonly description: "A altura total da tela do cliente em pixels. O valor é aquele retornado pela propriedade screen.height";
                                        readonly examples: readonly [500];
                                    };
                                    readonly screen_width: {
                                        readonly type: "integer";
                                        readonly description: "A largura total da tela do cliente em pixels. O valor é aquele retornado pela propriedade screen.width";
                                        readonly examples: readonly [500];
                                    };
                                    readonly time_zone_offset: {
                                        readonly type: "integer";
                                        readonly description: "Diferença de horário, em horas, entre o UTC e a hora local do navegador do titular do cartão.\"";
                                        readonly examples: readonly [3];
                                    };
                                };
                            };
                            readonly billing: {
                                readonly type: "object";
                                readonly required: readonly ["postal_code"];
                                readonly title: "Dados referentes ao portador do cartão.";
                                readonly properties: {
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "Rua.";
                                        readonly examples: readonly ["Endereço"];
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly description: "Cidade.";
                                        readonly examples: readonly ["Cidade"];
                                    };
                                    readonly postal_code: {
                                        readonly type: "string";
                                        readonly description: "CEP com 8 digitos sem separador. Não é aceito CEP estrangeiro. Em casos de CEP estrangeiro, o marketplace deve enviar um valor default fixo do marketplace no campo.";
                                        readonly examples: readonly ["CEP"];
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                        readonly description: "Código ISO 3166-2 para o estado, com duas letras. Ex.: \"MG\",\"RJ\",\"PR\"";
                                        readonly examples: readonly ["UF"];
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly description: "ISO 3166-1 alpha-2 - códigos de país de duas letras. Valor padrão: \"BR\"";
                                        readonly examples: readonly ["BR"];
                                    };
                                    readonly email_address: {
                                        readonly type: "string";
                                        readonly description: "Email do portador do cartão";
                                        readonly examples: readonly ["Email@email.com.br"];
                                    };
                                    readonly phone_number: {
                                        readonly type: "integer";
                                        readonly description: "Telefone do portador do cartão";
                                        readonly examples: readonly ["(99)99999-9999"];
                                    };
                                };
                            };
                        };
                        readonly type: "object";
                    }];
                };
                readonly split_rules: {
                    readonly type: "array";
                    readonly title: "Divisão entre participantes";
                    readonly items: {
                        readonly anyOf: readonly [{
                            readonly type: "object";
                            readonly title: "Split por valor taxas do seller (principal)";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "Identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define se o split será em cima do valor bruto - (0) ou false - ou liquido - (1) ou true";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem dividindo as taxas proporcionalmente";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor líquido (1) ou true da transação.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true. Só pode ser usado para apenas um participante do split";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipiente assume todo o valor da transacao";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "is_gross_amount"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor liquido 1 ou true";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly is_gross_amount: {
                                    readonly type: "boolean";
                                    readonly description: "Quando o valor (amount) é passado exatamente igual ao valor da transação ocorre o erro pois, o parceiro esquece da taxa Zoop. Para evitar esse tipo de problema, deve-se usar está opção como 1 ou true e, com isso, a API irá considerar a taxa Zoop antes do split.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }];
                    };
                };
            };
        }, {
            readonly type: "object";
            readonly title: "Boleto com Pix";
            readonly required: readonly ["amount", "currency", "payment_type", "on_behalf_of", "customer"];
            readonly properties: {
                readonly on_behalf_of: {
                    readonly type: "string";
                    readonly description: "Identificador do seller responsável pela venda.";
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly description: "Valor em centavos a ser cobrado pela transação";
                    readonly examples: readonly [300];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "Moeda do valor a ser cobrado na venda \"BRL\"";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["Venda de ingressos para o show do dia 30"];
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly examples: readonly ["reference_5132"];
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly enum: readonly ["bolepix"];
                    readonly description: "Campos relacionados ao método de pagamento";
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly due_at: {
                            readonly type: "string";
                            readonly description: "Data de vencimento no formato AAAA-MM-DD\"";
                            readonly examples: readonly ["2019-05-29"];
                        };
                        readonly payment_limit_at: {
                            readonly type: "string";
                            readonly description: "Data limite para pagamento no formato AAAA-MM-DD\"";
                            readonly examples: readonly ["2019-06-01"];
                        };
                        readonly billing_message_list: {
                            readonly type: "object";
                            readonly properties: {
                                readonly message: {
                                    readonly type: "string";
                                    readonly description: "Instruções utilizadas na parte central do boleto. É possível até 5 instruções";
                                    readonly examples: readonly ["Pedido #5132"];
                                };
                            };
                        };
                        readonly interest: {
                            readonly type: "object";
                            readonly properties: {
                                readonly mode: {
                                    readonly type: "string";
                                    readonly enum: readonly ["PERCENTAGE", "FIXED"];
                                    readonly default: "PERCENTAGE";
                                    readonly description: "Configurações do tipo de juro, se percentual ou valor fixo. Enviar na requisição o valor “PERCENTAGE” ou “FIXED”";
                                };
                                readonly frequency: {
                                    readonly type: "string";
                                    readonly enum: readonly ["DAILY", "MONTHLY", "ANNUALLY"];
                                    readonly description: "Configuração da frequência em que o juro será cobrado, diário, mensal e anual. Enviar os valores “DAILY” ou “MONTHLY” or ANNUALLY";
                                    readonly examples: readonly [10];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly description: "Caso seja porcentagem, enviar neste campo a porcentagem de juro a ser cobrada. Caso seja valor fixo, enviar neste campo o valor a ser cobrado de juros.";
                                };
                                readonly start_at: {
                                    readonly type: "string";
                                    readonly description: "Data para o início da cobrança do juro no formato AAAA-MM-DD";
                                    readonly examples: readonly ["2018-11-20"];
                                };
                            };
                        };
                        readonly late_fee: {
                            readonly description: "Objeto para envio das informações de multa";
                            readonly type: "object";
                            readonly properties: {
                                readonly mode: {
                                    readonly type: "string";
                                    readonly enum: readonly ["PERCENTAGE", "FIXED"];
                                    readonly default: "FIXED";
                                    readonly description: "Configurações do tipo de multa, se percentual ou valor fixo. Enviar na requisição o valor “PERCENTAGE” ou “FIXED”";
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly description: "Caso seja porcentagem, enviar neste campo a porcentagem de multa a ser cobrada. Caso seja valor fixo, enviar neste campo o valor a ser cobrado de multa";
                                };
                                readonly start_at: {
                                    readonly type: "string";
                                    readonly description: "Data para o início da cobrança da multa no formato AAAA-MM-DD";
                                    readonly examples: readonly ["2018-11-20"];
                                };
                            };
                        };
                        readonly discount: {
                            readonly description: "Lista contendo os descontos a serem aplicados no boleto com Pix.";
                            readonly type: "object";
                            readonly properties: {
                                readonly mode: {
                                    readonly type: "string";
                                    readonly enum: readonly ["PERCENTAGE", "FIXED"];
                                    readonly default: "FIXED";
                                    readonly description: "Configurações do tipo de multa, se percentual ou valor fixo. Enviar na requisição o valor “PERCENTAGE” ou “FIXED”";
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly description: "Caso seja porcentagem, enviar neste campo a porcentagem de desconto a ser aplicada. Caso seja valor fixo, enviar neste campo o valor do desconto";
                                };
                                readonly limit_at: {
                                    readonly type: "string";
                                    readonly description: "Data limite para ser aplicado o desconto no formato AAAA-MM-DD";
                                    readonly examples: readonly ["2018-11-20"];
                                };
                            };
                        };
                    };
                };
            };
        }, {
            readonly type: "object";
            readonly title: "Boleto Simples";
            readonly required: readonly ["amount", "currency", "payment_type", "on_behalf_of", "customer"];
            readonly properties: {
                readonly on_behalf_of: {
                    readonly type: "string";
                    readonly description: "Identificador do seller responsável pela venda.";
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly description: "Valor em centavos a ser cobrado pela transação";
                    readonly examples: readonly [300];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "Moeda do valor a ser cobrado na venda \"BRL\"";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["venda"];
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly enum: readonly ["boleto"];
                    readonly description: "Tipo de pagamento";
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly description: "ID referência da sua aplicação VARCHAR(500)";
                    readonly examples: readonly ["10902"];
                };
                readonly split_rules: {
                    readonly type: "array";
                    readonly items: {
                        readonly anyOf: readonly [{
                            readonly type: "object";
                            readonly title: "Split por valor taxas do seller (principal)";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "Identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define se o split será em cima do valor bruto - (0) ou false - ou liquido - (1) ou true";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem dividindo as taxas proporcionalmente";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor líquido (1) ou true da transação.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true. Só pode ser usado para apenas um participante do split";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipiente assume todo o valor da transacao";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "is_gross_amount"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor liquido 1 ou true";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly is_gross_amount: {
                                    readonly type: "boolean";
                                    readonly description: "Quando o valor (amount) é passado exatamente igual ao valor da transação ocorre o erro pois, o parceiro esquece da taxa Zoop. Para evitar esse tipo de problema, deve-se usar está opção como 1 ou true e, com isso, a API irá considerar a taxa Zoop antes do split.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }];
                    };
                };
            };
        }, {
            readonly type: "object";
            readonly title: "Boleto Completo";
            readonly required: readonly ["amount", "currency", "payment_type", "on_behalf_of"];
            readonly properties: {
                readonly on_behalf_of: {
                    readonly type: "string";
                    readonly description: "Identificador do seller responsável pela venda.";
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer cadastrado. Deve ser usado caso não use o a estrutra de buyer do payment_method";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly description: "Valor em centavos a ser cobrado pela transação";
                    readonly examples: readonly [300];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "Moeda do valor a ser cobrado na venda \"BRL\"";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["Venda de ingressos para o show do dia 30"];
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly examples: readonly ["reference_5132"];
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly enum: readonly ["boleto"];
                    readonly description: "Tipo de pagamento";
                };
                readonly logo: {
                    readonly type: "string";
                    readonly description: "URL aonde o logo do boleto está hospedado";
                    readonly examples: readonly ["https://logoaqui.com.br/imagem/sellers/"];
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly expiration_date: {
                            readonly type: "string";
                            readonly description: "Data de vencimento";
                            readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                        };
                        readonly payment_limit_date: {
                            readonly type: "string";
                            readonly description: "Data limite para pagamento";
                            readonly examples: readonly ["2019-06-01T00:00:00+00:00D)"];
                        };
                        readonly buyer: {
                            readonly type: "object";
                            readonly description: "Customer não cadastrado na base deve ser informado aqui, porém o mesmo não será cadastrado na base. Para mais informações consultar o [Guia do Usuário](https://docs.zoop.co/docs/gerando-um-boleto).";
                            readonly properties: {
                                readonly first_name: {
                                    readonly type: "string";
                                    readonly description: "Primeiro nome do comprador";
                                    readonly examples: readonly ["Nome"];
                                };
                                readonly last_name: {
                                    readonly type: "string";
                                    readonly description: "Último nome do comprador";
                                    readonly examples: readonly ["Sobrenome"];
                                };
                                readonly email: {
                                    readonly type: "string";
                                    readonly description: "Email do comprador";
                                    readonly examples: readonly ["email_do_comprador@email.com"];
                                };
                                readonly phone_number: {
                                    readonly type: "string";
                                    readonly description: "Telefone do comprador";
                                    readonly examples: readonly [" 123456789"];
                                };
                                readonly taxpayer_id: {
                                    readonly type: "string";
                                    readonly description: "CPF/CNPJ do comprador";
                                    readonly examples: readonly ["99999999999"];
                                };
                                readonly birthdate: {
                                    readonly type: "string";
                                    readonly description: "Data de nascimento do comprador";
                                    readonly examples: readonly ["0001-01-01"];
                                };
                                readonly address: {
                                    readonly type: "object";
                                    readonly title: "Endereço do comprador";
                                    readonly properties: {
                                        readonly line1: {
                                            readonly type: "string";
                                            readonly description: "Rua";
                                            readonly examples: readonly ["Endereço do Comprador"];
                                        };
                                        readonly line2: {
                                            readonly type: "string";
                                            readonly description: "Número";
                                            readonly examples: readonly ["999"];
                                        };
                                        readonly line3: {
                                            readonly type: "string";
                                            readonly description: "Complemento";
                                            readonly examples: readonly ["Complemento"];
                                        };
                                        readonly neighborhood: {
                                            readonly type: "string";
                                            readonly description: "Bairro/Distrito/Comunidade dentro de uma cidade";
                                            readonly examples: readonly ["Downtown"];
                                        };
                                        readonly city: {
                                            readonly type: "string";
                                            readonly description: "Cidade";
                                            readonly examples: readonly ["Cidade"];
                                        };
                                        readonly state: {
                                            readonly type: "string";
                                            readonly description: "Código ISO 3166-2 para o estado, com duas letras. Ex.: \"MG\",\"RJ\",\"PR\"";
                                            readonly examples: readonly ["UF"];
                                        };
                                        readonly postal_code: {
                                            readonly type: "string";
                                            readonly description: "CEP com 8 digitos sem separador";
                                            readonly examples: readonly ["99999999"];
                                        };
                                    };
                                };
                            };
                        };
                        readonly body_instructions: {
                            readonly type: "array";
                            readonly items: {};
                            readonly description: "Instruções utilizadas na parte central do boleto. É possível até 5 instruções";
                        };
                        readonly billing_instructions: {
                            readonly type: "object";
                            readonly properties: {
                                readonly late_fee: {
                                    readonly description: "Objeto para utilização de cobrança da multa por atraso de pagamento do boleto";
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly mode: {
                                            readonly type: "string";
                                            readonly enum: readonly ["FIXED", "PERCENTAGE"];
                                            readonly default: "FIXED";
                                            readonly description: "Modo de cobrança. Valores aceitos: FIXED (fixo) ou PERCENTAGE (percentual)";
                                        };
                                        readonly amount: {
                                            readonly type: "number";
                                            readonly description: "Valor fixo para o tipo de multa FIXED (fixa)";
                                            readonly examples: readonly [500];
                                        };
                                        readonly percentage: {
                                            readonly type: "number";
                                            readonly description: "Porcentagem baseado no valor do boleto para tipo de multa PERCENTAGE (percentual)";
                                            readonly examples: readonly [10];
                                        };
                                        readonly start_date: {
                                            readonly type: "string";
                                            readonly description: "A data inicial para cobrança de multa";
                                            readonly examples: readonly ["2018-11-20"];
                                        };
                                    };
                                };
                                readonly interest: {
                                    readonly description: "Objeto para utilização de cobrança de juros";
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly mode: {
                                            readonly type: "string";
                                            readonly enum: readonly ["DAILY_AMOUNT", "DAILY_PERCENTAGE", "MONTHLY_PERCENTAGE"];
                                            readonly default: "DAILY_AMOUNT";
                                            readonly description: "Modo de cobrança. Valores aceitos: DAILY_AMOUNT, DAILY_PERCENTAGE, MONTHLY_PERCENTAGE";
                                        };
                                        readonly amount: {
                                            readonly type: "number";
                                            readonly description: "Valor fixo para o tipo de juros DAILY_AMOUNT";
                                            readonly examples: readonly [200];
                                        };
                                        readonly percentage: {
                                            readonly type: "number";
                                            readonly description: "Porcentagem baseado no valor do boleto para tipo de juros DAILY_PERCENTAGE ou MONTHLY_PERCENTAGE";
                                            readonly examples: readonly [10];
                                        };
                                        readonly start_date: {
                                            readonly type: "string";
                                            readonly description: "A data inicial para cobrança dos juros";
                                            readonly examples: readonly ["2018-11-20"];
                                        };
                                    };
                                };
                                readonly discount: {
                                    readonly description: "Objeto para aplicar descontos no boleto para uma ou mais datas limite";
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly mode: {
                                                readonly type: "string";
                                                readonly enum: readonly ["FIXED", "PERCENTAGE"];
                                                readonly default: "FIXED";
                                                readonly description: "Modo de cobrança. Valores aceitos: FIXED(fixo), PERCENTAGE(percentual).";
                                            };
                                            readonly amount: {
                                                readonly type: "number";
                                                readonly description: "Valor fixo para o tipo de desconto FIXED";
                                                readonly examples: readonly [500];
                                            };
                                            readonly limit_date: {
                                                readonly type: "string";
                                                readonly description: "Data limite para o pagamento ocorrer com desconto. Deve ser anterior a data informada em \"expiration date\"";
                                                readonly examples: readonly ["2018-11-09"];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly split_rules: {
                    readonly type: "array";
                    readonly items: {
                        readonly anyOf: readonly [{
                            readonly type: "object";
                            readonly title: "Split por valor taxas do seller (principal)";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "Identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define se o split será em cima do valor bruto - (0) ou false - ou liquido - (1) ou true";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem dividindo as taxas proporcionalmente";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor líquido (1) ou true da transação.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true. Só pode ser usado para apenas um participante do split";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipiente assume todo o valor da transacao";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "is_gross_amount"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor liquido 1 ou true";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly is_gross_amount: {
                                    readonly type: "boolean";
                                    readonly description: "Quando o valor (amount) é passado exatamente igual ao valor da transação ocorre o erro pois, o parceiro esquece da taxa Zoop. Para evitar esse tipo de problema, deve-se usar está opção como 1 ou true e, com isso, a API irá considerar a taxa Zoop antes do split.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }];
                    };
                };
            };
        }, {
            readonly type: "object";
            readonly title: "Pix";
            readonly required: readonly ["currency", "payment_type", "on_behalf_of", "amount"];
            readonly properties: {
                readonly on_behalf_of: {
                    readonly type: "string";
                    readonly description: "Identificador do seller responsável pela venda.";
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Uma descrição breve da motivação da sua transação";
                    readonly examples: readonly ["Venda com Pix"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "Moeda do valor a ser cobrado na venda \"BRL\"";
                    readonly examples: readonly ["BRL"];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly description: "Valor em centavos a ser cobrado pela transação";
                    readonly examples: readonly [1000];
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly enum: readonly ["pix"];
                    readonly description: "Tipo de pagamento";
                };
                readonly pix_expiration_date_time: {
                    readonly type: "string";
                    readonly description: "Data de expiração do PIX que ultrapasse a 24h. Só poderá ser usado quando configurado na Zoop";
                    readonly examples: readonly ["2022-05-13 14:09:28"];
                };
                readonly split_rules: {
                    readonly type: "array";
                    readonly items: {
                        readonly anyOf: readonly [{
                            readonly type: "object";
                            readonly title: "Split por valor taxas do seller (principal)";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "Identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define se o split será em cima do valor bruto - (0) ou false - ou liquido - (1) ou true";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem dividindo as taxas proporcionalmente";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor líquido (1) ou true da transação.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por porcentagem recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee", "percentage"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true. Só pode ser usado para apenas um participante do split";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly percentage: {
                                    readonly type: "number";
                                    readonly description: "percentual da venda a ser splitado.";
                                    readonly examples: readonly [10];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipient assume o valor total da taxa";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                                    readonly default: false;
                                    readonly examples: readonly [false];
                                };
                                readonly charge_recipient_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }, {
                            readonly type: "object";
                            readonly title: "Split por valor recipiente assume todo o valor da transacao";
                            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "is_gross_amount"];
                            readonly properties: {
                                readonly recipient: {
                                    readonly type: "string";
                                    readonly description: "identificador do seller recebedor";
                                };
                                readonly liable: {
                                    readonly type: "boolean";
                                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                                    readonly default: true;
                                };
                                readonly charge_processing_fee: {
                                    readonly type: "boolean";
                                    readonly description: "define que ira ser feito split em cima do valor liquido 1 ou true";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly is_gross_amount: {
                                    readonly type: "boolean";
                                    readonly description: "Quando o valor (amount) é passado exatamente igual ao valor da transação ocorre o erro pois, o parceiro esquece da taxa Zoop. Para evitar esse tipo de problema, deve-se usar está opção como 1 ou true e, com isso, a API irá considerar a taxa Zoop antes do split.";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly description: "valor em centavos a ser splitado.";
                                    readonly examples: readonly [100];
                                };
                            };
                        }];
                    };
                };
            };
        }, {
            readonly type: "object";
            readonly title: "Nupay";
            readonly required: readonly ["currency", "payment_type", "on_behalf_of", "customer"];
            readonly properties: {
                readonly on_behalf_of: {
                    readonly type: "string";
                    readonly description: "Identificador do seller responsável pela venda.";
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do customer";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly description: "Valor em centavos a ser cobrado pela transação";
                    readonly examples: readonly [10000];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "Moeda do valor a ser cobrado na venda \"BRL\"";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["Venda de ingressos para o show do dia 30"];
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly enum: readonly ["nupay"];
                    readonly description: "Campos relacionados ao método de pagamento";
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["id", "description", "value", "quantity"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "ID do item";
                                        readonly examples: readonly ["132981"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Descriçao do item";
                                        readonly examples: readonly ["Meu produto"];
                                    };
                                    readonly value: {
                                        readonly type: "number";
                                        readonly description: "Valor em centavos a ser cobrado pela transação";
                                        readonly examples: readonly [300];
                                    };
                                    readonly quantity: {
                                        readonly type: "number";
                                        readonly description: "Quantidade";
                                        readonly examples: readonly [3];
                                    };
                                    readonly discount: {
                                        readonly type: "number";
                                        readonly description: "Desconto dado ao item pelo vendedor";
                                        readonly examples: readonly [0];
                                    };
                                    readonly tax_amount: {
                                        readonly type: "number";
                                        readonly description: "Valor total de impostos do item";
                                        readonly examples: readonly [90];
                                    };
                                    readonly amount_excluding_tax: {
                                        readonly type: "number";
                                        readonly description: "Valor em centavos do item excluindo impostos";
                                        readonly examples: readonly [9910];
                                    };
                                    readonly amount_including_tax: {
                                        readonly type: "number";
                                        readonly description: "Valor em centavos do item excluindo impostos";
                                        readonly examples: readonly [10000];
                                    };
                                };
                            };
                        };
                        readonly delay_to_auto_cancel: {
                            readonly type: "number";
                            readonly description: "Tempo de espera em minutos para o consumidor aprovar o pagamento. Vencido esse tempo, o cancelamento é feito automaticamente. Valor padrão é de 30 minutos. Não pode ser menor que 1";
                            readonly examples: readonly [5];
                        };
                        readonly payment_flow: {
                            readonly type: "object";
                            readonly properties: {
                                readonly return_url: {
                                    readonly type: "string";
                                    readonly description: "URL para a qual o consumidor será redirecionado após finalizar o pagamento";
                                    readonly examples: readonly ["https://..."];
                                };
                                readonly cancel_url: {
                                    readonly type: "string";
                                    readonly description: "URL para onde o cliente será direcionado caso o mesmo escolha não finalizar o pagamento, e assim cancelar o pedido. Caso não seja fornecido, a URL para redirecionamento em caso de cancelamento será o campo return_url";
                                    readonly examples: readonly ["https://..."];
                                };
                            };
                        };
                        readonly order_url: {
                            readonly type: "string";
                            readonly description: "URL da ordem de compra da loja";
                            readonly examples: readonly ["https://..."];
                        };
                    };
                };
            };
        }];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
            };
            readonly required: readonly ["marketplace_id"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly anyOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly status: {
                        readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,\n\n`succeeded` `failed` `canceled` `pre_authorized` `reversed` `refunded` `pending` `new` `partial_refunded` `dispute` `charged_back`";
                        readonly type: "string";
                        readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly amount: {
                        readonly type: "string";
                        readonly examples: readonly ["1.00"];
                    };
                    readonly original_amount: {
                        readonly type: "string";
                        readonly examples: readonly ["1.00"];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly payment_type: {
                        readonly enum: readonly ["credit", "boleto"];
                    };
                    readonly transaction_number: {
                        readonly type: "string";
                    };
                    readonly sales_receipt: {
                        readonly type: "string";
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                    };
                    readonly statement_descriptor: {
                        readonly type: "string";
                        readonly examples: readonly ["SuaMarcaAqui"];
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["card"];
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly card_brand: {
                                readonly type: "string";
                                readonly examples: readonly ["Visa"];
                            };
                            readonly first4_digits: {
                                readonly type: "string";
                            };
                            readonly last4_digits: {
                                readonly type: "string";
                            };
                            readonly expiration_month: {
                                readonly type: "string";
                                readonly description: "Mês de expiração";
                                readonly examples: readonly [99];
                            };
                            readonly expiration_year: {
                                readonly type: "string";
                                readonly description: "Ano de expiração do cartão (AAAA)";
                                readonly examples: readonly [99];
                            };
                            readonly holder_name: {
                                readonly type: "string";
                                readonly description: "Nome do portador do cartão";
                            };
                            readonly is_active: {
                                readonly type: "boolean";
                                readonly description: "Ativo";
                                readonly examples: readonly [false];
                            };
                            readonly is_valid: {
                                readonly type: "boolean";
                                readonly description: "Valido";
                                readonly examples: readonly [true];
                            };
                            readonly is_verified: {
                                readonly type: "boolean";
                                readonly description: "Verificado";
                                readonly examples: readonly [false];
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly fingerprint: {
                                readonly type: "string";
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                        };
                    };
                    readonly point_of_sale: {
                        readonly type: "object";
                        readonly properties: {
                            readonly entry_mode: {
                                readonly type: "string";
                                readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                                readonly examples: readonly ["chip"];
                                readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                            };
                            readonly identification_number: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly refunded: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly voided: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly captured: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly fees: {
                        readonly type: "string";
                        readonly examples: readonly ["0.05"];
                    };
                    readonly fee_details: {
                        readonly type: "object";
                        readonly properties: {
                            readonly amount: {
                                readonly type: "string";
                                readonly examples: readonly ["0.05"];
                            };
                            readonly prepaid: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["BRL"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["zoop_credit_fee_d0"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["Zoop prepaid card-present credit fee"];
                            };
                        };
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id Transaction}\n"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly expected_on: {
                        readonly type: "string";
                        readonly format: "dateTime";
                        readonly examples: readonly ["2015-04-17 06:39:52+00:00"];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly description: "Criado em";
                        readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly description: "Atualizado em";
                        readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly status: {
                        readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,\n\n`succeeded` `failed` `canceled` `pre_authorized` `reversed` `refunded` `pending` `new` `partial_refunded` `dispute` `charged_back`";
                        readonly type: "string";
                        readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly amount: {
                        readonly type: "string";
                        readonly examples: readonly ["1.00"];
                    };
                    readonly original_amount: {
                        readonly type: "string";
                        readonly examples: readonly ["1.00"];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly payment_type: {
                        readonly enum: readonly ["credit", "boleto"];
                    };
                    readonly transaction_number: {
                        readonly type: "string";
                    };
                    readonly sales_receipt: {
                        readonly type: "string";
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                    };
                    readonly statement_descriptor: {
                        readonly type: "string";
                        readonly examples: readonly ["SuaMarcaAqui"];
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["card"];
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly card_brand: {
                                readonly type: "string";
                                readonly examples: readonly ["Visa"];
                            };
                            readonly first4_digits: {
                                readonly type: "string";
                            };
                            readonly last4_digits: {
                                readonly type: "string";
                            };
                            readonly expiration_month: {
                                readonly type: "string";
                                readonly description: "Mês de expiração";
                                readonly examples: readonly [99];
                            };
                            readonly expiration_year: {
                                readonly type: "string";
                                readonly description: "Ano de expiração do cartão (AAAA)";
                                readonly examples: readonly [99];
                            };
                            readonly holder_name: {
                                readonly type: "string";
                                readonly description: "Nome do portador do cartão";
                            };
                            readonly is_active: {
                                readonly type: "boolean";
                                readonly description: "Ativo";
                                readonly examples: readonly [false];
                            };
                            readonly is_valid: {
                                readonly type: "boolean";
                                readonly description: "Valido";
                                readonly examples: readonly [true];
                            };
                            readonly is_verified: {
                                readonly type: "boolean";
                                readonly description: "Verificado";
                                readonly examples: readonly [false];
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly fingerprint: {
                                readonly type: "string";
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                        };
                    };
                    readonly point_of_sale: {
                        readonly type: "object";
                        readonly properties: {
                            readonly entry_mode: {
                                readonly type: "string";
                                readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                                readonly examples: readonly ["chip"];
                                readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                            };
                            readonly identification_number: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly refunded: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly voided: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly captured: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly fees: {
                        readonly type: "string";
                        readonly examples: readonly ["0.05"];
                    };
                    readonly fee_details: {
                        readonly type: "object";
                        readonly properties: {
                            readonly amount: {
                                readonly type: "string";
                                readonly examples: readonly ["0.05"];
                            };
                            readonly prepaid: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["BRL"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["zoop_credit_fee_d0"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["Zoop prepaid card-present credit fee"];
                            };
                        };
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id Transaction}\n"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly expected_on: {
                        readonly type: "string";
                        readonly format: "dateTime";
                        readonly examples: readonly ["2015-04-17 06:39:52+00:00"];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly description: "Criado em";
                        readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly description: "Atualizado em";
                        readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly status: {
                        readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,\n\n`succeeded` `failed` `canceled` `pre_authorized` `reversed` `refunded` `pending` `new` `partial_refunded` `dispute` `charged_back`";
                        readonly type: "string";
                        readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly amount: {
                        readonly type: "string";
                        readonly examples: readonly ["1.00"];
                    };
                    readonly original_amount: {
                        readonly type: "string";
                        readonly examples: readonly ["1.00"];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly payment_type: {
                        readonly enum: readonly ["credit", "boleto"];
                    };
                    readonly transaction_number: {
                        readonly type: "string";
                    };
                    readonly sales_receipt: {
                        readonly type: "string";
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                    };
                    readonly statement_descriptor: {
                        readonly type: "string";
                        readonly examples: readonly ["SuaMarcaAqui"];
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["card"];
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly card_brand: {
                                readonly type: "string";
                                readonly examples: readonly ["Visa"];
                            };
                            readonly first4_digits: {
                                readonly type: "string";
                            };
                            readonly last4_digits: {
                                readonly type: "string";
                            };
                            readonly expiration_month: {
                                readonly type: "string";
                                readonly description: "Mês de expiração";
                                readonly examples: readonly [99];
                            };
                            readonly expiration_year: {
                                readonly type: "string";
                                readonly description: "Ano de expiração do cartão (AAAA)";
                                readonly examples: readonly [99];
                            };
                            readonly holder_name: {
                                readonly type: "string";
                                readonly description: "Nome do portador do cartão";
                            };
                            readonly is_active: {
                                readonly type: "boolean";
                                readonly description: "Ativo";
                                readonly examples: readonly [false];
                            };
                            readonly is_valid: {
                                readonly type: "boolean";
                                readonly description: "Valido";
                                readonly examples: readonly [true];
                            };
                            readonly is_verified: {
                                readonly type: "boolean";
                                readonly description: "Verificado";
                                readonly examples: readonly [false];
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly fingerprint: {
                                readonly type: "string";
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                        };
                    };
                    readonly point_of_sale: {
                        readonly type: "object";
                        readonly properties: {
                            readonly entry_mode: {
                                readonly type: "string";
                                readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                                readonly examples: readonly ["chip"];
                                readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                            };
                            readonly identification_number: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly refunded: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly voided: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly captured: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly fees: {
                        readonly type: "string";
                        readonly examples: readonly ["0.05"];
                    };
                    readonly fee_details: {
                        readonly type: "object";
                        readonly properties: {
                            readonly amount: {
                                readonly type: "string";
                                readonly examples: readonly ["0.05"];
                            };
                            readonly prepaid: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["BRL"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["zoop_credit_fee_d0"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["Zoop prepaid card-present credit fee"];
                            };
                        };
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id Transaction}\n"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly expected_on: {
                        readonly type: "string";
                        readonly format: "dateTime";
                        readonly examples: readonly ["2015-04-17 06:39:52+00:00"];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly description: "Criado em";
                        readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly description: "Atualizado em";
                        readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly status: {
                        readonly description: "Retorna  o status da transação";
                        readonly type: "string";
                        readonly examples: readonly ["pending"];
                    };
                    readonly amount: {
                        readonly type: "string";
                        readonly examples: readonly ["3.00"];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["Venda"];
                    };
                    readonly payment_type: {
                        readonly type: "string";
                        readonly description: "Tipo do pagamento";
                        readonly examples: readonly ["bolepix"];
                    };
                    readonly gateway_authorizer: {
                        readonly type: "string";
                        readonly examples: readonly ["ITAU"];
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                    };
                    readonly customer: {
                        readonly type: "string";
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly document_number: {
                                readonly type: "string";
                            };
                            readonly due_at: {
                                readonly type: "string";
                                readonly description: "Data de vencimento";
                                readonly examples: readonly ["2019-05-29"];
                            };
                            readonly payment_limit_at: {
                                readonly type: "string";
                                readonly description: "Data limite de pagamento";
                                readonly examples: readonly ["2019-06-01 00:00:00+00:00"];
                            };
                            readonly barcode: {
                                readonly type: "string";
                                readonly description: "Representação númerica do código de barras do boleto";
                                readonly examples: readonly ["string"];
                            };
                            readonly digitable_line: {
                                readonly type: "string";
                                readonly description: "Linha digitável";
                                readonly examples: readonly ["string"];
                            };
                            readonly emv: {
                                readonly type: "string";
                                readonly description: "copia e cola Pix";
                                readonly examples: readonly ["string"];
                            };
                            readonly base64: {
                                readonly type: "string";
                                readonly description: "copia e cola Pix em base64";
                                readonly examples: readonly ["string"];
                            };
                            readonly interest: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly mode: {
                                        readonly type: "string";
                                        readonly description: "Configurações do tipo de juro, se percentual ou valor fixo. Enviar na requisição o valor “PERCENTAGE” ou “FIXED”";
                                        readonly examples: readonly ["FIXED"];
                                    };
                                    readonly frequency: {
                                        readonly type: "string";
                                        readonly description: "Configuração da frequência em que o juro será cobrado, diário, mensal e anual. Enviar os valores “DAILY” ou “MONTHLY” or ANNUALLY";
                                        readonly examples: readonly ["DAILY"];
                                    };
                                    readonly value: {
                                        readonly type: "string";
                                        readonly description: "Caso seja porcentagem, enviar neste campo a porcentagem de juro a ser cobrada. Caso seja valor fixo, enviar neste campo o valor a ser cobrado de juros.";
                                        readonly examples: readonly ["2.00"];
                                    };
                                    readonly start_at: {
                                        readonly type: "string";
                                        readonly description: "Data para o início da cobrança do juro no formato AAAA-MM-DD";
                                        readonly examples: readonly ["2018-11-20"];
                                    };
                                };
                            };
                            readonly late_fee: {
                                readonly description: "Objeto para envio das informações de multa";
                                readonly type: "object";
                                readonly properties: {
                                    readonly mode: {
                                        readonly type: "string";
                                        readonly default: "FIXED";
                                        readonly description: "Configurações do tipo de multa, se percentual ou valor fixo. Enviar na requisição o valor “PERCENTAGE” ou “FIXED”";
                                    };
                                    readonly value: {
                                        readonly type: "string";
                                        readonly description: "Caso seja porcentagem, enviar neste campo a porcentagem de multa a ser cobrada. Caso seja valor fixo, enviar neste campo o valor a ser cobrado de multa";
                                        readonly examples: readonly ["500"];
                                    };
                                    readonly start_at: {
                                        readonly type: "string";
                                        readonly description: "Data para o início da cobrança da multa no formato AAAA-MM-DD";
                                        readonly examples: readonly ["2018-11-20"];
                                    };
                                };
                            };
                            readonly discount: {
                                readonly description: "Objeto para envio das informações de multa";
                                readonly type: "object";
                                readonly properties: {
                                    readonly mode: {
                                        readonly type: "string";
                                        readonly default: "PERCENTAGE";
                                        readonly description: "Configurações do tipo de multa, se percentual ou valor fixo. Enviar na requisição o valor “PERCENTAGE” ou “FIXED”";
                                    };
                                    readonly value: {
                                        readonly type: "string";
                                        readonly description: "Caso seja porcentagem, enviar neste campo a porcentagem de multa a ser cobrada. Caso seja valor fixo, enviar neste campo o valor a ser cobrado de multa";
                                        readonly examples: readonly ["10"];
                                    };
                                    readonly limit_at: {
                                        readonly type: "string";
                                        readonly description: "Data limite para cobrança sem multa no formato AAAA-MM-DD";
                                        readonly examples: readonly ["2018-11-20"];
                                    };
                                };
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly status: {
                        readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,";
                        readonly type: "string";
                        readonly examples: readonly ["pending"];
                    };
                    readonly amount: {
                        readonly type: "string";
                        readonly examples: readonly ["3.00"];
                    };
                    readonly original_amount: {
                        readonly type: "string";
                        readonly examples: readonly ["3.00"];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["Venda"];
                    };
                    readonly payment_type: {
                        readonly type: "string";
                        readonly description: "Tipo do pagamento";
                        readonly examples: readonly ["boleto"];
                    };
                    readonly transaction_number: {
                        readonly type: "string";
                    };
                    readonly gateway_authorizer: {
                        readonly type: "string";
                        readonly examples: readonly ["ITAU"];
                    };
                    readonly app_transaction_uid: {
                        readonly type: "string";
                    };
                    readonly refunds: {
                        readonly type: "string";
                    };
                    readonly rewards: {
                        readonly type: "string";
                    };
                    readonly discounts: {
                        readonly type: "string";
                    };
                    readonly pre_authorization: {
                        readonly type: "string";
                    };
                    readonly sales_receipt: {
                        readonly type: "string";
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                    };
                    readonly customer: {
                        readonly type: "string";
                        readonly description: "ID do customer";
                    };
                    readonly statement_descriptor: {
                        readonly type: "string";
                        readonly examples: readonly ["SuaMarcaAqui"];
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly zoop_boleto_id: {
                                readonly type: "string";
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["boleto"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["venda"];
                            };
                            readonly reference_number: {
                                readonly type: "string";
                            };
                            readonly document_number: {
                                readonly type: "string";
                            };
                            readonly expiration_date: {
                                readonly type: "string";
                                readonly description: "Data de vencimento";
                                readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                            };
                            readonly payment_limit_date: {
                                readonly type: "string";
                                readonly description: "Data limite de pagamento";
                                readonly examples: readonly ["2019-06-01 00:00:00+00:00"];
                            };
                            readonly recipient: {
                                readonly type: "string";
                                readonly examples: readonly ["Estabelecimento L P Silva"];
                            };
                            readonly bank_code: {
                                readonly type: "string";
                                readonly description: "Codigo do banco";
                                readonly examples: readonly [109];
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly description: "Endereço";
                            };
                            readonly sequence: {
                                readonly type: "string";
                                readonly description: "Sequencia";
                                readonly examples: readonly [20373];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly description: "URL do boleto gerado";
                                readonly examples: readonly ["https://api-boleto-production.s3.amazonaws.com/{Id Boleto}/{id Boleto}/{id Boleto}.html"];
                            };
                            readonly barcode: {
                                readonly type: "string";
                                readonly description: "Representação númerica do código de barras do boleto";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["not_paid"];
                            };
                        };
                    };
                    readonly source: {
                        readonly type: "string";
                    };
                    readonly point_of_sale: {
                        readonly type: "object";
                        readonly properties: {
                            readonly entry_mode: {
                                readonly type: "string";
                                readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                                readonly examples: readonly ["barcode"];
                                readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                            };
                            readonly identification_number: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly installment_plan: {
                        readonly type: "string";
                    };
                    readonly refunded: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly voided: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly captured: {
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                    readonly fees: {
                        readonly type: "string";
                        readonly examples: readonly ["0.00"];
                    };
                    readonly fee_details: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["/v1/marketplaces/{Id Marketplace}/transactions/{id Transaction}\n"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly expected_on: {
                        readonly type: "string";
                        readonly format: "dateTime";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly description: "Criado em";
                        readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly description: "Atualizado em";
                        readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                    };
                    readonly payment_authorization: {
                        readonly type: "string";
                    };
                    readonly history: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly transaction: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                    readonly examples: readonly ["3.00"];
                                };
                                readonly operation_type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["created"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly examples: readonly ["succeeded"];
                                };
                                readonly response_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly response_message: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorization_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorizer_id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorization_nsu: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly gatewayResponseTime: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorizer: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly description: "Criado em";
                                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                                };
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly status: {
                        readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,";
                        readonly type: "string";
                        readonly examples: readonly ["pending"];
                    };
                    readonly amount: {
                        readonly type: "string";
                        readonly examples: readonly ["3.00"];
                    };
                    readonly original_amount: {
                        readonly type: "string";
                        readonly examples: readonly ["3.00"];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["Venda"];
                    };
                    readonly payment_type: {
                        readonly type: "string";
                        readonly description: "Tipo do pagamento";
                        readonly examples: readonly ["boleto"];
                    };
                    readonly transaction_number: {
                        readonly type: "string";
                    };
                    readonly gateway_authorizer: {
                        readonly type: "string";
                        readonly examples: readonly ["ITAU"];
                    };
                    readonly app_transaction_uid: {
                        readonly type: "string";
                    };
                    readonly refunds: {
                        readonly type: "string";
                    };
                    readonly rewards: {
                        readonly type: "string";
                    };
                    readonly discounts: {
                        readonly type: "string";
                    };
                    readonly pre_authorization: {
                        readonly type: "string";
                    };
                    readonly sales_receipt: {
                        readonly type: "string";
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                    };
                    readonly customer: {
                        readonly type: "string";
                        readonly description: "ID do customer";
                    };
                    readonly statement_descriptor: {
                        readonly type: "string";
                        readonly examples: readonly ["SuaMarcaAqui"];
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly zoop_boleto_id: {
                                readonly type: "string";
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["boleto"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["venda"];
                            };
                            readonly reference_number: {
                                readonly type: "string";
                            };
                            readonly document_number: {
                                readonly type: "string";
                            };
                            readonly expiration_date: {
                                readonly type: "string";
                                readonly description: "Data de vencimento";
                                readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                            };
                            readonly payment_limit_date: {
                                readonly type: "string";
                                readonly description: "Data limite de pagamento";
                                readonly examples: readonly ["2019-06-01 00:00:00+00:00"];
                            };
                            readonly recipient: {
                                readonly type: "string";
                                readonly examples: readonly ["Estabelecimento L P Silva"];
                            };
                            readonly bank_code: {
                                readonly type: "string";
                                readonly description: "Codigo do banco";
                                readonly examples: readonly [109];
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly description: "Endereço";
                            };
                            readonly sequence: {
                                readonly type: "string";
                                readonly description: "Sequencia";
                                readonly examples: readonly [20373];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly description: "URL do boleto gerado";
                                readonly examples: readonly ["https://api-boleto-production.s3.amazonaws.com/{Id Boleto}/{id Boleto}/{id Boleto}.html"];
                            };
                            readonly barcode: {
                                readonly type: "string";
                                readonly description: "Representação númerica do código de barras do boleto";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["not_paid"];
                            };
                        };
                    };
                    readonly source: {
                        readonly type: "string";
                    };
                    readonly point_of_sale: {
                        readonly type: "object";
                        readonly properties: {
                            readonly entry_mode: {
                                readonly type: "string";
                                readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                                readonly examples: readonly ["barcode"];
                                readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                            };
                            readonly identification_number: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly installment_plan: {
                        readonly type: "string";
                    };
                    readonly refunded: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly voided: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly captured: {
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                    readonly fees: {
                        readonly type: "string";
                        readonly examples: readonly ["0.00"];
                    };
                    readonly fee_details: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["/v1/marketplaces/{Id Marketplace}/transactions/{id Transaction}\n"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly expected_on: {
                        readonly type: "string";
                        readonly format: "dateTime";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly description: "Criado em";
                        readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly description: "Atualizado em";
                        readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                    };
                    readonly payment_authorization: {
                        readonly type: "string";
                    };
                    readonly history: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly transaction: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                    readonly examples: readonly ["3.00"];
                                };
                                readonly operation_type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["created"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly examples: readonly ["succeeded"];
                                };
                                readonly response_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly response_message: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorization_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorizer_id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorization_nsu: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly gatewayResponseTime: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorizer: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly description: "Criado em";
                                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                                };
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "ID da tranção";
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly description: "Tipo do recurso";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly description: "Status da transação";
                        readonly examples: readonly ["pending"];
                    };
                    readonly amount: {
                        readonly type: "number";
                        readonly description: "Valor da transação";
                        readonly examples: readonly [10];
                    };
                    readonly original_amount: {
                        readonly type: "number";
                        readonly description: "Valor original da transação";
                        readonly examples: readonly [10];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "Uma descrição breve da motivação da sua transação";
                        readonly examples: readonly ["Venda com Pix"];
                    };
                    readonly payment_type: {
                        readonly type: "string";
                        readonly description: "Tipo de pagamento";
                        readonly examples: readonly ["pix"];
                    };
                    readonly transaction_number: {
                        readonly type: "string";
                    };
                    readonly gateway_authorizer: {
                        readonly type: "string";
                        readonly description: "Autorizadora";
                        readonly examples: readonly ["Zoop"];
                    };
                    readonly app_transaction_uid: {
                        readonly type: "string";
                    };
                    readonly refunds: {
                        readonly type: "string";
                    };
                    readonly rewards: {
                        readonly type: "string";
                    };
                    readonly discounts: {
                        readonly type: "string";
                    };
                    readonly pre_authorization: {
                        readonly type: "string";
                    };
                    readonly sales_receipt: {
                        readonly type: "string";
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                        readonly description: "Seller responsavel pela venda";
                    };
                    readonly customer: {
                        readonly type: "string";
                    };
                    readonly statement_descriptor: {
                        readonly type: "string";
                        readonly description: "Descrição";
                        readonly examples: readonly ["TestePay"];
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly provider: {
                                readonly type: "string";
                                readonly examples: readonly ["ITAU"];
                            };
                            readonly version: {
                                readonly type: "number";
                                readonly examples: readonly ["1.0.0"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["DYNAMIC"];
                            };
                            readonly reusable: {
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly allow_update: {
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly expiration_date: {
                                readonly type: "string";
                                readonly examples: readonly ["2015-04-17T06:39:52+00:00"];
                            };
                            readonly key: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["CPF"];
                                    };
                                    readonly value: {
                                        readonly type: "string";
                                        readonly examples: readonly ["10050508000"];
                                    };
                                };
                            };
                            readonly pix_link: {
                                readonly type: "string";
                                readonly examples: readonly ["https://pix.bcb.gov.br/qr/MDAwMjAxMDEwMjEyMjY4NjAwMTRCUi5HT1YuQkNCLlBJWDI1NjRzcGktaC5pdGF1LmNvbS5ici9waXgvcXIvdjIvMzNkOTc3MTctNzZhNy00ZThhLWFhY2UtMWU1YmVkYWY1ZTQ1NTIwNDAwMDA1MzAzOTg2NTgwMkJSNTkxNFNhbmRlciBCYW5raW5nNjAwOVNBTyBQQVVMTzYyMDcwNTAzKioqNjMwNEY1NDI="];
                            };
                            readonly qr_code: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly emv: {
                                        readonly type: "string";
                                        readonly examples: readonly ["BR.GOV.BCB.PIX2564spi-h.itau.com.br/pix/qr/v2/33d97717-76a7-4e8a-aace-1e5bedaf5e455204000053039865802BR5914Sander Banking6009SAO"];
                                    };
                                };
                            };
                        };
                    };
                    readonly source: {
                        readonly type: "string";
                    };
                    readonly point_of_sale: {
                        readonly type: "object";
                        readonly properties: {
                            readonly entry_mode: {
                                readonly type: "string";
                                readonly examples: readonly ["barcode"];
                            };
                            readonly identification_number: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly installment_plan: {
                        readonly type: "string";
                    };
                    readonly refunded: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly voided: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly captured: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly fees: {
                        readonly type: "string";
                        readonly examples: readonly [0];
                    };
                    readonly fee_details: {
                        readonly type: "string";
                    };
                    readonly location_latitude: {
                        readonly type: "string";
                    };
                    readonly location_longitude: {
                        readonly type: "string";
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["/v1/marketplaces/{Id marketplace}/transactions/{Id transaction}"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly expected_on: {
                        readonly type: "string";
                        readonly description: "Esperado em";
                        readonly examples: readonly ["2021-07-02T00:00:00+00:00"];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly description: "Criado em";
                        readonly examples: readonly ["2021-07-02T19:42:59+00:00"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly description: "Atualizado em";
                        readonly examples: readonly ["2021-07-02T19:42:59+00:00"];
                    };
                    readonly payment_authorization: {
                        readonly type: "string";
                    };
                    readonly history: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly transaction: {
                                readonly type: "string";
                            };
                            readonly amount: {
                                readonly type: "string";
                                readonly examples: readonly [10];
                            };
                            readonly operation_type: {
                                readonly type: "string";
                                readonly examples: readonly ["created"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["succeeded"];
                            };
                            readonly response_code: {
                                readonly type: "string";
                            };
                            readonly response_message: {
                                readonly type: "string";
                            };
                            readonly authorization_code: {
                                readonly type: "string";
                            };
                            readonly authorizer_id: {
                                readonly type: "string";
                            };
                            readonly authorization_nsu: {
                                readonly type: "string";
                            };
                            readonly gatewayResponseTime: {
                                readonly type: "string";
                            };
                            readonly authorizer: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2021-07-02 19:42:59"];
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly title: "Nupay";
                readonly required: readonly ["currency", "payment_type", "on_behalf_of", "customer", "payment_method.id", "payment_method.description", "payment_method.value", "payment_method.quantity"];
                readonly properties: {
                    readonly on_behalf_of: {
                        readonly type: "string";
                        readonly description: "Identificador do seller responsável pela venda.";
                    };
                    readonly customer: {
                        readonly type: "string";
                        readonly description: "ID do customer";
                    };
                    readonly amount: {
                        readonly type: "number";
                        readonly description: "Valor em centavos a ser cobrado pela transação";
                        readonly examples: readonly [10000];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly description: "Moeda do valor a ser cobrado na venda \"BRL\"";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["Venda de ingressos para o show do dia 30"];
                    };
                    readonly payment_type: {
                        readonly type: "string";
                        readonly enum: readonly ["nupay"];
                        readonly description: "Campos relacionados ao método de pagamento\n\n`nupay`";
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "ID do pagamento nupay";
                                readonly examples: readonly ["string"];
                            };
                            readonly payment_url: {
                                readonly type: "string";
                                readonly description: "URL para o app do Nubank para redirecionar o cliente para concluir o pagamento";
                                readonly examples: readonly ["https://..."];
                            };
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly description: "ID do item";
                                            readonly examples: readonly ["132981"];
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly description: "Descriçao do item";
                                            readonly examples: readonly ["Meu produto"];
                                        };
                                        readonly value: {
                                            readonly type: "number";
                                            readonly description: "Valor em centavos a ser cobrado pela transação";
                                            readonly examples: readonly [300];
                                        };
                                        readonly quantity: {
                                            readonly type: "number";
                                            readonly description: "Quantidade";
                                            readonly examples: readonly [3];
                                        };
                                        readonly discount: {
                                            readonly type: "number";
                                            readonly description: "Desconto dado ao item pelo vendedor";
                                            readonly examples: readonly [0];
                                        };
                                        readonly tax_amount: {
                                            readonly type: "number";
                                            readonly description: "Valor total de impostos do item";
                                            readonly examples: readonly [90];
                                        };
                                        readonly amount_excluding_tax: {
                                            readonly type: "number";
                                            readonly description: "Valor em centavos do item excluindo impostos";
                                            readonly examples: readonly [9910];
                                        };
                                        readonly amount_including_tax: {
                                            readonly type: "number";
                                            readonly description: "Valor em centavos do item excluindo impostos";
                                            readonly examples: readonly [10000];
                                        };
                                    };
                                };
                            };
                            readonly delay_to_auto_cancel: {
                                readonly type: "number";
                                readonly description: "Tempo de espera em minutos para o consumidor aprovar o pagamento. Vencido esse tempo, o cancelamento é feito automaticamente. Valor padrão é de 30 minutos. Não pode ser menor que 1";
                                readonly examples: readonly [5];
                            };
                            readonly payment_flow: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly return_url: {
                                        readonly type: "string";
                                        readonly description: "URL para a qual o consumidor será redirecionado após finalizar o pagamento";
                                        readonly examples: readonly ["https://..."];
                                    };
                                    readonly cancel_url: {
                                        readonly type: "string";
                                        readonly description: "URL para onde o cliente será direcionado caso o mesmo escolha não finalizar o pagamento, e assim cancelar o pedido. Caso não seja fornecido, a URL para redirecionamento em caso de cancelamento será o campo return_url";
                                        readonly examples: readonly ["https://..."];
                                    };
                                };
                            };
                            readonly order_url: {
                                readonly type: "string";
                                readonly description: "URL da ordem de compra da loja";
                                readonly examples: readonly ["https://..."];
                            };
                        };
                    };
                };
            }];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly anyOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly error: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status";
                                readonly examples: readonly ["Bad Request"];
                            };
                            readonly status_code: {
                                readonly type: "string";
                                readonly description: "Código do erro";
                                readonly examples: readonly [400];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Tipo de erro";
                                readonly examples: readonly ["invalid_request_error"];
                            };
                            readonly category: {
                                readonly type: "string";
                                readonly description: "Categoria de erro";
                                readonly examples: readonly ["invalid_parameter"];
                            };
                            readonly message: {
                                readonly type: "string";
                                readonly description: "Mensagem de erro";
                                readonly examples: readonly ["- Invalid parameter(s). Your \\\"taxpayer_id\\\" value is incorrect. Please verify request parameters.\n- \n"];
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly error: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status";
                                readonly examples: readonly ["Bad Request"];
                            };
                            readonly status_code: {
                                readonly type: "string";
                                readonly description: "Código do erro";
                                readonly examples: readonly [400];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Tipo de erro";
                                readonly examples: readonly ["invalid_request_error"];
                            };
                            readonly category: {
                                readonly type: "string";
                                readonly description: "Categoria de erro";
                                readonly examples: readonly ["invalid_parameter"];
                            };
                            readonly message: {
                                readonly type: "string";
                                readonly description: "Mensagem de erro";
                                readonly examples: readonly ["- Invalid parameter(s). Your \\\"taxpayer_id\\\" value is incorrect. Please verify request parameters.\n- \n"];
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly error: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status";
                                readonly examples: readonly ["Bad Request"];
                            };
                            readonly status_code: {
                                readonly type: "string";
                                readonly description: "Código do erro";
                                readonly examples: readonly [400];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Tipo de erro";
                                readonly examples: readonly ["invalid_request_error"];
                            };
                            readonly category: {
                                readonly type: "string";
                                readonly description: "Categoria de erro";
                                readonly examples: readonly ["invalid_parameter"];
                            };
                            readonly message: {
                                readonly type: "string";
                                readonly description: "Mensagem de erro";
                                readonly examples: readonly ["- Invalid parameter(s). Your \\\"taxpayer_id\\\" value is incorrect. Please verify request parameters.\n- \n"];
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly error: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status";
                                readonly examples: readonly ["Bad Request"];
                            };
                            readonly status_code: {
                                readonly type: "string";
                                readonly description: "Código do erro";
                                readonly examples: readonly [400];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Tipo de erro";
                                readonly examples: readonly ["invalid_request_error"];
                            };
                            readonly category: {
                                readonly type: "string";
                                readonly description: "Categoria de erro";
                                readonly examples: readonly ["invalid_parameter"];
                            };
                            readonly message: {
                                readonly type: "string";
                                readonly description: "Mensagem de erro";
                                readonly examples: readonly ["- Missing required param: amount. Please verify request parameters.\n"];
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly error: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status";
                                readonly examples: readonly ["Bad Request"];
                            };
                            readonly status_code: {
                                readonly type: "string";
                                readonly description: "Código do erro";
                                readonly examples: readonly [400];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Tipo de erro";
                                readonly examples: readonly ["invalid_request_error"];
                            };
                            readonly category: {
                                readonly type: "string";
                                readonly description: "Categoria de erro";
                                readonly examples: readonly ["invalid_parameter"];
                            };
                            readonly message: {
                                readonly type: "string";
                                readonly description: "Mensagem de erro";
                                readonly examples: readonly ["- Invalid request: unsupported payment type: bolet. If error persists and you need assistance, please contact support@pagzoop.com.\n"];
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly error: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status";
                                readonly examples: readonly ["Bad Request"];
                            };
                            readonly status_code: {
                                readonly type: "string";
                                readonly description: "Código do erro";
                                readonly examples: readonly [400];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Tipo de erro";
                                readonly examples: readonly ["invalid_request_error"];
                            };
                            readonly category: {
                                readonly type: "string";
                                readonly description: "Categoria de erro";
                                readonly examples: readonly ["invalid_parameter"];
                            };
                            readonly message: {
                                readonly type: "string";
                                readonly description: "Mensagem de erro";
                                readonly examples: readonly ["- Invalid request: unsupported payment type: bolet. If error persists and you need assistance, please contact support@pagzoop.com.\n"];
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly error: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status";
                                readonly examples: readonly ["Bad Request"];
                            };
                            readonly status_code: {
                                readonly type: "string";
                                readonly description: "Código do erro";
                                readonly examples: readonly [400];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Tipo de erro";
                                readonly examples: readonly ["invalid_request_error"];
                            };
                            readonly category: {
                                readonly type: "string";
                                readonly description: "Categoria de erro";
                                readonly examples: readonly ["invalid_parameter"];
                            };
                            readonly message: {
                                readonly type: "string";
                                readonly description: "Mensagem de erro";
                                readonly examples: readonly ["- \"Invalid request. Parameter pix_expiration_date_time value is incorret. Limit date is not on range allowed. Please verify request parameters\" \n- \"Invalid request. Parameter pix_expiration_date_time value is incorrect. Please verify request parameters\"\n"];
                            };
                        };
                    };
                };
            }];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "Forbidden";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["Forbidden"];
                };
                readonly status_code: {
                    readonly type: "string";
                    readonly examples: readonly [403];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["invalid_request_error"];
                };
                readonly category: {
                    readonly type: "string";
                    readonly examples: readonly ["forbidden"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Your user is not authorized to access this resource."];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["Request Failed"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly description: "Código do erro";
                            readonly examples: readonly [422];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Tipo de erro";
                            readonly examples: readonly ["processing_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Categoria de erro";
                            readonly examples: readonly ["server_api_error"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Mensagem de erro";
                            readonly examples: readonly ["- There was an error generating the boleto. The error was: Invalid value fields.\n"];
                        };
                        readonly reasons: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Buyer address can not contain empty fields"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["Throttled"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly description: "Código do erro";
                            readonly examples: readonly [429];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Tipo de erro";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Categoria de erro";
                            readonly examples: readonly ["forbidden"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Mensagem de erro";
                            readonly examples: readonly ["Too Many Requests"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1MarketplacesMarketplaceIdTransactionsTransactionIdApprove: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "id do boleto";
                };
                readonly resource: {
                    readonly type: "string";
                    readonly description: "Recurso";
                    readonly examples: readonly ["transaction"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status";
                    readonly examples: readonly ["succeeded"];
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "Valor liquido da transação";
                    readonly examples: readonly [3];
                };
                readonly original_amount: {
                    readonly type: "string";
                    readonly description: "Valor original liquido da transação";
                    readonly examples: readonly [3];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "Moeda do valor a ser cobrado na venda";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Descrição";
                    readonly examples: readonly ["Boleto transaction updated manually"];
                };
                readonly payment_type: {
                    readonly type: "string";
                    readonly description: "Tipo do pagamento";
                    readonly examples: readonly ["boleto"];
                };
                readonly transaction_number: {
                    readonly type: "string";
                    readonly description: "Número da transação";
                };
                readonly gateway_authorizer: {
                    readonly type: "string";
                    readonly description: "Autorizador";
                    readonly examples: readonly ["itau"];
                };
                readonly app_transaction_uid: {
                    readonly type: "string";
                };
                readonly refunds: {
                    readonly type: "string";
                };
                readonly rewards: {
                    readonly type: "string";
                };
                readonly pre_authorization: {
                    readonly type: "string";
                };
                readonly sales_receipt: {
                    readonly type: "string";
                };
                readonly on_behalf_of: {
                    readonly type: "string";
                    readonly description: "Referência a um vendedor existente";
                };
                readonly customer: {
                    readonly type: "string";
                    readonly description: "ID do comprador";
                };
                readonly statement_descriptor: {
                    readonly type: "string";
                    readonly description: "Nome da empresa que aparecerá no boleto. Utilizando esse campo você sobrescreve a informação do cadastro do Vendedor";
                    readonly examples: readonly ["Estabelecimento L P Silva"];
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "ID do boleto";
                        };
                        readonly zoop_boleto_id: {
                            readonly type: "string";
                        };
                        readonly resource: {
                            readonly type: "string";
                            readonly description: "Recurso";
                            readonly examples: readonly ["boleto"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Descrição";
                            readonly examples: readonly ["venda"];
                        };
                        readonly reference_number: {
                            readonly type: "string";
                            readonly description: "Número de referência";
                            readonly examples: readonly [13290047];
                        };
                        readonly document_number: {
                            readonly type: "string";
                            readonly description: "Número do documento";
                            readonly examples: readonly [13290047];
                        };
                        readonly expiration_date: {
                            readonly type: "string";
                            readonly description: "Data de vencimento";
                            readonly examples: readonly ["2021-06-17T00:00:00+00:00"];
                        };
                        readonly payment_limit_date: {
                            readonly type: "string";
                            readonly description: "Data limite para o pagamento do boleto";
                        };
                        readonly recipient: {
                            readonly type: "string";
                            readonly description: "Identificador do recebedor";
                            readonly examples: readonly ["Nome Estabelecimento"];
                        };
                        readonly bank_code: {
                            readonly type: "string";
                            readonly description: "Código do banco";
                            readonly examples: readonly ["Bank number"];
                        };
                        readonly customer: {
                            readonly type: "string";
                            readonly description: "ID do comprador";
                        };
                        readonly address: {
                            readonly type: "string";
                            readonly description: "Endereço";
                        };
                        readonly sequence: {
                            readonly type: "string";
                            readonly description: "Sequencia";
                            readonly examples: readonly [206028];
                        };
                        readonly url: {
                            readonly type: "string";
                            readonly description: "URL do boleto";
                            readonly examples: readonly ["https://api-boleto-production.s3.amazonaws.com/hash.html"];
                        };
                        readonly accepted: {
                            readonly type: "boolean";
                            readonly description: "Aceite";
                            readonly examples: readonly [false];
                        };
                        readonly printed: {
                            readonly type: "boolean";
                            readonly description: "Impresso";
                            readonly examples: readonly [false];
                        };
                        readonly downloaded: {
                            readonly type: "boolean";
                            readonly description: "Download";
                            readonly examples: readonly [false];
                        };
                        readonly fingerprint: {
                            readonly type: "string";
                            readonly description: "Identificador de segurança da transação";
                        };
                        readonly paid_at: {
                            readonly type: "string";
                            readonly description: "Data de pagamento";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly examples: readonly ["/v1/marketplaces/{id marketplace}/boletos/{id boleto}"];
                        };
                        readonly barcode: {
                            readonly type: "string";
                            readonly description: "Representação númerica do código de barras do boleto";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                            };
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly description: "Data da criação do boleto";
                            readonly format: "dateTime";
                            readonly examples: readonly ["2021-06-14 09:49:07+00:00"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly description: "Data de pagamento";
                            readonly format: "dateTime";
                            readonly examples: readonly ["2021-06-14 12:55:55+00:00"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["paid"];
                        };
                    };
                };
                readonly source: {
                    readonly type: "object";
                    readonly description: "Objeto agrupador das informações de fonte de pagamento da transação";
                    readonly additionalProperties: true;
                };
                readonly point_of_sale: {
                    readonly type: "object";
                    readonly properties: {
                        readonly entry_mode: {
                            readonly type: "string";
                            readonly description: "Modo de entrada";
                            readonly examples: readonly ["barcode"];
                        };
                        readonly identification_number: {
                            readonly type: "string";
                            readonly description: "Número de identificação";
                        };
                    };
                };
                readonly installment_plan: {
                    readonly type: "string";
                };
                readonly refunded: {
                    readonly type: "boolean";
                    readonly description: "Reembolso";
                    readonly examples: readonly [false];
                };
                readonly voided: {
                    readonly type: "boolean";
                    readonly description: "Estorno";
                    readonly examples: readonly [false];
                };
                readonly captured: {
                    readonly type: "boolean";
                    readonly description: "Capturado";
                    readonly examples: readonly [true];
                };
                readonly fees: {
                    readonly type: "string";
                    readonly description: "Valor de taxa";
                    readonly examples: readonly [4.86];
                };
                readonly fee_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amount: {
                            readonly type: "string";
                            readonly description: "Valor de taxa cobrada";
                            readonly examples: readonly [1.1];
                        };
                        readonly prepaid: {
                            readonly type: "boolean";
                            readonly description: "Antecipado";
                            readonly examples: readonly [true];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "Moeda do valor a ser cobrado na venda";
                            readonly examples: readonly ["BRL"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Nome do plano";
                            readonly examples: readonly ["zoop_credit_fee_d0"];
                        };
                        readonly is_gateway_fee: {
                            readonly type: "boolean";
                            readonly description: "Taxa do autorizador";
                            readonly examples: readonly [false];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Descrição";
                            readonly examples: readonly ["Zoop Fee for Btf Plano Bit Fuel Prata Novo Pro Boleto fee and MCC Comércio (PSP)"];
                        };
                    };
                };
                readonly location_latitude: {
                    readonly description: "Latitude de localização";
                };
                readonly location_longitude: {
                    readonly description: "Longitude de localização";
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id transaction}"];
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly properties: {
                        readonly bank_id: {
                            readonly type: "integer";
                            readonly description: "ID do banco";
                            readonly examples: readonly ["000"];
                        };
                        readonly payment_date: {
                            readonly type: "string";
                            readonly description: "Data de pagamento";
                            readonly examples: readonly ["2021-06-14T12:55:55+0000"];
                        };
                    };
                };
                readonly expected_on: {
                    readonly type: "string";
                    readonly description: "Expectativa de liquidação";
                    readonly examples: readonly ["2021-06-14 00:00:00+00:00"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2021-06-14 00:00:00+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2021-06-14 00:00:00+00:00"];
                };
                readonly payment_authorization: {
                    readonly type: "string";
                    readonly description: "Autorização de pagamento";
                };
                readonly history: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "ID";
                        };
                        readonly transaction: {
                            readonly type: "string";
                            readonly description: "ID da transação";
                        };
                        readonly amount: {
                            readonly type: "string";
                            readonly description: "Valor do boleto";
                            readonly examples: readonly [3];
                        };
                        readonly operation_type: {
                            readonly type: "string";
                            readonly description: "Tipo da operação";
                            readonly examples: readonly ["created"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["succeeded"];
                        };
                        readonly response_code: {
                            readonly type: "string";
                            readonly description: "Código de resposta";
                        };
                        readonly response_message: {
                            readonly type: "string";
                            readonly description: "Mensagem de resposta";
                        };
                        readonly authorization_code: {
                            readonly type: "string";
                            readonly description: "Código de autorização";
                        };
                        readonly authorizer_id: {
                            readonly type: "string";
                            readonly description: "ID do autorizador";
                        };
                        readonly authorization_nsu: {
                            readonly type: "string";
                            readonly description: "NSU da autorização";
                        };
                        readonly gatewayResponseTime: {
                            readonly type: "string";
                            readonly description: "Tempo de resposta do autorizador";
                        };
                        readonly authorizer: {
                            readonly type: "string";
                            readonly description: "Autorizador";
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly description: "Data de criação";
                            readonly examples: readonly ["2021-06-14 12:49:05"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly description: "Código do erro";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Tipo do erro";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Categoria do erro";
                            readonly examples: readonly ["resource_not_found"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Mensagem do erro";
                            readonly examples: readonly ["Sorry, the transaction (id: transaction) you are trying to use does not exist or has been deleted."];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1MarketplacesMarketplaceIdTransactionsTransactionIdCapture: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["on_behalf_of", "amount"];
        readonly properties: {
            readonly on_behalf_of: {
                readonly type: "string";
                readonly description: "Identificador do seller responsável pela venda";
            };
            readonly amount: {
                readonly type: "integer";
                readonly description: "valor da venda a ser capturado em centavos. para captura parcial basta enviar valor a menor, sendo possível realizar somente uma captura parcial por autorização";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,\n\n`succeeded` `failed` `canceled` `pre_authorized` `reversed` `refunded` `pending` `new` `partial_refunded` `dispute` `charged_back`";
                    readonly type: "string";
                    readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                };
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["transaction"];
                };
                readonly amount: {
                    readonly type: "string";
                    readonly examples: readonly ["1.00"];
                };
                readonly original_amount: {
                    readonly type: "string";
                    readonly examples: readonly ["1.00"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly payment_type: {
                    readonly enum: readonly ["credit", "boleto"];
                };
                readonly transaction_number: {
                    readonly type: "string";
                };
                readonly sales_receipt: {
                    readonly type: "string";
                };
                readonly on_behalf_of: {
                    readonly type: "string";
                };
                readonly statement_descriptor: {
                    readonly type: "string";
                    readonly examples: readonly ["SuaMarcaAqui"];
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly resource: {
                            readonly type: "string";
                            readonly examples: readonly ["card"];
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly card_brand: {
                            readonly type: "string";
                            readonly examples: readonly ["Visa"];
                        };
                        readonly first4_digits: {
                            readonly type: "string";
                        };
                        readonly last4_digits: {
                            readonly type: "string";
                        };
                        readonly expiration_month: {
                            readonly type: "string";
                            readonly description: "Mês de expiração";
                            readonly examples: readonly [99];
                        };
                        readonly expiration_year: {
                            readonly type: "string";
                            readonly description: "Ano de expiração do cartão (AAAA)";
                            readonly examples: readonly [99];
                        };
                        readonly holder_name: {
                            readonly type: "string";
                            readonly description: "Nome do portador do cartão";
                        };
                        readonly is_active: {
                            readonly type: "boolean";
                            readonly description: "Ativo";
                            readonly examples: readonly [false];
                        };
                        readonly is_valid: {
                            readonly type: "boolean";
                            readonly description: "Valido";
                            readonly examples: readonly [true];
                        };
                        readonly is_verified: {
                            readonly type: "boolean";
                            readonly description: "Verificado";
                            readonly examples: readonly [false];
                        };
                        readonly customer: {
                            readonly type: "string";
                            readonly description: "ID do customer";
                        };
                        readonly fingerprint: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly description: "Criado em";
                            readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly description: "Atualizado em";
                            readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                        };
                    };
                };
                readonly point_of_sale: {
                    readonly type: "object";
                    readonly properties: {
                        readonly entry_mode: {
                            readonly type: "string";
                            readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                            readonly examples: readonly ["chip"];
                            readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                        };
                        readonly identification_number: {
                            readonly type: "string";
                        };
                    };
                };
                readonly refunded: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly voided: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly captured: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly fees: {
                    readonly type: "string";
                    readonly examples: readonly ["0.05"];
                };
                readonly fee_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amount: {
                            readonly type: "string";
                            readonly examples: readonly ["0.05"];
                        };
                        readonly prepaid: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly examples: readonly ["BRL"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["zoop_credit_fee_d0"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly examples: readonly ["Zoop prepaid card-present credit fee"];
                        };
                    };
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id Transaction}\n"];
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "string";
                    };
                };
                readonly expected_on: {
                    readonly type: "string";
                    readonly format: "dateTime";
                    readonly examples: readonly ["2015-04-17 06:39:52+00:00"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRules: {
    readonly body: {
        readonly anyOf: readonly [{
            readonly type: "object";
            readonly title: "Split por valor taxas do seller (principal)";
            readonly required: readonly ["amount", "recipient", "charge_processing_fee"];
            readonly properties: {
                readonly recipient: {
                    readonly type: "string";
                    readonly description: "Identificador do seller recebedor";
                };
                readonly liable: {
                    readonly type: "boolean";
                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                    readonly default: true;
                };
                readonly charge_processing_fee: {
                    readonly type: "boolean";
                    readonly description: "define se o split será em cima do valor bruto - (0) ou false - ou liquido - (1) ou true";
                    readonly default: false;
                    readonly examples: readonly [false];
                };
                readonly amount: {
                    readonly type: "integer";
                    readonly description: "valor em centavos a ser splitado.";
                    readonly examples: readonly [100];
                };
            };
        }, {
            readonly type: "object";
            readonly title: "Split por porcentagem dividindo as taxas proporcionalmente";
            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "percentage"];
            readonly properties: {
                readonly recipient: {
                    readonly type: "string";
                    readonly description: "identificador do seller recebedor";
                };
                readonly liable: {
                    readonly type: "boolean";
                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                    readonly default: true;
                };
                readonly charge_processing_fee: {
                    readonly type: "boolean";
                    readonly description: "define que ira ser feito split em cima do valor líquido (1) ou true da transação.";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly percentage: {
                    readonly type: "number";
                    readonly description: "percentual da venda a ser splitado.";
                    readonly examples: readonly [10];
                };
            };
        }, {
            readonly type: "object";
            readonly title: "Split por porcentagem recipient assume o valor total da taxa";
            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee", "percentage"];
            readonly properties: {
                readonly recipient: {
                    readonly type: "string";
                    readonly description: "identificador do seller recebedor";
                };
                readonly liable: {
                    readonly type: "boolean";
                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                    readonly default: true;
                };
                readonly charge_processing_fee: {
                    readonly type: "boolean";
                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                    readonly default: false;
                    readonly examples: readonly [false];
                };
                readonly charge_recipient_processing_fee: {
                    readonly type: "boolean";
                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true. Só pode ser usado para apenas um participante do split";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly percentage: {
                    readonly type: "number";
                    readonly description: "percentual da venda a ser splitado.";
                    readonly examples: readonly [10];
                };
            };
        }, {
            readonly type: "object";
            readonly title: "Split por valor recipient assume o valor total da taxa";
            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee"];
            readonly properties: {
                readonly recipient: {
                    readonly type: "string";
                    readonly description: "identificador do seller recebedor";
                };
                readonly liable: {
                    readonly type: "boolean";
                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                    readonly default: true;
                };
                readonly charge_processing_fee: {
                    readonly type: "boolean";
                    readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                    readonly default: false;
                    readonly examples: readonly [false];
                };
                readonly charge_recipient_processing_fee: {
                    readonly type: "boolean";
                    readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true.";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly amount: {
                    readonly type: "integer";
                    readonly description: "valor em centavos a ser splitado.";
                    readonly examples: readonly [100];
                };
            };
        }, {
            readonly type: "object";
            readonly title: "Split por valor recipiente assume todo o valor da transacao";
            readonly required: readonly ["amount", "recipient", "charge_processing_fee", "is_gross_amount"];
            readonly properties: {
                readonly recipient: {
                    readonly type: "string";
                    readonly description: "identificador do seller recebedor";
                };
                readonly liable: {
                    readonly type: "boolean";
                    readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                    readonly default: true;
                };
                readonly charge_processing_fee: {
                    readonly type: "boolean";
                    readonly description: "define que ira ser feito split em cima do valor liquido 1 ou true";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly is_gross_amount: {
                    readonly type: "boolean";
                    readonly description: "Quando o valor (amount) é passado exatamente igual ao valor da transação ocorre o erro pois, o parceiro esquece da taxa Zoop. Para evitar esse tipo de problema, deve-se usar está opção como 1 ou true e, com isso, a API irá considerar a taxa Zoop antes do split.";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly amount: {
                    readonly type: "integer";
                    readonly description: "valor em centavos a ser splitado.";
                    readonly examples: readonly [100];
                };
            };
        }, {
            readonly title: "Split Array por valor taxas do seller (principal)";
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly recipient: {
                        readonly type: "string";
                        readonly description: "Identificador do seller recebedor";
                    };
                    readonly liable: {
                        readonly type: "boolean";
                        readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                        readonly default: true;
                    };
                    readonly charge_processing_fee: {
                        readonly type: "boolean";
                        readonly description: "define se o split será em cima do valor bruto - (0) ou false - ou liquido - (1) ou true";
                        readonly default: false;
                        readonly examples: readonly [false];
                    };
                    readonly amount: {
                        readonly type: "integer";
                        readonly description: "valor em centavos a ser splitado.";
                        readonly examples: readonly [100];
                    };
                };
                readonly type: "object";
            };
        }, {
            readonly title: "Split Array por porcentagem dividindo as taxas proporcionalmente";
            readonly type: "array";
            readonly items: {
                readonly required: readonly ["amount", "recipient", "charge_processing_fee", "percentage"];
                readonly properties: {
                    readonly recipient: {
                        readonly type: "string";
                        readonly description: "identificador do seller recebedor";
                    };
                    readonly liable: {
                        readonly type: "boolean";
                        readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                        readonly default: true;
                    };
                    readonly charge_processing_fee: {
                        readonly type: "boolean";
                        readonly description: "define que ira ser feito split em cima do valor líquido (1) ou true da transação.";
                        readonly default: true;
                        readonly examples: readonly [true];
                    };
                    readonly percentage: {
                        readonly type: "number";
                        readonly description: "percentual da venda a ser splitado.";
                        readonly examples: readonly [10];
                    };
                };
                readonly type: "object";
            };
        }, {
            readonly title: "Split Array por porcentagem recipient assume o valor total da taxa";
            readonly type: "array";
            readonly items: {
                readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee", "percentage"];
                readonly properties: {
                    readonly recipient: {
                        readonly type: "string";
                        readonly description: "identificador do seller recebedor";
                    };
                    readonly liable: {
                        readonly type: "boolean";
                        readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                        readonly default: true;
                    };
                    readonly charge_processing_fee: {
                        readonly type: "boolean";
                        readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                        readonly default: false;
                        readonly examples: readonly [false];
                    };
                    readonly charge_recipient_processing_fee: {
                        readonly type: "boolean";
                        readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true. Só pode ser usado para apenas um participante do split";
                        readonly default: true;
                        readonly examples: readonly [true];
                    };
                    readonly percentage: {
                        readonly type: "number";
                        readonly description: "percentual da venda a ser splitado.";
                        readonly examples: readonly [10];
                    };
                };
                readonly type: "object";
            };
        }, {
            readonly type: "array";
            readonly title: "Split Array por valor recipient assume o valor total da taxa";
            readonly items: {
                readonly required: readonly ["amount", "recipient", "charge_processing_fee", "charge_recipient_processing_fee"];
                readonly properties: {
                    readonly recipient: {
                        readonly type: "string";
                        readonly description: "identificador do seller recebedor";
                    };
                    readonly liable: {
                        readonly type: "boolean";
                        readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                        readonly default: true;
                    };
                    readonly charge_processing_fee: {
                        readonly type: "boolean";
                        readonly description: "define que ira ser feito split em cima do valor bruto (0) ou false";
                        readonly default: false;
                        readonly examples: readonly [false];
                    };
                    readonly charge_recipient_processing_fee: {
                        readonly type: "boolean";
                        readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true.";
                        readonly default: true;
                        readonly examples: readonly [true];
                    };
                    readonly amount: {
                        readonly type: "integer";
                        readonly description: "valor em centavos a ser splitado.";
                        readonly examples: readonly [100];
                    };
                };
                readonly type: "object";
            };
        }, {
            readonly title: "Split Array por valor recipiente assume todo o valor da transacao";
            readonly type: "array";
            readonly items: {
                readonly required: readonly ["amount", "recipient", "charge_processing_fee", "is_gross_amount"];
                readonly properties: {
                    readonly recipient: {
                        readonly type: "string";
                        readonly description: "identificador do seller recebedor";
                    };
                    readonly liable: {
                        readonly type: "boolean";
                        readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                        readonly default: true;
                    };
                    readonly charge_processing_fee: {
                        readonly type: "boolean";
                        readonly description: "define que ira ser feito split em cima do valor liquido 1 ou true";
                        readonly default: true;
                        readonly examples: readonly [true];
                    };
                    readonly is_gross_amount: {
                        readonly type: "boolean";
                        readonly description: "Quando o valor (amount) é passado exatamente igual ao valor da transação ocorre o erro pois, o parceiro esquece da taxa Zoop. Para evitar esse tipo de problema, deve-se usar está opção como 1 ou true e, com isso, a API irá considerar a taxa Zoop antes do split.";
                        readonly default: true;
                        readonly examples: readonly [true];
                    };
                    readonly amount: {
                        readonly type: "integer";
                        readonly description: "valor em centavos a ser splitado.";
                        readonly examples: readonly [100];
                    };
                };
                readonly type: "object";
            };
        }];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly anyOf: readonly [{
                readonly type: "object";
                readonly title: "Response Split por valor taxas do seller (principal)";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Identificador do split";
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly description: "split_rule";
                    };
                    readonly transaction: {
                        readonly type: "string";
                        readonly description: "ID da transação splitada";
                    };
                    readonly recipient: {
                        readonly type: "string";
                        readonly description: "ID do participante do split que receberá o valor do split.";
                    };
                    readonly liable: {
                        readonly type: "boolean";
                        readonly description: "define se o recebedor arca com prejuízo em caso de chargeback ou não. 1 ou (true) arca; 0 ou (false) não arca.";
                        readonly default: true;
                    };
                    readonly charge_processing_fee: {
                        readonly type: "boolean";
                        readonly description: "define se o split será em cima do valor bruto - (0) ou false - ou liquido - (1) ou true";
                        readonly default: false;
                        readonly examples: readonly [false];
                    };
                    readonly charge_recipient_processing_fee: {
                        readonly type: "boolean";
                        readonly description: "Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true. Só pode ser usado para apenas um participante do split";
                        readonly default: true;
                        readonly examples: readonly [true];
                    };
                    readonly percentage: {
                        readonly type: "string";
                        readonly description: "percentual da venda a ser splitado.";
                        readonly examples: readonly [0];
                    };
                    readonly amount: {
                        readonly type: "string";
                        readonly description: "valor  da venda a ser splitado.";
                        readonly examples: readonly [0];
                    };
                    readonly is_gross_amount: {
                        readonly type: "boolean";
                        readonly description: "Quando o valor (amount) é passado exatamente igual ao valor da transação ocorre o erro pois, o parceiro esquece da taxa Zoop. Para evitar esse tipo de problema, deve-se usar está opção como 1 ou true e, com isso, a API irá considerar a taxa Zoop antes do split.";
                        readonly examples: readonly [false];
                    };
                    readonly receivable_amount: {
                        readonly type: "string";
                        readonly description: "valor  liquido do recebível.";
                        readonly examples: readonly [0];
                    };
                    readonly receivable_gross_amount: {
                        readonly type: "string";
                        readonly description: "valor  bruto do recebível.";
                        readonly examples: readonly [0];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2023-03-03 12:11:09"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2023-03-03 12:11:09"];
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly status: {
                        readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,\n\n`succeeded` `failed` `canceled` `pre_authorized` `reversed` `refunded` `pending` `new` `partial_refunded` `dispute` `charged_back`";
                        readonly type: "string";
                        readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly amount: {
                        readonly type: "string";
                        readonly examples: readonly ["1.00"];
                    };
                    readonly original_amount: {
                        readonly type: "string";
                        readonly examples: readonly ["1.00"];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly payment_type: {
                        readonly enum: readonly ["credit", "boleto"];
                    };
                    readonly transaction_number: {
                        readonly type: "string";
                    };
                    readonly sales_receipt: {
                        readonly type: "string";
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                    };
                    readonly statement_descriptor: {
                        readonly type: "string";
                        readonly examples: readonly ["SuaMarcaAqui"];
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["card"];
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly card_brand: {
                                readonly type: "string";
                                readonly examples: readonly ["Visa"];
                            };
                            readonly first4_digits: {
                                readonly type: "string";
                            };
                            readonly last4_digits: {
                                readonly type: "string";
                            };
                            readonly expiration_month: {
                                readonly type: "string";
                                readonly description: "Mês de expiração";
                                readonly examples: readonly [99];
                            };
                            readonly expiration_year: {
                                readonly type: "string";
                                readonly description: "Ano de expiração do cartão (AAAA)";
                                readonly examples: readonly [99];
                            };
                            readonly holder_name: {
                                readonly type: "string";
                                readonly description: "Nome do portador do cartão";
                            };
                            readonly is_active: {
                                readonly type: "boolean";
                                readonly description: "Ativo";
                                readonly examples: readonly [false];
                            };
                            readonly is_valid: {
                                readonly type: "boolean";
                                readonly description: "Valido";
                                readonly examples: readonly [true];
                            };
                            readonly is_verified: {
                                readonly type: "boolean";
                                readonly description: "Verificado";
                                readonly examples: readonly [false];
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly fingerprint: {
                                readonly type: "string";
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                        };
                    };
                    readonly point_of_sale: {
                        readonly type: "object";
                        readonly properties: {
                            readonly entry_mode: {
                                readonly type: "string";
                                readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                                readonly examples: readonly ["chip"];
                                readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                            };
                            readonly identification_number: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly refunded: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly voided: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly captured: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly fees: {
                        readonly type: "string";
                        readonly examples: readonly ["0.05"];
                    };
                    readonly fee_details: {
                        readonly type: "object";
                        readonly properties: {
                            readonly amount: {
                                readonly type: "string";
                                readonly examples: readonly ["0.05"];
                            };
                            readonly prepaid: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["BRL"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["zoop_credit_fee_d0"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["Zoop prepaid card-present credit fee"];
                            };
                        };
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id Transaction}\n"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly expected_on: {
                        readonly type: "string";
                        readonly format: "dateTime";
                        readonly examples: readonly ["2015-04-17 06:39:52+00:00"];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly description: "Criado em";
                        readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly description: "Atualizado em";
                        readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly status: {
                        readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,\n\n`succeeded` `failed` `canceled` `pre_authorized` `reversed` `refunded` `pending` `new` `partial_refunded` `dispute` `charged_back`";
                        readonly type: "string";
                        readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly amount: {
                        readonly type: "string";
                        readonly examples: readonly ["1.00"];
                    };
                    readonly original_amount: {
                        readonly type: "string";
                        readonly examples: readonly ["1.00"];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly payment_type: {
                        readonly enum: readonly ["credit", "boleto"];
                    };
                    readonly transaction_number: {
                        readonly type: "string";
                    };
                    readonly sales_receipt: {
                        readonly type: "string";
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                    };
                    readonly statement_descriptor: {
                        readonly type: "string";
                        readonly examples: readonly ["SuaMarcaAqui"];
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["card"];
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly card_brand: {
                                readonly type: "string";
                                readonly examples: readonly ["Visa"];
                            };
                            readonly first4_digits: {
                                readonly type: "string";
                            };
                            readonly last4_digits: {
                                readonly type: "string";
                            };
                            readonly expiration_month: {
                                readonly type: "string";
                                readonly description: "Mês de expiração";
                                readonly examples: readonly [99];
                            };
                            readonly expiration_year: {
                                readonly type: "string";
                                readonly description: "Ano de expiração do cartão (AAAA)";
                                readonly examples: readonly [99];
                            };
                            readonly holder_name: {
                                readonly type: "string";
                                readonly description: "Nome do portador do cartão";
                            };
                            readonly is_active: {
                                readonly type: "boolean";
                                readonly description: "Ativo";
                                readonly examples: readonly [false];
                            };
                            readonly is_valid: {
                                readonly type: "boolean";
                                readonly description: "Valido";
                                readonly examples: readonly [true];
                            };
                            readonly is_verified: {
                                readonly type: "boolean";
                                readonly description: "Verificado";
                                readonly examples: readonly [false];
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly fingerprint: {
                                readonly type: "string";
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                        };
                    };
                    readonly point_of_sale: {
                        readonly type: "object";
                        readonly properties: {
                            readonly entry_mode: {
                                readonly type: "string";
                                readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                                readonly examples: readonly ["chip"];
                                readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                            };
                            readonly identification_number: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly refunded: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly voided: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly captured: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly fees: {
                        readonly type: "string";
                        readonly examples: readonly ["0.05"];
                    };
                    readonly fee_details: {
                        readonly type: "object";
                        readonly properties: {
                            readonly amount: {
                                readonly type: "string";
                                readonly examples: readonly ["0.05"];
                            };
                            readonly prepaid: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["BRL"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["zoop_credit_fee_d0"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["Zoop prepaid card-present credit fee"];
                            };
                        };
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id Transaction}\n"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly expected_on: {
                        readonly type: "string";
                        readonly format: "dateTime";
                        readonly examples: readonly ["2015-04-17 06:39:52+00:00"];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly description: "Criado em";
                        readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly description: "Atualizado em";
                        readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly status: {
                        readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,";
                        readonly type: "string";
                        readonly examples: readonly ["pending"];
                    };
                    readonly amount: {
                        readonly type: "string";
                        readonly examples: readonly ["3.00"];
                    };
                    readonly original_amount: {
                        readonly type: "string";
                        readonly examples: readonly ["3.00"];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["Venda"];
                    };
                    readonly payment_type: {
                        readonly type: "string";
                        readonly description: "Tipo do pagamento";
                        readonly examples: readonly ["boleto"];
                    };
                    readonly transaction_number: {
                        readonly type: "string";
                    };
                    readonly gateway_authorizer: {
                        readonly type: "string";
                        readonly examples: readonly ["ITAU"];
                    };
                    readonly app_transaction_uid: {
                        readonly type: "string";
                    };
                    readonly refunds: {
                        readonly type: "string";
                    };
                    readonly rewards: {
                        readonly type: "string";
                    };
                    readonly discounts: {
                        readonly type: "string";
                    };
                    readonly pre_authorization: {
                        readonly type: "string";
                    };
                    readonly sales_receipt: {
                        readonly type: "string";
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                    };
                    readonly customer: {
                        readonly type: "string";
                        readonly description: "ID do customer";
                    };
                    readonly statement_descriptor: {
                        readonly type: "string";
                        readonly examples: readonly ["SuaMarcaAqui"];
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly zoop_boleto_id: {
                                readonly type: "string";
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["boleto"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["venda"];
                            };
                            readonly reference_number: {
                                readonly type: "string";
                            };
                            readonly document_number: {
                                readonly type: "string";
                            };
                            readonly expiration_date: {
                                readonly type: "string";
                                readonly description: "Data de vencimento";
                                readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                            };
                            readonly payment_limit_date: {
                                readonly type: "string";
                                readonly description: "Data limite de pagamento";
                                readonly examples: readonly ["2019-06-01 00:00:00+00:00"];
                            };
                            readonly recipient: {
                                readonly type: "string";
                                readonly examples: readonly ["Estabelecimento L P Silva"];
                            };
                            readonly bank_code: {
                                readonly type: "string";
                                readonly description: "Codigo do banco";
                                readonly examples: readonly [109];
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly description: "Endereço";
                            };
                            readonly sequence: {
                                readonly type: "string";
                                readonly description: "Sequencia";
                                readonly examples: readonly [20373];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly description: "URL do boleto gerado";
                                readonly examples: readonly ["https://api-boleto-production.s3.amazonaws.com/{Id Boleto}/{id Boleto}/{id Boleto}.html"];
                            };
                            readonly barcode: {
                                readonly type: "string";
                                readonly description: "Representação númerica do código de barras do boleto";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["not_paid"];
                            };
                        };
                    };
                    readonly source: {
                        readonly type: "string";
                    };
                    readonly point_of_sale: {
                        readonly type: "object";
                        readonly properties: {
                            readonly entry_mode: {
                                readonly type: "string";
                                readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                                readonly examples: readonly ["barcode"];
                                readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                            };
                            readonly identification_number: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly installment_plan: {
                        readonly type: "string";
                    };
                    readonly refunded: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly voided: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly captured: {
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                    readonly fees: {
                        readonly type: "string";
                        readonly examples: readonly ["0.00"];
                    };
                    readonly fee_details: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["/v1/marketplaces/{Id Marketplace}/transactions/{id Transaction}\n"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly expected_on: {
                        readonly type: "string";
                        readonly format: "dateTime";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly description: "Criado em";
                        readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly description: "Atualizado em";
                        readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                    };
                    readonly payment_authorization: {
                        readonly type: "string";
                    };
                    readonly history: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly transaction: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                    readonly examples: readonly ["3.00"];
                                };
                                readonly operation_type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["created"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly examples: readonly ["succeeded"];
                                };
                                readonly response_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly response_message: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorization_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorizer_id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorization_nsu: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly gatewayResponseTime: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorizer: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly description: "Criado em";
                                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                                };
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly status: {
                        readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,";
                        readonly type: "string";
                        readonly examples: readonly ["pending"];
                    };
                    readonly amount: {
                        readonly type: "string";
                        readonly examples: readonly ["3.00"];
                    };
                    readonly original_amount: {
                        readonly type: "string";
                        readonly examples: readonly ["3.00"];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly examples: readonly ["Venda"];
                    };
                    readonly payment_type: {
                        readonly type: "string";
                        readonly description: "Tipo do pagamento";
                        readonly examples: readonly ["boleto"];
                    };
                    readonly transaction_number: {
                        readonly type: "string";
                    };
                    readonly gateway_authorizer: {
                        readonly type: "string";
                        readonly examples: readonly ["ITAU"];
                    };
                    readonly app_transaction_uid: {
                        readonly type: "string";
                    };
                    readonly refunds: {
                        readonly type: "string";
                    };
                    readonly rewards: {
                        readonly type: "string";
                    };
                    readonly discounts: {
                        readonly type: "string";
                    };
                    readonly pre_authorization: {
                        readonly type: "string";
                    };
                    readonly sales_receipt: {
                        readonly type: "string";
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                    };
                    readonly customer: {
                        readonly type: "string";
                        readonly description: "ID do customer";
                    };
                    readonly statement_descriptor: {
                        readonly type: "string";
                        readonly examples: readonly ["SuaMarcaAqui"];
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly zoop_boleto_id: {
                                readonly type: "string";
                            };
                            readonly resource: {
                                readonly type: "string";
                                readonly examples: readonly ["boleto"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["venda"];
                            };
                            readonly reference_number: {
                                readonly type: "string";
                            };
                            readonly document_number: {
                                readonly type: "string";
                            };
                            readonly expiration_date: {
                                readonly type: "string";
                                readonly description: "Data de vencimento";
                                readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
                            };
                            readonly payment_limit_date: {
                                readonly type: "string";
                                readonly description: "Data limite de pagamento";
                                readonly examples: readonly ["2019-06-01 00:00:00+00:00"];
                            };
                            readonly recipient: {
                                readonly type: "string";
                                readonly examples: readonly ["Estabelecimento L P Silva"];
                            };
                            readonly bank_code: {
                                readonly type: "string";
                                readonly description: "Codigo do banco";
                                readonly examples: readonly [109];
                            };
                            readonly customer: {
                                readonly type: "string";
                                readonly description: "ID do customer";
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly description: "Endereço";
                            };
                            readonly sequence: {
                                readonly type: "string";
                                readonly description: "Sequencia";
                                readonly examples: readonly [20373];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly description: "URL do boleto gerado";
                                readonly examples: readonly ["https://api-boleto-production.s3.amazonaws.com/{Id Boleto}/{id Boleto}/{id Boleto}.html"];
                            };
                            readonly barcode: {
                                readonly type: "string";
                                readonly description: "Representação númerica do código de barras do boleto";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Atualizado em";
                                readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["not_paid"];
                            };
                        };
                    };
                    readonly source: {
                        readonly type: "string";
                    };
                    readonly point_of_sale: {
                        readonly type: "object";
                        readonly properties: {
                            readonly entry_mode: {
                                readonly type: "string";
                                readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                                readonly examples: readonly ["barcode"];
                                readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                            };
                            readonly identification_number: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly installment_plan: {
                        readonly type: "string";
                    };
                    readonly refunded: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly voided: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly captured: {
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                    readonly fees: {
                        readonly type: "string";
                        readonly examples: readonly ["0.00"];
                    };
                    readonly fee_details: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["/v1/marketplaces/{Id Marketplace}/transactions/{id Transaction}\n"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly expected_on: {
                        readonly type: "string";
                        readonly format: "dateTime";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly description: "Criado em";
                        readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly description: "Atualizado em";
                        readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                    };
                    readonly payment_authorization: {
                        readonly type: "string";
                    };
                    readonly history: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly transaction: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                    readonly examples: readonly ["3.00"];
                                };
                                readonly operation_type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["created"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly examples: readonly ["succeeded"];
                                };
                                readonly response_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly response_message: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorization_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorizer_id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorization_nsu: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly gatewayResponseTime: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly authorizer: {
                                    readonly type: "string";
                                    readonly examples: readonly ["null"];
                                };
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly description: "Criado em";
                                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                                };
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "ID da tranção";
                    };
                    readonly resource: {
                        readonly type: "string";
                        readonly description: "Tipo do recurso";
                        readonly examples: readonly ["transaction"];
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly description: "Status da transação";
                        readonly examples: readonly ["pending"];
                    };
                    readonly amount: {
                        readonly type: "number";
                        readonly description: "Valor da transação";
                        readonly examples: readonly [10];
                    };
                    readonly original_amount: {
                        readonly type: "number";
                        readonly description: "Valor original da transação";
                        readonly examples: readonly [10];
                    };
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["BRL"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "Uma descrição breve da motivação da sua transação";
                        readonly examples: readonly ["Venda com Pix"];
                    };
                    readonly payment_type: {
                        readonly type: "string";
                        readonly description: "Tipo de pagamento";
                        readonly examples: readonly ["pix"];
                    };
                    readonly transaction_number: {
                        readonly type: "string";
                    };
                    readonly gateway_authorizer: {
                        readonly type: "string";
                        readonly description: "Autorizadora";
                        readonly examples: readonly ["Zoop"];
                    };
                    readonly app_transaction_uid: {
                        readonly type: "string";
                    };
                    readonly refunds: {
                        readonly type: "string";
                    };
                    readonly rewards: {
                        readonly type: "string";
                    };
                    readonly discounts: {
                        readonly type: "string";
                    };
                    readonly pre_authorization: {
                        readonly type: "string";
                    };
                    readonly sales_receipt: {
                        readonly type: "string";
                    };
                    readonly on_behalf_of: {
                        readonly type: "string";
                        readonly description: "Seller responsavel pela venda";
                    };
                    readonly customer: {
                        readonly type: "string";
                    };
                    readonly statement_descriptor: {
                        readonly type: "string";
                        readonly description: "Descrição";
                        readonly examples: readonly ["TestePay"];
                    };
                    readonly payment_method: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly provider: {
                                readonly type: "string";
                                readonly examples: readonly ["ITAU"];
                            };
                            readonly version: {
                                readonly type: "number";
                                readonly examples: readonly ["1.0.0"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["DYNAMIC"];
                            };
                            readonly reusable: {
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly allow_update: {
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly expiration_date: {
                                readonly type: "string";
                                readonly examples: readonly ["2015-04-17T06:39:52+00:00"];
                            };
                            readonly key: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["CPF"];
                                    };
                                    readonly value: {
                                        readonly type: "string";
                                        readonly examples: readonly ["10050508000"];
                                    };
                                };
                            };
                            readonly pix_link: {
                                readonly type: "string";
                                readonly examples: readonly ["https://pix.bcb.gov.br/qr/MDAwMjAxMDEwMjEyMjY4NjAwMTRCUi5HT1YuQkNCLlBJWDI1NjRzcGktaC5pdGF1LmNvbS5ici9waXgvcXIvdjIvMzNkOTc3MTctNzZhNy00ZThhLWFhY2UtMWU1YmVkYWY1ZTQ1NTIwNDAwMDA1MzAzOTg2NTgwMkJSNTkxNFNhbmRlciBCYW5raW5nNjAwOVNBTyBQQVVMTzYyMDcwNTAzKioqNjMwNEY1NDI="];
                            };
                            readonly qr_code: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly emv: {
                                        readonly type: "string";
                                        readonly examples: readonly ["BR.GOV.BCB.PIX2564spi-h.itau.com.br/pix/qr/v2/33d97717-76a7-4e8a-aace-1e5bedaf5e455204000053039865802BR5914Sander Banking6009SAO"];
                                    };
                                };
                            };
                        };
                    };
                    readonly source: {
                        readonly type: "string";
                    };
                    readonly point_of_sale: {
                        readonly type: "object";
                        readonly properties: {
                            readonly entry_mode: {
                                readonly type: "string";
                                readonly examples: readonly ["barcode"];
                            };
                            readonly identification_number: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly installment_plan: {
                        readonly type: "string";
                    };
                    readonly refunded: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly voided: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly captured: {
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly fees: {
                        readonly type: "string";
                        readonly examples: readonly [0];
                    };
                    readonly fee_details: {
                        readonly type: "string";
                    };
                    readonly location_latitude: {
                        readonly type: "string";
                    };
                    readonly location_longitude: {
                        readonly type: "string";
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["/v1/marketplaces/{Id marketplace}/transactions/{Id transaction}"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                    readonly expected_on: {
                        readonly type: "string";
                        readonly description: "Esperado em";
                        readonly examples: readonly ["2021-07-02T00:00:00+00:00"];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly description: "Criado em";
                        readonly examples: readonly ["2021-07-02T19:42:59+00:00"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly description: "Atualizado em";
                        readonly examples: readonly ["2021-07-02T19:42:59+00:00"];
                    };
                    readonly payment_authorization: {
                        readonly type: "string";
                    };
                    readonly history: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly transaction: {
                                readonly type: "string";
                            };
                            readonly amount: {
                                readonly type: "string";
                                readonly examples: readonly [10];
                            };
                            readonly operation_type: {
                                readonly type: "string";
                                readonly examples: readonly ["created"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["succeeded"];
                            };
                            readonly response_code: {
                                readonly type: "string";
                            };
                            readonly response_message: {
                                readonly type: "string";
                            };
                            readonly authorization_code: {
                                readonly type: "string";
                            };
                            readonly authorizer_id: {
                                readonly type: "string";
                            };
                            readonly authorization_nsu: {
                                readonly type: "string";
                            };
                            readonly gatewayResponseTime: {
                                readonly type: "string";
                            };
                            readonly authorizer: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Criado em";
                                readonly examples: readonly ["2021-07-02 19:42:59"];
                            };
                        };
                    };
                };
            }];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Request Failed"];
                        };
                        readonly status_code: {
                            readonly type: "number";
                            readonly examples: readonly [409];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["Conflict"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly examples: readonly ["split_rule_precondition_creation_failure"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly examples: readonly ["Split operation failed due to precondition rules"];
                        };
                        readonly message_display: {
                            readonly type: "string";
                            readonly examples: readonly ["ERRO - REGRA DE CONSISTENCIA DA TRANSACAO E RECEBIVEIS"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV1MarketplacesMarketplaceIdTransactionsTransactionIdVoid: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["on_behalf_of", "amount"];
        readonly properties: {
            readonly on_behalf_of: {
                readonly type: "string";
                readonly description: "Identificador do seller responsável pela venda";
            };
            readonly amount: {
                readonly type: "integer";
                readonly description: "valor da venda a ser estornado em centavos";
            };
            readonly void_rules: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["recipient", "amount"];
                    readonly properties: {
                        readonly recipient: {
                            readonly type: "string";
                            readonly description: "Identificador do seller participante do split";
                        };
                        readonly split_rule: {
                            readonly type: "string";
                            readonly description: "Identificador do split rule";
                        };
                        readonly amount: {
                            readonly type: "integer";
                            readonly description: "valor da venda a ser estornado em centavos";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,\n\n`succeeded` `failed` `canceled` `pre_authorized` `reversed` `refunded` `pending` `new` `partial_refunded` `dispute` `charged_back`";
                    readonly type: "string";
                    readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                };
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["transaction"];
                };
                readonly amount: {
                    readonly type: "string";
                    readonly examples: readonly ["1.00"];
                };
                readonly original_amount: {
                    readonly type: "string";
                    readonly examples: readonly ["1.00"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly payment_type: {
                    readonly enum: readonly ["credit", "boleto"];
                };
                readonly transaction_number: {
                    readonly type: "string";
                };
                readonly sales_receipt: {
                    readonly type: "string";
                };
                readonly on_behalf_of: {
                    readonly type: "string";
                };
                readonly statement_descriptor: {
                    readonly type: "string";
                    readonly examples: readonly ["SuaMarcaAqui"];
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly resource: {
                            readonly type: "string";
                            readonly examples: readonly ["card"];
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly card_brand: {
                            readonly type: "string";
                            readonly examples: readonly ["Visa"];
                        };
                        readonly first4_digits: {
                            readonly type: "string";
                        };
                        readonly last4_digits: {
                            readonly type: "string";
                        };
                        readonly expiration_month: {
                            readonly type: "string";
                            readonly description: "Mês de expiração";
                            readonly examples: readonly [99];
                        };
                        readonly expiration_year: {
                            readonly type: "string";
                            readonly description: "Ano de expiração do cartão (AAAA)";
                            readonly examples: readonly [99];
                        };
                        readonly holder_name: {
                            readonly type: "string";
                            readonly description: "Nome do portador do cartão";
                        };
                        readonly is_active: {
                            readonly type: "boolean";
                            readonly description: "Ativo";
                            readonly examples: readonly [false];
                        };
                        readonly is_valid: {
                            readonly type: "boolean";
                            readonly description: "Valido";
                            readonly examples: readonly [true];
                        };
                        readonly is_verified: {
                            readonly type: "boolean";
                            readonly description: "Verificado";
                            readonly examples: readonly [false];
                        };
                        readonly customer: {
                            readonly type: "string";
                            readonly description: "ID do customer";
                        };
                        readonly fingerprint: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly description: "Criado em";
                            readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly description: "Atualizado em";
                            readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                        };
                    };
                };
                readonly point_of_sale: {
                    readonly type: "object";
                    readonly properties: {
                        readonly entry_mode: {
                            readonly type: "string";
                            readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                            readonly examples: readonly ["chip"];
                            readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                        };
                        readonly identification_number: {
                            readonly type: "string";
                        };
                    };
                };
                readonly refunded: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly voided: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly captured: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly fees: {
                    readonly type: "string";
                    readonly examples: readonly ["0.05"];
                };
                readonly fee_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amount: {
                            readonly type: "string";
                            readonly examples: readonly ["0.05"];
                        };
                        readonly prepaid: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly examples: readonly ["BRL"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["zoop_credit_fee_d0"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly examples: readonly ["Zoop prepaid card-present credit fee"];
                        };
                    };
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id Transaction}\n"];
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "string";
                    };
                };
                readonly expected_on: {
                    readonly type: "string";
                    readonly format: "dateTime";
                    readonly examples: readonly ["2015-04-17 06:39:52+00:00"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["Bad Request"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly description: "Código do erro";
                            readonly examples: readonly [400];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Tipo de erro";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Categoria de erro";
                            readonly examples: readonly ["invalid_parameter"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Mensagem de erro";
                            readonly examples: readonly ["Invalid parameter(s). Your Missing or invalid required param: amount. Please verify request parameters. value is incorrect. Please verify request parameters"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                            readonly examples: readonly ["Request Failed"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly description: "Código do erro";
                            readonly examples: readonly [402];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Tipo de erro";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Categoria de erro";
                            readonly examples: readonly ["void_transaction_error"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Mensagem de erro";
                            readonly examples: readonly ["The transaction has not sufficient amount for the requested void operation"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["Not Found"];
                        };
                        readonly status_code: {
                            readonly type: "string";
                            readonly examples: readonly [404];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["invalid_request_error"];
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly examples: readonly ["resource_not_found"];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly examples: readonly ["Sorry, the transaction (id: 99999999999999999999999999999999) you are trying to use does not exist or has been deleted."];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutV1MarketplacesMarketplaceIdRecurrencePlansPlanId: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "frequency", "interval", "payment_methods", "currency"];
        readonly properties: {
            readonly frequency: {
                readonly description: "Frequencia que o plano será cobrado";
                readonly type: "string";
                readonly enum: readonly ["daily", "monthly", "weekly", "annually"];
            };
            readonly interval: {
                readonly description: "intervalo entre frequencia de cobrança";
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly payment_methods: {
                readonly description: "métodos de pagamento utilizados";
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly enum: readonly ["credit"];
                    readonly default: "credit";
                };
            };
            readonly amount: {
                readonly description: "valor plano em centavos";
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly setup_amount: {
                readonly description: "valor do setup do plano em centavos";
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly currency: {
                readonly description: "moeda utilizada no formato ISO 4217";
                readonly type: "string";
                readonly examples: readonly ["BRL"];
            };
            readonly description: {
                readonly description: "descrição do plano";
                readonly type: "string";
            };
            readonly name: {
                readonly description: "nome do plano";
                readonly type: "string";
            };
            readonly duration: {
                readonly description: "tempo de duração do plano em relação à frequencia escolhida";
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly plan_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "plan_id"];
        }];
    };
};
declare const PutV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly plan: {
                readonly description: "referência a um plano existente";
                readonly type: "string";
                readonly format: "uuid";
            };
            readonly on_behalf_of: {
                readonly description: "Referência a um vendedor existente";
                readonly type: "string";
                readonly format: "uuid";
            };
            readonly customer: {
                readonly type: "string";
                readonly description: "ID do customer";
            };
            readonly payment_method: {
                readonly description: "método de pagamento";
                readonly type: "string";
                readonly enum: readonly ["credit"];
                readonly default: "credit";
            };
            readonly due_date: {
                readonly description: "data da cobrança";
                readonly type: "string";
                readonly format: "date";
                readonly examples: readonly ["2017-07-21"];
            };
            readonly expiration_date: {
                readonly type: "string";
                readonly description: "Data de vencimento";
                readonly examples: readonly ["2019-05-29 00:00:00+00:00"];
            };
            readonly amount: {
                readonly description: "valor em centavos";
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly currency: {
                readonly description: "moeda utilizada, no formato ISO4217";
                readonly type: "string";
                readonly examples: readonly ["BRL"];
            };
            readonly card: {
                readonly description: "Identificado Zoop do cartão a ser utilizado na recorrência";
                readonly type: "string";
                readonly format: "uuid";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly subscription_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["marketplace_id", "subscription_id"];
        }];
    };
};
declare const PutV1MarketplacesMarketplaceIdTransactionsTransactionId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly description: {
                readonly type: "string";
                readonly examples: readonly ["BRL"];
            };
            readonly metadata: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly marketplace_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID do marketplace";
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "identificador da transação";
                };
            };
            readonly required: readonly ["marketplace_id", "transaction_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly description: "Retorna transações onde o status for igual o informado. Para busca múltipla basta concatenar com ,\n\n`succeeded` `failed` `canceled` `pre_authorized` `reversed` `refunded` `pending` `new` `partial_refunded` `dispute` `charged_back`";
                    readonly type: "string";
                    readonly enum: readonly ["succeeded", "failed", "canceled", "pre_authorized", "reversed", "refunded", "pending", "new", "partial_refunded", "dispute", "charged_back"];
                };
                readonly resource: {
                    readonly type: "string";
                    readonly examples: readonly ["transaction"];
                };
                readonly amount: {
                    readonly type: "string";
                    readonly examples: readonly ["1.00"];
                };
                readonly original_amount: {
                    readonly type: "string";
                    readonly examples: readonly ["1.00"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["BRL"];
                };
                readonly payment_type: {
                    readonly enum: readonly ["credit", "boleto"];
                };
                readonly transaction_number: {
                    readonly type: "string";
                };
                readonly sales_receipt: {
                    readonly type: "string";
                };
                readonly on_behalf_of: {
                    readonly type: "string";
                };
                readonly statement_descriptor: {
                    readonly type: "string";
                    readonly examples: readonly ["SuaMarcaAqui"];
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly resource: {
                            readonly type: "string";
                            readonly examples: readonly ["card"];
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly card_brand: {
                            readonly type: "string";
                            readonly examples: readonly ["Visa"];
                        };
                        readonly first4_digits: {
                            readonly type: "string";
                        };
                        readonly last4_digits: {
                            readonly type: "string";
                        };
                        readonly expiration_month: {
                            readonly type: "string";
                            readonly description: "Mês de expiração";
                            readonly examples: readonly [99];
                        };
                        readonly expiration_year: {
                            readonly type: "string";
                            readonly description: "Ano de expiração do cartão (AAAA)";
                            readonly examples: readonly [99];
                        };
                        readonly holder_name: {
                            readonly type: "string";
                            readonly description: "Nome do portador do cartão";
                        };
                        readonly is_active: {
                            readonly type: "boolean";
                            readonly description: "Ativo";
                            readonly examples: readonly [false];
                        };
                        readonly is_valid: {
                            readonly type: "boolean";
                            readonly description: "Valido";
                            readonly examples: readonly [true];
                        };
                        readonly is_verified: {
                            readonly type: "boolean";
                            readonly description: "Verificado";
                            readonly examples: readonly [false];
                        };
                        readonly customer: {
                            readonly type: "string";
                            readonly description: "ID do customer";
                        };
                        readonly fingerprint: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly examples: readonly ["/v1/marketplaces/{id marketplace}/cards/{id card}"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly description: "Criado em";
                            readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly description: "Atualizado em";
                            readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                        };
                    };
                };
                readonly point_of_sale: {
                    readonly type: "object";
                    readonly properties: {
                        readonly entry_mode: {
                            readonly type: "string";
                            readonly enum: readonly ["manually_keyed", "magstripe", "barcode", "ocr", "chip", "contactless_chip", "magstripe_fallback", "manually_keyed_fallback", "contactless_magstripe"];
                            readonly examples: readonly ["chip"];
                            readonly description: "`manually_keyed` `magstripe` `barcode` `ocr` `chip` `contactless_chip` `magstripe_fallback` `manually_keyed_fallback` `contactless_magstripe`";
                        };
                        readonly identification_number: {
                            readonly type: "string";
                        };
                    };
                };
                readonly refunded: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly voided: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly captured: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly fees: {
                    readonly type: "string";
                    readonly examples: readonly ["0.05"];
                };
                readonly fee_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amount: {
                            readonly type: "string";
                            readonly examples: readonly ["0.05"];
                        };
                        readonly prepaid: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly examples: readonly ["BRL"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["zoop_credit_fee_d0"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly examples: readonly ["Zoop prepaid card-present credit fee"];
                        };
                    };
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["/v1/marketplaces/{id marketplace}/transactions/{id Transaction}\n"];
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "string";
                    };
                };
                readonly expected_on: {
                    readonly type: "string";
                    readonly format: "dateTime";
                    readonly examples: readonly ["2015-04-17 06:39:52+00:00"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Criado em";
                    readonly examples: readonly ["2019-05-27 17:40:06+00:00"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Atualizado em";
                    readonly examples: readonly ["2019-10-22 13:31:25+00:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteV1MarketplacesMarketplaceIdCardsCardId, DeleteV1MarketplacesMarketplaceIdInvoicesInvoiceId, DeleteV1MarketplacesMarketplaceIdInvoicesInvoiceIdVoid, DeleteV1MarketplacesMarketplaceIdRecurrencePlansPlanId, DeleteV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionId, DeleteV1MarketplacesMarketplaceIdSourcesSourceId, DeleteV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesId, GetV1CardPresentTerminalsIdentificationNumber, GetV1CardPresentTerminalsSearch, GetV1MarketplacesMarketplaceIdBoletosBoletoId, GetV1MarketplacesMarketplaceIdCardsCardId, GetV1MarketplacesMarketplaceIdInvoices, GetV1MarketplacesMarketplaceIdInvoicesInvoiceId, GetV1MarketplacesMarketplaceIdReceiptsReceiptId, GetV1MarketplacesMarketplaceIdReceivablesReceivableId, GetV1MarketplacesMarketplaceIdRecurrencePlans, GetV1MarketplacesMarketplaceIdRecurrencePlansPlanId, GetV1MarketplacesMarketplaceIdRecurrenceSubscriptions, GetV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionId, GetV1MarketplacesMarketplaceIdSellersCustomerIdInvoices, GetV1MarketplacesMarketplaceIdSellersSellerIdReceivables, GetV1MarketplacesMarketplaceIdSellersSellerIdSubscriptions, GetV1MarketplacesMarketplaceIdSellersSellerIdTransactions, GetV1MarketplacesMarketplaceIdSourcesSourceId, GetV1MarketplacesMarketplaceIdTransactions, GetV1MarketplacesMarketplaceIdTransactionsTransactionId, GetV1MarketplacesMarketplaceIdTransactionsTransactionIdCancelledLetter, GetV1MarketplacesMarketplaceIdTransactionsTransactionIdReceivables, GetV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRules, GetV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRulesId, GetV1ReceiptsMarketplaceIdReceiptId, PostV1BoletosCancellationMarketplacesMarketplaceIdTransactionsTransactionId, PostV1MarketplacesMarketplaceIdBoletosBoletoIdEmails, PostV1MarketplacesMarketplaceIdCards, PostV1MarketplacesMarketplaceIdInvoices, PostV1MarketplacesMarketplaceIdInvoicesInvoiceIdApprove, PostV1MarketplacesMarketplaceIdReceiptsReceiptIdEmails, PostV1MarketplacesMarketplaceIdReceiptsReceiptIdTexts, PostV1MarketplacesMarketplaceIdRecurrencePlans, PostV1MarketplacesMarketplaceIdRecurrenceSubscriptions, PostV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdReactivate, PostV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionIdSuspend, PostV1MarketplacesMarketplaceIdSources, PostV1MarketplacesMarketplaceIdTerminalsPairing, PostV1MarketplacesMarketplaceIdTransactions, PostV1MarketplacesMarketplaceIdTransactionsTransactionIdApprove, PostV1MarketplacesMarketplaceIdTransactionsTransactionIdCapture, PostV1MarketplacesMarketplaceIdTransactionsTransactionIdSplitRules, PostV1MarketplacesMarketplaceIdTransactionsTransactionIdVoid, PutV1MarketplacesMarketplaceIdRecurrencePlansPlanId, PutV1MarketplacesMarketplaceIdRecurrenceSubscriptionsSubscriptionId, PutV1MarketplacesMarketplaceIdTransactionsTransactionId };
