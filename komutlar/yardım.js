const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("» Guard BOT Komut Sistemleri")
    .setTimestamp()
    .addField("» fx!ban", " İstediğiniz Kullanıcıyı Banlamanızı Sağlar.")
    .addField("» fx!kick ", "sKullanıcıyı Kicklemenizi Sağlar.")
    .addField("» fx!ever-engel aç-kapat", " veryone Ve Here Açar/kapatır.")
    .addField("» fx!jail-kanal", "Jail Kanalı Ayarlar.")
    .addField("» fx!jail ", "Kullanıcıyı Jaile Atmayı Sağlar.")
    .addField("» fx!link-engel ", "Link Engellemeyi Açar..")
    .addField("» fx!mod-log-ayarla ", "Mod Log Kanalı Belirler. .")
    .addField("» fx!reklam-engel ", "Reklam Engellemeyi Açar.")
    .addField("» fx!koruma ", "Rol Korumayı Ayarlar..")
    .addField("» fx!yavaş-mod ", "Yazı Yazma Süresini Ayarlar.")
    .addField("» fx!temizle ", "Belirtilen Sayı Kadar Mesaj Siler.")
    .addField("» fx!uyar ", "İstediğiniz Kişiyi Uyarır.")
    .addField("» fx!uyarı-kaldır ", " Kişinin Uyarısını Kaldırır.")
    .addField("» fx!kanal-koruma  ", "Kanal Korumayı Aktif Hale Getirir.")
    .addField("» fx!kanal-koruma-sıfırla ", "Kanal Korumayı Kapatır.")
    .addField("» fx!mute ", "belirttiğiniz kişiyi süreli olarak susturur.")
    .addField("» fx!sinanfx ", "SinanFx in youtube kanalını gösterir.")

    .setFooter("© 2020  Bot", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yg"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yardım"
};
