$(document).ready(function() {
    
    $("body").css("display", "none");

    $("body").fadeIn(2000);
    
    $("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);      
    });

    $("html").css("background-color",  "linear-gradient(to right, #13CBE6, #0A656E)");
        
    function redirectPage() {
        window.location = linkLocation;
    }
    
});
