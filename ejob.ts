abstract class auto {
    protected ruedas : number;
    encendido: boolean;
    private marca: string;
    private modelo: string;

    constructor(ruedas: number, marca: string, modelo: string) {
        this.ruedas = ruedas;
        this.encendido = false;
        this.marca = marca;
        this.modelo = modelo;
    }
    abstract encender (): void;
    abstract apagar (): void;

}

class autoCiudad extends auto {
    constructor(ruedas: number, marca: string, modelo: string) {
        super(ruedas, marca, modelo);
    }
    encender () : void {
        this.encendido = true;
    }
    apagar () : void {
        this.encendido = false;
    }
    
}

class autoDeportivo extends auto{
    constructor(ruedas: number, marca: string, modelo: string) {
        super(ruedas, marca, modelo);
    }
    encender () : void {
        this.encendido = true;
    }
    apagar () : void {
        this.encendido = false;
    }

}

class camion extends auto{
    constructor(ruedas: number, marca: string, modelo: string) {
        super(ruedas, marca, modelo);
    }
    encender () : void {
        this.encendido = true;
    }
    apagar () : void {
        this.encendido = false;
    }

}

let chevroletOnix : autoCiudad = new autoCiudad(4, 'Chevrolet', 'Onix');
console.log(chevroletOnix);
chevroletOnix.encender();
console.log(chevroletOnix);

let hondaCivic : autoDeportivo = new autoDeportivo(4, 'Honda', 'Civic');
console.log(hondaCivic);
hondaCivic.encender();
console.log(hondaCivic);

let vwConstellation : camion = new camion(6, 'Volkswagen', 'Constellation 14.190 Robust');
console.log(vwConstellation);
vwConstellation.encender();
console.log(vwConstellation);
