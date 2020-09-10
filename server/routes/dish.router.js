const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.delete('/:id', (req, res) => {
    let idToDelete = req.params.id;
    console.log(idToDelete);

    let queryText = `DELETE FROM "menus_dishes"
                    WHERE "md_id" = $1;`;

    pool.query(queryText, [idToDelete]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('ERROR in DELETE request to api/dish', error);
        res.sendStatus(500);
    });
});

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let id = req.user.id;
  let queryText = `SELECT * FROM "dishes"
                   WHERE "user_id" = $1;`;
    
    pool.query(queryText, [id]).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error in getting all dishes', error);
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
