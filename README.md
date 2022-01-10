# 💻 Social-Network-API

## 💼 Description
*The what, why, and how:*
<br>
A versitile social media focused API utilizing the NoSQL database MongoDB to manage large amounts of unstructured data on a daily basis.


Below are screenshots that provide further reference:
<br>



## Table of Contents

* [Badges](#badges)
* [Installation](#installation)
* [Testing](#testing)
* [Credits](#credits)
* [License](#license)
* [Questions](#Questions)

## 📛 Badges
*The following programming languages, frameworks, platforms and libraries were utilized when completing this project:*
<br>
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## 🔌 Installation
*Steps required to install project and how to get the development environment running:* <br>
This application is back-end exclusive and does not include view files.<br>
In order to implement features, you'll need access to a code editor. Then complete the following...

- Copy the SSH key and clone the repsitory on your local device
- If you haven't already, <a href=https://www.mongodb.com/try>download MongoDB</a> in order to use/manipulate the application schemas
- Once the project is open in your code editor, use your terminal to install the following dependencies:
  - node.js package.json - **`npm init -y`**
  - express.js - **`npm i express`**
  - mongoose ODM - **`npm i mongoose`**
- When dependencies have finished installation begin to run your server with the following command in the terminal:
  - **`npm start`**
- Now head over to <a href=https://insomnia.rest>Insomnia CORE</a> and begin testing routes

## 🧪 Testing
*The following are API endpoints and their associated routes to be tested using Insomnia CORE:* <br>

**`/api/users`**
  - `GET` all users
  - `GET` a single user by its `_id` and populated thought and friend data
  - `POST` a new user:

```json
{
	"username" : "JedHooey",
	"email" : "forgetaboutit@gmail.com"
}
```
  - `PUT` to update a user by its `_id`
  - `DELETE` to remove user by its `_id`

<br>

**`/api/users/:userId/friends/:friendId`**
  - `POST` to add a new friend to a user's friend list
  - `DELETE` to remove a friend from a user's friend list

<br>

**`/api/thoughts`**
  - `GET` to get all thoughts
  - `GET` to get a single thought by its `_id`
  - `POST` to create a new thought:

```json
{
  "thoughtText": "I know it's not OK to eat cat food, but I'm hungry...",
  "username": "CatMan",
  "userId": "5edff358a0fcb779aa7b118b"
}
  ```
  - `PUT` to update a thought by its _id
  - `DELETE` to remove a thought by its _id

<br>

**`/api/thoughts/:thoughtId/reactions`**
  - `POST` to create a reaction stored in a single thought's `reactions` array field
  - `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## 💳 Credits
*A thank you to those who helped make this happen:*
<br>
Big shout out to <a href = https://github.com/Ileriayo>Ileriayo Adebiyi</a> and his <a href =https://github.com/Ileriayo/markdown-badges>markdown badges repository</a> which made this project all the more beautiful. Thank You.

## 🎫 License
*This project is licensed under:* <br>
![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)<br>
<a href= https://opensource.org/licenses/MIT)>MIT License Link</a><br>

## 👐 Contributing
This project adheres to standards set by the <a href = https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md>Contributor Covenant</a>.<br>
Please consult this documentation before contributing to this project.

## ❓ Questions
![Profile Pic](https://user-images.githubusercontent.com/84754257/144813144-5e6fbfb0-6c99-462f-b604-a14130e3da2c.jpg)
<br>
If you have any questions regarding the development process of this application, or specific questions about contributing, feel free to reach me by email or on Github.
* Email 📪 willdarkins@gmail.com
* Github 🗿 [willdarkins](https://github.com/willdarkins) 
