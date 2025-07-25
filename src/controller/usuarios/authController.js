const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Cliente = require("../../models/clientes/cliente");
const Payment = require("../../models/pagamentos/index");
const { db } = require("../../../config/index");
const { consultarSaldoSeller } = require("../../helper/zoop");

const JWT_SECRET = process.env.JWT_SECRET || "segredo-super-seguro";

const authRegister = async (req, res) => {
  try {
    const {
      nome,
      email,
      password,
      confirmpassword,
      marketplaceId,
      status,
      taxa_padrao,
      taxa_repasse_juros,
      phone,
      website,
      address,
      zpk_id_marketplace,
      cpf_cnpj,
      contactPerson,
    } = req.body;
    // Verifica se password e confirmpassword são iguais
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "As senhas não conferem." });
    }
    // Verifica se já existe usuário
    const userExists = await Cliente.buscarPorEmail(email);
    if (userExists) {
      return res.status(409).json({ error: "E-mail já cadastrado." });
    }
    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);
    const cargo = "marketplace";
    // Cria usuário
    const id = await Cliente.criar({
      nome,
      email,
      password: hashedPassword,
      cargo,
      marketplaceId,
      status: "ativo",
      id_juros: taxa_padrao,
      taxa_repasse_juros,
      phone,
      website,
      address,
      zpk_id_marketplace,
      cpf_cnpj,
      contactPerson,
    });
    // Gera token JWT com o id do usuário
    const token = jwt.sign(
      { id: id.id, email: id.email, cargo: id.cargo },
      JWT_SECRET,
      { expiresIn: "1d" }
    );
    return res
      .status(201)
      .json({ id, token, message: "Usuário cadastrado com sucesso." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const authLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Busca usuário
    const user = await Cliente.buscarPorEmail(email);
    if (!user) {
      return res.status(401).json({ error: "E-mail ou senha inválidos." });
    }
    // Verifica senha
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: "E-mail ou senha inválidos." });
    }
    // Gera token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, cargo: user.cargo },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    if (user?.cargo === "admin") {
      const dadosMKT = await Cliente.listarMarketplacesComClientes();

      const dadosSL = await Cliente.listarTodosSellersComCliente();

      const painel = {
        marketplaces: dadosMKT,
        sellers: dadosSL,
      };
      return res.json({
        token,
        painel,
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email,
          cargo: user.cargo,
          marketplaceId: user.marketplaceId,
          dataInfo: user.dataInfo,
        },
        settings: user.settings,
      });
    } else {
      return res.json({
        token,
        user: {
          id: user.id,
          juros: user.juros_data,
          nome: user.nome,
          email: user.email,
          taxa_juros: user?.taxa_juros,
          id_juros: user.id_juros,
          habilitar_parcelas: user.habilitar_parcelas,
          cargo: user.cargo,
          marketplaceId: user.marketplaceId,
          dataInfo: user.dataInfo,
        },
        settings: user.settings,
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const buscarPorId = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(500).json({ error: "ID não fornecido" });
    }
    const dados = await Cliente.buscarPorId(id);
    return res.status(201).json({ dados: dados });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletarPorId = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(500).json({ error: "ID não fornecido" });
    }
    const dados = await Cliente.deletar(id);
    return res
      .status(201)
      .json({ dados: dados, message: "Cliente deletado com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const listSellerByMarketplace = async (req, res) => {
  try {
    const { id } = req.params;
    const dados = await Cliente.buscarSellersPorMarketplace(id);

    return res.status(201).json({ dados: dados });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const destroySellerByMarketplace = async (req, res) => {
  try {
    const { id, id_cliente } = req.params;
    const dados = await Cliente.deletarSellerByMarketplace(id, id_cliente);

    return res
      .status(201)
      .json({ message: "Seller deletado com sucesso", dados: dados });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const destroySellerByMarketPlaceUserMKT = async (req, res) => {
  try {
    const { id, id_cliente } = req.params;
    const dados = await Cliente.destroySellerByMarketPlaceUserMKT(
      id,
      id_cliente
    );

    return res
      .status(201)
      .json({ message: "Seller deletado com sucesso", dados: dados });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const registerSellerToMarktplace = async (req, res) => {
  try {
    try {
      const {
        nome,
        email,
        password,
        confirmpassword,
        marketplaceId,
        id_seller,
        taxa_padrao,
        taxa_repasse_juros,
        phone,
        website,
        address,
        cpf_cnpj,
        contactPerson,
      } = req.body;

      // Verifica se password e confirmpassword são iguais
      if (password !== confirmpassword) {
        return res.status(400).json({ error: "As senhas não conferem." });
      }
      // Verifica se já existe usuário
      const userExists = await Cliente.buscarPorEmailSeller(email);
      if (userExists) {
        return res
          .status(409)
          .json({ error: "E-mail já cadastrado a outro Seller." });
      }
      // Hash da senha
      const hashedPassword = await bcrypt.hash(password, 10);
      // Cria usuário
      const id = await Cliente.criarSeller({
        id_seller,
        nome,
        email,
        password: hashedPassword,
        marketplaceId,
        id_juros: taxa_padrao,
        taxa_repasse_juros,
        phone,
        website,
        address,
        cpf_cnpj,
        contactPerson,
      });

      return res
        .status(201)
        .json({ id, message: "Usuário cadastrado com sucesso.", data: id });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateMarketplace = async (req, res) => {
  try {
    const { idCliente } = req.params; // pega o id da URL, ex: /clientes/:id
    const {
      nome,
      email,
      password,
      status,
      marketplaceId,
      zpk_id_marketplace,
      phone,
      website,
      address,
      cpf_cnpj,
      contactPerson,
    } = req.body;
    let hashedPassword = null;
    if (password) {
      const saltRounds = 10;
      hashedPassword = await bcrypt.hash(password, saltRounds);
    }
    let dados = {};
    if (hashedPassword) {
      dados = {
        nome,
        email,
        status,
        password: hashedPassword,
        marketplaceId,
        zpk_id_marketplace,
        phone,
        website,
        address,
        cpf_cnpj,
        contactPerson,
      };
    } else {
      dados = {
        nome,
        email,
        status,
        marketplaceId,
        zpk_id_marketplace,
        phone,
        website,
        address,
        cpf_cnpj,
        contactPerson,
      };
    }
    // Monta os dados, incluindo marketplace apenas se existir

    const resultado = await Cliente.atualizar(idCliente, dados); // chama a função de atualizar

    return res.status(200).json({ dados: resultado });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateSeller = async (req, res) => {
  try {
    const { idSeller } = req.params; // pega o id da URL, ex: /clientes/:id
    const {
      id_seller,
      cliente_id,
      nome,
      email,
      password,
      marketplaceId,
      taxa_padrao,
      taxa_repasse_juros,
      phone,
      website,
      address,
      cpf_cnpj,
      contactPerson,
    } = req.body;
    let hashedPassword = null;
    if (password) {
      const saltRounds = 10;
      hashedPassword = await bcrypt.hash(password, saltRounds);
    }
    let dados = {};
    if (hashedPassword) {
      dados = {
        id_seller,
        nome,
        email,
        password: hashedPassword,
        marketplaceId,
        id_juros: taxa_padrao,
        taxa_repasse_juros,
        phone,
        website,
        address,
        cpf_cnpj,
        contactPerson,
      };
    } else {
      dados = {
        id_seller,
        nome,
        email,
        marketplaceId,
        id_juros: taxa_padrao,
        taxa_repasse_juros,
        phone,
        website,
        address,
        cpf_cnpj,
        contactPerson,
      };
    }
    // Monta os dados, incluindo marketplace apenas se existir

    const resultado = await Cliente.atualizarSeller(cliente_id, dados); // chama a função de atualizar

    return res.status(200).json({ dados: resultado });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const listarMarketPlace = async (req, res) => {
  try {
    const dados = await Cliente.listarMarketplacesComClientes();
    return res.status(201).json({ dados: dados });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// sellers ================
const criarSeller = async (req, res) => {
  try {
    const {
      id_seller,
      nome,
      email,
      password,
      confirmpassword,
      marketplaceId,
      taxa_padrao,
      taxa_repasse_juros,
      phone,
      website,
      address,
      cpf_cnpj,
      contactPerson,
    } = req.body;

    if (password !== confirmpassword) {
      throw new Error("As senhas não conferem.");
    }
    const userExists = await Cliente.buscarPorEmailSeller(email);
    if (userExists) {
      return res
        .status(409)
        .json({ error: "E-mail já cadastrado para outro seller." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // Chama a função do model para criar o seller
    const novoSeller = await Cliente.criarSeller({
      id_seller,
      nome,
      email,
      password: hashedPassword,
      marketplaceId,
      id_juros: taxa_padrao,
      taxa_repasse_juros,
      phone,
      website,
      address,
      cpf_cnpj,
      contactPerson,
    });

    // 4. Geração do token JWT
    const tokenPayload = {
      id: novoSeller.id,
      nome,
      email,
      marketplaceId,
      cargo: "seller",
    };
    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "7d" });

    return res.status(201).json({ dados: novoSeller, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const buscarPorIdSeller = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(500).json({ error: "ID não fornecido" });
    }
    const dados = await Cliente.buscarPorIdSeller(id);
    return res.status(201).json({ dados: dados });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateSettings = async (req, res) => {
  try {
    const { id } = req.params; // ID do cliente
    const { email, nome, novaSenha, senhaAtual } = req.body;

    const clienteRef = db.collection("clientes").doc(id);
    const clienteDoc = await clienteRef.get();

    if (!clienteDoc.exists) {
      return res.status(404).json({ error: "Cliente não encontrado." });
    }

    const clienteData = clienteDoc.data();
    const senhaSalva = clienteData.password; // Supondo que a senha criptografada está armazenada como 'password'

    // Verifica a senha atual se novaSenha é fornecida
    if (novaSenha && senhaAtual) {
      const senhaValida = await bcrypt.compare(senhaAtual, senhaSalva);
      if (!senhaValida) {
        return res.status(401).json({ error: "Senha atual incorreta." });
      }

      // Atualiza a nova senha se for válida
      const senhaCriptografada = await bcrypt.hash(novaSenha, 10);
      await clienteRef.update({ password: senhaCriptografada }); // Salva a nova senha criptografada
    }

    // Prepara os dados para atualização do nome e email
    const updates = {};
    if (nome) updates.nome = nome; // Atualiza o nome se fornecido
    if (email) updates.email = email; // Atualiza o e-mail se fornecido

    // Atualiza os campos do cliente (nome e email)
    if (Object.keys(updates).length > 0) {
      await clienteRef.update(updates);
    }

    return res.status(200).json({ message: "Perfil atualizado com sucesso." });
  } catch (error) {
    console.error(error); // Log do erro para depuração
    return res.status(500).json({ error: error.message });
  }
};

const updateSettingsBranch = async (req, res) => {
  try {
    const { id } = req.params; // ID do cliente
    const data = req.body; // { primaryColor, secondaryColor, logo }

    const clienteRef = db.collection("clientes").doc(id);
    const clienteDoc = await clienteRef.get();

    if (!clienteDoc.exists) {
      return res.status(404).json({ error: "Cliente não encontrado." });
    }

    // Atualiza o campo "settings" do cliente
    await clienteRef.update({
      settings: {
        primaryColor: data.primaryColor,
        secondaryColor: data.secondaryColor,
        // logo: data.logo,
      },
    });

    // Busca o marketplace associado ao cliente
    const marketplaceRef = db
      .collection("marketplaces")
      .where("cliente_id", "==", id);
    const marketplaceSnapshot = await marketplaceRef.get();

    if (!marketplaceSnapshot.empty) {
      const marketplaceDoc = marketplaceSnapshot.docs[0]; // Assume que há apenas um marketplace por cliente

      // Busca todos os sellers associados ao marketplace
      const sellersRef = db
        .collection("clientes")
        .where("marketplaceId", "==", marketplaceDoc.id);
      const sellersSnapshot = await sellersRef.get();

      // Atualiza cada seller com as configurações do marketplace
      const updatePromises = sellersSnapshot.docs.map((sellerDoc) => {
        return sellerDoc.ref.update({
          settings: {
            primaryColor: data.primaryColor,
            secondaryColor: data.secondaryColor,
            // logo: data.logo, // Se necessário
          },
        });
      });

      // Aguarda a atualização de todos os sellers
      await Promise.all(updatePromises);
    }

    return res
      .status(200)
      .json({ message: "Configurações atualizadas com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const listarSellers = async (req, res) => {
  try {
    const dados = await Cliente.listarTodosSellersComCliente();
    return res.status(201).json({ dados: dados });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const buscarDadosSellerGeral = async (req, res) => {
  try {
    const { id } = req.params;
    // Busca o documento do cliente
    const sellerDocSnap = await db.collection("clientes").doc(id).get();
    const sellerDoc = { id: sellerDocSnap.id, ...sellerDocSnap.data() };
    let data = {};

    if (sellerDoc.cargo === "admin") {
      data = {
        userId: sellerDoc.id,
        cargo: "admin",
      };
    } else if (sellerDoc.cargo === "marketplace") {
      // Busca marketplace relacionado ao cliente
      const mktSnapshot = await db
        .collection("marketplaces")
        .where("cliente_id", "==", id)
        .limit(1)
        .get();

      if (mktSnapshot.empty) {
        return res
          .status(404)
          .json({ message: "Marketplace não encontrado para este cliente." });
      }

      data = {
        userId: sellerDoc.id,
        cargo: "marketplace",
        marketplaceId: mktSnapshot.docs[0].id,
      };
    } else if (sellerDoc.cargo === "seller") {
      data = {
        userId: sellerDoc.id,
        cargo: "seller",
      };
    } else {
      return res.status(400).json({ message: "Cargo inválido." });
    }

    // Busca as transações conforme o cargo do usuário
    const dados = await Payment.getByUserRoleTransacoes(data);

    // const dados = await Cliente.getClientById(id);
    if (dados?.cliente?.id) {
      const sellerDados =
        await Cliente.buscarRelacionamentoCompletoPorClienteId(
          dados?.cliente?.id
        );
      const puxarSaldo = await consultarSaldoSeller(
        sellerDados?.clienteMarketplace?.marketplaceId,
        sellerDados?.seller?.id_seller
      );
      const saldo = puxarSaldo?.items;

      if (saldo) {
        // 4. Busca documento atual do cliente no Firestore
        const clienteDocRef = db.collection("clientes").doc(dados.cliente.id);
        const clienteDoc = await clienteDocRef.get();

        if (!clienteDoc.exists) {
          // Cliente não encontrado, pode retornar erro ou criar, conforme regra do seu sistema
          return res.status(404).json({ error: "Cliente não encontrado." });
        }

        const clienteAtual = clienteDoc.data();

        // 5. Prepara objeto para atualização somente se necessário
        const camposParaAtualizar = {};

        // Função auxiliar para comparar e preparar atualização
        function verificarCampo(nomeCampo, valorNovo) {
          if (
            valorNovo !== undefined &&
            (clienteAtual[nomeCampo] === undefined ||
              clienteAtual[nomeCampo] !== valorNovo)
          ) {
            camposParaAtualizar[nomeCampo] = valorNovo;
          }
        }

        verificarCampo("current_balance", saldo.current_balance);
        verificarCampo(
          "current_blocked_balance",
          saldo.current_blocked_balance
        );
        verificarCampo("account_balance", saldo.account_balance);

        // 6. Atualiza apenas se houver campos para atualizar
        if (Object.keys(camposParaAtualizar).length > 0) {
          await clienteDocRef.update(camposParaAtualizar);
          console.log("Campos atualizados:", camposParaAtualizar);
        } else {
          console.log("Nenhuma atualização necessária.");
        }
      } else {
        // Se não vier saldo, zera ou remove os campos (conforme sua regra)
        const clienteDocRef = db.collection("clientes").doc(dados.cliente.id);
        await clienteDocRef.update({
          current_balance: null,
          current_blocked_balance: null,
          account_balance: null,
        });
      }
    }
    return res.status(201).json({ dados: dados });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  authRegister,
  authLogin,
  buscarDadosSellerGeral,
  buscarPorId,
  updateSeller,
  destroySellerByMarketplace,
  destroySellerByMarketPlaceUserMKT,
  listSellerByMarketplace,
  destroySellerByMarketplace,
  deletarPorId,
  listarMarketPlace,
  updateMarketplace,
  criarSeller,
  listarSellers,
  buscarPorIdSeller,
  registerSellerToMarktplace,
  updateSettingsBranch,
  updateSettings,
};
