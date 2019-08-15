+++
description = ""
date = "2019-08-13T20:00:00+01:00"
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
Das Programm MediathekView (abgekürzt: MV) ist eine Art Suchmaschine für Filme der Mediatheken verschiedener öffentlich-rechtlicher Sender. MediathekView erlaubt es, sowohl Beiträge aus den Mediatheken direkt (mit VLC Media Player oder mit einem Programm eigener Wahl) abzuspielen oder herunterzuladen als auch Sendereihen/Serien zu abonnieren. MediathekView kann nur Sendungen herunterladen, die in den Mediatheken der Sender selbst noch als Videos angeboten werden.

## Installation

Auf der Webseite finden sich unter [Downloads](/download) folgende Pakete:
- Windows Installation (Exe)
- Windows ohne Installation (Zip)
- Linux Installation (Deb, RPM, Sh)
- Linux ohne Installation (tar.gz)
- OS X Installation (Dmg)

Zur Installation das passende Paket herunterladen und ausführen. Ein Dialog führt durch die Installation.
Das Programm besteht aus dem Programm Ordner und dem Ordner ".mediathek3" in dem die Einstellungen gespeichert werden. Der Einstellungs Ordner wird standard mäßig im Benutzerverzeichnis abgelegt. Der Programm Ordner wird im Installationsdialog ausgewählt bzw. kann beim Entpacken des Archivs gewählt werden. Das Debain und das RPM Paket werden nach `/opt/MediathekView` installiert.

### Systemvoraussetzungen
Unterstützt wird Windows x64 (7, 8, 10), Linux x64 sowie Mac OS X (ab Version 10.10). Es werden keine 32 Bit Betribssysteme unterstützt da OpenJFX in der eingesetzten Version nicht für 32 Bit zur Verfügung steht. MediathekView benötigt keine Java Installation mehr da diese für alle Betriebssysteme mitgeliefert wird.


### Hilfsprogramme zum Abspielen und Aufzeichnen von Sendungen
Zum Ansehen und Aufzeichnen werden geeignete Zusatzprogramme benötigt. MediathekView ist konfiguriert für die Verwendung von **VLC Media Player** (zum Abspielen und Aufzeichnen von Sendungen) sowie **FFmpeg** zum Aufzeichnen von Sendungen.

