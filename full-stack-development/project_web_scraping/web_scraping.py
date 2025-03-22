from bs4 import BeautifulSoup
import requests

# funcion web scraper
def url_scrape():
    URL = "https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/python-package-section-project-requirement"

    # Solicitud web
    req = requests.get(URL)

    # Comprobamos que la petición nos devuelve un Status Code = 200
    status_code = req.status_code
    if status_code == 200:

        #Armamos el DOM con BeautifulSoup
        html = BeautifulSoup(req.text, "html.parser")
        urls = html.find_all("a")

        for url in urls:
            get_url = url.get('href')
            custom_url = get_url.replace('/pt-full-stack-development-javascript-python-react', '')

            if custom_url.startswith('/guide/'):
                list([custom_url])
                result = '-> ' + ' '.join(custom_url[7:].split('-'))
                print(result)

                '''
                result:
                -> overview requests package in python communicate apis
                -> project solution build web scraper python'
                '''
    else:
        print ("Status Code %d" % status_code)

# llamamos a la funcion
url_scrape()