<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address where you want to receive the messages
    $to = "anumcait@gmail.com";
    $subject = "New Message from Contact Form";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $name <$email>";

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
