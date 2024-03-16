// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });
 const {Activity, Repository} = require("../scripts/clases.js");

 describe("Pruebas de class Repository", () => {
  let pruebaRepository

  beforeEach(() => {
    pruebaRepository = new Repository();
});

  it("Repository debe ser una clase", () => {
    expect(typeof Repository).toBe("function");
  });

  it("Activity debe ser una clase", () => {
    expect(typeof Activity).toBe("function");
  });

  it("Cada repositorio debe ser una instancia de Repository", () => {
     expect(pruebaRepository instanceof Repository).toBeTruthy();
    });

  it("Debería agregar una actividad al Repositorio", () => {
    pruebaRepository.createActivity("Bailar","Aprender nuevos estilos de danza","UrlImagen");
    expect((pruebaRepository.getAllActivities()).length).toBe(1);
  });

  it("Debería eliminar un elemento por su Id", () => {
    pruebaRepository.createActivity("Bailar","Aprender nuevos estilos de danza","UrlImagen");
    pruebaRepository.createActivity("Caminar","Caminar es saludable","UrlImagen");
    pruebaRepository.deleteActivity(2);
    expect((pruebaRepository.getAllActivities()).length).toBe(1);
  });

  it("Debería retornar la lista de actividades", () => {
    expect(pruebaRepository.getAllActivities()).toEqual([]);
    pruebaRepository.createActivity("Bailar","Aprender nuevos estilos de danza","UrlImagen");
    pruebaRepository.createActivity("Caminar","Caminar es saludable","UrlImagen");
    expect((pruebaRepository.getAllActivities()).length).toBe(2)
  });

 });

// [{id: 1, title:"Bailar", description:"Aprender nuevos estilos de danza", imgUrl:"UrlImagen"}, {id: 2, title:"Caminar", description:"Caminar es saludable", imgUrl:"UrlImagen"}]