---
title: "Hindi News Summarizer"
excerpt: "State-of-the-art Summarization methods for Hindi in 🤗 <br/><img src='https://github.com/d0r1h/SAR/blob/main/assets/SAR.png'>"
collection: portfolio
---

SAR **(सार)** in Hindi means summary. This is my work on Hindi Text Summarization on news article.

**Models**

* Inference results are on 2k sample data.

|Model | Checkpoint | Rouge-2[f_score] | Inference time | 
|--- | --- | --- | --- |
|BART | [ai4bharat/IndicBART](https://huggingface.co/ai4bharat/IndicBART) | 21.48 | 20min 27s |
|T5 | [csebuetnlp/mT5_multilingual_XLSum](https://huggingface.co/csebuetnlp/mT5_multilingual_XLSum) | 20.21 | 45min 54s|



**API**

You can summarize any Hindi news article in just 5 lines of code

```python
>>> import requests
>>> api_endpoint = "https://hf.space/embed/d0r1h/Hindi_News_Summarizer/+/api/predict/"
>>> news_url = "https://www.amarujala.com/uttar-pradesh/shamli/up-news-heroin-caught-in-shaheen-bagh-of-delhi-is-connection-to-kairana-and-muzaffarnagar?src=tlh\u0026position=3"
>>> r = requests.post(url= api_endpoint, 
                  json = {"data": [ news_url, "BART"]})
>>> r.json()['data'][0]
>>> यूपी शाहीन बाग में 100 करोड़ रुपये कीमत की हेरोइन और अन्य मादक पदार्थ की बरामदगी व उसे लाने अंतर्राष्ट्रीय ड्रग्स तस्करों के गिरोह के तार शामली जिले के कस्बा कैराना और मुजफ्फरनगर से जुड़ रहे हैं। नारकोटिक्स कंट्रोल ब्यूरो एनसीबी दिल्ली की टीम ने गुरुवार को कैलाना से दो लोगों को हिरासत में
```
