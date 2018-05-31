function identifyById() {
    //  console.log(document.getElementById('para1'));
     alert(document.getElementById('para1'));
    }
    function identifyByClass() {
        alert(document.getElementByClassName('class1'));
     //   console.log(document.getElementsByClassName('class1'));
        }
        
        function identifyByTag() {
        alert(document.getElementsByTagName('p'));
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
            e.style.hide();
        }
        
        function changeBackColorForAllBox() {
            document.getElementById('block3').style.changeFontColor="red";
        }
        
        
        function addAdjacent() {
        }
        
        function removePara() {
        
        }
        
        function animatePara() {
        
        }