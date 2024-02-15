const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get("/", rejectUnauthenticated, (req, res) => {
  const query = `
    SELECT * FROM "item"
      ORDER BY "id" ASC;
  `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.error("ERROR: Get all items", err);
      res.sendStatus(500);
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post("/", (req, res) => {
  // endpoint functionality
});

router.delete("/:id", rejectUnauthenticated, (req, res) => {
  const queryText = `
  SELECT * FROM "item"
    WHERE "id" = $1;
`;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      console.log(result.rows);
      console.log(result.rows[0].user_id);
      console.log(req.user.id);
      if (result.rows[0].user_id === req.user.id) {
        console.log(result.rows[0].user_id === req.user.id);
        pool
          .query('DELETE FROM "item" WHERE id=$1', [req.params.id])
          .then(() => {
            res.sendStatus(204);
          })
          .catch((err) => {
            console.error("Error in PUT /api/shelf/:id", err);
            res.sendStatus(500);
          });
      }
    })
    .catch((err) => {
      console.error("ERROR: Get all items", err);
      res.sendStatus(500);
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put("/:id", (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get("/count", (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get("/:id", (req, res) => {
  // endpoint functionality
});

module.exports = router;
