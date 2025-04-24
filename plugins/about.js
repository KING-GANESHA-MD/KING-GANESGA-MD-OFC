/* 
created by TOHID KHAN
contact me 917849917350
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "ℹ️",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│
 ◈ •│       「 GANESHA 」
 ◈ •│
 ◈ •│ Name      : GANEAHA
 ◈ •│
 ◈ •│ Place      : SRI LANKA
 ◈ •│
 ◈ •│ Gender    : MALE
 ◈ •│
 ◈ •│ Age       : 99+
 ◈ •│
 ◈ •│ Status     : OWNER
 ◈ •│
 ◈ •│ Phone     : wa.me/
 ◈ •│
 ◈ •│ Github     : mrdinesh595
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
 
 
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│
 ◈ •│       「 NIROSHAN 」
 ◈ •│
 ◈ •│ Name      : NIROSHAN
 ◈ •│
 ◈ •│ Place      : SRI LANKA
 ◈ •│
 ◈ •│ Gender    : MALE
 ◈ •│
 ◈ •│ Age       : 99+
 ◈ •│
 ◈ •│ Status     : DEVLOPER
 ◈ •│
 ◈ •│ Phone     : wa.me/94716682532
 ◈ •│
 ◈ •│ Github     : niroshanbit
 ◈ •│
 ◈ •│ Website    :https://niroshanbit.github.io/convert/Convert.html
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •*•────────────•⟢*
> © POWERD BY KING GANESHA-MD
 ◈ •*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
