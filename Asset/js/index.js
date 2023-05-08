/**
 * The function creates a table with 5 rows and 5 columns, and fills each cell with a random number
 * between 0 and 50.
 */
function createTable(){
    let row,col;
    document.write(document.getElementById('nav').innerHTML);
    document.write("<table border='1px' width='100' height='100'>");
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

    var ro=document.getElementById("row").value-1;
    var co=document.getElementById("column").value-1;
    var va=document.getElementById("value").value;
    console.log(va);
    document.getElementById(ro+""+co).innerHTML=va;

}

function sum(){
    // console.log(document.querySelectorAll('tr'));
    // console.log(document.querySelectorAll('th'));
        var table = document.getElementById("nav");
        var cell = table.rows[0].cells[0]+table.rows[0].cells[1]+table.rows[0].cells[2]+table.rows[0].cells[3]+table.rows[0].cells[4];
        console.log(cell);
}
