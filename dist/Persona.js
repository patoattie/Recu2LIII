var Persona = (function () {
    function Persona(nombre, apellido, edad, sexo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = ESexo[sexo];
    }
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
    Persona.prototype.getDinamico = function (atributo) {
        var valor;
        switch (atributo) {
            case "nombre":
                valor = this.getNombre();
                break;
            case "apellido":
                valor = this.getApellido();
                break;
            case "edad":
                valor = this.getEdad();
                break;
            case "sexo":
                valor = this.getSexo();
                break;
            default:
                valor = null;
                break;
        }
        return valor;
    };
    Persona.prototype.setDinamico = function (atributo, valor) {
        switch (atributo) {
            case "nombre":
                this.setNombre(valor);
                break;
            case "apellido":
                this.setApellido(valor);
                break;
            case "edad":
                this.setEdad(valor);
                break;
            case "sexo":
                this.setSexo(valor);
                break;
        }
    };
    Persona.prototype.toString = function () {
        var texto = "";
        texto += "NOMBRE: " + this.getNombre() + "\n";
        texto += "APELLIDO: " + this.getApellido() + "\n";
        texto += "EDAD: " + this.getEdad() + "\n";
        texto += "SEXO: " + this.getSexoStr();
        return texto;
    };
    Persona.prototype.getAtributos = function () {
        return ["nombre", "apellido", "edad", "sexo"];
    };
    return Persona;
}());
