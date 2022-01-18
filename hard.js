let heightTom = 9;
let massTom = 8;

let heightJerry = 10;
let massJerry= 45;

let bmiTom = massTom/(heightTom * heightTom);
let bmiJerry = massJerry/ (heightJerry * heightJerry); 

console.log("Is Tom’s BMI higher than Jerry’?", bmiTom > bmiJerry ? true:false);