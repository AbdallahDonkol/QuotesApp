var quote = document.getElementById('quote');
var author = document.getElementById('author');
//&quotes array
var arr1 = [`“Be yourself; everyone else is already taken.”`,
`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
`“So many books, so little time.”`,
`“A room without books is like a body without a soul.”`,
`“You only live once, but if you do it right, once is enough.”`,
`“Be the change that you wish to see in the world.”`,
`“In three words I can sum up everything I've learned about life: it goes on.”`];
//&authors array
var arr2 = [`--Oscar Wilde`,`--Albert Einstein`,`--Frank Zappa`,`--Marcus Tullius Cicero`,`--Mae West`,
`--Mahatma Gandhi`,`--Robert Frost`];


function addQuote(){
    var quoteBox = '';
    var authorBox = '';
    var rand = Math.floor(Math.random()*arr1.length);
    for(var i=0;i<1;i++){
        quoteBox += arr1[rand];
        authorBox += arr2[rand];
    }
    console.log(rand);
    quote.innerHTML = quoteBox;
    author.innerHTML = authorBox;
}