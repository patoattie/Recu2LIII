class Personaje
{
    private id:number;
    private nombre:string;
    private apellido:string;
    private email:string;
    private edad:number;
    private sexo:ESexo;
    private tipo:ETipo;

    constructor(id?:number, nombre?:string, apellido?:string, email?:string, edad?:number, sexo?:string, tipo?:string)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
        this.sexo = ESexo[sexo];
        this.tipo = ETipo[tipo];
    }

    public static getProximoId():number
    {
        let proximoID:number = Number(localStorage.getItem("ID"));

        if(isNaN(proximoID) || proximoID == 0)
        {
            proximoID = 20000;
        }

        return proximoID;
    }

    public static setProximoId():void
    {
        let proximoID:number = this.getProximoId();
        proximoID++;

        localStorage.setItem("ID", String(proximoID));
    }

    public getId():number
    {
        return this.id;
    }

    public setId(id:number):void
    {
        this.id = id;
    }

    public getNombre():string
    {
        return this.nombre;
    }

    public setNombre(nombre:string):void
    {
        this.nombre = nombre;
    }

    public getApellido():string
    {
        return this.apellido;
    }

    public setApellido(apellido:string):void
    {
        this.apellido = apellido;
    }

    public getEmail():string
    {
        return this.email;
    }

    public setEmail(email:string):void
    {
        this.email = email;
    }

    public getEdad():number
    {
        return this.edad;
    }

    public setEdad(edad:number):void
    {
        this.edad = edad;
    }

    public getSexo():ESexo
    {
        return this.sexo;
    }

    public getSexoStr():string
    {
        return this.sexo;
    }

    public setSexo(sexo:ESexo):void
    {
        this.sexo = sexo;
    }

    public setSexoStr(sexo:string):void
    {
        this.setSexo(ESexo[sexo]);
    }

    public getTipo():ETipo
    {
        return this.tipo;
    }

    public getTipoStr():string
    {
        return this.tipo;
    }

    public setTipo(tipo:ETipo):void
    {
        this.tipo = tipo;
    }

    public setTipoStr(tipo:string):void
    {
        this.setTipo(ETipo[tipo]);
    }

    public getDinamico(atributo:string):any
    {
        let valor:any;

        switch(atributo)
        {
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
    }

    public setDinamico(atributo:string, valor:any):void
    {
        switch(atributo)
        {
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
    }

    public toString():string
    {
        let texto:string = "";

        texto += "ID: " + this.getId() + "\n";
        texto += "NOMBRE: " + this.getNombre() + "\n";
        texto += "APELLIDO: " + this.getApellido() + "\n";
        texto += "E-MAIL: " + this.getEmail() + "\n";
        texto += "EDAD: " + this.getEdad() + "\n";
        texto += "SEXO: " + this.getSexoStr() + "\n";
        texto += "TIPO: " + this.getTipoStr();
    
        return texto;
    }

    public getAtributos():string[]
    {
        return ["id", "nombre", "apellido", "email", "edad", "sexo", "tipo"];
    }
}