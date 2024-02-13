const X = document.querySelector('#operand1');
const Y = document.querySelector('#operand2');
const ope = document.querySelector('#opecode');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const out = document.createElement('p');

    if (isNaN(X.value) || isNaN(Y.value)) {
        out.innerText = '数値を入力してください';
        document.body.appendChild(out);
        return;
    }

    const x = parseFloat(X.value);
    const y = parseFloat(Y.value);
    
    switch (ope.value) {
        case '+':
            out.innerText = x + ' + ' + y + ' = ' +  (x + y);
            break;
        case '-':
            out.innerText = x + ' - ' + y + ' = ' +  (x - y);
            break;
        case '*':
            out.innerText = x + ' × ' + y + ' = ' +  (x * y);
            break;
        case '/':
            out.innerText = x + ' ÷ ' + y + ' = ' +  (x / y);
            break;
        default:
            out.innerText = '「+ - * / (半角)」のいずれかの演算子を入力してください';
    }

    document.body.appendChild(out);
});