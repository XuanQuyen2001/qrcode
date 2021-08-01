var code = document.querySelector('#code');
var input = document.querySelector('#input');
var btn = document.querySelector('#btn');
var toast = document.querySelector('#toast');
btn.addEventListener('click', generate);

function generate(){
    var data = input.value;
    var url = `http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
    code.src = url;
    makeToast();
}

function makeToast(){
    toast.className = 'show';
    setTimeout(function(){
        toast.className = toast.className.replace('show', '')
    }, 1500);
}