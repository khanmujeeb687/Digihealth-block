export class StorageUtil {
    static saveUserData(data: any) {
        console.log({data});
        localStorage.setItem('userData', JSON.stringify(data));
    }

    static requestUserData() {

        const a = localStorage.getItem('userData');
        if (a !== null) {
            return JSON.parse(a);
        } else {
            return a;
        }

    }

    static logout() {
        localStorage.removeItem('userData');
    }

    static showLoader(){
        localStorage.setItem('loader',"true");
    }

    static hideLoader(){
        localStorage.removeItem('loader');
    }

}
