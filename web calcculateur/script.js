function languageChange(){
    let selc_lang = document.getElementById("language").value
    const hdr_tit = document.querySelector(".hdr span")
    const hdr_logo = document.getElementById("srv")
    const mainh2 = document.querySelector(".main .cont h2")
    const mainp = document.querySelector(".main .cont p")
    if (selc_lang === "ar"){
        hdr_tit.textContent = "ٱلة حاسبة";
        hdr_logo.textContent = "اوغو";
        mainh2.textContent = "ٱلة حاسبة MONSTER";
        mainp.textContent = "لا تتردد في القيام بعملبات حسابية"
    }else if (selc_lang === "fr") {
        hdr_tit.textContent = "Calculatrice";
        hdr_logo.textContent = "OGGO";
        mainh2.textContent = "Calculatrice MONSTER";
        mainp.textContent = "N'hésitez pas à faire opérations mathématiques";
    }else if (selc_lang === "en") {
        hdr_tit.textContent = "Calculator";
        hdr_logo.textContent = "OGGO";
        mainh2.textContent = "MONSTER Calculator";
        mainp.textContent = "Feel free to perform mathematical operations";
    }
    

}

function calc(){
    let vari = document.getElementById("inp");
    let result = eval(vari.value);
    vari.value = result;
}

function add(num){
    document.getElementById("inp").readOnly = false;
    let vari = document.getElementById("inp");
    vari.value += num;
    document.getElementById("inp").readOnly = true;

}

function clearInput(){
    document.getElementById("inp").readOnly = true;
    let vari = document.getElementById("inp");
    vari.value = "";
    document.getElementById("inp").readOnly = true;
}


function gcd() {
    const input = document.getElementById("inp").value;
    let numbers = input.split(" ");
    let a = parseInt(numbers[0]);
    let b = parseInt(numbers[1]);

    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a; // Return the calculated GCD
}


function lcm() {
    const input = document.getElementById("inp").value;
    let numbers = input.split(" ");
    let a = parseInt(numbers[0]);
    let b = parseInt(numbers[1]);
    let gcdValue = gcd(a, b); // Calculate GCD using the gcd function

    return (a * b) / gcdValue; 
}

function calculateGCD() {
    const resultElement = document.getElementById("inp");
    const gcdValue = gcd(); // Call the gcd function to calculate GCD
    resultElement.value = "GCD: " + gcdValue;
}

function calculateLCM() {
    const resultElement = document.getElementById("inp");
    const lcmValue = lcm(); // Call the lcm function to calculate LCM
    resultElement.value = "LCM: " + lcmValue;
}

const greetings = ['{ Hello }', '{ ⴰⵎⴰⵣⵉⵖ }', '{ مرحبا }', '{ Hola }', '{ Ciao }', '{ Привет }', '{ 你好 }', '{ سلام }','{ MONSTER }','{ こんにちは }', '{ 안녕하세요 }', '{ नमस्ते }', '{ Bonjour }'];
let index = 0;

function animateGreeting() {
    const greetingElement = document.querySelector('.main .cont .grt');
    const currentGreeting = greetings[index];
    const colors = ['red', 'chartreuse', '#0a49f6']; 

    greetingElement.textContent = currentGreeting;
    greetingElement.style.color = colors[index % colors.length];

    index = (index + 1) % greetings.length;
}

animateGreeting();
setInterval(animateGreeting, 700);