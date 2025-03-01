function UserRole(user){
    return user.role ==="admin" ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked"):
           user.role ==="user" ? (user.active ? "User Access Granted!" : "User Access Revoked") :
           "Access Denied"
}

let user1 = {name: "Manasa", role: "admin", active: true}
let user2 = {name: "Shivaleele", role: "admin", active: false}
console.log(UserRole(user1))
console.log(UserRole(user2))