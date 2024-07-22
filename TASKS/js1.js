var test = 1;
var table; 

function addData() {
    if (test == 1) {
        test = 2;
        table = document.createElement("table"); 
        var headerRow = document.createElement("tr");

        var nameHeader = document.createElement("th");
        nameHeader.textContent = "NAME";
        headerRow.appendChild(nameHeader);

        var rollNoHeader = document.createElement("th");
        rollNoHeader.textContent = "ROLL NO";
        headerRow.appendChild(rollNoHeader);

        var departmentHeader = document.createElement("th");
        departmentHeader.textContent = "DEPARTMENT";
        headerRow.appendChild(departmentHeader);

        var cgpaHeader = document.createElement("th");
        cgpaHeader.textContent = "CGPA";
        headerRow.appendChild(cgpaHeader);

        var updateHeader = document.createElement("th");
        updateHeader.textContent = "UPDATE BUTTON";
        headerRow.appendChild(updateHeader);

        var deleteHeader = document.createElement("th");
        deleteHeader.textContent = "DELETE BUTTON";
        headerRow.appendChild(deleteHeader);
        
        table.appendChild(headerRow);
        document.body.appendChild(table);
    } else {
        var name = prompt("Enter NAME:");
        var rollNo = prompt("Enter ROLL NO:");
        var department = prompt("Enter DEPARTMENT:");
        var cgpa = prompt("Enter CGPA:");

        var newRow = document.createElement("tr");
    
        var nameCell = document.createElement("td");
        nameCell.textContent = name;
        var rollNoCell = document.createElement("td");
        rollNoCell.textContent = rollNo;
        var departmentCell = document.createElement("td");
        departmentCell.textContent = department;
        var cgpaCell = document.createElement("td");
        cgpaCell.textContent = cgpa;

        var updateCell = document.createElement("td");
        var updatebuttton = document.createElement("button")
        updatebuttton.textContent = "UPDATE";
        updateCell.appendChild(updatebuttton); 
        updatebuttton.onclick = function() {
            var name = prompt("Enter new NAME:");
            var rollNo = prompt("Enter new ROLL NO:");
            var department = prompt("Enter new DEPARTMENT:");
            var cgpa = prompt("Enter new CGPA:");
        
            newRow.cells[0].textContent = name;
            newRow.cells[1].textContent = rollNo;
            newRow.cells[2].textContent = department;
            newRow.cells[3].textContent = cgpa;
        };

        var deleteCell = document.createElement("td");
        var deletebutton = document.createElement("button")
        deletebutton.textContent = "DELETE";
        deleteCell.appendChild(deletebutton);
        deletebutton.onclick= function() {
            var row = newRow;
            row.parentNode.removeChild(row);
        }

        newRow.appendChild(nameCell);
        newRow.appendChild(rollNoCell);
        newRow.appendChild(departmentCell);
        newRow.appendChild(cgpaCell);
        newRow.appendChild(updateCell);
        newRow.appendChild(deleteCell);
        
        table.appendChild(newRow);
    }
}