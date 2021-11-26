export const syntheticRequest = (value?:string) =>{
    return  new Promise((res, rej) => {
        setTimeout(()=>{
            if(value){
                if(value.length < 10){
                    return res('oll right')
                }else{
                    return rej('max title length is 10 symbol')
                }
            }else{
                return res('oll right')
            }
        },2000)
    })
}