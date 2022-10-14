/**
 * Reglas de nuestra clase
 * 1) Que debemos recibir 3 parametros cuando instaciemos esta
 * 2) Tendemos 3 estados
 *    * status 1 = create
 *    * status 2 = done
 *    * status 3 = delete
 * 3) Tendremos una function para poder renderizar nuestra tarea
 * 4) Tendremos una function para actualizar nuestra tarea
 * 5) Tendremos una function para eleminar nuestra tarea
 * CRUD => CREATE - READ - UPDATE - DELETE
/*class Persona {
    constructor(nombre) {
        this.nombre = nombre;
      }
    }
    
    const persona = new Persona("Pepe");
    
    console.log(persona.nombre); 
*/
//* Esta es la forma en la que instanciamos a la clase Task
//* const task = new Task("Tarea1", new Date(), 1);

class Task{
    constructor(id, name, date, status) {
        this._id = id;
        this._name = name;
        this._date = date;
        this._status = status;

    }

    static destroyRender(id) {
        const element = document.querySelector(`#task-${id}`);
        element.remove();
      }

      static updateRender(id,name){
        const element = document.querySelector(`#task-name-${id}`);
        element.textContent = name;
      }


    render() {
        return  ` <div id="task-${this._id}" class="item_task">
        <input type="checkbox">
        <h6 id="task-name-${this._id}">${this._name}</h6>
        <button onclick="edit(${this._id})">
            <img src="./img/edit.png" width="15" alt="" class="src">
        </button>
        <button onclick ="destroy(${this._id});">
            <img src="./img/delete.png" width="15" alt="" class="src">
        </button>
        </div> `;
    }

}