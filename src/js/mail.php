<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data

    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $phone = htmlspecialchars(trim($_POST['number']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Email settings
    $to = "info@anushaengg.com"; 
    $email_subject = "New message: $subject";
    $email_body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    $headers = "From: $email\r\n" .
                "Reply-To: $email\r\n" .
                "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent.";
    }
    }
    ?>