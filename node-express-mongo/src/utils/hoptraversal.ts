import {
  BlockChainNodeInput,
} from "../models/blockchain.model";

export async function sourceHopTravesal(source:string, hop:number, blockchain:Array<BlockChainNodeInput>, hops:Array<any>) {
    let i = 0
     if(hop-- == 0) {
        return
    }
    const temp:any = {
        from: source,
        to: []
    }
    for(i; i < blockchain.length; i++) {
        if(blockchain[i].from === source) {
            if(temp.to.includes(blockchain[i].to)){
                const index = hops.findIndex(hop => hop.to === blockchain[i].to && temp.from === source )
                let values = hops[index]?.values || []
                hops[index] && hops[index]?.values ? values.push(blockchain[i]?.value) : values.push(hops[index]?.value, blockchain[i]?.value)                
                const node = {
                    ...hops[index],
                    values,
                }
                hops[index] = node
             } else {
                temp.to.push(blockchain[i].to)
                hops[hops.length] = blockchain[i]
                if(hop > 0) {
                    await sourceHopTravesal(blockchain[i].to, hop, blockchain.slice(i), hops)
                }
             }
        }
    }
    return hops
}


export async function destinationHopTravesal(destination:string, hop:number, blockchain:Array<BlockChainNodeInput>, hops:Array<any>) {
    let i = blockchain.length-1
    let j = hops.length - 1
     if(hop-- == 0) {
        return
    }
    const temp:any = {
        to: destination,
        from: []
    }
    for(i; i >= 0; i--) {
        if(blockchain[i].to === destination) {
            if(temp.from.includes(blockchain[i].from)){
                const index = hops.findIndex(hop => hop.from === blockchain[i].from && temp.to === destination)
                let values = hops[index].values || []
                hops[index] && hops[index].values ? values.push(blockchain[i].value) : values.push(hops[index].value, blockchain[i].value)                
                const node = {
                    ...hops[index],
                    values,
                }
                hops[index] = node
             } else {
                 j++
                temp.from.push(blockchain[i].from)
                hops[j] = blockchain[i]
                if(hop > 0) {
                    await destinationHopTravesal(blockchain[i].from, hop, blockchain.slice(i), hops)
                }
            }
        }        
    }
    return hops
}
