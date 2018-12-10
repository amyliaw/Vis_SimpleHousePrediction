// Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
console.log(slider);
output.innerHTML = slider.value;
// Update slider value
slider.oninput = function() {
    output.innerHTML = slider.value;
}

// Predict Button >> Predict the result
function predictValue() { //predict value when press Predict button
  var url = "http://localhost:5000/project/status=1"

    var zip= document.getElementById("chooseZip").value;
    var year = document.getElementById("chooseYear").value;
    var bed = document.getElementById("chooseBed").value;
    var bath = document.getElementById("chooseBath").value;
    var sq = document.getElementById("myRange").value;
    min = 2
    max = 2
    newURL = url.concat("&sqft=").concat(sq).concat("&zipcode=").concat(zip).concat("&year=").concat(year).concat("&bedroom=").concat(bed).concat("&bathroom=").concat(bath).concat("&mi=").concat(0).concat("&ma=").concat(0).concat("&mis=").concat(0).concat("&mas=").concat(0)
    var result;
    if(bath == 0 | bed == 0){
      document.getElementById("predictvalue").innerHTML=0
    }else{
      d3.json(newURL, function (data) {
         document.getElementById("predictvalue").innerHTML=parseInt(data);
     });
   }
}

var map = L.map('map',{
    center: [47.64701, -122.00425],
    zoom: 8
    });

 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);


var a = [{"average": 676185.3921568628, "zipcode": 98177.0}, {"average": 310612.75572519086, "zipcode": 98178.0}, {"average": 423725.69506726455, "zipcode": 98155.0}, {"average": 645231.456445993, "zipcode": 98052.0}, {"average": 678163.0592592593, "zipcode": 98053.0}, {"average": 304262.1082089552, "zipcode": 98055.0}, {"average": 420890.54926108377, "zipcode": 98056.0}, {"average": 353608.63516483514, "zipcode": 98058.0}, {"average": 493552.53205128206, "zipcode": 98059.0}, {"average": 289078.3455882353, "zipcode": 98188.0}, {"average": 551688.6730038023, "zipcode": 98136.0}, {"average": 487479.6271186441, "zipcode": 98070.0}, {"average": 302878.8821428571, "zipcode": 98198.0}, {"average": 791820.807570978, "zipcode": 98199.0}, {"average": 569958.4652014652, "zipcode": 98072.0}, {"average": 685605.775510204, "zipcode": 98074.0}, {"average": 790576.6545961003, "zipcode": 98075.0}, {"average": 682774.8787878788, "zipcode": 98077.0}, {"average": 334921.0626780627, "zipcode": 98092.0}, {"average": 240328.3717472119, "zipcode": 98168.0}, {"average": 901258.2666666667, "zipcode": 98102.0}, {"average": 585085.465890183, "zipcode": 98103.0}, {"average": 862825.2314410481, "zipcode": 98105.0}, {"average": 319581.3940298507, "zipcode": 98106.0}, {"average": 579053.4172932331, "zipcode": 98107.0}, {"average": 355678.51612903224, "zipcode": 98108.0}, {"average": 879623.6238532111, "zipcode": 98109.0}, {"average": 1095499.342007435, "zipcode": 98112.0}, {"average": 619900.5471698113, "zipcode": 98115.0}, {"average": 618634.1696969697, "zipcode": 98116.0}, {"average": 576795.007233273, "zipcode": 98117.0}, {"average": 417637.43307086616, "zipcode": 98118.0}, {"average": 849448.0163043478, "zipcode": 98119.0}, {"average": 634360.1793103449, "zipcode": 98122.0}, {"average": 469455.77073170734, "zipcode": 98125.0}, {"average": 424706.3559322034, "zipcode": 98126.0}, {"average": 280804.6906077348, "zipcode": 98001.0}, {"average": 234284.0351758794, "zipcode": 98002.0}, {"average": 294111.27857142856, "zipcode": 98003.0}, {"average": 1355927.0820189274, "zipcode": 98004.0}, {"average": 386997.3967611336, "zipcode": 98133.0}, {"average": 859684.7791164658, "zipcode": 98006.0}, {"average": 616780.8357142857, "zipcode": 98007.0}, {"average": 645507.3780918728, "zipcode": 98008.0}, {"average": 423665.99, "zipcode": 98010.0}, {"average": 490351.4666666667, "zipcode": 98011.0}, {"average": 455617.1129032258, "zipcode": 98014.0}, {"average": 594547.6501457726, "zipcode": 98144.0}, {"average": 359483.2395833333, "zipcode": 98146.0}, {"average": 424788.74736842106, "zipcode": 98019.0}, {"average": 284908.5964912281, "zipcode": 98148.0}, {"average": 315709.30341880344, "zipcode": 98022.0}, {"average": 286732.79158316634, "zipcode": 98023.0}, {"average": 580526.7901234567, "zipcode": 98024.0}, {"average": 616990.5922330098, "zipcode": 98027.0}, {"average": 462480.035335689, "zipcode": 98028.0}, {"average": 612653.6105919003, "zipcode": 98029.0}, {"average": 296187.98046875, "zipcode": 98030.0}, {"average": 300539.8905109489, "zipcode": 98031.0}, {"average": 251296.24, "zipcode": 98032.0}, {"average": 803719.5231481482, "zipcode": 98033.0}, {"average": 521652.8587155963, "zipcode": 98034.0}, {"average": 366867.6, "zipcode": 98038.0}, {"average": 464231.8385826772, "zipcode": 98166.0}, {"average": 2160606.6, "zipcode": 98039.0}, {"average": 1194230.0212765958, "zipcode": 98040.0}, {"average": 311632.10583941604, "zipcode": 98042.0}, {"average": 527961.2032258065, "zipcode": 98065.0}, {"average": 439471.0814479638, "zipcode": 98045.0}, {"average": 810164.875, "zipcode": 98005.0}]
var zipcode_list = []
var price_list = []
for (var i = 0; i < a.length; i++) {
  zipcode_list.push(a[i].zipcode)
  price_list.push(a[i].average)
}

