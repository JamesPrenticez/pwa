# Build

docker build -t your-image-name -f backend/Dockerfile .
docker build -t pwa-backend -f backend/Dockerfile .

# Run

docker run -p 5000:5000 pwa-backend

# Upload to Docker Hub

docker tag selfreg-be prenticez/selfreg-be:latest
docker push prenticez/selfreg-be:latest

# Need to figure out how to only take the node/modules from the app not the root

We can list our images with - use CMD not bash

```sh
  docker images
```

And look inside them with

```sh
docker run -it <image_id> /bin/sh
```

docker system prune -a --volumes
