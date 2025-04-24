const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    react: "📟",
    desc: "Check uptime and system status",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // 🔹 Random Voice (PTT) URLs
        const voiceLinks = [
            "https://files.catbox.moe/7pxecx.mp3",
            "https://files.catbox.moe/me2yeu.mp3"
        ];
        
        // 🔹 Select a Random Voice Clip
        const voiceUrl = voiceLinks[Math.floor(Math.random() * voiceLinks.length)];

        // 📝 Status Message
        const status = `𝐇𝐄𝐘 ${PushName} 👋,

*❍ 𝐈 𝐀𝐌 𝐎𝐍𝐋𝐈𝐍𝐄 𝐍𝐎𝐖 😌*

*❍ 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐊𝐈𝐍𝐆 𝐆𝐀𝐍𝐄𝐒𝐇𝐀-𝐌𝐃 𝐁𝐎𝐓 🧬*

*❍ 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐆𝐀𝐍𝐄𝐒𝐇𝐀 👨‍💻*

*❍ 𝐔𝐒𝐄𝐅𝐔𝐋 𝐀𝐍𝐃 𝐄𝐒𝐘 𝐓𝐎 𝐔𝐒𝐄 𝐌𝐄 👍*

*❍ 𝐓𝐘𝐏𝐄 𝐖𝐈𝐓𝐇 𝐘𝐎𝐔 𝐏𝐑𝐑𝐅𝐈𝐗 (𝐌𝐄𝐍𝐔)* 📜

*❍ 𝐂𝐎𝐍𝐓𝐀𝐂 𝐈𝐅 𝐀𝐍𝐘 𝐇𝐀𝐕𝐄 𝐄𝐑𝐑𝐎𝐑 𝐖𝐈𝐓𝐇 𝐓𝐇𝐈𝐒 🥲*


*𝐌𝐀𝐈𝐍 𝐂𝐇𝐀𝐍𝐍𝐄𝐋* :

> *https://whatsapp.com/channel/0029Vb9P55PBqbrFEEMw9Z36*




*© 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐆𝐀𝐍𝐄𝐒𝐇𝐀 👨‍💻*`;

        // 🔹 1. Send Random Voice Message (PTT)
        const voiceMessage = await conn.sendMessage(from, {
            audio: { url: voiceUrl },
            mimetype: 'audio/mpeg',
            ptt: true, // Send as voice message (PTT)
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363415353248085@newsletter',
                    newsletterName: 'KING GANESHA-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // ⏳ Wait 2 seconds before sending GIF Video
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 🔹 2. Send GIF Video with Status Caption
        await conn.sendMessage(from, {
            video: { url: `https://files.catbox.moe/zw2cr1.mp4` }, // GIF URL
            caption: status,
            mimetype: "video/mp4",
            gifPlayback: true, // Enable GIF Play Mode
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363415353248085@newsletter',
                    newsletterName: 'KING GANESHA-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: voiceMessage });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
