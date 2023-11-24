function submitForm(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Display form data on a new page
    displayFormData(firstName, lastName, email, password);
}

function displayFormData(firstName, lastName, email, password) {
    // Create a new HTML page to display form data
    const formDataPage = `
        <html>
        <head>
            <title>Form Data</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="container">
                <h2>Form Data</h2>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Password:</strong> ${password}</p>
            </div>
        </body>
        </html>
    `;

    // Open a new window to display the form data
    const newWindow = window.open();
    newWindow.document.write(formDataPage);
}



function toggleDescription(button) {
    const item = button.parentNode;
    const fullDescription = item.querySelector(".full-description");

    // Toggle the visibility of the full description
    fullDescription.classList.toggle("hidden");

    // Change the button text based on the visibility state
    if (fullDescription.classList.contains("hidden")) {
        button.innerText = "Read more";
    } else {
        button.innerText = "Read less";
    }
}





function addStudent() {
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    // Create a new row in the table
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    
    // Insert cells with student details
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = grade;
    cell4.innerHTML = `<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>`;
     // Clear the form
     document.getElementById('studentForm').reset();
    }
    
    function deleteStudent(button) {
        // Get the selected row and delete it
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
    
    function editStudent(button) {
        // Get the selected row
        const row = button.parentNode.parentNode;
    
        // Fill the edit form with the values of the selected row
        document.getElementById('editName').value = row.cells[0].innerText;
        document.getElementById('editAge').value = row.cells[1].innerText;
        document.getElementById('editGrade').value = row.cells[2].innerText;
    
        // Display the edit form
        document.getElementById('editForm').classList.remove('hidden');
    }
    
    function saveEdit() {
        // Get values from the edit form
        const editedName = document.getElementById('editName').value;
        const editedAge = document.getElementById('editAge').value;
        const editedGrade = document.getElementById('editGrade').value;
    
        // Update the selected row with edited values
        const table = document.getElementById('studentTable');
        const selectedRow = table.querySelector('.selected');
        selectedRow.cells[0].innerText = editedName;
        selectedRow.cells[1].innerText = editedAge;
        selectedRow.cells[2].innerText = editedGrade;
    
        // Hide the edit form
        document.getElementById('editForm').classList.add('hidden');
    }
    
    document.getElementById('studentTable').addEventListener('click', function(event) {
        // Deselect the previously selected row
        const previouslySelectedRow = document.querySelector('.selected');
        if (previouslySelectedRow) {
            previouslySelectedRow.classList.remove('selected');
        }
    
        // Select the clicked row
        const clickedRow = event.target.parentNode.parentNode;
        clickedRow.classList.add('selected');
    });