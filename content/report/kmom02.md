---
Title: Kmom02
Description: Part 2
Template: kmom
---

Kursmoment 2
==================

### Redovisning av kursmoment 2

**Vad tycker du om SASS än så länge?**<br>
SASS är väldigt intressant teknologi. Mixins, inheritence, function och loop gör det mycket flexible. SASS compilerar alla scss filer till en css fil så att hemsidan gör bara en network request till css.
Mixins: 

Variagles: 

    $bgclr: orangered;
    $fntclr: black;




Inheritence: 

    %btn {
        display: inline-block;
        border-radius: 10%;
        padding: 0.5rem 1rem;
        margin: 0 1rem;
    }

    .btn-submit {
        @extend %btn;
        background-color: green;
    }

    .btn-cancel {
        @extend %btn;
        backbround-color: red;
    }




built-in methods:

    background: darken($bgclr);
    color: lighten($fntclr);

<br>

**Är du bekant med Node, npm eller npm scripts (t.ex. npm run lint) sedan tidigare? Vad anser du om det?**<br>
nej, npm verkar ha bra moduler som kan göra programmeringen enklare. Det finns nästan en module till vad man kan tänka sig att göra i javascript.

**Hur kändes det att kompilera SASS till CSS, var det något du reflekterade över?**<br>
Det var smidig. Installerat sass via npm och använde kommandot: "sass --watch scss/style.scss css/style.css" och sass kompilerar när man sparar ändringar i scss filen. Det som är bra att den kompilerar alla importerade filer och moduler i en och samma css. Om man inte vill att partials kompilerar till css filer då läggs en "_" i början av namnet på filen. <br>

**Kommentera ditt tema, hur kan man beskriva dess design och hade du några planer på “design” när du byggde ditt tema?**<br>
Strukture:
WhiteSpace, Container => site-title/logo, navigation, content, footer. Continer har en fixed-width layout för stora skärmar, max-width av 1100px så den kommer att se lika ut i alla stora skärmar. Annars är den responsive för mindre skärmar.<br>
Design: 
Använde symmetrical balance i sidan och komplementary färgar för header och footer. bakgrund färg är (#189E90) och font färg (#9E3300). Content (main) har bakgrundfärg vit och font färg svart.<br>

Font:
för font använde jag "philosopher" som ser bra ut och är enkelt att läsa texten i alla skärmstorleker. Laddat ner font och lagt till det under shared folder. Skapat en fil där jag lagt font-face i css. och importerat den i min style.scss fil.<br>
h1 font har en storlek på 2,2em och p fonter har normal 1em storlek. Och paragraph har en margin-bottom of 1,75rem så det finns lite space mellan olika pargaraph.<br>

Valde du att dela upp din kod? Vilka uppdelningar valde du att göra?<br>
ja, variables, nav, style och sedan alla gemensamma delar (mellan alla tema) liksom fontawesom och logo ligger under shared. varjables innehåller bara font färg och bakgrund färg. nav innehåller all kod om nav och style som är all styling i hela sidan.<br>

**Vilken är din TIL för detta kmom?**<br>
Att det är bättre att ha en stor css fil än flera netwrok request.
