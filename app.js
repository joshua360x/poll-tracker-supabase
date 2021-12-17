import { redirectToPolls, signInHandler, signUpHandler } from './fetch-utils.js';

// import functions and grab DOM elements
const signUpForm = document.getElementById('signUp-form');
const signInForm = document.getElementById('signIn-form');
// let state


signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    let formData = new FormData(signUpForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const user = await signUpHandler(email, password);
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: app.js ~ line 15 ~ signUpForm.addEventListener ~ user', user);


    //   if (user){
    //     redirectToPolls();
    // } else {
    //     // eslint-disable-next-line no-console
    //     console.error(user);
    // }
});


signInForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    let formData = new FormData(signInForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const user = await signInHandler(email, password);


    if (user){
        redirectToPolls();
    } else {
    // eslint-disable-next-line no-console
        alert('Invalid Password');
    }
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
