function chatHook(text) {
  var commandText = text.split(" ");
  if(commandText[0] == ".heal") {
    preventDefault();
    clientMessage("You used the .heal command!");
  }
}
