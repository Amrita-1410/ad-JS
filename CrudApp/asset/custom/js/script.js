// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const fullname = document.getElementById("fullname");
    const Scode = document.getElementById("scode");
    const course = document.getElementById("course");
    const studentlist = document.getElementById("studentlist").querySelector("tbody");

    const form = document.querySelector("form");

    let selectedRow = null;

    // Attach the submit event listener to the form
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        onFormSubmit();
    });

    const onFormSubmit = () => {
        if (!fullname.value.trim() || !Scode.value.trim() || !course.value.trim()) {
            alert("Please fill the fields");
            return;
        }
        const formData = readFormData();

        if (selectedRow === null) {
            insertData(formData);
        } else {
            updateData(formData);
        }
        resetForm();
    };

    const readFormData = () => {
        return {
            fullname: fullname.value.trim(),
            Scode: Scode.value.trim(),
            course: course.value.trim(),
        };
    };

    const insertData = (data) => {
        const newRow = studentlist.insertRow();

        let cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fullname;

        let cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Scode;

        let cell3 = newRow.insertCell(2);  // Fixed to insert into the correct cell
        cell3.innerHTML = data.course;  // Fixed the mistake of inserting into cell2

        let cell4 = newRow.insertCell(3);

        const editBtn = document.createElement("span");
        editBtn.textContent = "Edit";
        editBtn.classList.add("btn");
        editBtn.addEventListener("click", () => onEdit(newRow));  // Passed row instead of td

        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "Delete";  // Fixed: text should be for the delete button
        deleteBtn.classList.add("btn","d-btn");
        deleteBtn.addEventListener("click", () => onDelete(newRow));  // Passed row instead of td

        cell4.appendChild(editBtn);
        cell4.appendChild(deleteBtn);
    };

    const resetForm = () => {
        fullname.value = "";
        Scode.value = "";
        course.value = "";
        selectedRow = null;
    };

    const onEdit = (row) => {
        selectedRow = row;
        fullname.value = selectedRow.cells[0].textContent;
        Scode.value = selectedRow.cells[1].textContent;
        course.value = selectedRow.cells[2].textContent;
    };

    const updateData = (formData) => {
        selectedRow.cells[0].textContent = formData.fullname;
        selectedRow.cells[1].textContent = formData.Scode;
        selectedRow.cells[2].textContent = formData.course;
        selectedRow = null;
    };

    const onDelete = (row) => {
        if (confirm("Are you sure?")) {
            row.remove();
            resetForm();
        }
    };
});