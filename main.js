const btn = document.querySelector('.calculatorKey');
const display = document.querySelector('.calculatorDisplay');

btn.addEventListener('click', e=>{
    let btnTarget = e.target;
    let btnNumber = btnTarget.textContent;
    let btnOperator = btnTarget.dataset.action;
    let numberDispalyed = display.textContent;
   
    if(!btnOperator){
        if(numberDispalyed == 0 && !numberDispalyed.includes('.')){
            display.textContent = btnNumber;
        }else{
            display.textContent = numberDispalyed + btnNumber;
        }

    }else{
        switch (btnOperator){
            case 'plus':
            
            break;
            case 'decimal':
                if(!numberDispalyed.includes('.')){
                    display.textContent = numberDispalyed + '.';
                }
            break;
            case 'multiply':

            break;
            case 'minus':

            break;
            case 'divide':

            break;
            case 'delete':
                if(numberDispalyed.length === 1){
                    display.textContent = 0;
                }else{
                    display.textContent = numberDispalyed.slice(0,-1);
                }
                break;
            case 'clear':
                display.textContent = 0;
            break;
            case 'equal':

            break;
            case 'power':

            break;
        }
    }

   
})