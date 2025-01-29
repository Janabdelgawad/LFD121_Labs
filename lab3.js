//Create a regular expression, for use in ECMAScript (JavaScript), that only matches the letters "Y" or "N".

^(Y|N)$

//Create a regular expression, for use in ECMAScript (JavaScript), that only matches one or more uppercase Latin letters (A through Z).

^[A-Z]+$

//Create a regular expression, for use in ECMAScript (JavaScript), that only matches the words "true" or "false".

^(true|false)$

//Create a regular expression that only matches one or more uppercase Latin letters (A through Z). However, this time, do it for Python (not JavaScript).

^[A-Z]+\Z

//Create a regular expression that only matches one Latin letter (A through Z), followed by a dash ("-"), followed by one or more digits. This time, do it for Ruby (not JavaScript or Python).

\A[A-Z]-\d+\z
