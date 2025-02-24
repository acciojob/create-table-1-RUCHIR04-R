document.getElementById("insertBtn").addEventListener("click", function() {
    
    var table = document.getElementById("myTable");
    
    var newRow = table.insertRow(0);
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
});