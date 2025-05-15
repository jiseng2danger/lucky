
const C4 = document.querySelector('.C4');      //도(C4)
const C4_up = document.querySelector('.C14');  //도#
const D4 = document.querySelector('.D4');      //레
const D4_up = document.querySelector('.D14');  //레#
const E4 = document.querySelector('.E4');      //미
const F4 = document.querySelector('.F4');      //파
const F4_up = document.querySelector('.F14');  //파#
const G4 = document.querySelector('.G4');      //솔
const G4_up = document.querySelector('.G14');  //솔#
const A4 = document.querySelector('.A4');      //라
const A4_up = document.querySelector('.A14');  //라#
const B4 = document.querySelector('.B4');      //시
const C5 = document.querySelector('.C5');      //도
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const music = document.querySelector('.music');


let a = 0;  
let b = 0;  

let w = 0;
let w1 = 0;
let w2 = 0;
let w3 = 0;
let w4 = 0;
let w5 = 0;
let w6 = 0;
let w7= 0;
let w8 = 0;
let w9 = 0;
let w10 = 0;
let w11 = 0;
let w12 = 0;
let w13 = 0;


start.addEventListener('click', () => {
    a++;  
    let n = Math.floor(Math.random()*(13-1+1))+1;

    if (n == 1){
        C4.classList.remove('yellow');
        C4.classList.add('yellow');
        w++
    }
    if (n == 2){
        C4_up.classList.remove('yellow');
        C4_up.classList.add('yellow');
        w1++
    }
    else if (n == 3){
        D4.classList.remove('yellow');
        D4.classList.add('yellow');
        w2++
    }
    else if (n == 4){
        D4_up.classList.remove('yellow');
        D4_up.classList.add('yellow');
        w3++
    }
    else if (n == 5){
        E4.classList.remove('yellow');
        E4.classList.add('yellow');
        w4++
    }
    else if (n == 6){
        F4.classList.remove('yellow');
        F4.classList.add('yellow');
        w5++
    }
    else if (n == 7){
        F4_up.classList.remove('yellow');
        F4_up.classList.add('yellow');
        w6++
    }
    else if (n == 8){
        G4.classList.remove('yellow');
        G4.classList.add('yellow');
        w7++
    }
    else if (n == 9){
        G4_up.classList.remove('yellow');
        G4_up.classList.add('yellow');
        w8++
    }
    else if (n == 10){
        A4.classList.remove('yellow');
        A4.classList.add('yellow');
        w9++
    }
    else if (n == 11){
        A4_up.classList.remove('yellow');
        A4_up.classList.add('yellow');
        w10++
    }
    else if (n == 12){
        B4.classList.remove('yellow');
        B4.classList.add('yellow');
        w11++
    }
    else if (n == 13){
        C5.classList.remove('yellow');
        C5.classList.add('yellow');
        w12++
    }
    if (w >= 1 && w1 >= 1 && w2 >= 1 && w3 >= 1 && w4 >= 1 && w5 >= 1 && w6 >= 1 && w7 >= 1 && w8 >= 1 && w9 >= 1 && w10 >= 1 && w11 >= 1 && w12 >= 1 ){


    
    
        start.disabled = true;

    }
});



stop.addEventListener('click', () => {
    C4.classList.remove('yellow');




    

    C4_up.classList.remove('yellow');

    D4.classList.remove('yellow');

    D4_up.classList.remove('yellow');


    E4.classList.remove('yellow');

    F4.classList.remove('yellow');



    F4_up.classList.remove('yellow');



    G4.classList.remove('yellow');

    

    G4_up.classList.remove('yellow');



    A4.classList.remove('yellow');



    A4_up.classList.remove('yellow');

    B4.classList.remove('yellow');


    C5.classList.remove('yellow');




    let c = ((13/a) * 100);


    alert(`${a}번 시도 중 ${a-13}번실패 당신의 운은 ${c.toFixed(1)}%입니다.`);


    if (c > 40) {
        alert('당신은 운이좋으시군요')
        
        location.reload(true);

    }

    else if (c < 20){
        alert('운이 별로군요')
        location.reload(true);

    }
    location.reload(true);

    
});