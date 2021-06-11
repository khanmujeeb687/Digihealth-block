export class GenUtil {
    static formRoutes=[
        'register',
        'login',
        'new',
    ];
    static isFormRoute(path:string):boolean{

        return path==='/' || this.formRoutes.filter(item=>path.includes(item))?.length>0;
    }
}
