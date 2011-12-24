<?php
$about = check_input($_POST['about'],"What were you talking about?");
$atrocityamount = check_input($_POST['atrocityamount'],"Just how bad was it, anyway?");
$livesAffected = check_input($_POST['livesAffected'],"How many lives were affected?");
$separation = check_input($_POST['separation'],"How many degrees of separation?");
$timeSince = check_input($_POST['timeSince'],"How long since the event?");
$laugh = check_input($_POST['laugh'],"Did anyone laugh?");
$groups = check_input($_POST['groups']);
?>

<html>
<body>

Your joke was about <?php echo $_POST['about']; ?>.<br />
Atrocity amount: <?php echo $_POST['atrocityamount']; ?>.<br />
Lives affected: <?php echo $_POST['livesAffected']; ?>.<br />
Degrees of separation: <?php echo $_POST['separation']; ?>.<br />
It has been <?php echo $_POST['timeSince']; ?> years since the event.<br />
Did anyone laugh? <?php echo $_POST['laugh']; ?>.<br />
The following groups were involved: <?php echo $_POST['groups']; ?>.<br />

</body>
</html>

if (preg_match("/\D/",$atrocityamount))
{
    die("Please enter numbers only for Atrocity Amount.");
}

if (preg_match("/\D/",$livesAffected))
{
    die("Please enter numbers only for Lives Affected.");
}

if (preg_match("/\D/",$timeSince))
{
    die("Please enter numbers only for years since the event.");
}


<?php
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
	if ($problem && strlen($data) == 0)
	    {
	        die($problem);
	    }
	    return $data;
}
?>