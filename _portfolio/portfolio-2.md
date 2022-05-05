---
title: "Customer Churn Analysis"
excerpt: "This project aims to identify customers who are likely to leave so that we can retain them with certain incentives.<br/><img src='/images/churn.png' width='500'>"
collection: portfolio
---

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

### Techstack
- Python version: 3.7 </br>
- Packages: pandas, numpy, sklearn, xgboost, fastapi, seaborn</br>
- Cloud: heroku

