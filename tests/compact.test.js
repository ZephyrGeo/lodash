import compact from '../src/compact.js'

describe('compact', function () {
    it('should return a new array without null value', function () {
        assert.strictEqual(add(6, 4), 10)
    })

    it('should not coerce arguments to numbers', function () {
        assert.strictEqual(add('6', '4'), '64')
        assert.strictEqual(add('x', 'y'), 'xy')
    })
})
