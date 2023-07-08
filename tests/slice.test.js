import slice from '../src/slice'
import assert from 'assert'

describe('slice', function() {
    const array = [1,2,3];
    
    it('should use a default `start` of `0` and a default `end` of `length`' ,function() {
        const actual = slice(array)
        assert.deepStrictEqual(actual, array);
        assert.notStrictEqual(actual, array);
    })
})