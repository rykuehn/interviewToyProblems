var message = 'find you will pain only go you recordings security the into if';

function reverseWords(string) {
  var message = string.split(' ');

  for(var i = 0; i< message.length-1; i++) {
    var hold = message[i];
    var back = message[message.length -1 - i];
    console.log({hold, back} , message[i])

    message[i] = back;
    message[message.length -1 - i] = hold;

  }

  console.log(message.join(" "))
}
reverseWords(message);