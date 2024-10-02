FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9

WORKDIR /app  # Set the working directory inside the container to /app

COPY requirements.txt .  
RUN pip install --no-cache-dir -r requirements.txt  

COPY . .  

EXPOSE 5000 

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000", "--log-level", "error"]  
