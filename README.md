#### JANO
- gradient efect na hover cez HomePage button
- orezat obrazkove pozadie

[narvh] Zobrazit 3 stavy uloh 
[narvh] Nadidednim na ziskanu akt. sa zobrazi jej nazov a kedy bola splnena (v footer) 
    -   kliknutim sa zobrazia detaily 
[narvh] interface pre veduceho na schvalenie uloh 
[navrh] expertske odborky 
[navrh] blizsi popis/vysvetlenie akcii 



#### FILIP

po prihlaseni hned ukazat moje aktivity 
z private po odhlaseni hned na home 

nacitat z db odborky
- [ ] vediet odfiltrovat hotove
- [ ] vediet pridat do rozpracovanych
- [ ] hotove uz nemoze znova pridat
- [ ] Mozno: odlisit odborky cez badge (hotove, zacate, new, oblubene, bud prvy!)

- [ ] poslat ulohu s prilohou (iba sa zmeni stav ulohy, sprava a prilohy ssa "stratia")
- [ ] moznost poslat viac uloh naraz
- [ ] vediet vymazat aktivitu

- [ ] NIE: interface pre veduceho na schvalenie uloh
- [ ] NIE: moznost napisat spatnu vazbu
- [ ] NIE: niektore ulohy musi vediet potvrdit rodic (heslom)

- [ ] podla veku usera sa zobrazuju taby v Moje aktivity (aktivna je najnovsia)
- [ ] podobne v Odborky
- [ ] ak od posledneho zobrazenia stranky bola potvrdena uloha, zobrazi sa notifikacia

- [ ] NIE: [navrhnut] zgrupovanie odboriek do expertskych odboriek

TOMAS
- [ ] rozbehat Node.js
- [ ] doplnit data do db
- [ ] treba sa zamysliet co na chyba
- [ ] poskytnut API
- [ ] deploy

## Global todos:
TODO: !! rozpracovane aktivity
### Rozpracovane aktivity:  odoslanie spravy, prehlad iba rozpracovanych aktivit.
- [X] Kazda aktivita ma n bodov ktore moze pouzivatel plnit. 
- [ ] Ak dany bod splnil (v realnom svete) - bod ma stav nesplnene, po kliku nan sa mu otvori dialog pre spravu veducemu kde bude v nejakej hlavicke info ze posiela spravu veducemu, ze splnil vybranu aktivitu v danej odborke (see scenar 1), 
- [X] moze vyplnit popis a moze vkladat prilohu (pre mobilnu verziu otvorenie fotaku? ak zlozite tak nie)
- [X] moze tento dialog zavriet (nevyplni nic)
- [ ] po odoslani sa zmeni stav BODU danej aktivity pre tohto usera na caka na schvalenie
- [ ] my manualne v DB zmenime stav na hotovo
- [ ] ak je stav hotovo tak to musi byt pri bode vidiet
- [X] zatial sprava aj priloha sa nikde nebudu odosielat, meni sa iba stav aktivity v DB
    Rozpracovane aktivity - prehlad (navrh):
- [X] body defaultne nezobrazovat (aktualny janov navrh)
- [ ] moznost body zobrazit -> odosielanie spravy
    
- [ ] po logine hned prehlad rozpracovanych veci

### Ak vyjde cas
- [ ] Footer - https://courses.matfyz.sk/webdesign/notes/note/lectures/layout-design/page-footers/
- [ ] Farby - https://www.nngroup.com/articles/color-enhance-design/
- [ ] pre mobilnu verziu, v dolnej casti (ako sme.sk) buttony - navrh: rozpracovane, odborky, dalsie?

### Bugy
- [ ] Stranka odborky, mobilna verzia, po zavreti okna vybranej odborky prescrolluje uplne hore
- [X] Velkost obrazkov odboriek ... kruhove su 100x90 mali by byt 100x100
 
MARTIN
- [ ] spracovat pripomienky z hodnotenia
