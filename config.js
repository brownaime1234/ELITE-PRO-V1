require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"KM1ovZKM4Yt8r9C+9i4Hs5Ja2rquc2DwY0aiIewv9HE="},"public":{"type":"Buffer","data":"GtudzKMtMXYSH8hoHL/MuyYthRWZBiQdt6qTb2wjfkw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"OGUmssxMfXPnM0Vblpq6NlIT+zcjN0lQmlc7cBcvFWY="},"public":{"type":"Buffer","data":"GIK67LOvlRnLnk1JAxdHYI+aV83rHJfPbMdjDWmDCVo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"WAPZxda9QHkfSnR8ny0WjWlnX4ERK7arTGeaYk0u52Y="},"public":{"type":"Buffer","data":"E/1kaYEXrNRRWITW735MPpkjgx4xeSFN9ctxQBheqgg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"MJX97bB6mlnQOR4p6BblafKhvJHTmkCj0YfOaoPW1EY="},"public":{"type":"Buffer","data":"atfBrpSA66PMcV7DTPLhr0LAW0dAf4t2C+lAWnPdjng="}},"signature":{"type":"Buffer","data":"lZz2M/FevS1ixnVXVXyVhfWLronBdU6m8uICMkATSZMy130DjdI14zExodZ5/fRATGbXY1Eu2f/y9R1jQ9bRiQ=="},"keyId":1},"registrationId":25,"advSecretKey":"MKVH8XugkihNZxFLnS8AbAivsMY0jnW8e13HRMLdz6o=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"F2Y57UE3","me":{"id":"22896275402:60@s.whatsapp.net","lid":"13276230500386:60@lid"},"account":{"details":"CKzFntgBENOG/scGGAEgACgA","accountSignatureKey":"y3WblbnYhJ7llUX44er/HJmiGPzEjElAAuifGbn773Q=","accountSignature":"wuUGf5h+yvGipQCsEBUZaitnuEMQyVQJvzI/rivaDuwOpYbJS8qYWGbBJT/AzRLit0e65R6PQtb2TyrfQ1jaDQ==","deviceSignature":"doiYENqccUY97aOXyZcHKEcGjtpupiGZW5AMpKkZU78ftFegfd1DCDzOhLFrdm4rMv1e7+wpM4DyRpGF/Pa/jg=="},"signalIdentities":[{"identifier":{"name":"22896275402:60@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bct1m5W52ISe5ZVF+OHq/xyZohj8xIxJQALonxm5++90"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAUIDQ=="},"lastAccountSyncTimestamp":1761575772,"lastPropHash":"nm3Bb"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '22896275402';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'false';
global.autoTyping = process.env.AUTO_TYPING === 'false';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'false';
global.autoread = process.env.AUTO_READ === 'false';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'false';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'false';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2347047504860';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '[✔] Task executed successfully.',
    prem: '[403] Access denied. Premium user required.',
    admin: '[401] Admin privileges required.',
    botAdmin: '[401] Bot must be an admin to run this command.',
    owner: '[403] Command restricted to bot owner.',
    group: '[400] Command available only in group chats.',
    private: '[400] Command available only in private chats.',
    wait: '[⏳] Processing... Please wait.',
    error: '[500] Unexpected error occurred.',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
