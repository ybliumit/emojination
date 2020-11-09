var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">
<img/>
emojo
</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#" onclick="loadCreateAccount()" >Create Account</a>
      <a class="nav-item nav-link" href="#" onclick="loadLogin()" >Login</a>
      <a class="nav-item nav-link" href="#" onclick="loadJournal()" >Journal</a>
    </div>
  </div>
</nav>
`;

ui.createAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Create Account</div>
<div class="card-body">
    <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Name">
        </div>
        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter Password">
        </div>
        <button type="button" class="btn btn-light" onclick="create()">Create Account</button>
    </form>
</div>
</div>
`;

ui.login = `
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
<div class="card-header">Login</div>
<div class="card-body">
    <form>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter Password">
        </div>
        <button type="button" class="btn btn-light" onclick="login()">Login</button>
    </form>
</div>
</div>
`;


ui.default = `
<div class="card text-white bg-primary mb-3" style="max-width: 48rem;">
<div class="card-header">emojo - emoji mood journal</div>
<div class="card-body">
<h3>
    Welcome to the best (because it's the only) emoji mood journal in the world!<br>
</h3>
</div>
</div>
`;

ui.journal = `
<div class="card text-white bg-danger mb-3" style="max-width: 30rem;">
<div class="card-header">Journal Entry</div>
<div class="card-body">
    <form>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    </form>
    <div>
    <h3>
        Please reflect on the following questions, and write about your day. <br>
    </h3>
    <body>
        1. How do you feel today? <br>
        2. What went really well today? <br>
        3. What didn't go well today? <br>
    </body>
    </div>
    <form>
    <textarea id="a1" name="answer1" rows="4" cols="57" placeholder="Please keep your answers brief. No more than 280 characters."></textarea>
    <br>
    <input type="submit" value="Submit">
    </form>
    <div>
    <b style="font-size:60px;">
    &#128512  &#128525  &#128526 </b>
    </div>
</div>
</div> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;


var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadJournal = function(){
    target.innerHTML = ui.journal;
};

defaultModule();