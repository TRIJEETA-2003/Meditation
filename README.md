# Meditation

<details>
  
![Screenshot 2024-12-21 163440](https://github.com/user-attachments/assets/c1615232-e5b9-4ae5-b838-5893f536f9db)
</details>

---

Folder Structure

```go
project-folder/
│
├── Dockerfile
├── docker-compose.yml
├── index.html
├── styles.css
├── js/
│   └── script_meditation.js
├── assets/
│   ├── images/
│   │   └── meditation.jpg
│   └── music/
│       └── focus_gamma.wav
```
<img src="https://github.com/akashdip2001/college-final-year-project/blob/main/img/colour_line.png">

# Deployment:

- AWS:EC2 (Cloud)
- Jenkins (CI-CD)
- Docker (runtime environment)

---

## Build and Run the Container

### 1. Build the Docker Image: Open a terminal in the project folder and run:
```yaml
docker-compose build
```

### 2. Run the Container: Start the container with:
```yaml
docker-compose up
```

### 3. Access Your Website: Open your browser and go to `http://localhost:8080`.
   
---

## How It Works

1. The Dockerfile sets up an Nginx server and copies your website files into the correct directory (/usr/share/nginx/html)[.](https://github.com/akashdip2001)


2. The docker-compose.yml configures the container and maps your local directory to the container for easy development.


3. You can deploy the containerized website on any cloud platform (e.g., AWS, Google Cloud, Azure) that supports Docker.

---

## Deploying to Cloud

### 1. Build the Docker Image: Use the following command to build and tag your Docker image:
```yaml
docker build -t your-website:latest .
```

### 2. Push the Image to a Container Registry: Push the image to Docker Hub or another registry (e.g., AWS ECR, Google Container Registry):
```yaml
docker tag your-website:latest your-dockerhub-username/your-website:latest
docker push your-dockerhub-username/your-website:latest
```

### 3. Run in Any Cloud Environment: Pull the image and run it on any Docker-compatible service:
```yaml
docker pull your-dockerhub-username/your-website:latest
docker run -p 80:80 your-dockerhub-username/your-website:latest
```
---
