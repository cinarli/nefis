


$(document).ready(function() {
    AOS.init({
    duration: 1000
    });
    //slide css
    var h = window.innerHeight;
    var img=h-110;
    $('#carouselExampleIndicators > .carousel-inner').height(img)
    // leaflet js map
  var mymap = L.map('mapid').setView([40.8376221,46.0345629], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiY2luYXJsaSIsImEiOiJjamU5c3RreGQwbnFnMnlxaGV4OTI2Mzl0In0.LAPrzDwr6xzY79m3jTKy5Q'
  }).addTo(mymap);

  var marker = L.marker([40.8376221,46.0345629]).addTo(mymap);

  /* top scrool*/
  // Script from W3 Schools  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("to-top").style.display = "block";
    } else {
      document.getElementById("to-top").style.display = "none";
    }
  }

  

//slider
  $("#content-slider").lightSlider({
        loop:true,
        keyPress:true,
        item:5
    });
    $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:true,
        loop:true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
      

});