//

function cardManager(manager) {
  return `
   
    <div class="col-md-3">       
    <div class="card">
    <div class="car-title">
    <p> ${manager[0].name}</p>
    <p> <i class="fas fa-mug-hot"></i> Manager</p>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${manager[0].id}</li>
    <li class="list-group-item">Email: <a href="mailto:" +${manager[0].email}> ${manager[0].email}</a></li>
    <li class="list-group-item">Office Number: ${manager[0].officeNum}</li>
    </ul>
    </div>
    </div>
    </div>

    `;
}

function cardEng(engi) {
  let view = "";

  for (let i = 0; i < engi.length; i++) {
    view += `
    <div class="col-md-3">       
    <div class="card">
    <div class="car-title">
    <p> ${engi[i].name}</p>
    <p> <i class="fas fa-glasses"></i> Engineer</p>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${engi[i].id}</li>
    <li class="list-group-item">Email: <a href="mailto:" +${engi[i].email}>${engi[i].email}</a></li>
    <li class="list-group-item">GitHub: <a href="https://github.com/${engi[i].github}" target="_blank"> ${engi[i].github}</a></li>
    </ul>
    </div>
    </div>
    </div>
    `;
  }

  return view;
}

function cardIntern(intre) {
  let view = "";

  for (let i = 0; i < intre.length; i++) {
    view += `
    <div class="col-md-3">       
    <div class="card">
    <div class="car-title">
    <p> ${intre[i].name}</p>
    <p> <i class="fas fa-user-graduate"></i> Intern</p>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${intre[i].id}</li>
    <li class="list-group-item">Email:<a href="mailto:" +${intre[i].email}> ${intre[i].email}</a></li>
    <li class="list-group-item">School: ${intre[i].school}</li>
    </ul>
    </div>
    </div>
    </div>
    `;
  }

  return view;
}

// Generate HTML

module.exports = (mag, intr, eng) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
<header>
 My Team
</header>
<main class="container">
<div class="row justify-content-center ">
${cardManager(mag)} ${cardEng(eng)}
</div>
<br/><br/>
<div class="row justify-content-center ">
${cardIntern(intr)}
</div>
</main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>  
</body>
</html>
    `;
};
