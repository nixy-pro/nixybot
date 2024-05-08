const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment-timezone');

const config = {
    botDestination  : 'group', // group |  private | both
    region       	: 'indonesia',
    resbot_version  : 'NIXY Robot 🤖',
    apikey_resbot   : '436e4d5c97f24feaca635fcd1eca36e3', // apikey beli di autoresbot.com
    apikeyProdia    : '953c5de9-f0f5-4596-bf9c-5f03f70f46d6', // apikey ambil di https://app.prodia.com
    nomorsuperOwner : '6282119690755',
    grup            : 'https://whatsapp.com/channel/0029VaZKoZVA2pLJuwdVxV2c',
    email           : 'nixyrobot@gmail.com',
    ig           	: '@autoresbot',
    region          : 'indonesia',
    ownername       : 'Autoresbot',
    botname         : 'Autoresbot',
    packname        : 'Autoresbot',
    typeWelcome 	: '1', // ada 3 pilihan angka 1 = image pp user  2 = image welcome custom   || 3 = teks only
    author          : `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: Azhari Creative\nBot: 0895-3280-05151`,
    prefix_custom   : ['#','!','.'],
    sessionName     : 'session',
   	allmenu         : 'https://telegra.ph/file/19b1bfd47a2f5887acebd.jpg',
    sleep_game      : 60000, // waktu main tebak (1000 = 1 detik)
    limit_tunggu 	: 10, // ini menit = 10 menit
    MoneyMenangGame : 20,
    anticall        : false, // true = aktif || false = tidak aktif
    antispam_filter : false,
    publik 			: true,
    audio_menu      : true,
    autoread 		: false,
    antitoxic 		: true,
    savekontak		: {
       format   	: 'Buyer @urutan - @tanggal @bulan @tahun',
       mulai 		: '1',
    },
    game 			: {
        tebakangka   : 'https://telegra.ph/file/19b1bfd47a2f5887acebd.jpg',
        tebaklontong : 'https://telegra.ph/file/19b1bfd47a2f5887acebd.jpg',
        tebakkalimat : 'https://telegra.ph/file/19b1bfd47a2f5887acebd.jpg',
        tebaklirik   : 'https://telegra.ph/file/19b1bfd47a2f5887acebd.jpg',
        tebakkata    : 'https://telegra.ph/file/19b1bfd47a2f5887acebd.jpg',
        tebakbendera : 'https://telegra.ph/file/19b1bfd47a2f5887acebd.jpg',
        tebakgambar  : 'https://telegra.ph/file/19b1bfd47a2f5887acebd.jpg',
        tebaklagu    : 'https://telegra.ph/file/19b1bfd47a2f5887acebd.jpg'
    }
};

module.exports = config;



let file = path.resolve(__filename);

fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`${chalk.greenBright.bold('UPDATE FILE ' + file)} ${chalk.redBright.bold('PLEASE RESTART THIS SERVER')}`);
    delete require.cache[file];
    require(file);
});







/* 
---- PENJELASAN ------ 

true : artinya aktif
false : tidak aktif

jadi kalau
anticall        : true 
// artinya bot lu gak bisa di telpon // kalo ada orang nelpon lansung di block



untuk link yang seperti https://telegra.ph/file/4cd10be17fd6c13303453.jpg
kalau mau di ganti silakan upload gambar kalian dulu ke website https://telegra.ph
lalu nanti salin url gambarnya 


KALAU MAU NANYA NANYA CHAT https://t.me/autoresbot_com admin/owner autoresbot

*/
