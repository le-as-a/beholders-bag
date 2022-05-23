![Beholder's Bag](https://i.imgur.com/28cfN7a.png)
# [Beholder's Bag](https://beholders-bag.herokuapp.com)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 	![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- Accesses a public API called [Open5e](https://api.open5e.com/)
- Provides search results in real time
- Allows users to browse through all magical items available

## How to run this locally!
Note: Run with VS Code and add the Docker extension!
1. `git clone git@github.com:le-as-a/beholders-bag.git`
2. Open in container (should be prompted if you have the extension; this may take a while to finish loading the first time.)
3. Set up your .env file in both root and /react-app using the .env.example file.
4. In root, access the virtual environment `pipenv shell`.
5. Run `flask db upgrade`, then `flask seed all`.
6. Open up a terminal in /react-app and run `npm install`.
7. In root, run `flask run` and in /react-app, run `npm start`. It will open to localhost 3000.
