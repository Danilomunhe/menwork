AOS.init();

const modal = document.querySelector(".modal-servicos");
const closeButton = document.querySelector(".close-button");
const buttons = document.querySelectorAll(".button-saiba-mais");
const sliderItemContainer = document.getElementById("containerNormal");
const sliderItemContainerAlternativo = document.getElementById(
  "containerAlternativo"
);
let sliderItems = document.querySelectorAll(".containerNormal");
let sliderItemsAlternativo = document.querySelectorAll(".item-alternativo");
let imagem = document.getElementById("imgModal");
let title = document.getElementById("titleModal");
let listaServicos = document.getElementById("modalContent");
let headerModal = document.querySelector(".modal-header-servicos");
let buttonModal = document.querySelector(".button-modal-footer");
let iconModal = document.querySelector(".icon-modal");

function abrirModal() {
  modal.style.display = "flex";
}
function closeModal() {
  modal.style.display = "none";
}
function encontrarServico(servico) {
  if (servicos.hasOwnProperty(servico)) {
    const servicoEncontrado = servicos[servico];
    console.log(servicoEncontrado);
    preencherModal(servicoEncontrado);
  } else {
    console.log("Serviço não encontrado");
  }
}
function preencherModal(servicoEncontrado) {
  listaServicos.innerHTML = "";
  headerModal.classList.remove("alternativo-modal");
  listaServicos.classList.remove("alternativo");
  title.classList.remove("branco");
  buttonModal.classList.remove("alternativo");
  iconModal.classList.remove("fundo-branco");

  let ulServicos = document.createElement("ul");
  ulServicos.classList.add("lista-de-servicos-modal");
  imagem.src = servicoEncontrado.icone;
  title.textContent = servicoEncontrado.titulo;
  for (
    let index = 0;
    index < servicoEncontrado.listaDeServicos.length;
    index++
  ) {
    let liServico = document.createElement("li");
    liServico.textContent = servicoEncontrado.listaDeServicos[index];
    ulServicos.appendChild(liServico);
  }
  if (servicoEncontrado.alternativo) {
    headerModal.classList.add("alternativo-modal");
    listaServicos.classList.add("alternativo");
    title.classList.add("branco");
    buttonModal.classList.add("alternativo");
    ulServicos.classList.add("branco");
    iconModal.classList.add("fundo-branco");
  }
  listaServicos.appendChild(ulServicos);
  abrirModal();
}
closeButton.addEventListener("click", closeModal);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const dataServicoValue = button.dataset.servico;

    if (dataServicoValue !== undefined) {
      console.log("Data Servico:", dataServicoValue);
      encontrarServico(dataServicoValue);
    } else {
      console.error("Data Servico attribute not found");
    }
  });
});
document
  .querySelector(".modal-servicos")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("modal-servicos")) {
      closeModal(); // Fecha o modal
    }
  });

const proximoItem = (slide) => {
  if (slide === 0) {
    const primeiroItem = sliderItems[0];
    sliderItemContainer.appendChild(primeiroItem);
    sliderItems = document.querySelectorAll(".containerNormal");
  } else {
    const primeiroItemAlternativo = sliderItemsAlternativo[0];
    sliderItemContainerAlternativo.appendChild(primeiroItemAlternativo);
    sliderItemsAlternativo = document.querySelectorAll(".item-alternativo");
  }
};

const itemAnterior = (slide) => {
  if (slide === 0) {
    const ultimoItem = sliderItems[sliderItems.length - 1];
    sliderItemContainer.prepend(ultimoItem);
    sliderItems = document.querySelectorAll(".containerNormal");
    console.log("Teste");
  } else {
    const ultimoItemAlternativo =
      sliderItemsAlternativo[sliderItemsAlternativo.length - 1];
    sliderItemContainerAlternativo.prepend(ultimoItemAlternativo);
    sliderItemsAlternativo = document.querySelectorAll(".item-alternativo");
  }
};

