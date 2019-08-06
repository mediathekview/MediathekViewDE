+++
description = ""
date = "2017-01-17T17:00:00+01:00"
title = "FAQ"
toc = true
[menu]
    [menu.main]
        name = "FAQ"
        parent = "hilfe"
        weight = 4
+++

# Wenn nichts geht

Wenn das Herunterladen oder das Abspielen nicht funktioniert, besteht die einfachste Möglichkeit darin, es mit komplett neuen Einstellungen nochmals zu versuchen und dann wenn's klappt, diese – falls notwendig – Stück für Stück anzupassen:

![Einstellungen zurücksetzen](/images/faq/MV_Einstellungen_zuruecksetzen.png)

## Einstellungen zum Abspielen/Speichern zurücksetzen

1. Zuerst sollte kontrolliert werden, ob die aktuellste Version von VLC installiert ist:

2. Nun die Einstellungen zurücksetzen (Menü "Hilfe -> Hilfe und Fragen zum Programm -> Einstellungen zum Abspielen/Speichern zurücksetzen!") und im erscheinenden Dialogfeld OK drücken.
 - Achtung: Es gehen auch eigen erstellte Sets/Buttons verloren (will man das vermeiden, setzt man keine Einstellungen auf diesem Wege zurück, sondern importiert die Standardsets via "Einstellungen -> Set importieren -> Tab 'Standardset' -> Set anlegen" und löscht anschliessend die alten Standardsets).
3. Falls das Problem behoben ist, können nun gewisse Einstellungen via "Datei -> Einstellungen" (OS X: "MediathekView -> Einstellungen…") geändert werden, z.B. in welchem Verzeichnis die Sendungen gespeichert werden sollen. Falls das Problem weiterhin besteht, kann gemäss folgendem Abschnitt vorgegangen werden:

## Alle Einstellungen zurücksetzen

1. Menü "Hilfe -> Hilfe und Fragen zum Programm -> Alle Einstellungen zurücksetzen!"
2. Dadurch wird der Ordner mit allen Einstellungen (".mediathek3" im Benutzerverzeichnis) umbenannt und das Programm beendet. Dieser Ordner ist unter OS X im Finder unsichtbar.
3. Dann das Programm erneut starten. Es sollte der Einrichtungsdialog erscheinen. Hier mit den Standardeinstellungen beginnen. Anschliessend sollte automatisch die Filmliste geladen werden.
4. Wenn es so weit geklappt hat, können nun alle Filme abgespielt und aufgezeichnet werden.
5. Bei Bedarf können nun gewisse Einstellungen via "Datei -> Einstellungen" (OS X: "MediathekView -> Einstellungen…") geändert werden, z.B. in welchem Verzeichnis die Sendungen gespeichert werden sollen.
6. Optional: Erfahrene User können aus dem umbenannten Einstellungsordner (z.B. ".mediathek3--2015.02.11__21.12.42") einige mit viel Zeitaufwand vorgenommene Einstellungen retten.

# Wo werden meine Sendungen gespeichert und wie ich kann das Download-Verzeichnis ändern?

Standardmässig wird der Ordner MediathekView im User-Verzeichnis (Home-Verzeichnis) als Download-Ort von MediathekView-Sendungen verwendet. Unter OS X ist dies der Ordner "Downloads". Das Download-Verzeichnis kann jedoch angepasst werden:

1. Die Einstellungen öffnen: "Datei -> Einstellungen" (OS X: "MediathekView -> Einstellungen…").
2. Nun den Reiter "Aufzeichnen und Abspielen -> Set bearbeiten" selektieren.
3. Im Programmset "Speichern" (z.B. "Windows speichern" bzw. "Mac Speichern") kann nun über den "Zielpfad" das Standard-Download-Verzeichnis von MediathekView angepasst werden:

![Zielpfad ändern](/images/faq/MV_Zielpfad-aendern.png)

# MediathekView startet nicht

