const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  // GET route code here
  console.log('check this out', req.params, req.params.id, req.body, req.user.id);
  let user_id = req.user.id;
  let id = req.params.id || req.params.menu_id;
  const queryText = `SELECT * FROM "dishes"
  JOIN "menus_dishes" ON "dishes".id = "menus_dishes".dish_id
  JOIN "menus" ON "menus_dishes".menu_id = "menus".id
  WHERE "dishes".user_id = $1 AND "menu_id" = $2;`;

  pool.query(queryText, [user_id, id]).then((result) => {
    res.send(result.rows);
  }).catch(error => {
    console.log('error getting menus', error);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
