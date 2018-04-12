function isEven(x) {
   return x % 2 === 0
};

function factorial(x) {
   var result = 1;
   for (i = 2; i  <= x; i++) {
   result*=i;
 };
};

function kebabToSnake(str) {
   var newString = str.replace(/-/g, /_/);
   return newString;
};
