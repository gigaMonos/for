/*
//синтаксис
while(условие){
//тело цикла
//тут будет выполняться код
}

let num = 0;
while (num < 5){
    console.log(num);
    num++;
}

//конструкция DO...WHILE
let num = 0;
do{
    console.log(num);
    num++;
} while( num < 0); //выполняет циклы с false

//FOR синтаксис
for(Начало; Условие; Шаг){
    //тело цикла
    //тут будет выполняться код
}
 
//пример
for ( let num = 0; num < 5; num++){
    console.log(num);
}

let num = 0;
for(;num < 5; num++){
    console.log(num);
    if (num == 2) break;
}
console.log(`Well done, num = ${num}`);

let num = 0;

}

//метки
firstFor: for (let num = 0; num < 2; num++){
    for (let size = 0; size < 3; size++){
        if (size == 2){
            break firstFor;
        }
        console.log(size);
    }
}

//домашка
let num = 1;
while (num < 6){
    console.log(num);
    num++;
}

let num = 5; 
while(num){
    console.log(num);
    num--;
}

for(num = 1; num < 6; num++){
    console.log(num);
    if(num == 3) break;
}

let num = 1;
for(; num < 6; num++) {
    if(num == 3) continue;
    console.log(num);  
}
*/ 
