# Digitale Arbeit
## Modul __JavaScript__ Beispielanwendung  

## Ausgangslage  
Wir fragen eine dokumentierte API ab. D.h. wir kennen das Schema der Antwort bzw. das Schema des JSONs, welches wir als Antwort erwarten. In einem solchen Fall lassen sich Suchfunktionen deutlich vereinfachen, da wir direkt auf Felder des JSONs, bzw. hier direkt auf das eingegebettete Array zugreifen können.  

### Das Beispiel:  

Über die OpenData-Plattform des Landes Berlins können wir die Wasserqualität und eine Reihe weiterer Informationen über Badestellen in Berlin abfragen.  

API für dieses Beispiel: https://www.berlin.de/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/index/all.json?q=  

### Markup  
Zunächst definieren wir eine einfache HTML-Seite mit einem Formular.  
Das Formular beinhaltet ein Input-Feld für die Eingabe eines Suchbegriffs.  
Durch Anklicken des Buttons soll die Anfrage dann abgesendet werden.  
Das Inputfeld erhält ein _id_ Attribut, damit später mit JavaScript darauf zugreifen können (bzw. auf die übermittelten Werte aus diesem Feld).

### Skriptbereich  
Am Seitenende wird mit dem Tag __< script >__ der Bereich definiert, in dem JavaScript-Anweisungen aufgeführt werden.  
Das hat den Vorteil, dass zunächst die Seite vollständig geladen und erst dann die Anweisungen des Scripts ausgeführt werden.  
Über das Attribut _id_ geben wir zum einen dem Formular sowie dem <div>-Block eine eindeutige Bezeichnung, um diese Bereiche später mit JavaScript adressieren zu können.  

### Das Script im Detail  
1. Wir speichern das Formular anhand seiner _id_ in der Variablen "formElement".  
2. Wir speichern den <div>-Block, in den wir später das Ergebnis ausgeben wollen in der Variablen "node".  
3. Auf dem Formular bzw. der Variablen registrieren wir einen EventListener, welcher auf das Event "submit" (also das Absenden des Formulars) reagiert und die Funktion "apiRequest" ausführt.  
4. Nun schreiben wir die Funktion "apiRequest" selbst.

### Was passiert wenn ich den Button klicke?
1. Beim Klicken der Funktion wird ein Event ("click") ausgelöst, auf welches unserer EventListener horcht und reagiert. Der Funktion, die wir mit dem EventListener rufen, wird automatisch das Event-Objekt mitgegeben, welches wir als Parameter mit in die Funktion übernehmen.  
2. Über die Funktion _preventDefault()_ des übergebenen Events verhindern wir, dass der Browser die Standardreaktion auf das Event "Abesenden eines Formulars" ausführt. Der Browser würde ansonsten die Seite neu laden und das Formular zurücksetzen.  
3. Als nächstes setzen wir unsere Variable "node" auf einen leeren String, d.h. wir löschen ggfs. schon vorhandene Einträge aus der vorherigen Ausgabe (Suchergebnisse).  
4. Wir definieren eine weitere Variable "searchpattern" in der wir einen _regulären Ausdruck_ mit dem aktuellen Suchbegriff aus dem Formularfeld speichern. Mit dem Parameter "i" erzeugen wir einen regulären Ausdruck, welcher nicht zwischen Groß- und Kleinschreibung unterscheidet ("case insensitve").  
5. In einer weiteren Variable "searchresult" definieren wir ein _Array_ in das wir ggfs. Suchergebnisse zwischenspeichern wollen.  
6. Wir definieren nun die eigentliche Abfrage bei der API. Hiefür nutzen wir die _JavaScript Fetch API_, ein sehr mächtiges Werkzeug zum Ausführen von _HTTP-Requests_. Der Funktion übergeben wir die vollständige URL der externen Ressource, die angesprochen werden soll (hier: die OpenData-API des Berliner LaGeSo).  Bei einem Fetch handelt es sich um einen _Promise_ welcher mit einem _Response_-Objekt erfolgreich "resolved" oder bei Mißerfolgt "rejected".  
7. Wir halten die Funktion für diese Übung einfach und gehen lediglich vom Erfolgsfall aus. Löst der Promise (Fetch) erfolgreich auf und übergibt diesem das Antwortobjekt (response). Dieses übernehmen wir als Parameter in den automatisch erzeugten neuen Promise, den wir über _.then()_ eine neue Funktion zur Auswertung mitgeben.  
8. Im ersten "then" soll aus dem _response_-Objekt lediglich das von der API übermittelte JSON zurückgegeben werden. Dies erfolgt durch _return response.json();_  Die Methode _.json()_ extrahiert dabei das JSON.  
9. Wir starten durch ein weiteres _.then()_ einen neuen Promise, welcher unsere Suchfunktion "simpleSearch" aufruft und als Parameter das JSON und unseren Suchbegriff übergibt. Wenn diese Funktion durchlaufen ist, wird von dieser Array mit den Suchergebnissen zurückgegeben und der Promise löst erfolgreich auf.
10. In dem letzten Promise, wiederum durch _.then()_ eingeleitet, geben wir das Suchergebnis als Parameter in die Funktion "renderResult", welche das Ergebnis auf dem Bildschirm darstellen soll.  

### Die Funktion "simpleSearch"  
Diese Funktion durchsucht das übergebene JSON.  
Da wir das Schema des JSONs in Voraus kennen (dokumentiert durch die API), greifen wir uns direkt den Teil heraus, welcher für die Suche interessant ist und verwerfen das Übrige. In diesem Fall stehen alle relevanten Informationen bzw. unter dem Schlüssel "index" über ein Array verfügt, in dem wiederum Objekte mit den jeweiligen Daten zu einer Badestelle enthalten sind.  
1. Wir speichern dieses Array in einer neuen Variable "searchArray".  
2. Wir durchlaufen das Array mit der Methode _.map()_ und übergeben dabei das aktuelle Objekt an eine Funktion, welche wiederum mit einer for..in-Schleife das Objekt durchläuft.  
3. Innerhalb der Schleife prüfen wir mit if..else, ob der reguläre Ausdruck "searchpattern" auf den aktuellen Wert im Objekt passt. Wenn wir einen Treffer haben schreiben wir das aktuelle Objekt mit der Methode _.push()_ in unser "Ergebnis-Array" ("searchresult").  Das "break" verhindert, dass wir weiter im gleichen Objekt suchen und so ggfs. doppelte Treffer (wenn mehrere Felder den Suchbegriff beinhalten) in unser Ergebnis aufgenommen werden.  
4. Ist _.map()_ vollständig durchlaufen geben wir als letztes das Ergebnis-Array mit _return_ zurück.  


### Die Funktion "renderResult"  
Diese Funktion dient der Ausgabe des Suchergebniss-Arrays auf dem Bildschirm.  
Das Array hat hat bei Treffern jeweils das Objekt, in dem der Suchbegriff enthalten ist,gespeichert. Wir haben also ein Array mit [ {obj1}, {obj2},{obj3}, usw.], welches wir nun mit der Methode _.map()_ durchlaufen und dabei mittels einer Funktion ausgewählte Felder aus dem Objekt mit HTML ausgeben.  Auch dies funktioniert in dieser einfachen Form nur, wenn wir die Schlüssel des Ojektes kennen und die Objekte stets gleich aufgebaut sind (siehe Ausgangslage weiter oben).