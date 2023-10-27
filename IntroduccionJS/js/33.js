// Fetch API
async function getEmployees () {

    const file = 'employees.json';


    // fetch(file)
    //     .then( result => result.json())
    //     .then( data => {
    //         //console.log(data.employees);

    //         const {employees} = data;
    //         // console.log(employees);

    //         employees.forEach(employee => {
    //             // console.log(employee);
                
    //         });
    //     })
    const result = await fetch(file);
    const data = await result.json();
    console.log(data);
}
getEmployees();