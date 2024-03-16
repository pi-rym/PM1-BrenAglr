
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(title, description, imgUrl) {
    const id = ++this.id;
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }

  deleteActivity(id) {
    const filtrado = this.activities.filter((act) => act.id !== id);
    return (this.activities = filtrado);
  }
}

const repository = new Repository();

const createCard = (activity) => {
    const {id, title, description, imgUrl} = activity
    
    const contenedorCard =  document.createElement("div")
    contenedorCard.classList.add("card");
    
    contenedorCard.id = id;

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "x"
    
    const titulo = document.createElement("h3");
    titulo.innerHTML = title;
    
    const descripcion = document.createElement("p")
    descripcion.innerHTML = description;
    
    const imagen = document.createElement("img")
    imagen.src = imgUrl;

    closeButton.addEventListener("click", () => {
        repository.deleteActivity(id); // Llamar a la función deleteActivity del repositorio
        convertCard();
    });
    
    contenedorCard.appendChild(closeButton)
    contenedorCard.appendChild(titulo);
    contenedorCard.appendChild(imagen);
    contenedorCard.appendChild(descripcion);
    
    
    return contenedorCard;
};

const convertCard = () => {
    const containerActivities = document.getElementById("cards");
    containerActivities.innerHTML = "";
    
    const activities = repository.getAllActivities();
    const htmlActivities = activities.map((activity) => createCard(activity));
    
    htmlActivities.forEach(activity => {
        containerActivities.appendChild(activity);
    });
};

const handlerButton = (event) => {
    event.preventDefault();

    const inputTitulo = document.getElementById("title");
    const inputDescripcion = document.getElementById("description");
    const inputImgUrl = document.getElementById("imgUrl");
    
    const valueTitulo = inputTitulo.value;
    const valueDescripcion = inputDescripcion.value;
    const valueImg = inputImgUrl.value;
    
    if(!valueTitulo || !valueDescripcion || !valueImg) {
        return alert("Por favor, completar todos los campos");
    }
    else 
        repository.createActivity(valueTitulo, valueDescripcion, valueImg);
        convertCard();

    inputTitulo.value = "";
    inputDescripcion.value = "";
    inputImgUrl.value = "";
};
const buttonSubmit = document.getElementById("buttonSubmit");
buttonSubmit.addEventListener("click", handlerButton);
