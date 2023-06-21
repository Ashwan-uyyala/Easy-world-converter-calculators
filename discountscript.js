
// creating a dollar as it is there in the input of the dollars to get it into js
function calculateBill(){
  // now getting the elent that is given input by user on webpage
      rupees=document.getElementById("billTotalInput").value;
      discount=document.getElementById("discountInput").value;


  // by sing the another reference id we are changing the value of the text
  const deci=discount/100
  const multitototal=deci*rupees
          document.getElementById("grandTotal").innerHTML = rupees-multitototal;
  }
 
  
  
  
  