/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dot = [".com", ".es"];

  let domain = '';
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let y = 0; y < dot.length; y++) {
          domain += '<p>' + pronoun[i] + adj[j] + noun[k] + dot[y] + '</p>';
        }
      }
    }
  }
  
  console.log(domain);
  document.querySelector("#dominio").innerHTML = domain;
};
