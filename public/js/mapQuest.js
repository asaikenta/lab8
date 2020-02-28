function initMap() {
	L.mapquest.key = 'KBsMzEIpAtm7g8mZkLrwu66jsY2FGSQV';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.8788, -117.2359],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12
	});

	L.marker([32.8788, -117.2359]).addTo(map);
}