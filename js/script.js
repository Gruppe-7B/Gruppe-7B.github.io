function GenererKort(){
    var form = document.getElementById("MyForm");
    var form_Navn = form.elements[0].value;
    var form_Fra = form.elements[1].value
    var form_Alder = form.elements[2].value
    var form_Liker = form.elements[3].value

    var kort_Navn = document.getElementById("BC_Navn");
    var kort_Fra = document.getElementById("BC_Fra");
    var kort_Alder = document.getElementById("BC_Alder");
    var kort_Liker = document.getElementById("BC_Liker");

    kort_Navn.innerHTML = form_Navn;
    kort_Fra.innerHTML = form_Fra;
    kort_Alder.innerHTML = form_Alder;
    kort_Liker.innerHTML = form_Liker;
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}