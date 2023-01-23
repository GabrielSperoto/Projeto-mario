const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const link_video = video.src;

function alternamodal(){
    modal.classList.toggle("aberto");
}

const botao_trailer = document.querySelector(".botao-trailer");
botao_trailer.addEventListener("click", () => {
    alternamodal();
    video.setAttribute("src",link_video);
})

const fechar_modal = document.querySelector(".fechar-modal")
fechar_modal.addEventListener("click", () => {
    alternamodal();
    video.setAttribute("src","");
})



