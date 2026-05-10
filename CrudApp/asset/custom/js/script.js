document.addEventListener("DOMContentLoaded", function () {

    const fullname = document.getElementById("fullname");
    const Scode = document.getElementById("scode");
    const course = document.getElementById("course");

    const studentlist = document
        .getElementById("studentlist")
        .querySelector("tbody");

    const form = document.querySelector("form");

    let selectedRow = null;

    // Load saved students
    displayStudents();

    // FORM SUBMIT
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (
            fullname.value.trim() === "" ||
            Scode.value.trim() === "" ||
            course.value.trim() === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        const studentData = {
            fullname: fullname.value.trim(),
            Scode: Scode.value.trim(),
            course: course.value.trim(),
        };

        if (selectedRow == null) {
            addStudent(studentData);
        } else {
            updateStudent(studentData);
        }

        resetForm();
    });

    // ADD STUDENT
    function addStudent(data) {

        let students = JSON.parse(localStorage.getItem("students")) || [];

        students.push(data);

        localStorage.setItem("students", JSON.stringify(students));

        displayStudents();
    }

    // DISPLAY STUDENTS
    function displayStudents(filteredStudents = null) {


        studentlist.innerHTML = "";

        let students =filteredStudents ||JSON.parse(localStorage.getItem("students")) ||[];
     if(products.length === 0){
        let row = `
            <tr>
                 <td colspan="5" style="text-align:center; color:red; font-size:18px;">
                    No Data Found
                </td>
            </tr>
        `;
        tbody.innerHTML = row;
        return;
     }
        students.forEach((student, index) => {

            const row = studentlist.insertRow();

            row.insertCell(0).textContent = student.fullname;
            row.insertCell(1).textContent = student.Scode;
            row.insertCell(2).textContent = student.course;

            let actionCell = row.insertCell(3);

            // EDIT BUTTON
            const editBtn = document.createElement("span");
            editBtn.textContent = "Edit";
            editBtn.classList.add("btn");
            editBtn.addEventListener("click", () => onEdit(newRow));  // Passed row instead of td

            const deleteBtn = document.createElement("span");
            deleteBtn.textContent = "Delete";  // Fixed: text should be for the delete button
            deleteBtn.classList.add("btn","d-btn");
            deleteBtn.addEventListener("click", () => onDelete(newRow)); 

            actionCell.appendChild(editBtn);
            actionCell.appendChild(deleteBtn);
        });
    }

    // EDIT
    function onEdit(index) {

        let students = JSON.parse(localStorage.getItem("students")) || [];

        selectedRow = index;

        fullname.value = students[index].fullname;
        Scode.value = students[index].Scode;
        course.value = students[index].course;
    }

    // UPDATE
    function updateStudent(data) {

        let students = JSON.parse(localStorage.getItem("students")) || [];
        students[selectedRow] = data;
        localStorage.setItem("students", JSON.stringify(students));
        selectedRow = null;

        displayStudents();
    }

    // DELETE
    function onDelete(index) {

        if (confirm("Are you sure?")) {

            let students = JSON.parse(localStorage.getItem("students")) || [];

            students.splice(index, 1);
            localStorage.setItem("students", JSON.stringify(students));
            displayStudents();
            resetForm();
        }
    }

    // RESET FORM
    function resetForm() {
        fullname.value = "";
        Scode.value = "";
        course.value = "";
    }

    // SEARCH
    document.getElementById("searchInput").addEventListener("keyup", searchStudents);

    function searchStudents() {
        let value = document.getElementById("searchInput").value.toLowerCase();
        let students =JSON.parse(localStorage.getItem("students")) || [];

        let filtered = students.filter(student => student.fullname.toLowerCase().includes(value) ||
            student.Scode.toLowerCase().includes(value) ||student.course.toLowerCase().includes(value));

        displayStudents(filtered);
    }

});
