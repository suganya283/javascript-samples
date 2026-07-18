function getStudent() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                id: 101,
                name: "Suganya",
                course: "JavaScript"
            });
        }, 2000);

    });
}

async function displayStudent() {
    console.log("Loading student details...");

    const student = await getStudent();

    console.log(student);
}

displayStudent();