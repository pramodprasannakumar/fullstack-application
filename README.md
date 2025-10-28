# DevOps_Fullstack
1️⃣ # **Clone the Repository**
git clone https://github.com/PavanreddyK70/DevOps_FullStack.git

cd DevOps_FullStack

2️⃣ **Backend Setup**

Update RDS details in Backend/src/main/resources/application.properties:

spring.datasource.url=jdbc:mysql://<RDS-ENDPOINT>:3306/contactdb

spring.datasource.username=admin

spring.datasource.password=<yourpassword>

spring.jpa.hibernate.ddl-auto=update

Build & package using Maven:

cd Backend

mvn clean package

Build Docker image:

docker build -t dockerpavank/docker-backend1:latest .

3️⃣ **Frontend Setup**

Update backend NodePort URL in contact.service.ts:

private baseUrl = "http://<EC2-IP>:<NodePort>";

Build and containerize frontend:

npm run build

docker build -t dockerpavank/docker-frontend1:latest .

4️⃣ **Deploy on Kubernetes**

kubectl apply -f backend-deployment.yml

kubectl apply -f frontend-deployment.yml

Check:

kubectl get nodes

kubectl get pods

kubectl get svc

Access your app via:
Frontend:
👉 http://<EC2-Public-IP>:<Frontend-NodePort>

Backend:
👉 http://<EC2-Public-IP>:<Backend-NodePort>

📈 **Outcome**

Fully functional full-stack app deployed on Kubernetes.

Backend connected to AWS RDS for persistent storage.

Hands-on experience with CI/CD, Docker, and Kubernetes orchestration on AWS.
