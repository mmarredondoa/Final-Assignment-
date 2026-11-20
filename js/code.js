let container = document.querySelector("#lista-obras");

fetch("js/obras.json")
  .then(response => response.json())
  .then(obras => {
    obras.forEach(obra => {
      container.innerHTML += `
        <div class="col-lg-4">
          <div class="card bg-black text-light border-secondary h-100">
            <img src="${obra.imagen}" class="card-img-top img-fluid" alt="${obra.titulo}">
            <div class="card-body p-4">
              <p class="text-uppercase text-danger fw-bold mb-2">${obra.numero} · ${obra.tecnica}</p>
              <h2 class="h4 card-title fw-bold mb-2">${obra.titulo}</h2>
              <p class="text-secondary mb-3">${obra.artista}</p>
              <p class="card-text">${obra.descripcion}</p>
            </div>
          </div>
        </div>
      `;
    });
  });

const formulario = document.querySelector("#miFormulario");
const mensajeGracias = document.querySelector("#mensajeGracias");

formulario.addEventListener("submit", function (event) {

  event.preventDefault();

  if (!formulario.checkValidity()) {
    event.stopPropagation();
    formulario.classList.add("was-validated");
    return;
  }

  formulario.classList.add("was-validated");

  formulario.classList.add("d-none");
  mensajeGracias.classList.remove("d-none");

});
