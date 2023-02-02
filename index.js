const { Telegraf } = require('telegraf');

const bot = new Telegraf("5741010198:AAFycJWHI25kzTyyiLwB3xYiAiglmGqTmtw");
bot.start((ctx) => ctx.reply('assalomu alaykum'));
bot.help((ctx) => ctx.reply(
  `Siz bot bilan aloqa qilishinggiz uchun quyidagi so'zlardan fodalaning.
/dollor_kursi
/Bank_bilin_aloqa 
/Daromadim 
/Aksiyala_haqida 
/kirptala_haqida`));
// bot.on('', (ctx) => ctx.reply('🤬'));
bot.on('sticker', (ctx) => ctx.reply('off'))
bot.hears('hi', (ctx) =>  {ctx.reply("zo'r");
});

bot.hears('salom', ctx =>{ctx.reply('yaxshimisiz ')
})
bot.hears('ismiyiz nima', ctx =>{ctx.reply('lion' )
})
bot.hears('hm', ctx =>{ctx.reply('sizdachi')
})
bot.hears('tinchlik', ctx =>{ ctx.reply('ha_yaxshi ')
})
bot.hears('obi-havo', ctx =>{ctx.reply('ajayib')
})
bot.command('dollor_kursi', ctx =>{ctx.reply( "ko'tarildi")
})
bot.command('Bank_bilin_aloqa', ctx =>{ctx.reply('xozircha_mavjud_emas' )
})
bot.command('Daromadim', ctx =>{ctx.reply('0.85$_kamaydi')
})
bot.command('Aksiyala_haqida', ctx =>{ ctx.reply('xozircha_mavjud_emas')
})
bot.command('kirptala_haqida', ctx =>{ctx.reply('xozircha_mavjud_emas')
})
// bot.on("text", ctx=>{
//     if(ctx.message.text.toLocaleLowerCase() == "video"){

//        return  ctx.replyWithVideo('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4')
//     }
// })
// bot.hears('rasm' , (msg) => {
//     msg.replyWithPhoto("https://zamin.uz/uploads/posts/2018-09/1536039982_bd0db605aee5bfe315ae429559447695_big.jpeg")
// })
// bot.hears('vedio',(ctx) =>{
//     ctx.replyWithVideo("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4")
// })
// bot.on("text", ctx=>{
//   if(ctx.message.text.toLocaleLowerCase() == "video"){

//      return  ctx.replyWithVideo('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4')
//   }
// })

// bot.on("message",(ctx )=> ctx.reply("botga togridan togri yozilmaydi"))
bot.launch();
console.log("bot ishlayabdi");