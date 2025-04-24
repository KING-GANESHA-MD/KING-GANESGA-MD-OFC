const config = require('../config')
const {cmd, commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    react: "⚙️",
    alias: ["uptime", "runtime"],
    desc: "Check system uptime and info",
    category: "main",
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        let status = `*𝐒𝐘𝐒𝐓𝐄𝐌 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍*
        
*⦁⦂⦁*━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁
*┃*
*┃* ⏰  *Uptime :-* ${runtime(process.uptime())}
*┃*
*┃* 📟 *Ram usage :-* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
*┃*
*┃* 🖥️ *Platform :-* ${os.hostname()}
*┃*
*┃* 👨‍💻  *Owner :-* 𝐂𝐇𝐀𝐍𝐔
*┃*
*┃* 🧬 *Version :-* 1.0.0
*┃*
*⦁⦂⦁*━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁

*𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐆𝐀𝐍𝐄𝐒𝐇𝐀 👨‍💻*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
