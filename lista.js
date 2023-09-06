const listadoTareas = document.querySelector(".listadoTareas"); // Selecciona el div con la clase "listadoTareas"
const tarea1 = document.querySelector(".tarea1"); // Selecciona el primer div con la clase "tarea1"
const input = document.querySelector("input"); // Selecciona el elemento input
const addBtn = document.querySelector(".btn-container"); // Selecciona el botón con la clase "btn-container"
const textoi = document.querySelector(".texto-inbox"); // Selecciona el elemento con la clase "texto-inbox"

const checkbox = document.querySelector(".checkbox"); // Selecciona el primer input checkbox con la clase "checkbox"
const btndelete = document.querySelector(".btndelete"); // Selecciona el primer botón con la clase "btndelete"

const btnandcheck = document.querySelector(".btnandcheck");
const textosection = document.querySelector(".textosection");

document.addEventListener('keydown', event => {
  // if(event.keyCode == 13){
  if(event.key === 'Enter'){
    addTarea();
  }

});
addBtn.addEventListener("click", addTarea);

function addTarea(){
  console.log("HASDNASDON")
  const text = input.value; // Obtiene el valor del input

  const div = document.createElement("div"); // Crea un nuevo elemento div
  div.classList.add("tarea1"); // Agrega la clase "tarea1" al nuevo div creado

  const p = document.createElement("p"); // Crea un nuevo elemento párrafo
  p.textContent = text; // Asigna el texto del input al párrafo
  p.classList.add("textoi"); // Agrega la clase "textoi" al párrafo
  div.appendChild(p); // Agrega el párrafo como hijo del div
  p.classList.add("textosection"); //agrega la calse al parrafo
 

  const divCheckbox = document.createElement("div"); // Crea un nuevo elemento div para el checkbox
  divCheckbox.classList.add('checkboxC'); // Agrega la clase "checkboxC" al div del checkbox
  divCheckbox.innerHTML = '<input type="checkbox" class="checkbox">'; // Crea un input checkbox y lo agrega al contenido del div
  div.appendChild(divCheckbox); // Agrega el div del checkbox como hijo del div de la tarea



  const btnDelete = document.createElement("button"); // Crea un nuevo elemento botón
  btnDelete.classList.add('btndelete'); // Agrega la clase "btndelete" al botón
  const spanDelete = document.createElement("span"); // Crea un nuevo elemento span
  spanDelete.classList.add('material-symbols-outlined'); // Agrega la clase "material-symbols-outlined" al span
  spanDelete.textContent = "delete"; // Agrega el texto "delete" al contenido del span
  btnDelete.appendChild(spanDelete); // Agrega el span como hijo del botón
  div.appendChild(btnDelete); // Agrega el botón como hijo del div de la tarea

  listadoTareas.appendChild(div); // Agrega el nuevo div (tarea) al listado de tareas

  input.value = ""; // Limpia el contenido del input

  console.log(p); // Muestra el párrafo en la consola
  console.log(div); // Muestra el div de la tarea en la consola



  // Agregar un event listener al checkbox recién creado
  const checkbox = div.querySelector(".checkbox");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      p.classList.add("tarea-text-tachado");
    } else {
      p.classList.remove("tarea-text-tachado");
    }
  });


  const btndelete = div.querySelector(".btndelete");
   btndelete.addEventListener("remove", ()=>{
    tarea1
   })




     // Agregar un event listener al botón de borrado
  btnDelete.addEventListener("click", () => {
    listadoTareas.removeChild(div);
  });

};




