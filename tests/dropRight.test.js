import assert from 'assert'
import dropRight from '../src/dropRight.js'

describe('dropRight', function () {
    var array = [1, 2, 3]

    it('should drop the last two elements', function () {
        assert.deepStrictEqual(dropRight(array, 2), [1])
    })

    it('should coerce `n` to an integer', function () {
        assert.deepStrictEqual(dropRight(array, 1.6), [1, 2])
    })
})
