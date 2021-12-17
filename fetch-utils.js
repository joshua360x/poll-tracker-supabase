/* eslint-disable no-console */
// supabase time 


const supabaseUrl = 'https://nhbazqqortcneqwecrjp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzU3MywiZXhwIjoxOTU1MDgzNTczfQ.ItAD5AYhCLq3yVOxHVfShkrOdhiFsmpg3uT9tBIISV0';
const client = supabase.createClient(supabaseUrl, SUPABASE_KEY);


export async function createPoll(poll){
  // const newGame = { ...game };

  // create a single new game in the games table using the above object
    const response = await client.from('polls').insert(
        { ...poll, user_id: client.auth.user().id }
    ).single();
    console.log('🚀 ~ file: fetch-utils.js ~ line 17 ~ createPoll ~ response.data', response.data);
    return response.data;
}

export async function getPolls() {
    const response = await client.from('polls').select();

    return response.data;
}


export async function signUpHandler(email, password) {
    let { user } = await client.auth.signUp({
        email: email,
        password: password
    });
    return user;
}


export async function signInHandler(email, password) {
    let { user } = await client.auth.signIn({
        email: email,
        password: password
    });
    return user;
}

export async function logOutHandler() {
    await client.auth.signOut();
    window.location.href = '../';
}


export async function getUser() {
    return client.auth.session();
}


export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectToPolls() {
    if (await getUser()) {
        location.replace('./polls');
    }
}
