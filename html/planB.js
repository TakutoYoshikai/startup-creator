
function generatePortfolio() {

  axios.post("http://localhost:3000/portfolio", {
    "name": "TAKUTO YOSHIKAI",
    "job": "SOFTWARE CREATOR / HACKER",
    "works": [
      {
        "title": "Gatebox",
        "description": "The Virtual Home Robot"
      }
    ],
    "schools": [
      "Keio University"
    ],
    "skills": [
      "Positive Thinking"
    ],
    "email": "takuto@yoshikai.net",
    "domain": "me.yoshikai.net",
    "id": "TakutoYoshikai",
  });
}

generatePortfolio();
