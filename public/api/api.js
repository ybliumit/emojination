function create() {
    var name     =  document.getElementById('name').value;
    var email    =  document.getElementById('email').value;
    var password =  document.getElementById('password').value;
    var status   =  document.getElementById ('status');
    var url      =  '/account/create/' + name + '/' + email + '/' + password;
 
 if (name != null && email != null && password != null && name != '' && email != '' && password != '') 
   
     {
        superagent
            .get (url)
            .end (function (err, res)
            {
                if (err) 
                {
                    console.log (err);
                    status.innerHTML ='Request Failed!';
                    setTimeout(function(){status.innerHTML ='';},2000);
                }
                else
                {
                    if ((res.text) !=null && (res.text) != '')
                    {
                        console.log(res.text);
                        status.innerHTML ='Account Created!';
                        setTimeout(function(){status.innerHTML ='';},2000);    
                    }
                    else
                    {
                        console.log('Account Already Exists!');
                        status.innerHTML ='Account Already Exists!';
                        setTimeout(function(){status.innerHTML ='';},2000);
                    }
                }
            });
    }
 else 
    {
        status.innerHTML = 'Account Details are required!';
    }
}

function login() {
    //  Confirm credentials on server
    var email    = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var status   = document.getElementById ('status');
    var url      = '/account/login/'+ email + '/' + password;

if (email != null && password != null && email != '' && password != '')
    {
        superagent
        .get (url)
        .end (function (err, res)
        {
            if (err) 
                {
                    console.log (err);
                }
            else
            {
                if (res.body)
                {
                    console.log(res.body);
                    status.innerHTML ='Login Successful!';
                    setTimeout(function(){status.innerHTML ='';},2000);
                }
                else
                {
                    console.log ('Login Failed');
                    status.innerHTML ='Login Failed!';
                    setTimeout(function(){status.innerHTML ='';},2000);
                }
            }
        });
    }
 else 
    {
        status.innerHTML = 'Login and Password Field are required!';
        setTimeout(function(){status.innerHTML ='';},2000);
    }
}

function journalEntry() {
    var email   = document.getElementById('email').value;
    var amount  = document.getElementById('a1').value;
    var url     = '/account/journal/'+ email + '/' + a1;
     superagent
        .get (url)
        .end (function (err, res)
        {
            if (err) 
            {
                console.log (err);
            }
            else
            {
                if (res.body)
                {
                    console.log (res.body);
                    status.innerHTML = JSON.stringify(res.body);
                   
                }
                else
                {
                    console.log ('No Data!');
                    status.innerHTML ='No Data!';
                   
                } 

            }
             
        });
}
