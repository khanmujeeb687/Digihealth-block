

import firebase from "firebase";
import {GenUtil} from "../utils/genUtil";
import {StorageUtil} from "../utils/storageUtil";


export class  AuthService{
    static  async login(mobileNo:string,password:string,type:string){
        const response= await firebase.firestore().collection(type).where('phone',
            '==',mobileNo).get();

        if(response.docs.length===0) return false;
        if(response.docs[0].data().password===password){
            await StorageUtil.saveUserData({... response.docs[0].data(),type,id:response.docs[0].id});
            return true;
        }
        else return false;

    }


    static async verifyHash(hash:string,phone:string,type:string){
        console.log(hash,phone,type);
        const data =await firebase.firestore().collection(type).where('phone','==',phone).get();
        if(data.docs.length===0) return false;
        if (data.docs[0].data().hash===hash) return data.docs[0].id;
        return false;
    }


}
