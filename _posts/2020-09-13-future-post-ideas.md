---
layout: post
title: Mulling over ideas for posts from past projects and work
categories: [Ideas, Projects, Book Reviews, Posts, AWS, Book Reviews, GitHub]
excerpt: "See something you'd like to read about? Let me know!"
---

> "If a tree falls in the forest and nobody hears it...then my illegal logging business is a success" - [`Someone on Reddit`](https://www.reddit.com/r/Jokes/comments/4xinzl/if_a_tree_falls_in_the_forest_and_nobody_hears_it/)

Jokes aside, there's a wide mixture of fun and dull problems solved one iteration at a time. I've liked the idea of writing more, so I'm prepping up ideas so that my efforts/interests aren't like a tree in the woods; unheard or unnoticed.

I did some brainstorming yesterday, and here are some ideas I'm considering. If any catch your attention, let me know!

## Walkthroughs / Projects 

### AWS

- [`AWS CDK`](https://docs.aws.amazon.com/cdk/latest/guide/home.html) 
    - Developing a [`level-2 construct`](https://docs.aws.amazon.com/cdk/latest/guide/constructs.html) for
        - [`AWS Elastic Beanstalk`](https://aws.amazon.com/elasticbeanstalk/)
        - [`AWS Service Catalog`](https://aws.amazon.com/servicecatalog/?aws-service-catalog.sort-by=item.additionalFields.createdDate&aws-service-catalog.sort-order=desc)
    - Using [`CDK Pipelines`](https://aws.amazon.com/blogs/developer/cdk-pipelines-continuous-delivery-for-aws-cdk-applications/) to incrementally develop your applications across multiple environments
- Cost optimizations
    - Reserved Instances and calculating [`Normalized Units`](https://aws.amazon.com/about-aws/whats-new/2019/02/normalized-units-information-for-amazon-ec2-reservations-in-aws-cost-explorer/) to lower base units for a purchase
    - Using [`AWS:AutoScaling::ScheduledAction`](https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html) to scale down in off-hours
    - Using [`AWS Instance Scheduler`](https://aws.amazon.com/solutions/implementations/instance-scheduler/) for AWS RDS, AWS EC2, and AWS AutoScalingGroup cost savings
- [`AWS Service Catalog`]([`AWS Service Catalog`](https://aws.amazon.com/servicecatalog/?aws-service-catalog.sort-by=item.additionalFields.createdDate&aws-service-catalog.sort-order=desc))
    - Setting up Portfolios, Products and utilizing a single AWS CodePipeline to push Product updates for multiple products
- [`AWS CodePipeline`](https://aws.amazon.com/codepipeline/)
    - Configuring multi-environment application pipelines with testing embedded and approvals
    - Building pipelines to deploy/promote Database Migrations
- [`AWS CloudFormation`](https://aws.amazon.com/cloudformation/#:~:text=AWS%20Cloud%E2%80%8BFormation&text=AWS%20CloudFormation%20allows%20you%20to,AWS%20and%20third%20party%20resources.)
    - Building CI/CD pipelines for CloudFormation resources with Pull Request Feedback
- [`AWS AppConfig`](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html)
    - Integrating AWS AppConfig into your application and using it for run-time configuration like Feature-Toggles

### GitHub 

- [`Github Actions`](https://github.com/features/actions)
    - Using Github Actions to build/deploy iOS/Android applications
    - Creating private Custom GitHub Actions
- Using [`Terraform to manage your GitHub`](https://www.terraform.io/docs/providers/github/index.html) Organizations, Repos, Teams, and settings
- [`GitHub CodeSpaces`](https://github.com/features/codespaces) 
    - Using CodeSpaces to develop on open source projects
    - Configuring CodeSpaces to be "just right" for all your projects

### Raspberry Pi 

- Building a k3s cluster
- Using AWS to deploy to a Raspberry Pi k3s cluster

## Book reviews / take-aways

- [`_Database Reliability Engineering: Designing and Operating Resilient Database Systems_ by Laine Campbell, Charity Majors`](https://www.amazon.com/gp/product/B076VXPXND/ref=kinw_myk_ro_title)
- [`_Implementing Service Level Objectives: A Practical Guide to Slis, Slos, and Error Budgets_ by Alex Hidalgo`](https://www.amazon.com/gp/product/B08FBP3ZRH/ref=kinw_myk_ro_title)
- [`_Full Stack Serverless: Modern Application Development with React, AWS, and GraphQL_ by Nader Dabit`](https://www.amazon.com/gp/product/B08CXNRPZC/ref=kinw_myk_ro_title)
- [`_Technology Strategy Patterns: Architecture as Strategy_ by Eben Hewitt`](https://www.amazon.com/gp/product/B07JJNSP92/ref=kinw_myk_ro_title)
- [`_Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation (Addison-Wesley Signature Series (Fowler))_ by Humble Jez, Farley David`](https://www.amazon.com/gp/product/B003YMNVC0/ref=kinw_myk_ro_title)
- [`_Lean Enterprise: How High Performance Organizations Innovate at Scale (Lean (O'Reilly))_ by Jez Humble, Joanne Molesky, Barry O'Reilly`](https://www.amazon.com/gp/product/B00QL5MSF8/ref=kinw_myk_ro_title)
- [`_Lean Impact: How to Innovate for Radically Greater Social Good_ by Ann Mei Chang`](https://www.amazon.com/gp/product/B07K2M9XRV/ref=kinw_myk_ro_title)
- [`_Continuous Testing for DevOps Professionals: A Practical Guide From Industry Experts_ by
Eran Kinsbruner`](https://www.amazon.com/gp/product/B07H8PH7VB/ref=kinw_myk_ro_title)
