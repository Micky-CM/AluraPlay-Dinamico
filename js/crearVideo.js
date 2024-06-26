import { conexionAPI } from "./conexionAPI.js"

const formulario = document.querySelector("[data-form]")

async function crearVideo(evento) {
  evento.preventDefault();
  const titulo = document.querySelector("[data-title]").value
  const url = document.querySelector("[data-url]").value
  const imagem = document.querySelector("[data-img]").value
  const descripcion = Math.floor(Math.random()*10).toString()

  try {
    await conexionAPI.enviarVideo(titulo, descripcion, url, imagem)
    window.location.href="../pages/envio-concluido.html"
  } catch(e) {
      alert(e)
  }
}

formulario,addEventListener("submit",evento=>crearVideo(evento))