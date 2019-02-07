function chatHook(text) {
  var commandText = text.split(" ");
  if(commandText[0] == ".wood") {
    preventDefault();
    Player.addItemInventory(17,64,0);
  }
  if(commandText[0] == ".heal") {
    preventDefault();
    Player.setHealth(20);
  }
}
