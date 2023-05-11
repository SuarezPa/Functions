
import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {Salida} from "../util/output"

namespace Services{
export async function validateCifinCustomer(TestBody: HttpRequest):
Promise<{ status: number; body: Salida<any>; headers: {} }> {
        let Nit = (TestBody.body && TestBody.body.numeroIdentificacion);
        if (!Nit) return Salida.genericError('Verifique nombre del dato enviado en el Body de la solicitud, porque no es valido',false,400,600,"Data mi papa, no valida mijito");{
            try {
                var y;
                // Se limpia el Nit
            Nit = Nit.replace(/\s/g, ""); // Espacios
            Nit = Nit.replace(/,/g, ""); // Comas
            Nit = Nit.replace(/\./g, ""); // Puntos
            Nit = Nit.replace(/-/g, ""); // Guiones
            return Salida.genericError(`El nit/cédula ${Nit} es válido.`, true, 200, 0, { result: ((y > 1) ? 11 - y : y) });
        } catch (error) {
                
            }
        }    
    }
    }
    export default Services;

 