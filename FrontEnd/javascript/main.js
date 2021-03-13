

var count =  0 ;
var check = false ;
$(".time").removeClass("selecte")
$("#def").addClass("selecte")
sessionStorage.setItem("time" , "02:45 PM")
sessionStorage.setItem("seat" , 10)
for(var i = 0 ; i < document.querySelectorAll(".rowbox").length ; i++){
document.querySelectorAll(".rowbox")[i].addEventListener("click" , function(){
   if(this.classList[1] == "selecte"){
      this.classList.toggle("selecte") ;
          count-- ;       
      }
     else if(sessionStorage.getItem("seat") >= count ){
        this.classList.add("selecte") ;
        count++ ;
     }
     else{
      alert("Maximum 10 seats are allowed to book by one user")
   }
   if(count >= 1){
      $("#fr").addClass("show")
   }
   else{
    $("#fr").removeClass("show")
   } 
     
});
}

for( i = 0 ; i < document.querySelectorAll(".rowbox2").length ; i++){
  
   document.querySelectorAll(".rowbox2")[i].addEventListener("click" , function(){
      if(this.classList[1] == "selecte"){
         this.classList.toggle("selecte") ;
             count-- ;       
         }
        else if(sessionStorage.getItem("seat") >= count ){
         console.log(this.classList)
           this.classList.add("selecte") ;
           count++ ;
        }
        else{
           alert("Maximum 10 seats are allowed to book by one user")
        }
        if(count >= 1){
         $("#fr").addClass("show")
      }
      else{
       $("#fr").removeClass("show")
      }
        
        
   });
   }


$(".time").click(function(){
   $(".time").removeClass("selecte")
   this.classList.toggle("selecte")
   sessionStorage.setItem("time" , this.innerHTML)

});


   function ldDetails() {
      var d = new Date();
      var n = d.getMonth()+1;
       n = ("0"+   d.getDate()).slice(-2)+ "/" + n  ;
       n += "/"+   d.getFullYear() ;
      
      document.getElementById('date').innerHTML = n;
      var T = new Date();
      var Tim = T.toLocaleTimeString();
      document.getElementById('time').innerHTML = Tim;
      document.getElementsByClassName("mn")[0].innerHTML = sessionStorage.getItem("mn");
      document.getElementsByClassName("tn")[0].innerHTML = sessionStorage.getItem("theatreName");
   }


$("document").ready(function(){
    $("form").submit(function(){
   
var Email = $("input").val()
var movName = sessionStorage.getItem("mn")
var st = sessionStorage.getItem("time")
var dt = sessionStorage.getItem("dat")
var theatreName = sessionStorage.getItem("theatreName")
var totSeats = count 

var js = {
   mailId : Email ,
   movieName : movName,
   showTime : st,
   date : dt,
   theatre : theatreName,
   seat : totSeats
}

    var data = $.ajax({
        url : "http://localhost:8080/user/register" ,
        method: 'POST',
        dataType: 'json',
        data: js,
        success: function(data , status) {
          console.log(data.mailId) ;
         check = true 
        },
        async :false 

});
   alert("Your movie booked you will recieve an email")
   return check ;
    });
     
});