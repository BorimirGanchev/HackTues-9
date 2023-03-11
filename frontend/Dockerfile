# Dockerfile for React client

# Build react client
#FROM node:18-alpine
#FROM mcr.microsoft.com/windows/servercore:ltsc2022
FROM node:10.19.0-widowsservercore 

# Working directory be app
#WORKDIR /usr/src/app
WORKDIR C:\app

COPY ["package.json", "package-lock.json*", "./"]

###  Installing dependencies
RUN msiexec.exe /a https://nodejs.org/dist/latest-v18.x/node-v18.15.0-x64.msi /quite
RUN npm install -g npm@9.6.1

# copy local files to app folder
COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]