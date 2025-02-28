+++
type = "news"
title = "MediathekView 14.2 released"
author = "Alexander Finkhäuser"
date = "2025-02-28"
keywords = ["mediathekview", "release", "14.2"] # HTML Schlüsselwörter
tags = ["Allgemein"]
+++

[MediathekView 14.2](https://mediathekview.de/download/) ist da und bringt einige [Neuerungen](https://mediathekview.de/changelog/14-2-0/) mit sich.

# **Neues Update für MediathekView bringt Dark-Mode-Verbesserungen, schnellere Suche und neue Sender**

Die neueste Version von MediathekView bringt zahlreiche Verbesserungen mit sich – darunter eine optimierte Suche, Dark-Mode-Unterstützung in weiteren Dialogen und neue Sender.

## **🔎 Beschleunigte Suche für ein schnelleres Nutzererlebnis**
Die moderne Suche profitiert nun von **Geschwindigkeitsoptimierungen**. Durch Aktivierung des **Lucene Native Access** kann die Verarbeitung beschleunigt werden – hierfür sind allerdings spezielle Startparameter (`--enable-native-access=ALL-UNNAMED --add-modules jdk.incubator.vector`) notwendig, die bei den von uns bereitgestellten Paketen bereits gesetzt sind.

## **🌑 Verbesserte Dark-Mode-Unterstützung**
Der Dark-Mode wurde in mehreren Bereichen verbessert:

- ✔ Der **Einstellungen-Dialog** ist jetzt vollständig Dark-Mode-kompatibel.  
- ✔ Der **Filter-Dialog** unterstützt nun Dark-Mode.  
- ✔ Textfelder in verschiedenen Dialogen, darunter "Film speichern" und "Neues Abo anlegen", sind nun korrekt eingefärbt.  
- ✔ Darstellungsfehler beim Wechsel zwischen Light- und Dark-Mode unter macOS wurden behoben.  

![Dark Mode](/images/news/mediathekview-14_2-darkmode.jpg)
<small>Dark Mode unter Mac</small>

![Light Mode](/images/news/mediathekview-14_2-lightmode.jpg)
<small>Light Mode unter Mac</small>


## **📺 Mehr Sender in MediathekView**
Mit diesem Update wurden die Sender **ONE, ARD-alpha und tagesschau24** hinzugefügt. Nutzer müssen diese nach dem Update in den **Einstellungen** manuell aktivieren.

## **🆕 Weitere Neuerungen und Fixes**
- ✔ **Duplikate in der Filmliste** werden nun erkannt und farblich hervorgehoben.
- ✔ **Verbesserte Merkliste**: Mehrfachauswahl wird jetzt unterstützt, und eine neue Toolbar im Tab "Filme" erleichtert die Steuerung.
- ✔ **Untertitel einfacher verwalten**: Untertiteldateien können nun direkt mit der korrekten Sprachzuordnung einem Video hinzugefügt werden.
- ✔ **Neue Funktionen für die Duplikaterkennung**: Duplikate lassen sich nun per Filter ausblenden oder über eine neue Übersicht pro Sender anzeigen.

![Light Mode Windows 11](/images/news/mediathekview-14_2-lightmode-win11.jpg)
<small>Light Mode unter Windows 11</small>

![Light Mode Linux (kubuntu)](/images/news/mediathekview-14_2-lightmode-lin.png)
<small>Light Mode unter Linux (kubuntu)</small>