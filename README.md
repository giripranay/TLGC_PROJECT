# TLGC_PROJECT
A web page shows the users who forked the react repo.

Hosted on Github pages: https://giripranay.github.io/TLGC_PROJECT/#/

Technologies Used : AngularJS, HTML,CSS, JavaScript.

This web has two functions:

Function1: Show all the users who forked the react repository.
Funtion2: There is a follow button at each user. If you click the button, you will follow the respective user.

Description: This web page is hosted on github pages (https://giripranay.github.io/TLGC_PROJECT/#/). This web page shows the users who forked react repository. The second function for this web page is that you can follow users shown on the screen. The function2 requires your authentication.In order to give access, the user need to generate access token in github and update apiConfig file with their access token.

How to generate access token:
  Go to your github account ---> Settings/Developer settings/Personal Access token
                                   1.Clik on 'Generate new token'
                                   2.Give name for the access token
                                   3.Next you need to select scope for this access token.
                                   4.Select "User" checkbox
                                   5.Go down and click 'Generate token' button.
                                   
Setup: 
  Install NPM
  Install http-server
        npm install --global http-server
  Clone the repo: git clone https://github.com/giripranay/TLGC_PROJECT.git
    1.Go to folder where 'index.html' file exists
    2.Run below command
          http-server -p 8080
    3. Open below link in browser:
           http://127.0.0.1:8080

  

