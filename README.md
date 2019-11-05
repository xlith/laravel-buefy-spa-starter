# LARAVEL BUEFY SPA STARTER
As the title tells this repo contains a boilerplate for people who want a quick start to the project.
## REPO CONTENTS
### Backend
* Laravel
* Laravel Passport
* laravel/u
* barryvdh/laravel-ide-helper
* roave/security-advisories
### Frontend
* Vue
* Vue-Router
* Vuex
* Laravel-Mix / Webpack (Setup with versioning and lazy loading)
* Buefy
* Bulma
* Material Design Icons
* JQuery
* Lodash
* Popper.Js
* Sass

## SETUP
Setup is quite simple
**clone or download repo**
```shell script
git clone https://github.com/xlith/laravel-buefy-spa-starter.git 
```
**install dependencies**
```shell script
composer install
npm install 
```
**prepare javascript environment**
```shell script
npm run dev
```
**copy .env.example file and name it .env**
```shell script
cp .env.example .env
```
**generate laravel key**
```shell script
php artisan key:generate
```
**set database credentials**
```shell script
example:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=DatabaseName
DB_USERNAME=DatabaseUsername
DB_PASSWORD=DatabasePassword
```
**migrate database**
```shell script
php artisan migrate
```
**create oauth clients**
```shell script
php artisan passport:install
```
**create oauth clients and keys**
```shell script
php artisan passport:install
```

Feel free to open issue 
Thanks.
