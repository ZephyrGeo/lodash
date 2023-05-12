import assert from 'assert'
import lodashStable from 'lodash'
import sortedIndexOf from '../src/sortedIndexOf'
import sortedLastIndexOf from '../src/sortedLastIndexOf'

describe('sortedIndexOf methods', function () {
    // lodashStable.each(['sortedIndexOf', 'sortedLastIndexOf'], function (methodName) {
    //     var func = methodName,
    //         isSortedIndexOf = methodName == 'sortedIndexOf'

    //     it('`_.' + methodName + '` should perform a binary search', function () {
    //         var sorted = [4, 4, 5, 5, 6, 6]
    //         assert.deepStrictEqual(func(sorted, 5), isSortedIndexOf ? 2 : 3)
    //     })
    // })
    it('des:', function () {
        const sorted = [4, 4, 5, 5, 6, 6]
        assert.deepStrictEqual(sortedIndexOf(sorted, 5), 2)
    })
    it('des:', function () {
        const sorted = [4, 4, 5, 5, 6, 6]
        assert.deepStrictEqual(sortedLastIndexOf(sorted, 5), 3)
    })
})
