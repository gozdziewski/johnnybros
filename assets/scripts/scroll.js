$(document).scroll(function(){
    var height =$("nav").height();

    if( $(this).scrollTop() > height){
        $("nav").css("background","#1E3066");
    }else{
        $("nav").css("background","transparent");
    }
});