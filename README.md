# nginx-nodejs-aws

This project is how to host an application on aws and then have nginx as reverse proxy with the nodejs server. The basic application was first converted into a docker image.
Then inside the aws EC2 instance terminal that docker image was pulled and 4 containers were started. Then the nginx.conf was configured accordingly. 

### To see the 
* _configuration of the nginx.conf_ file __GOTO__ nginx-conf.txt
* _steps for the whole process_ __GOTO__ docker-run-multiple-container.txt
* _basic application_ __GOTO__ index.js
* _Dockerfile configuration for the above application_ __GOTO__ Dockerfile

