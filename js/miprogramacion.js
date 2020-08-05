$(document).ready(function() {
    $("#adultos").click(function(){
        $("#centro").load("adultos.html");
    });
    $("#ninos").click(function(){
        $("#centro").load("ninos.html");
    });
    $("#babyshower").click(function(){
        $("#centro").load("babyshower.html");
    });
});