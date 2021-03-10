function menusee() {
    document.getElementById("hideme").style.display="none";
    document.getElementById("menu").style.display="inline-block"
}

function request() {
    document.getElementById("hideme").style.display="none";
    document.getElementById("menu").style.display="none"
    document.getElementById("hideme2").style.display="inline-block"

}

function goback() {
    document.getElementById("hideme").style.display="none";
    document.getElementById("menu").style.display="inline-block"
    document.getElementById("hideme2").style.display="none"  

    window.alert("Your order has been placed. It will be ready to be picked up in 15 minutes." ) 
}