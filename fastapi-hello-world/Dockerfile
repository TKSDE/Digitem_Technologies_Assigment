FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9  # Base image with FastAPI, Uvicorn, and Gunicorn for Python 3.9

WORKDIR /app  # Set the working directory inside the container to /app

COPY requirements.txt .  # Copy the requirements.txt to the container
RUN pip install --no-cache-dir -r requirements.txt  # Install dependencies from requirements.txt

COPY . .  

EXPOSE 5000  

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000", "--log-level", "error"]  # Command to run Uvicorn
