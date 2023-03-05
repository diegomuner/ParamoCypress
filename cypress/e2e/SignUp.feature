
Feature: Casino Sign Up
    Background: 
        Given I navigate to demo casino homepage

    Scenario: I want to sign up a new user
        When I see and close the welcome modal
        When User clicks sign up and populates sign up form 
        Then Verify user signed up
    

