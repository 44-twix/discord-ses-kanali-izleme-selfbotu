const { Client, Intents } = require('discord.js-selfbot-v13');
const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');
const colors = require('colors');
const config = require('./config.json');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES],});
process.removeAllListeners('warning');

const { SUNUCU_ID, SES_KANAL_ID, TOKEN } = config;

console.clear();
client.on('ready', async () => {
    console.clear();
    const centerText = (text) => {
        const width = process.stdout.columns;
        const padding = Math.max(0, Math.floor((width - text.length) / 2));
        return ' '.repeat(padding) + text;
    };

    console.log(colors.rainbow(`
  ████████╗██╗    ██╗██╗██╗  ██╗
  ╚══██╔══╝██║    ██║██║╚██╗██╔╝
     ██║   ██║ █╗ ██║██║ ╚███╔╝ 
     ██║   ██║███╗██║██║ ██╔██╗ 
     ██║   ╚███╔███╔╝██║██╔╝ ██╗
     ╚═╝    ╚══╝╚══╝ ╚═╝╚═╝  ╚═╝
`));
console.log(colors.red(`Giriş yapıldı: `) + colors.white(`${client.user.tag}`));
console.log(colors.magenta(`Yapımcı: `) + colors.white(`craendyl`));
console.log(colors.green(`CheatGlobal: `) + colors.white(`https://cheatglobal.com/members/twixx.64436/ \n`))

    try {
      const guild = await client.guilds.fetch(SUNUCU_ID);
      const voiceChannel = await guild.channels.fetch(SES_KANAL_ID);
      if (voiceChannel && voiceChannel.type === 'GUILD_VOICE') {
        joinVoiceChannel({
          channelId: voiceChannel.id,
          guildId: guild.id,
          adapterCreator: guild.voiceAdapterCreator,
        });
        console.log(colors.bold('Ses kanalına katıldı.\n'));
        console.log(colors.cyan(`Ses Kanalı Adı: `) + colors.white(`${voiceChannel.name}`));
        console.log(colors.cyan(`Ses Kanalı ID: `) + colors.white(`${voiceChannel.id}`));
        console.log(colors.cyan(`Sesteki Kullanıcı Sayısı: `) + colors.white(`${voiceChannel.members.size}\n`));

        const startTime = Date.now();
        setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          const seconds = Math.floor((elapsedTime / 1000) % 60);
          const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
          const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
          process.stdout.clearLine();
          process.stdout.cursorTo(0);
          process.stdout.write(colors.red(`Ses kanalında geçirilen süre: ${colors.bold(hours)} saat ${colors.bold(minutes)} dakika ${colors.bold(seconds)} saniye`));
        }, 1000);
      } else {
        console.error(centerText(colors.red('Ses kanalı bulunamadı veya bu bir ses kanalı değil.')));
      }
    } catch (error) {
      console.error(centerText(colors.red('Ses kanalını girerken hata oluştu:')), error);
    }
  });
client.login(TOKEN);