+++
description = ""
date = "2019-09-25T20:00:00+01:00"
title = "Anleitung"
toc = true
[menu]
    [menu.main]
        name = "Anleitung"
        parent = "hilfe"
        weight = 3
+++

# Anleitung

## Kurzbeschrieb von MediathekView
Das Programm MediathekView (abgekürzt: MV) ist eine Art Suchmaschine für Filme der Mediatheken verschiedener öffentlich-rechtlicher Sender (3sat, ARD, arte.de, arte.fr, BR, hr, KiKA, mdr, NDR, ORF, phönix, rbb, SR, SRF, SWR, WDR, ZDF, ZDFtivi). MediathekView erlaubt es, sowohl Beiträge aus den Mediatheken direkt (mit VLC Media Player oder mit einem Programm eigener Wahl) abzuspielen oder herunterzuladen als auch Sendereihen/Serien zu abonnieren. MediathekView kann nur Sendungen herunterladen, die in den Mediatheken der Sender selbst noch als Videos angeboten werden.

## Installation

### Systemvoraussetzungen
Unterstützt wird Windows (7, 8, 10), Linux sowie Mac OS X (ab Version 10.10). MediathekView benötigt mindestens Java 11 welches aber für Mac, Windows und Linux bereits Teil der Pakete ist (Mac ab Version 4, Windows und Linux ab 13.5).


### Hilfsprogramme zum Abspielen und Aufzeichnen von Sendungen
Zum Ansehen und Aufzeichnen werden geeignete Zusatzprogramme benötigt. MediathekView ist konfiguriert für die Verwendung von **VLC Media Player** (zum Abspielen und Aufzeichnen von Sendungen) sowie **FFmpeg** zum Aufzeichnen mancher Sendungen.

