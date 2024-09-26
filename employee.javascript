document.getElementById('employee-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const employeeId = document.getElementById('employee-id').value;
    const profilePicture = document.getElementById('profile-picture').value;

    // Add employee to the list
    const list = document.getElementById('employee-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = <a href="mailto:${email}">${name}</a>;
    list.appendChild(listItem);

    // Add employee details to the table
    const table = document.getElementById('employee-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const idCell = newRow.insertCell(1);
    const departmentCell = newRow.insertCell(2);
    const profileCell = newRow.insertCell(3);

    nameCell.innerHTML = name;
    idCell.innerHTML = employeeId;
    departmentCell.innerHTML = department;
    profileCell.innerHTML = <img src="${profilePicture}" alt="Profile Picture" width="50">;

    // Clear the form
    document.getElementById('employee-form').reset();
});
