//  Polymorphism merupakan konsep di mana suatu entitas menjadi SuperClass untuk mewariskan property atau method ke SubClass. 

// overriding
//  Overriding adalah cara kita untuk membuat implementasi yang berbeda di SubClass untuk method yang diturunkan dari SuperClass.

//constructor overriding = method khusus yang dipanggil ketika instance class dibuat
class SmartPhones {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`Charging ${this.model}`);
    }
}


class Android extends SmartPhones {
    // overriding constructor
    constructor(color, brand, model, device) {
        super(color, brand, model);
        this.device = device;
    }

    splitScreen() {
        console.log('Android have a Split Screen');
    }
}

const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');

// method overriding memungkinkan SubClass untuk membuat implementasi spesifik dari metode yang sudah ada di SuperClass.
class Android extends SmartPhones {
    constructor(color, brand, model, device) {
        super(color, brand, model);
        this.device = device;
    }

    charging() {
        console.log(`Charging ${this.model} with fast charger`);
    }

    splitScreen() {
        console.log('Android have a Split Screen');
    }
}

//  memanggil method charging() dari SuperClass bersamaan dengan method charging yang sudah di-override
class Android extends SmartPhones {
    constructor(color, brand, model, device) {
        super(color, brand, model);
        this.device = device;
    }

    charging() {
        // memanggil method charging dari SuperClass (SmartPhones)
        super.charging();
        console.log(`Charging ${this.model} with fast charger`);
    }

    splitScreen() {
        console.log('Android have a Split Screen');
    }
}

// example
class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class Android extends SmartPhones {
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }

  charging() {
    super.charging();
    console.log(`Charging ${this.model} with fast charger`);
  }

  splitScreen() {
    console.log('Android have a Split Screen');
  }
}

const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');

android.charging();

/**
* Output:
* Charging Galaxy S21
* Charging Galaxy S21 with fast charger
*/