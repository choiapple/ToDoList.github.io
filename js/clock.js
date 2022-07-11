const clock = document.querySelector("h1#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// padStart는 String이 가져야하는 길이를 설정 그렇지 않다면 앞쪽에 "0"을 추가하는거임

// setInterval(sayHello, 4000); // 매번일어나야하는 무언가(실행함수, 실행할 함수의 주기)

//setTimeout(sayHello, 5000); // 5초기다렸다가 한번만 실행

getClock();
setInterval(getClock, 1000);