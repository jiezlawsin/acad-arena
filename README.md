# AcadArena

Campus Gaming in Southeast Asia

## Getting Started

Install NVM for Windows
```
https://github.com/coreybutler/nvm-windows/releases
Download the .exe installer and instal
```

Restart terminal and run
```
nvm install 18.18.2
nvm use 18.18.2
```

Restart terminal and Run npm install:
```
npm install
```

To Run Locally
```
npm run dev
```

Open browser and navigate to
```
localhost:3000
```

To Build
```
npm run build
```
Zip "dist" folder

To Deploy
- Login to Cpanel or Login to Namecheap and open your Cpanel
- Find "File Manager"
- Open "public_html" folder
- Upload dist.zip
- Go back to "public_html" folder
- Right click and Extract dist.zip
- Go to "dist" folder
- Select All Files in "dist" folder
- Right click and click "Move"
- Change path to "/public_html"
- If prompt to overwrite, click YES
- Your web app is Deployed!


## Built With

- [Vue CLI](https://cli.vuejs.org/) - Standard Tooling for Vue.js Development
- [Vue-Router](https://router.vuejs.org/) - Vue Router is the official router for Vue.js.
- [Pinia](https://router.vuejs.org/) - Pinia is the best state management for Vue.js.
- [Bootstrap](https://getbootstrap.com/) - Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.

## License

This project is licensed under the MIT License.