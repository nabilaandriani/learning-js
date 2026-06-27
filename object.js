//  square bracket. ini untuk supaya bisa ada spasi nya gitu
const user = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};

console.log(user['last name']); // Output: Indonesia

// dot notation
const user = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};

console.log(user.name); // Output: Dicoding

// object destructing
const user = {
    'name': 'Dicoding',
    'lastName': 'Indonesia',
    age: 9
};

const { name, lastName } = user;
console.log(name, lastName); // Output: Dicoding Indonesia

//Mengubah nilai di properti Object dengan menggukan (=)
const account = {
    balance: 1000,
    debt: 10,
};

account.balance = 2000;
console.log(account.balance); // Output: 2000

// Menghapus properti di Object dengan menggunakan delete
const user = {
    'name': 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};

delete user.age;
console.log(user); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }

