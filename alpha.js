const _0xcf6a31=_0x3732;(function(_0x123c9e,_0x2ef87e){const _0x324d19=_0x3732,_0x513885=_0x123c9e();while(!![]){try{const _0x5ecb51=-parseInt(_0x324d19(0x18e))/0x1+parseInt(_0x324d19(0x188))/0x2+parseInt(_0x324d19(0x146))/0x3*(parseInt(_0x324d19(0x161))/0x4)+-parseInt(_0x324d19(0x152))/0x5+-parseInt(_0x324d19(0x1c8))/0x6*(-parseInt(_0x324d19(0x1c7))/0x7)+parseInt(_0x324d19(0x1ca))/0x8+-parseInt(_0x324d19(0x1a6))/0x9;if(_0x5ecb51===_0x2ef87e)break;else _0x513885['push'](_0x513885['shift']());}catch(_0x2b696b){_0x513885['push'](_0x513885['shift']());}}}(_0x2c04,0x258da),require(_0xcf6a31(0x196)));function _0x3732(_0x1c004b,_0x86e107){const _0x2c04b9=_0x2c04();return _0x3732=function(_0x3732fc,_0x2198c4){_0x3732fc=_0x3732fc-0x128;let _0x2f6a01=_0x2c04b9[_0x3732fc];return _0x2f6a01;},_0x3732(_0x1c004b,_0x86e107);}const {default:WADefault,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require('@whiskeysockets/baileys'),pino=require('pino'),{Boom}=require(_0xcf6a31(0x1b8)),fs=require('fs'),CFonts=require(_0xcf6a31(0x128)),{color,bgcolor}=require(_0xcf6a31(0x1b4)),axios=require('axios'),FileType=require(_0xcf6a31(0x1a8)),readline=require(_0xcf6a31(0x1a0)),PhoneNumber=require(_0xcf6a31(0x1c3)),{smsg,getBuffer,fetchJson}=require(_0xcf6a31(0x14f)),fetch=require(_0xcf6a31(0x16c)),usePairingCode=!![],{imageToWebp,videoToWebp,writeExifImg,writeExifVid,writeExif}=require(_0xcf6a31(0x15e)),{isSetClose,addSetClose,removeSetClose,changeSetClose,getTextSetClose,isSetDone,addSetDone,removeSetDone,changeSetDone,getTextSetDone,isSetLeft,addSetLeft,removeSetLeft,changeSetLeft,getTextSetLeft,isSetOpen,addSetOpen,removeSetOpen,changeSetOpen,getTextSetOpen,isSetProses,addSetProses,removeSetProses,changeSetProses,getTextSetProses,isSetWelcome,addSetWelcome,removeSetWelcome,changeSetWelcome,getTextSetWelcome,addSewaGroup,getSewaExpired,getSewaPosition,expiredCheck,checkSewaGroup}=require(_0xcf6a31(0x14e));let set_welcome_db=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)](_0xcf6a31(0x1b7))),set_left_db=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)](_0xcf6a31(0x185))),_welcome=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)]('./database/welcome.json')),_left=JSON['parse'](fs['readFileSync'](_0xcf6a31(0x154))),set_proses=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)](_0xcf6a31(0x178))),set_done=JSON[_0xcf6a31(0x1ad)](fs['readFileSync'](_0xcf6a31(0x187))),set_open=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)](_0xcf6a31(0x129))),set_close=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)](_0xcf6a31(0x14a))),sewa=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)](_0xcf6a31(0x1bf))),setpay=JSON[_0xcf6a31(0x1ad)](fs['readFileSync'](_0xcf6a31(0x13e))),opengc=JSON[_0xcf6a31(0x1ad)](fs['readFileSync'](_0xcf6a31(0x148))),antilink=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)]('./database/antilink.json')),antiwame=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)](_0xcf6a31(0x141))),antilink2=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)](_0xcf6a31(0x139))),antiwame2=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)]('./database/antiwame2.json')),db_respon_list=JSON[_0xcf6a31(0x1ad)](fs[_0xcf6a31(0x18c)]('./database/list.json'));const {toBuffer,toDataURL}=require(_0xcf6a31(0x135)),express=require('express');let app=express();function _0x2c04(){const _0x3506d4=['470716DwfoyF','messages','authState','Connected\x20to\x20=\x20','readFileSync','end','169086XcQNtk','buffer','static','sendImageAsSticker','subject','groupMetadata','createInterface','yellow','./owner-dan-menu','PORT','Unknown\x20DisconnectReason:\x20','20.0.04','decodeJid','groupSettingUpdate','sendTextWithMentions','\x0aFN:','sendVideoAsSticker','all','readline','image','add','Silahkan\x20Masukan\x20Code\x20Diatas','connection.update','existsSync','2851488HjLgAm','stringify','file-type','0@s.whatsapp.net','open','fromMe','not_announcement','parse','WhatsApp','length','invalid','\x0aitem1.TEL;waid=','fromBuffer','chats','./lib/color','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Connect\x20Again','then','./database/set_welcome.json','@hapi/boom','BAE5','status@broadcast','contacts','keys','content-type','user','./database/sewa.json','creds','isBuffer','\x20Selamat\x20Sekarang\x20Menjadi\x20Admin\x20Grup\x20*','awesome-phonenumber','views','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20reconnecting...','split','75950nGcEDT','150heaLwu','Multidevicemismatch','1798192aUjegA','name','==============================','promote','contacts.update','Error','logout','stdin','getNumber','path','from','true','join','replace','key','cfonts','./database/set_open.json','error','bind','map','white','use',',\x20Welcome\x20To\x20','msg','image/png','child','base64','writeFileSync','qrcode','public','restartRequired','group-participants.update','./database/antilink2.json','statusCode','./store','mtype','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Connect\x20And\x20Run.','./database/pay.json','@s.whatsapp.net','Project\x20Vipers\x20Bot\x20by\x20Dhaniels\x20Store\x0a','./database/antiwame.json','@g.us','demote','includes','getName','12WroaSy','server','./database/opengc.json','gold','./database/set_close.json','startsWith','values','Sukses,\x20group\x20telah\x20dibuka','./lib/store','./lib/simple','sendMessage','concat','1495410DVPLkm','registered','./database/left.json','console','Hallo\x20@','author','http','remoteJid','action','message','⚠︎\x20Kode\x20Pairing\x20Bot\x20Whatsapp\x20kamu\x20:','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','./lib/exif','serializeM','ext','207436OJORuc','packname','question','log','profilePictureUrl','center','requestPairingCode','badSession','silent','connectionClosed','alloc','node-fetch','receivedPendingNotifications','verifiedName','output','block','sessionName','connectionLost','\x20Bukan\x20Admin\x20Grup\x20*','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','connection','sendText','Restart\x20Required,\x20Restarting...','./database/set_proses.json','listen','Sayonara\x20@','matchAll','catch','Connection\x20TimedOut,\x20Reconnecting...','ephemeralMessage','timedOut','test','international','Ubuntu','setHeader','mimetype','./database/set_left.json','\x0aMasukan\x20Nomor\x20Whatsapp\x20Kamu\x20Diawali\x20Dengan\x2062\x0a»\x20Contoh:\x20081xxx❎\x20|\x206281xxx✅\x0a','./database/set_done.json'];_0x2c04=function(){return _0x3506d4;};return _0x2c04();}const {createServer}=require(_0xcf6a31(0x158));let server=createServer(app),_qr=_0xcf6a31(0x1b0),PORT=process['env'][_0xcf6a31(0x197)];const path=require(_0xcf6a31(0x1d3)),store=makeInMemoryStore({'logger':pino()[_0xcf6a31(0x132)]({'level':'silent','stream':'store'})}),question=_0x15e596=>{const _0x2e1574=_0xcf6a31,_0x288e03=readline[_0x2e1574(0x194)]({'input':process[_0x2e1574(0x1d1)],'output':process['stdout']});return new Promise(_0x435d22=>{const _0x47b802=_0x2e1574;_0x288e03[_0x47b802(0x163)](_0x15e596,_0x435d22);});};CFonts['say']('\x0aDhaniels\x20Store',{'font':_0xcf6a31(0x170),'align':_0xcf6a31(0x166),'colors':[_0xcf6a31(0x195)]}),CFonts['say'](_0xcf6a31(0x140),{'font':_0xcf6a31(0x155),'align':'center','color':[_0xcf6a31(0x12d)]}),console[_0xcf6a31(0x164)](color('==============================')),console[_0xcf6a31(0x164)](color('\x0aInstagram\x20Owner\x20:\x20Dhaniels.srd',_0xcf6a31(0x195))),console[_0xcf6a31(0x164)](color('Instagram\x20Store\x20:\x20Dhaniels.store\x0a',_0xcf6a31(0x195))),console[_0xcf6a31(0x164)](color(_0xcf6a31(0x1cc)));async function Botstarted(){const _0x562246=_0xcf6a31,{state:_0x56f60a,saveCreds:_0x304496}=await useMultiFileAuthState(global[_0x562246(0x171)]),_0x166ee0=WADefault({'logger':pino({'level':_0x562246(0x169)}),'printQRInTerminal':!usePairingCode,'auth':_0x56f60a,'browser':[_0x562246(0x182),'Chrome',_0x562246(0x199)]});if(usePairingCode&&!_0x166ee0[_0x562246(0x18a)][_0x562246(0x1c0)][_0x562246(0x153)]){const _0x380b3a=await question(color(_0x562246(0x186),_0x562246(0x195))),_0x3cebe1=await _0x166ee0[_0x562246(0x167)](_0x380b3a['trim']());console[_0x562246(0x164)](color(_0x562246(0x15c),_0x562246(0x149)),color(''+_0x3cebe1,_0x562246(0x12d)));}return store[_0x562246(0x12b)](_0x166ee0['ev']),_0x166ee0['ev']['on']('messages.upsert',async _0x3bc8a6=>{const _0x30506a=_0x562246;try{mek=_0x3bc8a6[_0x30506a(0x189)][0x0];if(!mek[_0x30506a(0x15b)])return;mek[_0x30506a(0x15b)]=Object[_0x30506a(0x1bc)](mek['message'])[0x0]===_0x30506a(0x17e)?mek[_0x30506a(0x15b)][_0x30506a(0x17e)][_0x30506a(0x15b)]:mek[_0x30506a(0x15b)];if(mek[_0x30506a(0x1d8)]&&mek['key'][_0x30506a(0x159)]===_0x30506a(0x1ba))return;if(!_0x166ee0[_0x30506a(0x136)]&&!mek[_0x30506a(0x1d8)][_0x30506a(0x1ab)]&&_0x3bc8a6['type']==='notify')return;if(mek[_0x30506a(0x1d8)]['id'][_0x30506a(0x14b)](_0x30506a(0x1b9))&&mek[_0x30506a(0x1d8)]['id'][_0x30506a(0x1af)]===0x10)return;m=smsg(_0x166ee0,mek,store),require(_0x30506a(0x13b))(_0x166ee0,m,_0x3bc8a6,store,opengc,setpay,antilink,antiwame,antilink2,antiwame2,set_welcome_db,set_left_db,set_proses,set_done,set_open,set_close,sewa,_welcome,_left,db_respon_list);}catch(_0x38f598){console[_0x30506a(0x164)](_0x38f598);}}),setInterval(()=>{const _0x695713=_0x562246;for(let _0x53f423 of Object[_0x695713(0x14c)](opengc)){Date['now']()>=_0x53f423['time']&&(_0x166ee0[_0x695713(0x19b)](_0x53f423['id'],_0x695713(0x1ac))[_0x695713(0x1b6)](_0x27ed88=>_0x166ee0[_0x695713(0x150)](_0x53f423['id'],{'text':_0x695713(0x14d)}))[_0x695713(0x17c)](_0xca6b69=>_0x166ee0[_0x695713(0x150)](_0x53f423['id'],{'text':_0x695713(0x1cf)})),delete opengc[_0x53f423['id']],fs[_0x695713(0x134)](_0x695713(0x148),JSON[_0x695713(0x1a7)](opengc)));}},0x3e8),_0x166ee0['ev']['on'](_0x562246(0x138),async _0x19d6c2=>{const _0x393b33=_0x562246,_0xe4e9c8=_welcome[_0x393b33(0x144)](_0x19d6c2['id']),_0x21988d=_left[_0x393b33(0x144)](_0x19d6c2['id']);try{let _0x3b5289=await _0x166ee0['groupMetadata'](_0x19d6c2['id']),_0x6c06f5=_0x19d6c2['participants'];const _0x41db56=_0x3b5289[_0x393b33(0x192)],_0x5b1e6a=_0x3b5289['desc'];for(let _0x2df735 of _0x6c06f5){try{ppuser=await _0x166ee0[_0x393b33(0x165)](_0x2df735,_0x393b33(0x1a1));}catch{ppuser='https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg';}try{ppgroup=await _0x166ee0['profilePictureUrl'](_0x19d6c2['id'],_0x393b33(0x1a1));}catch{ppgroup='https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg';}if(_0x19d6c2[_0x393b33(0x15a)]==_0x393b33(0x1a2)&&_0xe4e9c8){console[_0x393b33(0x164)](_0x19d6c2);if(isSetWelcome(_0x19d6c2['id'],set_welcome_db)){var _0xd95805=await getTextSetWelcome(_0x19d6c2['id'],set_welcome_db),_0x513e8d=_0xd95805[_0x393b33(0x1d7)](/@user/gi,'@'+_0x2df735[_0x393b33(0x1c6)]('@')[0x0]),_0x183acf=_0x513e8d[_0x393b33(0x1d7)](/@group/gi,_0x41db56)['replace'](/@desc/gi,_0x5b1e6a);_0x166ee0[_0x393b33(0x150)](_0x19d6c2['id'],{'image':{'url':ppuser},'mentions':[_0x2df735],'caption':''+_0x183acf});}else _0x166ee0[_0x393b33(0x150)](_0x19d6c2['id'],{'image':{'url':ppuser},'mentions':[_0x2df735],'caption':_0x393b33(0x156)+_0x2df735[_0x393b33(0x1c6)]('@')[0x0]+_0x393b33(0x12f)+_0x3b5289[_0x393b33(0x192)]});}else{if(_0x19d6c2[_0x393b33(0x15a)]=='remove'&&_0x21988d){console[_0x393b33(0x164)](_0x19d6c2);if(isSetLeft(_0x19d6c2['id'],set_left_db)){var _0x26aae6=await getTextSetLeft(_0x19d6c2['id'],set_left_db),_0x513e8d=_0x26aae6['replace'](/@user/gi,'@'+_0x2df735[_0x393b33(0x1c6)]('@')[0x0]),_0x183acf=_0x513e8d[_0x393b33(0x1d7)](/@group/gi,_0x41db56)[_0x393b33(0x1d7)](/@desc/gi,_0x5b1e6a);_0x166ee0[_0x393b33(0x150)](_0x19d6c2['id'],{'image':{'url':ppuser},'mentions':[_0x2df735],'caption':''+_0x183acf});}else _0x166ee0['sendMessage'](_0x19d6c2['id'],{'image':{'url':ppuser},'mentions':[_0x2df735],'caption':_0x393b33(0x17a)+_0x2df735[_0x393b33(0x1c6)]('@')[0x0]});}else{if(_0x19d6c2[_0x393b33(0x15a)]==_0x393b33(0x1cd))_0x166ee0['sendMessage'](_0x19d6c2['id'],{'image':{'url':ppuser},'mentions':[_0x2df735],'caption':'@'+_0x2df735['split']('@')[0x0]+_0x393b33(0x1c2)+_0x3b5289[_0x393b33(0x192)]+'*'});else _0x19d6c2[_0x393b33(0x15a)]==_0x393b33(0x143)&&_0x166ee0[_0x393b33(0x150)](_0x19d6c2['id'],{'image':{'url':ppuser},'mentions':[_0x2df735],'caption':'@'+_0x2df735[_0x393b33(0x1c6)]('@')[0x0]+_0x393b33(0x173)+_0x3b5289[_0x393b33(0x192)]+'*\x20Lagi'});}}}}catch(_0x363315){console[_0x393b33(0x164)](_0x363315);}}),_0x166ee0[_0x562246(0x19a)]=_0x47c0ed=>{const _0x5a3418=_0x562246;if(!_0x47c0ed)return _0x47c0ed;if(/:\d+@/gi['test'](_0x47c0ed)){let _0x3a766a=jidDecode(_0x47c0ed)||{};return _0x3a766a['user']&&_0x3a766a[_0x5a3418(0x147)]&&_0x3a766a[_0x5a3418(0x1be)]+'@'+_0x3a766a[_0x5a3418(0x147)]||_0x47c0ed;}else return _0x47c0ed;},_0x166ee0['ev']['on'](_0x562246(0x1ce),_0x17480f=>{const _0x9bd13e=_0x562246;for(let _0x36e6eb of _0x17480f){let _0x181bec=_0x166ee0[_0x9bd13e(0x19a)](_0x36e6eb['id']);if(store&&store[_0x9bd13e(0x1bb)])store[_0x9bd13e(0x1bb)][_0x181bec]={'id':_0x181bec,'name':_0x36e6eb['notify']};}}),_0x166ee0[_0x562246(0x145)]=(_0x1cefca,_0x574d72=![])=>{const _0x45ec69=_0x562246;id=_0x166ee0[_0x45ec69(0x19a)](_0x1cefca),_0x574d72=_0x166ee0['withoutContact']||_0x574d72;let _0x10b3de;if(id['endsWith'](_0x45ec69(0x142)))return new Promise(async _0x28380c=>{const _0xb20527=_0x45ec69;_0x10b3de=store[_0xb20527(0x1bb)][id]||{};if(!(_0x10b3de[_0xb20527(0x1cb)]||_0x10b3de[_0xb20527(0x192)]))_0x10b3de=_0x166ee0[_0xb20527(0x193)](id)||{};_0x28380c(_0x10b3de[_0xb20527(0x1cb)]||_0x10b3de[_0xb20527(0x192)]||PhoneNumber('+'+id[_0xb20527(0x1d7)](_0xb20527(0x13f),''))[_0xb20527(0x1d2)](_0xb20527(0x181)));});else _0x10b3de=id===_0x45ec69(0x1a9)?{'id':id,'name':_0x45ec69(0x1ae)}:id===_0x166ee0[_0x45ec69(0x19a)](_0x166ee0[_0x45ec69(0x1be)]['id'])?_0x166ee0['user']:store[_0x45ec69(0x1bb)][id]||{};return(_0x574d72?'':_0x10b3de[_0x45ec69(0x1cb)])||_0x10b3de[_0x45ec69(0x192)]||_0x10b3de[_0x45ec69(0x16e)]||PhoneNumber('+'+_0x1cefca[_0x45ec69(0x1d7)](_0x45ec69(0x13f),''))[_0x45ec69(0x1d2)](_0x45ec69(0x181));},_0x166ee0['sendContact']=async(_0x4aecc4,_0x2d8315,_0x19667f='',_0x33bedc={})=>{const _0x4f00c1=_0x562246;let _0x5d4ba0=[];for(let _0x268031 of _0x2d8315){_0x5d4ba0['push']({'displayName':await _0x166ee0[_0x4f00c1(0x145)](_0x268031+'@s.whatsapp.net'),'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:'+await _0x166ee0['getName'](_0x268031+'@s.whatsapp.net')+_0x4f00c1(0x19d)+await _0x166ee0[_0x4f00c1(0x145)](_0x268031+_0x4f00c1(0x13f))+_0x4f00c1(0x1b1)+_0x268031+':'+_0x268031+_0x4f00c1(0x174)});}_0x166ee0['sendMessage'](_0x4aecc4,{'contacts':{'displayName':_0x5d4ba0[_0x4f00c1(0x1af)]+'\x20Kontak','contacts':_0x5d4ba0},..._0x33bedc},{'quoted':_0x19667f});},_0x166ee0['public']=!![],_0x166ee0[_0x562246(0x15f)]=_0x3f7cd8=>smsg(_0x166ee0,_0x3f7cd8,store),_0x166ee0['ev']['on'](_0x562246(0x1a4),async _0x4c8358=>{const _0x30077b=_0x562246,{connection:_0x3acfab,lastDisconnect:_0x22a6f1,qr:_0x166531}=_0x4c8358;_0x166531&&(app[_0x30077b(0x12e)](async(_0x20b571,_0x5837c4)=>{const _0x5e4ac3=_0x30077b;_0x5837c4[_0x5e4ac3(0x183)](_0x5e4ac3(0x1bd),_0x5e4ac3(0x131)),_0x5837c4[_0x5e4ac3(0x18d)](await toBuffer(_0x166531));}),app[_0x30077b(0x12e)](express[_0x30077b(0x190)](path[_0x30077b(0x1d6)](__dirname,_0x30077b(0x1c4)))),app[_0x30077b(0x179)](PORT,()=>{const _0x4e94d2=_0x30077b;console[_0x4e94d2(0x164)](_0x4e94d2(0x1a3));}));if(_0x3acfab==='close'){let _0x4856f7=new Boom(_0x22a6f1?.[_0x30077b(0x12a)])?.[_0x30077b(0x16f)][_0x30077b(0x13a)];if(_0x4856f7===DisconnectReason[_0x30077b(0x168)])console[_0x30077b(0x164)](_0x30077b(0x1b5)),_0x166ee0[_0x30077b(0x1d0)]();else{if(_0x4856f7===DisconnectReason[_0x30077b(0x16a)])console[_0x30077b(0x164)]('Connection\x20closed,\x20reconnecting....'),Botstarted();else{if(_0x4856f7===DisconnectReason[_0x30077b(0x172)])console['log'](_0x30077b(0x15d)),Botstarted();else{if(_0x4856f7===DisconnectReason['connectionReplaced'])console[_0x30077b(0x164)](_0x30077b(0x1c5)),Botstarted();else{if(_0x4856f7===DisconnectReason['loggedOut'])console['log'](_0x30077b(0x13d)),_0x166ee0[_0x30077b(0x1d0)]();else{if(_0x4856f7===DisconnectReason[_0x30077b(0x137)])console[_0x30077b(0x164)](_0x30077b(0x177)),Botstarted();else{if(_0x4856f7===DisconnectReason[_0x30077b(0x17f)])console[_0x30077b(0x164)](_0x30077b(0x17d)),Botstarted();else{if(_0x4856f7===DisconnectReason[_0x30077b(0x1c9)])console[_0x30077b(0x164)]('Multi\x20device\x20mismatch,\x20please\x20connect\x20again'),_0x166ee0[_0x30077b(0x1d0)]();else _0x166ee0[_0x30077b(0x18d)](_0x30077b(0x198)+_0x4856f7+'|'+_0x3acfab);}}}}}}}}(_0x4c8358[_0x30077b(0x175)]==_0x30077b(0x1aa)||_0x4c8358[_0x30077b(0x16d)]==_0x30077b(0x1d5))&&(await store[_0x30077b(0x1b3)][_0x30077b(0x19f)](),console[_0x30077b(0x164)](_0x30077b(0x18b)+JSON[_0x30077b(0x1a7)](_0x166ee0[_0x30077b(0x1be)],null,0x2)));}),_0x166ee0['ev']['on']('creds.update',_0x304496),_0x166ee0[_0x562246(0x176)]=(_0x317019,_0x325694,_0x426c71='',_0x3dc284)=>_0x166ee0[_0x562246(0x150)](_0x317019,{'text':_0x325694,..._0x3dc284},{'quoted':_0x426c71,..._0x3dc284}),_0x166ee0['downloadMediaMessage']=async _0x47e64b=>{const _0x2e2210=_0x562246;let _0x12d021=(_0x47e64b[_0x2e2210(0x130)]||_0x47e64b)[_0x2e2210(0x184)]||'',_0x221d97=_0x47e64b[_0x2e2210(0x13c)]?_0x47e64b[_0x2e2210(0x13c)]['replace'](/Message/gi,''):_0x12d021[_0x2e2210(0x1c6)]('/')[0x0];const _0x5e47da=await downloadContentFromMessage(_0x47e64b,_0x221d97);let _0x3be6bb=Buffer[_0x2e2210(0x1d4)]([]);for await(const _0x56f6d1 of _0x5e47da){_0x3be6bb=Buffer[_0x2e2210(0x151)]([_0x3be6bb,_0x56f6d1]);}return _0x3be6bb;},_0x166ee0['downloadAndSaveMediaMessage']=async(_0x210ea8,_0xe924fc,_0x5374eb=!![])=>{const _0x3fc30e=_0x562246;let _0x3d29de=_0x210ea8['msg']?_0x210ea8['msg']:_0x210ea8,_0x48b6d4=(_0x210ea8[_0x3fc30e(0x130)]||_0x210ea8)[_0x3fc30e(0x184)]||'',_0x5794bf=_0x210ea8['mtype']?_0x210ea8[_0x3fc30e(0x13c)][_0x3fc30e(0x1d7)](/Message/gi,''):_0x48b6d4[_0x3fc30e(0x1c6)]('/')[0x0];const _0x2ad2ca=await downloadContentFromMessage(_0x3d29de,_0x5794bf);let _0x4f741f=Buffer[_0x3fc30e(0x1d4)]([]);for await(const _0x5b1800 of _0x2ad2ca){_0x4f741f=Buffer['concat']([_0x4f741f,_0x5b1800]);}let _0xaba031=await FileType[_0x3fc30e(0x1b2)](_0x4f741f);return trueFileName=_0x5374eb?_0xe924fc+'.'+_0xaba031[_0x3fc30e(0x160)]:_0xe924fc,await fs['writeFileSync'](trueFileName,_0x4f741f),trueFileName;},_0x166ee0[_0x562246(0x19c)]=async(_0x1f2196,_0x283924,_0x315791,_0x48c928={})=>_0x166ee0[_0x562246(0x150)](_0x1f2196,{'text':_0x283924,'mentions':[..._0x283924[_0x562246(0x17b)](/@(\d{0,16})/g)][_0x562246(0x12c)](_0x986df1=>_0x986df1[0x1]+_0x562246(0x13f)),..._0x48c928},{'quoted':_0x315791}),_0x166ee0[_0x562246(0x191)]=async(_0x42bd91,_0x326266,_0x43cc61,_0x1d6d8e={})=>{const _0x3e9daf=_0x562246;let _0x5bac0f=Buffer[_0x3e9daf(0x1c1)](_0x326266)?_0x326266:/^data:.*?\/.*?;base64,/i[_0x3e9daf(0x180)](_0x326266)?Buffer[_0x3e9daf(0x1d4)](_0x326266[_0x3e9daf(0x1c6)]`,`[0x1],_0x3e9daf(0x133)):/^https?:\/\//['test'](_0x326266)?await(await fetch(_0x326266))[_0x3e9daf(0x18f)]():fs[_0x3e9daf(0x1a5)](_0x326266)?fs[_0x3e9daf(0x18c)](_0x326266):Buffer[_0x3e9daf(0x16b)](0x0),_0x1bc7c9;return _0x1d6d8e&&(_0x1d6d8e[_0x3e9daf(0x162)]||_0x1d6d8e[_0x3e9daf(0x157)])?_0x1bc7c9=await writeExifImg(_0x5bac0f,_0x1d6d8e):_0x1bc7c9=await imageToWebp(_0x5bac0f),await _0x166ee0[_0x3e9daf(0x150)](_0x42bd91,{'sticker':{'url':_0x1bc7c9},..._0x1d6d8e},{'quoted':_0x43cc61}),_0x1bc7c9;},_0x166ee0[_0x562246(0x19e)]=async(_0x195b8f,_0x29a358,_0x477577,_0x48d39e={})=>{const _0xf84223=_0x562246;let _0x5ac578=Buffer['isBuffer'](_0x29a358)?_0x29a358:/^data:.*?\/.*?;base64,/i['test'](_0x29a358)?Buffer[_0xf84223(0x1d4)](_0x29a358['split']`,`[0x1],_0xf84223(0x133)):/^https?:\/\//[_0xf84223(0x180)](_0x29a358)?await getBuffer(_0x29a358):fs[_0xf84223(0x1a5)](_0x29a358)?fs[_0xf84223(0x18c)](_0x29a358):Buffer[_0xf84223(0x16b)](0x0),_0x2e47cc;return _0x48d39e&&(_0x48d39e['packname']||_0x48d39e['author'])?_0x2e47cc=await writeExifVid(_0x5ac578,_0x48d39e):_0x2e47cc=await videoToWebp(_0x5ac578),await _0x166ee0[_0xf84223(0x150)](_0x195b8f,{'sticker':{'url':_0x2e47cc},..._0x48d39e},{'quoted':_0x477577}),_0x2e47cc;},_0x166ee0;}Botstarted();