// Returns an object that will generate a number based on a default increment, or an increment you provide.
// var iterator = new Iterator(); creates a new Iterator object.
// iterator.step(); will return 1.
// iterator.step(2); will return 3.
function Iterator(step,start){
  var increment = step || 1;
  var startNumber = start || 0;
  return {

    currentNumber: startNumber,

    step: function(newIncrement){
      var stepIncrement = newIncrement || increment;
      this.currentNumber += stepIncrement;
      return this.currentNumber;
    }

  }
}