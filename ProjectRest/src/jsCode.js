var a = prompt("Тип сайта 0- корпоративный, 1- интернет-магазин, 2- визитка");

var b = prompt("Дизайн 0- Классический , 1- Индивидуальный ");

var c = prompt("Адаптивность 0- Адаптивный, 1-Не адаптивный");

function calculator(){
let a1=" ";
    array1 = ["корпоративный","интернет-магазин","визитка"];
    array2 = ["Классический","Индивидуальный"];
    array3 = ["Адаптивный","Не адаптивный"];
    
var b1=0;    
var money=0;
    if(a==0){
        a1=a1+" "+array1[0];
        money=money+2000;
        b1+=2;
    }
    if(a==1){
        a1=a1+" "+array1[1];
        money=money+3000;
         b1+=3;
    }
    if(a==2){
       a1=a1+" "+array1[2];
        money=money+1000;
         b1+=1;
    }
    
    if(b==0){
       a1=a1+" "+array2[0];
        money=money+2000;
         b1+=2;
    }
    if(b==1){
       a1=a1+" "+array2[1];
        money=money+1000;
         b1+=3;
    }
    
     if(c==0){
        a1=a1+" "+array3[0];
         money=money+3000;
          b1+=2;
    }
    if(c==1){
        a1=a1+" "+array3[1];
        money=money+1000;
         b1+=1;
    } 
    
    money=money+a1+", сроки: "+b1+" дней";
    return money;   
}

alert(calculator());