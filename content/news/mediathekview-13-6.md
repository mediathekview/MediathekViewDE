+++
type = "news"
title = "MediathekView 13.6.0 released"
author = "Nicklas Wiegandt"
date = "2020-07-22"
keywords = ["mediathekview", "release", "13.6.0", "13.6"] # HTML Schlüsselwörter
tags = ["Allgemein"]
+++

**[MediathekView 13.6.0](https://mediathekview.de/download/)** ist da. Die Möglichkeit zum abspeichern mehrerer Filter kehrt zurück. Ein Auto-Updater wurde hinzugefügt. Zusätzlich gibt es eine experimentelle ARM / Rapsberry Pi Version, so wie eine ebenfalls experimentelle Windows 32bit Version und weitere [Neuerungen](https://mediathekview.de/changelog/13-6-0/).

## Allgemein

Aufgrund der zunehmenden größe der Filmliste benötigt MediathekView nun mindestens 640 Megabyte Arbeitsspeicher. Besonders für Systeme ohne SSD wird von einem Berieb mit so wenig Arbeitsspeicher allerdings abgeraten. Bis zu einer Speicherzuweisung von 768 Megabyte Arbeitsspeicher wird intern eine Datenbank verwendet, welche die Geschwindigkeit des Programms beim Start drastisch reduziert.
Wir haben aus diesem Grund die standardmäßige Speicherzuweisung auf 2 Gigabyte Arbeitsspeicher erhöht. Nur für die experimentelle ARM / Raspberry Pi Version haben wir die standardmäßige Speicherzuweisung auf 1280 Megabyte gesetzt.

Das mitgelieferte AdoptOpenJDK wurde auf Version 14.0.2+12 geupdatet.


## Auto-Updater 

![Der Auto-Updater](/images/news/mediathekview-13_6-linux-updater.png)
<em>Der neue Auto-Updater</em>

Bei allen MediathekView Paketen, außer dem für Mac, ist nun eine Auto-Update funktion integriert. Beim Start von MediathekView überprüft diese ob eine neue Version für das jeweilige Paket vorhanden ist. Wenn dies der Fall ist wird durch einen Dialog darüber informiert und angeboten die neue Version direkt zu laden.


## Multiple Filter

![Der geänderte Filterdialog mit der neuen Filterauswahl](/images/news/mediathekview-13_6-linux-filter-dialog.png)
<em>Der überarbeitete Filterdialog</em>

Im Filterdialog wurde eine Filterauswahl so wie Buttons zum Hinzufügen und entfernen von Filtern eingefügt. Wenn vorhanden wird der Filter aus der vorherigen Version als "Alter Filter" migriert. Es können beliebig viele Filter über den Button `+` angelegt werden es muss aber immer mindestens ein Filter vorhanden sein. Gelöscht werden können Filter über den Button `-`. Filter können auch umbenannt werden hierzu kann der Name direkt in der Filterauswahl bearbeitet werden.

**Hinweis:** In dieser Version werden die Filteroptionen `Sender` und `Thema` nocht nicht mit abgespeichert.

![Das Hauptfenster mit der neuen Filterauswahl](/images/news/mediathekview-13_6-linux-filter-auswahl-toolbar.png)
<em>Das Hauptfenster mit der neuen Filterauswahl</em>

Zusätzlich zur Filterauswahl im Filterdialog wurde auch noch eine Filterauswahl in der Hauptfenster-Toolbar eingefügt.

## Experimentelle Pakete für Windows 32 bit und ARM / Raspberry Pi

![MediathekView auf dem Raspberry Pi](/images/news/mediathekview-13_6-arm.png)
<em>MediathekView auf dem Raspberry Pi</em>

Für Windows 32bit und ARM / Raspberry Pi steht nunr jeweils ein experimentelles Paket zur Verfügung. Im Gegensatz zu den anderen Paketen wird hierbei nicht AdoptOpenJDK sondern Liberica OpenJDK in Version 14.0.2+13 mitgeliefert.

Das Windwos 32bit Paket wurde in einer Windows 7 32bit VM so wie von dem User [me-like-cookies](https://github.com/mediathekview/MediathekView/issues/520) (Vielen Dank dafür!) getestet.

Das Paket für den Raspberry Pi wurde auf einem neuen Raspberry Pi 4B mit 8 GB RAM und Raspbian 32bit Kernel 4.19.118-v7l+ getestet.

Trotz der Tests kann es natürlich zu unerwarteten Fehlern kommen. Bitte wendet euch dann an das [Forum](https://forum.mediathekview.de) und gebt mit an welches Paket auf was für einem System ihr welches Problem habt.