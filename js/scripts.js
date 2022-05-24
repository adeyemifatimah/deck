$(document).ready(function () {
    $("#nin").submit(function (event) {
      event.preventDefault();
      let deck = [];
      let suits = ["diamonds", "spades", "hearts", "clubs"];
      let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
      
      suits.forEach(function(suit) {
        values.forEach(function(value) {
          deck.push(`${value}  ${suit}`);
        });
      });
      
      deck.forEach(function(card) {
        $("#output").append( "<li>".concat (card,"</li>"));
        
      });
    
  
      
  
    });
  
  
  
  });
  
  
