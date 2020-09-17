const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

router.delete('/:id', rejectUnauthenticated, (req, res) => {
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

router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
    let queryText = `DELETE FROM "menus_dishes"
    WHERE "dish_id" = $1;`;
    
    let deletedId = req.params.id;
    console.log(deletedId);

    pool.query(queryText, [deletedId]).then((result) => {
        console.log(result);
        let otherQueryText = `DELETE FROM "dishes"
        WHERE "id" = $1;`;
    
        pool.query(otherQueryText, [deletedId]).then((result) => {
            console.log(result);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error deleting dish', error);
            res.sendStatus(500);
        });  
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error deleting dish junction', error);
        res.sendStatus(500);
    });
  
})

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  let id = req.user.id;
  let queryText = `SELECT * FROM "dishes"
                   WHERE "user_id" = $1
                   ORDER BY "id";`;
    
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
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  let queryText = `INSERT INTO "dishes" ("user_id", "name", "price", "description", "img_url")
  VALUES ($1, $2, $3, $4, $5);`
  let newName = req.body.newDishName;
  let newPrice = req.body.newDishPrice;
  let newImg = req.body.newDishImg;
  let newDesc = req.body.newDishDescription;

  pool.query(queryText, [req.user.id, newName, newPrice, newDesc, newImg]).then(result => {
      res.sendStatus(201);
  }).catch(error => {
      console.log('error posting new dish', error);
      res.sendStatus(500);
  })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
    let id = req.params.id;
    let user_id = req.user.id;
    let itemToUpdate = '';
    let queryText = '';

    if (req.body.editName) {
        itemToUpdate = req.body.dishName
    } else if (req.body.editPrice) {
        itemToUpdate = req.body.dishPrice
    } else if (req.body.editDescription) {
        itemToUpdate = req.body.dishDescription
    } else if (req.body.editImg) {
        itemToUpdate = req.body.dishImg
    };

    if (req.body.editName) {
        queryText = `UPDATE "dishes"
    SET "name" = $1
    WHERE "user_id" = $2 AND "id" = $3;`
    } else if (req.body.editPrice) {
        queryText = `UPDATE "dishes"
    SET "price" = $1
    WHERE "user_id" = $2 AND "id" = $3;`
    } else if (req.body.editDescription) {
        queryText = `UPDATE "dishes"
    SET "description" = $1
    WHERE "user_id" = $2 AND "id" = $3;`
    } else if (req.body.editImg) {
        queryText = `UPDATE "dishes"
    SET "img_url" = $1
    WHERE "user_id" = $2 AND "id" = $3;`
    };

    console.log(queryText, itemToUpdate, user_id, id);

    pool.query(queryText, [itemToUpdate, user_id, id]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in put req', error);
        res.sendStatus(500);
    })
});

module.exports = router;
