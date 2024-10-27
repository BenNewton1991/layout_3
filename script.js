let buttons = [];


let current_number = []; 

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


let number_container = document.getElementById('numbers');
for (let i = 0; i < buttons.length; i++)
{
    number_container.appendChild(buttons[i]);
}

function get_number(button_value)
{
    if (current_number.length <= 8)
    {
        current_number.push(button_value);
    }
    else
    {
        alert("Number too large!");
    }
    
}

screen=document.getElementById('screen');

function put_on_screen()
{
    let to_add = '';
    for (let i = 0; i < current_number.length; i++)
    {
        to_add+=current_number[i];
    }
    screen.innerHTML = to_add;
}