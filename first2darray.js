function first2darray(N, M, arr){
    for(let i=0;i<N;i++){
        let result = " "
        for(let j=0;j<M;j++){
            result += arr[i][j] + " "
        }
        console.log(result.trim())
    }
}
let N = 3,M = 2
let arr=[
    [1, 2],
    [3, 4],
    [5, 6]
]
first2darray(N, M, arr);

 