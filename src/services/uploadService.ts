import firebase from "firebase";
export class UploadService {
    static async uploadFIle(file:any){
        const uploadTask = firebase.storage().ref(`/images/${file.name}`).put(file);
        return new Promise((resolve,reject) =>{
            uploadTask.on("state_changed", console.log, console.error, () => {
                firebase.storage()
                    .ref("images")
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => {
                        resolve(url);
                    }).catch((err)=>{
                    resolve(null);
                });
                ;
            });
        },)
    }
}
