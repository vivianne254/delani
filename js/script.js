// Javascript
var customerMessage = [];

function showCustomerMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("textarea").value;

    if (name && email && message) {
        customerMessage.push(name, email, message);
        return name;
    }
}
$("#button").click(function() {
    if (showCustomerMessage()) {
        $("#message-alert").text("Hi " + showCustomerMessage() + ", \nThank you for reaching out to us, we will respond as soon as possible.");
        $("#message-alert").addClass("alert-success");
        $("#message-alert").removeClass("alert-danger");
        $("#message-alert").show();
    } else {
        $("#message-alert").text("Please fill in all fields");
        $("#message-alert").removeClass("alert-success");
        $("#message-alert").addClass("alert-danger");
        $("#message-alert").show();
    }


});
        
            
    
    
    
    
    
    
    //function to toggle between the icons and the text
    $(document).ready(function(){
        
        $(".btn_1").click(function(){ 
            $("p.par_1").show();
            $(".btn_1").hide(); 
        });
        $("p.par_1").click(function(){
            $("p.par_1").hide();
            $(".btn_1").show(); 
        });
         $(".btn_2").click(function(){
             $("p.par_2").show();   
             $(".btn_2").hide();
         });
         $("p.par_2").click(function(){
             $("p.par_2").hide();
             $(".btn_2").show();
         });
         $(".btn_3").click(function(){
             $("p.par_3").show();   
             $(".btn_3").hide();
         });
         $("p.par_3").click(function(){
             $(".btn_3").show();
             $("p.par_3").hide();
         }); 
      });

$("#portfolio1").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#portfolio2").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});  
    
$("#portfolio3").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#portfolio4").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#portfolio5").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});
$("#portfolio6").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#portfolio7").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

$("#portfolio8").hover(function() {
    console.log("blur")
    $("this").addClass("blur");
});

