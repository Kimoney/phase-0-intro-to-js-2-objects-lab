// Write your solution in this file!

const employee = {
    name: "Kimani",
    streetAddress: 'Nairobi'
}

// non destructive update of properties

function updateEmployeeWithKeyAndValue(employee){
    let newUpdate = {...employee};

    newUpdate.name = 'Sam';
    newUpdate.streetAddress = '11 Broadway';

    return newUpdate;
}

// destructive update of properties

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee
}

//  destroy a key from a clone of the object employee

function deleteFromEmployeeByKey(){
    let clone = {...employee};
    delete clone.name;
    delete clone.streetAddress;
    return clone;
}

//  destroy a key destructively from the object employee

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}