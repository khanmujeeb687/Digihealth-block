import firebase from "firebase";
import {IUser} from "../models/interfaces";
import {GenUtil} from "../utils/genUtil";
import {AuthService} from "./authService";

export class UserService {


    static async registerUser(user:any){
        const exist=await AuthService.doExist(user.phone,'user');
        if(exist){
            window.alert('Already exists!');
            return;
        }
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
    static  async login(mobileNo:string,password:string){
        const response= await firebase.firestore().collection('user').where('phone','==',mobileNo).get();
        if(response.docs.length===0) return false;
        if(response.docs[0].data().password===password) return response.docs[0].data();
        else return false;
    }
    static  async request(userId:string){
        const response = await firebase.firestore().collection('request'). where( 'user_id','==',userId).get();
        return response.docs;
    }
    static async permitted(docIds : string[]) {
        const doctors= [] as any[];
        const snapshot = await firebase.firestore().collection('doctor').get();
        snapshot.docs.forEach(doctor => {
            if(docIds.includes(doctor.id)){
                doctors.push(doctor)
            }
        });
        return doctors;
    }
    static async updateStatus(requestId: string){
        firebase.firestore().collection('request').doc(requestId).update({status: 'allowed' } )
    }


    static  async getUser(userId:string){
        const response = await firebase.firestore().collection('request'). where( 'user_id','==',userId).get();
        return response.docs;
    }


}
