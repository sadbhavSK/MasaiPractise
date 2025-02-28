function zigZagTraversal(N, M, arr) {
    for (let i = 0; i < N; i++) {
        if (i % 2 === 0) { 
            // Even rows: Traverse right to left
            for (let j = M - 1; j >= 0; j--) {
                console.log(arr[i][j]);
            }
        } else { 
            // Odd rows: Traverse left to right
            for (let j = 0; j < M; j++) {
                console.log(arr[i][j]);
            }
        }
    }
}

// Example usage:
let N = 4, M = 5;
let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19]
];

zigZagTraversal(N, M, arr);