//d3.json("geo.json", function(json) {
//   L.geoJson(json, {style: style}).addTo(map);
//})

function getColor(zip) {
    var index = zipcode_list.indexOf(zip)
    if(index == -1){
        p = 0
    } else{
        var p = price_list[index]
    }
    return p > 800000 ? '#800026' :
           p > 700000 ? '#BD0026' :
           p > 600000 ? '#E31A1C' :
           p > 500000 ? '#FC4E2A' :
           p > 400000 ? '#FD8D3C' :
           p > 300000 ? '#FEB24C' :
           p > 200000 ? '#FED976' :
                            '#FFEDA0';
}

 function style(feature) {
    return {
      fillColor: getColor(feature.properties.ZIP),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

d3.json("geo.json", function(json) {
    geojson = L.geoJson(json, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);
})

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

function getPrize(zip) {
    var index = zipcode_list.indexOf(zip)
    if(index == -1){
        p = 0
    } else{
        var p = price_list[index]
    }
    return p
}

var legend = L.control({position: 'bottomright'});

function Color(p) {
    return p > 800000 ? '#800026' :
           p > 700000 ? '#BD0026' :
           p > 600000 ? '#E31A1C' :
           p > 500000 ? '#FC4E2A' :
           p > 400000 ? '#FD8D3C' :
           p > 300000 ? '#FEB24C' :
           p > 200000 ? '#FED976' :
                            '#FFEDA0';
}

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [200000, 300000, 400000, 500000, 600000, 700000, 800000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + Color(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Avg House Value Per Zipcode</h4>' +  (props ?
        '<b>'+ '</b>zipcode <b/>' + props.ZIP + '</b><br />' + getPrize(props.ZIP) + ' dollar (average price)'
        : 'Hover over a state');
};

info.addTo(map);


var markers = [];
var markersLayer = new L.LayerGroup(); 

var min_p = 75000
var max_p = 1000000
var min_s = 290
var max_s = 100000
function show_points(){
  var marker;
  var locationCoor = []; 
  url = "http://localhost:5000/project/status=4&sqft=2000&zipcode=98125&year=1920&bedroom=2&bathroom=2"
  url = url.concat("&mi=").concat(min_p).concat("&ma=").concat(max_p).concat("&mis=").concat(min_s).concat("&mas=").concat(max_s)
  console.log(url)
  d3.json(url, function(json) {
    for (var i = 0; i < json.data.length; i++) {
      sqft = json.data[i][0]
      zipcode = json.data[i][1]
      year = json.data[i][2]
      bedroom = json.data[i][3]
      bathroom = json.data[i][4]
      lat = json.data[i][5]
      lon = json.data[i][6]
      price = json.data[i][7]
      marker = L.marker([lat, lon], {
            clickable: true
        }).bindPopup("<b>House Price: </b>" + price + "<br><b>sqft: </b>" + sqft + "<br><b>bedrooms: </b>" + bedroom + "<br><b>bathrooms: </b>" + bathroom + "<br><b>zipcode: </b>" + zipcode );
      markersLayer.addLayer(marker);
    }
  }) 
  markersLayer.addTo(map);

}

function more(){
  markersLayer.clearLayers();
  show_points()
}

function clear_points(){
  markersLayer.clearLayers();
}

function show_similar(){
  var x = document.getElementsByTagName("tr")
  if(x.length > 1){
    while(x.length > 1){
      document.getElementById("myTable").deleteRow(1);
    }
  }
  var marker;
  var locationCoor = []; 
  min = 2
  max = 2
  var url = "http://localhost:5000/project/status=5"
  var zip= document.getElementById("chooseZip").value;
  var year = document.getElementById("chooseYear").value;
  var bed = document.getElementById("chooseBed").value;
  var bath = document.getElementById("chooseBath").value;
  var sq = document.getElementById("myRange").value;
  newURL = url.concat("&sqft=").concat(sq).concat("&zipcode=").concat(zip).concat("&year=").concat(year).concat("&bedroom=").concat(bed).concat("&bathroom=").concat(bath).concat("&mi=").concat(min).concat("&ma=").concat(max).concat("&mis=").concat(min_s).concat("&mas=").concat(min_s)
  d3.json(newURL, function(json) {
    var table = document.getElementById("myTable");
    for (var i = 0; i < json.data.length; i++) {
       var row = table.insertRow(i+1);
       row.onclick = function (a) {
          markersLayer.clearLayers()
          k = parseInt((a.y-82)/34)
          sqft = json.data[k][0]
          zipcode = json.data[k][1]
          year = json.data[k][2]
          bedroom = json.data[k][3]
          bathroom = json.data[k][4]
          lat = json.data[k][5]
          lon = json.data[k][6]
          price = json.data[k][10]
          marker = L.marker([lat, lon], {
                clickable: true
            }).bindPopup("<b>House Price: </b>" + price + "<br><b>sqft: </b>" + sqft + "<br><b>bedrooms: </b>" + bedroom + "<br><b>bathrooms: </b>" + bathroom + "<br><b>zipcode: </b>" + zipcode );
          markersLayer.addLayer(marker);
          markersLayer.addTo(map);
       };
       for (var j = 0; j < 9; j++) {
          var cell = row.insertCell(j)
          k = j
          if(j > 4){
            k = j + 2
          }
          cell.innerHTML = json.data[i][k]
       }
    }

    for (var i = 0; i < json.data.length; i++) {
      sqft = json.data[i][0]
      zipcode = json.data[i][1]
      year = json.data[i][2]
      bedroom = json.data[i][3]
      bathroom = json.data[i][4]
      lat = json.data[i][5]
      lon = json.data[i][6]
      price = json.data[i][10]
      marker = L.marker([lat, lon], {
            clickable: true
        }).bindPopup("<b>House Price: </b>" + price + "<br><b>sqft: </b>" + sqft + "<br><b>bedrooms: </b>" + bedroom + "<br><b>bathrooms: </b>" + bathroom + "<br><b>zipcode: </b>" + zipcode );
      markersLayer.addLayer(marker);
    }
  })
  markersLayer.addTo(map);
}

// brushing and linking 1
var data = [{"price": 2, "date": 75000}, {"price": 6, "date": 80000}, {"price": 5, "date": 85000}, {"price": 6, "date": 90000}, {"price": 6, "date": 95000}, {"price": 8, "date": 100000}, {"price": 8, "date": 105000}, {"price": 13, "date": 110000}, {"price": 11, "date": 115000}, {"price": 15, "date": 120000}, {"price": 15, "date": 125000}, {"price": 16, "date": 130000}, {"price": 21, "date": 135000}, {"price": 18, "date": 140000}, {"price": 23, "date": 145000}, {"price": 50, "date": 150000}, {"price": 33, "date": 155000}, {"price": 49, "date": 160000}, {"price": 49, "date": 165000}, {"price": 48, "date": 170000}, {"price": 71, "date": 175000}, {"price": 62, "date": 180000}, {"price": 67, "date": 185000}, {"price": 77, "date": 190000}, {"price": 107, "date": 195000}, {"price": 110, "date": 200000}, {"price": 125, "date": 205000}, {"price": 126, "date": 210000}, {"price": 155, "date": 215000}, {"price": 116, "date": 220000}, {"price": 175, "date": 225000}, {"price": 159, "date": 230000}, {"price": 173, "date": 235000}, {"price": 156, "date": 240000}, {"price": 222, "date": 245000}, {"price": 231, "date": 250000}, {"price": 204, "date": 255000}, {"price": 185, "date": 260000}, {"price": 235, "date": 265000}, {"price": 191, "date": 270000}, {"price": 250, "date": 275000}, {"price": 197, "date": 280000}, {"price": 215, "date": 285000}, {"price": 194, "date": 290000}, {"price": 232, "date": 295000}, {"price": 211, "date": 300000}, {"price": 203, "date": 305000}, {"price": 203, "date": 310000}, {"price": 225, "date": 315000}, {"price": 208, "date": 320000}, {"price": 275, "date": 325000}, {"price": 218, "date": 330000}, {"price": 234, "date": 335000}, {"price": 193, "date": 340000}, {"price": 218, "date": 345000}, {"price": 282, "date": 350000}, {"price": 223, "date": 355000}, {"price": 176, "date": 360000}, {"price": 186, "date": 365000}, {"price": 176, "date": 370000}, {"price": 244, "date": 375000}, {"price": 177, "date": 380000}, {"price": 187, "date": 385000}, {"price": 182, "date": 390000}, {"price": 236, "date": 395000}, {"price": 237, "date": 400000}, {"price": 160, "date": 405000}, {"price": 162, "date": 410000}, {"price": 226, "date": 415000}, {"price": 166, "date": 420000}, {"price": 262, "date": 425000}, {"price": 174, "date": 430000}, {"price": 235, "date": 435000}, {"price": 187, "date": 440000}, {"price": 189, "date": 445000}, {"price": 260, "date": 450000}, {"price": 169, "date": 455000}, {"price": 157, "date": 460000}, {"price": 178, "date": 465000}, {"price": 131, "date": 470000}, {"price": 201, "date": 475000}, {"price": 141, "date": 480000}, {"price": 150, "date": 485000}, {"price": 139, "date": 490000}, {"price": 189, "date": 495000}, {"price": 199, "date": 500000}, {"price": 104, "date": 505000}, {"price": 119, "date": 510000}, {"price": 155, "date": 515000}, {"price": 112, "date": 520000}, {"price": 206, "date": 525000}, {"price": 142, "date": 530000}, {"price": 171, "date": 535000}, {"price": 135, "date": 540000}, {"price": 151, "date": 545000}, {"price": 231, "date": 550000}, {"price": 108, "date": 555000}, {"price": 138, "date": 560000}, {"price": 133, "date": 565000}, {"price": 109, "date": 570000}, {"price": 156, "date": 575000}, {"price": 115, "date": 580000}, {"price": 137, "date": 585000}, {"price": 96, "date": 590000}, {"price": 122, "date": 595000}, {"price": 150, "date": 600000}, {"price": 104, "date": 605000}, {"price": 91, "date": 610000}, {"price": 103, "date": 615000}, {"price": 95, "date": 620000}, {"price": 138, "date": 625000}, {"price": 82, "date": 630000}, {"price": 108, "date": 635000}, {"price": 82, "date": 640000}, {"price": 89, "date": 645000}, {"price": 163, "date": 650000}, {"price": 81, "date": 655000}, {"price": 84, "date": 660000}, {"price": 83, "date": 665000}, {"price": 72, "date": 670000}, {"price": 113, "date": 675000}, {"price": 75, "date": 680000}, {"price": 86, "date": 685000}, {"price": 65, "date": 690000}, {"price": 89, "date": 695000}, {"price": 109, "date": 700000}, {"price": 55, "date": 705000}, {"price": 76, "date": 710000}, {"price": 82, "date": 715000}, {"price": 67, "date": 720000}, {"price": 99, "date": 725000}, {"price": 68, "date": 730000}, {"price": 67, "date": 735000}, {"price": 58, "date": 740000}, {"price": 63, "date": 745000}, {"price": 121, "date": 750000}, {"price": 38, "date": 755000}, {"price": 77, "date": 760000}, {"price": 57, "date": 765000}, {"price": 53, "date": 770000}, {"price": 83, "date": 775000}, {"price": 73, "date": 780000}, {"price": 46, "date": 785000}, {"price": 48, "date": 790000}, {"price": 70, "date": 795000}, {"price": 78, "date": 800000}, {"price": 46, "date": 805000}, {"price": 55, "date": 810000}, {"price": 45, "date": 815000}, {"price": 41, "date": 820000}, {"price": 67, "date": 825000}, {"price": 49, "date": 830000}, {"price": 45, "date": 835000}, {"price": 43, "date": 840000}, {"price": 35, "date": 845000}, {"price": 83, "date": 850000}, {"price": 38, "date": 855000}, {"price": 41, "date": 860000}, {"price": 37, "date": 865000}, {"price": 37, "date": 870000}, {"price": 52, "date": 875000}, {"price": 30, "date": 880000}, {"price": 31, "date": 885000}, {"price": 27, "date": 890000}, {"price": 47, "date": 895000}, {"price": 48, "date": 900000}, {"price": 27, "date": 905000}, {"price": 30, "date": 910000}, {"price": 24, "date": 915000}, {"price": 36, "date": 920000}, {"price": 47, "date": 925000}, {"price": 24, "date": 930000}, {"price": 30, "date": 935000}, {"price": 20, "date": 940000}, {"price": 17, "date": 945000}, {"price": 58, "date": 950000}, {"price": 16, "date": 955000}, {"price": 25, "date": 960000}, {"price": 23, "date": 965000}, {"price": 23, "date": 970000}, {"price": 35, "date": 975000}, {"price": 20, "date": 980000}, {"price": 22, "date": 985000}, {"price": 21, "date": 990000}, {"price": 37, "date": 995000}, {"price": 32, "date": 1000000}, {"price": 7, "date": 1005000}, {"price": 17, "date": 1010000}, {"price": 12, "date": 1015000}, {"price": 5, "date": 1020000}, {"price": 14, "date": 1025000}, {"price": 12, "date": 1030000}, {"price": 15, "date": 1035000}, {"price": 7, "date": 1040000}, {"price": 11, "date": 1045000}, {"price": 43, "date": 1050000}, {"price": 7, "date": 1055000}, {"price": 13, "date": 1060000}, {"price": 12, "date": 1065000}, {"price": 9, "date": 1070000}, {"price": 16, "date": 1075000}, {"price": 12, "date": 1080000}, {"price": 15, "date": 1085000}, {"price": 3, "date": 1090000}, {"price": 11, "date": 1095000}, {"price": 33, "date": 1100000}, {"price": 5, "date": 1105000}, {"price": 10, "date": 1110000}, {"price": 6, "date": 1115000}, {"price": 6, "date": 1120000}, {"price": 13, "date": 1125000}, {"price": 7, "date": 1130000}, {"price": 12, "date": 1135000}, {"price": 5, "date": 1140000}, {"price": 7, "date": 1145000}, {"price": 30, "date": 1150000}, {"price": 6, "date": 1155000}, {"price": 12, "date": 1160000}, {"price": 8, "date": 1165000}, {"price": 4, "date": 1170000}, {"price": 8, "date": 1175000}, {"price": 8, "date": 1180000}, {"price": 11, "date": 1185000}, {"price": 9, "date": 1190000}, {"price": 12, "date": 1195000}, {"price": 28, "date": 1200000}, {"price": 12, "date": 1205000}, {"price": 8, "date": 1210000}, {"price": 6, "date": 1215000}, {"price": 8, "date": 1220000}, {"price": 18, "date": 1225000}, {"price": 7, "date": 1230000}, {"price": 5, "date": 1235000}, {"price": 11, "date": 1240000}, {"price": 7, "date": 1245000}, {"price": 27, "date": 1250000}, {"price": 5, "date": 1255000}, {"price": 9, "date": 1260000}, {"price": 7, "date": 1265000}, {"price": 7, "date": 1270000}, {"price": 8, "date": 1275000}, {"price": 10, "date": 1280000}, {"price": 12, "date": 1285000}, {"price": 2, "date": 1290000}, {"price": 14, "date": 1295000}, {"price": 22, "date": 1300000}, {"price": 7, "date": 1305000}, {"price": 6, "date": 1310000}, {"price": 4, "date": 1315000}, {"price": 9, "date": 1320000}, {"price": 18, "date": 1325000}, {"price": 3, "date": 1330000}, {"price": 8, "date": 1335000}, {"price": 3, "date": 1340000}, {"price": 5, "date": 1345000}, {"price": 16, "date": 1350000}, {"price": 6, "date": 1355000}, {"price": 5, "date": 1360000}, {"price": 4, "date": 1365000}, {"price": 3, "date": 1370000}, {"price": 10, "date": 1375000}, {"price": 4, "date": 1380000}, {"price": 16, "date": 1385000}, {"price": 1, "date": 1390000}, {"price": 8, "date": 1395000}, {"price": 23, "date": 1400000}, {"price": 3, "date": 1405000}, {"price": 3, "date": 1410000}, {"price": 4, "date": 1415000}, {"price": 1, "date": 1420000}, {"price": 4, "date": 1425000}, {"price": 5, "date": 1430000}, {"price": 3, "date": 1435000}, {"price": 6, "date": 1440000}, {"price": 2, "date": 1445000}, {"price": 18, "date": 1450000}, {"price": 2, "date": 1455000}, {"price": 2, "date": 1460000}, {"price": 5, "date": 1465000}, {"price": 1, "date": 1470000}, {"price": 6, "date": 1475000}, {"price": 6, "date": 1480000}, {"price": 6, "date": 1485000}, {"price": 3, "date": 1490000}, {"price": 2, "date": 1495000}, {"price": 17, "date": 1500000}, {"price": 4, "date": 1505000}, {"price": 2, "date": 1510000}, {"price": 3, "date": 1515000}, {"price": 2, "date": 1520000}, {"price": 4, "date": 1525000}, {"price": 2, "date": 1530000}, {"price": 4, "date": 1535000}, {"price": 2, "date": 1540000}, {"price": 1, "date": 1545000}, {"price": 9, "date": 1550000}, {"price": 3, "date": 1555000}, {"price": 3, "date": 1560000}, {"price": 7, "date": 1565000}, {"price": 3, "date": 1570000}];
  
var margin = {top: 10, right: 10, bottom: 100, left: 50},
    margin2 = {top: 150, right: 10, bottom: 20, left: 50},
    width = 750 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom,
    height2 =200 - margin2.top - margin2.bottom;

var x = d3.scale.ordinal().rangeBands([0, width], .1),
    x2 = d3.scale.ordinal().rangeBands([0, width], .1),
    y = d3.scale.linear().range([height, 0]),
    y2 = d3.scale.linear().range([height2, 0]);

var xAxis = d3.svg.axis().scale(x).orient("bottom"),
    xAxis2 = d3.svg.axis().scale(x2).orient("bottom").tickValues([]),
    yAxis = d3.svg.axis().scale(y).orient("left");

    x.domain(data.map(function(d){ return d.date}));
    y.domain([0, d3.max(data, function(d) { return d.price;})]);
    x2.domain(x.domain());
    y2.domain(y.domain());
    
  var brush = d3.svg.brush()
                .x(x2) 
                .on("brush", brushed);

var svg = d3.select("#svgpathSVGdata").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

var focus = svg.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
var context = svg.append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

  focus.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  focus.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  focus.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Price");

  focus.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Number of Houses"); 
   
  console.log(x(data[0].date))
  enter(data)
  updateScale(data)
  
  var subBars = context.selectAll('.subBar')
                                    .data(data)
  
  subBars.enter().append("rect")
      .classed('subBar', true)
      .attr(
      {
        height: function (d)
        {
          return height2 - y2(d.price);
        },
        width: function(d){ return x.rangeBand()},
        x: function(d) {

          return x2(d.date)
        },
        y: function(d)
        {
          return y2(d.price)
        }
      })

  context.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);

  context.append("g")
      .attr("class", "x brush")
      .call(brush)
    .selectAll("rect")
      .attr("y", -6)
      .attr("height", height2 + 7);

  
function brushed() {
    var selected = null; 
      selected =  x2.domain()
                .filter(function(d){
                    return (brush.extent()[0] <= x2(d)) && (x2(d) <= brush.extent()[1]);
              });
  
    var start;
    var end;
    
    if(brush.extent()[0] != brush.extent()[1])
      {
        start = selected[0];
        end = selected[selected.length - 1] + 1;
      } else { 
        start = 0;
        end = data.length;
      }
    max_p = end
    min_p = start
    start = (start-75000)/5000
    end = (end-75000-1)/5000
    var updatedData = data.slice(start, end);
    update(updatedData);
    enter(updatedData);
    exit(updatedData);
    updateScale(updatedData)
}
 

  function updateScale(data)
  { 
    var tickScale = d3.scale.pow().range([data.length / 10, 0]).domain([data.length, 0]).exponent(.5)

    var brushValue = brush.extent()[1] - brush.extent()[0];
    if(brushValue === 0){
      brushValue = width;
    }

    var tickValueMultiplier = Math.ceil(Math.abs(tickScale(brushValue)));  
    var filteredTickValues = data.filter(function(d, i){return i % tickValueMultiplier === 0}).map(function(d){ return d.date})

    focus.select(".x.axis").call(xAxis.tickValues(filteredTickValues));
    focus.select(".y.axis").call(yAxis);
  }
  
  function update(data)
  {
      x.domain(data.map(function(d){ return d.date}));
      y.domain([0, d3.max(data, function(d) { return d.price;})]);

      var bars =  focus.selectAll('.bar')
          .data(data)
      bars
        .attr(
        {  
          height: function (d, i)
          { 
            return height - y(d.price);
          },
          width: function(d){ 
            return x.rangeBand()
          },
          x: function(d) {

            return x(d.date)+0.5*x.rangeBand();
          },
          y: function(d)
          {
            return y(d.price)
          }
        })

  } 
  
  function exit(data)
  {
    var bars =  focus.selectAll('.bar').data(data)
    bars.exit().remove()
  }
  
  function enter(data)
  {
      x.domain(data.map(function(d){ return d.date}));
      y.domain([0, d3.max(data, function(d) { return d.price;})]);

      var bars =  focus.selectAll('.bar')
          .data(data)
      bars.enter().append("rect")
        .classed('bar', true)
        .attr(
        {  
          height: function (d, i)
          { 
            return height - y(d.price);
          },
          width: function(d){ 
            return x.rangeBand()
          },
          x: function(d) {
 
            return x(d.date);
          },
          y: function(d)
          {
            return y(d.price)
          }
        })
  }

var data_z = [{"price": 1, "date": 290}, {"price": 0, "date": 310}, {"price": 0, "date": 330}, {"price": 0, "date": 350}, {"price": 3, "date": 370}, {"price": 2, "date": 390}, {"price": 3, "date": 410}, {"price": 2, "date": 430}, {"price": 1, "date": 450}, {"price": 4, "date": 470}, {"price": 2, "date": 490}, {"price": 6, "date": 510}, {"price": 5, "date": 530}, {"price": 8, "date": 550}, {"price": 8, "date": 570}, {"price": 12, "date": 590}, {"price": 16, "date": 610}, {"price": 10, "date": 630}, {"price": 9, "date": 650}, {"price": 38, "date": 670}, {"price": 44, "date": 690}, {"price": 76, "date": 710}, {"price": 36, "date": 730}, {"price": 52, "date": 750}, {"price": 68, "date": 770}, {"price": 86, "date": 790}, {"price": 68, "date": 810}, {"price": 94, "date": 830}, {"price": 83, "date": 850}, {"price": 90, "date": 870}, {"price": 90, "date": 890}, {"price": 111, "date": 910}, {"price": 105, "date": 930}, {"price": 129, "date": 950}, {"price": 104, "date": 970}, {"price": 129, "date": 990}, {"price": 202, "date": 1010}, {"price": 136, "date": 1030}, {"price": 166, "date": 1050}, {"price": 132, "date": 1070}, {"price": 151, "date": 1090}, {"price": 137, "date": 1110}, {"price": 157, "date": 1130}, {"price": 190, "date": 1150}, {"price": 169, "date": 1170}, {"price": 185, "date": 1190}, {"price": 181, "date": 1210}, {"price": 197, "date": 1230}, {"price": 238, "date": 1250}, {"price": 204, "date": 1270}, {"price": 214, "date": 1290}, {"price": 207, "date": 1310}, {"price": 204, "date": 1330}, {"price": 196, "date": 1350}, {"price": 207, "date": 1370}, {"price": 229, "date": 1390}, {"price": 207, "date": 1410}, {"price": 256, "date": 1430}, {"price": 212, "date": 1450}, {"price": 243, "date": 1470}, {"price": 219, "date": 1490}, {"price": 219, "date": 1510}, {"price": 233, "date": 1530}, {"price": 225, "date": 1550}, {"price": 225, "date": 1570}, {"price": 218, "date": 1590}, {"price": 216, "date": 1610}, {"price": 211, "date": 1630}, {"price": 253, "date": 1650}, {"price": 231, "date": 1670}, {"price": 218, "date": 1690}, {"price": 224, "date": 1710}, {"price": 218, "date": 1730}, {"price": 195, "date": 1750}, {"price": 221, "date": 1770}, {"price": 244, "date": 1790}, {"price": 230, "date": 1810}, {"price": 220, "date": 1830}, {"price": 196, "date": 1850}, {"price": 188, "date": 1870}, {"price": 219, "date": 1890}, {"price": 179, "date": 1910}, {"price": 193, "date": 1930}, {"price": 207, "date": 1950}, {"price": 200, "date": 1970}, {"price": 199, "date": 1990}, {"price": 187, "date": 2010}, {"price": 186, "date": 2030}, {"price": 188, "date": 2050}, {"price": 194, "date": 2070}, {"price": 218, "date": 2090}, {"price": 194, "date": 2110}, {"price": 174, "date": 2130}, {"price": 191, "date": 2150}, {"price": 171, "date": 2170}, {"price": 192, "date": 2190}, {"price": 153, "date": 2210}, {"price": 194, "date": 2230}, {"price": 152, "date": 2250}, {"price": 145, "date": 2270}, {"price": 170, "date": 2290}, {"price": 153, "date": 2310}, {"price": 160, "date": 2330}, {"price": 149, "date": 2350}, {"price": 141, "date": 2370}, {"price": 174, "date": 2390}, {"price": 152, "date": 2410}, {"price": 162, "date": 2430}, {"price": 120, "date": 2450}, {"price": 126, "date": 2470}, {"price": 157, "date": 2490}, {"price": 146, "date": 2510}, {"price": 114, "date": 2530}, {"price": 135, "date": 2550}, {"price": 119, "date": 2570}, {"price": 129, "date": 2590}, {"price": 127, "date": 2610}, {"price": 108, "date": 2630}, {"price": 128, "date": 2650}, {"price": 116, "date": 2670}, {"price": 105, "date": 2690}, {"price": 114, "date": 2710}, {"price": 106, "date": 2730}, {"price": 86, "date": 2750}, {"price": 105, "date": 2770}, {"price": 113, "date": 2790}, {"price": 104, "date": 2810}, {"price": 99, "date": 2830}, {"price": 78, "date": 2850}, {"price": 87, "date": 2870}, {"price": 72, "date": 2890}, {"price": 102, "date": 2910}, {"price": 71, "date": 2930}, {"price": 71, "date": 2950}, {"price": 87, "date": 2970}, {"price": 92, "date": 2990}, {"price": 90, "date": 3010}, {"price": 91, "date": 3030}, {"price": 63, "date": 3050}, {"price": 75, "date": 3070}, {"price": 72, "date": 3090}, {"price": 60, "date": 3110}, {"price": 71, "date": 3130}, {"price": 85, "date": 3150}, {"price": 66, "date": 3170}, {"price": 86, "date": 3190}, {"price": 62, "date": 3210}, {"price": 69, "date": 3230}, {"price": 50, "date": 3250}, {"price": 57, "date": 3270}, {"price": 54, "date": 3290}, {"price": 60, "date": 3310}, {"price": 43, "date": 3330}, {"price": 48, "date": 3350}, {"price": 56, "date": 3370}, {"price": 47, "date": 3390}, {"price": 56, "date": 3410}, {"price": 48, "date": 3430}, {"price": 38, "date": 3450}, {"price": 43, "date": 3470}, {"price": 56, "date": 3490}, {"price": 44, "date": 3510}, {"price": 36, "date": 3530}, {"price": 49, "date": 3550}, {"price": 30, "date": 3570}, {"price": 35, "date": 3590}, {"price": 36, "date": 3610}, {"price": 26, "date": 3630}, {"price": 30, "date": 3650}, {"price": 38, "date": 3670}, {"price": 32, "date": 3690}, {"price": 33, "date": 3710}, {"price": 34, "date": 3730}, {"price": 29, "date": 3750}, {"price": 28, "date": 3770}, {"price": 19, "date": 3790}, {"price": 27, "date": 3810}, {"price": 37, "date": 3830}, {"price": 23, "date": 3850}, {"price": 25, "date": 3870}, {"price": 26, "date": 3890}, {"price": 31, "date": 3910}, {"price": 20, "date": 3930}, {"price": 24, "date": 3950}, {"price": 14, "date": 3970}, {"price": 23, "date": 3990}, {"price": 21, "date": 4010}, {"price": 25, "date": 4030}, {"price": 22, "date": 4050}, {"price": 19, "date": 4070}, {"price": 13, "date": 4090}, {"price": 20, "date": 4110}, {"price": 21, "date": 4130}, {"price": 18, "date": 4150}, {"price": 13, "date": 4170}, {"price": 12, "date": 4190}, {"price": 16, "date": 4210}, {"price": 18, "date": 4230}, {"price": 16, "date": 4250}, {"price": 22, "date": 4270}, {"price": 15, "date": 4290}, {"price": 14, "date": 4310}, {"price": 12, "date": 4330}, {"price": 16, "date": 4350}, {"price": 16, "date": 4370}, {"price": 12, "date": 4390}, {"price": 21, "date": 4410}, {"price": 13, "date": 4430}, {"price": 11, "date": 4450}, {"price": 12, "date": 4470}, {"price": 17, "date": 4490}, {"price": 6, "date": 4510}, {"price": 3, "date": 4530}, {"price": 10, "date": 4550}, {"price": 9, "date": 4570}, {"price": 13, "date": 4590}, {"price": 10, "date": 4610}, {"price": 7, "date": 4630}, {"price": 8, "date": 4650}, {"price": 7, "date": 4670}, {"price": 13, "date": 4690}, {"price": 5, "date": 4710}, {"price": 7, "date": 4730}, {"price": 6, "date": 4750}, {"price": 4, "date": 4770}, {"price": 5, "date": 4790}, {"price": 3, "date": 4810}, {"price": 4, "date": 4830}, {"price": 9, "date": 4850}, {"price": 4, "date": 4870}, {"price": 3, "date": 4890}, {"price": 7, "date": 4910}, {"price": 5, "date": 4930}, {"price": 2, "date": 4950}, {"price": 3, "date": 4970}, {"price": 4, "date": 4990}, {"price": 6, "date": 5010}, {"price": 4, "date": 5030}, {"price": 6, "date": 5050}, {"price": 2, "date": 5070}, {"price": 3, "date": 5090}, {"price": 4, "date": 5110}, {"price": 1, "date": 5130}, {"price": 4, "date": 5150}, {"price": 6, "date": 5170}, {"price": 3, "date": 5190}, {"price": 3, "date": 5210}, {"price": 4, "date": 5230}, {"price": 1, "date": 5250}, {"price": 4, "date": 5270}, {"price": 5, "date": 5290}, {"price": 5, "date": 5310}, {"price": 3, "date": 5330}, {"price": 3, "date": 5350}, {"price": 5, "date": 5370}, {"price": 2, "date": 5390}, {"price": 2, "date": 5410}, {"price": 4, "date": 5430}, {"price": 3, "date": 5450}, {"price": 6, "date": 5470}, {"price": 2, "date": 5490}, {"price": 2, "date": 5510}, {"price": 4, "date": 5530}, {"price": 4, "date": 5550}, {"price": 2, "date": 5570}, {"price": 1, "date": 5590}, {"price": 4, "date": 5610}, {"price": 2, "date": 5630}, {"price": 1, "date": 5650}, {"price": 1, "date": 5670}, {"price": 1, "date": 5690}, {"price": 2, "date": 5710}, {"price": 2, "date": 5730}, {"price": 1, "date": 5750}, {"price": 6, "date": 5770}, {"price": 2, "date": 5790}, {"price": 2, "date": 5810}, {"price": 4, "date": 5830}, {"price": 5, "date": 5850}, {"price": 0, "date": 5870}, {"price": 0, "date": 5890}, {"price": 0, "date": 5910}, {"price": 2, "date": 5930}, {"price": 2, "date": 5950}, {"price": 0, "date": 5970}, {"price": 2, "date": 5990}, {"price": 0, "date": 6010}, {"price": 2, "date": 6030}, {"price": 3, "date": 6050}, {"price": 3, "date": 6070}, {"price": 0, "date": 6090}, {"price": 1, "date": 6110}, {"price": 0, "date": 6130}, {"price": 1, "date": 6150}, {"price": 0, "date": 6170}, {"price": 2, "date": 6190}, {"price": 1, "date": 6210}, {"price": 1, "date": 6230}, {"price": 1, "date": 6250}, {"price": 0, "date": 6270}]

var x_z = d3.scale.ordinal().rangeBands([0, width], .1),
    x2_z = d3.scale.ordinal().rangeBands([0, width], .1),
    y_z = d3.scale.linear().range([height, 0]),
    y2_z = d3.scale.linear().range([height2, 0]);

var xAxis_z = d3.svg.axis().scale(x_z).orient("bottom"),
    xAxis2_z = d3.svg.axis().scale(x2_z).orient("bottom").tickValues([]),
    yAxis_z = d3.svg.axis().scale(y_z).orient("left");

    x_z.domain(data_z.map(function(d){ return d.date}));
    y_z.domain([0, d3.max(data_z, function(d) { return d.price;})]);
    x2_z.domain(x_z.domain());
    y2_z.domain(y_z.domain());
    
  var brush_z = d3.svg.brush()
                .x(x2_z) 
                .on("brush", brushed_z);

var svg_z = d3.select("#svgpathSVGdata2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

var focus_z = svg_z.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
var context_z = svg_z.append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

  focus_z.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis_z);

  focus_z.append("g")
      .attr("class", "y axis")
      .call(yAxis_z);

  focus_z.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Sqft");

  focus_z.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Number of Houses"); 
   
  enter_z(data_z)
  updateScale_z(data_z)
  
  var subBars_z = context_z.selectAll('.subBar')
                                    .data(data_z)
  
  subBars_z.enter().append("rect")
      .classed('subBar', true)
      .attr(
      {
        height: function (d)
        {
          return height2 - y2_z(d.price);
        },
        width: function(d){ return x_z.rangeBand()},
        x: function(d) {

          return x2_z(d.date);
        },
        y: function(d)
        {
          return y2_z(d.price)
        }
      })

  context_z.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2_z);

  context_z.append("g")
      .attr("class", "x brush")
      .call(brush_z)
    .selectAll("rect")
      .attr("y", -6)
      .attr("height", height2 + 7);

