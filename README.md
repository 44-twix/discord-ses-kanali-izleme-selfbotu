# Discord için Ses Kanalı İzleme Selfbotu

Bu depo, belirli bir ses kanalını izleyen ve çeşitli özellikler sunan bir Discord selfbotu içerir. Bot, `discord.js-selfbot-v13` kütüphanesi kullanılarak oluşturulmuştur ve JavaScript ile yazılmıştır.

## Önemli Özellikler

- Belirtilen ses kanalına bağlanır ve kanalda geçirilen süreyi günlüğe kaydeder.
- Belirtilen ses kanalının adını, kimliğini ve üye sayısını görüntüler.
- Kolay izleme için net ve basit bir konsol çıktısı sağlar.

## Proje İçeriği

- `index.js`
- `package.json`
- `package-lock.json`
- `config.json`

## Kurulum

1. Depoyu klonlayın veya indirin.
2. Bir terminal açın ve projenin bulunduğu konuma gidin.
3. `npm install` komutunu çalıştırarak gerekli bağımlılıkları yükleyin.

## Yapılandırma

1. Projedeki `config.json` adındaki dosyayı doldurun.

```json
{
  "TOKEN": "hesap_tokeniniz",
  "SUNUCU_ID": "sunucu_id",
  "SES_KANAL_ID": "ses_kanal_id"

}
