<?php
// website/php/api.php
// A simple REST API returning mock system metrics.

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$action = isset($_GET['action']) ? $_GET['action'] : 'status';

$response = [];

switch ($action) {
    case 'status':
        $response = [
            'status' => 'online',
            'timestamp' => time(),
            'php_version' => phpversion(),
            'modules' => [
                'core' => true,
                'api' => true,
                'database' => 'disconnected'
            ]
        ];
        break;
        
    case 'data':
        $response = [
            'success' => true,
            'data' => [
                ['id' => 1, 'name' => 'Polyglot System Core', 'status' => 'active'],
                ['id' => 2, 'name' => 'TypeScript Client Framework', 'status' => 'idle'],
                ['id' => 3, 'name' => 'Rust Aggregator Daemon', 'status' => 'active']
            ]
        ];
        break;
        
    default:
        http_response_code(400);
        $response = [
            'error' => 'invalid_action',
            'message' => 'The action parameter is invalid or missing.'
        ];
        break;
}

echo json_encode($response, JSON_PRETTY_PRINT);
