
Feature: Casino Sign Up
    Background: 
        Given I navigate to demo casino homepage

    Scenario: I want to sign up a new user
       Then I see and close the welcome modal
        When User clicks on sign up button
        Then User populates sign up form 
    


