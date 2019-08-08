var Personaje = (function () {
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
