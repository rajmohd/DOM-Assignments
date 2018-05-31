function identifyById() {
    //  console.log(document.getElementById('para1'));
     alert(document.getElementById('para1'));
    }
    function identifyByClass() {
        alert(document.getElementByClassName('class1'));
     //   console.log(document.getElementsByClassName('class1'));
        }
        
        function identifyByTag() {
        console.log(document.getElementsByTagName('p'));
        }
        
        function changeBackground() {
        document.getElementById('block1').style.backgroundColor="blue";
        }
        
        function increaseFont() {
            document.getElementById('block2').style.fontSize="xx-large";
        }
        
        function changeFontColor() {
         document.getElementById('block3').addEventListener("mouseover",mouseOver);
         document.getElementById('block3').addEventListener("mouseover",mouseOut);
         function mouseOver( )
             {
             document.getElementById('block3').style.color="red";
             }
             function mouseOut( )
             {
                 document.getElementById('block3').style.color="black"; 
             }
        }
        
        function revertColor() {
          //  document.getElementById('block3').addEventListener("mouseover",mouseOut);
            
        }
        
        function hide() {
            var e=document.getElementById('block4');
            e.style.display='none';
        }
        
        function changeBackColor(color,box1) {
            var y= document.getElementsByClassName(box1);
            var i;
            for(i=0;i<y.length; i++)
            {
                y[i].style.backgroundColor=color;
        }
    }
        
        function addAdjacent() {
            document.getElementById('para2').innerHTML+="I got generated on the fly";
        }
        
        function removePara() {
            document.getElementById('para4').style.display='none';
        }
        
    
        
        function animatePara() {
        var x= document.getElementById('box5');
        var pos=0;
        var id=setInterval(frame,10);
        function frame(){
            if(pos=400){
                clearInterval(id);
            }
            else
            pos++;
            x.style.top=pos+'px';
            x.style.left=pos+'px';
        }
        
        }