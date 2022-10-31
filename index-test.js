const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () =>{
  describe('.announceDawn',() =>{
    it('returns a rooster call', () =>{
      //Setup
      const expected = 'cock-a-doodle-doo!';
      //exercise
      const actual = Rooster.announceDawn();
      //verify
      assert.equal(expected, actual);
  })
});
  describe('.timeAtDawn', () =>{
    it('returns its argument as a string', () =>{
      //Setup
      const expected = '1';
      //Exercise
      const result = Rooster.timeAtDawn(1);
      //Verify
      assert.strictEqual(expected, result);
    
    it('throws an error if passed a number less than 0', () =>{
        assert.throws(
          () => {
            Rooster.timeAtDawn(-1)
          },
          RangeError
        );
      })
    it('throws an error if passed a number greater than 23', () =>{
        assert.throws(
          () => {
            Rooster.timeAtDawn(25);
          },
          RangeError
        )
    })
      
    })
  })
});