// Code your solutions in this file
const namesArray = [ 'Lisa', 'Kaitlin', 'Jan' ];
 
function writeCards(names, event) {
  let thankYouCardsArray = []
  for (let i = 0; i < names.length; i++) {
    thankYouCardsArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouCardsArray
}

function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
}

