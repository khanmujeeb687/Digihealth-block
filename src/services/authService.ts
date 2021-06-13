

import firebase from "firebase";
import {GenUtil} from "../utils/genUtil";
import {StorageUtil} from "../utils/storageUtil";


export class  AuthService{
    static  async login(mobileNo:string,password:string,type:string){
        const response= await firebase.firestore().collection(type).where('phone',
            '==',mobileNo).get();

        if(response.docs.length===0) return false;
        if(response.docs[0].data().password===password){
            await StorageUtil.saveUserData({... response.docs[0].data(),type});
            return true;
        }
        else return false;

    }


}