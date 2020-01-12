function validate(){
	var result;
    result = true;

    //alert("please enter first name");
    var a=document.getElementsByTagName("input");
    if(a[0].value.length==0)
    {
        alert("Please Enter your Username!");
        return false;
    }
     if(a[0].value.length<6)
    {
        alert("Username must be greater than 6 Character!");
        return false;
    }

    if(a[1].value.length==0)
    {
        alert("Please Enter your Email Id!");
        return false;
    } 
    if(a[2].value.length==0)
    {
        alert("Please Enter your Password!");
        return false;
    }
    if(a[2].value.length<6)
    {
        alert("Password must be greater than 6 Character!");
        return false;
    }
     if(a[3].value.length==0)
    {
        alert("Please confirm your Password!");
        return false;
    }
    if(a[3].value!=a[2].value)
    {
        alert("Password does not Match!");
        return false;
    }
     if(a[4].value.length==0)
    {
        alert("please enter Contact Number!");
        return false;
    }
    if(a[4].value.length<10)
    {
        alert("Contact Number is Incorrect!");
        return false;
    }
}