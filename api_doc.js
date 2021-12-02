/* Register user [POST] https://www.polkadot-hub.eu/api/register

{
	"username": "test",
	"password": "test",
	"firstname": "test",
	"lastname": "test"
	"age": 12
}

Error Response Codes: 400 - Wrong request/Database error

*/


/* Login user [POST] https://www.polkadot-hub.eu/api/login

{
	"username": "test",
	"password": "test"
}

Return if succesful:

{
  "id": "10",
  "age": "12",
  "age_category_id": "2",
  "firstname": null,
  "lastname": null,
  "username": "test",
  "registrated_at": "2021-11-20 22:16:06"
}

Error Response Codes: 400 - Wrong request/Database error, 404 - User login was wrong

*/

/* Return all activities [POST] https://www.polkadot-hub.eu/api/activities

{

}

Error Response Codes: 400 - Wrong request/Database error

*/

/* Return activities by age_category_id [POST] https://www.polkadot-hub.eu/api/activities

{
	"age_category_id" : 2
}

Return if succesful:

[
  {
    "id": "1",
    "name": "Táborník",
    "img_url": "https:\/\/www.skauting.sk\/wp-content\/uploads\/2017\/04\/skauting-program-odborka-skauti-z-25-200x200.png",
    "level": "Zelený",
    "activity_type": "Odborky",
    "age_category_id": "2",
    "age_category": "Skauti a skautky",
    "tasks": [
      {
        "id": "1",
        "description": "Prespal som aspoň 20 nocí pod stanom (pod širákom či prístreškom).",
        "activity_id": "1"
      },
      {
        "id": "2",
        "description": "Zúčastnil som sa stavania aspoň jednej väčšej táborovej stavby (brána, kuchyňa, típí, podsada…).",
        "activity_id": "1"
      },
	]
  }
]

Error Response Codes: 400 - Wrong request/Database error

*/


/* Create task progress [POST] https://www.polkadot-hub.eu/api/activities

{
	"user_id" : 10,
	"task_id": 1
}

Return if succesful:

{
  "new_record_id": "1",
  "activity_id": "1"
}

Error Response Codes: 400 - Wrong request/Database error

*/

/* Create activities in progress with tasks [POST] https://www.polkadot-hub.eu/api/active

{
	"user_id" : 10
}


Return if succesful:

[
  {
    "id": "60",
    "name": "Gurmán",
    "img_url": "https:\/\/www.skauting.sk\/wp-content\/uploads\/2019\/11\/skauting-program-odborka-vlcata-52-200x180.png",
    "age_category_id": "1",
    "level": "",
    "activity_type": "Odborky",
    "age_activity_name": "Vĺčatá a včielky",
    "tasks": [
      {
        "id": "40",
        "description": "Učíme sa vážiť si každé jedlo, správame sa k jedlu s úctou, pýtame si len vždy len toľko, koľko zjeme a naučíme sa za jedlo nahlas poďakovať.",
        "activity_id": "60",
        "task_state": "rozpracovane"
      },
      {
        "id": "41",
        "description": "Vieme, ako sa správať v reštaurácii, objednať si jedlo a správne ho konzumovať. Vieme, aký je celkový bontón pri konzumácii jedla a pri obsluhovaní.",
        "activity_id": "60",
        "task_state": "nesplnene"
      }...
	]
  }
}

Error Response Codes: 400 - Wrong request/Database error

*/