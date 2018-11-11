import mapChooser from '../mapChooser';

describe("mapChooser", () => {

    it(" returns an image file name based on the input given to it", function(){
        let expected = "Henderson.png";
        let actual = mapChooser("Henderson");

        expect(actual).toEqual(expected);
    });

    it(" returns a default image file name based on empty input", function(){
        let expected = "default.png";
        let actual = mapChooser("");

        expect(actual).toEqual(expected);
    });

});