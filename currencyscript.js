
// creating a dollar as it is there in the input of the dollars to get it into js
function dollars(){
// now getting the elent that is given input by user on webpage
    usd=document.getElementById("USDTotalInput").value;
// by sing the another reference id we are changing the value of the text
        document.getElementById("perPersonTotal").innerHTML = usd * 80;
}



