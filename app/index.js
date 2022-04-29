const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
const cors = require("cors");
const fs = require("fs");

const generate = require("portfolio-template");
const execSync = require("child_process").execSync;

app.use(cors());
app.use(bodyParser.json());


app.post("/portfolio", (req, res) => {
  const name = req.body.name;
  const job = req.body.job;
  const works = req.body.works;
  const schools = req.body.schools;
  const skills = req.body.skills;
  const email = req.body.email;

  try {
    generate(name, job, works, schools, skills, email, userHome + "/Desktop");
  } catch(err) {
    console.error(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
    return;
  }
  try {
    execSync(`${__dirname}/publish-ghpages.sh TakutoYoshikai example.com`);
  } catch(err) {
    console.error(err);
  }
  
  res.status(200).json({
    message: "Success",
  });
  

});

app.listen(3000);
