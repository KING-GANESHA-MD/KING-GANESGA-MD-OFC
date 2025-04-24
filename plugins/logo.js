const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
    'pattern': 'logo',
    'desc': 'Create logos',
    'react': '🎗',
    'category': 'other',
    'filename': __filename
}, async (message, match, reply, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply: sendReply }) => {
    try {
        if (!args[0]) return sendReply('*_Please give me a text._*');
        
        let menuText = '*🕉️ KING GANESHA-MD LOGO MAKER 💫*\n\n╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼➻\n*◈ Text :* ' + q + '\n╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼➻\n\n*🔢 Reply The Number You Want ➠*\n\n 1 ➠ Black Pink\n 2 ➠ Black Pink 2\n 3 ➠ Silver 3d\n 4 ➠ Naruto\n 5 ➠ Digital Glitch\n 6 ➠ Pixel Glitch\n 7 ➠ Comic Style\n 8 ➠ Neon Light\n 9 ➠ Free Bear\n10 ➠ Devil Wings\n11 ➠ Sad Girl\n12 ➠ Leaves\n13 ➠ Dragon Ball\n14 ➠ Hand Written\n15 ➠ Neon Light \n16 ➠ 3d Castle Pop\n17 ➠ Frozen christmass\n18 ➠ 3d Foil Ballons\n19 ➠ 3d Colourful Paint\n20 ➠ American Flag 3d\n\n> *© Powered By KING GANESHA-MD*';

        const newsletterInfo = {
            'newsletterJid': '120363415353248085@newsletter',
            'newsletterName': 'KING GANESHA-MD',
            'serverMessageId': 999
        };

        const contextOptions = {
            'mentionedJid': [reply.sender],
            'forwardingScore': 999,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': newsletterInfo
        };

        const messageOptions = {
            'text': menuText,
            'contextInfo': contextOptions
        };

        let menuMessage = await message.sendMessage(from, messageOptions, { 'quoted': match });

        message.ev.on('messages.upsert', async (upsert) => {
            const msg = upsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();
            
            if (msg.message.extendedTextMessage.contextInfo && 
                msg.message.extendedTextMessage.contextInfo.stanzaId === menuMessage.key.id) {
                
                switch(selectedOption) {
                    case '1':
                        let result1 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result1.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '2':
                        let result2 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result2.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '3':
                        let result3 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result3.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '4':
                        let result4 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result4.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '5':
                        let result5 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result5.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '6':
                        let result6 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result6.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '7':
                        let result7 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result7.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '8':
                        let result8 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result8.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '9':
                        let result9 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result9.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '10':
                        let result10 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result10.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '11':
                        let result11 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result11.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '12':
                        let result12 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-typography-status-online-with-impressive-leaves-357.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result12.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '13':
                        let result13 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result13.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '14':
                        let result14 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result14.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '15':
                        let result15 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result15.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '16':
                        let result16 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-3d-castle-pop-out-mobile-photo-effect-786.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result16.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '17':
                        let result17 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result17.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '18':
                        let result18 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result18.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '19':
                        let result19 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result19.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    case '20':
                        let result20 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html&name=' + q);
                        await message.sendMessage(from, { 'image': { 'url': '' + result20.result.download_url }, 'caption': '> *© Powered By KING GANESHA-MD*' }, { 'quoted': match });
                        break;
                    default:
                        sendReply('*_Invalid number.Please reply a valid number._*');
                }
            }
        });
    } catch (error) {
        console.error(error);
        sendReply('' + error);
    }
});