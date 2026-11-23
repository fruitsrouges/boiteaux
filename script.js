// Éléments
const debutContainer = document.getElementById('debut-container');
const enveloppeContainer = document.getElementById('enveloppe-container');
const enveloppe = document.getElementById('enveloppe');
const lettreContainer = document.getElementById('lettre-container');
const lettreImg = document.getElementById('lettre-img');
const btnOui = document.getElementById('oui');
const btnNon = document.getElementById('non');
const texteChoix = document.getElementById('texte-choix');

// Audio
const chanson = document.getElementById('chanson');
const sonOui = document.getElementById('son-oui');
const sonNon = document.getElementById('son-non');
const sonPaper = document.getElementById('son-paper');
const sonHover = document.getElementById('son-hover');

// GIF
const gifOui = 'images/excited.gif';
const gifNon = 'images/fnaf.gif';

// Étape 1 → 2 : clic sur l'image de départ → affiche l'enveloppe
debutContainer.addEventListener('click', () => {
  chanson.play();

  setTimeout(() => {
    debutContainer.style.display = 'none';
    enveloppeContainer.style.display = 'flex';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        enveloppeContainer.classList.add('visible');
      });
    });
  }, 500);
});

// Étape 2 → 3 : clic sur l'enveloppe → chanson + lettre
enveloppe.addEventListener('click', () => {

  sonPaper.currentTime = 0;
  sonPaper.play();

  enveloppeContainer.classList.add('fading-out');

  setTimeout(() => {
    enveloppeContainer.style.display = 'none';
    lettreContainer.style.display = 'flex';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        lettreContainer.classList.add('visible');
      });
    });
  }, 800);
});

// 2. Clic sur "oui"
btnOui.addEventListener('click', () => {
  // Coupe la chanson
  // chanson.pause();
  // Joue le son une fois
  sonOui.currentTime = 0;
  sonOui.play();

  // Remplace la lettre par le GIF en grand
  lettreImg.src = gifOui;
  lettreImg.classList.add('gif-actif');

  document.querySelector('.text-button').style.display = 'none';

  // Affiche le texte avec le lien
  texteChoix.innerHTML =
    'Geumawooo,<a href="https://docs.google.com/forms/d/e/1FAIpQLSdefN1nr5uDG6pySmnKyHh6BZWXIFyhzscrEXJDGixlM5U6NQ/viewform?usp=dialog" target="_blank">clique ici!</a>';
  texteChoix.classList.add('visible');
});

// 3. Clic sur "non"
btnNon.addEventListener('click', () => {
  // chanson.pause();
  sonNon.currentTime = 0;
  sonNon.play();

  lettreImg.src = gifNon;
  lettreImg.classList.add('gif-actif');

  document.querySelector('.text-button').style.display = 'none';

  texteChoix.innerHTML =
    'T\'as pas le choix,<a href="https://docs.google.com/forms/d/e/1FAIpQLSdefN1nr5uDG6pySmnKyHh6BZWXIFyhzscrEXJDGixlM5U6NQ/viewform?usp=dialog" target="_blank">clique!</a>';
  texteChoix.classList.add('visible');

});