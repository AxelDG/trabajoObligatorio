var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var auto = /** @class */ (function () {
    function auto(ruedas, marca, modelo) {
        this.ruedas = ruedas;
        this.encendido = false;
        this.marca = marca;
        this.modelo = modelo;
    }
    return auto;
}());
var autoCiudad = /** @class */ (function (_super) {
    __extends(autoCiudad, _super);
    function autoCiudad(ruedas, marca, modelo) {
        return _super.call(this, ruedas, marca, modelo) || this;
    }
    autoCiudad.prototype.encender = function () {
        this.encendido = true;
    };
    autoCiudad.prototype.apagar = function () {
        this.encendido = false;
    };
    return autoCiudad;
}(auto));
var autoDeportivo = /** @class */ (function (_super) {
    __extends(autoDeportivo, _super);
    function autoDeportivo(ruedas, marca, modelo) {
        return _super.call(this, ruedas, marca, modelo) || this;
    }
    autoDeportivo.prototype.encender = function () {
        this.encendido = true;
    };
    autoDeportivo.prototype.apagar = function () {
        this.encendido = false;
    };
    return autoDeportivo;
}(auto));
var camion = /** @class */ (function (_super) {
    __extends(camion, _super);
    function camion(ruedas, marca, modelo) {
        return _super.call(this, ruedas, marca, modelo) || this;
    }
    camion.prototype.encender = function () {
        this.encendido = true;
    };
    camion.prototype.apagar = function () {
        this.encendido = false;
    };
    return camion;
}(auto));
var chevroletOnix = new autoCiudad(4, 'Chevrolet', 'Onix');
console.log(chevroletOnix);
chevroletOnix.encender();
console.log(chevroletOnix);
var hondaCivic = new autoDeportivo(4, 'Honda', 'Civic');
console.log(hondaCivic);
hondaCivic.encender();
console.log(hondaCivic);
var vwConstellation = new camion(6, 'Volkswagen', 'Constellation 14.190 Robust');
console.log(vwConstellation);
vwConstellation.encender();
console.log(vwConstellation);
