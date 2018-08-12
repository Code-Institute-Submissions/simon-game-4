describe("My highlight colours function", function() {       
it("should exist", function() {
    expect(highlightColours).toBeDefined();
    }); 

        beforeEach(function() {
        timerCallback = jasmine.createSpy("timerCallback");
          jasmine.clock().uninstall();
          jasmine.clock().install();
        });
          
        it("should cause a timeout to be called synchronously", function() {
            setTimeout(function() {
              timerCallback();
            }, 100);
            
        expect(timerCallback).not.toHaveBeenCalled();
        
            jasmine.clock().tick(101);
        
            expect(timerCallback).toHaveBeenCalled();
          });
          
        });


describe("My sequence comparison function", function() {       
    it("should exist", function() {
        expect(sequenceCompare).toBeDefined();
        }); 
        
        it("should show an error alert if the user makes a mistake", function (){
            
        });  
        it("should end the game when the score reaches 20", function (){
        expect(gameScore).toBeLessThanOrEqual(20);    
        });
        
        beforeEach(function() {
        timerCallback = jasmine.createSpy("timerCallback");
        jasmine.clock().uninstall();
        jasmine.clock().install();
        });
          
        it("should cause a timeout to be called synchronously", function() {
            setTimeout(function() {
              timerCallback();
            }, 100);
            
        expect(timerCallback).not.toHaveBeenCalled();
        
            jasmine.clock().tick(101);
        
            expect(timerCallback).toHaveBeenCalled();
          });
      
});
   

//Buttons
//Code for detecting click events is from https://stackoverflow.com/questions/23486444/error-on-jasmine-expected-event-click-to-have-been-triggered-on-div-id/23492830    

describe("Start button", function() { 
    it("should be clickable", function() {
        setFixtures('<button id="start"></button>');
        $('#start').on('click', function () { console.log("CLICK EVENT"); });
        var spyEvent = spyOnEvent('#start', 'click');
        $('#start').trigger('click');
        expect(spyEvent).toHaveBeenTriggered();
    });
});

describe("Reset button", function() {       
    it("should be clickable", function() {
        setFixtures('<btn id="reset"></btn>');
        $('#reset').on('click', function () { console.log("CLICK EVENT"); });
        var spyEvent = spyOnEvent('#reset', 'click');
        $('#reset').trigger('click');
        expect(spyEvent).toHaveBeenTriggered();
    });
        it("should reload the page", function() {
        setFixtures('<btn id="reset"></btn>');
        $('#reset').on('click', function () { console.log("CLICK EVENT"); });
        var spyEvent = spyOnEvent('#reset', 'click');
        $('#reset').trigger('click');
        expect(gameSequence).toEqual([]);
    }); 

});

describe("Coloured buttons", function() { 
    it("should be clickable", function() {
        setFixtures('<button class="colour"></button>');
        $('.colour').on('click', function () { console.log("CLICK EVENT"); });
        var spyEvent = spyOnEvent('.colour', 'click');
        $('.colour').trigger('click');
        expect(spyEvent).toHaveBeenTriggered();
    });
});