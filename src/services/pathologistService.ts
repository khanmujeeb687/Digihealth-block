import firebase from "firebase";
import {GenUtil} from "../utils/genUtil";
import UploadReport from "../screens/uploadReport";
import {UploadService} from "./uploadService";
import {AuthService} from "./authService";
import {StorageUtil} from "../utils/storageUtil";
export  class PathologistService{
    static async registerPathologist(pathologist:any){
        const ref = await firebase.firestore().collection('pathologist').add(pathologist);
        const hash = GenUtil.getSHA1(ref.id);
        await ref.update({hash});
    }

    static async uploadReport({key,file,phone}:any){
        try {
            const verify = await AuthService.verifyHash(key, StorageUtil.requestUserData().phone, StorageUtil.requestUserData().type);
            if (!verify) {
                window.alert('Key verification failed!')
                return;
            }
            const url = await UploadService.uploadFIle(file);
            if (!url) {
                window.alert('Error uploading file! please try again!')
                return;
            }
            const ref = await firebase.firestore().collection('report').add({
                file_url: url,
                user_phone: phone,
                pathologist_id: verify
            });
            return ref.get();
        }catch (e) {
            window.alert(e.toString());
            return null;
        }

    }


    static async getReports(pathologist:any){
        const res = await firebase.firestore().collection('pathologist').where('pathologist_id','==',
        StorageUtil.requestUserData().id).get();
        return res.docs;
    }

}
