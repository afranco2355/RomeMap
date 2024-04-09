mapboxgl.accessToken = 'pk.eyJ1IjoiYW1mMTAwOTIiLCJhIjoiY2x1cmRoODA1MDYyYTJ2bjV1djk2c3E4ZiJ9.l38L0twOrC6M5FnzpbZz2A';

var COLISEUM = [12.492198710067786, 41.89031799322667];

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/standard',
    center: COLISEUM, // starting position [lng, lat]
    zoom: 13,
});

// create the popup for each marker
const popups = [
    new mapboxgl.Popup({ offset: 25, anchor: "bottom-left" }).setHTML('<h3> The Colosseum </h3> <p> The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.</p> '),
    new mapboxgl.Popup({ offset: 25, anchor: "bottom-left" }).setHTML('<h3> Pantheon </h3> <p> The Pantheon is a former Roman temple and, since AD 609, a Catholic church in Rome, Italy.</p> '),
    new mapboxgl.Popup({ offset: 25, anchor: "bottom-left" }).setHTML('<h3> Fontana Di Trevi </h3> <p> The Trevi Fountain (Fontana di Trevi) is an 18th-century fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini in 1762.</p> '),
    new mapboxgl.Popup({ offset: 25, anchor: "bottom-left" }).setHTML('<h3> Piazza San Pedro </h3> <p> Saint Peters Square is a large plaza located directly in front of St. Peters Basilica in Vatican City, the papal enclave in Rome, directly west of the neighborhood (rione) of Borgo. </p> '),
    new mapboxgl.Popup({ offset: 25, anchor: "bottom-left" }).setHTML('<h3> Piazza Navona </h3> <p> Piazza Navona is a public open space in Rome, Italy. It is built on the site of the 1st century AD Stadium of Domitian and follows the form of the open space of the stadium in an elongated oval.</p> ')
];

// Create an array of marker coordinates
const markerCoordinates = [
    [12.492198710067786, 41.89031799322667],
    [12.47688362543843, 41.89865070008265],
    [12.483358777286126, 41.90104125671095],
    [12.457259117865663, 41.90230276062732],
    [12.473084907434421, 41.89928298250319],
];

const markerImages = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/2560px-Colosseo_2020.jpg',
    'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/3f/3a/bf.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Fuente_de_Trevi%2C_Roma%2C_Italia%2C_2022-09-15%2C_DD_02.jpg/2560px-Fuente_de_Trevi%2C_Roma%2C_Italia%2C_2022-09-15%2C_DD_02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/59/2004_Saint_Peter%27s_Square.jpg',
    'https://www.archeoroma.org/wp-content/uploads/2020/02/piazza-navona-roma-558x400.jpg'
];

// Add markers to the map.
for (let i = 0; i < markerCoordinates.length; i++) {
    // Create a DOM element for each marker.
    const el = createMarkerElement(markerImages[i], popups[i]);

    // Add markers to the map.
    new mapboxgl.Marker(el)
        .setLngLat(markerCoordinates[i])
        .setPopup(popups[i])
        .addTo(map);
}

// Function to create a marker element with a custom image
function createMarkerElement(imageUrl, popup) {
    const markerElement = document.createElement('div');
    markerElement.style.backgroundImage = `url('${imageUrl}')`;
    markerElement.style.width = '50px';
    markerElement.style.height = '50px';
    markerElement.style.backgroundSize = 'cover';
    markerElement.style.border = '2px solid black'; // Add black border
    markerElement.style.borderRadius = '50%'; // Make it circular
    markerElement.style.cursor = 'pointer';

    // Add click event to show popup
    markerElement.addEventListener('click', () => {
        popup.addTo(map);
    });

    return markerElement;
}
