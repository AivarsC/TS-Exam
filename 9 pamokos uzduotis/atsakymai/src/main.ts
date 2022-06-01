import LandVehicle from './land-vehicle.js';
import AirVehicle from './air-vehicle.js';
import WaterVehicle from './water-vehicle.js';

const vehicles: (LandVehicle | AirVehicle | WaterVehicle)[] = [
  new LandVehicle({
    tires: ['MICHELIN Pilot® Sport 4 S Tires', 'MICHELIN Pilot® Sport 4 S Tires', 'MICHELIN Pilot® Sport 4 S Tires', 'MICHELIN Pilot® Sport 4 S Tires']
  }, {
    brand: 'Audi',
    model: 'S5',
    year: 2009,
  }),
  new LandVehicle({
    tires: ['Dunlop GRANDTREK PT2', 'Dunlop GRANDTREK PT2', 'Dunlop GRANDTREK PT2', 'Dunlop GRANDTREK PT2']
  }, {
    brand: 'LandRover',
    model: 'Discovery',
    year: 2002,
  }),
  new AirVehicle({
    maxAltitude: 7000,
  }, {
    brand: 'PAL-V',
    model: 'Liberty',
    year: 2021,
  }),
  new AirVehicle({
    maxAltitude: 5000,
  }, {
    brand: 'Aeromobil',
    model: 'AM 4.0',
    year: 2022,
  }),
  new WaterVehicle({
    maxDepth: 50,
  }, {
    brand: 'Sailor',
    model: 'Ocean 3000',
    year: 2011,
  }),
  new WaterVehicle({
    maxDepth: 70,
  }, {
    brand: 'LandScraper',
    model: 'Fagotti',
    year: 202,
  }),
];

vehicles.forEach(v => console.log(v.toString()));