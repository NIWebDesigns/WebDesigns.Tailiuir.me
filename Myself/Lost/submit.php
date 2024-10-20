<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Email settings
    $to = "itsmat@yandex.com";  // Your email address
    $subject = "Lost Device Reported";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: noreply@yourwebsite.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your submission. I will contact you shortly.";
    } else {
        echo "There was an error sending your message. Please try again.";
    }
}
?>
