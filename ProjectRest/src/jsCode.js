var a = prompt("Тип сайта 0- корпоративный, 1- интернет-магазин, 2- визитка");

var b = prompt("Дизайн 0- Классический , 1- Индивидуальный ");

var c = prompt("Адаптивность 0- Адаптивный, 1-Не адаптивный");

function calculator(){
let a1;
    array1 = ["корпоративный","интернет-магазин","визитка"];
    array2 = ["Классический","Индивидуальный"];
    array3 = ["Адаптивный","Не адаптивный"];
var money=0;
    if(a==0){
        a1=a1+" "+array1[0];
        money=money+2000;
    }
    if(a==1){
        a1=a1+" "+array1[1];
        money=money+3000;
    }
    if(a==2){
       a1=a1+" "+array1[2];
        money=money+1000;
    }
    
    if(b==0){
       a1=a1+" "+array2[0];
        money=money+2000;
    }
    if(b==1){
       a1=a1+" "+array2[1];
        money=money+1000;
    }
    
     if(c==0){
        a1=a1+" "+array3[0];
         money=money+3000;
    }
    if(c==1){
        a1=a1+" "+array3[1];
        money=money+1000;
    } 
    money=money+a1;
    return money;   
}

alert(calculator());