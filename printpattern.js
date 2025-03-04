function printPattern(n){
    let count = 1 
    for(let i =1;i<=n;i++){
        let row = ""
        for(let j=1;j<=n;j++){
            row+=count+" "
            count++
        }
        console.log(row)
    }
}
printPattern(3)