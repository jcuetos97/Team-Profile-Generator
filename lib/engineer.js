const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    } 

    getgitHub() {return this.gitHub};
    
    getRole() {return Engineer};
}

module.exports = Engineer