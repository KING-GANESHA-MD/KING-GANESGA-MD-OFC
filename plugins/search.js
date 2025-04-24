const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const yts = require('yt-search');

// GitHub profile search command
cmd({
  pattern: 'github',
  desc: 'Get Infomations For Github Profile.',
  category: 'search',
  filename: __filename
}, async (m, sock, msg, { from, quoted, body, q, reply }) => {
  try {
    const res = await fetchJson(`https://www.dark-yasiya-api.site/other/gitstalk?user=${q}`);
    let resultText = `*🌐 KING GANESHA-MD GITHUB SEARCH 🖥️*\n\n*Username*: ${res.result.username}`;
    resultText += `\n\n*Nickname*: ${res.result.nickname}`;
    resultText += `\n\n*Bio*: ${res.result.bio}`;
    resultText += `\n\n*Id*: ${res.result.id}`;
    resultText += `\n\n*Url*: ${res.result.url}`;
    resultText += `\n\n*Type*: ${res.result.type}`;
    resultText += `\n\n*Admin*: ${res.result.admin}`;
    resultText += `\n\n*Public_repo*: ${res.result.public_repo}`;
    resultText += `\n\n*Followers*: ${res.result.followers}`;
    resultText += `\n\n*Following*: ${res.result.following}`;
    resultText += `\n\n*Ceated_at*: ${res.result.ceated_at}`;
    resultText += `\n\n*Updated_at*: ${res.result.updated_at}`;
    resultText += `\n\n*Blog*: ${res.result.blog}`;
    resultText += `\n\n*Location*: ${res.result.location}`;
    resultText += `\n\n*Email*: ${res.result.email}`;
    resultText += `\n\n\n> *DEVELOP BY NIROSHAN*`;
    
    await sock.sendMessage(from, { text: resultText }, { quoted: msg });
  } catch (error) {
    console.log(error);
    reply('' + error);
  }
});

// YouTube search command
cmd({
  pattern: 'ytsearch',
  alias: ['yts', 'yt-search'],
  desc: 'Search for YouTube videos',
  category: 'search',
  react: '🔍',
  filename: __filename,
  use: '<search query>'
}, async (m, sock, msg, { from, args, reply }) => {
  if (!args[0]) return reply('Please provide a search query !');
  
  const query = args.join(' ');
  
  try {
    const search = await yts(query);
    if (!search.videos.length) return reply('No videos found for the given query.');
    
    let result = 'YouTube Search Results:\n\n';
    search.videos.slice(0, 20).forEach((video, index) => {
      result += `${index + 1}. ${video.title}\n`;
      result += `   Channel: ${video.author.name}\n`;
      result += `   Duration: ${video.duration.timestamp}\n`;
      result += `   Views: ${formatNumber(video.views)}\n`;
      result += `   Uploaded: ${video.ago}\n`;
      result += `   Link: ${video.url}\n\n`;
    });
    
    result += `\nShowing top 20 results for "${query}"\n`;
    result += 'To watch, click on the video link or use the command:\n';
    
    await sock.sendMessage(from, { text: result }, { quoted: msg });
  } catch (error) {
    console.log('Error in YouTube search:', error);
    reply('❌ An error occurred while searching YouTube. Please try again later.');
  }
});

// Helper function to format numbers
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}