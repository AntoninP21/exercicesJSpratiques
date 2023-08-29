debugger;
let dash = document.getElementById("evenement");
let mouseEnter = dash.addEventListener('mouseenter',function(){
        dash.style.border = "5px dotted orange"
        
    });
    let mouseLeave = dash.addEventListener('mouseleave',function(){
        dash.style.border = "none"
        
    });