let pointeur = document.querySelector('.pointeur');
let ridos = document.querySelectorAll('.rido');
let affichage = document.querySelector('.affichage-niveau');

let X = 0;

pointeur.addEventListener('mousedown', function (e) {
  X = e.clientX - pointeur.offsetLeft;

  document.addEventListener('mousemove', deplacement);
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', deplacement);
  });
});

function deplacement(e) {
  let x = e.clientX - X;

  x = Math.max(30, Math.min(x, 555));
  pointeur.style.left = x + "px";

  let niveau = Math.round((x - 30) / 50) * 10;
  niveau = Math.min(niveau, 100);

  affichage.textContent = niveau + "%";

  ridos.forEach(rido => {
    rido.style.height = niveau + "%";
  });
}
