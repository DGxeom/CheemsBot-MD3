//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//api key

//menu maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = false //auto available (true to on, false to off)

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemsthumb.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemsthumb.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemsthumb.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemsthumb.jpg") //ur thumb pic

//owmner v card
global.owner = ['923032112917'] //ur owner number
global.ownername = "YOuR NOBiTA💙👑"
global.ytname = "YT: T-series" //ur yt chanel name
global.socialm = "GitHub: I have don't github" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//damtabase
global.rkyt = []
global.banUser = []
global.banchat = []
global.ntilink = []
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.wlcm = []
global.gcrevoke = []


//bot bomdy
global.botname = "AYAZ'S Bot MD" //ur bot name
global.ownertag = "@923032112917" //ur anti-tag number
global.watermark = "AYaZ Bot Inc." //ur watermark
global.dogeemoji = "🍃" //ur emoji
global.reactmoji = "🇵🇰" //ur react emoji
global.packname = "🌱Dream Guy AYaZ" //ur sticker pack name
global.author = "Cheems Bot MDV3\n\n\n\n\nAm Xeon☣️\n14 years of age🧐\n\nFrom Mizoram, India🇮🇳\nMy hobby is coding🦄🥀" //ur sticker author name
global.sessionName = "session"
global.linkgrupss = "https://wa.me/923032112917" //ur gc link
global.linkgrupss2 = "https://wa.me/923032112917" //ur gc link2
global.websitex = "https://wa.me/923032112917" //ur website
global.botscript = "https://wa.me/923032112917" //ur script link
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Done✓',
    admin: 'This feature is only for admins!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This feature is only for owner',
    group: 'This feature is only for groups!',
    private: 'This feature is only for private chats!',
    bot: 'This feature is only for bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
