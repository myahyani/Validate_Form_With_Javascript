<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
  http_response_code(404);
  exit;
}

$correction = [
  "q1" => isset($_POST['q1']) && $_POST['q1'] == 'q1_a',
  "q2" => $_POST['q2'] == 'q2_c',
  "q3" => $_POST['q3'] == 'q3_a',
  "q4" => $_POST['q4'] == 'q4_d',
  "q5" => $_POST['q5'] == 'q5_b',
];

print(json_encode($correction));
