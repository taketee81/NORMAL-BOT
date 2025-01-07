const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV25KiSBT8lYl6lR65iWhERywK4g0FQbxszEMBBXIRsKpQscN/30C7o/thZ7aXp4qiyJOVmefwBvIiJmiGatB/AyWOz5CiZknrEoE+GFRhiDBgQAApBH3Azsy4NK97BTn8VNw49sBlZcTh4qq7o8QaLeXcrtcxKo/rV3BnQFl5Wez/AZDs1rI1Ow7ntyLFSWQHKAlNB8riYbdHZlduo4Tydp07q8kruDeIMMZxHmnlAR0RhtkM1SaM8ffoS+bUPFNpjzhPvrITVlGkSaJKN1oYGqYjJ6mvdSvcD7z8m/S7YW9w1cbcxi/HRzRyJHHoHa4jlexnR9VJsLDD4WpVGItMftIncZSjYBKgnMa0/rbuaO5rwmiouzeXhawvZF37bJu9jdGqibDoTA7Ssr75qijp4veIy0u50/bKIJHDGRJbGBLMCdIsme0iR7v4c2F/4G275TrJ7itxE39kJf0/ul+m+rzmWVOzlo7Xkgp3s5aynaxHaxWuTAFFiuTIlwvL5en36EemlQ60ephpHXUvtQ+aOiLzQftiW9i4qLt9Z8fDraXYOqd90oe0wn9iKZ97Zzzf2AeMs7nWXeqG6W4PpxRXY08f8WNtcmEnt6OiIEdunURd7lk7PNL5uO5VulSsvXZbgISPNsM4mE5YLKYmVS+vjxulqJ4EoM/dGYBRFBOKIY2L/LEn8gyAwdlGPkb0IS8w2JHtL7ZoQ/bqYtXlqgNrViKLDsoF2T29O0jIFHpsKS7TV8CAEhc+IgQF45jQAtcGIgRGiID+378YkKMrfRrXlBM4BoQxJnSdV2VWwODD1Y+X0PeLKqd2nfvDZoEw6LOf24jSOI9Io2OVQ+wf4jMaHiAloB/CjKA7AwJ0jn3U4AHtrEzzNDlZDkoXndXeSNiboTSUD0X+PMIGfIh6UucFyRC+iCLnv0CfE166yBdFThJ6PckHDIjfe6b55rcWJttWIg4H+2uVOudCJlt6OXPyMS3o7mHDU3uEUQD6FFeIAR7006p0ihTlf8Bddsan/Lrk8nbtmsVp7CrBphfw28rTvuA+PQX9t885NSyCBk/Ydy1BFaaAAcdHBOPm5rzAd0VRlDmB7YviX+TnpdERluXPHFHAgBw2h4GBfzgwRT8chJpa70Y0KAGiMM4I6IOhcVKLwFA1Yxv2MNF1xYiUYdQo/WHcRwc8E7bcJu2ZSsZLz5T5JFInoadmY+s0Yt2TOQ2ItZLTZXXTJ5by+i8goA+Kib/Zn9ahIbdGWnWxFljlxtNddMndtZFuprKl+4UuyCarDBNpsFuyhb0Nz9OV3MH8OTDO7ZWxtLIg3G5h2tHSXTUrVeu1qfYM0Ndi/kDbWmTA1hkSotjXeIOriemGpSyTnat3hphd1+KCY+147V5HU1osrqOut2OlzfhUHG8S2Ua8pmb7eG659uY69Hl1GD178zEbsveZHD+65u09bmGMHiPu3Yn/Muwz+Oyd+QLxPjN/E66Bk4ntOuoObsdbe1GISj3mL50VOzsEI5jUW0/TwqmKyTXWFHC//2JAmUEaFvjY/ECPHgQMyCChymfjOvEREQqPJehzXUHieywvsQw41kpZ2hTSj34HSvOY2Ab3fwD1mqeXCwgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Take Tee",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "23274448130",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});



