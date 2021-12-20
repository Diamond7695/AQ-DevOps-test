const {shuffleArray} = require('./utils')
const testArr = [1,2,3,4]
describe('shuffleArray should', () => {
    test("return the shuffle array", ()=>{
        expect(Array.isArray(shuffleArray(testArr))).toBe(true);
    });
    test("return lenght", ()=>{
        expect(shuffleArray(testArr)).toHaveLength
    })
})
