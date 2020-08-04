const QUOTES = [
    '突然のキスや熱いまなざしで',
    '私のことを決して本気で愛さないで',
    'ささやく声がしても Don\'t worry!',
    'Oh no, oh yes 人目忍ぶ恋選んだ',
]

export const getQuote = () => {
  return QUOTES[Math.floor(Math.random()*QUOTES.length)]
};
