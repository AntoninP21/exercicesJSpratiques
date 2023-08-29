debugger;

window.addEventListener("mousemove", logKey);

function logKey(e) {
    
    if(e.clientY<15){
        alert("Vous quittez la fenêtre.")
    }
};