mapboxgl.accessToken = 'pk.eyJ1IjoiYW1mMTAwOTIiLCJhIjoiY2x1cmRoODA1MDYyYTJ2bjV1djk2c3E4ZiJ9.l38L0twOrC6M5FnzpbZz2A';

var COLISEUM = [12.492198710067786, 41.89031799322667]

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [12.48329, 41.89375], // starting position [lng, lat]
    zoom: 12.7,
});

// create the popup
const popup = new mapboxgl.Popup({ 
    offset: 25, 
    anchor: "bottom-left"
}).setText(
    'The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.'
);

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({ color: 'black' })
    .setLngLat(COLISEUM)
    .setPopup(popup)
    .addTo(map);