

export function renderPoll(poll) {
    const div = document.createElement('div');
    const question = document.createElement('p');
    const optA = document.createElement('p');
    const optB = document.createElement('p');
    const vote_A = document.createElement('p');
    const vote_B = document.createElement('p');



    div.classList.add('poll');

    question.textContent = `Question: ${poll.QUESTION}`;
    optA.textContent = `Option A: ${poll.OPTION_A}`;
    optB.textContent = `Option B: ${poll.OPTION_B}`;
    vote_A.textContent = `Vote A: ${poll.VOTE_A}`;
    vote_B.textContent = `Vote B: ${poll.VOTE_B}`;

    div.append(question, optA, optB, vote_A, vote_B);

    return div;
}