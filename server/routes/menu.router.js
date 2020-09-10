const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
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
router.post('/:id', (req, res) => {
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

module.exports = router;