// Enginer class
const Emp = require("./Employee")

class Engineer extends Emp{

    constructor(name,id,email,github){
        super(name,id,email);
        this.github=github;
        
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer"
    }

}

module.exports=Engineer;