
module.exports = {
    romanToModern: function romanToModern(romanNum){
        romanMap = {'I':1, 'V':5, 'X': 10};

        splitArg = romanNum.split('');
        console.log(splitArg);
        if (romanNum === 'I'){
            return 1;
        }
    }
};