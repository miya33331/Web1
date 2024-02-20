<?php
    $operand1 = $_POST["operand1"];
    $opecode = $_POST["opecode"];
    $operand2 = $_POST["operand2"];

    echo $operand1 . $opecode . $operand2 . "=" . $operand1 + $operand2;
?>