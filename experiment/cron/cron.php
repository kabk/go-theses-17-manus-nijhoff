#!/usr/bin/env php

<?php

//Mail addresses

$file = dirname(__FILE__).'/mails.csv';
$csv = array_map('str_getcsv', file($file));

echo $file;

$emoji = array("💅","👃","👁","🗣","👥","👳","👮","🎅","🕵","👰","🚶","👬","👫","🙇","😬","🙆","💆");

$randmoji = array_rand($emoji, 1);

$date = strtotime("December 12, 2016 09:00:00");
$remaining = $date - time();

$rem = $date - time();
$day = floor($rem / 86400);
$hr  = floor(($rem % 86400) / 3600);
$min = floor(($rem % 3600) / 60);
$sec = ($rem % 60);

foreach ($csv as $item) {

	$msg = "Hello $item[0]\n\n$day days, $hr hours, $min minutes and $sec seconds remaining to write ur thesis\n\nBye $emoji[$randmoji]";

	echo $msg;

	// send email
	mail( $item[2], "Thesis update", $msg);
}

?>