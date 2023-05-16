/**
 * The function creates a table with 5 rows and 5 columns, and fills each cell with a random number
 * between 0 and 50.
 */
function createTable(){
    let row,col;
    var tableContent = "";

    for(row=0;row<5;row++)
    {   
        tableContent+="<tr>";
        for(col=0;col<5;col++)
        {
            let id = row.toString()+col.toString();
            tableContent+="<th id="+ id +">" +Math.floor(Math.random()*50)+ "</th>";
        }
        tableContent+="</tr>";
    }
    document.getElementById("tbodyid").innerHTML=tableContent;
}


function change(){
    var ro=document.getElementById("row").value-1;
    var co=document.getElementById("column").value-1;
    var va=document.getElementById("value").value;
    document.getElementById(ro+""+co).innerHTML=va;
}

function sum(){
    var table = document.getElementById("mytable");

    for(var trow=0;trow<5;trow++)
    {   
        var sum = 0;
        for(var tcol=0;tcol<5;tcol++)
        {
           var test =document.getElementById(trow+""+tcol).innerText;
           sum=parseInt(test)+sum;

        }
        var cell = table.rows[trow].insertCell(-1);
        console.log(sum);
        cell.innerHTML = sum;
    }

    var newRow = table.insertRow(-1);
    for(var tcol=0;tcol<5;tcol++)
    {   
        var cell=newRow.insertCell(tcol);
        var sum = 0;
        for(var trow=0;trow<5;trow++)
        {
           var test =document.getElementById(trow+""+tcol).innerText;
           sum=parseInt(test)+sum;
        }
        console.log(sum);
        cell.innerHTML = sum;
    }

}
