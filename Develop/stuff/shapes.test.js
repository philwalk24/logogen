const Square = require('./s.js');
const Circle = require('./c.js');
const Triangle = require('./t.js');

describe('Square', () => {
    describe('Instantiate', () =>{
        it('should match the default square', () =>{
            const tester = new Square();
            expect(tester).toBeInstanceOf(Square);
        })
    })
});
describe('Triangle', () => {
    describe('Instantiate', () =>{
        it('should match the default Triangle', () =>{
            const tester = new Triangle();
            expect(tester).toBeInstanceOf(Triangle);
        })
    })
});
describe('Circle', () => {
    describe('Instantiate', () =>{
        it('should match the default circle', () =>{
            const tester = new Circle();
            expect(tester).toBeInstanceOf(Circle);
        })
    })
});
