---
layout: post
title: From AWS Elastic Beanstalk to AWS EKS
description: "Exploring the path from AWS Elastic Beanstalk to EKS for a Java application."
# permalink: /talks/from-aws-elastic-beanstalk-to-eks
categories: [AWS, CDK, Elastic Beanstalk, talks]
excerpt: "Resources for a local meetup talk that ventures into AWS CDK and CDK8s."
---

## From AWS Elastic Beanstalk to AWS EKS

### Links

- [`Presentation slides`](https://docs.google.com/presentation/d/e/2PACX-1vQiB6MIp963hZStyGmcUDXA_KxoDy3NnV_LAO0kbQBbFEsYbjJEqAK4mrPQT32ZrMKjbGzVWZ8xaHdT/pub?start=false&loop=false&delayms=3000)
- [`Presentation code`](https://github.com/bluegrass-dev/talk-from-elasticbeanstalk-to-eks)
- [`Meetup Details: Kubernetes-and-Cloud-Native-Computing-Louisville`](https://www.meetup.com/Kubernetes-and-Cloud-Native-Computing-Louisville/events/cdrwlrybchbkb/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/z-2ofRWXYdc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Overview

What could it look like to experiment with an existing application running on AWS ElasticBeansatlk over to AWS EKS using modern tools?

In this talk and the code, we're re-using the AWS Sample eb-java-scorekeep application. From there, we deploy to AWS ElasticBeanstalk Java Platform.

Wanting to begin our explorations, we shift the application to AWS ElasticBeanstalk Docker Platform.

Next, we start looking at AWS CDK for using imperative code to help us do more with less code to deploy an AWS ECS Cluster with AWS Fargate Services.

Lastly, we land at AWS EKS with a cluster created via AWS CDK, our application packaged and deployed to our cluster via AWS CDK.

An an extra bit, AWS CDK8S is stubbed out as a potential for future exploration of codifying our Kubernetes Resources.

### Meetup details

Experimentation and cutovers don't have to be immediate. What could it look like to trial a Java workload from AWS Elastic Beanstalk through phases to running on AWS ECS and AWS EKS? We step through some findings with newer tools enabling us to do far more for far less!

Local - VSCode, Make, Docker, AWS CLI, AWS CDK, AWS CDK8S
AWS - AWS CodePipeline, AWS CodeBuild, AWS Elastic Beanstalk, AWS Elastic Container Registry, AWS Elastic Container Service, AWS Elastic Kubernetes Service

1. Scenario
2. Our goal
3. Overview of the tools involved
4. Our baseline infrastructure: AWS ElasticBeanstalk Java via AWS CloudFormation
5. Experiment 1: AWS ElasticBeanstalk Docker via AWS CloudFormation
6. Experiment 2: AWS ECS Fargate via AWS CDK
7. Experiment 3: AWS EKS via AWS CDK
8. Experiment 3+1: AWS EKS resources via AWS CDK8s
9. Questions?

Outputs

- [Presenation Material](https://blog.bluegrass.dev/from-aws-elastic-beanstalk-to-eks)

Speaker bio: CJ Taylor - blog.blugrass.dev
