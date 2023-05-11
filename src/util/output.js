"use strict";
exports.__esModule = true;
exports.Salida = void 0;
var Salida = /** @class */ (function () {
    function Salida() {
        this.success = true;
        this.dateTime = new Date().toString();
    }
    Salida.out = function (status, body) {
        return {
            status: status,
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    };
    Salida.genericError = function (message, success, status, code, data) {
        var output = new Salida();
        output.success = success;
        output.message = message;
        if (data)
            output.data = data;
        output.errorCod = code;
        return this.out(status, output);
    };
    return Salida;
}());
exports.Salida = Salida;
