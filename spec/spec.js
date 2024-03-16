// class ToDoList {
//     constructor(){
//         this.list = []
//     };
  
//     getList(){
//         return this.list;
//     };
  
//     addItem(item){
//         this.list.push(item);
//     };
  
//     deleteLastItem(){
//         this.list.pop();
//         return this.list;
//     };
//   };
const ToDoList = require("../src/prueba.index.js");

  describe("ToDoList pruebas", () => {
    let lista
      beforeEach(() => {
          lista = new ToDoList();
      });
  
      it("Debe ser una clase", () => {
          expect(typeof ToDoList).toBe("function");
      });
  
      it("Cada lista debe ser una instancia de ToDoList", () => {
          expect(lista instanceof ToDoList).toBeTruthy();
      });
  
      it("Debería agregar un elemento a la lista", () => {
          lista.addItem("Tarea 1");
          expect(lista.getList()).toEqual(["Tarea 1"]);
      });
  
      it("Debería eliminar el último elemento de la lista", () => {
          lista.addItem("Tarea 1");
          lista.addItem("Tarea 2");
          lista.deleteLastItem();
          expect(lista.getList()).toEqual(["Tarea 1"]);
      });
  
      it("Debería retornar la lista de elementos", () => {
          expect(lista.getList()).toEqual([]);
          lista.addItem("Tarea 1");
          lista.addItem("Tarea 2");
          expect(lista.getList()).toEqual(["Tarea 1", "Tarea 2"]);
      });
  });
  