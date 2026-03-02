# My First DevOps Docker Project

This is a simple Node.js web application **dockerized** to demonstrate a beginner DevOps workflow.

---

## 🌟 Features

- Node.js server running on port 3000
- Dockerfile included to build and run the application in a container
- Simple “Hello DevOps!” message displayed in the browser

---

## 🗂 Project Structure
devops-project1/
├── Dockerfile # Instructions to build Docker image
├── app.js # Simple Node.js server
├── package.json # Node.js project metadata
└── README.md # Project documentation

Local System (VS Code)
+-------------------------+
| app.js, package.json,   |
| Dockerfile              |
+-------------------------+
            |
            | git push / scp
            v
GitHub Repository
+-------------------------+
| Stores your project     |
| for version control     |
+-------------------------+
            |
            | git clone / pull
            v
AWS EC2 (Ubuntu / Linux)
+-------------------------+
| Docker installed        |
| Build & Run container   |
| app accessible at       |
| http://<EC2_IP>:3000   |
+-------------------------+
            |
            v
Browser / Users
+-------------------------+
| Access the Node.js app  |
| running in Docker       |
+-------------------------+

---

## ⚡ How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/yourusername/My_first_project1.git
cd My_first_project1

##Build the Docker image:
docker build -t my-first-devops-project .

##Run the container:

docker run -d -p 3000:3000 my-first-devops-project

##Open your browser and visit:

http://localhost:3000

#You should see:

Hello DevOps! I built my first Docker project!

Dockerfile Explained:-
======================
FROM node:18-alpine        # Use official lightweight Node.js image
WORKDIR /app               # Set working directory inside container
COPY package.json .        # Copy package.json for project setup
COPY app.js .              # Copy application code
EXPOSE 3000                # Expose port 3000
CMD ["node", "app.js"]     # Start the Node.js server
===========================================================================
Notes:
-----
WORKDIR ensures all commands run inside /app folder in container

COPY commands copy your local files into container

EXPOSE makes port 3000 available to your machine

CMD tells Docker how to run the app
