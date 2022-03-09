const myInfo = {
    name: 'Ha Xuan',
    age: 18,
    nickName: 'XuanTocDo'
};

myInfo.email = 'Ha Noi';
myInfo.age; // == myInfo['age'];

function User(firstName, lastName, avatar, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.age = age;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

User.prototype.addNickName = 'F**'; 
User.prototype.addAge = function(){
    return this.age + 2;
}

let user1 = new User('No', 'Name', 'Avatar1', 18);
let user2 = new User('Ha', 'Xuan', 'Avatar2', 20);

console.log(user1);
console.log(user1.getName());
console.log(user1.addNickName);
console.log(user1.addAge());
//------------
console.log(user2);
console.log(user2.getName());
console.log(user2.addNickName);
console.log(user2.addAge());