var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Legislador = (function (_super) {
    __extends(Legislador, _super);
    function Legislador(id, nombre, apellido, email, edad, sexo, tipo) {
        var _this = _super.call(this, nombre, apellido, edad, sexo) || this;
        _this.id = id;
        _this.email = email;
        _this.tipo = ELegislador[tipo];
        return _this;
    }
    Legislador.getProximoId = function () {
        var proximoID = Number(localStorage.getItem("ID"));
        if (isNaN(proximoID) || proximoID == 0) {
            proximoID = 20000;
        }
        return proximoID;
    };
    Legislador.prototype.getId = function () {
        return this.id;
    };
    Legislador.prototype.setId = function (id) {
        this.id = id;
    };
    Legislador.setProximoId = function () {
        var proximoID = this.getProximoId();
        proximoID++;
        localStorage.setItem("ID", String(proximoID));
    };
    Legislador.prototype.getEmail = function () {
        return this.email;
    };
    Legislador.prototype.setEmail = function (email) {
        this.email = email;
    };
    Legislador.prototype.getTipo = function () {
        return this.tipo;
    };
    Legislador.prototype.getTipoStr = function () {
        return this.tipo;
    };
    Legislador.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Legislador.prototype.setTipoStr = function (tipo) {
        this.setTipo(ELegislador[tipo]);
    };
    Legislador.prototype.getDinamico = function (atributo) {
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
    Legislador.prototype.setDinamico = function (atributo, valor) {
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
    Legislador.prototype.toString = function () {
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
    Legislador.prototype.getAtributos = function () {
        return ["id", "nombre", "apellido", "email", "edad", "sexo", "tipo"];
    };
    return Legislador;
}(Persona));
