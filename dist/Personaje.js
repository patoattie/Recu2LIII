var Persona = (function () {
    function Persona(id, nombre, apellido, email, edad, sexo, tipo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
        this.sexo = ESexo[sexo];
        this.tipo = ELegislador[tipo];
    }
    Persona.getProximoId = function () {
        var proximoID = Number(localStorage.getItem("ID"));
        if (isNaN(proximoID) || proximoID == 0) {
            proximoID = 20000;
        }
        return proximoID;
    };
    Persona.setProximoId = function () {
        var proximoID = this.getProximoId();
        proximoID++;
        localStorage.setItem("ID", String(proximoID));
    };
    Persona.prototype.getId = function () {
        return this.id;
    };
    Persona.prototype.setId = function (id) {
        this.id = id;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.getEmail = function () {
        return this.email;
    };
    Persona.prototype.setEmail = function (email) {
        this.email = email;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.getSexoStr = function () {
        return this.sexo;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.setSexoStr = function (sexo) {
        this.setSexo(ESexo[sexo]);
    };
    Persona.prototype.getTipo = function () {
        return this.tipo;
    };
    Persona.prototype.getTipoStr = function () {
        return this.tipo;
    };
    Persona.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Persona.prototype.setTipoStr = function (tipo) {
        this.setTipo(ELegislador[tipo]);
    };
    Persona.prototype.getDinamico = function (atributo) {
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
    Persona.prototype.setDinamico = function (atributo, valor) {
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
    Persona.prototype.toString = function () {
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
    Persona.prototype.getAtributos = function () {
        return ["id", "nombre", "apellido", "email", "edad", "sexo", "tipo"];
    };
    return Persona;
}());
