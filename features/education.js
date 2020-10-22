// Import the BotkitConversation dialog class
const { BotkitConversation } = require("botkit");

module.exports = function (controller) {

  let DIALOG_ID2 = "my_dialog_3";
  let myDialog = new BotkitConversation(DIALOG_ID2, controller);

  myDialog.say(
    "Institution: App Academy - Description: Coding bootcamp on full stack development - Timeline: May 2019-Oct2019"
  );
  myDialog.say(
    "Institution: University of Chicago - Description: BA in Philosophy - Timeline: Sep 2011-Jun2015"
  );

  controller.addDialog(myDialog);

  controller.hears("education", "message", async (bot, message) => {
    await bot.beginDialog(DIALOG_ID2);
    console.log(message);
  });
};
