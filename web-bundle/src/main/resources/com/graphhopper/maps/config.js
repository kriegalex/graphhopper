const config = {
    routingApi: location.origin + '/',
    geocodingApi: 'https://graphhopper.com/api/1/',
    defaultTiles: 'OpenStreetMap',
    keys: {
        graphhopper: "",
        maptiler: "missing_api_key",
        omniscale: "missing_api_key",
        thunderforest: "missing_api_key",
        kurviger: "missing_api_key"
    },
    routingGraphLayerAllowed: true,
    request: {
        details: [
            'road_class',
            'surface',
            'max_speed',
            'toll',
        ],
        snapPreventions: ['ferry'],
    },
}