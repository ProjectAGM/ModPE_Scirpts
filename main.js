function chatHook(text) {
  var commandText = text.split(" ");
  if(commandText[0] == ".wood") {
    preventDefault();
    Player.addItemInventory(17,64,0);
  }
  if(commandText[0] == ".iron") {
    preventDefault();
    clientMessage("You used the .heal command!");
  }
}
