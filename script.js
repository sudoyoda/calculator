
numberButtons = document.querySelectorAll('.number')

numberButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        display(e);
        console.log()
    })

})

botOperand = document.querySelector('.bot-operand')
topOperand = document.querySelector('.top-operand')


function display(e) {
    botOperand.textContent += e.target.textContent
}

operations = document.querySelectorAll('.operation')

operations.forEach(operation => {
    operation.addEventListener('click', function(e) {
        calculate(e)
    })
})

operator = document.querySelector('.operator')

function calculate(e) {
    if ( operator.textContent == '' && botOperand.textContent == '' 
    && topOperand.textContent == '')
    {
        return
    }
    if ( topOperand.textContent == '' && botOperand.textContent !== '' )
    {
        topOperand.textContent = botOperand.textContent
        operator.textContent = e.target.textContent
        botOperand.textContent = ''
    }
    if (topOperand.textContent !== '' && botOperand.textContent !== '')
    {
        doMaths(topOperand.textContent, botOperand.textContent, operator.textContent, e.target.textContent)
        console.log(operator.textContent);
        console.log(e.target.textContent);
    }
    if (topOperand.textContent !== '' && botOperand.textContent == '')
    {
        operator.textContent = e.target.textContent
    }
    
}

function doMaths(x,y,sign,b) {
    let xx = parseInt(x)
    let yy = parseInt(y)
    
    switch(sign){
        case '+':
        topOperand.textContent = xx+yy
        botOperand.textContent = ''
        operator.textContent = b
        break
        case '-':
        topOperand.textContent = xx-yy
        botOperand.textContent = ''
        operator.textContent = b
        break
        case '/':
        topOperand.textContent = xx/yy
        botOperand.textContent = ''
        operator.textContent = b
        break
        case '*':
        topOperand.textContent = xx*yy
        botOperand.textContent = ''
        operator.textContent = b
        break
    }
    
}

clearButton = document.querySelector('.clear')

clearButton.addEventListener('click', ()=> {
    topOperand.textContent = ''
    botOperand.textContent = ''
    operator.textContent = ''
})


deleteButton = document.querySelector('.delete')

deleteButton.addEventListener('click', ()=> {
    botOperand.textContent = botOperand.textContent.slice(0,-1)
})

equalsButton = document.querySelector('.equals')

equalsButton.addEventListener('click', ()=> {
    doMaths(topOperand.textContent, botOperand.textContent, operator.textContent)
})