# Firechat
React, Emotion, Firebase 를 이용하여 작업하고 배포하였습니다. https://firechat-3c705.web.app/

**![chat app](https://user-images.githubusercontent.com/62098910/126043796-a6b7c29d-c56c-48fd-a997-3c67759c9355.png)**  


## 주요 특징 및 개선사항

1. Purecomponent를 사용하여 State, Props 변경사항 없을 시 불필요한 render 함수 호출 방지하였습니다.
2. Firebase의 google 로그인 기능을 사용하였습니다.
3. Firebase의 firestore 와 연동해 실시간 채팅을 구현하였습니다. 
4. 로그인된 구글 유저의 profile 사진을 사용하여 채팅 시 사용자를 구별하기 쉽게 만들었습니다.
5. 실시간으로 DB를 불러오는 함수를 componentWillUnmount 함수를 사용하여 컴포넌트 삭제 시 unsubscribe 하여 컴포넌트 삭제 후에도 Setstate를 호출하는 오류를 해결하였습니다.
6. 로그인 되었는지 확인하는 함수를 componentDidMount 함수를 사용하여 컴포넌트 생성 시 한 번만 호출하여 실시간으로 계속 호출되는 오류를 해결하였습니다.

## 컴포넌트 요약
```
App : 로그인 정보를 받아와 로그인 되어있다면 Chat 화면을 아니라면 로그인 화면을 뿌려줍디다. 
firebase : firebase 연동을 위한 설정 정보들이 들어있습니다. DB, 권한 객체를 export 합니다.
components/SignIn : 구글 로그인을 제공합니다. 
components/SignOut : 이 Component를 사용하시면 로그아웃 버튼이 나타납니다.
components/Chat : firebase db 목록을 불러와 메시지로 가공해 화면에 표시해 줍니다.
components/SendMessage : form 태그를 출력하고 버튼 클릭 시 db에 메시지를 추가합니다.
```
## Before start
```
!! 자신 고유의 firebase 앱의 키 및 식별자가 포함된 Firebase 구성 객체가 필요합니다.!!
개인의 firebase project를 생성하셔서 복사 후 firechat/component/firebase.js config
변수에 붙여 넣으셔야 합니다
ex) 
apiKey: "xxx",
authDomain: "xxx",
projectId: "xxx",
storageBucket: "xxx",
messagingSenderId: "xxx",
appId: "xxx",
measurementId: "xxx"
```
## Getting Started
```
git clone https://github.com/seongwonme/React-Chat-App-with-Firebase.git
cd React-Chat-App-with-Firebase
```

### Installing

아래 사항들로 현 프로젝트에 관한 모듈들을 설치할 수 있습니다.
Run the following commands into the project folder to install project dependencies.

```
npm install
```

## Built With

* [ReactJS](https://reactjs.org/)
* [EmotionJS](https://emotion.sh/docs/introduction)
* [Firebase](https://firebase.google.com/?hl=ko)

## Author(s)

* **Lee Seong Won** - *Junior Web Developer* - [GitHub account](https://github.com/seongwonme)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
