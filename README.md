# Digitem Technologies Assignment

## Overview
This repository contains the implementation for the **Digitem Technologies Assignment**. The project leverages **Jenkins**, **Nginx**, **Docker**, **Kubernetes (K3s)**, and **GitHub** to automate the entire development, deployment, and monitoring pipeline. It includes both **frontend** and **backend** services, which are containerized using Docker and deployed on Kubernetes.

### **Project Structure**
The project is divided into multiple directories, each responsible for a different part of the system:

## System Architecture
- **Server 1** (Jenkins, Docker, Nginx):
  - Hosts **Jenkins**, **Docker**, and **Nginx**.
  - Responsible for building Docker images, running Jenkins Pipelines, and serving static frontend files via Nginx.
  
- **Server 2** (K3s, Docker, Helm, Prometheus, Grafana):
  - Hosts the **K3s (Kubernetes)** cluster, **Docker**, **Helm**, **Prometheus**, and **Grafana**.
  - Deploys and scales backend services via Kubernetes.

## Prerequisites

1. **Ubuntu 24.04** installed on both servers.
2. **Docker** installed on both servers.
3. **Jenkins** installed on Server 1.
4. **K3s (Kubernetes)** installed on Server 2.
5. **Helm**, **Prometheus**, and **Grafana** installed on Server 2.

---

## Step-by-Step Installation Instructions

### **Step 1: Update the System**
Run the following commands on both servers to update the Ubuntu packages to the latest versions:

```bash
sudo apt update -y && sudo apt upgrade -y
```

### **Step 2 Install Java for Jenkins on Server 1**
Jenkins requires Java to run. Install Java 21 using the following command:

```bash
sudo apt install openjdk-21-jdk -y
```
verify the Java version:
```bash
java -version
```
You should see the following output:

![Image Description](https://github.com/TKSDE/Digitem_Technologies_Assigment/blob/main/images/1.png?raw=true)

### **Step 3: Install Jenkins on Server 1**
Add the Jenkins GPG key and repository:

```bash
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
```
Add the Jenkins repository:
```bash
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
/etc/apt/sources.list.d/jenkins.list > /dev/null
```
Update the system again:
```bash
sudo apt update -y
```
Install Jenkins:
```bash
sudo apt install jenkins -y
```
Start Jenkins and enable it to start on boot:

```bash
sudo systemctl start jenkins && sudo systemctl enable jenkins
```
Check the status of Jenkins:
```bash
sudo systemctl status jenkins
```
### **Step 4: Install Docker and Nginx on Server 1**
Install Docker on Server 1:
```bash
sudo apt install docker.io -y
```
Start Docker and enable it to run on boot:

```bash
sudo systemctl start docker && sudo systemctl enable docker
```
Install Nginx on Server 1:

```bash
sudo apt install nginx -y
```
Start Nginx and enable it to run on boot:

```bash
sudo systemctl start nginx && sudo systemctl enable nginx
```
### **Step 5: Install Kubernetes (K3s) on Server 1**
To install K3s on Server 2, execute the following:
```bash
curl -sfL https://get.k3s.io | sh -
```
Verify that K3s is running:

```bash
sudo kubectl get nodes
```
### **Step 6: Set Up Kubernetes (K3s) Deployment for Backend**


![Project Structure](https://github.com/TKSDE/Digitem_Technologies_Assigment/tree/main/fastapi-hello-world)

### **Step 7: Set Up Frontend (Static Website)**

![Project Structure](https://github.com/TKSDE/Digitem_Technologies_Assigment/tree/main/frontend)

### **Step 8: Jenkins Pipeline for CI/CD**

![Project Files](https://github.com/TKSDE/Digitem_Technologies_Assigment/tree/main/Jenkins)













