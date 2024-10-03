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
```bash




