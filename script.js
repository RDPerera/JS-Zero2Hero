var colorlist=new Array("#DAF7A6","#FFC300","#FF5733","#C70039","#900C3F","#581845");
var display=document.getElementById("display");
var delay=1;
document.write(display);
function colorChange(display,seconds)
{
    for(i=0;i<colorlist.length;i++)
    {
        display.style.backgroundColor=colorlist[i];
    }
}
colorChange(display,2)