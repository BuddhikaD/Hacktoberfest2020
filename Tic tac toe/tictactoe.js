var i=0,j1=0,j2=0,j3=0,j4=0,j5=0,j6=0,j7=0,j8=0,j9=0;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
function play1(){
    if (j1==0) {
	if (i%2==0) {
    document.querySelector(".b1").textContent="O";
         b1="O";
     document.querySelector("#result1").textContent="Player B Turn";
    }
    else{
    document.querySelector(".b1").textContent="X";
         b1="X";
     document.querySelector("#result1").textContent="Player A Turn";     
    }

    i+=1;

        j1=1;
    }

    result();
}

function play2(){
    if (j2==0) {
    if (i%2==0) {
    document.querySelector(".b2").textContent="O";
         b2="O";
   document.querySelector("#result1").textContent="Player B Turn";      
    }
    else{
    document.querySelector(".b2").textContent="X";
         b2="X";
     document.querySelector("#result1").textContent="Player A Turn";     
    }

    i+=1;

        j2=1;
    }

    result();
}

function play3(){
    if (j3==0) {
    if (i%2==0) {
    document.querySelector(".b3").textContent="O";
         b3="O";
    document.querySelector("#result1").textContent="Player B Turn";
    }
    else{
    document.querySelector(".b3").textContent="X";
         b3="X";
     document.querySelector("#result1").textContent="Player A Turn";
    }

    i+=1;

        j3=1;
    }

    result();
}

function play4(){
    if (j4==0) {
    if (i%2==0) {
    document.querySelector(".b4").textContent="O";
         b4="O";
    document.querySelector("#result1").textContent="Player B Turn";
    }
    else{
    document.querySelector(".b4").textContent="X";
         b4="X";
     document.querySelector("#result1").textContent="Player A Turn";     
    }

    i+=1;

        j4=1;
    }

    result();
}

function play5(){
    if (j5==0) {
    if (i%2==0) {
    document.querySelector(".b5").textContent="O";
         b5="O";
    document.querySelector("#result1").textContent="Player B Turn";
    }
    else{
    document.querySelector(".b5").textContent="X";
         b5="X";
     document.querySelector("#result1").textContent="Player A Turn";
    }

    i+=1;

        j5=1;
    }

    result();
}

function play6(){
    if (j6==0) {
    if (i%2==0) {
    document.querySelector(".b6").textContent="O";
         b6="O";
    document.querySelector("#result1").textContent="Player B Turn";
    }
    else{
    document.querySelector(".b6").textContent="X";
         b6="X";
     document.querySelector("#result1").textContent="Player A Turn";
    }

    i+=1;

        j6=1;
    }

    result();
}

function play7(){
    if (j7==0) {
    if (i%2==0) {
    document.querySelector(".b7").textContent="O";
         b7="O";
    document.querySelector("#result1").textContent="Player B Turn";
    }
    else{
    document.querySelector(".b7").textContent="X";
         b7="X";
    document.querySelector("#result1").textContent="Player A Turn";
    }

    i+=1;

        j7=1;
    }

    result();
}

function play8(){
    if (j8==0) {
    if (i%2==0) {
    document.querySelector(".b8").textContent="O";
         b8="O";
    document.querySelector("#result1").textContent="Player B Turn";
    }
    else{
    document.querySelector(".b8").textContent="X";
         b8="X";
     document.querySelector("#result1").textContent="Player A Turn";
    }

    i+=1;

        j8=1;
    }

    result();
}

function play9(){
    if (j9==0) {
    if (i%2==0) {
    document.querySelector(".b9").textContent="O";
         b9="O";
    document.querySelector("#result1").textContent="Player B Turn";
    }
    else{
    document.querySelector(".b9").textContent="X";
         b9="X";

         document.querySelector("#result1").textContent="Player A Turn";
    }

    i+=1;

        j9=1;
    }

    result();
}

//Showing result
function result() {
	if (((b1=="O")&&(b2=="O")&&(b3=="O"))||((b4=="O")&&(b5=="O")&&(b6=="O"))||
        ((b7=="O")&&(b8=="O")&&(b9=="O"))||((b1=="O")&&(b4=="O")&&(b7=="O"))||
        ((b2=="O")&&(b5=="O")&&(b8=="O"))||((b3=="O")&&(b6=="O")&&(b9=="O"))||
        ((b1=="O")&&(b5=="O")&&(b9=="O"))||((b3=="O")&&(b5=="O")&&(b7=="O"))) {
		document.querySelector("#result").textContent="Player A won";
	}

    if (((b1=="X")&&(b2=="X")&&(b3=="X"))||((b4=="X")&&(b5=="X")&&(b6=="X"))||
        ((b7=="X")&&(b8=="X")&&(b9=="X"))||((b1=="X")&&(b4=="X")&&(b7=="X"))||
        ((b2=="X")&&(b5=="X")&&(b8=="X"))||((b3=="X")&&(b6=="X")&&(b9=="X"))||
        ((b1=="X")&&(b5=="X")&&(b9=="X"))||((b3=="X")&&(b5=="X")&&(b7=="X"))) {
        document.querySelector("#result").textContent="Player B won";
    }
}
