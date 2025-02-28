function SumofIndex(N, M, arr){
    for(let i=0;i<N;i++){
        let Result = " "
        for(let j=0;j<M;j++){
            Result = Result + (i+j) + ""
        }
        console.log(Result.trim())
    }
    
}
let N = 3, M = 4
let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

SumofIndex(N, M, arr)

