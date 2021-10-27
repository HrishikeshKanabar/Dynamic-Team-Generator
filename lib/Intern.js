// Intern class
const Emp = require("./Employee")
class Intern extends Employee{
   
    contructor(id,name,email,school){
        super(id,name,email);
        this.school=school;

   }

   getSchool(){
       return this.school;
   }

   getRole(){
       return "Intern";
   }
}

module.exports=Intern;