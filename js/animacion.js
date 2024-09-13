function escribirAMaquina(elemento, texto, velocidad) {
  let i = 0;
  let txt = texto.split('');
  let elementoHTML = document.getElementById(elemento);

  function escribir() {
      if (i < txt.length) {
          elementoHTML.innerHTML += txt[i++];
          setTimeout(escribir, velocidad)
      }
  }
  escribir()
}
escribirAMaquina('miTexto', 'En muy poco tiempo podrás ser testigo y protagonista del movimiento que hará cumplir la voluntad del pueblo venezolano. Al régimen se le acabó el juego: esta vez, es DISTINTO. Ya Casi Venezuela.', 100);

function escribir() {
  if (i < txt.length) {
      elementoHTML.innerHTML += txt[i++];
      elementoHTML.style.color = 'blue';
      setTimeout(escribir, velocidad)
  } else {
      let cursor = document.createElement('span');
      cursor.textContent = '|';
      elementoHTML.appendChild(cursor);
      setInterval(() => {
          cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden'
      }, 500)
  }
}