   document.querySelector(".btnSuma").addEventListener("click",()=>{
    sumarNum("Rta1")
   })
   document.querySelector(".btnResta").addEventListener("click",()=>{
    restaNum("Rta1")
   })

   document.querySelector(".btnSuma2").addEventListener("click",()=>{
    sumarNum2("Rta2")
   })
   document.querySelector(".btnResta2").addEventListener("click",()=>{
    restaNum2("Rta2")
   })

   document.querySelector(".btnSuma3").addEventListener("click",()=>{
    sumarNum3("Rta3")
   })
   document.querySelector(".btnResta3").addEventListener("click",()=>{
    restaNum3("Rta3")
   })

   document.querySelector(".btnSuma4").addEventListener("click",()=>{
    sumarNum4("Rta4")
   })
   document.querySelector(".btnResta4").addEventListener("click",()=>{
    restaNum4("Rta4")
   })
   let cont=1
    function sumarNum(Rta) {
        cont=cont+1
        document.getElementById(Rta).innerHTML=cont
    }
    function restaNum(Rta) {
        cont=cont-1
        if (cont<0) {
            document.getElementById(Rta).innerHTML=0
        }else{
            document.getElementById(Rta).innerHTML=cont
        }
        
    }
    let cont2=1
    function sumarNum2(Rta) {
        cont2=cont2+1
        document.getElementById(Rta).innerHTML=cont2
    }
    function restaNum2(Rta) {
        cont2=cont2-1
        if (cont2<0) {
            document.getElementById(Rta).innerHTML=0
        }else{
            document.getElementById(Rta).innerHTML=cont2
        }
        
    }
    let cont3=1
    function sumarNum3(Rta) {
        cont3=cont3+1
        document.getElementById(Rta).innerHTML=cont3
    }
    function restaNum3(Rta) {
        cont3=cont3-1
        if (cont3<0) {
            document.getElementById(Rta).innerHTML=0
        }else{
            document.getElementById(Rta).innerHTML=cont3
        }
        
    }
    let cont4=1
    function sumarNum4(Rta) {
        cont4=cont4+1
        document.getElementById(Rta).innerHTML=cont4
    }
    function restaNum4(Rta) {
        cont4=cont4-1
        if (cont4<0) {
            document.getElementById(Rta).innerHTML=0
        }else{
            document.getElementById(Rta).innerHTML=cont4
        }
        
    }


document.querySelector("#card_1").addEventListener("click",()=>{
    
})
