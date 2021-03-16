class MathsTest{
     constructor(){
        this.input1 = createInput("");
        this.input2 = createInput("");
        this.input3 = createInput("");
        this.input4 = createInput("");
        this.input5 = createInput("");
        this.input6 = createInput("");
        this.button = createButton('Check');
     }

     display(){
      
     this.input1.position( 450,200 );
     this.input2.position( 450,250 );
     this.input3.position( 450,300 );
     this.input4.position( 450,350 );
     this.input5.position( 450,400 );
     this.input6.position( 450,450 );

     this.button.position(400, 500);
     }
}