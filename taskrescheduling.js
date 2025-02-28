let tasks = ["freshup", "eat", "coding", "repeat", "sleep"]
tasks.shift()
tasks.unshift("workout", "yoga")
tasks[tasks.length-1] = 'review'
console.log(tasks)