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