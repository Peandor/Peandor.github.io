var a = prompt("Тип сайта 0- корпоративный, 1- интернет-магазин, 2- визитка");

var b = prompt("Дизайн 0- Классический , 1- Индивидуальный ");

var c = prompt("Адаптивность 0- Адаптивный, 1-Не адаптивный");

//var arr = ["корпоративный","интернет-магазин","визитка"];

function calculator(money){
//var a1,b1,c1;
var money=0;
    if(a==0){
        //a1=mass[0][0];
        money=money+2000;
    }
    if(a==1){
        //a1=mass[0][1];
        money=money+3000;
    }
    if(a==2){
       // a1=mass[0][2];
        money=money+1000;
    }
    
    if(b==0){
       // b1=mass[1][0];
        money=money+2000;
    }
    if(b==1){
       // b1=mass[1][1];
        money=money+1000;
    }
    
     if(c==0){
        //c1=mass[2][0];
         money=money+3000;
    }
    if(c==1){
        //c1=mass[2][1];
        money=money+1000;
    }
    
}

alert(calculator());