const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  // GET route code here
  let id = req.params.id;
  const queryText = `SELECT "menus".title FROM "menus"
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
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;