$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});

function copy(any) {

  if (any === 'email'){
    var textToCopy = "900177364";

    var tempInput = document.createElement("input");
  
    tempInput.value = textToCopy;
  
    document.body.appendChild(tempInput);
  
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
  
    document.execCommand("copy");
  
    document.body.removeChild(tempInput);
  
    alert("Copied the text: " + textToCopy);
  }
  if (any === 'phone'){
    var textToCopy = 815495638;

    var tempInput = document.createElement("input");
  
    tempInput.value = textToCopy;
  
    document.body.appendChild(tempInput);
  
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
  
    document.execCommand("copy");
  
    document.body.removeChild(tempInput);
  
    alert("Copied the text: " + textToCopy);
  }
  if (any === 'map'){
    var textToCopy = 800563819;

    var tempInput = document.createElement("input");
  
    tempInput.value = textToCopy;
  
    document.body.appendChild(tempInput);
  
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
  
    document.execCommand("copy");
  
    document.body.removeChild(tempInput);
  
    alert("Copied the text: " + textToCopy);
  }
}


