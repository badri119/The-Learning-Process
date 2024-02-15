#Getting node package 
FROM node:19-alpine

#Creating a work directory path of a docker container
WORKDIR /usr/src/generator-backend

#Copy package.json and package-lock.json as they have all the required dependencies and paste it to the WORKDIR
COPY package*.json /usr/src/generator-backend

#Run npm install to install all the dependencies
RUN npm install

#Copy all the files to the source directory A.K.A Work directory
COPY . /usr/src/generator-backend

#Exposes the internal port inside the container and exposes it to the local machine
EXPOSE 3001

#command start the server
CMD ["npm", "start"]
