// const longinForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // 반복적으로 사용하는 string은 오타가 나면안되서
// 이렇게 대문자 변수로 저장하는게 좋다. string은 오타가나면 안잡아주지만 변수명은 잡아줌

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username); // localStorage에 저장할수있음 key, value이런식임
    // greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`;
    // ~이걸 fn과 같이 누르던가 걍 누르던가 영어일때 걍누르던가하면 됨
    // 이 방법은 string끼리 이어 붙일때 사용하는거임 백틱`기호로 해야함 "",''이게 아님
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}