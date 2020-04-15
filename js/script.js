/******************************************
A Random Quote Generator
by - Shaibu Micheal
******************************************/


/*** 
 * `quotes` array 
***/
var quotes = [
  { quote: "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot.", source: "Wayne Gretzky", tags: ['#TwainMan', '#FreightTwain']},
  { quote: 'Go so far away that you stop being afraid of not coming back.', source: 'Eve Ensler', citation: 'I Am an Emotional Creature: The Secret Life of Girls Around the World', year: 2010},
  { quote: "Live Long and Prosper", source: "Mr. Spock", citiation: "Star Trek", year: '1967', tags: ['#Trekkies', '#Vulcan', '#Space']},
  { quote: "Memories, pressed between the pages of my mind. Memories, sweetened through the ages just like wine", source: " Elvis Presley", year: "1997"},
  { quote: 'We are what we pretend to be, so we must be careful about what we pretend to be.', source: 'Kurt Vonnegut', citation: 'Mother Night', tags: ['#KeepingIt100']}
]
console.log(quotes);

function getRandomQuote() {
  // this gets a random number ranging from 0 to (quotes.length - 1)
  var random = Math.floor(Math.random() * quotes.length);
  // the random number is used as the index for quotes to pick the right, random one and it is returned to the
  // print function.
  return(quotes[random ]);
}


function printQuote(){
  //Pull the quote in question from getRandomQuote
  var currentQuote = getRandomQuote();
  // Set a blank string to hold the HTML
  var html = ''
  //Set up a variable to point to our quote box in the HTML
  var quoteDiv = document.getElementById('quote-box')

  //Open up a p tag and place the quote itself in it
  html += '<p class="quote">' + currentQuote.quote 
  
  //If tags are present...
  if ('tags' in currentQuote){
    // ...Add the tags to the quote
      html += '  ' + currentQuote.tags.join(', ')
  }
  // Close the first p tag
  html += '</p>'

  // mandatory p tag for source
  html += '<p class="source">' + currentQuote.source 
  // if a citation is defined...
  if ('citation' in currentQuote) {
    // ...add it to the p tag
    html += '<span class="citation">' + currentQuote.citation + '</span>'
  }
  // If a year is defined...
  if ('year' in currentQuote){
    // ...add it to the p tag
    html += '<span class="year">' + currentQuote.year + '</span>'
  }
  html += '</p>'

  // take this HTML item we have been appending and set the html of the quote box to it
  quoteDiv.innerHTML = html

  // run the set randomBackground() program to change the background color
  setRandomBackground()
  
}

function setRandomBackground(){
  // This function changes the background color to one of 6 pre-defined colors based on a random
  // number generator.  First get the random number
  var randomNumber = Math.floor(Math.random() * 6)
  
  // then check to see what the number equals and assign the corresponding color
  if (randomNumber == 0){
    document.body.style.background = 'black';
  }else if (randomNumber == 1){
    document.body.style.background = 'blue';
  }else if (randomNumber == 2){
    document.body.style.background = 'green';
  }else if (randomNumber == 3){
    document.body.style.background = 'red';
  }else if (randomNumber == 4){
    document.body.style.background = 'purple';
  }else if (randomNumber == 5){
    document.body.style.background = 'yellow';
  }
}

// Run the function when the button is pressed...
document.getElementById('load-quote').addEventListener("click", printQuote, false);
// ...or when 30 seconds pass
window.setInterval(printQuote, 30000);