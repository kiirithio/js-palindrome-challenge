

function palindrome(str) {
    
    let re = /[^A-Za-z]/g;
    
    let lowRegStr = str.toLowerCase().replace(re, '');
  
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    
    return reverseStr === lowRegStr; 
    
  }
   const pali = palindrome("race3/// caR");
  console.log(pali)

