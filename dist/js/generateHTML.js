const html = [];

// Function generates HTML structure for Manager Profile Card
function createManager (manager) {
    return `
    <section class="container-cards">
        <section class="card">
            <div class="card-heading"> 
                <h1>${manager.getName()}</h1>
                <h1><i class="fa-solid fa-mug-hot"></i> Manager</h1>
            </div>
            <div class="card-body">
                <ul>
                    <li>ID: ${manager.getId()}</li>
                    <li>Email: ${manager.getInfo()}</li>
                    <li>Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </section>
    </section>
    `
}

// Function generates HTML structure for Engineer Profile Card
function createEngineer (engineer) {
    return `
    <section class="container-cards">
        <section class="card">
            <div class="card-heading"> 
                <h1>${engineer.getName()}</h1>
                <h1><i class="fa-solid fa-glasses"></i> Engineer</h1>
            </div>
            <div class="card-body">
                <ul>
                    <li>ID: ${engineer.getId()}</li>
                    <li>Email: ${engineer.getInfo()}</li>
                    <li>GitHub: ${engineer.getGitHub()}</li>
                </ul>
            </div>
        </section>
    </section>
    `
    }

// Function generates HTML structure for Intern Profile Card
function createIntern (intern) {
return `
    <section class="container-cards">
        <section class="card">
            <div class="card-heading"> 
                <h1>${intern.getName()}</h1>
                <h1><i class="fa-solid fa-user-graduate"></i> Intern</h1>
            </div>
            <div class="card-body">
                <ul>
                    <li>ID: ${intern.getId()}</li>
                    <li>Email: ${intern.getInfo()}</li>
                    <li>School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </section>
    </section>
    `
}


// Function generates HTML structure
function generateHTML (companyStaff, companyName) {
    html.push(companyStaff
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager)))

    html.push(companyStaff
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer)))
    
    html.push(companyStaff
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern)))

    html.join("")    
    
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${companyName} Team Profile</title>
    <script src="https://kit.fontawesome.com/e601f25512.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="C:\Users\Juan Jo\TEC BOOTCAMP\Team Profile-Generator\dist\css\style.css">
</head>
<body>
    <header>
        <h1>${companyName} Team Profile</h1>
    </header>
    <section class="container-cards">
        ${html}
    </section>
</body>
</html>  
    `;
}

module.exports = generateHTML;




