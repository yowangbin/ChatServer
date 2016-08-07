## WeChat
WeChat是使用Flux构建的React在线聊天应用，Style与微信网页版保持一致

## Develop
必须安装[npm](https://www.npmjs.org/)
```
git clone git@github.com:dead-horse/koa-todo.git
make install
make build
node --harmony app.js
```

## Technology

### backend

- koa

### frontend

- react (with flux)
- browserify

## Tree

```
├── Makefile
├── app.js
├── common
├── config.js
├── controllers
│   └── home.js
├── models
│   └── task.js
├── package.json
├── public
│   ├── js
│   │   ├── app.js
│   │   ├── bundle.js
│   │   └── components
│   │  	    ├── ChatBox
│   │       │   ├── Body.react.js
│   │       │   ├── Footer.react.js
│   │       │   └── Header.react.js
│   │       ├── Pannel
│   │       │    ├── ChatList.react.js
│   │       │    ├── Header.react.js
│   │       │    ├── Tab.react.js
│   │       │    └── SearchBar.react.js
│   │       └── ChatApp.react.js
│   ├── css 
│   └──  images
├── routes.js
├── test
└── views
    └── index.html
```

## License

MIT