let phrases = [
  { text: 'send my friend a funny GIF', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'find low-cost flight to Groningen', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'learn to dance gabber', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'watch a stand up show', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'dive into The Hound of the Baskervilles', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'watch a documentary about the Golden Gate Bridge', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'read news about corona and cry', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'get into the flow of sad songs and remember all the mistakes of youth', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'watch Raised by Wolves\'s trailer ... and first season as well', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'check out 193484 unread Telegram messages', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)
});
for (let i=0; i<=2; i++) {
  smoothly (phrase,'textContent', phrases[i].text );
  smoothly (image,'src', phrases[i].image );
}

