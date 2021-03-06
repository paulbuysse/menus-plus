const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
  // GET route code here
  let id = req.user.id;
  const queryText = `SELECT "menus".title, "menus".id FROM "menus"
                    WHERE "user_id" = $1;`

    pool.query(queryText, [id]).then( (result) => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting menus', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/:id', rejectUnauthenticated, (req, res) => {
  // POST route code here
  let dishToAdd = req.body;
  let values = [dishToAdd.selectedDish, dishToAdd.menu_id]

  let queryText = `INSERT INTO "menus_dishes" ("menu_id", "dish_id")
                  VALUES ($2, $1);`;

  pool.query(queryText, values).then(result => {
    res.sendStatus(201);
  }).catch(error => {
    console.log('error in post req menurouter', error);
    res.sendStatus(500);
  })
  
 
});

router.post('/new/m', rejectUnauthenticated, (req, res) => {
  let newMenu = req.body.newMenuName;
  let userId = req.user.id;
  let queryText = `INSERT INTO "menus" ("user_id", "title")
  VALUES ($1, $2);`;

  console.log(newMenu, req.body);

  pool.query(queryText, [userId, newMenu]).then(result => {
    console.log(result);
    res.sendStatus(201);
  }).catch(error => {
    console.log('error posting new menu', error)
    res.sendStatus(500);
  })
  
});

router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
  let menuToDelete = req.params.id;
  let queryText = `DELETE FROM "menus_dishes"
  WHERE "menu_id" = $1;`;

  pool.query(queryText, [menuToDelete]).then(result => {
    let otherQueryText = `DELETE FROM "menus"
    WHERE "id" = $1;`
  
    pool.query(otherQueryText, [menuToDelete]).then(result => {
      res.sendStatus(201);
    }).catch(error => {
      console.log('error in deleting menu', error);
      res.sendStatus(500);
    })
    res.sendStatus(201);
  }).catch(error => {
    console.log('error in deleting menu link', error);
    res.sendStatus(500);
  });
})

module.exports = router;