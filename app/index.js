const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const generate = require("portfolio-template");

app.use(bodyParser.json());


app.post("/portfolio", (req, res) => {
  const name = req.body.name;
  const job = req.body.job;
  const works = req.body.works;
  const schools = req.body.schools;
  const skills = req.body.skills;
  const email = req.body.email;

  try {
    generate(name, job, works, schools, skills, email);
  } catch(err) {
    console.error(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
    return;
  }
    res.status(200).json({
      message: "Success",
    });

});

app.listen(3000);
