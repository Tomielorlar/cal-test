var screen = document.querySelector('#screen');
function keyPress(numVal){
    if(screen.value == 0){
        screen.value='';
    }
    screen.value += numVal
}

function toClearScreen(val){
    screen.value = val;
}

function backspace(){
    var space = screen;
    screen.value = space.value.slice(0,-1) 
}
 function equalTo(){
    if(screen.value !=''){
        try{
            toClearScreen(eval(screen.value))
        }catch(err){
            toClearScreen('ERROR')
        }
    }
 }

 function sin(){
    screen.value = Math.sin(screen.value * Math.PI / 180);
 }

 function cos(){
    screen.value = Math.cos(screen.value * Math.PI / 180);
 }

 function tan(){
    screen.value = Math.tan(screen.value * Math.PI / 180);
 }

 function asin(){
    screen.value = Math.asin(screen.value) * (180 / Math.PI);
 }

 function acos(){
    screen.value = Math.acos(screen.value) * (180 / Math.PI);
 }

 function atan(){
    screen.value = Math.atan(screen.value) * (180 / Math.PI);
 }

 function percent(){
    screen.value = (screen.value / 100);
 }

 function square_root(){
    screen.value = Math.sqrt(screen.value);
 } 


