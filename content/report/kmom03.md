---
Title: Kmom03
Description: Part 3
Template: kmom
---

Kursmoment 3
==================

### Redovisning av kursmoment 3


**Hur har det gått att jobba med CSS-Grid/Flexbox?** <br>
Det gick bra, det är lite enklare att jobba med flexbox då man jobbar med en direktion. I grid jobbar man med båda (horizontal och vertikal). Det gick bra att implementera designen i landingpage och reportsidor.



**Har du jobbat med dessa tekniker sedan tidigare? Vad anser du om det?**<br>
Jag har använt enbart flexbox tidigare och tycker det är enkel att implementera responsiv design med flexbox. Men grid var inte så svårare och det gick bra att komma i gång med den.
För card layout har jag använt flexbox blandat med grid då flexbox kändes mer rätt och enklare annars resten av layout är grid:

    .card {
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(236, 234, 234);
        border-radius: 1rem;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);

        .card-title {
            background-color: $l-fnt-color;
            color: rgb(252, 252, 252);
            border-radius: 1rem 1rem 0 0;
            padding: 0.5rem 1rem;
            margin: 0;
        }
    }



**Har du försökt dela upp din SASS-kod i olika moduler? Kanske har du skapat en ny modul som är din layout?**<br>
Jag har skapat några moduler (_fonts, _nav, _variables). Men ingen specifik module för layouten än. scss koden var inte så stor så tänkte att samla alla i en "style.scss" fil.

i sidan för fonts:<br><br>
    @font-face {<br>
        font-family: 'Philosopher';<br>
        font-style: normal;<br>
        font-weight: 400;<br>
        src:<br>
        /* Modern Browsers */<br>
        url('../../shared/fonts/philosopher/philosopher-regular.woff2') format('woff2'),<br>
        url('../../shared/fonts/philosopher/philosopher-regular.woff') format('woff'),<br>
        /* Safari, Android, iOS */<br>
        url('../../shared/fonts/philosopher/philosopher-regular.ttf') format('truetype'),<br>
    }<br>

**Valde du att göra om din sidas layout eller nöjde du dig med report sidan?**<br>
Jag fortsatt med samma desgin (färg och font) men layouten blev annorlunda i report page (card design) och i report sidor då man har en sidebar. Jag valde att flytta ner sidebar i mobila skärmar och visa den horizontal istället för att gömma den (display: none). Och skapade en sida för att spara sidebar länkar i den "_sidebar.md". och med twig loopar jag igenom de och skapar nya länkar som visas i sidebar. Länkarna i sodbar blir highlighted om samma sidan öppnas och man vet vilka sida är man i.


    ---
    Logo: image/leaf_256x256.png
    Tagline: Sidebar.
    Links:
        - title: kmom01.
        url: report/kmom01
        text: kmom01

        - title: kmom02.
        url: report/kmom02
        text: kmom02
        
        - title: kmom03.
        url: report/kmom03
        text: kmom03

        - title: kmom04.
        url: report/kmom04
        text: kmom04

        - title: kmom05.
        url: report/kmom05
        text: kmom05

        - title: kmom06.
        url: report/kmom06
        text: kmom06

        - title: kmom10.
        url: report/kmom10
        text: kmom10
    ---

och i twig "kmom.twig":<br>
        &lt;div class="sidebar"&gt;<br>
            &lt;div class="container"&gt;<br>
                &lt;div class="links"&gt;<br>
                    {% for links in pages["_sidebar"].meta.links %}<br>
                        {% if links.text == current_page.id[7: 13] %}<br>
                            &lt;a href="{{ base_url}}/{{links.url}}" class="active"&gt;&lt;/a&gt;<br>
                        {% else %}<br>
                            &lt;a href="{{ base_url}}/{{links.url}}"&gt;&lt;/a&gt;<br>
                        {% endif %}<br>
                        {{ links.text }}<br>
                    {% endfor %}<br>
                &lt;/div&gt;<br>
            &lt;/div&gt;<br>
        &lt;/div&gt;<br>
        &lt;div class="container"&gt;<br>
            {{ content }}<br>
        &lt;/div&gt;<br>


**Vilken är din TIL för detta kmom?**<br>
Att det är lättare om man disignerar för mobil först och sedan använda media query för att designera för desktop och tablet. och att man kan använda vissa php methoder i twig liksom slice[star: end].


Länk till report kmom03:<br>
http://www.student.bth.se/~rere20/dbwebb-kurser/design/me/portfolio/report/kmom03

Länk till portfolio:<br>
http://www.student.bth.se/~rere20/dbwebb-kurser/design/me/portfolio/

Länk till github:<br>
https://github.com/rez433/design
