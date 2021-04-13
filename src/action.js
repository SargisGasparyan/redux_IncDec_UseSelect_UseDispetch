export const inc=()=>({type:'INC'})
export const dec=()=>({type:'DEC'})
export const rand=()=>({type:'RAND',value:Math.floor(Math.random()*10)})