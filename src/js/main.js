let btnCouleur = document.getElementsByClassName("btn1");
let btnBorder = document.getElementsByClassName("btn2");
let btnSizeBorder = document.getElementsByClassName("btn3");
let visuel = document.getElementsByClassName("visuel")[0];
let visuelBorder;
let paletteC = document.getElementsByClassName("inputColor")[0];
let border2 = document.getElementsByClassName("btnBorder");
let borderRadius = document.getElementsByClassName("inputRadius")
let reset = document.querySelector(".monButton");



/* -------------------------------------------------------------------------- */
/*                       Event boutton Couleur Rangée 1                       */
/* -------------------------------------------------------------------------- */

for (let i = 0; i < btnCouleur.length; i++) {
    btnCouleur[i].addEventListener("click", () => {
        visuel.style.backgroundColor = btnCouleur[i].style.backgroundColor;
    })
};

/* -------------------------------------------------------------------------- */
/*                    Event boutton type de Border Rangée 1                   */
/* -------------------------------------------------------------------------- */

for (let i = 0; i < btnBorder.length; i++) {
    btnBorder[i].addEventListener("click", () => {
        visuel.style.border = btnBorder[i].style.border;
        visuelBorder = visuel.style.border;
    })
};



/* -------------------------------------------------------------------------- */
/*                          Event boutton Border Top                          */
/* -------------------------------------------------------------------------- */

for (let i = 0; i < btnSizeBorder.length; i++) {
    btnSizeBorder[i].addEventListener("click", () => {
        visuel.style.border = visuelBorder;
        if (i == 0) {
            visuel.style.borderTop = "2px solid red"
        } else if(i == 1){
            visuel.style.borderTop = "5px solid red";
        }else if(i == 2){
            visuel.style.borderTop = "10px solid red";
            
        }
    })
};

/* -------------------------------------------------------------------------- */
/*                      Event boutton Palette de couleur                      */
/* -------------------------------------------------------------------------- */
paletteC.addEventListener("input", () => {
    visuel.style.backgroundColor = paletteC.value;
});


/* -------------------------------------------------------------------------- */
/*                        Event choix du coté du Border                       */
/* -------------------------------------------------------------------------- */

for (let i = 0; i < border2.length; i++) {
    border2[i].addEventListener("click", () => {
        if (i == 0) {
            visuel.style.border = `${border2[i].value}px solid`;
        } else if(i == 1){
           visuel.style.borderTop = `${border2[i].value}px solid`;
        } else if(i == 2){
            visuel.style.borderRight = `${border2[i].value}px solid`;
        } else if(i == 3){
            visuel.style.borderBottom = `${border2[i].value}px solid`;
        } else{
            visuel.style.borderLeft = `${border2[i].value}px solid`;
        }
    })   
};


/* -------------------------------------------------------------------------- */
/*                             Event Border Radius                            */
/* -------------------------------------------------------------------------- */

for (let i = 0; i < borderRadius.length; i++) {
    borderRadius[i].addEventListener("click", () => {
        if (i == 0) {
            visuel.style.borderRadius = `${borderRadius[i].value}px`;
        } else if(i == 1){
            visuel.style.borderRadius = `${borderRadius[i].value}px 0px 0px 0px`;
        }else if(i == 2){
            visuel.style.borderRadius = `0px ${borderRadius[i].value}px 0px 0px `;
        }else if(i == 3){
            visuel.style.borderRadius = `0px 0px ${borderRadius[i].value}px 0px`;
        } else if(i == 4){
            visuel.style.borderRadius = `0px 0px 0px ${borderRadius[i].value}px`;
        }
    })
    
};



