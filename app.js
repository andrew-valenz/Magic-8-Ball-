/* Get DOM Elements */
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
const answerP = document.getElementById('answer');
/* Events */
const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

function toggleSelections() {
    promptSection.classlist.toggle('hide');
    fortuneSection.classlist.toggle('hide');
}
submitBtn.addEventListener('click', () => {
    toggleSelections();

    //generate a random number between 0 and the length
    // of the array minus 1
    const randInt = Math.floor(Math.random() * answers.length);

    // set the text content to the random choice
    answerP.textContent = randomChoice;
});

resetBtn.addEventListener('click', toggleSections);
