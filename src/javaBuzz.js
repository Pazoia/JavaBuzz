var Javabuzz = function() {
};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByThreeAndFive = function(number) {
  return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.display = function(number) {
  if (this.isDivisibleByThreeAndFive(number)) {
    return "JavaBuzz"
  };

  if (this.isDivisibleByThree(number)) {
    return "Java";
  };

  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  };

  return number;
};

/*
To display 1 to 100 in the console type the code below into the console.
var javabuzz = new Javabuzz();

for (var i = 1; i <= 100; i++) {
  console.log(javabuzz.display(i));
};
*/