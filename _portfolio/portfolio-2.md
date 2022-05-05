---
title: "Customer Churn Analysis"
excerpt: "This project aims to identify customers who are likely to leave so that we can retain them with certain incentives.<br/><img src='/images/churn.png' width='800'>"
collection: portfolio
---

[**GitHub**](https://github.com/d0r1h/Churn-Analysis)  [**DemoApp**](https://churn01.herokuapp.com/)

Churn prediction, or the task of identifying customers who are likely to discontinue use of a service, is an important and lucrative concern of any industry.

This project is tasked to predict the churn score for a website based on features such as:

* User demographic information
* Browsing behavior
* Historical purchase data among other information

### DataSet:

* Dataset has been taken from a Hackathon, and raw dataset can be downloaded from here. [Link](https://www.hackerearth.com/problem/machine-learning/predict-the-churn-risk-rate-11-fb7a760d/)
* Cleaned and processed version of the data can be accessed from here. [Link](https://github.com/d0r1h/Churn-Analysis/blob/main/DataSet/churnclean.csv)
* Classes [Customer will EXIT(1) or NOT(0)] are properly balanced with 5:4 ratio

### Models

The final model used is an ensemble of different classifiers such as:
* KNN
* Random Forest
* AdaBoost
* Xgboost

### Results

* Even though Xgboost is giving good Test Accuracy of ~ 93% but we need to focus on the customers who are leaving i.e. class 1, so that we can retain them with some discount offer on membership.
* Ensemble methods (stack classifier) is having 94% of recall for predicting the customers who are likely to leave, higher than Xgboost.
* Following is confusion matrix of final classifier (stack ensemble) and xgboost classifier.


<img src = "https://github.com/d0r1h/Churn-Analysis/blob/main/static/stackclf.png" width = 300> <img src = "https://github.com/d0r1h/Churn-Analysis/blob/main/static/xgb.png" width = 300>

* Score table for different classifier

<figure>
<img src = "https://github.com/d0r1h/Churn-Analysis/blob/main/static/churn_score.png" width = 350>
<figcaption align = "center"></figcaption>
</figure>


### Techstack
- Python version: 3.7
- Packages: pandas, numpy, sklearn, xgboost, fastapi, seaborn
- Cloud: heroku

