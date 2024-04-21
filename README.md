# PocketItaly

## Mobile
```
cd PocketMobile
```
Da fare solo una volta comune
```
npm install
```
### Android
Da fare solo una volta
creare il file local.properties al seguente path:

```
PocketMobile/android/local.properties
```
con il seguente parametro

```
sdk.dir=PATH_ANDROID_SDK
## Esempio
sdk.dir=C\:\\Users\\username\\AppData\\Local\\Android\\Sdk
```

Avvio
```
npm run android
```
Se si ha uno smartphone collegato

### IOS

Da fare solo una volta
```
cd ios
pod install
```
Avvio con il simulatore 
```
npm run ios -- --simulator="iPhone 15"
```

### Requisiti Per Android
- Android SDK
- ADB

<b>Android SDK</b>

Per installare SDK Tools di android ci sono due strade:
1) Installare android studio
- scaricare android studio: https://developer.android.com/studio
- installare l'IDE
- cercare l'SDK dell'IDE al path C\:\\Users\\username\\AppData\\Local\\Android\\Sdk

2) Installare SDK
- scaricare https://developer.android.com/tools
- impostare le variabili

<b>ADB Android Debug Bridge</b>

https://developer.android.com/tools/adb



### Requisiti Per IOS
- xcode
- RubyGem
- Cocoapods

<b>Installare X Code</b>
https://apps.apple.com/it/app/xcode/id497799835?mt=12

<b>Installare RubyGem</b>

Documentazione https://guides.rubygems.org/rubygems-basics/

Passaggi
```
brew install ruby
echo ‘export PATH=”/usr/local/opt/ruby/bin:$PATH”‘ ＞＞ ~/.bash_profile
```

<b>Cocoapods</b>

Documentazione https://cocoapods.org/

Passaggi
```
sudo gem install cocoapods
```

