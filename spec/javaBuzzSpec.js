describe("javaBuzz", function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe("divisible by 3", function() {
    it("IT IS divisible by 3", function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("NOT divisible by 3", function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe("divisible by 5", function() {
    it("IT IS divisible by 5", function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it("NOT divisible by 5", function() {
      expect(javabuzz.isDivisibleByFive(4)).toBe(false);
    });
  });

  describe("divisible by 3 and 5", function() {
    it("IT IS divisible by 3 and 5", function() {
      expect(javabuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });

    it("NOT divisible by 3 and 5", function() {
      expect(javabuzz.isDivisibleByThreeAndFive(10)).toBe(false)
    });
  });

  describe("when playing, display", function() {
    it(" 'Buzz' when a number is divisible by 5", function() {
      expect(javabuzz.display(5)).toEqual("Buzz");
    });

    it(" 'JavaBuzz' when a number is divisible by 3 and 5", function() {
      expect(javabuzz.display(15)).toEqual("JavaBuzz")
    });

    it(" 'Java' when a number is divisible by 3", function() {
      expect(javabuzz.display(3)).toEqual("Java");
    });
  });
});