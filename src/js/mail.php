<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Your email address where you want to receive the messages
    $to = "anumcait@gmail.com";  // Change this to your email address
    $subject = "New Message from Contact Form: $subject";  // Email subject

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect or display success message
        echo "Thank you! Your message has been sent.";
    } else {
        // Redirect or display failure message
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    echo "Invalid Request";
}
?>