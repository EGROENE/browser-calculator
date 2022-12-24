# browser-calculator
This is a very simple calculator web app I built using HTML, CSS, & vanilla JavaScript. Here are its features:
* A different background image randomly from an array of image URLs, displays
* The value (text content of each button that is clicked) is pushed into an array, which is later joined so that the eval() method can be used to calculate the operation & the result can be displayed. I know using the eval() method is not the best thing to do when handling sensitive information, but this is only meant to be a simple calculator.
* Error-handling: 
  * To check if the first or last thing the user inputs is a mathematical operator, I loop through an array containing these symbols. If the first or last item input is one of these things, an "Invalid operation" error message displays. This message also displays if there is some other kind of syntax error.
  * If two consecutive operators are added, the first one is deleted & the second one displays & is used in the calculation.
  * To ensure the amount of input characters doesn't exceed the width of the 'screen' area of the calculator, the user can see a message informing the user of the character limit, although the operation can still be done. 
  * If the user tries to divide by zero, the "Invalid operation" displays.
* When the user clicks the 'clear' button, all previous input is erased & the calculator 'screen' displays the default '.'.
* When the user clicks the 'equals' button, & the operation is valid, the result displays on the calculator screen & previous input is erased so a new operation can be done.

* If the result of the operation is an integer, the whole number displays. Otherwise, the decimal is rounded to two places.
* The page is also mobile-responsive.
