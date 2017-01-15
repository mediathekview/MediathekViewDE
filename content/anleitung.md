+++
description = ""
date = "2017-01-15T15:00:00+01:00"
title = "Anleitung"
[menu]
    [menu.main]
        name = "Anleitung"
        weight = 3
+++

# Anleitung

## Kurzbeschrieb von MediathekView
Das Programm MediathekView (abgekürzt: MV) ist eine Art Suchmaschine für Filme der Mediatheken verschiedener öffentlich-rechtlicher Sender (3sat, ARD, arte.de, arte.fr, BR, hr, KiKA, mdr, NDR, ORF, phönix, rbb, SR, SRF, SWR, WDR, ZDF, ZDFtivi). MediathekView erlaubt es, sowohl Beiträge aus den Mediatheken direkt (mit VLC Media Player oder mit einem Programm eigener Wahl) abzuspielen oder herunterzuladen als auch Sendereihen/Serien zu abonnieren. MediathekView kann nur Sendungen herunterladen, die in den Mediatheken der Sender selbst noch als Videos angeboten werden.

## Installation

### Systemvoraussetzungen
Unterstützt wird Windows (XP, Vista, 7, 8, 10), Linux sowie Mac OS X (ab Version 10.7.3 (1)). MediathekView benötigt unter Windows und Linux eine aktuelle [Java-VM](http://java.com/de/) ab Version: 1.8 (= Java 8). Für Linux-Benutzer wird [OpenJDK8](http://download.java.net/openjdk/jdk8/) empfohlen, außerdem benötigen Linux Benutzer die aktuelle Version von JavaFX (OpenJFX). Mac-OS-X-Benutzer brauchen kein Java zu installieren, da Java in die Applikation MediathekView (ab Version 4) integriert wurde.

(1) Benutzer von OS X 10.6 benötigen Java 6 (von Apple vorinstalliert) sowie die Version 3.3.0 von MediathekView, und zwar die [ZIP-Datei](https://sourceforge.net/projects/zdfmediathk/files/Mediathek/Mediathek%203.3.0/) ohne die Angabe "OSX" im Dateinamen (mehr dazu unter [Anleitung/Mac](#mac)).

### Hilfsprogramme zum Abspielen und Aufzeichnen von Sendungen
Zum Ansehen und Aufzeichnen werden geeignete Zusatzprogramme benötigt. MediathekView ist konfiguriert für die Verwendung von **VLC Media Player** (zum Abspielen und Aufzeichnen von Sendungen) sowie **flvstreamer** und **FFmpeg** zum Aufzeichnen von Sendungen.

Für Windows und OS X ist der flvstreamer und FFmpeg bereits im Programmpaket von MediathekView enthalten (im Ordner "bin"), es muss nur der VLC Media Player installiert sein. Sinnvollerweise wird vor dem ersten Start von MediathekView zuerst der [VLC Media Player](http://www.videolan.org/) installiert.

Für Linux müssen der VLC Media Player, der [flvstreamer](http://savannah.nongnu.org/projects/flvstreamer) und [FFmpeg](http://www.ffmpeg.org/) durch die Paketverwaltung installiert werden. Statt des flvstreamer kann auch [**rtmpdump**](http://rtmpdump.mplayerhq.hu/) verwendet werden, analog kann **avconv** (Bestandteil des [libav](http://libav.org/)-Projekts) statt FFmpeg verwendet werden. Bei OpenSuse müssen zusätzlich zum VLC Media Player auch die **vlc-codecs** installiert werden.

Beim ersten Start von MediathekView werden bereits zwei Programmsets mit den drei Hilfsprogrammen VLC Media Player, flvstreamer und FFmpeg angelegt. Damit können alle Filme angesehen und aufgezeichnet werden.

### Linux

### Mac
Für OS X 10.7.3 (und neuer) gibt es eine separate Applikation "MediathekView.app":

1. die heruntergeladene [DMG-Datei](/download), z.B. "MediathekView-latest.dmg" doppelklicken
2.  Das Programm per Drag-and-drop ins Programme-Verzeichnis (empfohlen) verschieben
3. (optionaler Schritt: Verknüpfung im Dock ablegen) die Applikation "MediathekView.app" ins Dock ziehen. Von dort aus kann MediathekView dann jeweils gestartet werden.
4. die heruntergeladene DMG-Datei kann nach dem Entpacken gelöscht werden

Für Mac-OS-X-10.6-Benutzer sowie für fortgeschrittene Benutzer, die MediathekView auf einem portablen Datenträger (z.B. USB-Stick) verwenden oder mit weiteren Funktionen ausstatten und alle zusätzlichen Hilfsprogramme zum Abspielen, Aufzeichnen, Transcodieren etc. im gleichen Verzeichnis haben wollen:

1. die ZIP-Datei (ohne die Angabe "OSX" im Dateinamen, für Mac-OS-X-10.6-Benutzer zwingend "MediathekView_3.3.0.zip") [herunterladen](https://sourceforge.net/projects/zdfmediathk/files/Mediathek/) und doppelklicken
2. den entpackten Ordner per Drag-and-drop ins Programme-Verzeichnis (empfohlen) oder bei fehlenden Rechten ins Home-Verzeichnis (Haus-Symbol) verschieben
3. (optionaler Schritt: Verknüpfung im Dock ablegen) den eben verschobenen MediathekView-Ordner öffnen, die Datei "MediathekView__Mac_Start.command" ansteuern und ins Dock ziehen. Von dort aus kann MediathekView dann jeweils gestartet werden.
4. die ZIP-Datei kann nach dem Entpacken gelöscht werden

### Windows
MediathekView wird nicht installiert; das Entpacken der [heruntergeladenen ZIP-Datei](/download) ist quasi die Installation:
![MediathekView extrahieren Schritt 1](/images/anleitung/MV_Entzippen_1.jpg)
![MediathekView extrahieren Schritt 2](/images/anleitung/MV_Entzippen_2.png)

1. die heruntergeladene ZIP-Datei in einen Ordner entpacken
2. den entpackten Ordner ins Benutzerverzeichnis verschieben
3. den eben verschobenen MediathekView-Ordner öffnen, die Datei "MediathekView.exe" ansteuern und per Rechtsklick in "Senden an" eine Verknüpfung auf den Desktop legen. Von dort aus kann MediathekView dann jeweils gestartet werden.
4. die ZIP-Datei kann nach dem Entpacken gelöscht werden

### Update
**Windows**: Das Update von MediathekView geschieht dadurch, dass man die heruntergeladene ZIP-Datei der neuen Version in das selbe Verzeichnis entpackt, in dem sich die alte Version befindet. Anschließend kann man von der Startdatei im neuen Programmordner (z.B. "MediathekView_9") eine Desktopverknüpfung erstellen (vgl. Abschnitt oben). Bevor man den alten Programmordner (z.B. "MediathekView_3.3.0") löscht, sollte man allfällige selbst installierte Hilfsprogramme und Skripte transferieren. Die Einstellungen der vorhergehenden Programmversion werden von der neuen Version verwendet; es gibt also keinen neuen Einrichtungsdialog.

**Mac**: Das Update erfolgt dadurch, dass man die neue Version von MediathekView in den Programmordner zieht, wodurch die alte ersetzt wird.

### Deinstallation
Das Programm legt nur den Ordner ".mediathek3" in den "Eigenen Dateien" respektive im Home-Verzeichnis an und speichert darin alle Einstellungen. Es werden keine weiteren Änderungen am System vorgenommen. Wird dieser Einstellungsordner und der Programmordner (z.B. "MediathekView_9" im Falle von Windows bzw. MediathekView.app im Falle von OS X) gelöscht, ist das Programm wieder komplett entfernt.
Unter OS X ist der Ordner ".mediathek3" unsichtbar, er kann jedoch durch Eingabe (Kopieren) des folgenden Befehls im Programm Terminal (Programme/Dienstprogramme/Terminal) gelöscht werden:
```
rm -R ~/.mediathek3
```

## Starten
Für Windows (MediathekView.exe), Linux (MediathekView.sh) sind eigene Startdateien enthalten, mit welchen MediathekView direkt gestartet werden kann. Für OS X 10.7.3 und neuer besteht eine eigenständige Applikation (MediathekView.app); für OS X 10.6 liegt die Startdatei "MediathekView__Mac_Start.command" vor.

Ansonsten kann man die Programmdatei auch so starten:

- Windows: Doppelklick auf "MediathekView-ipv4.exe" oder "MediathekView.jar"
- Linux (in der Konsole): `java -jar MediathekView.jar`
- OS X: Doppelklick auf die separate Startdatei "MediathekView__Mac_Start.command" oder via Terminalbefehl: `java -jar MediathekView.jar` (beide Varianten stehen nur zur Verfügung, wenn man die ZIP-Datei ohne die Angabe "OSX" im Dateinamen heruntergeladen hat)

Startet das Programm nicht, gibt es Hilfe in der [FAQ](/FAQ).

### Starten im portablen Modus (MediathekView Portable)
Für den portablen Einsatz z.B. auf einem USB-Stick stehen im Ordner "Portable" entsprechende Startdateien zur Verfügung (z.B. "MediathekView__Portable.exe" für Windows). Diese Startdateien dürfen nicht aus dem Ordner "Portable" verschoben werden. Beim portablen Start wird der Ordner "Einstellungen" im MediathekView-Programmordner angelegt. Da hinein können, falls gewünscht, die bisherigen Einstellungen, also der Ordner ".mediathek3" aus dem Benutzerverzeichnis kopiert werden.

Unter OS X ist ein portabler Start nur möglich, wenn man die ZIP-Datei ohne die Angabe "OSX" im Dateinamen [heruntergeladen](/download) hat. Detailliertere Information zum portablen Modus von MediathekView kann man der Datei "Portable.txt" im Ordner "Portable" des MediathekView-Programmordners entnehmen. Interessierte können den Code für die Startdateien für OS X und Linux direkt den Startdateien selbst entnehmen. Die portable Startdatei für Windows enthält im Kern folgende Zeilen Code:
```
C:\Windows\SysWOW64\java -jar MediathekView.jar Einstellungen/.mediathek3
```
bzw.:
```
C:\WINDOWS\system32\java -jar MediathekView.jar Einstellungen/.mediathek3
```

### Starten mit zusätzlichen Parametern
```
java -jar MediathekView.jar [Pfad] [Parameter]
java -jar MediathekView.jar c:\temp -M
```
Nach dem obigen Schema kann das Programm auch mit zusätzlichen Parametern gestartet werden.
```
java -jar MediathekView.jar Einstellungen/.mediathek3
```
Das Programm verwendet – durch einen relativen Pfad – das Verzeichnis "Einstellungen" im MediathekView-Verzeichnis auf dem USB-Stick (der Ordner "Einstellungen" muss zuerst erstellt werden). Hinweis: Die Programmeinstellungen (Filmliste, Einstellungen, gesehene Filme) werden standardmässig im Home-Verzeichnis (Benutzer-Verzeichnis) in einem Ordner ".mediathek3" gespeichert.
```
java -jar MediathekView.jar -M
```
Das Programm startet mit einem maximierten Fenster:
```
java -jar MediathekView.jar -v
```
Das Programm gibt nur die Versionsnummer aus.

### Auto
```
java -jar MediathekView.jar [Pfad] -auto
java -jar MediathekView.jar -auto
java -jar MediathekView.jar -fastauto
```
Das Programm startet im Auto-Modus. Es wird die Filmliste aktualisiert und dann alle neuen Abos geladen. Das Programm beendet sich dann selbst wieder. Diese Funktion eignet sich dazu, alles automatisch aktuell zu halten. Im Fastauto-Modus werden zusätzlich keine Filmbeschreibungen mitgeladen, was Speicher spart und die Programmausführungsgeschwindigkeit auf leistungsschwacher Hardware beschleunigt.
Das Programm (Abos, Downloadpfade, "nur Filme der letzten x Tage laden") muss zuerst im "normalen" Modus (GUI) eingerichtet werden. Der Auto- bzw. Fastauto-Modus startet ohne grafische Oberfläche und kann so auch auf Rechnern ohne grafische Oberfläche (ohne X) laufen.

### Parameter, die die Einstellungen der JavaVM ändern
```
java -jar -Dhttp.proxyHost=proxyserver -Dhttp.proxyPort=8080 MediathekView.jar
```
Es wird ein Proxyserver verwendet.
```
java -Dswing.defaultlaf=com.sun.java.swing.plaf.gtk.GTKLookAndFeel -jar MediathekView.jar
```
Es wird ein anderes LookAndFeel verwendet. Dazu darf aber in den Programmeinstellungen der MediathekView keines ausgewählt sein, diese Angabe wird sonst überschrieben.
```
java -Djava.awt.headless=true -jar MediathekView.jar -auto
```
Wird das Programm ohne GUI auf einem Rechner mit grafischer Oberfläche gestartet (-auto), kann man damit den Splashscreen unterdrücken
```
java -Djava.net.preferIPv4Stack=true -Xms128M -Xmx1G -jar MediathekView.jar
java -Djava.net.preferIPv6Addresses=true -jar MediathekView.jar
```
Die Parameter "-Xms128M -Xmx1G" helfen bei geringem Arbeitsspeicher. Der Parameter "-Djava.net.preferIPv4Stack=true", "-Djava.net.preferIPv6Addresses=true" ermöglicht eine Verbindung zum Internet, wenn der verwendete Netzwerk-Stack von Java nicht automatisch richtig erkannt wird, wodurch die Filmliste nicht geladen werden könnte.

## Filme
![MedaithekView Filmliste Übersicht](/images/anleitung/MV_Film-Fenster.png)
Es wird die ganze Filmliste angezeigt, falls der Zeitraum auf "alles" gestellt wurde (im Bsp. oben ist der Standardwert "15 Tage" gewählt):

<font class="yellowfont">Gelb markierte Einträge</font> sind geogeblockte Sendungen und können nur aus dem angegebenen Land (im Bsp. "DE") heruntergeladen oder abgespielt werden.

<font class="greyfont">Grau markierte Einträge</font> wurden schon abgespielt oder heruntergeladen.

<font class="bluefont">Einträge in blauer Schrift</font> sind – relativ zur letzten geladenen Liste – neu in der Filmliste.

Die oben <font class="orangefont">orange markierte Sendung</font> ist der gerade ausgewählte Eintrag.

In der Filmliste können Filme zum Ansehen (grüner Play-Button) und zum Aufnehmen (roter Record-Button) gestartet sowie Abos über das Kontextmenü angelegt werden.
![MediathekView Buttons](/images/anleitung/MV_Play_Record-Button.png)

**Filmliste laden**: Über den blauen Globus-Button in der Toolbar kann die Filmliste aktualisiert werden (dies geschieht beim Programmstart automatisch).

**Filminformation anzeigen**: Über den i-Button in der Toolbar kann sämtliche Filminformation zur ausgewählten Sendung übersichtlich in einem eigenen Fenster dargestellt werden.

**Sendungen suchen**:
Im linken Bereich des Reiters "Filme" werden Filtermöglichkeiten (= Erweiterte Suche) angezeigt, mit dem die Filmliste eingeschränkt werden kann. Durch Klick auf den Button oben rechts im Reiter "Filme" kann die "Erweiterte Suche" aus- und wieder eigeblendet werden:
![MediathekView Erweiterte Suche](/images/anleitung/MV_Suchfeld_Erweitert_Tatort.png)

Die Filter "Sender", "Thema" sowie "Titel" beziehen sich auf die gleichnamigen Spalten der Tabelle (Filmliste). Seit Version 5 von MediathekView kann der Filterbereich nur noch vertikal positioniert dargestellt werden (also nicht wie unten dargestellt):
![MediathekView Erweiterte Suche - Sender](/images/anleitung/MV_ErweiterteSuche_Sender_Thema.png)

Mit dem Filter _"Zeitraum"_ kann gleich zu Beginn eine verkürzte Liste erstellt werden (z.B. 2 Tage statt 30 Tage), was die Suche beschleunigt. Auf diese Liste können dann die weiteren Filter angewandt werden. Will man alle Sendungen der Filmliste anzeigen lassen, setzt man den Zeitraum auf "alles".

Die Filter _Sender_ sowie Thema benutzt man, wenn man den Sender (z.B. ARD) und die Sendereihe bzw. das Thema (z.B. "Tatort") kennt, nicht jedoch den Titel der Sendung (z.B. der Polizistinnenmörder). So kann auch verhindert werden, dass der "Tatort" des SRF oder ORF angezeigt wird.

Den Filter _Titel_ kann man benutzen, wenn man nur noch den Titel der Sendung oder einen Teil davon kennt. Der Suchbegriff "der Polizist", "Polizist" oder "Mörder" wird die Sendung "der Polizistinnenmörder" listen, nicht jedoch der Suchbegriff "die Polizistin".

_Mindestlänge [min]_: Ein über den Schieberegler eingestellter Wert von 60 min würde bedeuten, dass alle Sendungen, die weniger lang als 60 Minuten dauern, aus der Filmliste ausgeblendet werden.

Beim Feld _Thema oder Titel_ muss der Suchbegriff im "Thema" ODER "Titel" enthalten sein. Als Suchbegriff wählt man also entweder "Tatort" oder dann z.B. "Polizistin", um die Sendung "der Polizistinnenmörder" zu listen.

Im Filter _Irgendwo_ werden die Beschreibung und die Stichwörter geprüft. Der Suchbegriff "Hörfassung" listet dann alle Sendungen, die im Beschreibungstext das Wort "Hörfassung" enthalten, womit man den "Tatort" in der Hörfassung kriegt.

Oder-Suche: Mehrere Filterwörter werden durch "," getrennt, z.B.: "der Mörder,Verbrecher", dann wird nach Sendungen gesucht, die im entsprechenden Feld "der Mörder" ODER "Verbrecher" enthalten.

Bei der Suche wird nicht zwischen Groß- und Kleinschreibung unterschieden. In den Programmeinstellungen (Menü: "Datei -> Einstellungen" bzw. unter OS X MediathekView -> Einstellungen…) kann unter "Einstellungen -> Allgemein" die Livesuche deaktiviert werden. Der Suchfilter wird dann nicht mehr sofort nach jeder Eingabe eines Zeichens ausgewertet, sondern erst durch Drücken der Enter-Taste.

_Blacklist öffnen_: Damit können Sendungen mit Datum in der Zukunft und Trailer ausgeblendet werden:
![MediathekView Blacklist Fenster](/images/anleitung/MV_Einstellungen_Blacklist.jpg)

Über einen Rechtsklick auf eine Sendung in der Filmliste sind folgende Funktionen erreichbar:
![MediathekView Blacklist Eintrag](/images/anleitung/MV_Blacklist_eintragen.png)

**Abo**: Mit diesem Kontextmenü-Befehl lassen sich [Abos anlegen](#sendereihen-und-serien-abonnieren-abos). Das ist ein "Filter", der alle Filme, auf die der Filter passt, in die Downloadliste einträgt. So kann man z.B. ein Abo mit Sender "ARD" und Thema "Tatort" anlegen. Von nun an werden alle Filme, die im Feld Sender "ARD" und im Feld Thema "Tatort" stehen haben, heruntergeladen.

**Blacklist**: Sender oder Sender/Thema-Paare die in der Blacklist stehen, werden in der Liste nicht mehr angezeigt. Einträge in der Blacklist, lassen sich über den Button "Blacklist öffnen" wieder entfernen.

**URL kopieren**: Ein Rechtsklick auf eine Sendung in der Filmliste erlaubt es, die Video-URL der Sendung (in der gewünschten Auflösung/Qualität) in die Zwischenablage zu kopieren.

**Tabelle drucken**: Damit kann die Filmliste ausgedruckt werden.

## Downloads
In diesem Tab werden alle Filme, die zum Download anstehen, aufgelistet. Es werden zwei Arten Downloads unterschieden:

1. Downloads, die manuell im Tab Filme angelegt wurden;
2. Downloads, die automatisch durch ein Abo angelegt wurden.

Der Unterschied ist in der Tabelle in der Spalte "Abo" zu sehen: Bei Abos steht hier der Aboname. Mit dem Filter kann man sich nur die jeweilige Art anzeigen lassen.
![MediathekView Download-Fenster](/images/anleitung/MV_DL-Fenster.jpg)

Die Downloads können über das Menü "Downloads", das Kontextmenü der Maus oder die Toolbar gesteuert werden. Sie lassen sich alle oder auch einzeln starten, vorziehen (d.h. nach oben verschieben), zurückstellen und auch wieder stoppen. Ein Rechtsklick auf einen Download ermöglicht es, den Zielordner zu öffnen, d.h. die Datei im Download-Verzeichnis anzeigen zu lassen.

Die Farben haben diese Bedeutung:

<font class="redfont">rot</font>: Status "fehlerhaft". Der Download hat nicht geklappt. Das liegt meistens an fehlerhaften beziehungsweise veralteten Aufzeichnungsparametern. Diese Meldung kann auch gehäuft auftreten, wenn ein Sender auf seiner Website Umstellungen vorgenommen hat.

<font class="brownfont">braun</font>: Der Download läuft gerade. Es wird eine Fortschrittsanzeige in %, die verbleibende Restzeit und die Geschwindigkeit angegeben.

<font class="greenfont">grün</font>: Status "fertig". Der Download hat geklappt und ist abgeschlossen.

<font class="greyfont">grau</font>: Der Download wartet auf den Start.

![MediathekView Download Buttons](/images/anleitung/MV_DL-Buttons.png)

_Zwei blaue Pfeile_ (der 1. Button von links in der Toolbar): sucht nach neuen Downloads für die Abos.

_Blauer Pfeil_: startet alle Downloads.

_Grüner Pfeil_: spielt die gespeicherte, heruntergeladene Sendung ab

_Roter Pfeil_: stellt den Download der markierten Tabellenzeile zurück, d.h., er wird nicht mehr angezeigt und bei "alle Downloads starten" nicht mitgestartet. Wird nach neuen Downloads gesucht (erster Button), wird er wieder angezeigt.

_Rotes Kreuz_: löscht einen Download, er wird als erledigt markiert.

_Pinsel_: "bereinigt" die Tabelle, es werden alle abgeschlossenen Downloads entfernt.

Bis auf wenige Ausnahmen (ältere Sendungen) liegen sämtliche heruntergeladenen Videos im MP4-Format vor. Wurde ein Film mit dem Status erfolgreich aufgezeichnet, wird er nach einem Neustart von MediathekView nicht mehr als Download angezeigt. Seine URL wird in die History-Liste, bei Abos zusätzlich in die Liste der Erledigten Abos eingetragen. Diese zwei Listen können in den Programmeinstellungen geladen und eingesehen werden. Eine URL kann dort auch wieder aus der Liste gelöscht werden und der Film wird dann erneut bei den Downloads angezeigt.

## Sendereihen und Serien abonnieren (Abos)

### Verwenden von Regex

## Eigene Aufnahme- und Abspielsets einrichten (für fortgeschrittene Benutzer)

## Einstellungen

## Hilfe