Für Windows und OS X ist FFmpeg bereits im Programmpaket von MediathekView enthalten (im Ordner "bin"), es muss nur der VLC Media Player installiert sein. Sinnvollerweise wird vor dem ersten Start von MediathekView zuerst der [VLC Media Player](http://www.videolan.org/) installiert.

Für Linux müssen der VLC Media Player und [FFmpeg](http://www.ffmpeg.org/) durch die Paketverwaltung installiert werden. Statt FFmpeg kann auch **avconv** (Bestandteil des [libav](http://libav.org/)-Projekts) verwendet werden. Bei OpenSuse müssen zusätzlich zum VLC Media Player auch die **vlc-codecs** installiert werden.

Beim ersten Start von MediathekView werden bereits zwei Programmsets mit den zwei Hilfsprogrammen VLC Media Player und FFmpeg angelegt. Damit können alle Filme angesehen und aufgezeichnet werden.

### Linux

#### Erster Start

Beim ersten Start von MediathekView werden bereits zwei Programmsets mit den zwei Hilfsprogrammen VLC Media Player und FFmpeg angelegt. Damit können alle Filme angesehen und aufgezeichnet werden.

Wurde statt ffmpeg **libav-tools** verwendet, muss beim ersten Start statt ffmpeg **avconv** ausgewählt werden (Pfad meist: "/usr/bin/avconv")

#### Installation

Da wir aktuell kein eigenes Repository betreiben können wir von der Installation aus anderen Quellen als von der Webseite nur abraten.
MediathekView kann entweder über das Deb, RPM, Sh Paket installiert werden oder durch entpacken des tar.gz Archivs.

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
MediathekView kann entweder über die Exe installiert werden oder das Zip entpackt werden.
Bei Verwendung der Exe führt ein Dialog durch die Installation und anschließend finden sich Einträge für MediathekView im Menü.
Das entpacken des Zip Archivs erfolgt so:
![MediathekView extrahieren Schritt 1](/images/anleitung/MV_Entzippen_1.jpg)
![MediathekView extrahieren Schritt 2](/images/anleitung/MV_Entzippen_2.png)

1. die heruntergeladene ZIP-Datei in einen Ordner entpacken
2. den entpackten Ordner ins Benutzerverzeichnis verschieben
3. den eben verschobenen MediathekView-Ordner öffnen, die Datei "MediathekView.exe" ansteuern und per Rechtsklick in "Senden an" eine Verknüpfung auf den Desktop legen. Von dort aus kann MediathekView dann jeweils gestartet werden.
4. die ZIP-Datei kann nach dem Entpacken gelöscht werden

### Update

Die Installations Pakete können auch zum Updaten von MediathekView verwendet werden, auch hier führt wieder ein Dialog durch das Update.

**Mac**: Das Update erfolgt dadurch, dass man die neue Version von MediathekView in den Programmordner zieht, wodurch die alte ersetzt wird.

#### Manuelles update

Das manuelle Update von MediathekView geschieht dadurch, dass man das heruntergeladene Archiv (ZIP bzw. tar.gz) der neuen Version in das selbe Verzeichnis entpackt, in dem sich die alte Version befindet. Anschließend kann man von der Startdatei im neuen Programmordner (z.B. "MediathekView_13_2") eine Desktopverknüpfung erstellen (vgl. Abschnitt oben). Bevor man den alten Programmordner (z.B. "MediathekView_13_3") löscht, sollte man allfällige selbst installierte Hilfsprogramme und Skripte transferieren. Die Einstellungen der vorhergehenden Programmversion werden von der neuen Version verwendet; es gibt also keinen neuen Einrichtungsdialog.

### Deinstallation
Den Installations Paketen liegt auch eine Ausführbare Datei zur Deinstallations. Bei einer manuellen Installation reicht es, den Programm Ordner zu entfernen. Sollen auch die Einstellungen entfernt werden muss das entsprechende Verzeichnis gelöscht werden. Dies gilt für alle Pakete, der Deinstaller löscht die Einstellungen nicht. Der Einstellungs Ordner ".mediathek3" findet sich in den "Eigenen Dateien" respektive im Home-Verzeichnis. 
Unter OS X und anderen Unix-Systemen ist der Ordner ".mediathek3" unsichtbar, er kann jedoch durch Eingabe (Kopieren) des folgenden Befehls im Programm Terminal (Programme/Dienstprogramme/Terminal) gelöscht werden:
```
rm -R ~/.mediathek3
```

## Starten
Bei Verwendung der Installations Pakete finden Sich Einträge für MediathekView im App-Menü. Wurde das Archiv entpackt oder wird der Programm Ordner direkt angesteuert finden sich in diesem Ausführbare Datein für das jeweilige Betriebssystem.  Für Windows (MediathekView.exe), Linux (MediathekView.sh) mit welchen MediathekView direkt gestartet werden kann. Für OS X 10.7.3 und neuer besteht eine eigenständige Applikation (MediathekView.app); für OS X 10.6 liegt die Startdatei "MediathekView.command" vor.

Ansonsten kann man die Programmdatei auch so starten:

- Windows: Doppelklick auf "MediathekView-ipv4.exe" oder "MediathekView.jar"
- Linux (in der Konsole): `java -Xmx1G -jar MediathekView.jar`

Startet das Programm nicht, gibt es Hilfe in der [FAQ](/FAQ).

### Starten im portablen Modus (MediathekView Portable)
Für den portablen Einsatz z.B. auf einem USB-Stick stehen im Ordner entsprechende Startdateien zur Verfügung (z.B. "MediathekView__Portable.exe" für Windows). Diese Startdateien dürfen nicht aus dem Ordner verschoben werden. Beim portablen Start wird der Ordner "Einstellungen" im MediathekView-Programmordner angelegt. Da hinein können, falls gewünscht, die bisherigen Einstellungen, also der Ordner ".mediathek3" aus dem Benutzerverzeichnis kopiert werden.

Unter OS X ist ein portabler Start nur möglich, wenn man die ZIP-Datei ohne die Angabe "OSX" im Dateinamen [heruntergeladen](/download) hat. Interessierte können den Code für die Startdateien für OS X und Linux direkt den Startdateien selbst entnehmen.

### Starten mit zusätzlichen Parametern
```
java -Xmx1G -jar MediathekView.jar [Pfad] [Parameter]
java -Xmx1G -jar MediathekView.jar c:\temp -M
```
Nach dem obigen Schema kann das Programm auch mit zusätzlichen Parametern gestartet werden.
```
java -Xmx1G -jar MediathekView.jar Einstellungen/.mediathek3
```
Das Programm verwendet – durch einen relativen Pfad – das Verzeichnis "Einstellungen" im MediathekView-Verzeichnis auf dem USB-Stick (der Ordner "Einstellungen" muss zuerst erstellt werden). Hinweis: Die Programmeinstellungen (Filmliste, Einstellungen, gesehene Filme) werden standardmässig im Home-Verzeichnis (Benutzer-Verzeichnis) in einem Ordner ".mediathek3" gespeichert.
```
java -Xmx1G -jar MediathekView.jar -M
```
Das Programm startet mit einem maximierten Fenster:
```
java -jar MediathekView.jar -v
```
Das Programm gibt nur die Versionsnummer aus.

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
### Erstellen eines Abos

Abos sind für halbautomatisiertes Herunterladen von Sendereihen und Serien gedacht. In Abos werden Suchkriterien gespeichert, und zwar für Sendungen, die erst später in der Filmliste auftauchen werden.

Abos können auf 2. Varianten angelegt werden:

1. im Tab "Filme" per Rechtsklick (Kontextmenü) auf einen Eintrag in der Filmliste oder
2. über das Menü "Abos", wobei man sich im Tab "Abos" befinden muss und sämtlichen Inhalt (Abokriterien) selbst festlegen muss.

Bei Variante 1 stehen im Kontextmenü stehen drei Optionen offen:

a. Abo mit Sender und Thema anlegen

b. Abo mit Sender und Thema und Titel anlegen

c. Abo aus Filter anlegen

Die Abofelder beziehen sich auf die Spalten der Filmliste bzw. auf die aktuelle Filterauswahl:

- Sender;
- Thema sind Gruppenbezeichnungen, die von den Sendern selbst stammen;
- Titel ist meistens variabel.

Abofelder ohne Inhalt werden bei der Suche nicht berücksichtigt; der Inhalt dieser Spalten in der Filmliste kann beliebig sein. Die Option a ist die Standardvariante für Sendereihen bei z.B. ARD und ZDF. Wenn das Feld "Titel" auch einen Inhalt hätte, dann würde nur die Sendung, die dazu passt, gefunden werden. Wenn man das Feld "Sender" leer lässt, kann man senderübergreifend suchen, muss dann aber mit einer großen Trefferzahl rechnen. Dem könnte man aber begegnen mit einem [Regex](#verwenden-von-regex) im Feld "Titel".

Bei Sendereihen-Folgen muss man bei ARTE und 3Sat meistens das Feld "Titel" in das Abo einbeziehen. Serienteile sind oft wie folgt durchnummeriert: (1/5), (2/5) ...
Im Abofenster wird folglich das Feld"Titel" editiert: Wenn man bei nummerierten Folgen den Klammerausdruck entfernt, so dass nur der nackte Titel übrig bleibt, dann werden alle 5 Teile gefunden.

### Abos anpassen oder ausschalten sowie Herunterladen von abonnierten Sendungen

Nachdem ein Abo angelegt wurde, ist im Tab "Abos" ein Eintrag für das eben erstellte Abo ersichtlich. Von hier aus lässt sich ein Abo auch nachträglich editieren (z.B. anderer Zielordner, Suchkriterien anpassen), und zwar per Doppelklick auf den Eintrag in der Aboliste oder per Rechtsklick. (Ein anderer Zielordner wird aber nur benutzt, wenn im zugehörigen Set unter "Speicherziel" die Option "Unterordner mit Thema anlegen" (Checkbox) nicht deaktiviert wurde!)

Nach dem Einrichten eines Abos werden alle neuen Sendungen, die von den Suchkriterien eines Abos erfasst werden, in die Download-Liste (Tab "Downloads") eingetragen. Von dort können die Downloads gestartet werden; es erfolgt also kein automatischer Download. In den Programmeinstellungen (Menü: "Datei -> Einstellungen" bzw. unter OS X MediathekView -> Einstellungen…) kann jedoch unter "Einstellungen -> Erweitert" festgelegt werden, dass beim Neuladen der Filmliste der Download der Abos automatisch gestartet wird.
![MediathekView Abo Fenster](/images/anleitung/MV_Abo-Fenster.jpg)

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

![MV Sets](/images/anleitung/Einstellungen-Videoplayer-Sets_1.jpg)

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

![MV Sets](/images/anleitung/Einstellungen-Videoplayer-Sets_1.jpg)

Dieser Dialog ist über das Menü "Datei->Einstellungen" (OS X: "MediathekView->Einstellungen…") zu erreichen. Ein neues Programmset kann mit "+" oder indem man ein bestehendes dupliziert, angelegt werden.

![MV Set anlegen](/images/anleitung/Einstellungen-Videoplayer-Sets-Details_1.jpg)

Im Tab "Details" können für das markierte Programmset Einstellungen vorgenommen werden. "Zielpfad" und "Zieldateiname" sind nur für Aufnahmen wichtig. Der Zieldateiname kann auch auf eine bestimmte Zeichenlänge beschränkt werden.

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

### Programme einrichten

![MV Set Programme](/images/anleitung/Einstellungen-Videoplayer-Sets-Programme_1.jpg)

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

![MV Sets](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_6_1.jpg)

Dieser Dialog ist über das Menü "Datei->Einstellungen" (OS X: "MediathekView->Einstellungen…") zu erreichen. Mit "Plus" ein neues Programmset anlegen und mit der Maus markieren. Mit dem Button "Abspielen" als das Programm zum "Abspielen" markieren.

![MV Set Details](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_7_1.jpg)

Im Tab "Details" den Namen ändern.

![MV Set Programme](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_8_1.jpg)

Mit "Plus" ein neues Programm anlegen und die mit einem roten Punkt markierten Felder ändern.

Programm: `/usr/bin/vlc`

Schalter: `%f`

### Beispiel "speichern"

![MV Set Beispiel speichern](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_1_1.jpg)

Dieser Dialog ist über das Menü "Datei->Einstellungen" (OS X: "MediathekView->Einstellungen…") zu erreichen. Mit "Plus" ein neues Programmset anlegen und mit der Maus markieren. Die Checkbox "Speichern" muss selektiert sein, damit das Programmset zum Speichern verwendet wird.

![MV Set Beispiel speichern](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_2_1.jpg)

Im Tab "Details" den Namen ändern, im Feld: "Zielpfad" einen passenden Pfad eintragen (unter Windows: wenn er Leerzeichen enthält, in Anführungszeichen setzen) und einen Zieldateinamen angeben zB. `%t-%T-%N.mp4` (Thema-Titel-Originaldateiname.mp4). Bei Präfix: "http" und bei Suffix: "mp4,mp3,m4v,flv" eintragen.

![MV Set Beispiel speichern](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_3_1.jpg)

![MV Set Beispiel speichern](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_4_1.jpg)

![MV Set Beispiel speichern](/images/anleitung/Einstellungen-Videoplayer-Sets_Beispiel_5_1.jpg)

Mit "+" drei Programme anlegen und die rot markierten Felder eintragen:

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

![MV Programmset importieren](/images/anleitung/Einstellungen-Videoplayer-Import-Vorlagen_1.jpg)

Dieser Dialog ist über das Menü "Datei->Einstellungen" (OS X: "MediathekView->Einstellungen…") zu erreichen.

Mit dem Dialog "Setvorlagen" können Vorlagen für verschiedene Betriebssysteme importiert werden. Im Tab "Standardset" können die zwei Sets die beim ersten Programmstart angelegt wurden, ein weiteres mal angelegt werden. Im Tab "Set importieren" können beliebige Sets aus lokalen Dateien oder auch aus dem Internet importiert werden.

Beim Import werden die neuen Sets hinzugefügt, die bestehenden werden dabei nicht verändert.

Wenn jemand interessante Sets hat, die sich als Vorlagen eignen, kann er uns diese sehr gerne über das Forum teilen.

## Einstellungen
Windows und Linux: Das Fenster mit den Einstellungen erreicht man im Menü unter "Datei -> Einstellungen" oder mit "F4".
OS X: Menü "MediathekView -> Einstellungen…" oder durch Drücken von "cmd+," (Command-Taste+Komma).

Im Folgenden wird nur eine Auswahl von Einstellungen beschrieben. Man beachte, dass zu vielen Einstellungen über den Hilfe-Button (HILFE oder Rettungsring-Symbol) direkt an der entsprechenden Stelle Erklärungen abgegeben werden.

### Allgemein
![MediathekView Einstellungen - Allgemein](/images/anleitung/MV_Einstellungen_Allgemein.jpg)

**Echtzeitsuche im Filter**: Diese Option ermöglicht es, dass bei der Eingabe eines Zeichens in ein Filterfeld, die Suche sofort gestartet wird und nicht erst nach einem "Return". Wird die Filmliste zeitlich eingeschränkt (z.B. nur 10 Tage) reagiert die Suche flotter.

**nur die Filme der letzten Tage laden: xx** Reduziert den Umfang der Filmliste auf die Zeitspanne von xx Tagen (z.B. 2 Tage), was auch Rechnern mit geringem Arbeitsspeicher ein flüssiges Arbeiten erlaubt. Natürlich können dann mit dieser Einstellung auch nur Sendungen der letzten xx Tage gefunden werden.

**Programmupdate:** Damit kann das Programm überprüfen, ob es eine neue Version gibt. Dabei wird die Datei http://res.mediathekview.de/prog-info.xml heruntergeladen und die darin enthaltene Versionsnummer mit der des Programms verglichen. Unterscheiden sich diese Nummern, wird das mit der URL zum Download der neuen Version angezeigt. Es werden dabei keine Daten (Seriennummer oder ähnliches) übertragen. Das Programm wird auch nicht automatisch aktualisiert. Ist diese Funktion eingeschaltet, wird die Überprüfung einmal täglich beim ersten Start durchgeführt.

### Erweitert
![MediathekView Einstellungen - Erweitert](/images/anleitung/MV_Einstellungen_Erweitert.jpg)

**User-Agent**: Diese Zeichenkette wird beim Download der Filme mitübertragen. Jeder Webbrowser schickt seinen Browsernamen mit, wenn er Webseiten lädt. Dieser Name kann hier verändert werden. Bestimmte Webseiten liefern keine Informationen, wenn der Name fehlt. In der "Auto-Einstellung" wird der Programmname und die Programmversion verwendet, es kann aber auch ein eigener Name angegeben werden oder leer bleiben.

**Webbrowser zum Öffnen von URLs:**
Wenn das Programm versucht, eine URL mit dem Webbrowser zu öffnen und die Standardanwendung nicht startet, kann man damit ein Programm (z.B. Firefox, InternetExplorer, Safari) auswählen, mit dem URLs geöffnet werden sollen.

### Filmliste laden
![MediathekView Einstellungen - Filmliste](/images/anleitung/MV_Einstellungen_Filmliste.jpg)

**Filmliste nur manuell laden:** Die Filmliste wird nicht mehr automatisch beim Programmstart (default) geladen, sondern wird nur noch manuell über den Button "Neue Filmliste laden" geladen. Dabei wird ein Dialog angezeigt, welcher es ermöglicht, aus einer Auswahl eine URL (oder Datei) zum Laden der Filmliste anzugeben. Auf diese Art können auch vom Benutzer archivierte (alte) Filmlisten geladen werden.

### Datei- und Pfadname
![MediathekView Einstellungen - Ersetzungstabelle](/images/anleitung/MV_Einstellungen_Ersetzungstabelle.jpg)

**Eigene Einstellungen**: Die Ersetzungstabelle erlaubt es, benutzerdefiniert spezifische Zeichen zu ersetzen, z.B. Leerschläge durch Unterstriche (" " -> "\_") oder typographische durch gerade Anführungszeichen („ -> "). Viele potenziell unerwünschte Zeichen können jedoch auch automatisch durch die Option "nur ASCII-Zeichen verwenden" ersetzt, z.B. Umlaute ("ö" -> "oe").
Achtung: Unter OS X und Linux muss die Ersetzungstabelle eingeschaltet sein (d.h. es dürfen keine Leerzeichen erlaubt werden), damit das Hilfsprogramm FFmpeg (Avconv) keine fehlerhaften Downloads bei SRF- und gewissen WDR-Rockpalast-Sendungen ausgibt.

### Download
![MediathekView Einstellungen - Download](/images/anleitung/MV_Einstellungen_Download.jpg)

**Benachrichtigung anzeigen:** Damit erfolgt eine Meldung, dass ein Download erfolgreich oder fehlerhaft abgeschlossen wurde.

**Downloads gleichzeitig laden:** Damit kann festgelegt werden, wie viele Downloads gleichzeitig laufen können. Als festgelegte Obergrenze werden maximal zwei Downloads pro Server gestartet. Wird die maximale Anzahl auf einen Wert größer zwei gesetzt, werden die Downloads so gestartet, dass nie mehr als 2 Downloads pro Server laufen.

**Downloadgeschwindigkeit begrenzen:** Diese Option ist unter Umständen hilfreich, wenn eine schnelle Verbindung (möglicherweise durch den Provider oder Website-Server (z.B. ARTE)) übermässig gedrosselt wird. Eine selbst auferlegte Begrenzung z.B. auf 500 kByte/s würde also potenziell verhindern, dass von anderswo stärker gedrosselt wird (z.B. auf unter 100 kByte/s). Der eingestellte Wert gilt pro Download, ist als keine Summenwert für alle Downloads zusammen. Der Default-Wert von MeditathekView für diese Einstellung ist "aus".

### Set bearbeiten
![MediathekView Einstellungen - Set bearbeiten](/images/anleitung/MV_Zielpfad-aendern.png)

**Zielpfad:** Hier kann das Standard-Download-Verzeichnis geändert werden.

## Hilfe
![MediathekView Hilfe - Logfile erstellen](/images/anleitung/MV_Logfile-erstellen.png)

Im Menü 'Hilfe' kann ein Logfile erstellt werden. Das Logfile wird zur Fehlersuche benötigt. Ein aktuelles Logfile gehört obligatorisch als Anlage zu jeder Fehlermeldung, die im Forum gepostet wird.

MediathekView zeichnet Systemmeldungen und Meldungen der Hilfsprogramme jeweils temporär auf. Wenn ein Logfile über das Menü "Hilfe" erzeugt wird, wird der aktuelle Stand der Meldungen und die Programmeinstellungen im Logfile festgehalten. Deshalb ist der Zeitpunkt zu beachten, wann man das Logfile erstellt:
Zur Erstellung des Logfiles sollte man MediathekView neu starten, die Aktion, bei der der Fehler auftrat, wiederholen und dann das Logfile erstellen. Das Logfile wird dadurch übersichtlicher.
Wer will, kann vor dem Hochladen des Logfiles seinen Benutzernamen im Logfile mit einem Texteditor durch XXX ersetzen. Das Kopieren des Inhalts des Fensters "Meldungen" ersetzt nicht das Logfile.
Wer sein Programm überhaupt nicht zum Laufen bringt, kann kein Logfile erstellen. Für solche Fälle gibt es hier eine Lösung.
