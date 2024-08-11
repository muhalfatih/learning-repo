const user = {
    name: "Fatih",
    age: 25
}

const hobbies = ["Sport","Fishing"]
const myHobby = ["Reading"]

const mergedHobbies = [...hobbies, ...myHobby]
console.log(mergedHobbies)

const extendedUser = {
    isAdmin: true,
    ...user
}
console.log(extendedUser)

const username = 'Your name'