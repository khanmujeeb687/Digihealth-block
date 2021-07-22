import {AddResult} from "ipfs-core-types/src/root";

const { create ,urlSource} = require('ipfs-http-client')

export class BlockChainUtil {
    static uploadFileToIPFS=async(file:any)=>{
        try{
            const client = create(new URL('http://127.0.0.1:5002'))
            const {cid} = await client.add(file, { progress: (prog:number) => console.log(`received: ${prog}`) });
            return cid.toString();
        }catch (e) {
         console.log({e});
        }
    }
}
