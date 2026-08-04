const WHATSAPP = "5561993580318";

const produtos = [
  {
    id: "powerbank",
    nome: "Power Bank Magnético 10.000mAh",
    categoria: "Energia",
    preco: "R$ 89,99",
    imagem: "imagens/powerbank.png",
    descricao: "Carregamento sem fio, magnético, compacto e portátil.",
    mensagem: "Olá! Tenho interesse no Power Bank Magnético 10.000mAh da 7Torres. Gostaria de saber se está disponível."
  },
  {
    id: "fone-m28",
    nome: "Fone Gamer M28 Headset",
    categoria: "Áudio",
    preco: "R$ 59,99",
    imagem: "imagens/fone-m28.png",
    descricao: "Modo gamer, baixa latência, som Hi-Fi e microfone HD.",
    mensagem: "Olá! Tenho interesse no Fone Gamer M28 Headset da 7Torres. Gostaria de saber se está disponível."
  },
  {
    id: "inflador",
    nome: "Inflador de Pneus Portátil",
    categoria: "Automotivo",
    preco: "R$ 164,99",
    imagem: "imagens/inflador.png",
    descricao: "Display digital, bateria recarregável e luz LED integrada.",
    mensagem: "Olá! Tenho interesse no Inflador de Pneus Portátil da 7Torres. Gostaria de saber se está disponível."
  },
  {
    id: "fone-bluetooth",
    nome: "Fone de Ouvido Bluetooth",
    categoria: "Áudio",
    preco: "R$ 169,99",
    imagem: "imagens/fone-bluetooth.png",
    descricao: "Bluetooth 5.0, até 10h de bateria, som de alta qualidade e microfone.",
    mensagem: "Olá! Tenho interesse no Fone de Ouvido Bluetooth da 7Torres. Gostaria de saber se está disponível."
  }
];

const grid = document.getElementById("productGrid");
const empty = document.getElementById("empty");
const search = document.getElementById("search");
let categoriaAtual = "Todos";

function render() {
  const termo = search.value.trim().toLowerCase();
  const filtrados = produtos.filter(p => {
    const categoriaOK = categoriaAtual === "Todos" || p.categoria === categoriaAtual;
    const texto = `${p.nome} ${p.categoria} ${p.descricao}`.toLowerCase();
    return categoriaOK && texto.includes(termo);
  });

  grid.innerHTML = filtrados.map(p => `
    <article class="product">
      <div class="product-img">
        <img src="${p.imagem}" alt="${p.nome}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="tag">${p.categoria}</span>
        <h3>${p.nome}</h3>
        <p class="desc">${p.descricao}</p>
        <div class="price">${p.preco}</div>
        <a class="buy" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(p.mensagem)}" target="_blank" rel="noopener">
          Comprar pelo WhatsApp
        </a>
      </div>
    </article>
  `).join("");

  empty.hidden = filtrados.length > 0;
}

document.querySelectorAll(".category").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    categoriaAtual = btn.dataset.category;
    render();
  });
});

search.addEventListener("input", render);
render();
