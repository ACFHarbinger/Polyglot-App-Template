<?php
// libraries/other/phpmailer/send_email.php
// PHPMailer example for sending an email via SMTP.

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// In a real application, you would load via composer autoloader:
// require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = 0;                       // Enable/disable verbose debug output
    $mail->isSMTP();                            // Send using SMTP
    $mail->Host       = 'smtp.mailtrap.io';     // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                   // Enable SMTP authentication
    $mail->Username   = 'mock_username';        // SMTP username
    $mail->Password   = 'mock_password';        // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;                    // TCP port to connect to

    // Recipients
    $mail->setFrom('noreply@polyglotapp.io', 'Polyglot System');
    $mail->addAddress('admin@example.com', 'Admin User');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Workspace Environment Sync Alert';
    $mail->Body    = '<h1>Environment synchronized</h1><p>The workspace was updated successfully.</p>';
    $mail->AltBody = 'The workspace environment was synchronized successfully.';

    // $mail->send(); // Commented out for mock run
    echo "Message has been prepared for transmission successfully.\n";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}\n";
}
