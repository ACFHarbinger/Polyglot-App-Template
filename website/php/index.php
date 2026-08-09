<?php
// website/php/index.php
// A simple front controller and routing script.

session_start();

$request_uri = $_SERVER['REQUEST_URI'];
$base_path = '/website/php';

// Remove base path and query parameters
$route = str_replace($base_path, '', $request_uri);
$route = parse_url($route, PHP_URL_PATH);

header('Content-Type: text/html; charset=utf-8');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Module - Polyglot App</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: #0b0f19;
            color: #f8fafc;
            font-family: 'Outfit', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: rgba(30, 41, 59, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            padding: 3rem;
            text-align: center;
            max-width: 500px;
            backdrop-filter: blur(8px);
        }
        h1 {
            background: linear-gradient(135deg, #6366f1, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }
        p {
            color: #94a3b8;
            margin-bottom: 2rem;
        }
        .btn {
            background: linear-gradient(135deg, #4f46e5, #0891b2);
            color: #ffffff;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            transition: transform 0.2s;
        }
        .btn:hover {
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>PHP Server Interface</h1>
        <p>This is the entry point for the PHP application running under <code>website/php/</code>. Access the mock API endpoint below.</p>
        <a href="api.php?action=status" class="btn">Call JSON API</a>
    </div>
</body>
</html>