Für Windows und OS X ist FFmpeg bereits im Programmpaket von MediathekView enthalten (im Ordner "bin"), es muss nur der VLC Media Player installiert sein. Sinnvollerweise wird vor dem ersten Start von MediathekView zuerst der [VLC Media Player](http://www.videolan.org/) installiert.

Für Linux müssen der VLC Media Player und [FFmpeg](http://www.ffmpeg.org/) durch die Paketverwaltung installiert werden. Statt des FFmpeg kann **avconv** (Bestandteil des [libav](http://libav.org/)-Projekts) verwendet werden.

Beim ersten Start von MediathekView werden bereits zwei Programmsets mit den zwei Hilfsprogrammen VLC Media Player und FFmpeg angelegt. Damit können alle Filme angesehen und aufgezeichnet werden.

### Linux

#### Erster Start

Beim ersten Start von MediathekView werden bereits zwei Programmsets mit den zwei Hilfsprogrammen VLC Media Player, und FFmpeg angelegt. Damit können alle Filme angesehen und aufgezeichnet werden.

Wurde statt ffmpeg **libav-tools** verwendet, muss beim ersten Start statt ffmpeg **avconv** ausgewählt werden (Pfad meist: "/usr/bin/avconv")

#### Installation

Die einfachste Möglichkeit MediathekView zu installieren ist es den jeweiligen Installer zu nutzen. Bei Linux ist dies Deb, Rpm oder Sh. Alternativ steht auch ein AppImage zur Verfügung.

#### Nutzung ohne Installation

Soll MediathekView nicht installiert werden um es z.B. portable zu nutzen gibt es in tar.gz Archiv. Auch dies enthält bereits die benötigte Java version. Hierbei muss das Archiv nur an einen beliebigen Ort entpackt werden und dann kann MediathekView durch eines der enthaltenewn Start-Skripte gestartet werden.

#### Desktop-Icon & Menü Eintrag

Bei der Verwendung eines der Installer werden Menü Einträge und Desktop Icons bereits angelegt.

Wird MediathekView über das tar.gz verwendet muss man dies selbst machen, hierfür kann z.B. die folgende Desktop Datei verwendet werden:

```
[Desktop Entry]
Name=MediathekView
GenericName=MediathekView
Exec=/home/BENUTZERNAME/PROGRAMMORDNER/MediathekView
Icon=/home/BENUTZERNAME/PROGRAMMORDNER/MediathekView.svg
Terminal=false
Type=Application
StartupNotify=false
Categories=AudioVideo;Player;
```

---

##### Mint 17

Einen Menüpunkt kann man sich so anlegen:

- rechte Maus auf Menü -> Einrichten
- dann _Die Menübearbeitung öffnen_ klicken
- z.B. das Menü _Multimedia_ auswählen und dann mit _new Item_ einen neuen Eintrag anlegen
- als "Name" z.B. _MediathekView_ und als _Command_ die Startdatei _MediathekView_ im Programmordner auswählen. Mit einem Klick aufs Icon kann auch das ausgewählt werden (im _Programmordner -> Infos_ liegen Icons).

Mit einem Klick der rechten Maus auf den neuen Menüpunkt und dann _zum Schreibtisch hinzufügen_ kann man auch einen Startbutton auf dem Desktop anlegen.

---

##### KDE

Einen Menüpunkt kann man sich so anlegen:

- rechte Maus aufs Menü -> "Menüeinträge bearbeiten" oder "Anwendungen bearbeiten"
- z.B. das Memü _Multimedia_ auswählen und dann mit _neues Element_ einen neuen Eintrag anlegen
- als "Name" z.B. _MediathekView_ und als _Command_ die Startdatei _MediathekView_ im Programmordner auswählen. Mit einem Klick aufs Icon kann auch das ausgewählt werden (im _Programmordner -> Infos_ liegen Icons).

Mit einem Klick der rechten Maus auf den neuen Menüpunkt und dann _zur Arbeitsfläche hinzufügen_ oder einfach mit der Maus auf den Desktop ziehen, kann man auch einen Startbutton auf dem Desktop anlegen.

---

##### Debian 7.6

Zum Eintragen ins Startmenü, die Anwendung _Hauptmenü_ starten. Dann "neuer Eintrag" auswählen. Als "Befehl" die Datei "MediathekView" im Programmordner auswählen. Mit einem Klick aufs Icon kann auch das ausgewählt werden (im _Programmordner -> Infos_ liegen Icons).

### Mac
Für OS X 10.7.3 (und neuer) gibt es eine separate Applikation "MediathekView.app":

1. die heruntergeladene [DMG-Datei](/download), z.B. "MediathekView-latest.dmg" doppelklicken
2.  Das Programm per Drag-and-drop ins Programme-Verzeichnis (empfohlen) verschieben
3. (optionaler Schritt: Verknüpfung im Dock ablegen) die Applikation "MediathekView.app" ins Dock ziehen. Von dort aus kann MediathekView dann jeweils gestartet werden.
4. die heruntergeladene DMG-Datei kann nach dem Entpacken gelöscht werden

Für Mac-OS-X-10.6-Benutzer sowie für fortgeschrittene Benutzer, die MediathekView auf einem portablen Datenträger (z.B. USB-Stick) verwenden oder mit weiteren Funktionen ausstatten und alle zusätzlichen Hilfsprogramme zum Abspielen, Aufzeichnen, Transcodieren etc. im gleichen Verzeichnis haben wollen:

1. die ZIP-Datei (ohne die Angabe "OSX" im Dateinamen, für Mac-OS-X-10.6-Benutzer zwingend "MediathekView_3.3.0.zip") [herunterladen](https://sourceforge.net/projects/zdfmediathk/files/Mediathek/) und doppelklicken
2. den entpackten Ordner per Drag-and-drop ins Programme-Verzeichnis (empfohlen) oder bei fehlenden Rechten ins Home-Verzeichnis (Haus-Symbol) verschieben
3. (optionaler Schritt: Verknüpfung im Dock ablegen) den eben verschobenen MediathekView-Ordner öffnen, die Datei "MediathekView.command" ansteuern und ins Dock ziehen. Von dort aus kann MediathekView dann jeweils gestartet werden.
4. die ZIP-Datei kann nach dem Entpacken gelöscht werden

### Windows
MediathekView wird optimaler weise durch den Installer (Exe) installiert. Dabei werden direkt passende Einträge im Startmenü angelegt. 

![Der Windows Installer](/images/news/mediathekview-13_5-win-installer.png)
<em>Der Installer für Windows.</em>

Wird das Zip Archiv verwendet um MediathekView zum Beispiel portable nutzen zu können muss das Zip Archiv lediglich in einen Ordner der Wahl entpackt werden. Exe Datein zum starten von MediathekView finden sich direkt im Programmordner.

### Update
**Windows**: Das Update von MediathekView geschieht dadurch, dass der neuste Installer ausgeführt wird. Dieser erkennt eine, bereits durch einen Installer erzeugte, MediathekView installation und updated diese. 

Wurde das Zip Archiv verwendet kann man nun einen die alte Installation löschen und anschließend einen der Installer verwenden oder an den selben ordner das neu heruntergeladene Zip Archiv entpacken. 

Die Einstellungen der vorhergehenden Programmversion werden von der neuen Version verwendet; es gibt also keinen neuen Einrichtungsdialog.

**Mac**: Das Update erfolgt dadurch, dass man die neue Version von MediathekView in den Programmordner zieht, wodurch die alte ersetzt wird.

### Deinstallation
Wurde das Programm über die Installer installiert, kann es auch darüber wieder deinstalliert werden. 

Das Programm selbst legt nur den Ordner ".mediathek3\. im Home-Verzeichnis an und speichert darin alle Einstellungen. (Standardmäßig sind unter Linux und Max Ordner mit führendem Punkt unsichtbar, das kann aber in den Einstellungen des Dateimanagers geändert werden.) Es werden keine weiteren Änderungen am System vorgenommen. Wird dieser Einstellungsordner (und bei manueller Installation der Programmordner) gelöscht, ist das Programm wieder komplett entfernt.
Der unter Mac und Linux unsichtbare Ordner ".mediathek3" kann auch durch Eingabe (Kopieren) des folgenden Befehls im Terminal (Programme/Dienstprogramme/Terminal) gelöscht werden:
```
rm -R ~/.mediathek3
```
## Starten
Für Windows (MediathekView.exe), Linux (MediathekView) sind eigene Startdateien enthalten, mit welchen MediathekView direkt gestartet werden kann. Für OS X 10.7.3 und neuer besteht eine eigenständige Applikation (MediathekView.app); für OS X 10.6 liegt die Startdatei "MediathekView.command" vor.

Es ist möglich, den Startprogrammen weitere Optionen für die Java VM mitzugeben. Dies geschieht über einen Eintrag in der Datei 
`MediathekView.vmoptions` im Programmordner von MediathekView. Für den ipv4 Starter gibt es eine eigene Datei `MediathekView_ipv4.vmoptions`, sowie eine eigene Datei `MediathekView_Portable.vmoptions` für den portable Starter.

Mit .vmoptions lässt sich z.B. die Anzeigegröße (inkl. Schriftgröße) hochsetzen (z.B. für UHD Monitore oder als Sehhilfe)
```
# Enter one VM parameter per line
# For example, to adjust the maximum memory usage to 512 MB, uncomment the following line:
# -Xmx512m
# To include another file, uncomment the following line:
# -include-options [path to other .vmoption file]
#
# examples:
# scale graphical user interface by a factor of 25%
-Dsun.java2d.uiScale=1.25
```
(Achtung: Wurde Mediathekview vom Installer in das Programme-Verzeichnis eingespielt, sind meist Administrator-Berechtigungen erforderlich, um die .vmoptions Datei zu ändern)

Ansonsten kann man die Programmdatei auch so starten:

- Windows: Doppelklick auf "MediathekView_ipv4.exe" oder "MediathekView_Portable.exe"
- Windows Konsole: `jre\bin\java -Xmx1g -jar MediathekView.jar`
- Linux: Doppelklick auf MediathekView_ipv4 oder MediathekView_Portable
- Linux Konsole runner: `./MediathekView_ipv4` oder `./MediathekView_Portable`
- Linux Konsole Java: `jre/bin/java -Xmx1g -jar MediathekView.jar`

Startet das Programm nicht, gibt es Hilfe in der [FAQ](/FAQ).

### Starten im portablen Modus (MediathekView Portable)
Für den portablen Einsatz z.B. auf einem USB-Stick stehen im Ordner "Portable" entsprechende Startdateien zur Verfügung (z.B. "MediathekView_Portable.exe" für Windows). Diese Startdateien dürfen nicht aus dem Ordner verschoben werden. Beim portablen Start wird der Ordner "Einstellungen" im MediathekView-Programmordner angelegt. Da hinein können, falls gewünscht, die bisherigen Einstellungen, also der Ordner ".mediathek3" aus dem Benutzerverzeichnis kopiert werden.

Unter OS X ist ein portabler Start nicht möglich. 

Interessierte können den Code für die Startdateien für direkt den Startdateien selbst entnehmen. Die portable Startdatei für Windows enthält im Kern folgende Zeilen Code:
```
jre/bin/java -Xmx1g -jar MediathekView.jar Einstellungen/.mediathek3
```

### Starten mit zusätzlichen Parametern
```
jre/bin/java -Xmx1g -jar MediathekView.jar MediathekView [-hm] [<Pfad zum Verzeichnis>]
jre\bin\java -Xmx1g -jar MediathekView.jar -m c:\temp
```
Nach dem obigen Schema kann das Programm auch mit zusätzlichen Parametern gestartet werden.
```
jre/bin/java -Xmx1g -jar MediathekView.jar Einstellungen/.mediathek3
```
Das Programm verwendet – durch einen relativen Pfad – das Verzeichnis "Einstellungen" im MediathekView-Verzeichnis auf dem USB-Stick (der Ordner "Einstellungen" muss zuerst erstellt werden). Hinweis: Die Programmeinstellungen (Filmliste, Einstellungen, gesehene Filme) werden standardmässig im Home-Verzeichnis (Benutzer-Verzeichnis) in einem Ordner ".mediathek3" gespeichert.

```
jre/bin/java -Xmx1g -jar MediathekView.jar -m
```
Das Programm startet mit einem maximierten Fenster.

### Parameter, die die Einstellungen der JavaVM ändern
```
jre/bin/java -Xmx1g -Dswing.defaultlaf=com.sun.java.swing.plaf.gtk.GTKLookAndFeel -jar MediathekView.jar
```
Es wird ein anderes LookAndFeel verwendet. Dazu darf aber in den Programmeinstellungen der MediathekView keines ausgewählt sein, diese Angabe wird sonst überschrieben.

```
jre/bin/java -Djava.net.preferIPv4Stack=true -Xms128M -Xmx1G -jar MediathekView.jar
jre/bin/java -Djava.net.preferIPv6Addresses=true -jar MediathekView.jar
```
Die Parameter "-Xms128M -Xmx1G" helfen bei geringem Arbeitsspeicher. Der Parameter "-Djava.net.preferIPv4Stack=true", "-Djava.net.preferIPv6Addresses=true" ermöglicht eine Verbindung zum Internet, wenn der verwendete Netzwerk-Stack von Java nicht automatisch richtig erkannt wird, wodurch die Filmliste nicht geladen werden könnte.

## Filme
![MedaithekView Filmliste Übersicht](/images/anleitung/MV_Film-Fenster.png)
Es wird die ganze Filmliste angezeigt, falls der Zeitraum auf "alles" gestellt wurde (im Bsp. oben ist der Standardwert "15 Tage" gewählt):

<font class="yellowfont">Gelb markierte Einträge</font> sind geogeblockte Sendungen und können nur aus dem angegebenen Land (im Bsp. "DE") heruntergeladen oder abgespielt werden.

<font class="greyfont">Grau markierte Einträge</font> wurden schon abgespielt oder heruntergeladen.

<font class="bluefont">Einträge in blauer Schrift</font> sind – relativ zur letzten geladenen Liste – neu in der Filmliste.

Die oben <font class="bluemarked">blau markierte Sendung</font> ist der gerade ausgewählte Eintrag.

In der Filmliste können Filme zum Ansehen (Play-Button) und zum Aufnehmen (Record-Button) gestartet sowie Abos über das Kontextmenü angelegt werden.
![MediathekView Buttons](/images/anleitung/MV_Play_Record-Button.png)

**Filmliste laden**: Über den Wolken-Button in der Toolbar kann die Filmliste aktualisiert werden (dies geschieht beim Programmstart automatisch).

**Filminformation anzeigen**: Über den i-Button in der Toolbar kann sämtliche Filminformation zur ausgewählten Sendung übersichtlich in einem eigenen Fenster dargestellt werden.

**Sendungen suchen**:
Die normale Suchleiste sucht standardmäßig nur nach Thema und Titel. Die langsamere zusätzliche Suche nach Beschreibungen lässt sich durch Klick auf den Button mit dem Buch Icon rechts der Suche aktivieren und wieder deaktivieren.

In einem sepperaten Fenser werden Filtermöglichkeiten (= Erweiterte Suche) angezeigt mit denen die Filmliste eingeschränkt werden kann. Dieses Fenster lässt sich mit Klick auf den Button mit Trichter Icon links der Suche öffnen:
![MediathekView Erweiterte Suche](/images/anleitung/MV_Suchfeld_Erweitert_Tatort.png)
Seit Version 13.3 von MediathekView kann der Filterbereich nur noch als eigenes Fenserdargestellt werden.


Beim Suchfeld Thema oder Titel muss der Suchbegriff im Thema oder Titel enthalten sein. Als Suchbegriff wählt man also entweder "Tatort" oder dann z.B. "Polizistin", um die Sendung "der Polizistinnenmörder" zu listen. 
Bei aktivieren der zusätzlichen Beschreibungssuche muss der Suchbegriff in Thema oder Titel oder der Beschreibung enthalten sein. Der Suchbegriff "Hörfassung" listet dann alle Sendungen, die im Beschreibungstext das Wort "Hörfassung" enthalten, womit man den "Tatort" in der Hörfassung kriegt.

Oder-Suche: Mehrere Filterwörter werden durch "," getrennt, z.B.: "der Mörder,Verbrecher", dann wird nach Sendungen gesucht, die im entsprechenden Feld "der Mörder" ODER "Verbrecher" enthalten.

Bei der Suche wird nicht zwischen Groß- und Kleinschreibung unterschieden. In den Programmeinstellungen (Menü: "Datei -> Einstellungen" bzw. unter OS X MediathekView -> Einstellungen…) kann unter "Einstellungen -> Allgemein" die Livesuche deaktiviert werden. Der Suchfilter wird dann nicht mehr sofort nach jeder Eingabe eines Zeichens ausgewertet, sondern erst durch Drücken der Enter-Taste.

Mit dem Mülleimer Icon Button lassen sich alle Filter zurücksetzen.

Die Checkbox Filter im ersten Abschnitt grenzen die Filme auf bestimmte Kategorien ein. Z.B. nur HD-Filme, nur Filme mit Untertitel usw.

Die Checkbox Filter im zweiten Abschnitt blenden bestimmte Filme aus. Z.B. gesehene Filme, Hörfassungen usw.

Die Filter "Sender" und "Thema" beziehen sich auf die gleichnamigen Spalten der Tabelle (Filmliste). 

Mit dem Filter "Zeitraum" kann gleich zu Beginn eine verkürzte Liste erstellt werden (z.B. 2 Tage statt 30 Tage), was die Suche beschleunigt. Auf diese Liste können dann die weiteren Filter angewandt werden. Will man alle Sendungen der Filmliste anzeigen lassen, setzt man den Zeitraum auf "unendlich". **Hinweis**: "unendlich" ist der niedrigste Wert.

Die Filter Sender sowie Thema benutzt man, wenn man den Sender (z.B. ARD) und die Sendereihe bzw. das Thema (z.B. "Tatort") kennt, nicht jedoch den Titel der Sendung (z.B. der Polizistinnenmörder). So kann auch verhindert werden, dass der "Tatort" des SRF oder ORF angezeigt wird.

Mindest- und Maximallänge [min]: Ein über einen doppelseitigen Schieberegler eingestellter Wert von 60 min bis 80 min würde bedeuten, dass alle Sendungen, die weniger lang als 60 Minuten dauern aber auch nicht länger aks 80 Minuten, aus der Filmliste ausgeblendet werden.


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
![MediathekView Download-Fenster](/images/anleitung/MV_DL-Fenster.png)

Die Downloads können über das Menü "Downloads", das Kontextmenü der Maus oder die Toolbar gesteuert werden. Sie lassen sich alle oder auch einzeln starten, vorziehen (d.h. nach oben verschieben), zurückstellen und auch wieder stoppen. Ein Rechtsklick auf einen Download ermöglicht es, den Zielordner zu öffnen, d.h. die Datei im Download-Verzeichnis anzeigen zu lassen.

Die Farben haben diese Bedeutung:

<font class="redfont">rot</font>: Status "fehlerhaft". Der Download hat nicht geklappt. Das liegt meistens an fehlerhaften beziehungsweise veralteten Aufzeichnungsparametern. Diese Meldung kann auch gehäuft auftreten, wenn ein Sender auf seiner Website Umstellungen vorgenommen hat.

<font class="brownfont">braun</font>: Der Download läuft gerade. Es wird eine Fortschrittsanzeige in %, die verbleibende Restzeit und die Geschwindigkeit angegeben.

<font class="greenfont">grün</font>: Status "fertig". Der Download hat geklappt und ist abgeschlossen.

<font class="greyfont">grau</font>: Der Download wartet auf den Start.

![MediathekView Download Buttons](/images/anleitung/MV_DL-Buttons.png)

_i-Icon_: Zeigt die Filminformationen des ausgewählten Films an.

_Zwei Pfeile_: sucht nach neuen Downloads für die Abos.

_Pfeile nach unten_: startet alle Downloads.

_Pfeil / Play-Button_: spielt die gespeicherte, heruntergeladene Sendung ab

_Uhr_: stellt den Download der markierten Tabellenzeile zurück, d.h., er wird nicht mehr angezeigt und bei "alle Downloads starten" nicht mitgestartet. Wird nach neuen Downloads gesucht (erster Button), wird er wieder angezeigt.

_Mülleimer_: löscht einen Download, er wird als erledigt markiert.

_Radiergummi_: "bereinigt" die Tabelle, es werden alle abgeschlossenen Downloads entfernt.

Bis auf wenige Ausnahmen (ältere Sendungen) liegen sämtliche heruntergeladenen Videos im MP4-Format vor. Wurde ein Film mit dem Status erfolgreich aufgezeichnet, wird er nach einem Neustart von MediathekView nicht mehr als Download angezeigt. Seine URL wird in die History-Liste, bei Abos zusätzlich in die Liste der Erledigten Abos eingetragen. Diese zwei Listen können in den Programmeinstellungen geladen und eingesehen werden. Eine URL kann dort auch wieder aus der Liste gelöscht werden und der Film wird dann erneut bei den Downloads angezeigt.

## Sendereihen und Serien abonnieren (Abos)
### Erstellen eines Abos

Abos sind für halbautomatisiertes Herunterladen von Sendereihen und Serien gedacht. In Abos werden Suchkriterien gespeichert, und zwar für Sendungen, die erst später in der Filmliste auftauchen werden.

Abos können auf 2. Varianten angelegt werden:

1. im Tab "Filme" per Rechtsklick (Kontextmenü) auf einen Eintrag in der Filmliste oder
2. über das Menü "Abos", wobei man sich im Tab "Abos" befinden muss und sämtlichen Inhalt (Abokriterien) selbst festlegen muss.

Bei Variante 1 stehen im Kontextmenü stehen zwei Optionen offen:

a. Abo mit Sender und Thema anlegen

b. Abo mit Sender und Thema und Titel anlegen

Die Abofelder beziehen sich auf die Spalten der Filmliste bzw. auf die aktuelle Filterauswahl:

- Sender;
- Thema sind Gruppenbezeichnungen, die von den Sendern selbst stammen;
- Titel ist meistens variabel.

Abofelder ohne Inhalt werden bei der Suche nicht berücksichtigt; der Inhalt dieser Spalten in der Filmliste kann beliebig sein. Die Option a ist die Standardvariante für Sendereihen bei z.B. ARD und ZDF. Wenn das Feld "Titel" auch einen Inhalt hätte, dann würde nur die Sendung, die dazu passt, gefunden werden. Wenn man das Feld "Sender" leer lässt, kann man senderübergreifend suchen, muss dann aber mit einer großen Trefferzahl rechnen. Dem könnte man aber begegnen mit einem [Regex](#verwenden-von-regex) im Feld "Titel".

Bei Sendereihen-Folgen muss man bei ARTE und 3Sat meistens das Feld "Titel" in das Abo einbeziehen. Serienteile sind oft wie folgt durchnummeriert: (1/5), (2/5) ...
Im Abofenster wird folglich das Feld"Titel" editiert: Wenn man bei nummerierten Folgen den Klammerausdruck entfernt, so dass nur der nackte Titel übrig bleibt, dann werden alle 5 Teile gefunden.

### Abos anpassen oder ausschalten sowie Herunterladen von abonnierten Sendungen

Nachdem ein Abo angelegt wurde, ist im Fenster "Abos verwalten" (Zu öffnen über das Menü -> Abos -> Abos verwalten) ein Eintrag für das eben erstellte Abo ersichtlich. Von hier aus lässt sich ein Abo auch nachträglich editieren (z.B. anderer Zielordner, Suchkriterien anpassen), und zwar per Doppelklick auf den Eintrag in der Aboliste oder per Rechtsklick. (Ein anderer Zielordner wird aber nur benutzt, wenn im zugehörigen Set unter "Speicherziel" die Option "Unterordner mit Thema anlegen" (Checkbox) nicht deaktiviert wurde!)

Nach dem Einrichten eines Abos werden alle neuen Sendungen, die von den Suchkriterien eines Abos erfasst werden, in die Download-Liste (Tab "Downloads") eingetragen. Von dort können die Downloads gestartet werden; es erfolgt also kein automatischer Download. In den Programmeinstellungen (Menü: "Datei -> Einstellungen" bzw. unter OS X MediathekView -> Einstellungen…) kann jedoch unter "Einstellungen -> Erweitert" festgelegt werden, dass beim Neuladen der Filmliste der Download der Abos automatisch gestartet wird.
![MediathekView Abo Fenster](/images/anleitung/MV_Abo-Fenster.png)

Abos können "ein-" und "ausgeschaltet" werden (erster und zweiter Button in der Toolbar) und auch gelöscht werden. "Ausgeschaltete Abos" werden beim Suchen nach anstehenden Downloads nicht berücksichtigt.

### Verwenden von Regex
[Reguläre Ausdrücke (Regex oder RegExp)](http://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck) sind vorgesehen für den Einsatz in Abos; für eine einzelne Suche in der Filmliste wird man sie eher selten verwenden. Zur Anlage von Abos geht MediathekView davon aus, dass sich bereits eine der Sendungen, die abonniert werden sollen, in der Filmliste befindet. Ist dies nicht der Fall, kann man ein bestehendes Abo so modifizieren, dass eine künftig erstmals in der Filmliste erscheinende Sendung gefunden werden kann.

In den Suchfeldern "Titel" und "Thema oder Titel" kann auch mit regulären Ausdrücken (Regex) gesucht werden. Dazu den regulären Ausdruck hinter ein #: schreiben. Der reguläre Ausdruck wird automatisch vorne und hinten geankert (d.h. er wird implizit mit ^ und $ eingefasst).
Die Suche mit Klartext und mit Regex ist case-insensitive.

#### Einschliessendes Regex
`#:.*Rätsel.*`

Damit werden alle Filme gefunden, die "Rätsel" im entsprechenden Feld enthalten.
Für diese Suche ist in der Regel kein regex erforderlich. Eine Klartexteingabe im Suchfeld reicht aus. Oft genügt die Eingabe von Teilen des Suchbegriffs oder auch nur bestimmter Zeichenkombinationen, die im zu durchsuchenden Feld enthalten sein müssen.

#### Ausschliessendes Regex mit oder-Verknüpfung
Thema "Tatort" und Titel:

`#:(?!.*(Vorschau|BRISANT)).*`

Damit werden alle Filme mit Thema "Tatort", die im Titel nicht "Vorschau" oder "BRISANT" enthalten, gefunden.

#### Kombiniertes Regex für Titel
`#:Sendung mit der Maus vom (?!.*\(mit).*?`

Damit werden alle Filme gefunden, die im Titel mit 'Sendung mit der Maus vom' beginnen, aber nicht '(mit' enthalten. Ganze Sendungen mit Gebärdensprache kann man auf diese Weise ausschliessen, denn die tauchen in der Liste z.B. so auf: "Sendung mit der Maus vom 17.02.2013 (mit ...", während die normale Sendung ohne den "(mit ..." Teil im Titel ist.

Vorgehensweise:

1. In der Filmliste den Sender und das Thema auswählen.
2. Ein geeignetes Regex-Muster aus der Anleitung in das Feld "Titel" der Filmliste kopieren.
3. Das Regex solange modifizieren, bis das Ergebnis in der Filmliste den Erwartungen entspricht. (rot = Syntax fehlerhaft, blau = Syntax OK)
4. Rechtsklick auf einen Eintrag in der Filmliste, und den Kontextmenü-Befehl "Abo -> Abo aus Filter anlegen" auswählen.

Fazit:
Die Suche nach bestimmten Sendungen ist zwar kein Glücksspiel, aber keineswegs fehlerfrei. Manchmal werden in den Sendern Gruppen neu zusammengestellt, was heute im Thema "Sonntagsfilm" war, kann eine Woche später im Thema "Herzkino" sein. Bei ARTE z.B. kann man direkt erkennen, wann ein Sachbearbeiter in Urlaub war: Da laufen dann 2 Serienteile ohne Nummer, und beim 3. Teil ist dann die Nummer plötzlich wieder da. Auch Tippfehler, auf die ein Abo nicht reagieren kann, sind in den Sendern schon vorgekommen. Wenn man eine Sendung in der Filmliste vermisst, empfiehlt es sich, direkt in der Sendermediathek nachzusehen, ob es diese Sendung dort gibt, und dann exakt nach dem dort verwendeten Titel in der Filmliste zu suchen. Das hat schon öfter zum Erfolg geführt.

## Eigene Aufnahme- und Abspielsets einrichten (für fortgeschrittene Benutzer)

### Programmset

![MV Sets](/images/anleitung/Einstellungen-Videoplayer-Sets_1.png)

Dieser Dialog ist über das Menü "Datei->Einstellungen" (OS X: "MediathekView->Einstellungen…") zu erreichen. Hier werden die Programme zum Abspielen und Aufzeichnen der Filme eingerichtet.

Ein Programmset ist ein Set aus einem oder mehreren Programmaufrufen (zB. VLC und flvstreamer). Die im Set enthaltenen Programme sind im Tab "Programme" aufgeführt. Dort kann man für jedes dieser Programme festlegen, für welche Art von Film (zB. die URL beginnt mit "http" oder "rtmp", ...) das Programm zuständig ist.

Ablauf beim Abspielen oder Aufzeichnen eines Films:

Es wird das, zur Aktion (z.B. Abspielen) festgelegte Programmset gesucht und die URL des Films wird übergeben. Das für die URL zuständige Programm wird dann mit der URL gestartet.

Diese Vorgehensweise ist notwendig, da es unterschiedliche Filmformate gibt und diese sich nur mit unterschiedlichen Programmen Aufzeichnen und Ansehen lassen.

Ein Programmset kann für vier verschiedene Aufgaben zuständig sein:

- **Film Abspielen** Es gibt genau ein Programmset, das für das Abspielen der Filme zuständig ist. Mit dem Button "Abspielen" kann ausgewählt werden, welches es sein soll. Dieses wird dann verwendet, wenn über die Toolbar ein Film abgespielt werden soll.

- **Film Aufzeichnen** Die Sets die zum Aufzeichnen markiert sind, werden verwendet, wenn ein Film über die Toolbar gespeichert werden soll. Stehen mehrere zur Auswahl, wird in einem Dialog abgefragt, welches verwendet werden soll.

- **Abo** Die Sets die mit Abo markiert sind, werden verwendet, wenn ein Film als Abo gespeichert werden soll. Stehen mehrere zur Auswahl, wird in einem Dialog beim Anlegen des Abos abgefragt, welches verwendet werden soll. Meist reicht ein Programmset zum Aufzeichnen und das kann für "Film Aufzeichnen" und für "Abo" verwendet werden.

- **Button** Im Menü "Ansicht->weitere Videoplayer einblenden" kann ein Feld mit weiteren Button unter der Filmliste angezeigt werden. Programmsets die mit "Button" markiert sind, werden dann hier angezeigt. Beim Klick auf den Button wird dann das entsprechende Programmset mit der Film-URL gestartet. So lassen sich weiter Programmeinstellungen (zB. zum Konvertieren für best. Formate) hinterlegen und über die Button starten. Dafür ist auch die Einstellung einer Farbe (im Tab "Details") gedacht, die Button können eingefärbt werden.

Die Button werden in 4 Spalten angeordnet und die Reihenfolge der Programmsets legt dadurch die Position der Button fest. Der Name eines Programmsets wird als Beschriftung des Buttons (oder des Labels) verwendet. Es werden 3 Fälle unterschieden:
- Das Programmset hat keinen Namen: Es wird nichts angezeigt, ein leeres Feld.

- Das Programmset hat nur einen Namen, es sind aber keine Programme zugeordnet: Es wird ein Label angezeigt.

- Das Programmset hat einen Namen und es ist mind. ein Programm eingetragen: Es wird ein Button angezeigt. Beim Klick darauf wird das passende Programm dieses Programmsets gestartet.

Mindestens ein Programmset zum Abspielen und eins zum Aufzeichnen muss angelegt sein.

Export: Markierte Programmsets (auch mehrere) können damit in eine Datei exportiert werden. Mit "Programmset importieren" können diese dann wieder importiert werden.

### Programmset anlegen

![MV Sets](/images/anleitung/Einstellungen-Videoplayer-Sets_1.png)

Dieser Dialog ist über das Menü "Datei->Einstellungen" (OS X: "MediathekView->Einstellungen…") zu erreichen. Ein neues Programmset kann mit "+" oder indem man ein bestehendes dupliziert, angelegt werden.

Im Tab "Aussehen" kann das Aussehen des Buttons verändert werden.

Im Tab "Speicherziel" lassen sich der Zielpfad und der Zieldateiname ändern. "Zielpfad" und "Zieldateiname" sind nur für Aufnahmen wichtig. Der Zieldateiname kann auch auf eine bestimmte Zeichenlänge beschränkt werden.

Für den Zieldateinamen sind diese Parameter möglich:

`%D` Sendedatum des Films oder "heute", wenn Sendedatum leer

`%d` Sendezeit des Films oder "jetzt", wenn Sendezeit leer

`%H` "heute", aktuelles Datum

`%h` "jetzt", aktuelle Uhrzeit

Datum in der Form: `JJJJMMTT` z.B. `20090815` (15.08.2009)
Zeit in der Form: `SSMMss` z.B. `152059` (15:20:59)

`%1` Tag,

`%2` Monat,

`%3` Jahr vom Sendedatum des Films oder aktuellem Datum, wenn Sendedatum leer


`%4` Stunde,

`%5` Minute,

`%6` Sekunde von der Sendezeit des Films oder "jetzt", wenn Sendezeit leer


`%s` Sender des Films

`%T` Titel des Films

`%t` Thema des Films


`%N` Originaldateiname des Films (der kann sehr kryptisch und lang sein)

`%S` Suffix des Originaldateinamens des Films (z.B. "mp4")


`%i` Filmnummer (die ändert sich beim Neuladen der Filmliste!)

`%q` Qualität des Films ("HD", "H", "L")


`%Z` Hashwert der URL, z.B.: 1433245578 (vgl. https://de.wikipedia.org/wiki/Hashfunktion)

`%z` Hashwert der URL + Suffix, entspricht also: %Z.%S, z.B.: 1433245578.mp4


Damit kann man einen Namen z.B. so aufbauen:
`%H--%t-%T.mp4` -> _20131206--Doku-Titel_der_Doku.mp4_

`%H--%t-%T.%S` -> _20131206--Doku-Titel_der_Doku.xxx_ (hier wird die Originaldateiendung
verwendet)

Für jede Programmgruppe kann man Dateien angeben, die nicht als Stream sondern direkt heruntergeladen werden (das sind die meisten Filme in der Liste).
(Pfad und Dateiname werden dabei auch wie oben gebildet.)

Mögliche Angaben sind:

Präfix: http

Suffix: mp4,mp3,m4v,flv


Es werden so alle Filme deren URL mit "http" beginnt und mit "mp4", "mp3", "m4v" oder "flv" enden, direkt als Datei geladen und laufen nicht als Stream durch ein Programm. Das Präfix "http" ist dabei wichtig, da andere Protokolle nicht direkt geladen werden können.

Der Tab "Download" bietet erweiterte Einsellungen für den Download wie z.B. die standard Qualität.

### Programme einrichten

![MV Set Programme](/images/anleitung/Einstellungen-Videoplayer-Sets-Programme_1.png)

Dieser Dialog ist über das Menü "Datei->Einstellungen" (OS X: "MediathekView->Einstellungen…") zu erreichen. Einem Programmset kann man mit "+" oder indem man ein bestehendes Programm dupliziert, ein Programm hinzufügen.

Beim Suchen nach dem passenden Programm für einen Film (URL) wird von oben nach unten die Liste abgesucht. Das erste passende wird verwendet. Passt kein Programm, wird das letzte Programm in der Liste verwendet.

Der Name dient nur der Information. Mit dem Zieldateinamen kann ein Dateiname vorgegeben werden. Der wird dann nur verwendet, wenn das entsprechende Programm verwendet wird. Ist der Zieldateiname leer, wird der, des Programmsets verwendet. (Das ist für Windows wichtig, dass die Dateiendungen zum Dateiformat passen). Programm ist die Programmdatei mit Pfad.
Im Feld Schalter können Parameter angegeben werden, die beim Programmstart mit übergeben werden.

Diese Parameter sind möglich:

`%f` die URL des Films (Original-URL)

`%F` die URL des Films für den flvstreamer vorbereitet

`**` zwei Sterne werden durch den Zieldateinamen mit Pfad ersetzt

Zur Wiedergabe reicht meist ein `%f` als Parameter. Wichtig ist, dass für das Aufzeichnen die zwei Sterne angegeben werden müssen (als Zieldatei für den Film). Wenn der Pfad zum Aufzeichnen Leerzeichen enthält, können die zwei Sterne in Anführungszeichen gesetzt werden (aber nur unter Windows!).

Beispiel für den vlc zum Ansehen:

Programm: `/usr/bin/vlc`

Schalter: `%f`

Präfix und Suffix geben an, für welche Protokolle und Dateiendungen das Programm zuständig ist.

Mit der Checkbox "fehlgeschlagene Downloads wieder Starten" kann ein Download im Fehlerfall automatisch wieder gestartet werden. Das ist vor allem für den flvStreamer sinnvoll, der mit der Option _--resume_ fehlgeschlagene Downloads weiterführen kann. Damit es nicht zu endlosen Versuchen kommt, wird die Dateigröße kontrolliert. Wächst diese nicht, wird nicht wieder gestartet.

### Beispiel "Abspielen"

![MV Sets](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_6_1.png)

Dieser Dialog ist über das Menü "Datei->Einstellungen" (OS X: "MediathekView->Einstellungen…") zu erreichen. Mit "Plus" ein neues Programmset anlegen und mit der Maus markieren. Mit dem Button "Abspielen" als das Programm zum "Abspielen" markieren und den Namen ändern.

![MV Set Programme](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_7_1.png)

Im Tab "Hilfsprogramme" mit "Plus" ein neues Programm anlegen und die mit einem roten Punkt markierten Felder ändern.

Programm: `/usr/bin/vlc`

Schalter: `%f`

### Beispiel "speichern"

![MV Set Beispiel speichern](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_1_1.png)

Dieser Dialog ist über das Menü "Datei->Einstellungen" (OS X: "MediathekView->Einstellungen…") zu erreichen. Mit "Plus" ein neues Programmset anlegen und mit der Maus markieren. Die Checkbox "Speichern" muss selektiert sein, damit das Programmset zum Speichern verwendet wird. Den Namen ändern. 

![MV Set Beispiel speichern](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_2_1.png)

Im Tab "Speicherziel" im Feld: "Zielpfad" einen passenden Pfad eintragen (unter Windows: wenn er Leerzeichen enthält, in Anführungszeichen setzen) und einen Zieldateinamen angeben zB. `%t-%T-%N.mp4` (Thema-Titel-Originaldateiname.mp4). Bei Präfix: "http" und bei Suffix: "mp4,mp3,m4v,flv" eintragen.

![MV Set Beispiel speichern](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_3_1.png)

![MV Set Beispiel speichern](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_4_1.png)

![MV Set Beispiel speichern](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_5_1.png)

Mit "+" drei Programme anlegen und die folgenden Felder eintragen:

**Programm 1**

Zieldateiname: `%t-%T-%N.flv`

Programm: `---Pfad zum flvstreamer---`

Schalter: `%F --resume -o "**"`

Präfix: `rtmp`

"fehlgeschlagene Downloads .." anklicken


**Programm 2**

Zieldateiname: `%t-%T-%N.wmv`

Programm: `C:\Program Files (x86)\VideoLAN\VLC\vlc.exe`

Schalter: `%f :sout=#standard{access=file,mux=asf,dst="**"} -I "dummy" --play-and-exit`

Präfix: `mms://ndr`

Sufix: `wmv`


**Programm 3**

Zieldateiname: `%t-%T-%N.asf`

Programm: `C:\Program Files (x86)\VideoLAN\VLC\vlc.exe`

Schalter: `%f :sout=#standard{access=file,mux=asf,dst="**"} -I "dummy" --play-and-exit`

### Programmset importieren

![MV Programmset importieren](/images/anleitung/Einstellungen-Videoplayer-Import-Vorlagen_1.png)

Dieser Dialog ist über das Menü "Datei->Einstellungen" (OS X: "MediathekView->Einstellungen…") zu erreichen.

Mit dem Dialog "Setvorlagen" können Vorlagen für verschiedene Betriebssysteme importiert werden. Im Tab "Standardset" können die zwei Sets die beim ersten Programmstart angelegt wurden, ein weiteres mal angelegt werden. Im Tab "Set importieren" können beliebige Sets aus lokalen Dateien oder auch aus dem Internet importiert werden.

Beim Import werden die neuen Sets hinzugefügt, die bestehenden werden dabei nicht verändert.

Wenn jemand interessante Sets hat, die sich als Vorlagen eignen, kann er uns diese sehr gerne über das Forum teilen.

## Einstellungen
Windows und Linux: Das Fenster mit den Einstellungen erreicht man im Menü unter "Datei -> Einstellungen" oder mit "F4".
OS X: Menü "MediathekView -> Einstellungen…" oder durch Drücken von "cmd+," (Command-Taste+Komma).

Im Folgenden wird nur eine Auswahl von Einstellungen beschrieben. Man beachte, dass zu vielen Einstellungen über den Hilfe-Button (HILFE oder Rettungsring-Symbol) direkt an der entsprechenden Stelle Erklärungen abgegeben werden.

### Allgemein
![MediathekView Einstellungen - Allgemein](/images/anleitung/MV_Einstellungen_Allgemein.png)

**Tab-Verhalten**: Beim Tab verhalten kann z.B. eingestellt werden, ob die Tabs oben oder Links angezeigt werden und ob Icons angezeigt werden sollen

**Download**: Bei Download kann der für den Download zu verwendende User-Agent eingestellt werden. Für ORF downloads sollte am besten ein anderer als "MediathekView" verwendet werden.

**HTTP-Proxy**: Hier können Parameter zur Verwendung eines HTTP-Proxys angegeben werden. Nach dem setzen der Parameter muss MediathekView neu gestartet werden damit sie aktiv werden.

**Datenbank**: Bei dieser Option kann die bereinigung der Datenbank während der Laufzeit aktiviert werden. Nach dem setzen der Option muss MediathekView neu gestartet werden damit die Änderung aktiv wird.

**Speicherung der Filmliste**: Hier kann aktiviert werden ob die Filmliste in einem Speicherplatzsparenden oder in einem les- und editierbarem Format gespeichert werden soll.

**Programm ins Tray minimieren**: Wird diese Option aktivieren wird MediathekView nicht in die Fensterleiste minimiert sondern in ein Tray Icon.

**Senderlogos von Wikipedia verwenden**: Ist diese Option aktiv werden die Senderlogos von Wikipedia geladen.

### Benachrichtigungen

Hier lassen sich Benachrichtigungen aktivieren

### Erweitert
![MediathekView Einstellungen - Erweitert](/images/anleitung/MV_Einstellungen_Erweitert.png)

**User-Agent**: Diese Zeichenkette wird beim Download der Filme mitübertragen. Jeder Webbrowser schickt seinen Browsernamen mit, wenn er Webseiten lädt. Dieser Name kann hier verändert werden. Bestimmte Webseiten liefern keine Informationen, wenn der Name fehlt. In der "Auto-Einstellung" wird der Programmname und die Programmversion verwendet, es kann aber auch ein eigener Name angegeben werden oder leer bleiben.

**Webbrowser zum Öffnen von URLs:**
Wenn das Programm versucht, eine URL mit dem Webbrowser zu öffnen und die Standardanwendung nicht startet, kann man damit ein Programm (z.B. Firefox, InternetExplorer, Safari) auswählen, mit dem URLs geöffnet werden sollen.

### Filmliste laden
![MediathekView Einstellungen - Filmliste](/images/anleitung/MV_Einstellungen_Filmliste.png)

**Filmliste nur manuell laden:** Die Filmliste wird nicht mehr automatisch beim Programmstart (default) geladen, sondern wird nur noch manuell über den Button "Neue Filmliste laden" geladen. Dabei wird ein Dialog angezeigt, welcher es ermöglicht, aus einer Auswahl eine URL (oder Datei) zum Laden der Filmliste anzugeben. Auf diese Art können auch vom Benutzer archivierte (alte) Filmlisten geladen werden.

### Datei- und Pfadname
![MediathekView Einstellungen - Ersetzungstabelle](/images/anleitung/MV_Einstellungen_Ersetzungstabelle.png)

**Eigene Einstellungen**: Die Ersetzungstabelle erlaubt es, benutzerdefiniert spezifische Zeichen zu ersetzen, z.B. Leerschläge durch Unterstriche (" " -> "\_") oder typographische durch gerade Anführungszeichen („ -> "). Viele potenziell unerwünschte Zeichen können jedoch auch automatisch durch die Option "nur ASCII-Zeichen verwenden" ersetzt, z.B. Umlaute ("ö" -> "oe").
Achtung: Unter OS X und Linux muss die Ersetzungstabelle eingeschaltet sein (d.h. es dürfen keine Leerzeichen erlaubt werden), damit das Hilfsprogramm FFmpeg (Avconv) keine fehlerhaften Downloads bei SRF- und gewissen WDR-Rockpalast-Sendungen ausgibt.

### Download
![MediathekView Einstellungen - Download](/images/anleitung/MV_Einstellungen_Download.png)

**Downloads gleichzeitig laden:** Damit kann festgelegt werden, wie viele Downloads gleichzeitig laufen können. Als festgelegte Obergrenze werden maximal zwei Downloads pro Server gestartet. Wird die maximale Anzahl auf einen Wert größer zwei gesetzt, werden die Downloads so gestartet, dass nie mehr als 2 Downloads pro Server laufen.

**Downloadgeschwindigkeit begrenzen:** Diese Option ist unter Umständen hilfreich, wenn eine schnelle Verbindung (möglicherweise durch den Provider oder Website-Server (z.B. ARTE)) übermässig gedrosselt wird. Eine selbst auferlegte Begrenzung z.B. auf 500 kByte/s würde also potenziell verhindern, dass von anderswo stärker gedrosselt wird (z.B. auf unter 100 kByte/s). Der eingestellte Wert gilt pro Download, ist als keine Summenwert für alle Downloads zusammen. Der Default-Wert von MeditathekView für diese Einstellung ist "aus".

## Hilfe
![MediathekView Hilfe - Logfile erstellen](/images/anleitung/MV_Logfile-erstellen.png)

Im Menü 'Hilfe' kann ein Logfile erstellt werden. Das Logfile wird zur Fehlersuche benötigt. Ein aktuelles Logfile gehört obligatorisch als Anlage zu jeder Fehlermeldung, die im Forum gepostet wird.

MediathekView zeichnet Systemmeldungen und Meldungen der Hilfsprogramme jeweils temporär auf. Wenn ein Logfile über das Menü "Hilfe" erzeugt wird, wird der aktuelle Stand der Meldungen und die Programmeinstellungen im Logfile festgehalten. Deshalb ist der Zeitpunkt zu beachten, wann man das Logfile erstellt:
Zur Erstellung des Logfiles sollte man MediathekView neu starten, die Aktion, bei der der Fehler auftrat, wiederholen und dann das Logfile erstellen. Das Logfile wird dadurch übersichtlicher.
Wer will, kann vor dem Hochladen des Logfiles seinen Benutzernamen im Logfile mit einem Texteditor durch XXX ersetzen. Das Kopieren des Inhalts des Fensters "Meldungen" ersetzt nicht das Logfile.
Wer sein Programm überhaupt nicht zum Laufen bringt, kann kein Logfile erstellen. Für solche Fälle gibt es hier eine Lösung.
