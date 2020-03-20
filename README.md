# PETSite em React - Walkthrough

## Sumário

1. <a href="#PR">Pré-Requisitos</a><br>
  1.1 <a href="#CH">Chocolatey</a><br>
  1.2 <a href="#VSC">VSCode</a><br>
  1.3 <a href="#YN">Yarn</a>
    1. <a href="#YNW">Windows</a>
    2. <a href="#YNL">Linux</a>
2. <a href="#IR">Instalando o React</a>
3. <a href="#VC">Vendo o código</a>
4. <a href="#Workflow">Workflow</a>
5. <a href="#HomePage">Home Page</a>

<div id="PR"></div>

## 1. Pré-Requisitos

Caso esteja em um *Windows* antes de começarmos iremos precisar de algumas ferramentas para trabalhar com o ecossistema *React*, sendo elas:

<div id="CH"></div>

### 1.1	Chocolatey
Para instalar o *Chocolatey* é só colar o seguinte comando no *PowerShell Windows*: 
```console
foo@bar:~$ Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
Assim que terminar a instalação é só escrever o comando *choco* para testar

```console
foo@bar:~$ choco
Chocolatey v0.10.15
Please run 'choco -?' or 'choco <command> -?' for help menu.
```
Sendo possível agora também acessá-lo pelo *cmd*.

<div id="VSC"></div>

### 1.2 VSCode [(Visual Studio Code)](https://github.com/microsoft/vscode)

Agora a ferramenta de edição de texto que estaremos utilizando é o [Visual Studio Code](https://code.visualstudio.com/) que pode ser baixada clicando ali ou com a seguinte linha
```console
foo@bar:~$ choco install vscode
```

<div id="YN"></div>

### 1.3	Yarn
Detalhe que em ambos os casos os instaladores instalam o *Node.js* automaticamente.
  <div id="YNW"></div>
  
  1.	Windows<br>
  Em Windows é necessário executar as seguintes, e exaustivas, linhas de comando<br>
  ```console
  foo@bar:~$ choco install yarn
  ```
  <div id="YNL"></div>
  
  2.	Linux<br>
Em *Linux* por outro lado, quando o *Yarn* não vem nativamente em sua distribuição, é relativamente fácil é apenas necessário seguir as seguintes linhas de comando:
```console
foo@bar:~$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
foo@bar:~$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
foo@bar:~$ sudo apt update
foo@bar:~$ sudo apt install yarn
foo@bar:~$ yarn --version
1.22.4
```

Muito prático, realmente.

___
<div id="IR"></div>

## 2. Instalando o React

Estando na sua área de trabalho, execute o comando para adicionar o *create-react-app* (Não se esqueça de usar o sudo, ou estar no cmd/powershell/wsl admin para evitar erros)
```console
foo@bar: /desktop$ yarn global add create-react-app
success Installed "create-react-app@3.4.0" with binaries:
      - create-react-app
Done in 7.34s.
```
Então crie o app *React* no diretório
```console
foo@bar: /desktop$ create-react-app petsite

Creating a new React app in /desktop/petsite.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...
```

Assim que instalar você receberá a mensagem
```console
Success! Created petsite at /desktop/petsite
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd petsite
  yarn start

Happy hacking!
```

Seguiremos a indicação deles e executaremos as instruções
```console
foo@bar: /desktop$ cd petsite
foo@bar: /desktop/petsite$ yarn start
```

Caso esteja tudo certo deverá ver a mensagem
```console
Compiled successfully!

You can now view petsite in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.xxx.xxx:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

E irá automaticamente abrir em seu http://localhost:3000
![alt text](https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_01.png)

Para finalizar é só voltar no servidor e apertar CTRL+C que ele irá encerrar o host.

---
<div id="VC"></div>

## 3. Vendo o código

Agora para que possamos acessar o código no terminal digitamos
```console
foo@bar: /desktop/petsite$ code .
```

Isso deve abrir o VSCode no diretório apontado, que no caso foi o atual. De cara já podemos ver algumas coisas que foram adicionadas no diretório.<br>
<p align="center">
  <img src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_02.png">
</p>

Ao expandir os diretórios *public* e *src* nos deparamos com isso<br>
<p align="center">
  <img src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_03.png">
</p>

Bom, assustador! Diversos arquivos e não sabemos o que a maioria faz, então vamos fazer o quê? Abrir cada um e olhar? Exatamente :) Não! Vamos excluir a maioria, mais precisamente os seguintes:

public
* favicon.ico
* logo192.png
* logo512.png
* robots.txt

src
* App.css
* App.test.js
* index.css
* logo.svg
* setupTests.js

Devendo ficar assim<br>
<p align="center">
  <img src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_04.png">
</p>

Agora ao executar
```console
foo@bar: /desktop/petsite$ yarn start
```

Ele irá abrir novamente a aba no seu navegador, mas agora contendo uma mensagem de erro
![alt_text](https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_05.png)

Era de se esperar, já que apagamos várias coisas que os códigos estavam se aproveitando e agora não estão achando mais, então devemos corrigir algumas coisas. Em ***App.js*** iremos remover as linhas 2, 3 e 9. Que continham as seguintes linhas de código
```jsx
import logo from './logo.svg';
import './App.css';
<img src={logo} className="App-logo" alt="logo" />
```

