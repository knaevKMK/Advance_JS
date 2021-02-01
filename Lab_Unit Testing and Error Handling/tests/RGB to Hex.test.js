const expect = require('chai').expect;
const rgbToHexColor = require('../RGB to Hex');

describe('RGB to Hex',  ()=> {
    it('invalid param non_Number', ()=> {
        expect(rgbToHexColor('red', 'red', 'red')).undefined;
    });
    it('invalid param 0 > Number',  ()=> {
        expect(rgbToHexColor(-1, -1, 11)).undefined;
    });
    it('invalid param 255<Number',  ()=> {
        expect(rgbToHexColor(256, 256, 256)).undefined;
    });

    it('invalid 2nd param non_Number', ()=> {
        expect(rgbToHexColor(1, 'red', 'red')).undefined;
    });
    it('invalid 2nd param 0 > Number',  ()=> {
        expect(rgbToHexColor(1, -1, 11)).undefined;
    });
    it('invalid 2nd param 255<Number',  ()=> {
        expect(rgbToHexColor(56, 256, 256)).undefined;
    });

    it('invalid 3th param non_Number', ()=> {
        expect(rgbToHexColor(1, 1, 'red')).undefined;
    });
    it('invalid 3th param 0 > Number',  ()=> {
        expect(rgbToHexColor(1, 1, -11)).undefined;
    });
    it('invalid 3th param 255<Number',  ()=> {
        expect(rgbToHexColor(25, 56, 256)).undefined;
    });

    it('black return Hex.format',  ()=> {
        expect(rgbToHexColor(0, 0, 0)).equal('#000000');
    });
    it('white return Hex.format',  ()=> {
        expect(rgbToHexColor(255, 255, 255)).equal('#FFFFFF');
    });
    it('valid random param return Hex.format',  ()=> {
        expect(rgbToHexColor(151, 104, 172)).equal('#9768AC');
    });
    it('red return Hex.format',  ()=> {
        expect(rgbToHexColor(255, 0, 0)).equal('#FF0000');
    });
    it('blue return Hex.format',  ()=> {
        expect(rgbToHexColor(0, 0, 255)).equal('#0000FF');
    });
    it('green return Hex.format',  ()=> {
        expect(rgbToHexColor(0, 255, 0)).equal('#00FF00');
    });
});