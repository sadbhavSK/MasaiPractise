let n = 5;
for(let i = 1;i<=n;i++){
    let x = ""
    if(i==1||i==n){
        for(let j=1;j<=5;j++){
            x+="*"
        }
    }else{
        x+="*"
    }
    console.log(x)
}
