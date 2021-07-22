import firebase from "firebase";
import {GenUtil} from "../utils/genUtil";
import {UploadService} from "./uploadService";
import {AuthService} from "./authService";
import {StorageUtil} from "../utils/storageUtil";
import {BlockChainUtil} from "../utils/blockChainUtil";

export  class PathologistService{
    static async registerPathologist(pathologist:any){
        const exist=await AuthService.doExist(pathologist.phone,'pathologist');
        if(exist){
            window.alert('Already exists!');
            return;
        }
        const ref = await firebase.firestore().collection('pathologist').add(pathologist);
        const hash = GenUtil.getSHA1(ref.id);
        await ref.update({hash});
    }

    static async uploadReport({key,file,phone}:any){
        try {
            const exist=await AuthService.doExist(phone,'user');
            if(!exist){
                window.alert('Patient doesn\'t exists!');
                return;
            }
            const verify = await AuthService.verifyHash(key, StorageUtil.requestUserData().phone, StorageUtil.requestUserData().type);
            if (!verify) {
                window.alert('Key verification failed!')
                return;
            }
            const ipfsHash =  await BlockChainUtil.uploadFileToIPFS(file);
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
            firebase.firestore().collection('hash-file').add({
                file_url: url,
                file_hash: ipfsHash
            });
            return ref.get();
        }catch (e) {
            window.alert(e.toString());
            return null;
        }

    }


    static async getReports(){
        const res = await firebase.firestore().collection('report').where('pathologist_id','==',
        StorageUtil.requestUserData().id).get();
        return res.docs;
    }

}
