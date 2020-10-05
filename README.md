# INSTRUCTIONS for running on local mashine

1. clone the project from github repo

2. run cd gitUsersApp/ on terminal

3. run npm i on terminal

4. run ng serve on terminal

# API authorisation

if API starts giving 403 forbidden in response this mean this users rate limit has exceed solution for this would be:
go to interceptors/httpinterceptors.ts file and change user value from 'purpleoctop' to github username.
