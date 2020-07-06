import requests
import time

from bs4 import BeautifulSoup

from api_country.models import Country


def feed_database():
    for num_page in range(25):
        base_url = "http://example.webscraping.com/places/default/index/" + str(num_page)

        response_all_countries = requests.get(base_url + "/")
        if response_all_countries.ok:
            print(str(num_page * 4) + "%")
            soup = BeautifulSoup(response_all_countries.text, 'lxml')
            tds = soup.findAll('td')
            for td in tds:
                link = td.find("a")
                response_country = requests.get("http://example.webscraping.com" + link["href"])
                soup_country = BeautifulSoup(response_country.text, 'lxml')

                current_country_dict = {
                    "name": soup_country.find("tr", {"id": "places_country__row"}).find("td", {"class": "w2p_fw"}).text,
                    "population": soup_country.find("tr", {"id": "places_population__row"}).find("td", {"class": "w2p_fw"}).text,
                    "capital": soup_country.find("tr", {"id": "places_capital__row"}).find("td", {"class": "w2p_fw"}).text,
                    "area": soup_country.find("tr", {"id": "places_area__row"}).find("td", {"class": "w2p_fw"}).text

                }
                Country.objects.create(**current_country_dict)
                time.sleep(10)
            time.sleep(10)
        else:
            print("error")
