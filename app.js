$.getJSON('http://data.seattle.gov/api/views/3k2p-39jp/rows.json?jsonp=?&max_rows=25', function(results) {
  
  console.log(results.data);
  
  $.each(results.data, function(i, value) {
    console.log(results['data'][i][16]);
  });
});




var map = L.map('map').setView([47.6097, -122.3331], 12);

L.tileLayer('http://{s}.tile.cloudmade.com/61d2e95f748e4d1da82b12d461f5174e/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

