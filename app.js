/* Get DOM Elements */
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
const answerP = document.getElementById('answer');
const clearInputBox = document.getElementById('text-input');

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

//my functions
function toggleSections() {
    promptSection.classList.toggle('hide');
    fortuneSection.classList.toggle('hide');
}
submitBtn.addEventListener('click', () => {
    toggleSections();

    const randInt = Math.floor(Math.random() * answers.length);
    const randomChoice = answers[randInt];
    answerP.textContent = randomChoice;
    clearInputBox.value = '';
});

resetBtn.addEventListener('click', toggleSections);
