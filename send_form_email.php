<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "badagadzeb@gmail.com";
    $email_subject = "Your email subject line";
     $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 

 
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['massage']; // required
 

 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "First Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
 



   
 
   if(preg_match($email_exp,$email_from)) {
       // create email headers
        $headers = 'From: '.$email_from."\r\n".
        'Reply-To: '.$email_from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
        @mail($email_to, $email_subject, $email_message, $headers);  ?>
        <div id="success" style="text-align: center;"> Message sent successfully!</div>
   <?php }else{ ?>
        <div id="success" style="text-align: center; color:red;"> Invalid Email!</div>
   <?php }


}
?>