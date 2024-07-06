const ladder = {
   i: 0,
   up: function() {
     this.i++;
     return this;
   },
   down: function() {
      this.i--;
      return this;
   },
   showStep: function() {
      console.log(this.i);
      return this.i;
   }
};

ladder.up().up().down().up().up().up().up().up().up().showStep();