<?php
$to = 'info@anushaengg.com';
$subject = 'test';
$message = 'Hi , testing?'; 
$from = 'anumcait@gmail.com';
 
// Sending email
if(mail($to, $subject, $message)){
    echo 'Your mail has been sent successfully.';
} else{
    echo 'Unable to send email. Please try again.';
}
?>