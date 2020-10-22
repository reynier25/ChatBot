// Import the BotkitConversation dialog class
const { BotkitConversation } = require("botkit");

module.exports = function (controller) {

  let DIALOG_ID = "my_dialog_1";
  let myDialog = new BotkitConversation(DIALOG_ID, controller);

  myDialog.say(
    "Email: me@me.me - Phone: (999) 999-9999 - LinkedIn: <https://www.linkedin.com/in/leap-s-3b068b9a/|LinkedIn>"
  );

  controller.addDialog(myDialog);

  controller.hears("contact information", "message", async (bot, message) => {
      await bot.beginDialog(DIALOG_ID);
    console.log(message);
  });
};
