class Character {
    constructor(name, health, position) {
        this.name = name;
        this.health = health;
        this.position = position;
    }

    canMove() {
        console.log(`${this.name} moves to ${this.position}!`);
    }
}


class Monster extends Character {
    canAttack() {
        console.log(`${this.name} attacks with a weapon!`);
    }
}

class Guardian extends Character {
    canDefend() {
        console.log(`${this.name} defends with a shield!`);
    }
}

class Wizard extends Character {
    canCastSpell() {
        console.log(`${this.name} casts a magic spell!`);
    }
}

//jika ingin tambah 1 karakter yaitu dengan melakukan pewarisan dari superClass
class Warrior extends Character {
    canAttack() {
        console.log(`${this.name} attacks with a weapon!`);
    }

    canDefend() {
        console.log(`${this.name} defends with a shield}!`);
    }
}
// namun tidak efektif
//====================//
//solusi nya make object composition
// Ketika menggunakan object composition, pendekatan yang digunakan adalah berbasis kemampuan, bukanlah peran atau identitas. 
// kode distruktur berdasarkan kemampuan bukan peran/identitas
function canAttack(character) {
    return {
        attack: () => {
            console.log(`${character} attacks with a weapon!`);
        }
    }
}

function canDefend(character) {
    return {
        defend: () => {
            console.log(`${character} defends with a shield!`);
        }
    }
}

function canCastSpell(character) {
    return {
        castSpell: () => {
            console.log(`${character} casts a spell!`);
        }
    }
}

// dapat mengomposisikan object dengan mudah yaitu dengan object.assign()
// object.assign() =  method statis untuk menyalin semua properti dari satu atau lebih object ke objek target
function createMonster(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(name));
}

function createGuardian(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(name));
}

function createWizard(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canCastSpell(name));
}

function createWarrior(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character));
}
// kode diatas ini untuk buat object creator

// kode lengkap
class Character {
    constructor(name, health, position) {
        this.name = name;
        this.health = health;
        this.position = position;
    }

    canMove() {
        console.log(`${this.name} moves to another position!`);
    }
}

function canAttack(character) {
    return {
        attack: () => {
            console.log(`${character.name} attacks with a weapon!`);
        }
    };
}

function canDefend(character) {
    return {
        defend: () => {
            console.log(`${character.name} defends with a shield!`);
        }
    };
}

function canCastSpell(character) {
    return {
        castSpell: () => {
            console.log(`${character.name} casts a spell!`);
        }
    };
}

function createMonster(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character));
}

function createGuardian(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(character));
}

function createWizard(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canCastSpell(character));
}

function createWarrior(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character));
}

const monster = createMonster('Monster');
monster.canMove();
monster.attack();

const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();

const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();

const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();