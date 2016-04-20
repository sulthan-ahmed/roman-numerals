const expect = require('chai').expect;
const app = require('/Users/sulthanahmed/development/training/roman-numerals/app');

describe('apps module', function(){

    it('returns 1 for roman I', function(){
        // Arrange
        var testNum = 'I';
        var expectedNum = 1;

        // Act
        var output = app.romanToModern('I');

        // Assert
        expect(output).to.be.equal(expectedNum);
    });

    it('returns 4 for roman IV', function () {
        // Arrange
        var testNum = 'IV';
        var expectedNum = 4;

        // Act
        var output = app.romanToModern('IV');

        // Assert
        expect(output).to.be.equal(expectedNum);
    });

});