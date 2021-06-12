const { create } = require('ipfs-http-client')

export class BlockChainUtil {
    static uploadFileToIPFS=async(files:any[])=>{
        const client = create(new URL('http://127.0.0.1:5002'))
        const { cid } = await client.add([...files], { progress: (prog:number) => console.log(`received: ${prog}`) });
        return cid;
    }
}
