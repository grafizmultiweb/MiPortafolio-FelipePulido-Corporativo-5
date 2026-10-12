document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu-items');
  
    toggle.addEventListener('click', function () {
      menu.classList.toggle('show');
      toggle.classList.toggle('active');
      toggle.classList.toggle('open');
      menu.classList.toggle('menu-open');
    });
  
    document.querySelectorAll('.menu-dropdown > a').forEach(item => {
      item.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = this.parentElement;
          parent.classList.toggle('active');
        }
      });
    });
  });
/* =========================================
   SISTEMA NEXO - VOLVER AL INICIO
   ========================================= */

const nexoRegreso = document.getElementById("nexoRegreso");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        nexoRegreso.classList.add("nexo-visible");

    } else {

        nexoRegreso.classList.remove("nexo-visible");

    }

});
nexoRegreso.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/////////////////////////////////////



/* =========================================
   PRELOADER
========================================= */


(function () {

    "use strict";

    function gmxUltraHidePreloader() {

        const gmxUltraPreloader =
            document.getElementById("gmx-ultra-preloader");


        if (!gmxUltraPreloader) {
            return;
        }
        setTimeout(function () {

            gmxUltraPreloader.classList.add(
                "gmx-ultra-preloader--hidden"
            );
            setTimeout(function () {

                gmxUltraPreloader.style.display = "none";

            }, 900);


        }, 700);

    }
    window.addEventListener(
        "load",
        gmxUltraHidePreloader
    );
})();


/////////////////////////////////////

////////////////  INTROFONDO  ///////////////////

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
let numStars = 80;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Crear estrellas
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

// Animar estrellas
function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.fill();

    star.y += star.speed;

    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animateStars);
}

animateStars();

// Movimiento constante de imágenes con JS
const images = document.querySelectorAll(".image-box img");

images.forEach((img, i) => {
  let direction = 1;
  let position = 0;

  setInterval(() => {
    position += direction * 0.3;

    if (position > 10 || position < -10) {
      direction *= -1;
    }

    img.style.transform = `translateY(${position}px) scale(1.02)`;
  }, 40);
});

// Parallax scroll para las capas
document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Escalar capas de fondo para efecto parallax
  document.querySelector('.layer-moon').style.transform = `translate(-50%, -50%) scale(${1 + scrollY * 0.0001})`;
  document.querySelector('.layer-mountain1').style.transform = `translate(-50%, -50%) scale(${1 + scrollY * 0.0003})`;
  document.querySelector('.layer-mountain2').style.transform = `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})`;
  document.querySelector('.layer-foreground').style.transform = `translate(-50%, -50%) scale(${1 + scrollY * 0.0007})`;
  document.querySelector('.stars').style.transform = `translateY(${scrollY * 0.1}px)`;

  // Fade-in al aparecer en pantalla
  document.querySelectorAll('.fade-in').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Movimiento dinámico de planet-wrapper con el mouse
document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const offsetX = (e.clientX / innerWidth - 0.5) * 50;
  const offsetY = (e.clientY / innerHeight - 0.5) * 50;

  document.querySelectorAll('.planet-wrapper').forEach((wrapper, index) => {
    const multiplier = (index + 1) * 0.1;
    wrapper.style.transform = `translate(${offsetX * multiplier}px, ${offsetY * multiplier}px)`;
  });
});

////////////////  CONTENIDO  ///////////////////

function accionMenuInteractivo(elemento) {
  document.querySelectorAll('.opcion-modular-unica').forEach(op => {
    op.classList.remove('activo-resaltado-creativo', 'animacion-ultra-fantastica');
    void op.offsetWidth; // Reiniciar animación
  });

  elemento.classList.add('activo-resaltado-creativo', 'animacion-ultra-fantastica');

  console.log("Clic en: ", elemento.querySelector(".texto-descriptivo-modular").innerText);
}


////////////////  SOBRE MI   ///////////////////

console.log("Animación de imagen activada por CSS.");

////////////////  conocimientos   ///////////////////

const conocimientosTrack = document.querySelector('.conocimientos-track');

function pausarConocimientos() {
  conocimientosTrack.style.animationPlayState = 'paused';
}

function reanudarConocimientos() {
  conocimientosTrack.style.animationPlayState = 'running';
}



///////////////// Sobremi ///////////

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const btn = card.querySelector('.card__btn');

    // Al hacer click en el botón, alterna la clase expanded
    btn.addEventListener('click', () => toggleCard(card, btn));

    // Permitir abrir/cerrar con Enter o Space cuando la tarjeta tiene foco
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(card, btn);
      }
    });
  });

  function toggleCard(card, btn) {
    const isExpanded = card.classList.toggle('expanded');
    btn.setAttribute('aria-expanded', String(isExpanded));
    // Cambiar texto del botón (opcional)
    btn.textContent = isExpanded ? 'Ver menos' : 'Ver más';
  }
});


/////////////// CARRUSEL - POST ///////////

const track = document.querySelector('.uxv-carousel-track');
const slides = document.querySelectorAll('.uxv-carousel-track img');
const prevBtn = document.querySelector('.uxv-prev');
const nextBtn = document.querySelector('.uxv-next');

let index = 0;
let autoSlide;

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

startAutoSlide();