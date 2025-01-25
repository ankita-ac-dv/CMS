<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Contact - Content Management System</title>
</head>
<body>
    <?php
        include 'Header.php';
    ?>
    <div class="contact-form">
    <h2>Contact Us</h2>
    <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required>

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>

        <button type="submit">Send Message</button>
    </form>
</div>
</body>
</html>