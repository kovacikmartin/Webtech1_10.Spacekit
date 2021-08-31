var space = new Spacekit.Simulation(document.getElementById('container'), {
  basePath: '../../spacekit/src',
  jdPerSecond: 1,
  unitsPerAu: 300,
  camera: {
    initialPosition: [0.3, 0.3, 0.3],
  },
});

space.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

var pluto = space.createSphere('pluto', {
  textureUrl: 'img/pluto.jpg',
  radius: 0.00008,   
});

var plutoMoons = [];
space.loadNaturalSatellites().then(loader => {
  plutoMoons = loader.getSatellitesForPlanet('pluto');
  plutoMoons.forEach(moon => {
      space.createObject(moon.name, {
      labelText: moon.name,
      ephem: moon.ephem,
    });
  });
});