import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import Services from "../src/services/services";
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    let secname: Boolean = (req.body && req.body.name);
    let secDocument: Boolean = (req.body && req.body.numeroIdentificacion)
    if (secname){
        const name = (req.query.name || (req.body && req.body.name));
        const responseMessage = name
        ? "Hello, " + name + ". Nombre Client."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    }else if (secDocument){
        let identificacion = (req.query.body || (req.body && req.body.numeroIdentificacion));
        context.res = await Services.validateCifinCustomer(identificacion);
        const responseMessage = "Hello, numero de identificacion: " + identificacion;
        /*context.res = {
            status: 200, /* Defaults to 200 
            body: responseMessage
        };*/
    }else if (secDocument && secname){
        
        //const responseMessage = "Ambas ocpines no son validas, favor verificar POST sobre la Function."
    }
};
export default httpTrigger;