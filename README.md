# Discord için Ses Kanalı İzleme Selfbotu

Bu depo, belirli bir ses kanalını izleyen ve çeşitli özellikler sunan bir Discord selfbotu içerir. Bot, `discord.js-selfbot-v13` kütüphanesi kullanılarak oluşturulur ve JavaScript ile yazılmıştır.

## Önemli Özellikler

- Belirtilen ses kanalına bağlanır ve kanalda geçirilen süreyi günlüğe kaydeder.
- Belirtilen ses kanalının adını, kimliğini ve üye sayısını görüntüler.
- Kolay izleme için net ve basit bir konsol çıktısı sağlar.

## Proje Yapısı

- `index.js`: Uygulamanın ana mantığı bulunan giriş noktasıdır.
- `package.json`: Proje hakkında meta verileri içerir, örneğin ismi, sürümü, bağımlılıkları ve betikleri.
- `package-lock.json`: npm tarafından otomatik olarak oluşturulur ve bağımlılıkların ve sürümlerinin kilitlemesini tutar.
- `node_modules`: Projenin tüm bağımlılıklarını ve alt bağımlılıklarını içerir.

## Kurulum

1. Depoyu klonlayın veya indirin.
2. Bir terminal açın ve proje dizinine gidin.
3. `npm install` komutunu çalıştırarak gerekli bağımlılıkları yükleyin.

## Yapılandırma

1. Proje dizininde `config.json` adındaki dosyayı doldurun.

```json
{
  "SUNUCU_ID": "sunucu_id",
  "SES_KANAL_ID": "ses_kanal_id",
  "TOKEN": "bot_tokeniniz"
}
