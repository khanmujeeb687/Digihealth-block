import firebase from "firebase";
import {IUser} from "../models/interfaces";
import {GenUtil} from "../utils/genUtil";

export class UserService {


    static async saveNewUser(user:any){
      const ref = await firebase.firestore().collection('user').add(user);
      const hash = GenUtil.getSHA1(ref.id);
      await ref.update({hash});
    }

    static async viewList(userId:string){
       const response=await  firebase.firestore().collection('view').where('user_id','==',userId).get();
       return response.docs;
    }


    static async getReports(userId:string){
       const response=await  firebase.firestore().collection('report').where('user_id','==',userId).get();
       return response.docs;
    }


}
