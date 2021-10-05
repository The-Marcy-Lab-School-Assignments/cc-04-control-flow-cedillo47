//1
function fizzBuzz(){
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        } else if ( i % 5 === 0) {
            console.log('buzz')
        } else if (i % 3 === 0){
            console.log('fiz')
        } else {
            console.log(i)
        }
    }
  
}
// fizzBuzz()
//2
function fizzBuzz(number){
    const answer = [];
    for (let i = 1; i <= number; i++ ){
        if(i % 3 === 0 && i % 5 === 0){
            answer.push("fizzBuzz")
        } else if ( i % 5 === 0){
            answer.push('buzz')
        } else if ( i % 3 === 0){
            answer.push("fiz")
        } else {
            answer.push(i)
        }
    
        
    }
  
  return answer;
}

fizzBuzz(40)
