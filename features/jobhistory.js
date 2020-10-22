// Import the BotkitConversation dialog class
const { BotkitConversation } = require("botkit");

module.exports = function (controller) {

    let DIALOG_ID = "my_dialog_1";
    let myDialog = new BotkitConversation(DIALOG_ID, controller);

    myDialog.say("Company: Summa Eco Systems - Title: Operations Associate - Description: Clerical duties for landscape contractor - Timeline: Jun 2015-Aug 2016");
    myDialog.say("Company: QuickBridge Funding - Title: Credit Processor - Description: Handled credit applications for business loans - Timeline: Dec 2017-Oct 2018");
    
    controller.addDialog(myDialog);

    controller.hears('job history', 'message', async (bot, message) => {
        await bot.beginDialog(DIALOG_ID);
        console.log(message);
    });
}