class Car {
    
    numberWheels;
    engineInfo;
    make;
    model;
    
    construct(wheels) {
        this.numberWheels = wheels;
    }
    
    startEngine() {
        engineInfo = 0;
    }
    
    calculateSpareWheels() {
        if (this.numberWheels === 4) {
            return 2;
        } else if (this.numberWheels === 3) {
            return 1;
        }
    }
}

// staic

class Person {
    contructor() {
        this.firstName = "Lucy";
        this.LastName = "Smith";
        this.birthDate = "Juney 15, 1941";
    }
}

let msLucy = new Person();

// dynamic

class Person {
    contructor(fname,lname,bdate) {
        this.firstName = fname;
        this.LastName = lname;
        this.birthDate = bdate;
    }
}

let msDana = new Person("Dana","Smith","Juney 15, 1941");
let mrEd = new Person("Ed","Brig","May 26, 1971");