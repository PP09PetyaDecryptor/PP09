const keepAlive = require(`./server`);
keepAlive();

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});


function formatTime() { //Credits to V𝕀ꋊΛꌦ#1010
  const date = new Date();
  const options = {
    timeZone: 'Asia/Calcutta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: false,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1195468879837810768') // make your bot in discord.com/developers and paste the application ID here
    .setType('PLAYING')
    .setURL('https://www.youtube.com/watch?v=P1Cu7ZE77BI') //Must be a youtube video link 
    .setState('LIFE IS ROBLOX!')
    .setName('Roblox')
    .setDetails(`LIFE IS ROBLOX!`) //[${formatTime()}] and this for showing time of stream.
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1234460050806804480/1234460603981107231/Roblox_Logo_2022.jpg?ex=6630d087&is=662f7f07&hm=bac54ac6d66eb1831ff2e05f5c19128aba8af85c0107c5339561eec5f58a0690&') //You can put links in tenor or discord and etc. 
    .setAssetsLargeText('LIFE IS ROBLOX!') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1234460050806804480/1234461026720809051/Screenshot_20240429_130623.png?ex=6630d0eb&is=662f7f6b&hm=d8e93e5c77d475cdf72e939d2598119082197ed8c56094948579f625d9f62c4e&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('LIFE IS ROBLOX') //Text when you hover the Small image
    .addButton('LIFE IS ROBLOX!', 'https://roblox.com/')
    .addButton('JOIN ROBOX', 'https://dsc.gg/roblox-i-gadanie-pl/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `LIFE IS ROBLOX!`; //[${newTime}] set this for time 
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);



// put your token in secrets
