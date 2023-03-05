This is a demo project to complete Paramo technical assesment.
Its my first time using cypress and it was a nice challenge having to make it work along with Cucumber and Faker.

##Instructions##

1) Clone Repo: git clone https://github.com/diegomuner/ParamoCypress
2) Run npx cypress open in your cli while in the root folder of the cloned project.
3) E2E Testing should be displayed as Configured // click it and start running cypress in Chrome.
4) in E2E specs, click SignUp.
5) Tests should start running.

Also you can navigate to root directory and do "npx cypress run" this will run headless and will save video output to the videos folder located at project root.

I also used the opportunity to get a bit more involved with Cypress and after I got the first version working, i started to implement some good practices like moving the locators outside of the specs files, etc. 

The steps i followed to achieving this result were:
- Made the test work having everything in 1 single file and having that test working
- Once achieved that, I spend some time learning on how to install and implement Cucumber, and did it, until the same test worked fine.
- After that I introduced fixtures, a json file that has all locator references to my webpage elements
- Finally i tried out custom commands to clean up my spec file.

Note: I did not do any work around the captchas
