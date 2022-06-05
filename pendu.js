// String.fromCharCode(97); = a to 122 = z
// console.log(String.fromCharCode(97));
var nessai=8;
var msg="";
var msgg="<audio src='gagne.mp3' autoplay></audio>";
var msgp="<audio src='perdu.wav' autoplay></audio>";
var alpha=[];
for (i=1; i<=26; i++) {

    alpha[i]=String.fromCharCode(i+96);
}
var lnjouee = alpha;
document.getElementById("r1").innerHTML = alpha.join(" ");
var mot=String.fromCharCode(119,97,103,111,110); //mot de passe avec code ascii pour ne  pas le trouver facilement dans le code
// var mot="cerise";
var matrouver =mot.split();
for (i=0; i<(mot.length); i++) {
    matrouver[i]="_";
}

document.getElementById("vie").innerHTML = "Il vous reste " + nessai + " Vie(s) ";
document.getElementById("mot").innerHTML = matrouver.join(" ");



function pendu()  { 
    var trouve=false;
    var msggp= "Il vous reste " + nessai + " Vie(s) ";
    var lentree = document.getElementById("el").value;   

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
        msggp ="<<< Vous êtes MORT !!! >>>";
    }

    if (matrouver.join("") == mot) {
        msggp=("BRAVO, vous avez trouvé !!!") +msgg;
    }



    document.getElementById("r1").innerHTML = lnjouee.join(" ");
    document.getElementById("mot").innerHTML = matrouver.join(" ");
    document.getElementById("vie").innerHTML = msggp
    document.getElementById("el").value = "";


}