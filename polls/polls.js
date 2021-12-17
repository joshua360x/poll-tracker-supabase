// will import functions that are needed from DB

import { createPoll, getPolls } from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

const pollForm = document.getElementById('poll-form');
const currentPoll = document.querySelector('.current-Poll');
const pastPoll = document.querySelector('.past-Poll');
const voteA_Poll = document.querySelector('.voteA');
const voteB_Poll = document.querySelector('.voteB');
const finishPoll = document.querySelector('.finish-poll');




let question = '';
let optionA = '';
let optionB = '';
let voteA = 0;
let voteB = 0;



pollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(pollForm);
  
    question = formData.get('question');
    optionA = formData.get('optionA');
    optionB = formData.get('optionB');
  
    let poll = {
        QUESTION: question,
        OPTION_A: optionA,
        OPTION_B: optionB,
        VOTE_A: voteA,
        VOTE_B: voteB
    };

    displayCurrentPoll(poll);

});

voteA_Poll.addEventListener('click', () => {
    currentPoll.textContent = '';
    voteA++;
    let poll = {
        QUESTION: question,
        OPTION_A: optionA,
        OPTION_B: optionB,
        VOTE_A: voteA,
        VOTE_B: voteB
    };

    displayCurrentPoll(poll);


});

voteB_Poll.addEventListener('click', () => {
    currentPoll.textContent = '';
    voteB++;
    let poll = {
        QUESTION: question,
        OPTION_A: optionA,
        OPTION_B: optionB,
        VOTE_A: voteA,
        VOTE_B: voteB
    };
    displayCurrentPoll(poll);

});


finishPoll.addEventListener('click', async() => {
    let poll = {
        QUESTION: question,
        OPTION_A: optionA,
        OPTION_B: optionB,
        VOTE_A: voteA,
        VOTE_B: voteB
    };

    await createPoll(poll);

    displayAllPolls();
  
});

function displayCurrentPoll(poll) {
    const renderedPoll = renderPoll(poll);

    currentPoll.append(renderedPoll);
}


async function displayAllPolls() {
    const polls = await getPolls();
    for (const poll of polls) {
        let pastPolls_DB = renderPoll(poll);
        pastPoll.append(pastPolls_DB);
    }
}

