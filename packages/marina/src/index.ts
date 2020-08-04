const QUOTES = [
    'あきれるほどに I sing for you 伝えたい この夏が終わる前に',
    'Hajimari no futari',
]

export const getQuote = () => {
  return QUOTES[Math.floor(Math.random()*QUOTES.length)]
};
