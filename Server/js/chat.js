var messageDiv = document.getElementById('messages');
var input = document.getElementById('input');
var socket = io();
var name;
var isNameSet = false;

if (isNameSet) {
  document.getElementById('sendBtn').innerHTML = 'Senden';
}

function senden(){
  if (!isNameSet && input.value !== '') {
    name = input.value;
    isNameSet = true;
    document.getElementById('sendBtn').innerHTML = 'Senden';
    input.value = '';
  }else if ('WebSocket' in window && input.value !== ''){
    socket.emit('chat message',name+': '+input.value);
    input.value = '';
  }
}

socket.on('chat message', function(msg){
    messageDiv.innerHTML = messageDiv.innerHTML + '<p>' + msg + '</p>';
    window.scrollTo(0,document.body.scrollHeight);
});
