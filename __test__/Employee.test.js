const Employee = require("../lib/employee");

describe("employee", () => {
    it("should return an employee object", () => {
    // Arrangement
      const employeeTest = new Employee();
    // Assertion
      expect(typeof(employeeTest)).toBe("object");
    });

    it("should return an employee with a Name object property", () => { 
    // Arrangement
        const name = "Juan José";
    //Action
        const employeeTest = new Employee(name);
    // Assertion
        expect(employeeTest.name).toBe(name);
    });

    it("should return an employee object with an ID object property", () => { 
        // Arrangement
            const id = "1";
        //Action
            const employeeTest = new Employee("Juan José",id);
        // Assertion
            expect(employeeTest.id).toBe(id);
        });
    
    it("should return an employee with an Email object property", () => { 
        // Arrangement
            const email = "juan@gmail.com";
        //Action
            const employeeTest = new Employee("Juan José","1",email);
        // Assertion
            expect(employeeTest.email).toBe(email);
        });
    
    it("tests the getName method, which returns the name of the employee", () => { 
        // Arrangement
            const name = "Pedro";
        //Action
            const employeeTest = new Employee(name);
        // Assertion
            expect(employeeTest.getName()).toBe(name);
        });
    
    it("tests the getId method, which returns the Id of the employee", () => { 
        // Arrangement
            const id = "2";
        //Action
            const employeeTest = new Employee("Pedro", id);
        // Assertion
            expect(employeeTest.getId()).toBe(id);
        });


    it("tests the getInfo method, which returns the email of the employee", () => { 
        // Arrangement
            const email = "pedro@gmail.com";
        //Action
            const employeeTest = new Employee("Pedro","2",email);
        // Assertion
            expect(employeeTest.getInfo()).toBe(email);
        });

    it("tests the getRole method, which returns *Employee* ", () => { 
        // Arrangement
            const employeeTest = new Employee("Pedro","2","pedro@gmail.com");
        // Assertion
            expect(employeeTest.getRole()).toBe("Employee");
        });


});


  