Agora em ***index.js*** iremos remover a linha 3
```jsx
import './index.css';
```

Agora podemos *rodar* novamente a aplicação com
```console
foo@bar: /desktop/petsite$ yarn start
```

E o que iremos ver será:<br>
<p align="center">
  <img src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_06.png">
</p>

---

<div id="Workflow"></div>

## 4. Workflow

Agora vamos meter a mão na massa e começar a arrumar os diretórios da forma que eles ficarão para o resto do projeto. No próprio VSCode clique em cima de *src* com o botão direito e em *new folder* ou *nova pasta* abrirá um espaço de diretório novo e você poderá colocar o nome dessa nova pasta, coloque *components*. Deverá ficar assim<br>
<p align="center">
  <img src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_07.png">
</p>

Dentro dessa pasta *components* iremos adicionar mais outras duas, sendo elas *routes* e *widgets*. Então o processo é o mesmo, clique em cima de *components* com o botão direito e em *new folder* ou *nova pasta* abrirá um espaço de diretório novo e você poderá colocar o nome dessa nova pasta, na primeira coloque *routes*, repita o processo e para a próxima *widgets*.<br>
<p align="center">
  <img src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_08.png">
</p>

Em *routes* clique com o botão direito e em *new file* ou *novo arquivo* e coloque o nome ***Routes.js*** ele automaticamente abrirá o arquivo para você, agora copie e cole o seguinte código para dentro do seu
```jsx
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
```

 Crie também outros dois novos arquivos dentro da /components/routes que estarão junto de *Routes.js*, sendo eles 
 * Home.js
 * NotFound.js
 
 Onde *Home.js* será
 ```jsx
 import React, {Component} from 'react'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main id='app'>
               <p>Home</p>
            </main>
        )
    }
}

export default Home;
 ```
 
 E *NotFound.js* 
 ```jsx
 import React from 'react'

const NotFound = () => <h2>Not Found!</h2>;

export default NotFound
 ```
 
Agora retornando para o *App.js* vamos editá-lo de forma a ficar assim
 ```jsx
import React, {Component} from 'react';
import Routes from './components/routes/Routes';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Routes/>
      </React.Fragment >
    );
  }
}

export default (App);
 ```
 
E então rodamos novamente o servidor com
```console
foo@bar: /desktop/petsite$ yarn start
```

E vemos esse erro<br>
<p align="center">
  <img src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_09.png">
</p>

Que está basicamente dizendo que não reconhece o *react-router-dom* que é o gerenciador de rotas que utilizaremos para trabalhar com o React, então sendo nossa primeira biblioteca externa a ser adicionada utilizaremos o Yarn para implementá-la em nossa aplicação com o seguinte comando

```console
foo@bar: /desktop/petsite$ yarn add react-router-dom
```

Agora rodando novamente o servidor devemos ver a tela home
```console
foo@bar: /desktop/petsite$ yarn start
```

Caso colocarmos na url
```console
localhost:3000/alguma_coisa
```

Deverá nos levar para a página NotFound. Então agora a fundação do nosso sistema de rotas está feita, podemos aplicar agora o tema e começar a trabalhar na *home page*

<div id="HomePage"></div>

## 5. Home Page

A primeira coisa que iremos fazer na *home page* é estabelecer o tema do site, ou seja, iremos por a cor de fundo que será utilizada no mesmo, para isso iremos necessitar de um *.css* que é um tipo de código estilizador de páginas *html*. Então iremos recriar o que já apagamos uma vez, o *App.css* e ele ficará em um diretório separado para que possamos manter a ordem em nossas páginas, então na *src* crie um novo tiretório e nomeie-o com *css* agora a pasta *src* tem duas subpastas, *components* e *css*. Agora dentro dessa pasta *css* iremos criar um arquivo *.css* o supracitado *App.css* da mesma forma que os outros arquivos foram criados, devendo ficar assim<br>
<p align="center">
  <img src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_10.png">
</p>

Agora cole o seguinte código
```css
html { margin: 0px; height: 100%; width: 100%; }
body { margin: 0px; min-height: 100%; width: 100%; } 

.App {
    background: #8E2DE2 !important;
    background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2) !important;
    background: linear-gradient(to right, #4A00E0, #8E2DE2) !important;
}
```

Que está fazendo com que as tags *html* e *body* ocupem totalmente a tela e as tags que sejam da class *App* receberam uma cor de fundo gradiente do azul para o roxo, vindo da esquerda indo para a direita, e é repetido 3 vezes para dar suporte a diferentes navegadores que utilizem diferentes formas de fazer isso. Agora precisamos falar quais tags que são dessa classe *App* para que possa ser aplicado o tema, então vamos ao arquivo *index.html* que está dentro da pasta *public*, clicamos nele e assim que abrir aperte CTRL+F para localizar uma parte especifica do teste e procure por

```html
<body
```

e troque essa linha por

```html
<body class="App">
```

Agora o body faz parte da classe *App*, assim que voltarmos ao site (ou executar novamente) o tema deverá estar aplicado já
