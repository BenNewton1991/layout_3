let buttons = [];
let current_number = '';
let second_number = '' 
const screen=document.getElementById('screen');



var current = 0;
var operator = '';
var sum = '';


let add_div = document.getElementById('add');
add_div.addEventListener('click', function(){
    if (current == 0)
    {
        current = 1;
        screen.innerHTML = '';
    }
    add_numbers();
})

let subtract_div = document.getElementById('subtract');
subtract_div.addEventListener('click', function(){
    if (current == 0)
    {
        current = 1;
        screen.innerHTML = '';
    }
    subtract_numbers();
})

let mutiply_div = document.getElementById('multiply');
mutiply_div.addEventListener('click', function(){
    if (current == 0)
    {
        current = 1;
        screen.innerHTML = '';
    }
    multiply_numbers();
})

let divide_div = document.getElementById('divide');
divide_div.addEventListener('click', function(){
    if (current == 0)
    {
        current = 1;
        screen.innerHTML = '';
    }
    divide_numbers();
})

let equals_div = document.getElementById('equals');
equals_div.addEventListener('click', function(){
    equals_logic();
});

function equals_logic(){
    let current_number_float = parseFloat(current_number);
    let second_number_float = parseFloat(second_number);
    let output = '';

    if (current == 1)
    {
        if (operator == "+")
        {

            output = current_number_float + second_number_float;
            current_number = String(current_number_float + second_number_float);
            second_number = '0'
        }
        else if (operator == "-")
        {
            output = current_number_float - second_number_float;
            current_number = String(current_number_float - second_number_float);
            second_number = '0'
        }
        else if (operator == "/")
        {
            if (second_number_float == 0)
            {
                output = 'division by 0... error';
                current_number = '';
                second_number = '';
            }
            else 
            {
                output = current_number_float / second_number_float;
                current_number = String(current_number_float / second_number_float);
                second_number = '0';
            }
            
        }
        else if (operator == "x")
        {
            output = current_number_float * second_number_float;
            current_number = String(current_number_float * second_number_float);
            second_number = '0'
        }
    }
    else
    {
        output = current_number;
    }

    operator = '';



    screen.innerHTML = output;
}

// Need to complete th;is...
function add_numbers(){
    if (operator != '')
    {
        equals_logic();
    }
    operator = '+';    
}

function subtract_numbers(){
    if (operator != '')
    {
        equals_logic();
    }
    operator = "-";
}

function multiply_numbers(){
    if (operator != '')
    {
        equals_logic();
    }
    operator = "x";
}

function divide_numbers(){
    if (operator != '')
    {
        equals_logic();
    }
    operator = "/";
}

function create_button(value)
{
    let div = document.createElement('div');
    div.setAttribute('id', value);
    div.setAttribute('class', 'button');
    div.innerHTML = value;
    
    div.addEventListener('click', function(){
        get_number(value);
        put_on_screen();
    })

    return div;
}


for (let i = 9; i >= 0; i--)
{
    buttons.push(create_button(i));
}

buttons.push(create_button('.'));
buttons.push(create_clear_button('clear'));



function create_clear_button(value)
{
    let div = document.createElement('div');
    div.setAttribute('id', value);
    div.setAttribute('class', 'button');
    div.innerHTML = value;
    
    div.addEventListener('click', function(){
        current = 0;
        current_number = '';
        second_number = ''
        screen.innerHTML = '';
    })

    return div;
}


let number_container = document.getElementById('numbers');
for (let i = 0; i < buttons.length; i++)
{
    number_container.appendChild(buttons[i]);
}

function get_number(button_value)
{
    if (current == 0)
    {
        if (current_number.length <= 8)
        {
            current_number += button_value;
        }
        else
        {
            alert("Number too large!");
        }
    }
    else 
    {
        if (second_number.length <= 8)
            {
                second_number += button_value;
            }
            else
            {
                alert("Number too large!");
            }
    }
    
}


function put_on_screen()
{
    if (current == 0)
    {
        screen.innerHTML = current_number;
    }
    else 
    {
        screen.innerHTML = second_number;
    }
        
}