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
    console.log(document.querySelectorAll('tr'));
    console.log(document.querySelectorAll('th'));
    // var col_arr []='tr';
}
