var space = new Spacekit.Simulation(document.getElementById('container'), {
  basePath: '../../spacekit/src',
});

space.createStars();

space.createLight([100,10,1]);
space.createObject('sun', 
  Object.assign(Spacekit.SpaceObjectPresets.SUN, {
  position: [100,10,1],
  })
);

var neptune = space.createSphere('neptune',{
  textureUrl: 'img/neptune.jpg',
});