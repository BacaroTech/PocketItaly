# PocketItaly

## Descrizione Progetto
Pocket Italy nasce con l’obbiettivo di tutelare il mercato della moda Made in Italy in Italia e all’estero, andando a fornire degli strumenti utili per tutti gli attori che sono coinvolti nel mondo della contraffazione: Utente finale, rivenditore e/o produttore e la Zecca dello Stato.

L'utente attraverso la nostra applicazione scaricata sul suo smartphone, è in grado di identificare se un articolo è certificato Made in Italy o meno, attraverso un processo di scansione fisica o digitale dell’articolo. Inoltre l'utente può inviare una segnalazione alla Zecca dello Stato per eventuali acquisti effettuati prima di usare l’applicazione.

Il prodotto acquistato dall’utente finale non è solo fisico ma anche digitale. Infatti il produttore è autorizzato a creare un token che certifichi in modo univoco l’articolo creato e permetta di visualizzare lo storico della proprietà del bene. Questo meccanismo permette di tutelare tutti i mercati. (B2B, B2C e C2C).

Ogni volta che un utente genera report(passivo) o invia una segnalazione(attivo) va a confluire all’interno di un portale messo a disposizione alla Zecca dello Stato, in modo tale da monitorare le possibili contraffazioni e in tal caso intervenire in maniera diretta per vie legali. 

Infine, l’applicazione prevede una parte di istruzione dove l’utente può informarsi sulle ultime notizie sul tema della contraffazione e apprendere delle nozioni riguardo tale argomento, oltre alla possibibilità di riscattare dei codici sconto da usare nei negozi affliati dopo N scansioni, dove N è incognito agli utenti

## Figma app mobile 
https://www.figma.com/file/5zGqQkbv1qP0dlcD99nf6j/Pocket-Italy-App?type=design&t=XzP8tLn4shKsSsmi-6

## Figma portale web
https://www.figma.com/file/RDT5TnesSqZ2rihng3ypCT/Pocket-Italy-Portal?type=design&t=XzP8tLn4shKsSsmi-6

## Sorgenti Backend
https://github.com/BacaroTech/PocketItaly-Server

## Demo Portale
https://pocket-italy.github.io/home-login

abbiamo creato una demo per visualizzare cosa può vedere i tre tipi di utenti

Utenti:
- zecca
- produttore
- venditore

Tutti i dati sono moccati in assets file.
Per simulare la login è sufficiente inserire nel campo della email un dei seguenti campi e cliccare su login

### utente: zecca

<img src="image.png" alt="image" width="300" height="auto">
<img src="image-1.png" alt="image" width="300" height="auto">

### utente: produttore

<img src="image-2.png" alt="image" width="300" height="auto">
<img src="image-3.png" alt="image" width="300" height="auto">

### utente: venditore

<img src="image-4.png" alt="image" width="300" height="auto">
<img src="image-5.png" alt="image" width="300" height="auto">


# Sorgenti
Di seguito come installare e avviare i tre sorgenti

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



## Portale
Il portale è un applicativo angular

```
cd pocket-portal
```

Da fare solo una volta

```
npm install
```

Avvio in locale

```
npm start
```