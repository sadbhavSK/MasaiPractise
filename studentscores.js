let scores = [26,31,95,86,22,76,36,88,72,100]
let count = 0
for(let i = 0; i<scores.length; i++){
if(scores[i]<40){
    scores[i] += 20;
}
if(scores[i]>90){
    scores[i] = 90
}
if(scores[i]>=50){
    count++
}
}console.log(count)
console.log(scores)