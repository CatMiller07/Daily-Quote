$(document).ready(function(){
    function getQuotes(){
       
        $.ajax({
                method:"POST",
                   url:"http://www.swolebrain.com:4004/quote",
               success:function(res){
                   $(".quotebx").html("");
                   $("h2").html("");
                   $("h2").html("Topic: "+res.topic);
                   $(".quotebx").html("<p>"+res.quote+"<br>"+"....."+res.author+"</p>");
                   
               },
                 error:function(res){
                       alert("you goofed!!");
                   }
        })
        
    }; 
    
     //Initialization
    getQuotes();
    
    // Refresh Quotes when the button is pressed. 
    $(".btn").click(getQuotes);
});