- ZIP-Datei nicht entpackt (Windows): Die Programmdatei wurde direkt im ZIP-Archiv doppelgeklickt. Die ZIP-Datei muss erst [entpackt](/anleitung/#windows) werden, dazu sind alle Dateien aus dem ZIP-Archiv in ein beliebiges Verzeichnis zu kopieren. Dort kann dann die Programmdatei "MediathekView.exe" doppelgeklickt werden.e no sidebar

- Zu wenig Arbeitsspeicher oder unbekanntes Problem (Windows): Einige User konnten MediatheView durch einen Doppelklick auf "MediathekView.jar" statt auf "MediathekView.exe" starten.
- Kein Programm dem Dateityp ".jar" zugeordnet (Windows): Falls "MediathekView.jar" beim Doppelklicken nicht direkt von Java ausgeführt wird, dann hat ein Packprogramm (z.B. WinZip) sich den Dateityp ".jar" zugeordnet. Abhilfe:Bei gedrückter Shift-Taste mit der rechten Maustaste auf das JAR-File klicken und in dem Menü dann den Punkt "Öffnen mit" auswählen. Dort "Java(TM) Plattform SE binary" auswählen oder unter "Sonstiges" danach suchen. Wenn dann die Box unten angeklickt wird, wird der Filetyp "jar" wieder mit Java verbunden und Java-Programme starten wieder mit einem Doppelklick. Üblicherweise wird MediathekView über einen Doppelklick auf die Programmdatei "MediathekView.exe" gestartet.
- Benötigte Dateien wurden aus dem Programm-Ordner gelöscht (Windows) Die benötigten Java-Bibliotheken (libs) oder die Hilfsprogramm (im Ordner "bin") fehlen, da Dateien aus dem MediathekView-Programmordner gelöscht oder verschoben wurden, zur [Neuinstallation](/anleitung/#windows).
- Java ist nicht oder nicht in der richtigen Version installiert: MediathekView benötigt [Java 8](/anleitung/#systemvoraussetzungen) oder neuer. Falls trotz Installation von Java 8 (oder neuer) MediathekView nicht startet, ist das Programm nicht mit der richtigen Java-Version verknüpft. Wer nicht bewusst mehrere Java-Versionen auf seinem System haben will, sollte zuerst die alte Version (z.B. Java 7) deinstallieren und dann die neue Version (z.B. Java 8) installieren. Wer mehrere Java-Versionen (z.B. JDKs) nebeneinander installiert haben muss, kann gemäss dem nächsten Kapitel verfahren.

# Mit der richtigen Java-Version verknüpfen

## Windows:
Das ohne Installation auskommende Programm [Path Editor](http://patheditor2.codeplex.com/) erlaubt auf einfache Weise, Java-Programme (wie MediathekView) systemweit mit einer anderen Java-Version zu verknüpfen. Einfach auf "Add" klicken und den Java-Pfad (z.B.: _"C:\Program Files\Java\jre8\bin"_ oder _"C:\Program Files\Java\jdk1.8.0_5\bin"_) eintragen und speichern. Evtl. ist ein Abmelden und Neuanmelden am System nötig. Welche Versionen (JRE, JDK) installiert sind, zeigt ein Blick ins Verzeichnis _"C:\Program Files\Java"_.

![Patheditor-Settings](/images/faq/patheditor_settings.jpg)

Alternativ kann in der Windows-Systemsteuerung die PATH-Variable von Java angepasst werden: `Systemsteuerung -> System und Sicherheit -> System -> Erweiterte Systemeigenschaften -> Umgebungsvariablen -> PATH`
Dann "Bearbeiten" wählen und hinter den letzten Eintrag ein ";" und ohne folgenden Leerzeichen den Java-Pfad setzen, z.B.:
```
;C:\Program Files\Java\jre8\bin
```

![Windows_Java-Path](/images/faq/Windows_Java-Path.png)

Mehr Info zur [Java-PATH-Variablen](http://docs.oracle.com/javase/tutorial/essential/environment/paths.html)

## Linux:
Folgender Befehl erlaubt einen Wechsel zwischen verschiedenen Java-Versionen (JDKs):
```
sudo update-alternatives --config java
```

## Mac:
Startet bei Mac-Usern, die mit einer Nicht-App-Version (z.B. Entwicklerversion) von MediathekView arbeiten, MediathekView trotz Installation von Java 8 (JRE 8) nicht, dann zeigt der Pfad von Java noch auf Java 6. Abhilfe schafft die Installation des [Java Development Kits (JDK 8)](http://www.oracle.com/technetwork/java/javase/downloads/index.html). Das Tool [Java Version Changer](http://www.guigarage.com/2013/02/change-java-version-on-mac-os) erlaubt auf einfache Weise einen Wechsel zwischen verschiedenen Java-Verison (JDKs). Wer das JDK nicht installieren möchte, bekommt MediathekView auch nur mit der JRE zum Laufen, indem der Pfad zum Java-Binary explizit angegeben wird (Achtung: nichts für unerfahrene Benutzer!). Dazu kann man in der Startdatei "MediathekView_Mac_Start.command" mit einer zusätzlichen Zeile die Variable JAVA_HOME auf "/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home" setzen:
```
\#!/bin/sh
dir=`dirname "$0"`
cd "$dir"
JAVA_HOME="/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home"
if [ -n "$JAVA_HOME" ]; then
        "$JAVA_HOME"/bin/java -Xdock:name="MediathekView" -Xms128M -Xmx1G -jar ./MediathekView.jar $*
else
    java -Xdock:name="MediathekView" -Xms128M -Xmx1G -jar ./MediathekView.jar
fi
cd $OLDPWD
```


# Filmliste wird nicht vollständig geladen

Eine Lösung besteht im Löschen der Filmliste, d.h. der Datei **filme.json**. Diese befindet sich bei Windows und Linux im Home-Verzeichnis und zwar im Ordner `.mediathek3`.
Unter OS X ist diese Datei unsichtbar und an einem anderen Ort; sie kann jedoch durch Eingabe (Kopieren) des folgenden Befehls im Programm Terminal (Programme/Dienstprogramme/Terminal) und Bestätigung mit der Eingabe-Taste gelöscht werden:
```
rm ~/Library/Caches/MediathekView/filme.json
```

# Das Laden der Filmliste hat nicht geklappt

Eventuell wird der verwendete Network-Stack (IPv4 vs. IPv6) von Java nicht richtig erkannt, wodurch keine Verbindung zum Internet möglich ist. In diesem Fall können Windows-User versuchen, mit einem Doppelklick auf die Datei "MediathekView-ipv4.exe" das Programm zu starten. Diese alternative Startdatei befindet sich im gleichen Ordner wie "MediathekView.exe" und kann bei Bedarf auch umbenannt werden.
Für OS X und Linux kann man das Programm mit folgendem Aufruf starten und bestimmte Einstellungen der Java VM erzwingen:
```
java -Djava.net.preferIPv4Stack=true -jar MediathekView.jar
java -Djava.net.preferIPv6Addresses=true -jar MediathekView.jar
```

Es kann auch versucht werden, über den Button "neue Filmliste laden" im Programmfenster bzw. über ein Umschalten auf "nur manuelles Laden" der Filmliste via Einstellungen zum Ziel zu kommen (evtl. hilft es auch, davor die Filmliste manuell gemäss dem Kapitel zuvor zu löschen):

![MV_Einstellungen_Filmliste](/images/faq/MV_Einstellungen_Filmliste.jpg)

Häufig ist dieses Problem allerdings auf eine Security-Suite bzw. eine Personal Firewall oder ein Antivirenprogramm zurückzuführen. Bei Avira Antivirus soll die Deaktivierung der Option "IPv6 Untersstützung einschalten", welche man in den Einstellungen unter Internetschutz+Suche findet, helfen. Eine temporäre Deaktivierung der Firewall (ZoneAlarm, Comodo) zeigt, ob die Firewall verantwortlich ist. Einigen Usern hat es geholfen, die AV-Software (z.B. Kaspersky Anti-Virus) komplett zu beenden (nicht bloss den Schutz ausschalten) oder die Firewall zu deaktivieren, dann die Filmliste zu laden und anschliessend die AV-Software wieder zu starten bzw. die Firewall wieder zu aktivieren.

Unter Windows kann als ultima ratio versucht werden, das Programm "MediathekView.exe" über das Kontextmenü (Rechtsklick) als Administrator auszuführen.
Die besagte Meldung erscheint auch, wenn die Internetverbindung nicht aktiv ist.

# Ein Hilfsprogramm (z.B. VLC) startet nicht

In den Programmeinstellungen (Menü: "Datei -> Einstellungen" bzw. unter OS X "MediathekView -> Einstellungen…") können unter "Aufzeichnen und Abspielen -> Set bearbeiten" unter "Programme" die Pfade der Programme (z.B. VLC) angepasst/korrigiert werden. Der Pfad muss auf die ausführbare Datei zeigen (z.B. "vlc.exe"), nicht auf ein übergeordnetes Verzeichnis (z.B."Videolan"). Es wird empfohlen, die aktuelle Version von [VLC](http://www.videolan.org/) zu verwenden.
Evtl. steckt hinter diesem Problem auch ein Blockieren durch ein Security-Programm.

# fd://0 bei VLC

Ein Klick auf den grünen Play-Button sollte zur Folge haben, dass die ausgewählte Sendung mit dem VLC Media Player abgespielt wird. Bei gewissen Versionen von VLC erscheint jedoch stattdessen der Eintrag fd://0 in der Playlist von VLC. Ein Update auf die [neuste Version von VLC](http://www.videolan.org/) sollte Abhilfe schaffen. Ansonsten hilft ein Doppelklick auf den Eintrag "fd://0", wodurch üblicherweise das Abspielen der Sendung erfolgt.

Unter Snow Leopard (Mac OS X 10.6) muss [VLC 2.0.4 (Intel 32bit)](http://sourceforge.net/projects/vlc/files/2.0.4/macosx/vlc-2.0.4-intel32.dmg/download) installiert werden (Stand: Januar 2013). Die Version 2.0.5 funktioniert im Zusammenspiel mit MediathekView nicht, auch die 64bit-Version von 2.0.4 funktioniert nicht.

Um das "fd://0"-Problem bzw. einen zusätzlichen Doppelklick zu vermeiden, können Mac-User auch ein Set importieren, welches MPlayerX anstelle von VLC verwendet.

# Downloadfehler "403 Forbidden"

Dieser Fehler erscheint u.a. beim Versuch, vom Ausland her Sendungen herunterzuladen, die z.B. nur innerhalb Deutschlands angesehen werden können. Solche Sendungen erkennt man oft auch an der Zeichenfolge wie "geo", "/de/" oder "dach" in der URL. Der Zugang zu solchen Sendungen wird – meist aus rechtlichen Gründen – mit Hilfe der IP-Adresse national oder auf gewisse Länder (DACH = DE-AT-CH) begrenzt (so genanntes Geoblocking).

![Downloadfehler_403_forbidden_wegen_Geoblocking](/images/faq/MV_DL-Fehler_403_Geo.png)

Man kann zusätzlich überprüfen, ob Geoblocking vorliegt, indem man die problematische Sendung auf der Website des Senders abzuspielen versucht (zu diesem Zweck auf den Link "zur Website" ganz unten im Filme-Fenster von MediathekView klicken). Oft erscheint dann auf der Webseite zur Sendung explizit der Hinweis, warum sich das Video nicht abspielen lässt.
MediathekView kennt gewisse Muster für geogeblockte Sendungen und markiert diese [gelb in der Filmliste](/anleitung/#filme) und mit einem Eintrag in der Spalte "Geo". Das Land, von welchem man versucht ein Video aufzurufen, kann in den Programmeinstellungen (Menü: "Datei -> Einstellungen" bzw. unter OS X "MediathekView -> Einstellungen…") und dann "Geo" festgelegt werden. Diese Einstellung dient nur Anzeige von geogeblockten Sendungen, man kann damit Geoblocking nicht umgehen.

# Alle Downloads fehlerhaft

Dies weist auf [fehlerhafte Sets](#wenn-nichts-geht) oder eine Security-Suite hin. Comodo zum Beispiel verwendet ein Sandboxing, welches das Herunterladen und Abspielen von Sendungen durch MediathekView oder dessen Hilfsprogrammen (flvstreamer, FFmpeg, VLC) verhindern kann. Die folgende Abbildung zeigt am Beispiel Comodo, wie man eine Ausnahme für MediathekView festlegen kann (analog für VLC vorzunehmen):

![Comodo-Sandboxing](/images/faq/MV_Comodo-Sandboxing.jpg)

# Sendungen mit HTTPS URLs können nicht heruntergeladen werden

Wenn Sendungen deren Download URL mit HTTPS beginnt nicht heruntergeladen werden können kann das am SSL liegen.

## Problem erkennen
Zuerst ist hier zu Prüfen ob tatsächlich das HTTPS das Problem ist hierzu kann man MediathekView in der Konsole mit `java -Xmx1G -jar MediathekView.jar` starten. Wenn in der Konsole der folgende Fehler auftritt liegt es am SSL:
```
javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException:
PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderExce
ption: unable to find valid certification path to requested target
        at sun.security.ssl.Alerts.getSSLException(Unknown Source)
        at sun.security.ssl.SSLSocketImpl.fatal(Unknown Source)
        at sun.security.ssl.Handshaker.fatalSE(Unknown Source)
        at sun.security.ssl.Handshaker.fatalSE(Unknown Source)
        at sun.security.ssl.ClientHandshaker.serverCertificate(Unknown Source)
        at sun.security.ssl.ClientHandshaker.processMessage(Unknown Source)
        at sun.security.ssl.Handshaker.processLoop(Unknown Source)
        at sun.security.ssl.Handshaker.process_record(Unknown Source)
        at sun.security.ssl.SSLSocketImpl.readRecord(Unknown Source)
        at sun.security.ssl.SSLSocketImpl.performInitialHandshake(Unknown Source
)
```

## Problem beheben

Es kann verschiedene Auslöser für das Problem geben, die häufigsten sind die folgenden:

 1. Veraltete Java Version
   - Einige moderne SSL Varianten werden von älteren Java Versionen nicht unterstützt, es sollte deshalb überprüft werden ob die [aktuellste verfügbare Java JRE](/anleitung/#systemvoraussetzungen) eingesetzt wird.

 2. Virenscanner stört SSL Verbindung
   - Einige aktuelle Virenscanner wie z.B. Kaspersky jubeln dem Benutzer eigene SSL Zertifikarte unter um die Verbindung überwachen zu können. Dieses "Feature" kann u.a. zu Problemen beim Download einer Sendung führen und sollte deshalb deaktivieret werden. Weitere Infos zu dem Thema:
     - https://www.heise.de/security/meldung/Sicherheitsforscher-an-AV-Hersteller-Finger-weg-von-HTTPS-3620159.html
     - https://www.heise.de/security/meldung/Kaspersky-torpediert-SSL-Zertifikatspruefung-3587871.html

# In der Mediathek des Senders XYZ ist die Sendung vorhanden, in der Filmliste jedoch nicht!

Ja, das kann leider vorkommen (z.B. bei älteren Beiträgen). Wenn eine Sendung nur über die Such-Funktion in der Mediathek eines Senders gefunden werden kann, dann wird sie von MediathekView nicht gelistet werden, denn MediathekView sucht nur auf bestimmten Webseiten der Sender (z.B. Sendungen A–Z) und extrahiert die Video-URLs. Zudem können zeitlich nicht beliebig weit zurück Sendungen aufgelistet werden, da bei gewissen Sendern (z.B. beim BR, SWR) das Crawling nach den Video-URLs zu lange dauern würde. D.h., es kann also vorkommen, dass Sendungen im Archiv auf der Website eines Senders gefunden werden, die aber nicht in der Filmliste auftauchen.
Die erste Filmliste wird jeweils um 1:00 Uhr erstellt, ab dann wird die Liste im Rhythmus von 3 Stunden (Vormittag) und ab 14:00 stündlich erweitert und ist somit immer ziemlich aktuell.
Da sich jedoch gewisse Sender (gerade am Wochenende) viel Zeit lassen, bis Sendungen in ihren Mediatheken erscheinen, kann es im Einzelfall durchaus einen Tag dauern, bis eine Sendung in der Filmliste auftaucht.
Falls **aktuelle** Filme fehlen, hinterlasst bitte eine Nachricht im [Forum](https://forum.mediathekview.de/topic/99/fehlende-sendung-melden), beschreibt euer Problem so genau wie möglich und gebt v.a. die URL an, mit welcher die betreffende Sendung auf der Website des Senders gefunden werden kann. Meistens liegt es an den Mediatheken der Sender, welche Sendungen teilweise falsch einsortiert haben oder irgendwo gelistet haben, wo MediathekView nicht sucht.

Es gibt auch mehrere Möglichkeiten, ohne MediathekView an Videos von Sendungen zu kommen.

# Wird das Programm um die Mediathek des Senders XYZ erweitert?

Das hängt vom Aufbau der Mediathek ab, ob sich die URL der Filme auslesen läßt.

- Wird das Programm um die Mediatheken der privaten Sender erweitert? Nein.
- Kann man eigene Sender/Filme in die Liste eintragen? Nein.

# Downloadgeschwindigkeit ist im Keller!

Im einfachsten Fall liegt die Ursache für dieses Problem darin, dass ein Server temporäre Performance-Probleme hat. Dies kann man auch überprüfen, indem man für einen problematischen Download versucht, das Video auf der Website des Senders abzuspielen (zu diesem Zweck auf den Link "zur Website" ganz unten im Filme-Fenster von MediathekView klicken). Lässt sich das besagte Video dort nicht oder nicht flüssig abspielen, dann kann man hoffen, dass am nächsten Tag die Server-Probleme behoben sind.

In einem anderen Fall betrifft dieses Problem möglicherweise einzelne Benutzer, die viele Downloads (mit einer schnellen Leitung) heruntergeladen haben. Als Erklärung ist anzuführen, dass der (von den Sendern nicht vorgesehene) direkte Download durch schnelle Leitungen mehr Bandbreite belegt als das Streaming einer Sendung (also das Abspielen in 1:1-Geschwindigkeit), worauf möglicherweise einige Sender mit Drosselung der Geschwindigkeit reagieren können. Eventuell sind hier auch bei einzelnen Benutzern die Internet-Provider im Spiel, da es bekannt ist, dass diese gewisse Dienste (z.B. Torrent-Downloads) ab einem bestimmten Downloadvolumen und ab einer bestimmten Download-Häufigkeit drosseln können.
Tritt dieses Problem auf, kann es helfen, 1–3 Tage zu warten und es dann erneut versuchen. Eventuell hilft es auch, einmal eine Sendung direkt auf der Website des Senders abspielen zu lassen und dann es in MediathekView nochmals zu versuchen.
Bei wiederholten Problemen, ist es einen Versuch wert, die Downloadgeschwindigkeit zu begrenzen (Einstellungen -> Download): Eine selbst auferlegte Begrenzung z.B. auf 500 kByte/s würde also potenziell verhindern, dass von anderswo stärker gedrosselt wird (z.B. auf unter 100 kByte/s).

![Einstellungen_Download](/images/faq/MV_Einstellungen_Download.jpg)

# Kann man die Downloadbandbreite begrenzen?

Bis auf Sendungen des SRF und ältere WDR-Rockpalast-Sendungen lässt die Downloadgeschwindigkeit über die "Einstellungen –> Allgemein" begrenzen (vgl. Screenshot im vorigen Kapitel).
Unter Linux kann für alle anderen Fälle, wo keine Direkt-Downloads erfolgen, sondern die Hilfsprogramme FFmpeg (Avconv) oder Flvstreamer zum Einsatz kommen, das Programm trickle verwendet werden. Der Aufruf des Flvstreamers könnte so angegeben werden:
```
trickle -d 400 /usr/bin/flvstreamer
```
(Downloadrate limitieren auf 400 KByte/s)

# Wie kann man bei Abos die HD-Auflösung wählen?

Eine Möglichkeit ist die Änderung der Grundeinstellung des Sets "Speichern" auf "Filme in HD laden". Diese Einstellung gilt natürlich dann auch für alle manuell gestartete Downloads. Zu dieser Einstellung kommt man via "Datei -> Einstellungen" (OS X: "MediathekView -> Einstellungen…"):

![MV-Einstellungen HD](/images/faq/MV_Einstellungen_HD.jpg)

Will man flexibler sein, d.h. für einige Abos die HD-Auflösung wählen, für andere die "hohe Auflösung", dann dupliziert man das Standardset "Speichern", ändert den Namen auf "Speichern HD" und wählt dort "Filme in HD laden". Bei den Abos kann dann angegeben werden, welches Set verwendet werden soll.

Auf analoge Art kann man für Abos "Filme in niedriger Auflösung" erzwingen.

# Trotz laufender Downloads wird der Ruhezustand aktiviert

Wenn keine Tastaturangaben oder Mausbewegungen erfolgen, geht der Computer abhängig von den Systemeinstellungen früher oder später in den Ruhezustand, auch wenn in MediathekView der Download von Sendungen noch nicht abgeschlossen ist. Eine Möglichkeit dies zu verhindern, besteht natürlich darin, den Ruhezustand in den Energiespareinstellungen des Systems zu verhindern. Blöderweise muss man dann auch wieder daran denken, die Einstellungen rückgängig zu machen. Komfortabler ist der Gebrauch von externen Tools, die verhindern, dass der Computer in den Ruhezustand geht: [Don't Sleep](http://www.softwareok.de/?Microsoft/DontSleep) (Windows), [Caffeine](http://lightheadsw.com/caffeine) (OS X). "Don't Sleep" verfügt zusätzlich über einen Timer, der es erlaubt, zeitgesteuert die Blockierung aufzuheben, oder wahlweise den Rechner zu einer bestimmten Zeit herunterzufahren. Wer kein zusätzliches Programm installieren will, kann einfach einen Musik-Track bei ausgeschaltetem Ton in Endlosschleife abspielen lassen, auch dies verhindert die Aktivierung des Ruhezustands.

# Kann man MediathekView von einem USB-Stick starten (MediathekView Portable)?

Ja, im Ordner "Portable" des MediathekView-Programmordners befinden sich entsprechende Startdateien (z.B. "MediathekView_Portable.exe" für Windows). Mehr Information findet sich in der [Anleitung](/anleitung/#starten-im-portablen-modus-mediathekview-portable).
Für OS X ist für den portablen Gebrauch die Nicht-App-Version (also die ZIP-Version) [herunterzuladen](/download/).

# FLV-Videos ohne Recodierung ins MP4-Format umwandeln

FLV-Dateien – als Produkt eines Downloads einer Sendung – sollten nur noch in den seltensten Fällen auftreten. Falls dieses Medienformat doch auftritt, kann selbes auf allen Plattformen ohne Qualitätsverlust, aber trotzdem schnell mit [FFmpeg](http://ffmpeg.org/) umgewandelt werden:

- Linux: mit dem auf FFmpeg basierenden [WinFF](http://winff.org/html_new/downloads.html) oder auf der Kommandozeile:
```
ffmpeg -i input-video.flv -vcodec copy -acodec copy output-video.mp4
```
- OS X: Zuerst ist die aktuellste [FFmpeg-Version](http://www.osxexperts.net/ffmpeg/ffmpegexperts.html), dann das entzippte, auf FFmpeg basierende Droplet flv2mp4 in den Programme-Ordner zu kopieren. Durch Drag-and-drop von FLV-Dateien auf das Icon von "flv2mp4" lassen sich MP4-Dateien erzeugen. Das Droplet flv2mp4 stammt von dieser [Website](http://appdrive.net/mediathek/flv2mp4/flv2mp4.html), welche nicht mehr in Betrieb ist.

Aufgezeichnete Sendungen lassen sich mit WinFF oder Avidemux auch in andere Formate konvertieren. Mit [Avidemux](http://avidemux.berlios.de/) lassen sich die Filme auch schneiden.

## Direkt aus MediathekView heraus MP4-Dateien erzeugen (Windows)

Es gibt für Windows auch eine Lösung, mit der direkt aus MediathekView heraus MP4-Dateien erzeugt werden. Das entsprechende Set kann man importieren:
Datei -> Einstellungen -> Aufzeichnen und Abspielen -> Set importieren -> Setvorlagen
dort das "Betriebssystem" wählen und auf den Button "Vorlage von der Website laden" drücken; nun kann das Set "Set zum direkten Speichern von Flash-Videos im MPEG-4-Format" importiert werden. Dadurch werden die zwei Hilfsprogramme (ffmpeg.exe, FLV-to-MP4.exe) in den bin-Ordner von MediathekView gelegt. Die neue Funktion kann über den Button "Speichern FLV->MP4" benutzt werden (Ansicht -> Buttons anzeigen).

# TS-Videos ohne Recodierung ins MP4-Format umwandeln

TS-Dateien – als Produkt eines Downloads einer Sendung – sollten nur noch in den seltensten Fällen auftreten. Falls dieses Medienformat doch auftritt, kann selbes auf allen Plattformen ohne Qualitätsverlust, aber trotzdem schnell mit [FFmpeg](http://ffmpeg.org/) bzw. mit [FFmpeg für OS X](http://www.osxexperts.net/ffmpeg/ffmpegexperts.html) auf der Kommandozeile umgewandelt werden:
```
ffmpeg -i input-video.ts -vcodec copy -acodec copy -absf aac_adtstoasc output-video.mp4
```

## Direkt aus MediathekView heraus MP4-Dateien erzeugen (Windows)

Es gibt für Windows auch eine Lösung, mit der direkt aus MediathekView heraus ohne Qualitätsverlust MP4-Dateien erzeugt werden. Das entsprechende Set kann man importieren:
Datei -> Einstellungen -> Aufzeichnen und Abspielen -> Set importieren -> Setvorlagen
dort das "Betriebssystem" wählen und auf den Button "Vorlage von der Website laden" drücken; nun kann das Set "Windows: Direktes Speichern von MPEG-2-ts Videos im MPEG-4-Format" importiert werden. Die neue Funktion kann über den Button "Speichern TS->MP4" benutzt werden (Ansicht -> Buttons anzeigen).

# Desktop API is not supported on the current platform

Diese Meldung kann bei der Verwendung von MediathekView 3.2.1 unter gewissen Linux-Desktop-Umgebungen (z.B. KDE) auftreten, wenn eine Funktion (Browser-Start) unter der betreffenden Desktop-Umgebung nicht unterstützt wird.
Die [aktuelle Version](/download/) von MediathekView schafft Abhilfe.

# Performance-Probleme unter Linux (ARM)

Auf ARM-Prozessoren können allenfalls Performance-Probleme auftreten (träge GUI, langsamer Download von Sendungen bei einer CPU-Last von 100%). Abhilfe bringt [JDK 8 für ARM-Systeme](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-arm-downloads-2187472.html) von Oracle.

# Verwendung der Filmliste in einem eigenen Projekt?

Wenn es ein privates Projekt ist, also nicht im Internet angeboten wird, gerne. Im anderen Fall, wäre eine konkrete Anfrage hilfreich.
