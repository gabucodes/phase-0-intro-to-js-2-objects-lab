const employee = {
    name: "gabu",
    streetAddress: "juja",
}
function updateEmployeeWithKeyAndValue(employee, name, gabu) {
return { ...employee,[name] :gabu}
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, gabu) {
    employee[name] = gabu
return employee
}
function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = { ...employee }; // Clone the employee object
    delete newEmployee[name]; // Delete the key from the cloned object
    return newEmployee; // Return the new object
  }
  
  // Function that deletes a key directly from the original object (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name]; // Modify the original object
    return employee; // Return the modified object
  }
