
function mymy(){
    let score = document.getElementById("nilai").value;

    if (score >= 90){
        document.getElementById("home").innerHTML = "Selamat! Anda mendapatkan nilai A";
    }else if (score >= 80){
        document.getElementById("home").innerHTML = "Anda mendapatkan nilai B";
    }else if (score >= 70){
        document.getElementById("home").innerHTML = "Anda mendapatkan nilai C";
    }else if (score >= 60){
        document.getElementById("home").innerHTML = "Anda mendapatkan nilai D";
    }else{
        document.getElementById("home").innerHTML = "Anda mendapatkan nilai E";
    }
    
}