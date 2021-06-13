import firebase from "firebase";
import {GenUtil} from "../utils/genUtil";
export  class DoctorService{
    static async registerDoctor(doctor:any){
        const ref = await firebase.firestore().collection('doctor').add(doctor);
        const hash = GenUtil.getSHA1(ref.id);
        await ref.update({hash});
    }
}