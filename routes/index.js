const express = require('express');
const router = express.Router();

//API MusicBrainz
//Documentation : https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2
//Exemple de requête pour récupérer les albums d'un artiste :
//https://musicbrainz.org/ws/2/release-group?artist=5b11f4ce-a62d-471e-81fc-a69a8278c7da&fmt=json (Nirvana)
//https://musicbrainz.org/ws/2/release-group?artist=e21857d5-3256-4547-afb3-4b6ded592596&fmt=json (Gorillaz)
//https://musicbrainz.org/ws/2/release-group?artist=9c9f1380-2516-4fc9-a3e6-f9f61941d090&fmt=json (Muse)



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
  fetch(API_URL + Nirvana_ID + '&fmt=json',   { headers: { 'User-Agent': 'projet_git/1.0.0 (tcollignon.74@gmail.com)' } })
    .then(response => response.json())
    .then(data => {
      console.log(data); //vérifier les données reçues
      res.render('nirvana', { albums: data['release-groups'] }); //passer les données à la vue
    })
    .catch(error => {
      console.error('Error fetching Nirvana data:', error);
      res.status(500).send('Error fetching Nirvana data');
    });

});


router.get('/gorillaz', function(req, res, next) {
  //récupérer les infos de Gorillaz et les afficher dans la vue gorillaz
  fetch(API_URL + Gorillaz_ID + '&fmt=json',   { headers: { 'User-Agent': 'projet_git/1.0.0 (tcollignon.74@gmail.com)' } })
    .then(response => response.json())
    .then(data => {
      console.log(data); //vérifier les données reçues
      res.render('gorillaz', { albums: data['release-groups'] }); //passer les données à la vue
    })
    .catch(error => {
      console.error('Error fetching Gorillaz data:', error);
      res.status(500).send('Error fetching Gorillaz data');
    });

});


router.get('/muse', function(req, res, next) {
  //récupérer les infos de Muse et les afficher dans la vue muse
  fetch(API_URL + Muse_ID + '&fmt=json',   { headers: { 'User-Agent': 'projet_git/1.0.0 (tcollignon.74@gmail.com)' } })
    .then(response => response.json())
    .then(data => {
      console.log(data); //vérifier les données reçues
      res.render('muse', { albums: data['release-groups'] }); //passer les données à la vue
    })
    .catch(error => {
      console.error('Error fetching Muse data:', error);
      res.status(500).send('Error fetching Muse data');
    });
});

module.exports = router;
