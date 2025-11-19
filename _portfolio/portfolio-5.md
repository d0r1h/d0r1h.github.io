---
title: "Multilingual Sentiment Analysis"
excerpt: "NLP system for sentiment analysis across English and Hindi languages<br/><img src='/images/sentiment-analysis.png'>"
collection: portfolio
---

## Overview

Developed a multilingual sentiment analysis system capable of processing customer feedback in both English and Hindi. The system analyzes product reviews, social media comments, and customer support tickets to extract actionable insights.

## Motivation

With India's diverse linguistic landscape, analyzing customer sentiment in regional languages is crucial for understanding customer needs. This project addresses the gap in Hindi sentiment analysis tools.

## Technical Approach

### Data Collection
- Scraped and curated 50,000+ labeled reviews in Hindi and English
- Balanced dataset across positive, negative, and neutral sentiments
- Data augmentation using back-translation

### Model Architecture
- **Base Models**: mBERT, XLM-RoBERTa, IndicBERT
- **Fine-tuning**: Custom classification heads for sentiment prediction
- **Ensemble**: Weighted combination of multiple models

### Performance
| Language | Accuracy | F1-Score |
|----------|----------|----------|
| English  | 91%      | 0.90     |
| Hindi    | 87%      | 0.86     |
| Mixed    | 85%      | 0.84     |

## Features

- **Multi-label Classification**: Positive, Negative, Neutral, Mixed
- **Aspect-based Sentiment**: Identify sentiment towards specific product features
- **Code-mixing Support**: Handle Hinglish (Hindi-English mixed) text
- **Real-time API**: FastAPI endpoint for instant predictions

## Tech Stack

- **Models**: Transformers (Hugging Face), PyTorch
- **Preprocessing**: NLTK, IndicNLP
- **API**: FastAPI, Uvicorn
- **Deployment**: Docker, AWS Lambda
- **Monitoring**: Prometheus, Grafana

## Use Cases

- Product review analysis
- Social media monitoring
- Customer support ticket prioritization
- Brand sentiment tracking

## Deployment

Deployed as a REST API serving 1000+ requests per day with average latency < 200ms.

## Code & Demo

- **Hugging Face Model**: [d0r1h/hindi-sentiment-analysis](https://huggingface.co/d0r1h)
- **GitHub**: Coming soon
- **API Demo**: Available on request

## Future Work

- Expand to more Indian languages (Tamil, Telugu, Bengali)
- Emotion detection (joy, anger, sadness, etc.)
- Sarcasm detection
- Fine-grained aspect extraction
