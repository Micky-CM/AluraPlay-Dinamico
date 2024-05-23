async function listarVideos() {
  const conexion = await fetch("http://localhost:3001/videos")
  const conexionConvertida = await conexion.json()

  //console.log(conexionConvertida)
  return conexionConvertida
}

async function enviarVideo(titulo, descripcion, url, imagem) {
  const conexion = await fetch("http://localhost:3001/videos", {
    method: "POST",
    headers:{"Content-type": "application/json"},
    body: JSON.stringify({
      titulo: titulo,
      descripcion: `${descripcion} mil visualizaciones`,
      url: url,
      imagem: imagem
    })
  })
  const conexionConvertida = await conexion.json()

  if(!conexion.ok) {
    throw new Error("Ha ocurrido un error al enviar el video")
  }
  return conexionConvertida
}

async function buscarVideos(palabraClave){
  const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
  const conexionConvertida = conexion.json();
  return conexionConvertida
}

export const conexionAPI={
  listarVideos,enviarVideo,buscarVideos
}

