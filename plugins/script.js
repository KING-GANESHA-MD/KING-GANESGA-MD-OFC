const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *GANEAHA*

> *DEVELOPER:*
*|* *NIROSHAN*

> *KING GANESHA-MD REPO:*
*|* *https://github.com/KING-GANESHA-MD/KING-GANESGA-MD-OFC*

> *SUPPORT CHENNAL:*
*|* *https://whatsapp.com/channel/0029Vb9P55PBqbrFEEMw9Z36*

*╰──────────────●●►*

> *POWERD BY KING GANESHA-MD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363415353248085@newsletter',
      newsletterName: "KING GANESHA-MD",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'KING GANESHA-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/KING-GANESHA-MD" ,
thumbnailUrl: "https://i.ibb.co/TqrthF8S/temp-image.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
