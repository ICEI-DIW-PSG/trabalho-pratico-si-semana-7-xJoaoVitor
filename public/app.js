const eventos = [
  {
    id: 1,
    titulo: "Santa Ceia do Senhor",
    data: "Todo primeiro domingo do mês.",
    descricaoCurta: "Seu lugar na mesa está reservado, venha ceiar conosco!",
    descricaoLonga: "A santa ceia é um momento de profunda comunhão e reflexão, onde relembramos o sacrifício de Jesus Cristo por nós. Participe conosco deste ato de fé e adoração. Todos são bem-vindos para celebrar a nova aliança no sangue de Cristo.",
    imagem: "img/santaceia.jpg",
    horario: "19:00",
    local: "Igreja Betesda"
  },
  {
    id: 2,
    titulo: "Batismo nas Águas",
    data: "15 de Novembro de 2025",
    descricaoCurta: "Celebre conosco este momento de pública confissão de fé e nova vida em Cristo.",
    descricaoLonga: "O batismo é um passo fundamental na jornada cristã, simbolizando a morte para o pecado e a ressurreição para uma nova vida em Jesus. Será um dia de grande festa e celebração. Se você deseja ser batizado, entre em contato com a liderança da igreja.",
    imagem: "img/batismo.jpg",
    horario: "09:00",
    local: "Sítio da Volta"
  }
];

//Função para montar os cards de evento na home-page.
function montarCardsEventos() {
    const container = document.getElementById('eventos-container');
    if (container) {
        eventos.forEach(evento => {
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-5';
            card.innerHTML = `
                <article class="card h-100 shadow-sm">
                    <img src="${evento.imagem}" class="card-img-top" alt="${evento.titulo}">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">${evento.titulo}</h3>
                        <p class="card-text"><strong>Data:</strong> ${evento.data}</p>
                        <p class="card-text">${evento.descricaoCurta}</p>
                        <a href="detalhe.html?id=${evento.id}" class="btn btn-veja-mais w-100 mt-auto">Veja Mais</a>
                    </div>
                </article>
            `;
            container.appendChild(card);
        });
    }
}

// Função para montar a página de detalhes.
function montarDetalhes() {

    const container = document.getElementById('detalhe-container');
    const params = new URLSearchParams(window.location.search);
    const eventoId = params.get('id');
    const evento = eventos.find(e => e.id === parseInt(eventoId));

    if (evento) {
        document.title = evento.titulo;

        container.innerHTML = `
            <div class="row g-5">
                <div class="col-lg-6">
                    <img src="${evento.imagem}" alt="${evento.titulo}" class="img-fluid rounded shadow-sm detalhe-img">
                </div>
                <div class="col-lg-6 d-flex flex-column">
                    <h2 class="detalhe-titulo mb-3">${evento.titulo}</h2>
                    <div class="detalhe-info">
                        <p><strong>Data:</strong> ${evento.data}</p>
                        <p><strong>Horário:</strong> ${evento.horario}</p>
                        <p><strong>Local:</strong> ${evento.local}</p>
                    </div>
                    <p class="mt-3">${evento.descricaoLonga}</p>
                    <div class="mt-auto">
                      <a href="index.html#eventos" class="btn btn-voltar">Voltar</a>
                    </div>
                </div>
            </div>
        `;
    } 
}


document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('detalhe-container')) {
        montarDetalhes();
    }
    if (document.getElementById('eventos-container')) {
        montarCardsEventos();
    }
});