let banCnt = {nombreEmp:"Essense",titulo:"las mejores fragancias",subtitulo:"el mejor regalo para mama"}
let banIms=["./public/multimedia/imagenes/channel-n5.png","./public/multimedia/imagenes/labiales-rv.png","./public/multimedia/imagenes/sombras-pm.png"]

let indiceImagen = 0; 
function cambiarImagen(){
    let bannerImg = document.getElementById("imgBner")
    bannerImg.src = banIms[indiceImagen];

if(indiceImagen < 2){
   indiceImagen++;
}else{
   indiceImagen = 0;
}
}

let banTexto = document.getElementById("textoBner")

banTexto.innerHTML = `<h1>${banCnt.nombreEmp}</h1>
<h2> ${banCnt.titulo}</h2>
<p>${banCnt.subtitulo}</p>`;




window.addEventListener('load',function(){
    setInterval(cambiarImagen,2000)
})










