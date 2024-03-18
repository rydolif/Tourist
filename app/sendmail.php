<?php
	$SITE_TITLE = 'Туристическая фирма “Роза Ветров”';
	$SITE_DESCR = '';

	if ( isset($_POST) ) {
		$name = htmlspecialchars(trim($_POST['name']));
		// $name = htmlspecialchars(trim($_POST['name']));
		$phone = htmlspecialchars(trim($_POST['phone']));
		$subject = $_POST['subject'] ? htmlspecialchars(trim($_POST['subject'])) : '';
		$comment = isset($_POST['comment']) ? htmlspecialchars(trim($_POST['comment'])) : '';
		$question = isset($_POST['question']) ? htmlspecialchars(trim($_POST['question'])) : '';
		$to = 'ssss@yandex.com';

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Reply-To: ". $email . "\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data = '<h1>'.$subject."</h1>";
		$data .= 'Name: '.$name."<br>";
		// $data .= 'Email: '.$email."<br>";
		$data .= 'Telephone: '.$phone."<br>";

		if ( $comment != '' ) {
			$data .= 'A comment: ' . $comment;
		}
		if ( $question != '' ) {
			$data .= 'Question: ' . $question;
		}

		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>this message was sent from the site ".$SITE_TITLE." - ".$SITE_DESCR.", no need to answer it
				</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Form submission error</div>';
		}

	}
	else {
			echo '<div class="error">Error, form data not submitted.</div>';
	}
	die();
?>