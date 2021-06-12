const sha1 = require('sha1');

export class GenUtil {
    static formRoutes=[
        'register',
        'login',
        'new',
    ];
    static isFormRoute(path:string):boolean{

        return path==='/' || this.formRoutes.filter(item=>path.includes(item))?.length>0;
    }

    static getSHA1(value:any){
        return sha1(value.toString());
    }
}
