/**
 * The function creates a table with 5 rows and 5 columns, and fills each cell with a random number
 * between 0 and 50.
 */
function createTable(){
    let row,col;
    document.write(document.getElementById('nav').innerHTML);
    document.write("<table id='mytable' border='1px' width='100' height='100'>");
    for(row=0;row<5;row++)
    {   
        document.write("<tr>");
        for(col=0;col<5;col++)
        {
            console.log(col.toString())
            let id = row.toString()+col.toString();
            console.log(id);
            document.write("<th id="+ id +">" +Math.floor(Math.random()*50)+ "</th>");
        }
        document.write("</tr>");
    }
    document.write("</table>")
}


function change(){
    //console.log(document.querySelectorAll('tr'));
    //console.log(document.querySelectorAll('th'));
    // var col_arr []='tr';

    //var table = $("#table")[0];
//var cell = table.rows[1].cells[1]; // This is a DOM "TD" element
//var $cell = $(cell); // Now it's a jQuery object.
//console.log($cell);

//et id = row.toString()+col.toString();
            //console.log(id);

    //var zishan="row"; 
    var ro=document.getElementById(zishan).value-1;
    var co=document.getElementById("column").value-1;
    var va=document.getElementById("value").value;
    console.log(va);
    document.getElementById(ro+""+co).innerHTML=va;

}

function sum(){
    var table = document.getElementById("mytable");
    //document.write("<br>");
    // console.log(document.querySelectorAll('tr'));
    // console.log(document.querySelectorAll('th'));
        // var table = document.getElementById("nav");
        // var cell = table.rows[0].cells[0]+table.rows[0].cells[1]+table.rows[0].cells[2]+table.rows[0].cells[3]+table.rows[0].cells[4];
        // console.log(cell);

        var row,col;
    //document.write(document.getElementById('nav').innerHTML);
   // document.write("<table border='1px' width='100' height='100'>");
    for(trow=0;trow<5;trow++)
    {   
        var sum = 0;
        for(tcol=0;tcol<5;tcol++)
        {
            //console.log(col.toString())
           // let id = row.toString()+col.toString();
           // console.log(id);
           // document.write("<th id="+ id +">" +Math.floor(Math.random()*50)+ "</th>");
           
           var test =document.getElementById(trow+""+tcol).innerText;
           sum=parseInt(test)+sum;
        //    document.write("<th">+sum+"</th>");
           //console.log(test);

        }
        var cell = table.rows[trow].insertCell(-1);
        console.log(sum);
        cell.innerHTML = sum;
        //document.write("<td>"+sum+"</td>");
        //document.write("<td>"+sum+"</td>");
    }

    var newRow = table.insertRow(-1);
    for(tcol=0;tcol<5;tcol++)
    {   
        var cell=newRow.insertCell(tcol);
        var sum = 0;
        for(trow=0;trow<5;trow++)
        {
           var test =document.getElementById(trow+""+tcol).innerText;
           sum=parseInt(test)+sum;
        }
        console.log(sum);
        cell.innerHTML = sum;
    }

}
