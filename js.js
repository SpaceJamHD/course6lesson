// Объекты

const user = {
    firstName: 'Denis',
    age: 30,
    isAdmin: true,
    email: 'tes@test.com',
    'user-address': {
        city: 'Kharkiv'
    },
    skills: ['html', 'css', 'js']
}

let value;
let prop = 'email';


value = user.firstName; // number 1
value = user['isAdmin']; // number 2
value = user['user-address']; // number 2
value = user['user-address'].city; // number Влож
value = user['user-address']['city'];
value = user[prop][0];


user.firstName = 'Den';

value = user.firstName;

user.info = 'Some info';

value = user.info;

value = user['user-address'].city = 'Kiev';
value = user['user-address'].country = 'Ukraine';

console.log(user.plan)
user.plan = ();

user.plan.basic = 'basic';



console.log(value);
console.log(user);