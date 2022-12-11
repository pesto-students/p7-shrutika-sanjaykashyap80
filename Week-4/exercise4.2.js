class Teacher {
    constructor(name, subject) {
       this.name = name;
       this.subject = subject;
    }
    teach() {
        console.log(this.name+" is now teaching "+this.subject) 
    }
}

let teacher = new Teacher("Arfat","JavaScript");
teacher.teach()

// var Person = function() {
      
// };

// Person.prototype.initialize = function(name,age) {
//     this.name=name;
//     this.age=age;
// }// TODO: create the class Teacher and a method teach

// var him = new Teacher();
// him.initialize("Adam",45);
// him.teach("Inheritance")