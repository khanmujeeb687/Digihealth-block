import firebase from "firebase";
import {IUser} from "../models/interfaces";
import {GenUtil} from "../utils/genUtil";
import DocumentReference = firebase.firestore.DocumentReference;

export class UserService {


    static async saveNewUser(user:IUser){
      const ref:DocumentReference = await firebase.firestore().collection('user').add(user);
      const hash = GenUtil.getSHA1(ref.id);
      await ref.update({hash});
    }


}
