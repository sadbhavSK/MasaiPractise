let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = matrix.length - 1; i >= 0; i--) {
    console.log(matrix[i][0]);
}
for (let j = 1; j < matrix[0].length; j++) {
    console.log(matrix[0][j]);
}
for (let i = 1; i < matrix.length; i++) {
    console.log(matrix[i][matrix[i].length - 1]);
}
if (matrix.length > 1) { 
    for (let j = matrix[matrix.length - 1].length - 2; j >= 1; j--) {
        console.log(matrix[matrix.length - 1][j]);
    }
}