function brushed_z() {
    var selected = null; 
      selected =  x2_z.domain()
                .filter(function(d){
                    return (brush_z.extent()[0] <= x2_z(d)) && (x2_z(d) <= brush_z.extent()[1]);
              });
  
    var start;
    var end;
    
    if(brush_z.extent()[0] != brush_z.extent()[1])
      {
        start = selected[0];
        end = selected[selected.length - 1] + 1;
      } else { 
        start = 0;
        end = data.length;
      }

    min_s = start
    max_s = end
    start = (start - 290)/20
    end = (end - 290-1)/20
    var updatedData = data_z.slice(start, end);

    update_z(updatedData);
    enter_z(updatedData);
    exit_z(updatedData);
    updateScale_z(updatedData)
}
 
  function updateScale_z(data)
  { 
        var tickScale = d3.scale.pow().range([data.length / 10, 0]).domain([data.length, 0]).exponent(.5)

    var brushValue = brush_z.extent()[1] - brush_z.extent()[0];
    if(brushValue === 0){
      brushValue = width;
    }

    var tickValueMultiplier = Math.ceil(Math.abs(tickScale(brushValue)));  
    var filteredTickValues = data.filter(function(d, i){return i % tickValueMultiplier === 0}).map(function(d){ return d.date})

    focus_z.select(".x.axis").call(xAxis_z.tickValues(filteredTickValues));
    focus_z.select(".y.axis").call(yAxis_z);
  }
  
  function update_z(data)
  {
      x_z.domain(data.map(function(d){ return d.date}));
      y_z.domain([0, d3.max(data, function(d) { return d.price;})]);

      var bars =  focus_z.selectAll('.bar')
          .data(data)
      bars
        .attr(
        {  
          height: function (d, i)
          { 
            return height - y_z(d.price);
          },
          width: function(d){ 
            return x_z.rangeBand()
          },
          x: function(d) {

            return x_z(d.date);
          },
          y: function(d)
          {
            return y_z(d.price)
          }
        })

  } 
  
  function exit_z(data)
  {
    var bars =  focus_z.selectAll('.bar').data(data)
    bars.exit().remove()
  }
  
  function enter_z(data)
  {
      x_z.domain(data.map(function(d){ return d.date}));
      y_z.domain([0, d3.max(data, function(d) { return d.price;})]);

      var bars =  focus_z.selectAll('.bar')
          .data(data)
      bars.enter().append("rect")
        .classed('bar', true)
        .attr(
        {  
          height: function (d, i)
          { 
            return height - y_z(d.price);
          },
          width: function(d){ 
            return x_z.rangeBand()
          },
          x: function(d) {
 
            return x_z(d.date) + 0.5*x_z.rangeBand();
          },
          y: function(d)
          {
            return y_z(d.price)
          }
        })
  }
