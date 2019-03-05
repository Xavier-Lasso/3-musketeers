const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

expect.extend({
  arrayContainingOnlyType(received, type) {
    let pass = true;
	for(let i = 0; i < received.length; i++) {
		if(typeof received[i] !== type) {
			pass = false;
			break;
		}
	}
    if (pass) {
      return {
        message: () =>
          `expected ${received} to contain only ${type}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to contain only ${type}`,
        pass: false,
      };
    }
  },
  returnArray(received) {
    let pass = true;
	if(typeof random().mock.calls[0][0] === 'number') {
		if(Array.isArray(received) !== true && received.length !== random().mock.calls[0][0]) {
			pass = false;
		}
	}
    if (pass) {
      return {
        message: () =>
          `expected ${received} to be an array if passed a number`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be an array if passed a number`,
        pass: false,
      };
    }
  }
});

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      expect(starWars.all).arrayContainingOnlyType('string')
    });

    test('should contain `Luke Skywalker`', () => {
      expect(starWars.all).toContain('Luke Skywalker')
    });

    test('should not contain `Ben Quadinaros`', () => {
      expect(starWars.all).not.toContain('Ben Quadinaros')
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      expect(starWars.all).toContain(starWars.random())
    });

    test('should return an array of random items if passed a number', () => {
      expect(starWars.random(5)).returnArray
    });
  });
});
