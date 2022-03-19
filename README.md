[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/matheusicaro/template-react-app/blob/main/LICENSE)

<br>

## Project Specifications

- Used **[React](https://reactjs.org/)** with:
  - **[TypeScript](https://www.typescriptlang.org/)**
  - **[Redux](https://redux.js.org//)**
  - **[Redux-Saga](https://redux-saga.js.org/)**
  - **[Ducks pattern](https://github.com/erikras/ducks-modular-redux)**
- Used **[Material-UI](https://mui.com/getting-started/usage/)** V5 for lib for view components
- Used **[Styled Components](https://styled-components.com/)** lib for styling
- Used **[Husky](https://typicode.github.io/husky/#/)** for analyzing lint tests and configurations before committing to the repository
- Used **[Prettier lint](https://prettier.io/docs/en/integrating-with-linters.html)** for lint style

<br>

## Installation and Setup Instructions

> You will need `node` and `npm` installed globally on your machine.

1. clone the repository: <br>
```
git clone -b Redux/typescript-and-sagas https://github.com/matheusicaro/template-react-app template-react-app-Redux/typescript-and-sagas
```
4. Installation: `npm install`
5. To Start Server: `npm start`
6. To Visit App: `http://localhost:3000/`

<br>

## Folder Structure

```
-- src/assets _________________: static project files like image, json, etc.
-- src/constants ______________: general constants such as messages, warnings, etc.
-- src/pages __________________: paging components like home, page_1, page_2, etc.
-- src/routes _________________: application routes to pages
-- src/store __________________: store for application status control
-- src/store/ducks ____________: store configuration according to the ducks pattern
-- src/store/ducks/*folder ____: store states
```  

<br>