const servicos = {
  notebookGamer: {
    titulo: "Notebook Gamer",
    icone: "./assets/img/icon-controle.png",
    listaDeServicos: [
      "Formatação",
      "Formatação com backup",
      "Instalação de programas",
      "Troca de Teclado",
      "Troca de Bateria",
      "Troca Webcam",
      "Troca de Touchpad",
      "Troca de Tela",
      "Troca de carcaça",
      "Troca de conectores de energia",
      "Troca de Cooler",
      "Reparo de carcaça ",
      "Reparo de placa mãe ",
      "Limpeza interna ",
      "Upgrade de SSD ",
      "Upgrade de Memória Ram",
    ],
    alternativo: true,
  },
  desktopGamer: {
    titulo: "PC Gamer",
    icone: "./assets/img/icon-pc.png",
    listaDeServicos: [
      "Formatação.",
      "Backup ",
      "Formatação com backup",
      "Limpeza interna",
      "Montagem de Máquina Nova",
      "Upgrade de SSD",
      "Upgrade de Memória Ram",
      "Instalação de Programas",
      "Instalação de Placa de Vídeo",
      "Troca de Placa de Vídeo",
      "Instalação de Water cooler",
      "Troca de Water Cooler",
      "Instalação Fonte",
      "Troca de Fonte",
      "Troca de Processador",
      "Upgrade de Processador",
      "Troca de Placa mãe",
      "Upgrade de Placa mãe",
      "Troca de Cooler",
      "Instalação de Cooler",
      "Organização de cabeamento",
      "Sistema de ventilação eficiente",
      "Consultoria para escolha de peças",
    ],
    alternativo: true,
  },
  notebook: {
    titulo: "Notebook",
    icone: "./assets/img/icon-notebook.png",
    listaDeServicos: [
      "Formatação",
      "Formatação com backup",
      "Instalação de programas",
      "Troca de Teclado",
      "Troca de Bateria",
      "Troca Webcam",
      "Troca de Touchpad",
      "Troca de Tela",
      "Troca de carcaça",
      "Troca de conectores de energia",
      "Troca de Cooler",
      "Reparo de carcaça ",
      "Reparo de placa mãe ",
      "Limpeza interna ",
      "Upgrade de SSD ",
      "Upgrade de Memória Ram",
    ],
    alternativo: true,
  },
  pc: {
    titulo: "PC",
    icone: "./assets/img/icon-computador.png",
    listaDeServicos: [
      "Formatação.",
      "Backup ",
      "Formatação com backup",
      "Limpeza interna",
      "Montagem de Máquina Nova",
      "Upgrade de SSD",
      "Upgrade de Memória Ram",
      "Instalação de Programas",
      "Instalação de Placa de Vídeo",
      "Troca de Placa de Vídeo",
      "Instalação de Water cooler",
      "Troca de Water Cooler",
      "Instalação Fonte",
      "Troca de Fonte",
      "Troca de Processador",
      "Upgrade de Processador",
      "Troca de Placa mãe",
      "Upgrade de Placa mãe",
      "Troca de Cooler",
      "Instalação de Cooler",
      "Organização de cabeamento",
      "Sistema de ventilação eficiente",
      "Consultoria para escolha de peças",
    ],
    alternativo: true,
  },
  venda: {
    titulo: "Venda de Produtos",
    icone: "./assets/img/icon-compras.png",
    listaDeServicos: [
      "Water Cooler",
      "Cooler",
      "Fonte para Desktop",
      "Fonte para notebook (Carregador)",
      "Memória Ram",
      "SSD Sata",
      "SSD NVME",
      "SSD M.2 Sata",
      "Cabos Premium para USB-C/USB",
      "Cabos Premium para iPhone",
      "Cabos Original para iPhone",
      "Carregador Premium para iPhone",
      "Carregador Original para iPhone",
      "Cabo HDMI",
      "Cabo Display port",
      "Placa de rede PCI",
      "HUB USB-C",
      "Memória Ram para Notebook",
      "Memória Ram para Desktop",
      "Case para HD Externo",
      "Pendrive",
      "Película para iPhone",
      "Fonte para Macbook",
    ],
    alternativo: true,
  },
  iphone: {
    titulo: "Iphone",
    icone: "./assets/img/icon-iphone.png",
    listaDeServicos: [
      "Troca de tela",
      "Troca de bateria",
      "Troca de câmera frontal",
      "Troca de câmera traseira",
      "Troca de vidro traseiro",
      "Troca de carcaça",
      "Troca do conector de carga",
      "Troca dos alto falantes",
      "Troca do botão home",
      "Troca do vibra",
      "Troca dos botões",
      "Reparo de face id",
      "Reparo de placa",
      "Reparo de wifi",
      "Reparo de microfone",
      "Atualização de IOS",
      "Transferência de dados de um iPhone para o outro",
      "Entre outros",
    ],
    alternativo: false,
  },
  ipad: {
    titulo: "iPad",
    icone: "./assets/img/icon-ipad.png",
    listaDeServicos: [
      "Troca de tela",
      "Troca de bateria",
      "Troca de câmera frontal",
      "Troca de câmera traseira",
      "Troca de vidro traseiro",
      "Troca de carcaça",
      "Troca do conector de carga",
      "Troca dos alto falantes",
      "Troca do botão home",
      "Troca do vibra",
      "Troca dos botões",
      "Reparo de face id",
      "Reparo de placa",
      "Reparo de wifi",
      "Reparo de microfone",
      "Atualização de IOS",
      "Transferência de dados de um iPhone para o outro",
      "Entre outros",
    ],
    alternativo: false,
  },
  mackbook: {
    titulo: "MacBook (Air, Pro)",
    icone: "./assets/img/icone-macbook.png",
    listaDeServicos: [
      "Troca de tela",
      "Troca de teclado",
      "Troca de teclas",
      "Troca de bateria",
      "Troca de trackpad",
      "Troca de cooler",
      "Troca de wifi",
      "Troca de alto falante",
      "Troca de microfone",
      "Troca de carcaça",
      "Troca da pasta térmica",
      "Troca da Webcam",
      "Polimento de tela",
      "Reparo do cabo flex da tela",
      "Reparo de placa",
      "Reparo de cabo do MagSafe",
      "Formatação",
      "Instalação de sistema",
      "Instalação de programas",
      "Backup dos arquivos",
      "Manutenção preventiva",
      "Limpeza Interna",
      "Upgrade de HD",
      "Upgrade de SSD",
      "Upgrade de memória RAM",
      "Entre outros",
    ],
    alternativo: false,
  },
  imac: {
    titulo: "iMac,iMac Pro",
    icone: "./assets/img/icon-imac.png",
    listaDeServicos: [
      "Troca de tela",
      "Troca de cooler",
      "Troca de wi-fi",
      "Troca de alto falante",
      "Troca de microfone",
      "Troca de carcaça",
      "Troca de fonte",
      "Troca da Webcam",
      "Troca da pasta térmica",
      "Reparo do cabo flex da tela",
      "Reparo de placa",
      "Formatação",
      "Instalação de sistema",
      "Instalação de programas",
      "Backup dos arquivos",
      "Manutenção preventiva",
      "Limpeza Interna",
      "Upgrade de HD",
      "Upgrade de SSD",
      "Upgrade de memória RAM",
      "Upgrade placa de vídeo",
      "Entre outros",
    ],
    alternativo: false,
  },
  macmini: {
    titulo: "Mac (Mini, Pro)",
    icone: "./assets/img/icon-miniApple.png",
    listaDeServicos: [
      "Troca de cooler",
      "Troca de wi-fi",
      "Troca de alto falante",
      "Troca de microfone",
      "Troca de carcaça",
      "Troca de fonte",
      "Troca da pasta térmica",
      "Reparo de placa",
      "Formatação",
      "Instalação de sistema",
      "Instalação de programas",
      "Backup dos arquivos",
      "Manutenção preventiva",
      "Limpeza Interna",
      "Upgrade de HD",
      "Upgrade de SSD",
      "Upgrade de memória RAM",
      "Upgrade placa de vídeo",
      "Entre outros",
    ],
    alternativo: false,
  },
};
