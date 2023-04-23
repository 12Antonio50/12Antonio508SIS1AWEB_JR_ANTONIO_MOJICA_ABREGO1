let charactersData = [];

function getCharacters(done) {
    const results = fetch("https://node-vercel-api-tau.vercel.app/");
    results
        .then(response => response.json())
        .then(data => {
            charactersData = data;
            done(data)
        });
}

getCharacters(data => {
    console.log(data);

    if (data && data.length > 0) {
        data.forEach(personaje => {
            const article = document.createElement("article");
            article.id = `character-${personaje.id}`;
            article.innerHTML = `
            <div class="image-container">
                <h1 class="title">${personaje.title}</h1>
                <span class="director">Director: ${personaje.director}</span>
                <img class="image" src="${personaje.image}" alt="imagen">
                <br>
                <span class="rating">Rating: ${personaje.rating}</span>
                <br>
                <span class="year">Año: ${personaje.year}</span>
            </div>
            <button class="edit-button">Editar</button>
            <button class="delete-button">Eliminar</button>
            `;
            const main = document.querySelector("main");
            main.appendChild(article);
            const deleteButton = article.querySelector(".delete-button");
            deleteButton.addEventListener("click", () => {
                article.remove();
            });
            const editButton = article.querySelector(".edit-button");
            editButton.addEventListener("click", () => {
                editCharacter(personaje.id);
            });
        });
    } else {
        console.log("No se encontraron resultados");
    }
});

function editCharacter(id) {
    // Obtener el personaje con el ID especificado
    const character = charactersData.find(character => character.id === id);

    // Mostrar el formulario de edición con los campos actuales del personaje
    document.querySelector('#edit-title').value = character.title;
    document.querySelector('#edit-director').value = character.director;
    document.querySelector('#edit-image').value = character.image;
    document.querySelector('#edit-rating').value = character.rating;
    document.querySelector('#edit-year').value = character.year;
    document.querySelector('#edit-character-form').style.display = 'block';

    // Cuando se envíe el formulario, recopilar los valores de los campos
    document.querySelector('#edit-character-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const updatedCharacter = {
            title: document.querySelector('#edit-title').value,
            director: document.querySelector('#edit-director').value,
            image: document.querySelector('#edit-image').value,
            rating: document.querySelector('#edit-rating').value,
            year: document.querySelector('#edit-year').value
        };

        // Actualizar la información del personaje directamente en el DOM
        const characterElement = document.querySelector(`#character-${id}`);
        characterElement.querySelector('.title').textContent = updatedCharacter.title;
        characterElement.querySelector('.director').textContent = updatedCharacter.director;
        characterElement.querySelector('.image').src = updatedCharacter.image;
        characterElement.querySelector('.rating').textContent = updatedCharacter.rating;
        characterElement.querySelector('.year').textContent = updatedCharacter.year;

        // Ocultar el formulario de edición
        document.querySelector('#edit-character-form').style.display = 'none';
    });
}
const form = document.querySelector('#new-character-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const director = document.querySelector('#director').value;
    const image = document.querySelector('#image').value;
    const rating = document.querySelector('#rating').value;
    const year = document.querySelector('#year').value;

    const article = document.createElement('article');
    article.innerHTML = `
    <div class="image-container">
        <h1>${title}</h1>
        <span>Director: ${director}</span>
        <img src="${image}" alt="imagen">
        <br>
        <span>Rating: ${rating}</span>
        <br>
        <span>Año: ${year}</span>
    </div>

    <button class="delete-button">Eliminar</button>`;

    const deleteButton = article.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        article.remove();
    });

    const main = document.querySelector('main');
    main.appendChild(article);

    form.reset();
});
