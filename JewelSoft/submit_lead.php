<?php
/**
 * Jewelsoft Lead Form Processor
 * Appends form data to a local CSV database and generates a WhatsApp API redirection URL.
 * Author: Antigravity / Shyam Software Team
 */

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve and sanitize inputs
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
    $interest = isset($_POST['interest']) ? strip_tags(trim($_POST['interest'])) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    // Simple validation
    if (empty($name) || empty($phone)) {
        http_response_code(400);
        echo json_encode([
            'status' => 'error',
            'message' => 'Name and Phone Number are required fields.'
        ]);
        exit;
    }

    // Determine readable product label
    $product_label = "JewelSoft ERP + Weight Scale";
    if ($interest === 'jewelsoft') {
        $product_label = "JewelSoft ERP Only";
    } elseif ($interest === 'weightscale') {
        $product_label = "Weight Scale Barcode System Only";
    } elseif ($interest === 'custom') {
        $product_label = "Custom Build Software";
    }

    // File path for CSV database
    $csv_file = 'leads.csv';
    $file_exists = file_exists($csv_file);

    // Open file in append mode
    $file_handle = fopen($csv_file, 'a');

    if ($file_handle) {
        // If file is newly created, write header line first
        if (!$file_exists) {
            fputcsv($file_handle, ['Timestamp', 'Client Name', 'Contact Number', 'Product Interest', 'Requirements / Notes']);
        }

        // Write row data (automatically handles escaping and comma enclosures)
        $timestamp = date('Y-m-d H:i:s');
        fputcsv($file_handle, [$timestamp, $name, $phone, $product_label, $message]);
        fclose($file_handle);
    }

    // Formulate a beautiful WhatsApp text template
    $whatsapp_phone = "917016146191";
    $text_message = "Hello Shyam Software,\n\nI visited your website and would like to request a Free Demo of your software services.\n\nHere are my details:\n";
    $text_message .= "• Name: " . $name . "\n";
    $text_message .= "• Phone: " . $phone . "\n";
    $text_message .= "• Interest: " . $product_label . "\n";
    if (!empty($message)) {
        $text_message .= "• Note: " . $message . "\n";
    }
    $text_message .= "\nPlease get in touch with me.";

    // URL encode the message
    $encoded_text = urlencode($text_message);
    $whatsapp_url = "https://api.whatsapp.com/send?phone=" . $whatsapp_phone . "&text=" . $encoded_text;

    // Return success JSON
    echo json_encode([
        'status' => 'success',
        'message' => 'Lead logged successfully in local database.',
        'whatsapp_url' => $whatsapp_url
    ]);
    exit;
} else {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Method Not Allowed. Only POST requests are supported.'
    ]);
    exit;
}
