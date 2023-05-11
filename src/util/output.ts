export class Salida <T>{
    success: boolean = true;
    data: T;
    message: string;
    dateTime = new Date().toString();
    errorCod: number;

    static out (status:number, body:any){
        return {
            status,
            body,
            headers:{
                'Content-Type':'application/json',
            }
        };
    }
    static genericError(message: string, success:boolean, status:number, code:number, data?: any){
        const output = new Salida();
        output.success = success;
        output.message = message;
        if (data) output.data = data;
        output.errorCod = code;
        return this.out(status,output);
    }
}