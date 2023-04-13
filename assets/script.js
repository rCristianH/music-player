let boton = document.querySelector(".play-button");
let audioEtiqueta = document.querySelector("audio");

boton.addEventListener("click", () => {
  audioEtiqueta.setAttribute("src", "./assets/as-it-was.mp3");
  audioEtiqueta.play();
  console.log(`Reproduciendo: ${audioEtiqueta.src}`);
});
