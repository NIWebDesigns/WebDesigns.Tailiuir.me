import requests
from bs4 import BeautifulSoup
import json

# URL of your TripAdvisor review page
url = "https://www.tripadvisor.co.uk/Profile/itsmat32143?tab=reviews"

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

reviews = []

# Find and extract review elements
review_elements = soup.find_all('div', class_='review-container')

for review in review_elements:
    title = review.find('span', class_='noQuotes').text
    content = review.find('p', class_='partial_entry').text
    reviews.append({"title": title, "content": content})

# Save the reviews to reviews.json
with open('reviews.json', 'w') as f:
    json.dump(reviews, f)
