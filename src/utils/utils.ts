export const syntheticRequest = () =>{
    return  new Promise((res, rej) => {
        setTimeout(()=>{
            res('oll right')
        },2000)
    })
}