
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car="car.png";
background="Parking.png";
cars_width=200;
cars_height=200;
car_x=10;
car_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload= uploadfondo;
    background_imgTag.src= background;
    background2_imgTag=new Image();
    background2_imgTag.onload= uploadfondo;
    background2_imgTag.src= background;
car_imgTag=new Image();
car_imgTag.onload= uploadplayer;
car_imgTag.src= car;


}

 function uploadfondo(){
    ctx.drawImage(background2_imgTag,0,0,400,600);
ctx.drawImage(background_imgTag,402,0,400,600);}
function uploadplayer(){
ctx.drawImage(car_imgTag,car_x,car_y,cars_width,cars_height);}



window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    document.getElementById("valor").innerHTML=keyPressed;
    if(keyPressed=="38"){

        up();
        
    
    }
    if(keyPressed=="40"){
    
        down();
        
    }
    if(keyPressed=="37"){
        left();
        
    }
    if(keyPressed=="39"){
        rigth();
        
    }
    
    
    function up(){
    
    if(car_y>=0){
    
        car_y=car_y-10;
        
        uploadfondo();
        uploadplayer();
        console.log(car_y);
        if((car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)) {
 
            document.getElementById("Logro").innerHTML="Bien hecho es tu parking";
            document.getElementById("mal").innerHTML="";
            
            }if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)){

                document.getElementById("Logro").innerHTML="";
                document.getElementById("mal").innerHTML="No es tu parking";
                document.getElementById("mientras").innerHTML="";

            }
            if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)||(car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
                            
            }else{
                document.getElementById("Logro").innerHTML="";
                document.getElementById("mientras").innerHTML="Sigue avanzando";
                document.getElementById("mal").innerHTML="";
            }
        
    }
    
    }
    function down(){
    
        if(car_y<=400){
        
            car_y=car_y+10;
            
            uploadfondo();
            uploadplayer();
            console.log(car_y);
            if((car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
 
                document.getElementById("Logro").innerHTML="Bien hecho es tu parking";
                document.getElementById("mal").innerHTML="";
                }
                    if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)){

                        document.getElementById("Logro").innerHTML="";
                        document.getElementById("mal").innerHTML="No es tu parking";
                        document.getElementById("mientras").innerHTML="";

                    }
                    if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)||(car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
                            
                    }else{
                        document.getElementById("Logro").innerHTML="";
                        document.getElementById("mientras").innerHTML="Sigue avanzando";
                        document.getElementById("mal").innerHTML="";
                    }
            
        }
        
        }
        function left(){
    
            if(car_x>=0){
            
                car_x=car_x-10;
                
                uploadfondo();
                uploadplayer();
                console.log(car_x);
                if((car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
 
                    document.getElementById("Logro").innerHTML="Bien hecho es tu parking";
                    document.getElementById("mal").innerHTML="";
                    }if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)){

                        document.getElementById("Logro").innerHTML="";
                        document.getElementById("mal").innerHTML="No es tu parking";
                        document.getElementById("mientras").innerHTML="";

                    }
                    if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)||(car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
                            
                    }else{
                        document.getElementById("Logro").innerHTML="";
                        document.getElementById("mientras").innerHTML="Sigue avanzando";
                        document.getElementById("mal").innerHTML="";
                    }
                
            }
            
            }
            function rigth(){
    
                if(car_x<=610){
                
                    car_x=car_x+10;
                    
                    uploadfondo();
                    uploadplayer();
                    console.log(car_x);
                    if((car_x==200 && car_y==360)|| (car_y==10  && car_x==400)||(car_x==600 && car_y==330)) {
 
                        document.getElementById("Logro").innerHTML="Bien hecho es tu parking";
                        document.getElementById("mal").innerHTML="";
                        }if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)){

                            document.getElementById("Logro").innerHTML="";
                            document.getElementById("mal").innerHTML="No es tu parking";
                            document.getElementById("mientras").innerHTML="";
    
                        }
                        if((car_x==400  && car_y==340)||( car_y==340 && car_x==0)||(car_x==200 && car_y==360)||(car_y==10  && car_x==400)||(car_x==600 && car_y==330)){
                            document.getElementById("mientras").innerHTML="";
                        }else{
                            document.getElementById("Logro").innerHTML="";
                            document.getElementById("mientras").innerHTML="Sigue avanzando";
                            document.getElementById("mal").innerHTML="";
                        }
                    
                }
                
                

}
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
	
    
        

  
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{
    function uploadplayer2(){
        ctx.drawImage(car_imgTag,car_x,car_y,cars_width,cars_height);}
    function uploadplayer2(){
        ctx.drawImage(car_imgTag,posicionx,posiciony,cars_width,cars_height);}
    posicionx= e.touches[0].clientX - canvas.offsetLeft;
    posiciony = e.touches[0].clientY - canvas.offsetTop;
    uploadfondo();
    uploadplayer2(); 
    console.log("x"+posicionx);
    console.log("y"+posiciony);
    var x=posicionx>200 && posicionx<205;
    var y=posiciony>326 && posiciony<426;
    var x2=posicionx>387  && posicionx<409 ;
    var y2=posiciony>301 && posiciony<404;
    var x3=posicionx>-23 && posicionx<6;
    var y3=posiciony>334 && posiciony<409;
    var y4=posiciony>-10 && posiciony<=101;
    var x4=posicionx>=387  && posicionx<=405;
    var x5=posicionx>=600  && posicionx<=634 ;
    var y5=posiciony>=291 && posiciony<=427;
    var y6=posiciony>-7 && posiciony<=102;
    var x6=posicionx>187 && posicionx<=198;
    var y7=posiciony>-7 && posiciony<=102;
    var x7=posicionx>594 && posicionx<=615;
    var y8=posiciony>-7 && posiciony<=102;
    var x8=posicionx>-8 && posicionx<=5;
    if(x && y) {
 
        document.getElementById("Logro").innerHTML="Bien hecho es tu parking";
        document.getElementById("mal").innerHTML="";
        document.getElementById("mientras").innerHTML="";
        }if(x2 && y2){

            document.getElementById("Logro").innerHTML="";
            document.getElementById("mal").innerHTML="No es tu parking";
            document.getElementById("mientras").innerHTML="";

        }
        if(x3 && y3){
            document.getElementById("Logro").innerHTML="";
            document.getElementById("mal").innerHTML="No es tu parking";
            document.getElementById("mientras").innerHTML="";
        }
        if(y4 && x4){
            document.getElementById("Logro").innerHTML="Bien hecho es tu parking";
        document.getElementById("mal").innerHTML="";
        document.getElementById("mientras").innerHTML="";}
        
        
        
        if(x5 && y5){
            document.getElementById("Logro").innerHTML="Bien hecho es tu parking";
        document.getElementById("mal").innerHTML="";
        document.getElementById("mientras").innerHTML="";}
        


        
        if((x6 && y6)||(y7 && x7)||(y8 && x8)){
            document.getElementById("Logro").innerHTML="";
            document.getElementById("mientras").innerHTML="Sigue avanzando";
            document.getElementById("mal").innerHTML="";
        }
            
        
    
    

   

}
