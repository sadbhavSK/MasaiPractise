function sumOfsqure(k){
    for(let a=0; a*a<=k;a++){
        let b = Math.sqrt(k-a*a)
        if(b===Math.floor(b)){
            return true
        }
    }
    return false
}
console.log(sumOfsqure(25))
console.log(sumOfsqure(7))