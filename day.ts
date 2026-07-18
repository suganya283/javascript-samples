// Define an Enum
enum Role {
    Admin,
    Manager,
    Employee
}

// Function that accepts an enum value
function displayRole(role: Role): void {

    switch (role) {

        case Role.Admin:
            console.log("Welcome Admin");
            break;

        case Role.Manager:
            console.log("Welcome Manager");
            break;

        case Role.Employee:
            console.log("Welcome Employee");
            break;

        default:
            console.log("Invalid Role");
    }
}

// Function calls
displayRole(Role.Admin);
displayRole(Role.Manager);
displayRole(Role.Employee);