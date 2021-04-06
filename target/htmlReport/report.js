$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/app/features/CreateUser.feature");
formatter.feature({
  "line": 1,
  "name": "Create user in mailchimp application",
  "description": "",
  "id": "create-user-in-mailchimp-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create users with different set of data",
  "description": "",
  "id": "create-user-in-mailchimp-application;create-users-with-different-set-of-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Sign Up screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter email \"\u003cemail\u003e\" username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign Up button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify the validation \"\u003cvalidation\u003e\" message",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "create-user-in-mailchimp-application;create-users-with-different-set-of-data;",
  "rows": [
    {
      "cells": [
        "email",
        "username",
        "password",
        "validation"
      ],
      "line": 10,
      "id": "create-user-in-mailchimp-application;create-users-with-different-set-of-data;;1"
    },
    {
      "cells": [
        "imranwtcindia@gmail.com",
        "imranwtcindia@gmail.com",
        "Qwerty@123",
        "Another user with this username already exists."
      ],
      "line": 11,
      "id": "create-user-in-mailchimp-application;create-users-with-different-set-of-data;;2"
    },
    {
      "cells": [
        "",
        "imranwtcindia+011@gmail.com",
        "Qwerty@123",
        "Please enter a value"
      ],
      "line": 12,
      "id": "create-user-in-mailchimp-application;create-users-with-different-set-of-data;;3"
    },
    {
      "cells": [
        "imranwtcindia@gmail.com",
        "abcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzimranwtcindia@gmail.com",
        "Qwerty@123",
        "Enter a value less than 100 characters long"
      ],
      "line": 13,
      "id": "create-user-in-mailchimp-application;create-users-with-different-set-of-data;;4"
    },
    {
      "cells": [
        "validUser",
        "imranwtcindia+0101@gmail.com",
        "Qwerty@123",
        "Check your email"
      ],
      "line": 14,
      "id": "create-user-in-mailchimp-application;create-users-with-different-set-of-data;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5120068700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Create users with different set of data",
  "description": "",
  "id": "create-user-in-mailchimp-application;create-users-with-different-set-of-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Sign Up screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter email \"imranwtcindia@gmail.com\" username \"imranwtcindia@gmail.com\" and password \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign Up button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify the validation \"Another user with this username already exists.\" message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateUsersScenario.moveToSignUpPage()"
});
formatter.result({
  "duration": 1422187000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imranwtcindia@gmail.com",
      "offset": 13
    },
    {
      "val": "imranwtcindia@gmail.com",
      "offset": 48
    },
    {
      "val": "Qwerty@123",
      "offset": 87
    }
  ],
  "location": "CreateUsersScenario.enterUserDetail(String,String,String)"
});
formatter.result({
  "duration": 437241700,
  "status": "passed"
});
formatter.match({
  "location": "CreateUsersScenario.clickOnSignUpButton()"
});
formatter.result({
  "duration": 6329061000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Another user with this username already exists.",
      "offset": 23
    }
  ],
  "location": "CreateUsersScenario.verifySuccessAndValidationMessage(String)"
});
formatter.result({
  "duration": 38745400,
  "status": "passed"
});
formatter.after({
  "duration": 124090800,
  "status": "passed"
});
formatter.before({
  "duration": 5867585800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create users with different set of data",
  "description": "",
  "id": "create-user-in-mailchimp-application;create-users-with-different-set-of-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Sign Up screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter email \"\" username \"imranwtcindia+011@gmail.com\" and password \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign Up button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify the validation \"Please enter a value\" message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateUsersScenario.moveToSignUpPage()"
});
formatter.result({
  "duration": 4305125300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "imranwtcindia+011@gmail.com",
      "offset": 25
    },
    {
      "val": "Qwerty@123",
      "offset": 68
    }
  ],
  "location": "CreateUsersScenario.enterUserDetail(String,String,String)"
});
formatter.result({
  "duration": 659418300,
  "status": "passed"
});
formatter.match({
  "location": "CreateUsersScenario.clickOnSignUpButton()"
});
formatter.result({
  "duration": 4015480200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a value",
      "offset": 23
    }
  ],
  "location": "CreateUsersScenario.verifySuccessAndValidationMessage(String)"
});
formatter.result({
  "duration": 35337900,
  "status": "passed"
});
formatter.after({
  "duration": 75837200,
  "status": "passed"
});
formatter.before({
  "duration": 5437204400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create users with different set of data",
  "description": "",
  "id": "create-user-in-mailchimp-application;create-users-with-different-set-of-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Sign Up screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter email \"imranwtcindia@gmail.com\" username \"abcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzimranwtcindia@gmail.com\" and password \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign Up button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify the validation \"Enter a value less than 100 characters long\" message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateUsersScenario.moveToSignUpPage()"
});
formatter.result({
  "duration": 4530945100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imranwtcindia@gmail.com",
      "offset": 13
    },
    {
      "val": "abcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzabcdefghijlkmnopqrstuvwxyzimranwtcindia@gmail.com",
      "offset": 48
    },
    {
      "val": "Qwerty@123",
      "offset": 191
    }
  ],
  "location": "CreateUsersScenario.enterUserDetail(String,String,String)"
});
formatter.result({
  "duration": 418055100,
  "status": "passed"
});
formatter.match({
  "location": "CreateUsersScenario.clickOnSignUpButton()"
});
formatter.result({
  "duration": 4217559700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter a value less than 100 characters long",
      "offset": 23
    }
  ],
  "location": "CreateUsersScenario.verifySuccessAndValidationMessage(String)"
});
formatter.result({
  "duration": 80674300,
  "status": "passed"
});
formatter.after({
  "duration": 53634400,
  "status": "passed"
});
formatter.before({
  "duration": 4942440400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Create users with different set of data",
  "description": "",
  "id": "create-user-in-mailchimp-application;create-users-with-different-set-of-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Sign Up screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter email \"validUser\" username \"imranwtcindia+0101@gmail.com\" and password \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign Up button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify the validation \"Check your email\" message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateUsersScenario.moveToSignUpPage()"
});
formatter.result({
  "duration": 4714143500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validUser",
      "offset": 13
    },
    {
      "val": "imranwtcindia+0101@gmail.com",
      "offset": 34
    },
    {
      "val": "Qwerty@123",
      "offset": 78
    }
  ],
  "location": "CreateUsersScenario.enterUserDetail(String,String,String)"
});
formatter.result({
  "duration": 427580100,
  "status": "passed"
});
formatter.match({
  "location": "CreateUsersScenario.clickOnSignUpButton()"
});
formatter.result({
  "duration": 9132641200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check your email",
      "offset": 23
    }
  ],
  "location": "CreateUsersScenario.verifySuccessAndValidationMessage(String)"
});
formatter.result({
  "duration": 49424600,
  "status": "passed"
});
formatter.after({
  "duration": 4182450800,
  "status": "passed"
});
});