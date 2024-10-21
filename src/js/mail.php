<?php
// Load Composer's autoloader
require 'vendor/autoload.php'; // Uncomment if using Composer

// Use PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true); // Create a new PHPMailer instance

try {
    // Server settings
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host       = 'mx1.hostinger.com';             // Hostinger SMTP server
    $mail->SMTPAuth   = true;                             // Enable SMTP authentication
    $mail->Username   = 'info@anushaengg.com';         // Your Hostinger email address
    $mail->Password   = '';            // Your email password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // Enable TLS encryption
    $mail->Port       = 587;                              // TCP port to connect to (587 for TLS)

    // Recipients
    $mail->setFrom('your_email@example.com', 'Your Name'); // Your email and name
    $mail->addAddress('recipient@example.com', 'Recipient Name'); // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Here is the subject';               // Subject of the email
    $mail->Body    = '<strong>This is the HTML message body</strong>'; // HTML message body
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients'; // Plain text message

    // Send the email
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
