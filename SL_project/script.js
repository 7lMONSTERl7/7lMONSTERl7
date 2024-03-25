function languageChange(){
    let selec_lang = document.getElementById("language").value
    let welc = document.getElementById("welc")
    let para = document.getElementById("para")
    if (selec_lang === "en"){
        welc.textContent = " I'm MONSTER"
        para.textContent = "I'm a software engineer based in London, UK. I love to code and I love to learn.\n Welcome to my portflio. i made this project to prove my ability to buld html , css and java script projects"
    }else if (selec_lang === "ar"){
        welc.textContent = " انا مونستر"
        para.textContent = "أنا مهندس برمجيات مقيم في لندن، المملكة المتحدة. أنا أحب البرمجة وأحب التعلم. مرحبا بكم في محفظتي. لقد قمت بإنشاء هذا المشروع لإثبات قدرتي على إنشاء مشاريع بلغة html وcss وjava script"
    }else if (selec_lang === "fr"){
        welc.textContent = " Je suis MONSTER"
        para.textContent = "Je suis un programmeur de logiciel en Londres, Anglais. Je suis passionné à coder et je suis passionné à apprendre. Bienvenue dans mon portfolio. Je crée cette application pour provenir mon capacité à construire des projets html, css et java script"
    }

}

const greetings = ['{ Hello }', '{ ⴰⵎⴰⵣⵉⵖ }', '{ مرحبا }', '{ Hola }', '{ Ciao }', '{ Привет }', '{ 你好 }', '{ سلام }', '{ こんにちは }', '{ 안녕하세요 }', '{ नमस्ते }', '{ Bonjour }'];
let index = 0;
function lang_switch(){
    const ele_gret = document.querySelector('.gret');
    const cur_gret = greetings[index];
    const colors = ['red', 'chartreuse', '#0a49f6'];

    ele_gret.textContent = cur_gret
    ele_gret.style.color = colors[index % colors.length];

    index = (index + 1) % greetings.length;
    
}

lang_switch()
setInterval(lang_switch, 700);
