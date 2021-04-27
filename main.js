Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5OWVlNmUzOC0yYjliLTQwNGEtOWJjNC1mYzc0OWYyMGY4N2MiLCJpZCI6NDU4MzEsImlhdCI6MTYxNTQ5MjcxMH0.kLo2wBqC2nSXayzu53aB6dxZ43H4ujzZcSI_P4wwyGk';
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain(),
  shouldAnime: true
});

viewer.dataSources.add(Cesium.CzmlDataSource.load("satellite.czml"));
