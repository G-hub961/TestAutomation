Feature: Create user in mailchimp application
 
 Scenario Outline: Create users with different set of data
    Given User is on Sign Up screen
    When Enter email "<email>" username "<username>" and password "<password>"
    And Click on Sign Up button
    Then Verify the validation "<validation>" message
 
Examples: 
| email  									 | username  								    |  password  	 |  validation  | 
| imranwtcindia@gmail.com  | imranwtcindia@gmail.com      |  Qwerty@123  |  Another user with this username already exists.  |
| 											   | imranwtcindia+011@gmail.com  |  Qwerty@123  |  Please enter a value  |
| imranwtcindia@gmail.com  | abcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzimranwtcindia@gmail.com  |  Qwerty@123  |  Enter a value less than 100 characters long  |
| validUser  | imranwtcindia+0101@gmail.com      |  Qwerty@123  |  Check your email  |
