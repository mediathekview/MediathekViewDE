+++ type = "news" title = "Endlich mehr ZDF und immer auf dem neusten Stand" author = "Nicklas2751" date = "2016-12-06" keywords = ["zdf", "crawler", "nightly", "snapshot", "entwicklungsstand"] # HTML Schlüsselwörter tags = ["Allgemein"] +++

Der Februar beginnt mit zwei guten neuen Nachrichten. Die erste gute Nachricht für alle testfreudigen Nutzer: Es gibt nun sog. Nightly-Builds, also tagesaktuelle Versionen von MediathekView mit dem jeweils aktuellen Entwicklungsstand. Die zweite Nachricht richtet sich an alle Nutzer, die in letzter Zeit Sendungen vom ZDF vermisst haben: Die Umbauarbeiten am ZDF-Crawler wurden erfolgreich abgeschlossen.

## Nightly-Builds

Mit den Nightly-Builds bietet das MetiathekView Team allen probierfreudigen Nutzern die Möglichkeit, MediathekView mit dem tagesaktuellen Entwicklungsstand auszuprobieren. Herunterladen kann man die Nightly-Builds unter [Downloads -> Nightly](https://download.mediathekview.de/unstabil/). Wir möchten an dieser Stelle nochmals darauf hinweisen, dass es sich hierbei um Versionen handelt, die sich zu diesem Zeitpunkt noch in der Entwicklung befinden. Das heißt, diese Versionen sind noch nicht getestet und die Wahrscheinlichkeit, dass Fehler auftreten, ist relativ hoch. Aus diesem Grund sollten diese Versionen mit Vorsicht genutzt werden und ihr solltet eure Einstellungen o.Ä. auf jeden Fall vorher sichern, damit diese bei einem schwerwiegenden Fehler nicht verloren gehen können.

Wenn ihr Bugs findet, meldet diese bitte im [Forum unter "Fragen, Hilfe, Kritik" -> "Nightly"](https://forum.mediathekview.de/category/4/fragen-hilfe-kritik). Beachtet hierbei bitte die [Anleitung zum Fehlermelden](https://forum.mediathekview.de/topic/137/anleitung-fehler-melden) für die Nightlies.

_Besonderer Dank geht hierbei an [Alex](https://forum.mediathekview.de/user/alex), der sich federführend um dieses Thema gekümmert hat._

## ZDF

Der sog. ZDF-Crawler wurde stark überarbeitet und nutzt nun die neue ZDF-API. Durch diese Änderungen wurde zum einen die Weiterentwicklung und Wartbarkeit für die Entwickler vereinfacht. Außerdem läuft er nun spürbar schneller und vor allem werden mehr Sendungen gefunden, da nun nicht mehr nur die Sendungen aus "Sendung Verpasst" berücksichtigt werden.

Der ZDF-Crawler ist ein Teil des Servers, welcher die sog. Filmlisten erstellt. Er ist dafür zuständig, die ZDF Mediathek nach neuen Sendungen zu durchsuchen und diese in der Filmliste mit aufzunehmen. MediathekView lädt zu Beginn diese durch die Server erstellte Filmliste herunter und erhält dadurch alle benötigten Informationen, um Download und Weiteres zu ermöglichen.

Das ZDF hatte zum Ende des letzten Jahres seine Mediathek erneuert, was eine erste Anpassung des ZDF-Crawlers nötig machte. Die erste Anpassung musste schnell erfolgen und deckte vorerst nur den "wichtigsten" Teil ab. Mit dieser zweiten Änderung wird nun direkt die neue Schnittstelle der ZDF Mediathek verwendet und damit sollten alle Teile abgedeckt sein.

Natürlich kann es immernoch vorkommen, dass mal eine Sendung fehlt. Hilfe erhaltet ihr hierzu im [Forum unter "Fragen, Hilfe, Kritik" -> "Fehlende Sendungen"](https://forum.mediathekview.de/category/7/fehlende-sendungen). Beachtet hierbei aber bitte die [Anleitung zum Melden fehlender Sendungen](https://forum.mediathekview.de/topic/99/fehlende-sendung-melden).

_Besonderer Dank für diese Überarbeitung geht an [pidoubleyou](https://github.com/pidoubleyou) und [Nicklas2751](https://github.com/Nicklas2751), die sich der neuen ZDF-API angenommen und den Crawler entsprechend überarbeitet haben._

## Zusatz in eigener Sache

### Entwicklung

Aktuell wird MediathekView hauptsächlich von vier Entwicklern weiter geführt, mit dabei ist auch Xaver.

Wer also Ahnung von Java hat und uns dabei unterstützen möchte, MediathekView weiter zu führen, kann sich in [GitHub](https://github.com/mediathekview) oder im [Forum](https://forum.mediathekview.de/category/5/entwicklerforum) bei uns melden.

Ein Guide für Entwickler kann [hier](https://github.com/mediathekview/MediathekView/wiki/Quickstart-Guide) gefunden werden.

### Forum

Im Forum mangelt es aktuell an Moderatoren. Diese wichtige Arbeit muss momentan durch die Entwickler und Administatoren nebenbei gemacht werden.

Erfahrene Nutzer, die Interesse daran haben, uns dabei zu unterstützen, können sich sehr gerne an [Alex](https://forum.mediathekview.de/user/alex) oder [Nicklas2751](https://forum.mediathekview.de/user/nicklas2751) wenden.
