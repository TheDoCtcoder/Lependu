// String.fromCharCode(97); = a to 122 = z
// console.log(String.fromCharCode(97));
let dico = ['wagon', 'cygne', 'flibustier', 'palisandre', 'caiman','quartz','walabi','ballast','ukulele','zozoter','gospel','guenon','puzzle','seisme'];


var nessai=8;
var msg="";
var msggp= "Il vous reste " + nessai + " Vie(s) ";
var msgg="<audio src='gagne.mp3' autoplay></audio>";
var msgp="<audio src='perdu.wav' autoplay></audio>";
var alpha=[];
for (i=1; i<=26; i++) {

    alpha[i]=String.fromCharCode(i+96);
}
var lnjouee = alpha;
document.getElementById("r1").innerHTML = alpha.join(" ");
//var mot=String.fromCharCode(119,97,103,111,110); //mot de passe avec code ascii pour ne  pas le trouver facilement dans le code
// var mot="cerise";
var rand = Math.floor(Math.random()*dico.length);
var mot= dico[rand];
var matrouver =mot.split();
for (i=0; i<(mot.length); i++) {
    // matrouver[i]="_";
    matrouver[i]="<span class='verte'>_</span>";
}

document.getElementById("vie").innerHTML = "Il vous reste " + nessai + " Vie(s) ";
document.getElementById("mot").innerHTML = matrouver.join(" ");


function pendu()  { 
    if (nessai==0) {
        document.getElementById("eb").button.disable=true;
        clearInterval(moninterval);
    }
        if (matrouver.join("") == mot) {
    document.getElementById("eb").button.disable= true;
    clearInterval(moninterval);
}
    
    temps = 61;
    var trouve=false;  
    var lentree = document.getElementById("el").value.toLowerCase();   
    

    lnjouee.forEach((element, index, object) => {
        if (element == lentree) {
            object.splice(index, 1);
        } 
    })


    for (i=0; i<=(mot.length-1); i++) {
        if (lentree == mot[i]) {
            matrouver[i]=lentree;
            trouve=true;
        }
        
    }

    if (!trouve) {
        nessai = (nessai -1);
        msggp= "Il vous reste " + nessai + " Vie(s) " +msgp;
        // <img src="pendu1.png" alt="" srcset="">
        document.getElementById("image").innerHTML = "<img src='pendu"+((8-nessai))+".png'</img>";
    }
        else {
            msggp= "Il vous reste " + nessai + " Vie(s) " +msgg;
        }


    if (nessai == 0) {
        msggp ="<<< Vous êtes MORT !!! Appuyez sur <span class='blanc'>'F5'</span> pour rejouer >>>"+msgp;
        clearInterval(moninterval); //supprime l'intervale
        for (i=0; i<=(mot.length-1); i++) {
            if (matrouver[i] != mot[i]) {
                matrouver[i] ="<span class='rouge'>"+mot[i]+"</span>";
            }
                else{
                matrouver[i] ="<span class='verte'>"+mot[i]+"</span>";
                }
                matrouver[mot.length]="<span class='blanc'> était le mot à trouver !!!</span>"
                document.getElementById("mot").innerHTML = matrouver.join();
            }
            
        }
        document.getElementById("timer").innerHTML = "";


    if (matrouver.join("") == mot) {
        msggp=("BRAVO, vous avez trouvé Appuyez sur F5 pour rejouer !!!") +msgg;
        clearInterval(moninterval);
        document.getElementById("timer").innerHTML = "";
        
    }



    document.getElementById("r1").innerHTML = lnjouee.join(" ");
    document.getElementById("mot").innerHTML = matrouver.join(" ");
    document.getElementById("vie").innerHTML = msggp;
    document.getElementById("el").value = "";

}

 let temps = 60;

const timerElement = document.getElementById("timer");

var moninterval = setInterval(function(){timers()},1000);

function timers() {
  
 let secondes = parseInt(temps);
  temps = temps -1;
  timerElement.innerText = `${secondes-1}` + " seconde(s) restante(s)";
  if ((temps == 0) && (nessai >1)) {
    nessai = (nessai -1);
    document.getElementById("vie").innerHTML = "Il vous reste " + nessai + " Vie(s) " +msgp;
    document.getElementById("image").innerHTML = "<img src='pendu"+((8-nessai))+".png'</img>";
     temps = 61;
            }
    else  if (temps ==0){
        
        document.getElementById("vie").innerHTML = "<<< Vous êtes MORT !!! Appuyez sur <span class='blanc'>'F5'</span> pour rejouer >>>"+ msgp;
        for (i=0; i<=(mot.length-1); i++) {
            if (matrouver[i] != mot[i]) {
                matrouver[i] ="<span class='rouge'>"+mot[i]+"</span>";
            }
                else{
                matrouver[i] ="<span class='verte'>"+mot[i]+"</span>";
                }
                matrouver[mot.length]="<span class='blanc'> était le mot à trouver !!!</span>";
                document.getElementById("mot").innerHTML =""; 
                document.getElementById("mot").innerHTML = matrouver.join(' ');
            }
        document.getElementById("image").innerHTML = "<img src='pendu"+(8)+".png'</img>";
        clearInterval(moninterval);
       
        document.getElementById("timer").innerHTML = "";
        document.getElementById("eb").button.disable= true;
        
    }
}


