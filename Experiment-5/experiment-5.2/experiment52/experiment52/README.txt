EXPERIMENT 5.2
Global Exception Handling, Custom Exceptions, Correlation IDs and Structured Logging.

Run:
  .\mvnw.cmd spring-boot:run
or:
  mvn spring-boot:run

Backend:
  http://localhost:8081/api/users

Example error:
  GET http://localhost:8081/api/users/INVALID123
