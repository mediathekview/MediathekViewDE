+++
type = "news"
title = "MediathekView 13.5.0 released"
author = "Nicklas Wiegandt"
date = "2019-09-16"
keywords = ["mediathekview", "release", "13.5.0", "13.5"] # HTML Schlüsselwörter
tags = ["Allgemein"]
+++

**[MediathekView 13.5.0](https://mediathekview.de/download/)** ist da und bringt neben neuer Pakete und Installer noch weitere 
[Neuerungen](https://mediathekview.de/changelog/13-5-0/) mit sich.
![Der neue Windows Installer](/images/news/mediathekview-13_5-win-installer.png)
<em>Der neue Installer für Windows.</em>

Lange bestand die Installation von MediathekView ausschließlich darin, mit Ausnahme der Mac Version, das Paket für das jeweilige Betriebssystem herunter zu laden und zu entpacken.
Dies ändert sich nun. Es ist zwar nach wie vor möglich, einfach MediathekView als Zip (Windows) oder tar.gz (Linux) herunter zu laden und zu entpacken aber es gibt nun neue Möglichkeiten und auch an den beiden Archiven hat sich etwas getan.
Oracle hat sein Lizenzmodell geändert und so ist ab Version 9 die Java SE Desktop JRE die bisher zum betrieb von MediathekView verwendet wurde nur noch für kommerzielle Kunden erhältlich. Für MediathekView 13.3.0 mussten die Nutzer von MediathekView sich umständlich selber eine OpenJDK 11 installieren. Für einige Anwender gestaltete sich dies als zu umständlich.
Deshalb bringen nun **alle** Pakete OpenJDK 11 von [AdoptOpenJDK](https://adoptopenjdk.net) direkt mit. Zusätzlich haben wir noch Installer erstellt mit denen es erstmals möglich ist, MediathekView im klassichen Sinne zu installieren.

Folgende Pakete gibt es nun:

* Zip (Windows ohne Installation)
* tar.gz (Linux ohne Installation)
* Deb (Linux Debian)
* RPM (Linux Red Hat)
* Exe (Windows)
* Dmg (Mac OS)
* AppImage (Linux ohne Installation, kein Entpacken)

Bei der Installation werden im Applikations Menü Einträge für MediathekView angelegt und auch ein Deinstaller hinterlegt.
Der standard Installationspfad unter Linux ist `/opt/mediathekview`.

Desweiteren haben wir unseren Code und die Startzeit von MediathekView (weiter) optimiert und einige Bugs behoben. Detailiertere Informationen hierzu finden sich im [Changelog](https://mediathekview.de/changelog/13-5-0/).

Wie bestimmt aufgefallen ist wurde die Version 13.4.0 übersprungen. Dies hat den Hintergrund, dass die Vorabversion der Installer als 13.4.0 verteilt wurden. Um Verwirrungen zu vermeiden und damit alle Tester eine Update Benachrichtigung erhalten überspringen wir diese nun und sind somit direkt bei 13.5.0.

Zum erstellen der neuen Pakete (bis auf Dmg) verwenden wir [install4J](https://www.ej-technologies.com/products/install4j/overview.html) dies wird uns dankenswerter Weise von [ej-technologies](https://www.ej-technologies.com/) zur Verfügung gestellt.
Ein weiteres großes Dankeschön an die Community für das Testen der Installer!
