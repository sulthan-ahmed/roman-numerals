
module.exports = {
    romanToModern: function romanToModern(romanNum){
        var romanMap = {'I':1, 'V':5, 'X': 10};
        var counter = 0;

        var splitArg = romanNum.split('');
        console.log('string in an array =',splitArg);

        function findSingleRomanNum {
            for(var key in romanMap) {
                if (key === splitArg[]) {
                    var value = romanMap[key];
                    console.log('key', key);
                    console.log('value =', value);
                }
            }
        }




        splitArg.forEach(function(valueOfArray, index){

            if (index != splitArg.length){
                if (valueOfArray === splitArg[index + 1]){


                }
            }
        });


    }
};