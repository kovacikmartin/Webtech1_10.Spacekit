var space = new Spacekit.Simulation(document.getElementById('container'), {
  basePath: '../../spacekit/src',
  unitsPerAu: 5,
});

space.createSkybox(Spacekit.SkyboxPresets.ESO_LITE);

space.createObject('sun',Spacekit.SpaceObjectPresets.SUN);

var earth = space.createSphere('earth',{
  textureUrl: 'img/earth.jpg',
  ephem: Spacekit.EphemPresets.JUPITER,
  radius: 0.1,
  rotation: {
    enable: true,
    speed: 1,
  },
});

space.getViewer().followObject(earth, [1, -6, 2]);