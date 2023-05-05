function input() {
    var y = document.getElementById("type")
    if ( y.type==="password"){
        y.type="text"
    }
    else{
        y.type="password";
    }
}