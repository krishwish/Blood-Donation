function validation()


    {
        
	var email = document.getElementById("email").value;
    var ps = document.getElementById("password").value;
    if(email==""){
    	document.getElementById("emailspan").innerHTML="Please Fill Username";
    	return false;
    }
     if(ps==""){
    	document.getElementById("passspan").innerHTML="Please Fill Password";
    	return false;
    }
    var result;
    result = true;

    //alert("please enter first name");
    var a=document.getElementsByTagName("input");
    if(a[0].value=="krishna.barnwal49@gmail.com" && a[1].value=="1234567" )
    {
        return true;}
      else  if(a[0].value=="itsgops@gmail.com" && a[1].value=="111222333" )
    {
         return true;}

       else if(a[0].value=="dheerubhai@gmail.com" && a[1].value=="222333444" )
    {
        return true;}

        else  if(a[0].value=="sharukh@gmail.com" && a[1].value!="333444555" )
    {
         return true;}
         else
         {
         	alert("Username and Password didn't Match");
         	return false;
         }
 
    

     


}