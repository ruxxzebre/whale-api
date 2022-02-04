# WHALE LISTENER

The goal of the task is to implement an application that will attach itself to desired containers and pass the logs to a storage layer.

In order to implement it you will need to do the following:
1. Create a Node.js application that can be run as a docker container.
2. Listen to docker events regarding containers
3. Get a stream from the container using the attach interface
4. Pass the stream to a storage layer
5. Store the logs
6. Provide an interface (API) to retrieve the logs

When you implement consider the following:
* What will be the strategy of deciding which containers to listen on (taking into account the fact that you will not want to log every container that will be created)
* The storage layer should be generic and abstract so it will be easy to add new implementations if needed in the future for now you can store it on disc
* You should make sure you get all logs from the container

Deliverables:
* Repository with the Node.js application
* Implement a basic file storage layer
* Create a small demo that demonstrates the solution capabilities
* Add a README file with instructions about how to run the demo.