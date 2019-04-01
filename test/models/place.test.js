const Place = require('../../models/Place');

describe('instantiation', () => {
  test('it exists', () => {
    const place_1 = new Place({title: 'yoga studio'});
    expect(place_1 instanceof Place).toBe(true);
  });
  test('it can be instantiated with JSON', () => {
    const placeJSON = require('../fixtures/single_place');
    const place_1 = new Place(placeJSON);
    expect(place_1 instanceof Place).toBe(true);
    expect(place_1.name).toBe("Deli Board");
    expect(place_1.rating).toBe(4.5);
  });
});
