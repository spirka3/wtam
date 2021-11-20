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

Error Response Codes: 400 - Wrong request/Database error

*/