const fs = require('fs');

 module.exports = async (req, res) => {
  fs.readFile(`./db${req.url}.json`, 'utf-8', (err, date) => {
    if (!err) {
      return res.json(JSON.parse(date));
    }
    console.log(req.url)
  });
}

