<?php
	$file = $_FILES['file'];
	$filename = '../thumbnails/' . $file['name'];
	move_uploaded_file($file['tmp_name'], $filename);
	$data = json_decode(file_get_contents('../repository/products.json'), true);

	
	$data[] = [
		'id'   => end($data)['id']+1,
		'name' => $_POST['name'],
		'info' => $_POST['info'],
		'price' => $_POST['price'],
		'thumbnail' => $filename,
	];

	$data = file_put_contents('../repository/products.json', json_encode($data));
	header('Location: ../index.php');