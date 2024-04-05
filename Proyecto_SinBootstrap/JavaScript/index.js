function aplicar() {
    document.getElementById("contenidos").style.borderColor ='black' //con document.getElementId
}
function quitar() {
    this.style.borderColor='grey' //con this
}
window.onload = function(){
    document.getElementById("contenidos").onmouseover = aplicar; // cuando se toca con el mouse
    document.getElementById("contenidos").onmouseout = quitar; // cuando el mouse sale
}

$(document).ready(function(){

    $(".hide").hide(5000);
    $(".hide").css(
        "color", '#212121');
    $(".hide").css(
        "text-align", "center"
    );
    $(".hide").css(
        " font-family", 'Franklin Gothic Medium'
    );
    $("h1").hover(function(){
        $(this).css('color','black')
    })
    $("#info").hover(function(){
        $(this).css('color','black')
    })
    $("figcaption").hover(function(){
        $(this).css('color','black')
    })
});
