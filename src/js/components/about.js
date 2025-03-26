async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer } = ymaps3;
    // Создаем карту
    const map = new YMap(document.getElementById('map'), {
        location: {
            center: [44.810093, 41.686063],
            zoom: 15
        }
    });

    const markerElement = document.createElement('div');
    markerElement.className = 'marker-class';
    markerElement.innerHTML = `<img src="./assets/images/logo.png" style="width: 5rem; height: 5rem; position:relative; top:-50; left:-50%" alt="">`

    const marker = new YMapMarker(
        {
            coordinates: [44.810093, 41.686063],
            // draggable: true,
            mapFollowsOnDrag: false
        },
        markerElement
    );

    // Добавляем слой карты
    map.addChild(new YMapDefaultSchemeLayer());

    // Добавляем слой для отображения маркеров
    const featuresLayer = new YMapDefaultFeaturesLayer();
    map.addChild(featuresLayer);
    map.addChild(marker);
}

export default initMap;
