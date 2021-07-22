import firebase from "firebase";
import {GenUtil} from "../utils/genUtil";
import {AuthService} from "./authService";
import {StorageUtil} from "../utils/storageUtil";
export  class DoctorService{
    static async registerDoctor(doctor:any){
        const exist=await AuthService.doExist(doctor.phone,'doctor');
        if(exist){
            window.alert('Already exists!');
            return;
        }
        const ref = await firebase.firestore().collection('doctor').add(doctor);
        const hash = GenUtil.getSHA1(ref.id);
        await ref.update({hash});
    }

    static async requestAccess(phone:string){
        const exist=await AuthService.doExist(phone,'user');
        if(!exist){
            window.alert('Patient does not exists!');
            return null;
        }
        const already1=await firebase.firestore().collection('request').where('user_phone','==',phone).
            where('doctor_id','==',StorageUtil.requestUserData().id).where('status','==','requested').get();
        const already2=await firebase.firestore().collection('request').where('user_phone','==',phone).
            where('doctor_id','==',StorageUtil.requestUserData().id).where('status','==','allowed').get();
        if(already1.docs.length>0 || already2.docs.length>0 ){
            window.alert('Request already exists!');
            return null;
        }
        const res=await firebase.firestore().collection('request').add({
           user_phone:phone,
           doctor_name:StorageUtil.requestUserData().firstname +' '+StorageUtil.requestUserData().lastname,
           status:'requested',
           doctor_id:StorageUtil.requestUserData().id
        });
        return res.get();
    }
    static  async getRequests(){
        const res= await firebase.firestore().collection('request').where('doctor_id','==',StorageUtil.requestUserData().id).get();
        return res.docs;
    }

    static  async deleteRequest(id:string){
       await firebase.firestore().collection('request').doc(id).delete();
    }
}
