// Éléments
const enveloppe = document.getElementById('enveloppe');
const enveloppeContainer = document.getElementById('enveloppe-container');
const lettreContainer = document.getElementById('lettre-container');
const lettreImg = document.getElementById('lettre-img');
const btnOui = document.getElementById('oui');
const btnNon = document.getElementById('non');
const texteChoix = document.getElementById('texte-choix');

// Audio
const chanson = document.getElementById('chanson');
const sonChoix = document.getElementById('son-choix');

// GIF
const gifOui = 'images/excited.gif';
const gifNon = 'images/fnaf.gif';

// 1. Clic sur l'enveloppe → chanson démarre + lettre s'affiche
enveloppe.addEventListener('click', () => {
  // On lance la chanson (le clic = interaction utilisateur, donc autorisé par le navigateur)
  chanson.play();

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
  chanson.pause();
  // Joue le son une fois
  sonChoix.currentTime = 0;
  sonChoix.play();

  // Remplace la lettre par le GIF en grand
  lettreImg.src = gifOui;
  lettreImg.classList.add('gif-actif');

  // Affiche le texte avec le lien
  texteChoix.innerHTML =
    'Merci d\'avoir dit oui ! 🎉 <a href="https://ton-lien.com" target="_blank">Clique ici</a>';
  texteChoix.classList.add('visible');
});

// 3. Clic sur "non"
btnNon.addEventListener('click', () => {
  chanson.pause();
  sonChoix.currentTime = 0;
  sonChoix.play();

  lettreImg.src = gifNon;
  lettreImg.classList.add('gif-actif');

  texteChoix.innerHTML =
    'Trop drôle 😂 <a href="https://ton-lien.com" target="_blank">Clique ici</a>';
  texteChoix.classList.add('visible');
});