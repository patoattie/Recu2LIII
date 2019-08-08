var ESexo;
(function (ESexo) {
    ESexo["Mujer"] = "Mujer";
    ESexo["Hombre"] = "Hombre";
})(ESexo || (ESexo = {}));
var ETipo;
(function (ETipo) {
    ETipo["Diputado"] = "Diputado";
    ETipo["Senador"] = "Senador";
})(ETipo || (ETipo = {}));
var Personaje = /** @class */ (function () {
    function Personaje(id, nombre, apellido, email, edad, sexo, tipo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
        this.sexo = ESexo[sexo];
        this.tipo = ETipo[tipo];
    }
    Personaje.getProximoId = function () {
        var proximoID = Number(localStorage.getItem("ID"));
        if (isNaN(proximoID) || proximoID == 0) {
            proximoID = 20000;
        }
        return proximoID;
    };
    Personaje.setProximoId = function () {
        var proximoID = this.getProximoId();
        proximoID++;
        localStorage.setItem("ID", String(proximoID));
    };
    Personaje.prototype.getId = function () {
        return this.id;
    };
    Personaje.prototype.setId = function (id) {
        this.id = id;
    };
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personaje.prototype.getApellido = function () {
        return this.apellido;
    };
    Personaje.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Personaje.prototype.getEmail = function () {
        return this.email;
    };
    Personaje.prototype.setEmail = function (email) {
        this.email = email;
    };
    Personaje.prototype.getEdad = function () {
        return this.edad;
    };
    Personaje.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Personaje.prototype.getSexo = function () {
        return this.sexo;
    };
    Personaje.prototype.getSexoStr = function () {
        return this.sexo;
    };
    Personaje.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Personaje.prototype.setSexoStr = function (sexo) {
        this.setSexo(ESexo[sexo]);
    };
    Personaje.prototype.getTipo = function () {
        return this.tipo;
    };
    Personaje.prototype.getTipoStr = function () {
        return this.tipo;
    };
    Personaje.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Personaje.prototype.setTipoStr = function (tipo) {
        this.setTipo(ETipo[tipo]);
    };
    Personaje.prototype.getDinamico = function (atributo) {
        var valor;
        switch (atributo) {
            case "id":
                valor = this.getId();
                break;
            case "nombre":
                valor = this.getNombre();
                break;
            case "apellido":
                valor = this.getApellido();
                break;
            case "email":
                valor = this.getEmail();
                break;
            case "edad":
                valor = this.getEdad();
                break;
            case "sexo":
                valor = this.getSexo();
                break;
            case "tipo":
                valor = this.getTipo();
                break;
            default:
                valor = null;
                break;
        }
        return valor;
    };
    Personaje.prototype.setDinamico = function (atributo, valor) {
        switch (atributo) {
            case "id":
                this.setId(valor);
                break;
            case "nombre":
                this.setNombre(valor);
                break;
            case "apellido":
                this.setApellido(valor);
                break;
            case "email":
                this.setEmail(valor);
                break;
            case "edad":
                this.setEdad(valor);
                break;
            case "sexo":
                this.setSexo(valor);
                break;
            case "tipo":
                this.setTipo(valor);
                break;
        }
    };
    Personaje.prototype.toString = function () {
        var texto = "";
        texto += "ID: " + this.getId() + "\n";
        texto += "NOMBRE: " + this.getNombre() + "\n";
        texto += "APELLIDO: " + this.getApellido() + "\n";
        texto += "E-MAIL: " + this.getEmail() + "\n";
        texto += "EDAD: " + this.getEdad() + "\n";
        texto += "SEXO: " + this.getSexoStr() + "\n";
        texto += "TIPO: " + this.getTipoStr();
        return texto;
    };
    Personaje.prototype.getAtributos = function () {
        return ["id", "nombre", "apellido", "email", "edad", "sexo", "tipo"];
    };
    return Personaje;
}());
//npm i @types/jquery
//import $ from "jquery";
window.onload = function () {
    App.asignarManejadores();
};
//$("document").ready(App.asignarManejadores);
var App = /** @class */ (function () {
    function App() {
    }
    //Al dispararse el evento load cuando se termina de cargar la página web, 
    //se instancian los manejadores del evento click de los tres botones del menú.
    App.asignarManejadores = function () {
        /*$("#btnGetPersonajes").on("click", App.traerPersonajes);
        $("#btnAltaPersonaje").on("click", App.altaPersonaje);
        $("#btnEditarPersonaje").on("click", App.editarPersonaje);*/
        //Si el elemento está deshabilitado (tiene el atributo aria-disabled) entonces bloqueo el evento click
        $("#btnGetPersonajes").on("click", function (event) {
            if (event.target.getAttribute("aria-disabled")) {
                event.preventDefault();
            }
            else {
                App.traerPersonajes();
            }
        });
        $("#btnAltaPersonaje").on("click", function (event) {
            if (event.target.getAttribute("aria-disabled")) {
                event.preventDefault();
            }
            else {
                App.altaPersonaje();
            }
        });
        $("#btnEditarPersonaje").on("click", function (event) {
            if (event.target.getAttribute("aria-disabled")) {
                event.preventDefault();
            }
            else {
                App.editarPersonaje();
            }
        });
    };
    //Llama a la función traerPersonajes del localStorage, luego con los datos devueltos se crean en el DOM la tabla y el formulario de edición.
    App.traerPersonajes = function () {
        App.habilitarMenu($("#btnGetPersonajes"));
        App.activarMenu($("#btnGetPersonajes"));
        //$("#info").html("");
        $("#info").empty();
        var personajes = App.cargarArrayPersonajes();
        App.crearFiltros(personajes);
        App.crearTabla(personajes);
        App.crearFormulario(personajes);
        //$("#btnGetPersonajes").css("pointer-events", "auto");
        //$("#btnAltaPersonaje").css("pointer-events", "auto");
        App.habilitarMenu($("#btnAltaPersonaje"));
        App.deshabilitarMenu($("#btnEditarPersonaje"));
    };
    App.activarMenu = function (elemento) {
        elemento.parent().addClass("active");
    };
    App.desactivarMenu = function (elemento) {
        elemento.parent().removeClass("active");
    };
    App.habilitarMenu = function (elemento) {
        elemento.removeClass("disabled");
        elemento.parent().removeClass("disabled");
        elemento.css("cursor", "");
        elemento.removeAttr("aria-disabled");
    };
    //https://css-tricks.com/how-to-disable-links/
    App.deshabilitarMenu = function (elemento) {
        elemento.addClass("disabled");
        elemento.parent().addClass("disabled");
        elemento.css("cursor", "not-allowed");
        elemento.attr("aria-disabled", "true");
    };
    App.cargarArrayPersonajes = function () {
        var personajes = [];
        var storage = JSON.parse(localStorage.getItem("personajes"));
        if (storage == null || storage[0] == undefined) //Si el servidor no trae nada creo la estructura vacía.
         {
            personajes[0] = new Personaje();
        }
        else {
            for (var i = 0; i < storage.length; i++) {
                personajes[i] = new Personaje(storage[i]["id"], storage[i]["nombre"], storage[i]["apellido"], storage[i]["email"], storage[i]["edad"], storage[i]["sexo"], storage[i]["tipo"]);
            }
        }
        return personajes;
    };
    App.cargarPersonajeSeleccionado = function () {
        var storage = JSON.parse(localStorage.getItem("personajeSeleccionado"));
        var personajeSeleccionado = new Personaje(storage["id"], storage["nombre"], storage["apellido"], storage["email"], storage["edad"], storage["sexo"], storage["tipo"]);
        return personajeSeleccionado;
    };
    //Oculta la tabla de personajes, y muestra el formulario invocando la función pertinente
    //sin parámetro. Lo invoca la opción de Alta del menú
    App.altaPersonaje = function () {
        var personajes = App.cargarArrayPersonajes();
        //App.activarMenu($("#btnAltaPersonaje"));
        //$("#btnAltaPersonaje").css("pointer-events", "none");
        //$("#btnEditarPersonaje").css("pointer-events", "none");
        App.deshabilitarMenu($("#btnAltaPersonaje"));
        App.deshabilitarMenu($("#btnEditarPersonaje"));
        App.desactivarMenu($("#btnGetPersonajes"));
        $("#tablaPersonajes").css("display", "none");
        $("#divFiltrosPersonajes").css("display", "none");
        $("#formularioPersonajes").css("display", "initial");
        App.mostrarFormulario(personajes);
    };
    //Oculta la tabla de personajes, y muestra el formulario invocando la función pertinente
    //pasándole por parámetro la personaje que se quiere editar. Lo invoca la opción de Editar del menú
    App.editarPersonaje = function () {
        var personajes = App.cargarArrayPersonajes();
        //App.activarMenu($("#btnEditarPersonaje"));
        //$("#btnAltaPersonaje").css("pointer-events", "none");
        //$("#btnEditarPersonaje").css("pointer-events", "none");
        App.deshabilitarMenu($("#btnAltaPersonaje"));
        App.deshabilitarMenu($("#btnEditarPersonaje"));
        App.desactivarMenu($("#btnGetPersonajes"));
        $("#tablaPersonajes").css("display", "none");
        $("#divFiltrosPersonajes").css("display", "none");
        $("#formularioPersonajes").css("display", "initial");
        App.mostrarFormulario(personajes, App.cargarPersonajeSeleccionado());
    };
    App.crearFiltros = function (personajes) {
        var div = $("#info");
        div.append("<div id=divFiltrosPersonajes>");
        var divFiltroPersonajes = $("#divFiltrosPersonajes");
        //Titulo Filtro Tipo
        divFiltroPersonajes.append("<div id=divFilaFiltros1>");
        var divFilaFiltros1 = $("#divFilaFiltros1");
        divFilaFiltros1.addClass("row bg-danger");
        divFilaFiltros1.append("<h5 id=TituloFiltros>");
        $("#TituloFiltros").addClass("col-sm-12 text-center");
        $("#TituloFiltros").text("Filtros");
        divFiltroPersonajes.append("<div id=divFilaFiltros2>");
        var divFilaFiltros2 = $("#divFilaFiltros2");
        divFilaFiltros2.addClass("row bg-danger");
        //Filtro de Tipo
        divFilaFiltros2.append("<div id=divFiltroTipo>");
        var divFiltroTipo = $("#divFiltroTipo");
        divFiltroTipo.addClass("col-sm-4");
        divFiltroTipo.append("<label id=labelFiltroTipo>");
        var labelFiltroTipo = $("#labelFiltroTipo");
        labelFiltroTipo.attr("for", "filtroTipo");
        labelFiltroTipo.text("Filtrar por");
        divFiltroTipo.append("<select id=filtroTipo>");
        var filtroTipo = $("#filtroTipo");
        filtroTipo.addClass("form-control-inline col-sm-4");
        filtroTipo.append("<option id=opcionTodos>");
        $("#opcionTodos").text("Todos");
        for (var unSexo in ESexo) {
            if (isNaN(Number(unSexo))) //Para que no traiga los índices
             {
                filtroTipo.append("<option id=opcion" + unSexo + ">");
                $("#opcion" + unSexo).text(unSexo);
            }
        }
        //Promedio de Edad
        divFilaFiltros2.append("<div id=divPromedioEdad>");
        var divPromedioEdad = $("#divPromedioEdad");
        divPromedioEdad.addClass("col-sm-4");
        divPromedioEdad.append("<label id=labelPromedioEdad>");
        var labelPromedioEdad = $("#labelPromedioEdad");
        labelPromedioEdad.attr("for", "promedioEdad");
        labelPromedioEdad.text("Promedio de Edad");
        divPromedioEdad.append("<input id=promedioEdad>");
        var promedioEdad = $("#promedioEdad");
        promedioEdad.attr("type", "text");
        //promedioEdad.addClass("form-control-inline");
        promedioEdad.prop("readonly", true);
        promedioEdad.append("<option id=opcionTodos>");
        //Gender Mix
        divFilaFiltros2.append("<div id=divGenderMix>");
        var divGenderMix = $("#divGenderMix");
        divGenderMix.addClass("col-sm-4");
        divGenderMix.append("<label id=labelGenderMix>");
        var labelGenderMix = $("#labelGenderMix");
        labelGenderMix.attr("for", "genderMix");
        labelGenderMix.text("Gender Mix");
        divGenderMix.append("<input id=genderMix>");
        var genderMix = $("#genderMix");
        genderMix.attr("type", "text");
        //genderMix.addClass("form-control-inline");
        genderMix.prop("readonly", true);
        genderMix.append("<option id=opcionTodos>");
        //Titulo Filtro Campos
        divFiltroPersonajes.append("<div id=divFilaCampos1>");
        var divFilaCampos1 = $("#divFilaCampos1");
        divFilaCampos1.addClass("row bg-warning");
        divFilaCampos1.append("<h5 id=TituloCampos>");
        $("#TituloCampos").addClass("col-sm-12 text-center");
        $("#TituloCampos").text("Campos mostrados (tildar los campos a mostrar)");
        divFiltroPersonajes.append("<div id=divFilaCampos2>");
        var divFilaCampos2 = $("#divFilaCampos2");
        divFilaCampos2.addClass("row bg-warning");
        //Filtro de Campos
        personajes[0].getAtributos().forEach(function (value) {
            divFilaCampos2.append("<div id=divCampo" + value + ">");
            var divCampo = $("#divCampo" + value);
            divCampo.addClass("col-sm-1");
            divCampo.append("<input id=campo" + value + ">");
            var campo = $("#campo" + value);
            campo.attr("type", "checkbox");
            campo.attr("value", value);
            campo.prop("checked", true);
            divCampo.append("<label id=etiquetaCampo" + value + ">");
            var etiquetaCampo = $("#etiquetaCampo" + value);
            etiquetaCampo.attr("for", value);
            etiquetaCampo.text(value);
        });
    };
    //Crea la tabla de personajes en el div info
    App.crearTabla = function (personajes) {
        var puedeCrearDetalle = true; //Si no tengo elementos desde el servidor cambia a false.
        var div = $("#info");
        div.append("<div id=divTablaPersonajes>");
        //div.append("<table>");
        $("#divTablaPersonajes").append("<table id=tablaPersonajes>");
        //let tablaPersonajes:JQuery<HTMLElement> = $("#info").children("table");
        var tablaPersonajes = $("#tablaPersonajes");
        //tablaPersonajes.attr("id", "tablaPersonajes");
        //$("#tablaPersonajes").attr("border", "1px");
        $("#tablaPersonajes").addClass("tablaPersonajes");
        $("#tablaPersonajes").addClass("table");
        //$("#tablaPersonajes").addClass("table-responsive");
        $("#tablaPersonajes").addClass("table-striped");
        $("#tablaPersonajes").addClass("table-bordered");
        $("#tablaPersonajes").addClass("table-hover");
        //$("#tablaPersonajes").css("border-collapse", "collapse");
        if (personajes[0].getId() == null) //Si el servidor no trae nada creo la estructura vacía.
         {
            puedeCrearDetalle = false;
        }
        App.crearCabecera(personajes, $("#tablaPersonajes"));
        if (puedeCrearDetalle) {
            App.crearDetalle(tablaPersonajes, personajes);
        }
    };
    //Crea el formulario de edición de personajes en el div info.
    //El atributo id lo crea como solo lectura, ya que el servidor en el alta lo deduce,
    //y en la modificación no se altera su valor.
    App.crearFormulario = function (personajes) {
        var div = $("#info");
        //div.append("<form id=formularioPersonajes>");
        div.append("<div id=infoForm>");
        $("#infoForm").addClass("container");
        $("#infoForm").append("<form id=formularioPersonajes>");
        var formulario = $("#formularioPersonajes");
        //formulario.attr("action", "#");
        formulario.css("display", "none");
        formulario.on("submit", function (event) {
            event.preventDefault();
            if ($("#btnAgregar").css("display") !== "none") {
                App.opcionAgregarPersonaje();
            }
            else if ($("#btnModificar").css("display") !== "none") {
                App.opcionModificarPersonaje();
            }
        });
        //for(let atributo in personajes[0].getAtributos())
        personajes[0].getAtributos().forEach(function (value) {
            switch (value) {
                case "sexo":
                    formulario.append("<fieldset id=grupoSexo>");
                    //grupo.append("<div id=grupoSexo>");
                    var grupoSexo = $("#grupoSexo");
                    grupoSexo.addClass("form-group");
                    grupoSexo.append("<div id=grupoSexo2>");
                    var grupoSexo2 = $("#grupoSexo2");
                    grupoSexo2.addClass("row");
                    //grupoSexo.append("<legend id=leyendaSexo>");
                    //grupoSexo.append("<h5 id=leyendaSexo>");
                    grupoSexo2.append("<legend id=leyendaSexo>");
                    var leyendaSexo = $("#leyendaSexo");
                    leyendaSexo.addClass("col-form-label col-sm-2 pt-0");
                    leyendaSexo.text("Sexo");
                    grupoSexo2.append("<div id=grupoSexo3>");
                    var grupoSexo3 = $("#grupoSexo3");
                    grupoSexo3.addClass("col-sm-10");
                    grupoSexo.addClass("grupoInterno");
                    for (var unSexo in ESexo) {
                        if (isNaN(Number(unSexo))) //Para que no traiga los índices
                         {
                            grupoSexo3.append("<div id=grupoSexo" + unSexo + ">");
                            var grupoSexo4 = $("#grupoSexo" + unSexo);
                            grupoSexo4.addClass("form-check");
                            grupoSexo4.append("<input id=opt" + unSexo + ">");
                            var optButton = $("#opt" + unSexo);
                            grupoSexo4.append("<label id=etiqueta" + unSexo + ">");
                            var etiquetaSexo = $("#etiqueta" + unSexo);
                            etiquetaSexo.attr("for", "opt" + unSexo);
                            etiquetaSexo.text(unSexo);
                            //etiquetaSexo.addClass("form-check");
                            etiquetaSexo.addClass("form-check-label");
                            //etiquetaSexo.append("<input id=opt" + unSexo + ">");
                            //let optButton:JQuery<HTMLElement> = $("#opt" + unSexo);
                            optButton.attr("type", "radio");
                            optButton.attr("name", "sexo");
                            optButton.attr("value", unSexo);
                            optButton.addClass("form-check-input");
                            //optButton.text(" " + unSexo);
                            //grupoSexo.append("<br>");
                        }
                    }
                    break;
                case "tipo":
                    formulario.append("<fieldset id=grupoTipo>");
                    //grupo.append("<div id=grupoTipo>");
                    var grupoTipo = $("#grupoTipo");
                    grupoTipo.addClass("form-group");
                    grupoTipo.append("<div id=grupoTipo2>");
                    var grupoTipo2 = $("#grupoTipo2");
                    grupoTipo2.addClass("row");
                    //grupoTipo.append("<legend id=leyendaTipo>");
                    //grupoTipo.append("<h5 id=leyendaTipo>");
                    grupoTipo2.append("<legend id=leyendaTipo>");
                    var leyendaTipo = $("#leyendaTipo");
                    leyendaTipo.addClass("col-form-label col-sm-2 pt-0");
                    leyendaTipo.text("Tipo");
                    grupoTipo2.append("<div id=grupoTipo3>");
                    var grupoTipo3 = $("#grupoTipo3");
                    grupoTipo3.addClass("col-sm-10");
                    grupoTipo.addClass("grupoInterno");
                    for (var unTipo in ETipo) {
                        if (isNaN(Number(unTipo))) //Para que no traiga los índices
                         {
                            grupoTipo3.append("<div id=grupoTipo" + unTipo + ">");
                            var grupoTipo4 = $("#grupoTipo" + unTipo);
                            grupoTipo4.addClass("form-check");
                            grupoTipo4.append("<input id=opt" + unTipo + ">");
                            var optButton = $("#opt" + unTipo);
                            grupoTipo4.append("<label id=etiqueta" + unTipo + ">");
                            var etiquetaTipo = $("#etiqueta" + unTipo);
                            etiquetaTipo.attr("for", "opt" + unTipo);
                            etiquetaTipo.text(unTipo);
                            //etiquetaTipo.addClass("form-check");
                            etiquetaTipo.addClass("form-check-label");
                            //etiquetaTipo.append("<input id=opt" + unTipo + ">");
                            //let optButton:JQuery<HTMLElement> = $("#opt" + unTipo);
                            optButton.attr("type", "radio");
                            optButton.attr("name", "tipo");
                            optButton.attr("value", unTipo);
                            optButton.addClass("form-check-input");
                            //optButton.text(" " + unTipo);
                            //grupoTipo.append("<br>");
                        }
                    }
                    break;
                default:
                    //formulario.append("<fieldset id=grupo>");
                    formulario.append("<div id=grupo" + value + ">");
                    var grupo = $("#grupo" + value);
                    grupo.addClass("form-group row");
                    //grupo.append("<legend id=leyenda>");
                    //grupo.append("<h5 id=leyenda>");
                    //let leyenda:JQuery<HTMLElement> = $("#leyenda");
                    //leyenda.text("Personaje");
                    var atributoCapitalizado = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); //Primer letra en mayuscula, resto minuscula
                    grupo.append("<label id=etiqueta" + value + ">");
                    var etiqueta = $("#etiqueta" + value);
                    etiqueta.addClass("col-sm-2 col-form-label");
                    etiqueta.attr("for", "txt" + atributoCapitalizado);
                    etiqueta.text(atributoCapitalizado /* + ": "*/);
                    //grupo.append("<input id=txt" + atributoCapitalizado + ">");
                    //let cuadroTexto:JQuery<HTMLElement> = $("#txt" + atributoCapitalizado);
                    grupo.append("<div id=grupoInput" + value + ">");
                    var grupoInput = $("#grupoInput" + value);
                    grupoInput.addClass("col-sm-10");
                    grupoInput.append("<input id=txt" + atributoCapitalizado + ">");
                    var cuadroTexto = $("#txt" + atributoCapitalizado);
                    if (value === "email") {
                        cuadroTexto.attr("type", "email");
                    }
                    else {
                        cuadroTexto.attr("type", "text");
                    }
                    cuadroTexto.prop("required", true);
                    cuadroTexto.attr("placeholder", "Ingrese " + value);
                    cuadroTexto.addClass("form-control");
                    if (value === "id") {
                        cuadroTexto.attr("readonly", "");
                    }
                    break;
            }
        });
        /*formulario.append("<div id=grupoButton>");
        let grupoButton:JQuery<HTMLElement> = $("#grupoButton");
        grupoButton.addClass("form-group row");*/
        formulario.append("<button id=btnAgregar>");
        var btnAgregar = $("#btnAgregar");
        formulario.append("<button id=btnModificar>");
        var btnModificar = $("#btnModificar");
        formulario.append("<button id=btnBorrar>");
        var btnBorrar = $("#btnBorrar");
        formulario.append("<button id=btnCancelar>");
        var btnCancelar = $("#btnCancelar");
        btnAgregar.attr("type", "submit");
        btnAgregar.text("Agregar");
        btnAgregar.addClass("btn btn-primary");
        btnAgregar.css("margin", "2px");
        //btnAgregar.on("click", App.opcionAgregarPersonaje);
        btnModificar.attr("type", "submit");
        btnModificar.text("Modificar");
        btnModificar.addClass("btn btn-primary");
        btnModificar.css("margin", "2px");
        //btnModificar.on("click", App.opcionModificarPersonaje);
        btnBorrar.attr("type", "button");
        btnBorrar.text("Borrar");
        btnBorrar.addClass("btn btn-danger");
        btnBorrar.css("margin", "2px");
        btnBorrar.on("click", App.opcionBorrarPersonaje);
        btnCancelar.attr("type", "button");
        btnCancelar.text("Cancelar");
        btnCancelar.addClass("btn btn-secondary");
        btnCancelar.css("margin", "2px");
        btnCancelar.on("click", App.ocultarFormulario);
    };
    //Arma el formulario de edición de personajes.
    //Si no se le pasa parámetro asume que se trata de un alta, para ello muestra la opción
    //que invoca la función de alta en el servidor y los cuadros de texto de los parámetros
    //en blanco.
    //Si se invoca con un objeto, la función asume modificación o baja de la personaje que viene
    //por parámetro, mostrando los botones que invocan las funciones respectivas en el servidor,
    //y completa los cuadros de texto con los valores de cada atributo.
    App.mostrarFormulario = function (personajes, personajeSeleccionado) {
        if (personajeSeleccionado !== undefined) //Es distinto de undefined si vino un argumento en los parámetros formales de la función.
         {
            $("#btnAgregar").css("display", "none");
            $("#btnModificar").css("display", "initial");
            $("#btnBorrar").css("display", "initial");
        }
        else {
            $("#btnAgregar").css("display", "initial");
            $("#btnModificar").css("display", "none");
            $("#btnBorrar").css("display", "none");
        }
        //for(let atributo in personajes[0].getAtributos())
        personajes[0].getAtributos().forEach(function (value) {
            var atributoCapitalizado = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); //Primer letra en mayuscula, resto minuscula
            switch (value) {
                case "sexo":
                    if (personajeSeleccionado !== undefined) //Modificar o Borrar
                     {
                        for (var unSexo in ESexo) {
                            if (isNaN(Number(unSexo))) {
                                if (unSexo == personajeSeleccionado.getSexo()) {
                                    $("#opt" + unSexo).prop("checked", true);
                                }
                                else {
                                    $("#opt" + unSexo).prop("checked", false);
                                }
                            }
                        }
                    }
                    else //Agregar
                     {
                        for (var unSexo in ESexo) {
                            if (isNaN(Number(unSexo))) {
                                if (unSexo == ESexo.Mujer) {
                                    $("#opt" + unSexo).prop("checked", true);
                                }
                                else {
                                    $("#opt" + unSexo).prop("checked", false);
                                }
                            }
                        }
                    }
                    break;
                case "tipo":
                    if (personajeSeleccionado !== undefined) //Modificar o Borrar
                     {
                        for (var unTipo in ETipo) {
                            if (isNaN(Number(unTipo))) {
                                if (unTipo == personajeSeleccionado.getTipo()) {
                                    $("#opt" + unTipo).prop("checked", true);
                                }
                                else {
                                    $("#opt" + unTipo).prop("checked", false);
                                }
                            }
                        }
                    }
                    else //Agregar
                     {
                        for (var unTipo in ETipo) {
                            if (isNaN(Number(unTipo))) {
                                if (unTipo == ETipo.Diputado) {
                                    $("#opt" + unTipo).prop("checked", true);
                                }
                                else {
                                    $("#opt" + unTipo).prop("checked", false);
                                }
                            }
                        }
                    }
                    break;
                default:
                    if (personajeSeleccionado !== undefined) {
                        $("#txt" + atributoCapitalizado).val(personajeSeleccionado.getDinamico(value));
                    }
                    else {
                        if (value === "id") {
                            $("#txt" + atributoCapitalizado).val(Personaje.getProximoId());
                        }
                        else {
                            $("#txt" + atributoCapitalizado).val("");
                        }
                    }
                    break;
            }
        });
    };
    //Oculta el formulario de edición y muestra la tabla de personajes.
    //Se blanquea cualquier fila que se haya previamente seleccionado.
    App.ocultarFormulario = function () {
        //$("#btnAltaPersonaje").css("pointer-events", "auto");
        App.habilitarMenu($("#btnAltaPersonaje"));
        //$("#btnEditarPersonaje").css("pointer-events", "none");
        App.deshabilitarMenu($("#btnEditarPersonaje"));
        App.blanquearFila();
        $("#tablaPersonajes").css("display", "table");
        $("#divFiltrosPersonajes").css("display", "block");
        $("#formularioPersonajes").css("display", "none");
        App.activarMenu($("#btnGetPersonajes"));
    };
    //Crea la fila de cabecera, con tantas columnas como atributos posea la personaje, en la tabla de personajes.
    App.crearCabecera = function (personajes, tablaPersonajes) {
        //tablaPersonajes.append("<tr id=filaCabecera>");
        tablaPersonajes.append("<thead id=thead1>");
        $("#thead1").append("<tr id=filaCabecera>");
        //tablaPersonajes.append("<div id=filaCabecera>");
        var fila = $("#filaCabecera");
        //fila.addClass("row");
        //for(let atributo in personajes[0].getAtributos())
        personajes[0].getAtributos().forEach(function (value) {
            //fila.append("<th>" + value);
            fila.append("<th id=ColumnaCabecera" + value + ">" + value);
            //fila.append("<div id=ColumnaCabecera" + value + ">" + value);
            //$("#ColumnaCabecera" + value).addClass("col-sm-2");
        });
    };
    //Crea tantas fila de detalle en la tabla de personajes como personajes haya cargadas.
    App.crearDetalle = function (tablaPersonajes, datos) {
        var filaDetalle;
        tablaPersonajes.append("<tbody id=tbody1>");
        var _loop_1 = function (i) {
            //tablaPersonajes.append("<tr id=filaDetalle" + i + ">");
            $("#tbody1").append("<tr id=filaDetalle" + datos[i].getId() + ">");
            //tablaPersonajes.append("<div id=filaDetalle" + i + ">");
            filaDetalle = $("#filaDetalle" + datos[i].getId());
            //filaDetalle.addClass("row");
            //let columna;
            filaDetalle.on("click", App.seleccionarFila);
            //for(let atributo in datos[i].getAtributos())
            datos[i].getAtributos().forEach(function (value) {
                //filaDetalle.append("<td>");
                //columna = filaDetalle.children("td");
                //columna.attr("class", value);
                filaDetalle.append("<td id=ColumnaDetalle" + value + datos[i].getId() + ">" + datos[i].getDinamico(value));
                //filaDetalle.append("<div id=ColumnaDetalle" + value + i + ">" + datos[i].getDinamico(value));
                //columna = filaDetalle.children("td");
                //$("#ColumnaDetalle" + value + i).attr("class", value);
                $("#ColumnaDetalle" + value + datos[i].getId()).addClass(value);
                //$("#ColumnaDetalle" + value + i).addClass("col-sm-2");
            });
        };
        for (var i = 0; i < datos.length; i++) {
            _loop_1(i);
        }
    };
    //Quita el atributo id de la fila seleccionada.
    App.blanquearFila = function () {
        $("#filaSeleccionada").removeClass("table-primary");
        $("#filaSeleccionada").removeAttr("id");
        localStorage.removeItem("personajeSeleccionado");
    };
    //Cuando el usuario hace click en una fila de detalle de la tabla de personajes,
    //la función le setea, previo a blanquear si hay otra fila antes seleccionada, 
    //el atributo id a la fila y carga la personaje en el array de personaje seleccionada.
    App.seleccionarFila = function () {
        var filaActual = $(this);
        //let personajeSeleccionado:Personaje = App.cargarPersonajeSeleccionado();
        var personajeSeleccionado = new Personaje();
        //$("#btnEditarPersonaje").removeAttr("disabled");
        //$("#btnEditarPersonaje").css("pointer-events", "auto");
        App.habilitarMenu($("#btnEditarPersonaje"));
        App.blanquearFila();
        filaActual.attr("id", "filaSeleccionada");
        filaActual.addClass("table-primary");
        //Recorro las columnas de la fila seleccionada, guardando un atributo por columna en personajeSeleccionado.
        filaActual.children().each(function () {
            //personajeSeleccionado[$(this).attr("class")] = $(this).text();
            personajeSeleccionado.setDinamico($(this).attr("class"), $(this).text());
        });
        localStorage.setItem("personajeSeleccionado", JSON.stringify(personajeSeleccionado));
    };
    //Llamador usado por el evento dla opción de Agregar del formulario
    App.opcionAgregarPersonaje = function () {
        var personajes = App.cargarArrayPersonajes();
        App.agregarPersonaje(personajes, App.personajeEditado(personajes));
    };
    //Llamador usado por el evento dla opción de Borrar del formulario
    App.opcionBorrarPersonaje = function () {
        var personajes = App.cargarArrayPersonajes();
        App.borrarPersonaje(personajes, App.cargarPersonajeSeleccionado());
    };
    //Llamador usado por el evento de la opción de Modificar del formulario
    App.opcionModificarPersonaje = function () {
        var personajes = App.cargarArrayPersonajes();
        App.modificarPersonaje(personajes, App.cargarPersonajeSeleccionado(), App.personajeEditado(personajes));
    };
    //Llama a la función altaPersonaje del servidor, pasándole el objeto que se quiere agregar por parámetro.
    App.agregarPersonaje = function (personajes, personaje) {
        var nuevoPersonaje = [];
        personaje.setId(Personaje.getProximoId());
        nuevoPersonaje.push(personaje);
        App.ocultarFormulario();
        App.crearDetalle($("#tablaPersonajes"), nuevoPersonaje);
        if (personajes[0].getId() == null) {
            personajes[0] = personaje;
        }
        else {
            personajes.push(personaje);
        }
        localStorage.setItem("personajes", JSON.stringify(personajes));
        Personaje.setProximoId();
    };
    //Llama a la función bajaPersonaje del servidor, pasándole el objeto que se quiere eliminar por parámetro.
    App.borrarPersonaje = function (personajes, personaje) {
        /*let index:number = personajes.findIndex((per) =>
        {
            return per.id == personaje.getId();
        });*/
        if (confirm("¿Confirma el borrado de la persona?\n\n" + personaje.toString())) {
            var posicion_1 = -1;
            personajes.forEach(function (value, index) {
                if (value.getId() == personaje.getId()) {
                    posicion_1 = index;
                }
            });
            if (posicion_1 != -1) {
                personajes.splice(posicion_1, 1);
                alert("Persona:\n\n" + personaje.toString() + "\n\nfue borrada de la tabla");
                $("#filaSeleccionada").remove();
            }
            App.ocultarFormulario();
            localStorage.setItem("personajes", JSON.stringify(personajes));
        }
    };
    //Llama a la función modificarPersonaje del servidor, pasándole el objeto que se quiere modificar por parámetro.
    App.modificarPersonaje = function (personajes, personaPre, personaPost) {
        /*let index:number = personajes.findIndex((per) =>
        {
            return per.id == personaPost.getId();
        });*/
        if (confirm("¿Confirma la modificacion de la persona?\n\n" + personaPre.toString() + "\n\na\n\n" + personaPost.toString())) {
            var posicion_2 = -1;
            personajes.forEach(function (value, index) {
                if (value.getId() == personaPost.getId()) {
                    posicion_2 = index;
                }
            });
            if (posicion_2 != -1) {
                personajes.splice(posicion_2, 1);
                personajes.push(personaPost);
                alert("Persona:\n\n" + personaPre.toString() + "\n\nfue modificada a:\n\n" + personaPost.toString());
                App.modificarFilaSeleccionada(personaPost);
            }
            App.ocultarFormulario();
            localStorage.setItem("personajes", JSON.stringify(personajes));
        }
    };
    //Modifica los datos de la fila seleccionada con los datos de la personaje pasada por parámetro.
    //Esta función la invoca la opción de modificar una personaje del servidor,
    //una vez devuelto el ok del mismo.
    App.modificarFilaSeleccionada = function (datos) {
        var filaSeleccionada = $("#filaSeleccionada");
        //Recorro las columnas de la fila seleccionada, guardando un atributo por columna en personajeSeleccionado.
        //for(var i = 0; i < filaSeleccionada.children().length; i++)
        filaSeleccionada.children().each(function () {
            //$(this).text(datos[$(this).attr("class")]);
            $(this).text(datos.getDinamico($(this).attr("class")));
        });
    };
    //Crea un objeto JSON a partir de los datos del formulario
    App.personajeEditado = function (personajes) {
        var personaje = new Personaje();
        //for(let atributo in personajes[0].getAtributos())
        personajes[0].getAtributos().forEach(function (value) {
            switch (value) {
                case "sexo":
                    var valor = String($('input[name="sexo"]:checked').val());
                    personaje.setSexoStr(valor);
                    break;
                case "tipo":
                    var valor2 = String($('input[name="tipo"]:checked').val());
                    personaje.setTipoStr(valor2);
                    break;
                default:
                    var atributoCapitalizado = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); //Primer letra en mayuscula, resto minuscula
                    personaje.setDinamico(value, $("#txt" + atributoCapitalizado).val());
                    break;
            }
        });
        return personaje;
    };
    return App;
}());
