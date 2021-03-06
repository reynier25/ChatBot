// Import the BotkitConversation dialog class
const { BotkitConversation } = require("botkit");

module.exports = function (controller) {

  let DIALOG_ID1 = "my_dialog_2";
  let myDialog = new BotkitConversation(DIALOG_ID1, controller);

  myDialog.say(
    "Tech: Ruby on Rails - Years: 1"
  );
  myDialog.say(
    "Tech: Node.js - Years: 1"
  );
    myDialog.say(
        "Tech: React - Years: 1"
    )
    myDialog.say(
        "Tech: PostgreSQL - Years: 1"
    )
    myDialog.say(
        "Tech: MongoDB - Years: 1"
    )

  controller.addDialog(myDialog);

  controller.hears("tech stack", "message", async (bot, message) => {
    await bot.beginDialog(DIALOG_ID1);
    console.log(message);
  });
};
