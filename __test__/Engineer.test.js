const Engineer = require("../lib/engineer");

describe("engineer", () => {
    it("should return an engineer object", () => {
      // Arrangement
        const engineerTest = new Engineer();
      // Assertion
        expect(typeof(engineerTest)).toBe("object");
      });

    it("should return an engineer with a GitHub object property", () => {
      // Arrangement
        const gitHub = "jcuetos97";
      //Action
        const engineerTest = new Engineer("Juan José", "1", "juan@gmail.com",gitHub);
      // Assertion
        expect(engineerTest.gitHub).toBe(gitHub);
      });
    
    it("tests the getGitHub method, which returns the GitHub username of the engineer", () => { 
      // Arrangement
      const gitHub = "jcuetos97";
      //Action
        const engineerTest = new Engineer("Juan José", "1", "juan@gmail.com",gitHub);
      // Assertion
          expect(engineerTest.getGitHub()).toBe(gitHub);
      });

    it("tests the getRole method, which returns *Engineer* ", () => { 
      // Arrangement
          const engineerTest = new Engineer("Juan José", "1", "juan@gmail.com","jcuetos97");
      // Assertion
          expect(engineerTest.getRole()).toBe("Engineer");
      });
});