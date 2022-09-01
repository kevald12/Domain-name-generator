/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  let domainName = [];

  let pronombre = ["El", "La", "Los"];

  let adjetivo = ["gran (des)", "pequeño (s)", "rapido (dos)", "lento (s)"];

  let sustantivo = ["personas", "pintor", "niños", "tortuga", "raton", "libro"];

  let dominio = [".com", ".net"];

  for (let p = 0; p < pronombre.length; p++) {
    for (let a = 0; a < adjetivo.length; a++) {
      for (let s = 0; s < sustantivo.length; s++) {
        for (let l = 0; l < dominio.length; l++)
          domainName.push(
            " " +
              pronombre[p] +
              " " +
              adjetivo[a] +
              " " +
              sustantivo[s] +
              " " +
              " " +
              dominio[l]
          );
      }
    }
  }
  console.log(domainName);
  document.getElementById("domain.results").innerHTML = domainName;
};
