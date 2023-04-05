# Web Scraper
# ASSIGNMENTS
Scrape the first 500 items (title, image url) from sreality.cz (flats, sell - you can switch the web to English) and save it in the Postgresql database. Implement a simple HTTP server (or use Nginx) and show these 500 items on a nice page (with pagination)  which will use your own design and put everything to single docker-compose command so that I can just run "docker-compose up" in the Github repository and see the scraped ads on http://127.0.0.1:8080 page. Use Typescript and React for implementation.
# SOLUTION
## FRONTEND 
* Material UI
* Vite
* React
* Nginx
* This frontend is built on React Vite and uses the Material UI library to create the user interface. It fetchs from API to get information about the flats(thumbnail image and name) and displays it to the user. The user can scroll through the pages and view the first 500 flats.
## BACKEND
* Express
* Prisma
* PostgreSQL
* Docker
* On the backend, two ways to scrape information about flats from the sreality have been created. The fetch data from their API. And the second one retrieves information by scraping the page using tool puppeteer. In the project I use the first way through fetch api.
* The whole BE runs on the express server. I chose it because of easy configuration for such a small project.
# RUN 
* git clone https://github.com/CH1PYM/web_srape_reality.git
* docker-compose up -d
* visit http://127.0.0.1:8080
