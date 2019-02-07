/*function modTick() {
  Server.getAllPlayerNames();
}
*/
function chatReceiveHook(str, sender) {
  clientMessage(ChatColor.RED + sender + " says: " + str);
}
