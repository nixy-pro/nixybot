const _0x39fffe=_0x4d25;(function(_0x1f6fbc,_0x331239){const _0x5a812e=_0x4d25,_0x30ced1=_0x1f6fbc();while(!![]){try{const _0x353b90=parseInt(_0x5a812e(0xf2))/0x1+parseInt(_0x5a812e(0x101))/0x2*(parseInt(_0x5a812e(0x108))/0x3)+-parseInt(_0x5a812e(0x154))/0x4*(parseInt(_0x5a812e(0x14c))/0x5)+parseInt(_0x5a812e(0x172))/0x6+-parseInt(_0x5a812e(0x1d6))/0x7*(parseInt(_0x5a812e(0x107))/0x8)+-parseInt(_0x5a812e(0xfb))/0x9+-parseInt(_0x5a812e(0x169))/0xa*(-parseInt(_0x5a812e(0x140))/0xb);if(_0x353b90===_0x331239)break;else _0x30ced1['push'](_0x30ced1['shift']());}catch(_0x5bb783){_0x30ced1['push'](_0x30ced1['shift']());}}}(_0x41b4,0xf0493));const config=require(_0x39fffe(0x147)),{default:makeWASocket,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,getAggregateVotesInPollMessage,proto}=require(_0x39fffe(0x193));require(_0x39fffe(0x1a1));const moment=require('moment-timezone'),fs=require('fs'),https=require(_0x39fffe(0x1c8)),util=require(_0x39fffe(0xfd)),unlinkAsync=util['promisify'](fs[_0x39fffe(0xf7)]),pino=require('pino'),chalk=require(_0x39fffe(0x1b9)),path=require(_0x39fffe(0x12e)),readline=require(_0x39fffe(0x180)),axios=require('axios'),FileType=require('file-type'),yargs=require(_0x39fffe(0x176)),_=require(_0x39fffe(0x12c)),{Boom}=require(_0x39fffe(0x1ae)),{generateImage}=require('./canvas_resbot/resbot_module.js'),PhoneNumber=require(_0x39fffe(0x150)),figlet=require(_0x39fffe(0x117));let {UploadFileUgu,webp2mp4File,TelegraPh}=require(_0x39fffe(0x17c));const usePairingCode=!![],jammenit=moment()['tz']('Asia/Jakarta')['format'](_0x39fffe(0x186)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x39fffe(0x1c5)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require('./lib/myfunc'),question=_0x256028=>{const _0x261231=_0x39fffe,_0x1c6653=readline[_0x261231(0x1a3)]({'input':process[_0x261231(0x14d)],'output':process[_0x261231(0x127)]});return new Promise(_0xb571b8=>{const _0x3d4c45=_0x261231;_0x1c6653[_0x3d4c45(0x171)](_0x256028,_0xb571b8);});};var low;try{low=require(_0x39fffe(0x19f));}catch(_0x3d12ec){low=require('./lib/lowdb');}const {Low,JSONFile}=low,mongoDB=require(_0x39fffe(0x177)),storeLogger=pino({'level':_0x39fffe(0x146),'customLevels':{'log':0x1e},'formatters':{'level':_0x466b67=>({'level':_0x466b67})},'timestamp':pino[_0x39fffe(0x18a)]['isoTime'],'levelVal':0x1e,'hooks':{'logMethod'(_0x272ea9,_0x1f94c9){const _0x18a7bb=_0x39fffe;if(_0x272ea9[0x0]&&(_0x272ea9[0x0]['includes'](_0x18a7bb(0x1a8))||_0x272ea9[0x0][_0x18a7bb(0x145)](_0x18a7bb(0xfc))||_0x272ea9[0x0]['includes'](_0x18a7bb(0x137))))return![];return _0x1f94c9[_0x18a7bb(0x1cc)](this,..._0x272ea9);}}}),store=makeInMemoryStore({'logger':storeLogger}),color=(_0x3ecad5,_0x1dedb1)=>{const _0xe8c303=_0x39fffe;return!_0x1dedb1?chalk[_0xe8c303(0x132)](_0x3ecad5):chalk[_0xe8c303(0x12a)](_0x1dedb1)(_0x3ecad5);};global[_0x39fffe(0x179)]=new Object(yargs(process[_0x39fffe(0x14f)]['slice'](0x2))[_0x39fffe(0x16a)](![])[_0x39fffe(0x1cb)]()),global['db']=new Low(/https?:\/\//[_0x39fffe(0x14b)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x39fffe(0x14b)](opts['db'])?new mongoDB(opts['db']):new JSONFile(_0x39fffe(0x13a))),global[_0x39fffe(0x138)]=global['db'],global[_0x39fffe(0x130)]=async function loadDatabase(){const _0x39c53e=_0x39fffe;if(global['db'][_0x39c53e(0x17d)])return new Promise(_0x3d7002=>setInterval(function(){const _0x50d322=_0x39c53e;!global['db'][_0x50d322(0x17d)]?(clearInterval(this),_0x3d7002(global['db'][_0x50d322(0xf3)]==null?global['loadDatabase']():global['db'][_0x50d322(0xf3)])):null;},0x1*0x3e8));if(global['db'][_0x39c53e(0xf3)]!==null)return;global['db']['READ']=!![],await global['db'][_0x39c53e(0x17b)](),global['db'][_0x39c53e(0x17d)]=![],global['db'][_0x39c53e(0xf3)]={'users':{},'chats':{},'game':{},'database':{},'settings':{},'setting':{},'others':{},'sticker':{},...global['db'][_0x39c53e(0xf3)]||{}},global['db'][_0x39c53e(0x153)]=_[_0x39c53e(0x153)](global['db'][_0x39c53e(0xf3)]);},loadDatabase();if(global['db'])setInterval(async()=>{const _0x4211ff=_0x39fffe;if(global['db'][_0x4211ff(0xf3)])await global['db'][_0x4211ff(0x187)]();},0x1e*0x3e8);function _0x4d25(_0x39ba50,_0x366a67){const _0x41b403=_0x41b4();return _0x4d25=function(_0x4d2519,_0x2ba976){_0x4d2519=_0x4d2519-0xf1;let _0x4d957c=_0x41b403[_0x4d2519];return _0x4d957c;},_0x4d25(_0x39ba50,_0x366a67);}function hapusFileDenganEkstensi(_0x43797a,_0x1cee76){const _0x3b4c84=_0x39fffe;fs[_0x3b4c84(0x1dc)](_0x43797a,(_0x4fd391,_0x365551)=>{const _0x2b2068=_0x3b4c84;if(_0x4fd391){console[_0x2b2068(0x129)](_0x2b2068(0x1d1),_0x4fd391);return;}_0x365551[_0x2b2068(0xf9)](_0x27a189=>{const _0x4e3d62=_0x2b2068;_0x27a189['endsWith'](_0x1cee76)&&(fs[_0x4e3d62(0x12b)](path['join'](_0x43797a,_0x27a189)),console[_0x4e3d62(0x182)](_0x4e3d62(0x185)+_0x27a189));});});}const ekstensiYangDihapus=[_0x39fffe(0x10e),_0x39fffe(0x183),_0x39fffe(0x12f),_0x39fffe(0x1b3),'.mp4'];function _0x41b4(){const _0x576e26=['matchAll','14KMtLdA','msg','Device\x20Logged\x20Out,\x20Please\x20Delete\x20Folder\x20Autoresbot\x20and\x20Scan\x20Again.','resolve','\x1b[2m','isVideo','readdir','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','@desc','subject','1295807CNxLnB','data','withoutContact','Error\x20index.js\x20192\x20:','key','unlink','viewOnceMessage','forEach','bold','4870539evkxUa','Closing\x20stale\x20open\x20session\x20for\x20new\x20outgoing\x20prekey\x20bundle','util','desc','writeFile','welcome2.png','302SfFZXq','user','\x0aFN:','readFileSync','fromMe','participant','7788856JBNVRQ','19443rPwMFY','isBuffer','string','sendText','@broadcast','PhoneNumber:\x20','.gif','.bin','sendTextWithMentions','ext','Connection\x20closed,\x20reconnecting....','watchFile','finish','Masukan\x20Nomer\x20Yang\x20Aktif\x20(Awali\x20Dengan\x20628)\x20:\x0a','message','figlet','\x1b[37m','../src/','from','push','\x1b[5m','Pairing\x20code:\x20','@GROUP','status@broadcast','redBright','join','output','timedOut','\x1b[30m','participants','mimetype','stdout','anticall','error','keyword','unlinkSync','lodash','yellow','path','.jpg','loadDatabase','video','green','\x20KAMU\x20AKAN\x20DI\x20*BLOCK*\x20\x0a\x0aSilakan\x20Hubungi\x20Owner\x20Untuk\x20Membuat\x20Block\x20!\x0aWebsite\x20:\x20www.nixystore.my.id/contact','text','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','\x0aitem1.TEL;waid=','session','DATABASE','BOT\x20TIDAK\x20DAPAT\x20MENERIMA\x20PANGGILAN\x20','src/database.json','@name','WebMessageInfo','messages','getFile','restartRequired','66DxUgqM','group-participants.update','sendMessage','connectionClosed','get','includes','info','./resconfig','sendVideoAsSticker','split','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','test','74940QhDHxG','stdin','OFF','argv','awesome-phonenumber','notify','readViewOnce','chain','160HEfIFP','profilePictureUrl','image','alloc','@s.whatsapp.net','sticker','typeWelcome','startsWith','requestPairingCode','Error\x20generating\x20image:','keys','relayMessage','viewOnce','sendImageAsSticker','asSticker','promises','decodeJid','promote','getName','utf-8','add','1978450Nmfprx','exitProcess','ignore','writeFileSync','pipe','replace','audio','\x1b[36m','question','3663648BxVwMs','badSession','remove','connectionLost','yargs/yargs','./lib/mongoDB','international','opts','verifiedName','read','./lib/uploader','READ','serializeM','reset','readline','getNumber','log','.png','Connection\x20TimedOut,\x20Reconnecting...','Berhasil\x20menghapus\x20file:\x20','HH:mm','write','author','existsSync','stdTimeFunctions','status','ephemeralMessage','@DESC','length','\x20Kontak','parseMention','demote','\x0aitem1.X-ABLabel:Ponsel\x0aitem2.EMAIL;type=INTERNET:aplusscell@gmail.com\x0aitem2.X-ABLabel:Email\x0aitem3.URL:https://chat.whatsapp.com/HbCl8qf3KQK1MEp3ZBBpSf\x0aitem3.X-ABLabel:Instagram\x0aitem4.ADR:;;Indonesia;;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','@whiskeysockets/baileys','downloadAndSaveMediaMessage','repeat','contacts','\x1b[35m','\x1b[32m','block','document','messages.upsert','fromBuffer','\x1b[34m','server','lowdb','categories','./ac','@NAME','createInterface','isArray','./db/left.json','close','creds.update','Removing\x20old\x20closed\x20session','action','connection.update','\x1b[1m','mkdirSync','packname','@hapi/boom','authState','base64','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Restart\x20Bot','unwatchFile','.mp3','silent','createWriteStream','asDocument','remoteJid','contextInfo','chalk','ERROR\x20','WhatsApp','type','exit','sendContact','registered','map','sessionName','groupMetadata','isGroup','mtype','./lib/exif','Unknown\x20DisconnectReason:\x20','public','https','conversation','.\x20\x0aMAAF\x20@','parse','call','Update\x20','./db/welcome.json','Gagal\x20mengunduh\x20file:\x20','BAE5','Gagal\x20membaca\x20direktori:','Bad\x20Session\x20File,\x20Please\x20Delete\x20Folder\x20Autoresbot\x20and\x20Start\x20Again','concat','name'];_0x41b4=function(){return _0x576e26;};return _0x41b4();}ekstensiYangDihapus[_0x39fffe(0xf9)](_0x1d0898=>{hapusFileDenganEkstensi(__dirname,_0x1d0898);});async function downloadFile(_0xb4b748,_0x2b9945,_0x1cafd6){return new Promise((_0x7a429f,_0x3af3ed)=>{const _0x275f42=_0x4d25;if(!fs[_0x275f42(0x189)](_0x2b9945))fs[_0x275f42(0x1ac)](_0x2b9945);const _0x120875=path[_0x275f42(0x121)](_0x2b9945,_0x1cafd6),_0x137fe3=fs[_0x275f42(0x1b5)](_0x120875);https[_0x275f42(0x144)](_0xb4b748,_0x14ccf2=>{const _0xaa4783=_0x275f42;_0x14ccf2[_0xaa4783(0x16d)](_0x137fe3)['on'](_0xaa4783(0x114),()=>{const _0x527a50=_0xaa4783;_0x137fe3[_0x527a50(0x1a6)](),_0x7a429f(_0x120875);})['on'](_0xaa4783(0x129),_0x4ae9b1=>{const _0x5c34b0=_0xaa4783;fs[_0x5c34b0(0xf7)](_0x120875,()=>_0x3af3ed(_0x5c34b0(0x1cf)+_0x4ae9b1[_0x5c34b0(0x116)]));});});});}async function processAndDeleteFile(_0x13af17){try{const _0x198362=await downloadFile(_0x13af17,'./cache/','examplefile.jpg');let _0x2fc31a=await TelegraPh('./'+_0x198362),_0x14944f=_0x2fc31a;return _0x2fc31a&&await unlinkAsync(_0x198362),_0x14944f;}catch(_0x170b75){throw _0x170b75;}}function colorfulConsoleLog(_0x46ab2b,_0xd7c115){const _0x29d2ae=_0x39fffe,_0x55ab4d={'reset':'\x1b[0m','bright':_0x29d2ae(0x1ab),'dim':_0x29d2ae(0x1da),'underscore':'\x1b[4m','blink':_0x29d2ae(0x11c),'reverse':'\x1b[7m','hidden':'\x1b[8m','black':_0x29d2ae(0x124),'red':'\x1b[31m','green':_0x29d2ae(0x198),'yellow':'\x1b[33m','blue':_0x29d2ae(0x19d),'magenta':_0x29d2ae(0x197),'cyan':_0x29d2ae(0x170),'white':_0x29d2ae(0x118)},_0x133100=process['stdout']['columns']||_0x46ab2b[_0x29d2ae(0x18e)]+0x4,_0x13a39d='='[_0x29d2ae(0x195)](_0x133100),_0x5b53c3='_'[_0x29d2ae(0x195)](_0x133100);console[_0x29d2ae(0x182)](''+_0x55ab4d[_0xd7c115]+_0x55ab4d[_0x29d2ae(0x17f)]+'\x0a'),console[_0x29d2ae(0x182)](''+_0x55ab4d[_0xd7c115]+_0x13a39d),console[_0x29d2ae(0x182)](_0x55ab4d[_0xd7c115]+'|\x20'+_0x46ab2b+'\x20|'),console[_0x29d2ae(0x182)](''+_0x55ab4d[_0xd7c115]+_0x13a39d+_0x55ab4d[_0x29d2ae(0x17f)]),console[_0x29d2ae(0x182)](''+_0x55ab4d[_0xd7c115]+_0x55ab4d[_0x29d2ae(0x17f)]+'\x0a');}colorfulConsoleLog(config['resbot_version'],_0x39fffe(0x12d));async function connectToWhatsApp(){const _0x16db08=_0x39fffe,{state:_0x1a23ff,saveCreds:_0x5ac686}=await useMultiFileAuthState(config[_0x16db08(0x1c1)]),_0x2c91f1=makeWASocket({'logger':pino({'level':_0x16db08(0x1b4)}),'printQRInTerminal':!usePairingCode,'auth':_0x1a23ff,'browser':['Chrome\x20(Linux)','','']});if(usePairingCode&&!_0x2c91f1[_0x16db08(0x1af)]['creds'][_0x16db08(0x1bf)]){const _0x4faf63=await question(_0x16db08(0x115)),_0x520cba=await _0x2c91f1[_0x16db08(0x15c)](_0x4faf63['trim']());console[_0x16db08(0x182)](_0x16db08(0x10d)+_0x4faf63),console[_0x16db08(0x182)](_0x16db08(0x11d)+_0x520cba);}return _0x2c91f1[_0x16db08(0x164)]=_0x14181e=>{const _0x23e730=_0x16db08;if(!_0x14181e)return _0x14181e;if(/:\d+@/gi[_0x23e730(0x14b)](_0x14181e)){let _0x3e0490=jidDecode(_0x14181e)||{};return _0x3e0490[_0x23e730(0x102)]&&_0x3e0490[_0x23e730(0x19e)]&&_0x3e0490['user']+'@'+_0x3e0490['server']||_0x14181e;}else return _0x14181e;},_0x2c91f1['ev']['on'](_0x16db08(0x19b),async _0x29b5b2=>{const _0x2bd7d2=_0x16db08;try{chatinfo=_0x29b5b2[_0x2bd7d2(0x13d)][0x0];if(!chatinfo[_0x2bd7d2(0x116)])return;chatinfo[_0x2bd7d2(0x116)]=Object['keys'](chatinfo[_0x2bd7d2(0x116)])[0x0]===_0x2bd7d2(0x18c)?chatinfo[_0x2bd7d2(0x116)][_0x2bd7d2(0x18c)][_0x2bd7d2(0x116)]:chatinfo[_0x2bd7d2(0x116)];if(chatinfo['key']&&chatinfo['key'][_0x2bd7d2(0x1b7)]===_0x2bd7d2(0x11f))return;if(!_0x2c91f1[_0x2bd7d2(0x1c7)]&&!chatinfo['key']['fromMe']&&_0x29b5b2[_0x2bd7d2(0x1bc)]===_0x2bd7d2(0x151))return;if(chatinfo[_0x2bd7d2(0xf6)]['id'][_0x2bd7d2(0x15b)](_0x2bd7d2(0x1d0))&&chatinfo[_0x2bd7d2(0xf6)]['id'][_0x2bd7d2(0x18e)]===0x10)return;m=smsg(_0x2c91f1,chatinfo,store),require('./autoresbot')(_0x2c91f1,m,_0x29b5b2,store);}catch(_0x313c1c){console[_0x2bd7d2(0x182)](_0x2bd7d2(0xf5)+_0x313c1c);}}),config[_0x16db08(0x128)]&&_0x2c91f1['ev']['on'](_0x16db08(0x1cc),async _0x100783=>{const _0xd53fae=_0x16db08;let _0x4d030c=await _0x2c91f1[_0xd53fae(0x164)](_0x2c91f1['user']['id']);for(let _0x1a7402 of _0x100783){if(_0x1a7402[_0xd53fae(0x1c3)]==![]){if(_0x1a7402[_0xd53fae(0x18b)]=='offer'){let _0x506d7f=await _0x2c91f1[_0xd53fae(0x110)](_0x1a7402[_0xd53fae(0x11a)],_0xd53fae(0x139)+(_0x1a7402[_0xd53fae(0x1db)]?'VIDEO':'SUARA')+_0xd53fae(0x1ca)+_0x1a7402[_0xd53fae(0x11a)][_0xd53fae(0x149)]('@')[0x0]+_0xd53fae(0x133));await sleep(0xfa0),await _0x2c91f1['updateBlockStatus'](_0x1a7402['from'],_0xd53fae(0x199));}}}}),_0x2c91f1['ev']['on'](_0x16db08(0x141),async _0xb0a968=>{const _0x11cdb0=_0x16db08;try{let _0x6a5a80=await _0x2c91f1[_0x11cdb0(0x1c2)](_0xb0a968['id']),_0x1b0ff5=_0xb0a968['participants'];for(let _0x41441b of _0x1b0ff5){const _0x46c5c8='@'+_0x41441b[_0x11cdb0(0x149)]('@')[0x0];if(_0x41441b==_0xb0a968[_0x11cdb0(0x125)][0x0])try{ppuser=await _0x2c91f1[_0x11cdb0(0x155)](_0x41441b,_0x11cdb0(0x156)),pushname_=await _0x2c91f1['getName'](_0x41441b);}catch(_0x362774){console[_0x11cdb0(0x182)](_0x362774),ppuser=_0x11cdb0(0x135),pushname_=_0x46c5c8;}async function _0x539284(_0x2d2292,_0x41b322){const _0x512ec1=_0x11cdb0;try{const _0x5b8698=await generateImage(_0x2d2292,ppuser,_0x41b322);return _0x5b8698;}catch(_0x282511){console[_0x512ec1(0x129)](_0x512ec1(0x15d),_0x282511);throw _0x282511;}}try{ppgroup=await _0x2c91f1['profilePictureUrl'](_0xb0a968['id'],'image');}catch{ppgroup=_0x11cdb0(0x135);}if(_0xb0a968[_0x11cdb0(0x1a9)]==_0x11cdb0(0x168)){const _0x1d84c9=JSON['parse'](fs['readFileSync'](_0x11cdb0(0x1ce),'utf-8'))||{};let _0x1c3a9a=_0x11cdb0(0x14e);if(Array['isArray'](_0x1d84c9[_0xb0a968['id']])&&_0x1d84c9[_0xb0a968['id']][0x0][_0x11cdb0(0x18b)]=='on'){_0x1c3a9a='ON';let _0x469177=_0x1d84c9[_0xb0a968['id']][0x0][_0x11cdb0(0x134)][_0x11cdb0(0x16e)]('@NAME',pushname_)[_0x11cdb0(0x16e)](_0x11cdb0(0x13b),pushname_)[_0x11cdb0(0x16e)](_0x11cdb0(0x11e),_0x6a5a80['subject'])[_0x11cdb0(0x16e)]('@group',_0x6a5a80['subject'])['replace'](_0x11cdb0(0x18d),_0x6a5a80[_0x11cdb0(0xfe)])[_0x11cdb0(0x16e)](_0x11cdb0(0x1de),_0x6a5a80['desc']);if(config[_0x11cdb0(0x15a)]==0x1)try{const _0x5bd4ba=await _0x539284(pushname_,'welcome1.png');_0x2c91f1['sendMessage'](_0xb0a968['id'],{'image':_0x5bd4ba,'caption':_0x469177,'mentions':[_0x41441b]});}catch(_0x487862){console['error'](_0x487862);}else{if(config[_0x11cdb0(0x15a)]==0x2)try{const _0x3c9081=await _0x539284(pushname_,_0x11cdb0(0x100));_0x2c91f1['sendMessage'](_0xb0a968['id'],{'image':_0x3c9081,'caption':_0x469177,'mentions':[_0x41441b]});}catch(_0x3335b3){console['error'](_0x3335b3);}else config[_0x11cdb0(0x15a)]==0x3&&_0x2c91f1[_0x11cdb0(0x142)](_0xb0a968['id'],{'text':_0x469177,'mentions':[_0x41441b]});}}}else{if(_0xb0a968[_0x11cdb0(0x1a9)]==_0x11cdb0(0x174)){const _0x1e33a2=JSON[_0x11cdb0(0x1cb)](fs['readFileSync'](_0x11cdb0(0x1a5),_0x11cdb0(0x167)))||{};let _0x170ab4=_0x11cdb0(0x14e);if(Array[_0x11cdb0(0x1a4)](_0x1e33a2[_0xb0a968['id']])&&_0x1e33a2[_0xb0a968['id']][0x0]['status']=='on'){_0x170ab4='ON';let _0x4db919=_0x1e33a2[_0xb0a968['id']][0x0][_0x11cdb0(0x134)][_0x11cdb0(0x16e)](_0x11cdb0(0x1a2),_0x46c5c8)['replace'](_0x11cdb0(0x11e),_0x6a5a80[_0x11cdb0(0xf1)]);_0x2c91f1['sendMessage'](_0xb0a968['id'],{'text':_0x4db919,'mentions':[_0x41441b]});}}else{if(_0xb0a968[_0x11cdb0(0x1a9)]==_0x11cdb0(0x165)){}else{if(_0xb0a968[_0x11cdb0(0x1a9)]==_0x11cdb0(0x191)){}}}}}}catch(_0x2725ee){console[_0x11cdb0(0x182)](chalk[_0x11cdb0(0x120)][_0x11cdb0(0xfa)](_0x11cdb0(0x1ba)+_0x2725ee));}}),_0x2c91f1['ev']['on']('contacts.update',_0x2b6f8a=>{const _0x4d1878=_0x16db08;for(let _0x1deec0 of _0x2b6f8a){let _0x3bfa35=_0x2c91f1[_0x4d1878(0x164)](_0x1deec0['id']);if(store&&store['contacts'])store[_0x4d1878(0x196)][_0x3bfa35]={'id':_0x3bfa35,'name':_0x1deec0[_0x4d1878(0x151)]};}}),_0x2c91f1[_0x16db08(0x166)]=(_0x528287,_0x81c279=![])=>{const _0x4a513d=_0x16db08;id=_0x2c91f1[_0x4a513d(0x164)](_0x528287),_0x81c279=_0x2c91f1[_0x4a513d(0xf4)]||_0x81c279;let _0x51ae33;if(id['endsWith']('@g.us'))return new Promise(async _0x1b959c=>{const _0x23e3d6=_0x4a513d;_0x51ae33=store[_0x23e3d6(0x196)][id]||{};if(!(_0x51ae33['name']||_0x51ae33['subject']))_0x51ae33=_0x2c91f1['groupMetadata'](id)||{};_0x1b959c(_0x51ae33[_0x23e3d6(0x1d4)]||_0x51ae33[_0x23e3d6(0xf1)]||PhoneNumber('+'+id[_0x23e3d6(0x16e)](_0x23e3d6(0x158),''))['getNumber'](_0x23e3d6(0x178)));});else _0x51ae33=id==='0@s.whatsapp.net'?{'id':id,'name':_0x4a513d(0x1bb)}:id===_0x2c91f1[_0x4a513d(0x164)](_0x2c91f1[_0x4a513d(0x102)]['id'])?_0x2c91f1[_0x4a513d(0x102)]:store[_0x4a513d(0x196)][id]||{};return(_0x81c279?'':_0x51ae33['name'])||_0x51ae33[_0x4a513d(0xf1)]||_0x51ae33[_0x4a513d(0x17a)]||PhoneNumber('+'+_0x528287[_0x4a513d(0x16e)](_0x4a513d(0x158),''))[_0x4a513d(0x181)]('international');},_0x2c91f1[_0x16db08(0x1be)]=async(_0x4bf337,_0x409ed4,_0x5ba3c5='',_0xa11291={})=>{const _0x146226=_0x16db08;let _0x44b55d=[];for(let _0x134133 of _0x409ed4){_0x44b55d[_0x146226(0x11b)]({'displayName':await _0x2c91f1[_0x146226(0x166)](_0x134133+_0x146226(0x158)),'vcard':_0x146226(0x1dd)+await _0x2c91f1[_0x146226(0x166)](_0x134133+'@s.whatsapp.net')+_0x146226(0x103)+await _0x2c91f1['getName'](_0x134133+_0x146226(0x158))+_0x146226(0x136)+_0x134133+':'+_0x134133+_0x146226(0x192)});}_0x2c91f1['sendMessage'](_0x4bf337,{'contacts':{'displayName':_0x44b55d[_0x146226(0x18e)]+_0x146226(0x18f),'contacts':_0x44b55d},..._0xa11291},{'quoted':_0x5ba3c5});},_0x2c91f1[_0x16db08(0x1c7)]=!![],_0x2c91f1['ev']['on'](_0x16db08(0x1a7),_0x5ac686),_0x2c91f1['downloadMediaMessage']=async _0x9df4f7=>{const _0x484ae6=_0x16db08;let _0x5c3107=(_0x9df4f7[_0x484ae6(0x1d7)]||_0x9df4f7)[_0x484ae6(0x126)]||'',_0x4857f5=_0x9df4f7[_0x484ae6(0x1c4)]?_0x9df4f7[_0x484ae6(0x1c4)][_0x484ae6(0x16e)](/Message/gi,''):_0x5c3107[_0x484ae6(0x149)]('/')[0x0];const _0xd5af4e=await downloadContentFromMessage(_0x9df4f7,_0x4857f5);let _0x2d923b=Buffer[_0x484ae6(0x11a)]([]);for await(const _0x14e932 of _0xd5af4e){_0x2d923b=Buffer[_0x484ae6(0x1d3)]([_0x2d923b,_0x14e932]);}return _0x2d923b;},_0x2c91f1['sendImage']=async(_0x589c93,_0x4c3a86,_0x117d98='',_0x3b2c68='',_0x47af9d)=>{const _0x5e93bf=_0x16db08;let _0x1a179f=Buffer[_0x5e93bf(0x109)](_0x4c3a86)?_0x4c3a86:/^data:.*?\/.*?;base64,/i[_0x5e93bf(0x14b)](_0x4c3a86)?Buffer[_0x5e93bf(0x11a)](_0x4c3a86[_0x5e93bf(0x149)]`,`[0x1],_0x5e93bf(0x1b0)):/^https?:\/\//[_0x5e93bf(0x14b)](_0x4c3a86)?await await getBuffer(_0x4c3a86):fs['existsSync'](_0x4c3a86)?fs[_0x5e93bf(0x104)](_0x4c3a86):Buffer[_0x5e93bf(0x157)](0x0);return await _0x2c91f1[_0x5e93bf(0x142)](_0x589c93,{'image':_0x1a179f,'caption':_0x117d98,..._0x47af9d},{'quoted':_0x3b2c68});},_0x2c91f1[_0x16db08(0x10b)]=(_0x2b5c43,_0x130f68,_0x1398b0='',_0x2bb13a)=>_0x2c91f1[_0x16db08(0x142)](_0x2b5c43,{'text':_0x130f68,..._0x2bb13a},{'quoted':_0x1398b0}),_0x2c91f1['sendTextWithMentions']=async(_0x250dfe,_0x197cfe,_0x5639e4,_0x488e23={})=>_0x2c91f1[_0x16db08(0x142)](_0x250dfe,{'text':_0x197cfe,'contextInfo':{'mentionedJid':[..._0x197cfe[_0x16db08(0x1d5)](/@(\d{0,16})/g)][_0x16db08(0x1c0)](_0x3af97c=>_0x3af97c[0x1]+_0x16db08(0x158))},..._0x488e23},{'quoted':_0x5639e4}),_0x2c91f1[_0x16db08(0x161)]=async(_0x34191c,_0x119c4a,_0x3c0400,_0x556b45={})=>{const _0x273a51=_0x16db08;let _0x1b32e2=Buffer[_0x273a51(0x109)](_0x119c4a)?_0x119c4a:/^data:.*?\/.*?;base64,/i[_0x273a51(0x14b)](_0x119c4a)?Buffer[_0x273a51(0x11a)](_0x119c4a[_0x273a51(0x149)]`,`[0x1],'base64'):/^https?:\/\//['test'](_0x119c4a)?await await getBuffer(_0x119c4a):fs['existsSync'](_0x119c4a)?fs[_0x273a51(0x104)](_0x119c4a):Buffer[_0x273a51(0x157)](0x0),_0xde0bba;return _0x556b45&&(_0x556b45[_0x273a51(0x1ad)]||_0x556b45[_0x273a51(0x188)])?_0xde0bba=await writeExifImg(_0x1b32e2,_0x556b45):_0xde0bba=await imageToWebp(_0x1b32e2),await _0x2c91f1[_0x273a51(0x142)](_0x34191c,{'sticker':{'url':_0xde0bba},..._0x556b45},{'quoted':_0x3c0400}),_0xde0bba;},_0x2c91f1[_0x16db08(0x148)]=async(_0x16ee23,_0x29233d,_0x4c5992,_0x47b674={})=>{const _0x10196e=_0x16db08;let _0x359f32=Buffer[_0x10196e(0x109)](_0x29233d)?_0x29233d:/^data:.*?\/.*?;base64,/i[_0x10196e(0x14b)](_0x29233d)?Buffer['from'](_0x29233d[_0x10196e(0x149)]`,`[0x1],_0x10196e(0x1b0)):/^https?:\/\//[_0x10196e(0x14b)](_0x29233d)?await await getBuffer(_0x29233d):fs['existsSync'](_0x29233d)?fs[_0x10196e(0x104)](_0x29233d):Buffer[_0x10196e(0x157)](0x0),_0x597ded;return _0x47b674&&(_0x47b674[_0x10196e(0x1ad)]||_0x47b674[_0x10196e(0x188)])?_0x597ded=await writeExifVid(_0x359f32,_0x47b674):_0x597ded=await videoToWebp(_0x359f32),await _0x2c91f1[_0x10196e(0x142)](_0x16ee23,{'sticker':{'url':_0x597ded},..._0x47b674},{'quoted':_0x4c5992}),_0x597ded;},_0x2c91f1[_0x16db08(0x194)]=async(_0xa43823,_0xc72690,_0x180d56=!![])=>{const _0x3014db=_0x16db08;let _0x3d414b=_0xa43823[_0x3014db(0x1d7)]?_0xa43823[_0x3014db(0x1d7)]:_0xa43823,_0x394824=(_0xa43823[_0x3014db(0x1d7)]||_0xa43823)[_0x3014db(0x126)]||'',_0x12aead=_0xa43823[_0x3014db(0x1c4)]?_0xa43823['mtype'][_0x3014db(0x16e)](/Message/gi,''):_0x394824[_0x3014db(0x149)]('/')[0x0];const _0x43fb08=await downloadContentFromMessage(_0x3d414b,_0x12aead);let _0x276b0d=Buffer[_0x3014db(0x11a)]([]);for await(const _0x2d173e of _0x43fb08){_0x276b0d=Buffer[_0x3014db(0x1d3)]([_0x276b0d,_0x2d173e]);}let _0x741b7b=await FileType['fromBuffer'](_0x276b0d);return trueFileName=_0x180d56?_0xc72690+'.'+_0x741b7b[_0x3014db(0x111)]:_0xc72690,await fs[_0x3014db(0x16c)](trueFileName,_0x276b0d),trueFileName;},_0x2c91f1['cMod']=(_0x538c8c,_0x1e34de,_0x10743e='',_0x4e0931=_0x2c91f1[_0x16db08(0x102)]['id'],_0x455633={})=>{const _0x3e2274=_0x16db08;let _0x40c713=Object[_0x3e2274(0x15e)](_0x1e34de[_0x3e2274(0x116)])[0x0],_0x169bb7=_0x40c713===_0x3e2274(0x18c);_0x169bb7&&(_0x40c713=Object[_0x3e2274(0x15e)](_0x1e34de[_0x3e2274(0x116)][_0x3e2274(0x18c)][_0x3e2274(0x116)])[0x0]);let _0x388b6a=_0x169bb7?_0x1e34de['message'][_0x3e2274(0x18c)][_0x3e2274(0x116)]:_0x1e34de[_0x3e2274(0x116)],_0x324837=_0x388b6a[_0x40c713];if(typeof _0x324837===_0x3e2274(0x10a))_0x388b6a[_0x40c713]=_0x10743e||_0x324837;else{if(_0x324837['caption'])_0x324837['caption']=_0x10743e||_0x324837['caption'];else{if(_0x324837[_0x3e2274(0x134)])_0x324837[_0x3e2274(0x134)]=_0x10743e||_0x324837[_0x3e2274(0x134)];}}if(typeof _0x324837!=='string')_0x388b6a[_0x40c713]={..._0x324837,..._0x455633};if(_0x1e34de[_0x3e2274(0xf6)]['participant'])_0x4e0931=_0x1e34de[_0x3e2274(0xf6)][_0x3e2274(0x106)]=_0x4e0931||_0x1e34de[_0x3e2274(0xf6)][_0x3e2274(0x106)];else{if(_0x1e34de[_0x3e2274(0xf6)][_0x3e2274(0x106)])_0x4e0931=_0x1e34de[_0x3e2274(0xf6)][_0x3e2274(0x106)]=_0x4e0931||_0x1e34de['key']['participant'];}if(_0x1e34de['key'][_0x3e2274(0x1b7)][_0x3e2274(0x145)]('@s.whatsapp.net'))_0x4e0931=_0x4e0931||_0x1e34de[_0x3e2274(0xf6)]['remoteJid'];else{if(_0x1e34de[_0x3e2274(0xf6)][_0x3e2274(0x1b7)]['includes'](_0x3e2274(0x10c)))_0x4e0931=_0x4e0931||_0x1e34de[_0x3e2274(0xf6)][_0x3e2274(0x1b7)];}return _0x1e34de['key'][_0x3e2274(0x1b7)]=_0x538c8c,_0x1e34de[_0x3e2274(0xf6)][_0x3e2274(0x105)]=_0x4e0931===_0x2c91f1['user']['id'],proto[_0x3e2274(0x13c)]['fromObject'](_0x1e34de);},_0x2c91f1['sendFile']=async(_0x14b705,_0x2cda60,_0x4baeca,_0x5c8e01={},_0x2085ca={})=>{const _0xbe943b=_0x16db08;let _0x8b40d9=await _0x2c91f1[_0xbe943b(0x13e)](_0x2cda60,!![]),{filename:_0x52004e,size:_0x442abb,ext:_0x196ab0,mime:_0x50b2d2,data:_0x56e15a}=_0x8b40d9,_0x53d04e='',_0x4e08c3=_0x50b2d2,_0xec2b1e=_0x52004e;if(_0x2085ca[_0xbe943b(0x1b6)])_0x53d04e=_0xbe943b(0x19a);if(_0x2085ca[_0xbe943b(0x162)]||/webp/[_0xbe943b(0x14b)](_0x50b2d2)){let {writeExif:_0x2c23b1}=require('./lib/sticker.js'),_0x363cd4={'mimetype':_0x50b2d2,'data':_0x56e15a};_0xec2b1e=await _0x2c23b1(_0x363cd4,{'packname':config['packname'],'author':config[_0xbe943b(0x1ad)],'categories':_0x2085ca[_0xbe943b(0x1a0)]?_0x2085ca['categories']:[]}),await fs[_0xbe943b(0x163)][_0xbe943b(0xf7)](_0x52004e),_0x53d04e=_0xbe943b(0x159),_0x4e08c3='image/webp';}else{if(/image/[_0xbe943b(0x14b)](_0x50b2d2))_0x53d04e='image';else{if(/video/[_0xbe943b(0x14b)](_0x50b2d2))_0x53d04e=_0xbe943b(0x131);else{if(/audio/[_0xbe943b(0x14b)](_0x50b2d2))_0x53d04e=_0xbe943b(0x16f);else _0x53d04e=_0xbe943b(0x19a);}}}return await _0x2c91f1[_0xbe943b(0x142)](_0x14b705,{[_0x53d04e]:{'url':_0xec2b1e},'mimetype':_0x4e08c3,'fileName':_0x4baeca,..._0x2085ca},{'quoted':_0x5c8e01,..._0x2085ca}),fs['promises'][_0xbe943b(0xf7)](_0xec2b1e);},_0x2c91f1[_0x16db08(0x190)]=async _0x3baeb1=>{const _0x20320f=_0x16db08;return[..._0x3baeb1['matchAll'](/@([0-9]{5,16}|0)/g)][_0x20320f(0x1c0)](_0x441262=>_0x441262[0x1]+_0x20320f(0x158));},_0x2c91f1['copyNForward']=async(_0x40eae8,_0xdc0e63,_0x34465f=![],_0x294130={})=>{const _0x3b88f5=_0x16db08;let _0x195afb;_0x294130[_0x3b88f5(0x152)]&&(_0xdc0e63[_0x3b88f5(0x116)]=_0xdc0e63[_0x3b88f5(0x116)]&&_0xdc0e63[_0x3b88f5(0x116)]['ephemeralMessage']&&_0xdc0e63[_0x3b88f5(0x116)][_0x3b88f5(0x18c)][_0x3b88f5(0x116)]?_0xdc0e63[_0x3b88f5(0x116)][_0x3b88f5(0x18c)][_0x3b88f5(0x116)]:_0xdc0e63[_0x3b88f5(0x116)]||undefined,_0x195afb=Object[_0x3b88f5(0x15e)](_0xdc0e63[_0x3b88f5(0x116)]['viewOnceMessage'][_0x3b88f5(0x116)])[0x0],delete(_0xdc0e63[_0x3b88f5(0x116)]&&_0xdc0e63[_0x3b88f5(0x116)]['ignore']?_0xdc0e63[_0x3b88f5(0x116)][_0x3b88f5(0x16b)]:_0xdc0e63['message']||undefined),delete _0xdc0e63['message'][_0x3b88f5(0xf8)][_0x3b88f5(0x116)][_0x195afb][_0x3b88f5(0x160)],_0xdc0e63[_0x3b88f5(0x116)]={..._0xdc0e63[_0x3b88f5(0x116)][_0x3b88f5(0xf8)][_0x3b88f5(0x116)]});let _0x27dd71=Object['keys'](_0xdc0e63['message'])[0x0],_0xb66b9a=await generateForwardMessageContent(_0xdc0e63,_0x34465f),_0xf1ec9=Object[_0x3b88f5(0x15e)](_0xb66b9a)[0x0],_0x3c05f5={};if(_0x27dd71!=_0x3b88f5(0x1c9))_0x3c05f5=_0xdc0e63[_0x3b88f5(0x116)][_0x27dd71][_0x3b88f5(0x1b8)];_0xb66b9a[_0xf1ec9]['contextInfo']={..._0x3c05f5,..._0xb66b9a[_0xf1ec9][_0x3b88f5(0x1b8)]};const _0x1d6e3f=await generateWAMessageFromContent(_0x40eae8,_0xb66b9a,_0x294130?{..._0xb66b9a[_0xf1ec9],..._0x294130,..._0x294130['contextInfo']?{'contextInfo':{..._0xb66b9a[_0xf1ec9][_0x3b88f5(0x1b8)],..._0x294130[_0x3b88f5(0x1b8)]}}:{}}:{});return await _0x2c91f1[_0x3b88f5(0x15f)](_0x40eae8,_0x1d6e3f[_0x3b88f5(0x116)],{'messageId':_0x1d6e3f[_0x3b88f5(0xf6)]['id']}),_0x1d6e3f;},_0x2c91f1[_0x16db08(0x13e)]=async(_0x4bf2d0,_0x48fa3f)=>{const _0x1e5595=_0x16db08;let _0x4c48a3,_0x2c9fd3=Buffer[_0x1e5595(0x109)](_0x4bf2d0)?_0x4bf2d0:/^data:.*?\/.*?;base64,/i['test'](_0x4bf2d0)?Buffer[_0x1e5595(0x11a)](_0x4bf2d0['split']`,`[0x1],'base64'):/^https?:\/\//[_0x1e5595(0x14b)](_0x4bf2d0)?await(_0x4c48a3=await getBuffer(_0x4bf2d0)):fs[_0x1e5595(0x189)](_0x4bf2d0)?(filename=_0x4bf2d0,fs[_0x1e5595(0x104)](_0x4bf2d0)):typeof _0x4bf2d0===_0x1e5595(0x10a)?_0x4bf2d0:Buffer[_0x1e5595(0x157)](0x0),_0x278d18=await FileType[_0x1e5595(0x19c)](_0x2c9fd3)||{'mime':'application/octet-stream','ext':_0x1e5595(0x10f)};filename=path[_0x1e5595(0x121)](__filename,_0x1e5595(0x119)+new Date()*0x1+'.'+_0x278d18[_0x1e5595(0x111)]);if(_0x2c9fd3&&_0x48fa3f)fs[_0x1e5595(0x163)][_0x1e5595(0xff)](filename,_0x2c9fd3);return{'res':_0x4c48a3,'filename':filename,'size':await getSizeMedia(_0x2c9fd3),..._0x278d18,'data':_0x2c9fd3};},_0x2c91f1[_0x16db08(0x17e)]=_0x440bef=>smsg(_0x2c91f1,_0x440bef,store),_0x2c91f1['ev']['on'](_0x16db08(0x1aa),async _0x289014=>{const _0x1424e9=_0x16db08,{connection:_0x9858f6,lastDisconnect:_0xb22caa}=_0x289014;if(_0x9858f6===_0x1424e9(0x1a6)){let _0x29d77b=new Boom(_0xb22caa?.['error'])?.[_0x1424e9(0x122)]['statusCode'];if(_0x29d77b===DisconnectReason[_0x1424e9(0x173)])console[_0x1424e9(0x182)](chalk[_0x1424e9(0x120)][_0x1424e9(0xfa)](_0x1424e9(0x1d2))),process[_0x1424e9(0x1bd)]();else{if(_0x29d77b===DisconnectReason[_0x1424e9(0x143)])console['log'](chalk[_0x1424e9(0x120)][_0x1424e9(0xfa)](_0x1424e9(0x112))),connectToWhatsApp();else{if(_0x29d77b===DisconnectReason[_0x1424e9(0x175)])console[_0x1424e9(0x182)](chalk['redBright'][_0x1424e9(0xfa)](_0x1424e9(0x14a))),connectToWhatsApp();else{if(_0x29d77b===DisconnectReason['connectionReplaced'])console[_0x1424e9(0x182)](chalk['redBright'][_0x1424e9(0xfa)](_0x1424e9(0x1b1))),process['exit']();else{if(_0x29d77b===DisconnectReason['loggedOut'])console['log'](chalk['redBright'][_0x1424e9(0xfa)](_0x1424e9(0x1d8))),process[_0x1424e9(0x1bd)]();else{if(_0x29d77b===DisconnectReason[_0x1424e9(0x13f)])console[_0x1424e9(0x182)](chalk[_0x1424e9(0x120)][_0x1424e9(0xfa)]('Restart\x20Required,\x20Restarting...')),connectToWhatsApp();else _0x29d77b===DisconnectReason[_0x1424e9(0x123)]?(console[_0x1424e9(0x182)](chalk[_0x1424e9(0x120)]['bold'](_0x1424e9(0x184))),connectToWhatsApp()):(console[_0x1424e9(0x182)](chalk['redBright'][_0x1424e9(0xfa)](_0x1424e9(0x1c6)+_0x29d77b+'|'+_0x9858f6)),connectToWhatsApp());}}}}}}else _0x9858f6==='open'&&console['log'](chalk['greenBright']('['+jammenit+']')+'\x20'+chalk['greenBright']('STATUS\x20BOT\x20CONNECTED'));}),_0x2c91f1;}connectToWhatsApp();let file=require[_0x39fffe(0x1d9)](__filename);fs[_0x39fffe(0x113)](file,()=>{const _0x28e6fb=_0x39fffe;fs[_0x28e6fb(0x1b2)](file),console[_0x28e6fb(0x182)](chalk['redBright'](_0x28e6fb(0x1cd)+__filename)),delete require['cache'][file],require(file);});