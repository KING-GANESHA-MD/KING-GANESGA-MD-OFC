const {cmd , commands} = require('../command');

cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    react: "⚠️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const steps = [
            '💻 *gαηєѕнα м∂ нα¢кιηg ѕтαятιηg* 💻',
            '',
            '*Initializing hacking tools...* 🛠️',
            '*Connecting to remote servers...* 🌐',
            '',
            '```[███] 10%``` ⏳'                                            ,
            '```[██████] 20%``` ⏳'                                   ,
            '```[█████████] 30%``` ⏳'                               ,
            '```[████████████] 40%``` ⏳'                            ,
            '```[███████████████] 50%``` ⏳'                       ,
            '```[██████████████████] 60%``` ⏳'                 ,
            '```[█████████████████████] 70%``` ⏳'            ,
            '```[████████████████████████] 80%``` ⏳'        ,
            '```[███████████████████████████] 90%``` ⏳'    ,
            '```[██████████████████████████████] 100%``` ✅',
            '',
            '🔒 *System unlock: Successful!* 🔓',
            '🚀 *Command Execution: Complete!* 🎯',
            '',
            '*📡 Transmitting data...* 📤',
            '*🕵️‍♂️ Ensuring stealth...* 🤫',
            '*🔧 Finalizing operations...* 🏁',
            '*🔧 Silent Get Your All Data...* 🎁',
            '',
            ' *👨‍💻 𝐒𝐘𝐒𝐓𝐄𝐌 𝐇𝐀𝐂𝐊𝐄𝐃 𝐒𝐔𝐂𝐂𝐄𝐒𝐅𝐔𝐋𝐋𝐘 👩‍💻☣*',
            '',
            '𝘱𝘰𝘸𝘦𝘳𝘥 𝘣𝘺 𝘎𝘈𝘕𝘌𝘚𝘏𝘈 👨‍💻'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});
