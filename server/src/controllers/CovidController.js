const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/Countries", async (req, res) => {
  const data = await axios
    .get("https://api.covid19api.com/summary")
    .then((ress) => {
      return res.send(ress.data.Countries);
    })
    .catch((err) => {
      return res.send(err);
    });
});


router.get("/Global", async (req, res) => {
    const data = await axios
      .get("https://api.covid19api.com/summary")
      .then((ress) => {
        return res.send(ress.data.Global);
      })
      .catch((err) => {
        return res.send(err);
      });
  });

  router.get("/individual/:id", async (req, res) => {
    // console.log(req.params.id)
    const data = await axios
      .get(`https://api.covid19api.com/live/country/${req.params.id}`)
      .then((ress) => {
        return res.send(ress.data);
      })
      .catch((err) => {
        return res.send(err);
      });
  });


module.exports = router;

