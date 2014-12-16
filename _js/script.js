jQuery(document).ready(function($) {
  $('#counter').countdown({
    image: '/_img/digits.png',
    startTime: '01:12:12:00'
  });

  function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(57.761174, 40.957700)
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var image = '/_img/map.png';
    var myLatLng = new google.maps.LatLng(57.761174, 40.957700);
    var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
  }
  new jBox('Image');
  $('#projects_tabs ul').on('click', 'li', function(event) {
    $('#projects_tabs ul li.active').removeClass('active');
    $(this).addClass('active');
    $('#images .tabs.active').removeClass('active')
    $('#images .tabs[data-prj=' + $(this).attr('id')).addClass('active');
  });
  $('.links ul').on('click', 'li', function(event) {
    $('#projects_tabs ul li#' + $(this).data('prj')).click();
  });
  google.maps.event.addDomListener(window, 'load', initialize);
});