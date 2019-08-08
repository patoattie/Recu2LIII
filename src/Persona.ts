class Persona
{
    protected nombre:string;
    protected apellido:string;
    protected edad:number;
    protected sexo:ESexo;

    constructor(nombre?:string, apellido?:string, edad?:number, sexo?:string)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = ESexo[sexo];
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

    public getDinamico(atributo:string):any
    {
        let valor:any;

        switch(atributo)
        {
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
    }

    public setDinamico(atributo:string, valor:any):void
    {
        switch(atributo)
        {
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
    }

    public toString():string
    {
        let texto:string = "";

        texto += "NOMBRE: " + this.getNombre() + "\n";
        texto += "APELLIDO: " + this.getApellido() + "\n";
        texto += "EDAD: " + this.getEdad() + "\n";
        texto += "SEXO: " + this.getSexoStr();
    
        return texto;
    }

    public getAtributos():string[]
    {
        return ["nombre", "apellido", "edad", "sexo"];
    }
}