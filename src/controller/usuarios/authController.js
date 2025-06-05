const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Cliente = require('../../models/clientes/cliente');

const JWT_SECRET = process.env.JWT_SECRET || 'segredo-super-seguro';

const authRegister = async (req, res) => {
    try {
        const { nome, email, password, confirmpassword, marketplaceId, status } = req.body;
        // Verifica se password e confirmpassword são iguais
        if (password !== confirmpassword) {
            return res.status(400).json({ error: 'As senhas não conferem.' });
        }
        // Verifica se já existe usuário
        const userExists = await Cliente.buscarPorEmail(email);
        if (userExists) {
            return res.status(409).json({ error: 'E-mail já cadastrado.' });
        }
        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);
        const cargo = "marketplace";
        // Cria usuário
        const id = await Cliente.criar({ nome, email, password: hashedPassword, cargo, marketplaceId, status });
        // Gera token JWT com o id do usuário
        const token = jwt.sign(
            { id: id.id, email: id.email, cargo: id.cargo },
            JWT_SECRET,
            { expiresIn: '1d' }
        );
        return res.status(201).json({ id, token, message: 'Usuário cadastrado com sucesso.' });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message });
    }
};

const authLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Busca usuário
        const user = await Cliente.buscarPorEmail(email);
        if (!user) {
            return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
        }
        // Verifica senha
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
        }
        // Gera token JWT
        const token = jwt.sign(
            { id: user.id, email: user.email, cargo: user.cargo },
            JWT_SECRET,
            { expiresIn: '1d' }
        );
        return res.json({ token, user: { id: user.id, nome: user.nome, email: user.email, cargo: user.cargo, marketplaceId: user.marketplaceId } });
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
        return res.status(201).json({ dados: dados, message: "Cliente deletado com sucesso" });
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
}

const destroySellerByMarketplace = async (req, res) => {
    try {
        const { id, id_cliente } = req.params;
        const dados = await Cliente.deletarSellerByMarketplace(id, id_cliente);

        return res.status(201).json({ message: "Seller deletado com sucesso", dados: dados });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const registerSellerToMarktplace = async (req, res) => {
    try {
        try {
            const { nome, email, password, confirmpassword, marketplaceId, id_seller } = req.body;
            // Verifica se password e confirmpassword são iguais
            if (password !== confirmpassword) {
                return res.status(400).json({ error: 'As senhas não conferem.' });
            }
            // Verifica se já existe usuário
            const userExists = await Cliente.buscarPorEmailSeller(email);
            if (userExists) {
                return res.status(409).json({ error: 'E-mail já cadastrado a outro Seller.' });
            }
            // Hash da senha
            const hashedPassword = await bcrypt.hash(password, 10);
            // Cria usuário
            const id = await Cliente.criarSeller({ id_seller, nome, email, password: hashedPassword, marketplaceId });

            return res.status(201).json({ id, message: 'Usuário cadastrado com sucesso.', data: id });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: error.message });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateMarketplace = async (req, res) => {
    try {
        const { idCliente } = req.params; // pega o id da URL, ex: /clientes/:id
        const { nome, email, password, status, marketplaceId } = req.body;
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
                marketplaceId
            };
        } else {
            dados = {
                nome,
                email,
                status,
                marketplaceId
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
        const { nome, email, password, marketplaceId } = req.body;
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
                password: hashedPassword,
                marketplaceId
            };
        } else {
            dados = {
                nome,
                email,
                marketplaceId
            };
        }
        // Monta os dados, incluindo marketplace apenas se existir


        const resultado = await Cliente.atualizarSeller(idSeller, dados); // chama a função de atualizar

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
}

// sellers ================
const criarSeller = async (req, res) => {
    try {
        const { id_seller, nome, email, password, confirmpassword, marketplaceId } = req.body;

        if (password !== confirmpassword) {
            throw new Error('As senhas não conferem.');
        }
        const userExists = await Cliente.buscarPorEmailSeller(email);
        if (userExists) {
            return res.status(409).json({ error: 'E-mail já cadastrado para outro seller.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // Chama a função do model para criar o seller
        const novoSeller = await Cliente.criarSeller({
            id_seller,
            nome,
            email,
            password: hashedPassword,
            marketplaceId
        });

        // 4. Geração do token JWT
        const tokenPayload = {
            id: novoSeller.id,
            nome,
            email,
            marketplaceId,
            cargo: 'seller'
        };
        const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '7d' });

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

const listarSellers = async (req, res) => {
    try {
        const dados = await Cliente.listarTodosSellersComCliente();
        return res.status(201).json({ dados: dados });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { authRegister, authLogin, buscarPorId, updateSeller, destroySellerByMarketplace, listSellerByMarketplace, destroySellerByMarketplace, deletarPorId, listarMarketPlace, updateMarketplace, criarSeller, listarSellers, buscarPorIdSeller, registerSellerToMarktplace };
