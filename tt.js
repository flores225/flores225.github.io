let sketchProc = function(processingInstance) {
    with (processingInstance) {

       size(1000, 600);
       frameRate(300);
     // A partir de esta linea podemos codificar nuestros dibujos

       let colorFondo = color(0,0,0)

       let x=500;
       direccion =0;
       let puntos=0;

       let y=0;
       let xAleatorio = 600;
       let dhr = 1;
       let dvr = 1;
       draw=function(){
        background(colorFondo);
        textSize(40);
        fill(255,255,255);
        text("PUNTOS: " +   puntos,400,100);
        fill(225,225,225)
        ellipse(xAleatorio,y,10,10);
        y=y+dvr;
        xAleatorio = xAleatorio + dhr;
        if(xAleatorio >= 1000){
            dhr = -1;
        }
        if(y >= 600 ){
         dvr= 0;
         textSize(60);
         fill(225,225,225);
         text("GAME OVER" , 300,200);
        }
        if(xAleatorio == 0){
            dhr = +1;
        }
        if(y==0){
           dvr = +1;
        }

         if(xAleatorio <= x+50 && xAleatorio >= x-50 && y>=500 && y<=500){
          dvr = -1
          puntos=puntos+1
          
         }
          ///elipse
          fill(255,255,255);
          rect(x,500,100,20);

          x=x+direccion;
          keyPressed=function(){
           if(key.code==97){
            direccion=-2;
           }
           if(key.code==100){
            direccion=+2;
            colorFondo=color(0,0,0)
           }
          }
          if(x>=975){
           direccion= -2;
          }

          if(x<=25){
           direccion= +2;
          }

       }
      


//------------------------------------------------------

   }};
   let canvas = document.getElementById("mycanvas");
   let processingInstance = new Processing(canvas, sketchProc);


/*let sketchProc = function(processingInstance) {
    with (processingInstance) {

       size(1000, 600); 
       frameRate(300);
     // A partir de esta linea podemos codificar nuestros dibujos
     let colorFondo = color(20,100,89)
     
     let x = 500;
     direccion = 0;
     
     let y = 0;

     let suertex = 0;
     draw=function(){
         background(colorFondo);
        
        fill(89,78,49)
        ellipse(suertex,y,20,20); 
        y++;
         suertex=suertex+1;
        if( y >= 600 ){
            y=0;
            suertex = random(1 , 1000);
        } 

        if( suertex <= x +50 && suertex >= x-50 &&  y>=450 && y<=550){
            textsize(60);
            fill(0,0,0);
            text("POINT" ,200,200);
            
        } 
           fill(255,70,80);
           rect(x,500,100,100);
           x = x + direccion;
           
           keyPressed=function(){
              if(key.code == 97){
               direccion = -2;
              }
              if(key.code == 100){
              direccion = +2;
              colorFondo = color(0,140,90)
              }
        }
        if(x >=1100){
              direccion=-2;
        }
        if(x <= 10){
              direccion=+2;
        }
    }
       
    
    
     
     //------------------------------------------------------

}};
let canvas = document.getElementById("mycanvas"); 
let processingInstance = new Processing(canvas, sketchProc); */