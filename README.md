# Agrolly Web

[![View](https://img.shields.io/badge/View-Agrolly%20%20Website-blue)](https://test-agrolly-web.agrolly-270189-9983b1076fe533f6986f33a6df188ac1-0000.us-south.containers.appdomain.cloud/) [![Build and Deploy to IKS](https://github.com/Call-for-Code/Agrolly-Web/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Call-for-Code/Agrolly-Web/actions/workflows/deploy.yml) [![Linter](https://github.com/Call-for-Code/Agrolly-Web/actions/workflows/linter.yml/badge.svg?branch=main)](https://github.com/Call-for-Code/Agrolly-Web/actions/workflows/linter.yml)

Agrolly Web project is Agrolly's Website developed with React web framework. <br>

### [Git Guide](https://github.com/git-guides/)

Everything you need to know about Git, from getting started to advanced commands and workflows. Click the [link](https://github.com/git-guides/) to learn.

#### [Getting Started with Git](https://github.com/git-guides/#getting-started-with-git):

1. [Install Git](https://github.com/git-guides/install-git)

2. [Add SSH Key to GitHub Account](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

3. [Steps to add new changes to the project](GIT-CI.md)

### Run Agrolly Web App locally

#### Pre-reqisites

1. [Install Node](https://nodejs.org/en/download/)

#### Run the app locally

1. **Build the App**

- Start a terminal/CMD in `~/Agrolly-Web` root directory.
- Execute command `npm install` or `npm run setup`.

2. **Run the App**

- Execute command `npm start`.
- Open web browser and enter `http://localhost:3000`.

### Run Agrolly Web App locally on Docker container

#### Pre-requisites

1. [Install Docker](https://docs.docker.com/get-docker/)
2. Create a `.env` file in the project root level and add the following entry in the file with the appropriate Agrolly backend service URL endpoint;
   ```
   REACT_APP_BACKEND_API=<Agrolly Backend service URL>
   ```
   **Example:** If the backend service is deployed locally then the entry should look like;
   ```
   REACT_APP_BACKEND_API=http://localhost:5000
   ```

#### Run the App on docker container

1. **Build docker image**

- Start a terminal/CMD in `~/Agrolly-Web` root directory
- Execute command `docker build --tag agrolly/web:dev .`

2. **Run the docker image and bring up Agrolly-Web locally**

- Execute command `docker run -it -d -p 4000:4000 --name agrolly-web agrolly/web:dev`
- Open web browser and enter `http://localhost:3000`.

### Deploy and Run Agrolly-Web on IBM Cloud Kubernetes Cluster

For instructions to deploy and run the Agrolly Web on IBM Cloud Kubernetes cluster, please check the document [Deployment to Kubernetes](https://github.com/Call-for-Code/Agrolly-Web/blob/main/KUBERNETES.md)
