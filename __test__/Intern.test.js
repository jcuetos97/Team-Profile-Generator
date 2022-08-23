const Intern = require("../lib/intern");

describe("intern", () => {
    it("should return a new intern object", () => {
      
    // Arrangement
      const internTest = new Intern();
    // Assertion
      expect(typeof(internTest)).toBe("object");
    });
    
    it("should return an intern with a School object property", () => {
      // Arrangement
        const school = "MIT";
      //Action
        const internTest = new Intern("Juan José", "1", "juan@gmail.com", school);
      // Assertion
        expect(internTest.school).toBe(school);
      });
    
    it("tests the getSchool method, which returns the school of the intern", () => { 
      // Arrangement
        const internTest = new Intern("Juan José", "1", "juan@gmail.com", "MIT");
      // Assertion
        expect(internTest.getSchool()).toBe("MIT");
      });

    it("tests the getRole method, which returns *Intern* ", () => { 
      // Arrangement
        const internTest = new Intern("Juan José", "1", "juan@gmail.com", "MIT");
      // Assertion
        expect(internTest.getRole()).toBe("Intern");
      });


});