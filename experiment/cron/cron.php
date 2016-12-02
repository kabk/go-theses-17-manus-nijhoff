#!/usr/bin/env php

<?php

//Mail addresses

$file = dirname(__FILE__).'/mails.csv';
$csv = array_map('str_getcsv', file($file));

$date = strtotime("December 12, 2016 09:00:00");
$remaining = $date - time();

$emoji = [ "😀", "😬", "😁","😃","😄","😗","🤗","😎","🤓","🤑","😒","🙄","🤔","😳","😣","😖","😫","😩","😱","😨","😰","😭","😓","😪","😥","😢","😤","😯","😵","😲","😦","🤐","😧","😴","💤","🤕","🤒","😷","😴","💤","💩"];

$randomoji = $emoji[mt_rand(0, count($emoji) - 1)];

$rem = $date - time();
$day = floor($rem / 86400);
$hr  = floor(($rem % 86400) / 3600);
$min = floor(($rem % 3600) / 60);
$sec = ($rem % 60);

// the message

foreach ($csv as $item) {
	// $msg = "Hello {$item[0]}{$item[1]}.\nYour email adress is {$item[2]}";

	$msg = "Hello $item[0]\n\n$day days, $hr hours, $min minutes and $sec seconds remaining to write ur thesis {$randomoji}\n\nBye";

	echo $msg;

	// send email
	mail( $item[2],"Thesis update {$randomoji}",$msg);
}

?>