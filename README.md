<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]




<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">My Bookings</h3>

  <p align="center">
    Computer Networks Project - La Sapienza <br />
    My Booking is a Web Application that allows you to schedule meetings on a calendar.
    <br />
    <a href="https://github.com/ninniks/Computer-Networks-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<strong>Requirements</strong>
<p>
<ul>
<li> REST service (called SERV) that offer API documented with swagger for ex.</li>
<li>SERV must to interface at the least with to outer REST API, i.e not on localhost (e.g google maps)</li>
<li>At the least one of two outer REST services must be 'commercial' (es: twitter, google, facebook, pubnub, parse, firbase etc)</li>
<li>At the least one of two outer REST services must require oauth e.g. google calendar)</li>
<li>Must use Websocket and/or AMQP</li>
<li>Project must be uploaded on GIT</li>
<li>SERV API must be documented and tested with one test case</li>
</ul>
</p>


### Built With


* [ReactJS](https://it.reactjs.org)
* [Redux](https://redux.js.org/)
* [NodeJS](https://nodejs.org/it/)
* [Express](https://expressjs.com/it/)
* [MongoDB](https://www.mongodb.com/)
* [PassportJS](http://www.passportjs.org/)



<!-- GETTING STARTED -->
## Getting Started

To start Application you need to configure <b>.env</b> file on your local repository.<br/>

* .env
	```sh
	CLIENT_ID = 
	CLIENT_SECRET =
	MONGO_PASSWORD = 
	DB_NAME =
	COOKIE_KEY = 
	```
<b>CLIENT_ID</b> and <b>CLIENT_SECRET</b> are provided by Google to implement OAUTH.<br />
Then you need to configure MongoDB and provide <b>MONGO_PASSWORD</b> and <b>DB_NAME</b> <br />
<b>COOKIE_KEY</b> is used by PassportJS to encrypt user cookie.

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```


### Installation

1. Get a free API Key at [Google Console Developers](https://console.developers.google.com/) for OAUTH
2. Clone the repo
   ```sh
   git clone https://github.com/ninniks/Computer-Networks-project
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create .env file in your local repo (in top level directory)

5. Set up env variables 

6. Run the project
   ```sh
   npm run dev
   ```


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact


Project Link: [https://github.com/ninniks/Computer-Networks-project](https://github.com/ninniks/Computer-Networks-project)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ninniks/Computer-Networks-project?style=for-the-badge
[contributors-url]: https://github.com/ninniks/Computer-Networks-project/graphs/contributors
[product-screenshot]: images/screenshot.png
