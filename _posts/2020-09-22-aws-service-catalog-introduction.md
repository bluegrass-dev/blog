---
layout: post
title: AWS Service Catalog Introduction
categories: [AWS Service Catalog, Posts, Introduction]
excerpt: "What's AWS Service Catalog and how can I understand or use it?"
---

So, what's this Service Catalog thing? Well, let's visit that before we get into the technical details.

## What are Service Catalog's? Example: Restaurants and made to order meals

Ever used a menu at a restaurant? Then, you've used a Service Catalog, conceptually, before!

Restaurants have a generalized workflow.

1. Customers are seated 
2. Wait-staff takes customers' order
3. Wait-staff passes customer order to the Kitchen-staff 
4. Kitchen-staff prioritizes and cooks orders 
5. Kitchen-staff hands-off customer cooked meal to wait-staff
6. Wait-staff delivers the order to the customer

In this generalize workflow, I've highlighted both an internal and external use-case for a "Service Catalog" for the business

### Step 2: Customer uses a menu to choose their meal

> The pain: manually listing all meals for the customer.

As part of the wait-staff, good luck not eventually becoming an auctioneer rattling things off quickly if you had to verbally share what meals were available to each table of customers.

As the customer, imagine being hungry waiting for a long list! Uh, yeah, I'll go ahead an order desert with my appetizer...

> The reliever: using a menu with predefined options.

Finding the bards-tale-method a bit on the inefficient side, the restaurant uses a menu with sections/numbers/names for the custom to order from. 

The wait-staff is now able to seat more customers and not incur so much upfront-investment with a table, and the customer can peruse a menu in search of exactly what they're looking for!

All possible by using a Service Catalog, err, menu!

### Step 4: Kitchen-staff cooks the meal using ingredients

> The pain: Cook has to make everything from scratch.

As a cook, you're in for a long day of making bespoke but decadent meals! 

As a customer, you're in for quite the wait and potentially limited options!

In either case, time is at a premium which would likely lead to the cost being increased on the meal!

> The reliever: Cook uses some pre-made items to jump-start their dishes.

You don't have to cook a chicken first if all you need is chicken broth. As a cook, you can have containers of broth for use. If you knew your list of meals up-front, you'd be able to deconstruct those meals into their underlying parts that can be jump-started by using other products or not starting from scratch to save you time.  

In this case, your pantry is your Service Catalog where you go to get the pieces to make your meal. Let's hope you're not in the restaurant kitchen peddling microwave dinners though ...

## AWS and AWS Service Catalog

AWS has [`168 services that you can use, and Forrest Brazeal can lead you in song praising them.`](https://youtu.be/BtJAsvJOlhM). 

As a cook using AWS as your kitchen, you're probably not going to want to prepare to use *each* service from scratch every time. That's where recipes come in, or AWS CloudFormation Stacks.

[`AWS CloudFormation Stacks`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) are the ingredients-list and recipe steps all in one for combining AWS services into a tasty treat for customers.

So, where's AWS Service Catalog come in if AWS CloudFormation Stacks handle all that? Well, it's when you have a lot of similar services or many of them.

Imagine you needed to have 254 Static-hosted websites or 126 projects in need of build and deploy pipelines. Oh, and eventually, you needed to change how both of those are made which dominoes into sharing those changes with how many engineers for them to interpret and follow? Well, it's going to be a bumpy ride keeping that all in the same direction, but that's where AWS Service Catalog comes in.

### AWS Service Catalog 

It's the menu for AWS Services, that you can define and centralize your operations on.

#### Features 

_Portfolios_, or the menu, are just that, a collection of things that can be made. They can be defined as AWS CloudFormation templates.

_Products_, or the dishes that can be ordered, are on the menu (Portfolio), and are made to order.

_Versioning_, is how _products_ change over time. They may read the same on the menu, but some ingredients may change over time.

#### Cost to use 

AWS Service Catalog used to be flat-rate cost service where Portfolios cost $5/month, and that was it. Now, the [`pricing model changed to be per-API call`](https://aws.amazon.com/servicecatalog/pricing/), or per action taken with the Portfolio/Products, which can make estimating cost possible with some napkin math, but utlimately cheaper for most use-cases.

From the [AWS Service Catalog Pricing](https://aws.amazon.com/servicecatalog/pricing/) page, most of the calculated monthly examples end up being less than $0.50 per month.

But, if you're looking to try things out, there is 1000 API calls included in the [AWS "always free"](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=tier%23always-free&awsf.Free%20Tier%20Categories=categories%23mgmttools&all-free-tier.q=service%2Bcatalog&all-free-tier.q_operator=AND) tier monthly.

#### Ways to setup

- Via the AWS Console in your AWS Account, you can create everything by clicking around, like seen in the [Video: AWS Service Catalog - Getting Started](https://www.youtube.com/watch?v=A9kKy6WhqVA) 
    - [Create an AWS Service Catalog Portfolio](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/getstarted-portfolio.html)
    - [Create an AWS Service Catalog Product](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/getstarted-product.html)
- Via AWS CLI
    - [Create an AWS Service Catalog Portfolio](https://docs.aws.amazon.com/cli/latest/reference/servicecatalog/create-portfolio.html)
    - [Create an AWS Service Catalog Product](https://docs.aws.amazon.com/cli/latest/reference/servicecatalog/create-product.html)
- Via AWS CloudFormation
    - [Create an AWS Service Catalog Portfolio](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html)
    - [Create an AWS Service Catalog Product](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html)


## Next post 

In a follow-up post, I'll include a walkthrough of setting up AWS Service Catalog from scratch. From Portfolio to Products with multiple versions and ultimately using AWS CodePipeline to deploy AWS CloudFormation templates as Products to the Portfolio for others to use!