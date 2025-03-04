function happy(n){
    let seen = {}

    while(n!==1 && !seen[n]){
        seen[n] =true;
        let sum = 0
        while(n>0){
            let digit = n%10
            sum = sum + digit * digit;
            n=Math.floor(n/10)
        }
        n=sum;
    }
    return n===1;
}
let num = 19;
console.log(happy(num))