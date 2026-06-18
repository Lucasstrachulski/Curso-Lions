// Produtos disponíveis
const produtos = [
    {
        id: 1,
        nome: "Vestido Floral Verão",
        categoria: "feminino",
        tamanho: "M",
        preco: 89.90,
        condicao: "Como novo",
        cor: "Rosa com flores",
        marca: "Zara",
        imagem: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400"
    },
    {
        id: 2,
        nome: "Camisa Social Masculina",
        categoria: "masculino",
        tamanho: "G",
        preco: 65.00,
        condicao: "Bom estado",
        cor: "Azul marinho",
        marca: "Renner",
        imagem: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400"
    },
    {
        id: 3,
        nome: "Bolsa de Couro",
        categoria: "acessorios",
        tamanho: "Único",
        preco: 120.00,
        condicao: "Como novo",
        cor: "Marrom",
        marca: "Arezzo",
        imagem: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400"
    },
    {
        id: 4,
        nome: "Tênis Esportivo",
        categoria: "calcados",
        tamanho: "38",
        preco: 150.00,
        condicao: "Bom estado",
        cor: "Branco",
        marca: "Nike",
        imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    {
        id: 5,
        nome: "Calça Jeans Skinny",
        categoria: "feminino",
        tamanho: "P",
        preco: 75.00,
        condicao: "Novo (etiqueta)",
        cor: "Azul escuro",
        marca: "Levis",
        imagem: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400"
    },
    {
        id: 6,
        nome: "Camiseta Estampada",
        categoria: "masculino",
        tamanho: "M",
        preco: 35.00,
        condicao: "Estado de uso",
        cor: "Preto",
        marca: "Hering",
        imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
    },
    {
        id: 7,
        nome: "Boneca de Pano",
        categoria: "infantil",
        tamanho: "Único",
        preco: 25.00,
        condicao: "Bom estado",
        cor: "Multicolorido",
        marca: "Artesanal",
        imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400"
    },
    {
        id: 8,
        nome: "Jaqueta Jeans",
        categoria: "feminino",
        tamanho: "G",
        preco: 110.00,
        condicao: "Como novo",
        cor: "Azul médio",
        marca: "C&A",
        imagem: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"
    },
    {
        id: 9,
        nome: "Relógio Feminino",
        categoria: "acessorios",
        tamanho: "Único",
        preco: 85.00,
        condicao: "Novo (caixa)",
        cor: "Dourado",
        marca: "Orient",
        imagem: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400"
    },
    {
        id: 10,
        nome: "Sandália Rasteira",
        categoria: "calcados",
        tamanho: "37",
        preco: 55.00,
        condicao: "Bom estado",
        cor: "Vermelho",
        marca: "Arezzo",
        imagem: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400"
    },
    {
        id: 11,
        nome: "Short Jeans Infantil",
        categoria: "infantil",
        tamanho: "P",
        preco: 30.00,
        condicao: "Bom estado",
        cor: "Azul claro",
        marca: "Zara Baby",
        imagem: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400"
    },
    {
        id: 12,
        nome: "Blusa de Lã",
        categoria: "masculino",
        tamanho: "GG",
        preco: 95.00,
        condicao: "Como novo",
        cor: "Cinza",
        marca: "Farm",
        imagem: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a68?w=400"
    }
];

// Formatar preço
function formatarPreco(preco) {
    return preco.toFixed(2).replace('.', ',');
}

// Renderizar produtos
function renderizarProdutos(produtosFiltrados = null) {
    const container = document.getElementById('lista-produtos');
    const semProdutos = document.getElementById('sem-produtos');
    const lista = produtosFiltrados || produtos;

    if (lista.length === 0) {
        container.innerHTML = '';
        semProdutos.style.display = 'block';
        return;
    }

    semProdutos.style.display = 'none';

    container.innerHTML = lista.map(produto => `
        <div class="produto-card">
            <div class="produto-imagem">
                <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.parentElement.innerHTML='<span>Sem imagem</span>'">
            </div>
            <div class="produto-info">
                <div class="produto-categoria">${produto.categoria}</div>
                <h3 class="produto-nome">${produto.nome}</h3>
                <div class="produto-tags">
                    <span class="produto-tag">${produto.tamanho}</span>
                    <span class="produto-tag">${produto.condicao}</span>
                    ${produto.marca ? `<span class="produto-tag">${produto.marca}</span>` : ''}
                </div>
                <div class="produto-preco">R$ ${formatarPreco(produto.preco)}</div>
                <a href="https://wa.me/5511999999999?text=Olá! Tenho interesse no produto: ${encodeURIComponent(produto.nome)} - R$ ${formatarPreco(produto.preco)}" 
                   target="_blank" 
                   class="btn-whatsapp">
                    Tenho interesse
                </a>
            </div>
        </div>
    `).join('');
}

// Filtrar produtos
function filtrarProdutos() {
    const busca = document.getElementById('busca').value.toLowerCase();
    const categoria = document.getElementById('filtro-categoria').value;
    const tamanho = document.getElementById('filtro-tamanho').value;

    const produtosFiltrados = produtos.filter(produto => {
        const matchBusca = produto.nome.toLowerCase().includes(busca) ||
                          produto.marca.toLowerCase().includes(busca) ||
                          produto.cor.toLowerCase().includes(busca);
        const matchCategoria = categoria === 'todos' || produto.categoria === categoria;
        const matchTamanho = tamanho === 'todos' || produto.tamanho === tamanho;

        return matchBusca && matchCategoria && matchTamanho;
    });

    renderizarProdutos(produtosFiltrados);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Filtros
    document.getElementById('filtro-categoria').addEventListener('change', filtrarProdutos);
    document.getElementById('filtro-tamanho').addEventListener('change', filtrarProdutos);
    document.getElementById('busca').addEventListener('input', filtrarProdutos);

    // Menu mobile
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('active');
    });

    // Smooth scroll para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                document.querySelector('.nav').classList.remove('active');
            }
        });
    });

    // Renderizar produtos iniciais
    renderizarProdutos();
});
