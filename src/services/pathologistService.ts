import firebase from "firebase";
import {GenUtil} from "../utils/genUtil";
export  class PathologistService{
    static async registerPathologist(pathologist:any){
        const ref = await firebase.firestore().collection('pathologist').add(pathologist);
        const hash = GenUtil.getSHA1(ref.id);
        await ref.update({hash});
    }
}