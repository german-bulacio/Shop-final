const banCnt = {nombreEmp:"Essense",titulo:"las mejores fragancias",subtitulo:"el mejor regalo para mama"}
const banIms = ["./img/channel-n5.png","./img/labiales-rv.png","./img/sombras-pm.png"]

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










