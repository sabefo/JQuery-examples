// 1- Utiliza los selectores básicos ( element, id y class) para seleccionar 
// dos elementos de la pagina. Utiliza la función .css() para alterar una 
// propiedad de dos elementos distintos.

//1
jQuery(".scrobblesource").css("background-color", "red");
//2
jQuery(".module-body").css("width", "500px");

// 2- Utiliza los selectores básicos y el método .find() para seleccionar una 
// imagen en la página y cambiarla por otra imagen que te guste.

//1
jQuery("ul.visible-menu").find("a").css("color","red");

// 3- Use para recorrer el DOM traverse methods para seleccionar todas las 
// instancias de un elemento que se repita en la página y utiliza el método 
// animate() para modificarlos.

//1
jQuery("ul").find("li").animate({left: '250px'});

// 4- Busca un elemento al cual tengas que llegar utilizando al menos tres 
// selectors / traverse methods para localizarlo. Después utiliza el método
//.on() para hacer un bind a un evento especifico que modifique el elemento.

jQuery("div").find(".leftColWrapper").find("#taste").find("#tasteButtons").on("click", function(){
    alert("The paragraph was clicked.");
});