const myImage = document.getElementById("Img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/img/imagem-clique.png") {
    myImage.setAttribute("src", "assets/img/tbm.png");
  } else {
    myImage.setAttribute("src", "assets/img/imagem-clique.png");
  }
};

