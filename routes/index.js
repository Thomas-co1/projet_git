const express = require('express');
const router = express.Router();


const API_URL = 'https://musicbrainz.org/ws/2/release-group?artist=';
const Nirvana_ID = '5b11f4ce-a62d-471e-81fc-a69a8278c7da'; //Nirvana
const Gorillaz_ID = 'e21857d5-3256-4547-afb3-4b6ded592596'; //Gorillaz
const Muse_ID = '9c9f1380-2516-4fc9-a3e6-f9f61941d090'; //Muse




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nirvana', function(req, res, next) {
  //récupérer les infos de Nirvana et les afficher dans la vue nirvana
  fetch(`${API_URL}${Nirvana_ID}&type=album|ep&fmt=json`)
    .then(response => response.json())
    .then(data => {
      res.render('nirvana', { title: 'Nirvana', albums: data['release-groups'] });
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données :', error);
      res.status(500).send('Erreur serveur');
    });

});


module.exports = router;
