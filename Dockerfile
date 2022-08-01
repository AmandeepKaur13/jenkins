FROM openjdk:8
EXPOSE 8080
ADD target/jenkin_demo1-0.0.1-SNAPSHOT.jar jenkin_demo1-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","jenkin_demo1-0.0.1-SNAPSHOT.jar"]