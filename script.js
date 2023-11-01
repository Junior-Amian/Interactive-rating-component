'use strict';


document.getElementById('btn').addEventListener('click',function(){
    const input = document.querySelectorAll('input');
    let rating = 0;
    
    for(let i=0; i < input.length;i++){
        if(input[i].checked == true){
            rating = input[i].value
        }
    }

    document.querySelector('.message').textContent = `You selected ${rating} out of 5`
    document.querySelector('.card').style.display = 'none'
    
})