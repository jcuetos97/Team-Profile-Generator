const Manager = require("../lib/manager");

describe("manager", () => {
    it("should return a new manager object", () => {
    // Arrangement
      const managerTest = new Manager();
    // Assertion
      expect(typeof(managerTest)).toBe("object");
    });

    it("should return a manager with an Office Number object property", () => {
      // Arrangement
        const officeNumber = "24A";
      //Action
        const managerTest = new Manager("Juan José", "1", "juan@gmail.com", officeNumber);
      // Assertion
        expect(managerTest.officeNumber).toBe(officeNumber);
      });
    
    it("tests the getOfficeNumber method, which returns the office number of the manager", () => { 
      // Arrangement
        const officeNumber = "24A";
      //Action
        const managerTest = new Manager("Juan José", "1", "juan@gmail.com", officeNumber);
      // Assertion
        expect(managerTest.getOfficeNumber()).toBe(officeNumber);
      });

    it("tests the getRole method, which returns *Manager* ", () => { 
      // Arrangement
          const managerTest = new Manager("Juan José", "1", "juan@gmail.com","24A");
      // Assertion
          expect(managerTest.getRole()).toBe("Manager");
      });

});