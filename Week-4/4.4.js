
var Person = function() {};
    
    Person.prototype.initialize = function(name,age) {
            this.name=name;
            this.age=age;
        }// TODO: create the class Teacher and a method teach

    class Teacher extends Person{
        constructor(name, age){
            super(name,age)
        }
    }  
    
    Teacher.prototype.teach = function(subject){
        super(subject)
         return this.subject+" "+this.name
    }
        
        var him = new Teacher();
        him.initialize("Adam",45);
        console.log(him.teach("Inheritance"))


        // class Teacher {
        //     constructor(name, subject) {
        //        this.name = name;
        //        this.subject = subject;
        //     }
        //     teach() {
        //         console.log(this.name+" is now teaching "+this.subject) 
        //     }
        // }
        
        // let teacher = new Teacher("Arfat","JavaScript");
        // teacher.teach()