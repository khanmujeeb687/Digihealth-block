import firebase from "firebase";
import {IUser} from "../models/interfaces";
import {GenUtil} from "../utils/genUtil";
import {AuthService} from "./authService";
import {StorageUtil} from "../utils/storageUtil";
import {DoctorService} from "./doctorService";


export class UserService {


    static async registerUser(user: any) {
        const exist = await AuthService.doExist(user.phone, 'user');
        if (exist) {
            window.alert('Already exists!');
            return;
        }
        const ref = await firebase.firestore().collection('user').add(user);
        const hash = GenUtil.getSHA1(ref.id);
        await ref.update({hash});
    }

    static async viewList(phone: string) {
        const response = await firebase.firestore().collection('view').where('user_phone', '==', phone).get();
        return response.docs;
    }


    static async getReports(phone: string) {
        const response = await firebase.firestore().collection('report').where('user_phone', '==', phone).get();
        return response.docs;
    }

    static async login(mobileNo: string, password: string) {
        const response = await firebase.firestore().collection('user').where('phone', '==', mobileNo).get();
        if (response.docs.length === 0) return false;
        if (response.docs[0].data().password === password) return response.docs[0].data();
        else return false;
    }

    static async request(phone: string) {
        const response = await firebase.firestore().collection('request').where('user_phone', '==', phone).get();
        return response.docs;
        // return response.docs.map(item=>{
        //     return item.data();
        // });
    }

    static async permitted(docIds: string[]) {
        console.log({docIds});
        if (docIds.length === 0) return [];
        const doctors = [] as any[];
        const snapshot = await firebase.firestore().collection('doctor').get();
        snapshot.docs.forEach(doctor => {
            if (docIds.includes(doctor.id)) {
                doctors.push(doctor)
            }
        });
        console.log({doctors});
        return doctors;
    }

    static async updateStatus(requestId: string, userId: string, docId: string) {
        await firebase.firestore().collection('request').doc(requestId).update({status: 'allowed'})
        await firebase.firestore().collection('user').doc(userId).update({permitted: firebase.firestore.FieldValue.arrayUnion(docId)})

    }


    static async getUser(phone: string) {
        if (!phone) return [];
        const response = await firebase.firestore().collection(StorageUtil.requestUserData().type).where('phone', '==', phone).get();
        return response.docs;
    }


    static async fetchAndSaveUser() {
        const users = await this.getUser(StorageUtil.requestUserData()?.phone);
        if (users.length > 0) {
            await StorageUtil.saveUserData({
                ...users[0].data(),
                type: StorageUtil.requestUserData().type,
                id: users[0].id
            });
        }
        console.log(StorageUtil.requestUserData());
    }


    static async removeDoctor(id: string, userId: string) {
        await firebase.firestore().collection('user').doc(userId).update({permitted: firebase.firestore.FieldValue.arrayRemove(id)});
        const docs = await firebase.firestore().collection('request').where('user_phone', '==', StorageUtil.requestUserData()?.phone).where('doctor_id', '==', id).get();
        if (docs.docs.length > 0) {
            await firebase.firestore().collection('request').doc(docs.docs[0].id).update({status: 'denied'})

        }
    }


    static async addToBlockChain(fileUrl: string, id: string) {
        const docs = await firebase.firestore().collection('hash-file').where('file_url', '==', fileUrl).get();
        if (docs.docs.length) {
            const data = docs.docs[0].data();
            await firebase.firestore().collection('report').doc(id).update({
                file_url: '',
                file_hash: data?.file_hash
            });
            firebase.firestore().collection('hash-file').doc(docs.docs[0].id).delete();
        }
    }


}
