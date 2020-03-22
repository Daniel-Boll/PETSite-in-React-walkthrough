# <h1 align="center">PETSite em React - Walkthrough</h1>

> O intuito desse repositório é de fazer um passo a passo de como construir o site do grupo PET 
> utilizando ***React*** para que novos integrantes do grupo que forem trabalhar com o site possam 
> compreender como ele foi construído facilitando futuras alterações e inserções de dados no
> mesmo.

---

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
5. <a href="#HomePage">Home Page</a><br>
  5.1 <a href="#Navbar">Navbar</a><br>
  5.2 <a href="#HomeContent">Home Content</a><br>
  5.3 <a href="#Footer">Footer</a>
6. <a href="#Routes">Arrumando as Rotas</a>
7. <a href="#ProjectPage">Página de Projetos</a>
--- 

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

A primeira coisa que iremos fazer na *home page* é estabelecer o tema do site, ou seja, iremos por a cor de fundo que será utilizada no mesmo, para isso iremos necessitar de um *.css* que é um tipo de código estilizador de páginas *html*. Então iremos recriar o que já apagamos uma vez, o *App.css* e ele ficará em um diretório separado para que possamos manter a ordem em nossas páginas, então na *src* crie um novo diretório e nomeie-o com *css* agora a pasta *src* tem duas subpastas, *components* e *css*. Agora dentro dessa pasta *css* iremos criar um arquivo *.css* o supracitado *App.css* da mesma forma que os outros arquivos foram criados, devendo ficar assim<br>
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

Agora no arquivo *Home.js* adicione a linha
```js
import '../../css/App.css';
```

Então o body faz parte da classe *App* e o *Home.js* está utilizando o *.css*, assim que voltarmos ao site (ou executar novamente) o tema deverá estar aplicado já

---

<div id="Navbar"></div>

### 5.1 Navbar

Agora iremos fazer a *navbar* do site que é a parte que de cima do site, onde fica alguns links e a logo. Primeiramente iremos criar o arquivo para a *navbar*, então dentro de *components/widgets* será criado o arquivo *NavBar.js* que conterá o código da *navbar*. Após criado iremos inserir o código dentro do arquivo

```jsx
import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../assets/logoC.png'

class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">
                    <img
                        style={{paddingLeft: "40"}}
                        width={"42px"}
                        src={logo}
                    />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#futurasrotas" style={{color: "white"}}>Início</Nav.Link>
                            <Nav.Link href="#futurasrotas" style={{color: "white"}}>Projetos</Nav.Link>
                            <Nav.Link href="#futurasrotas" style={{color: "white"}}>Membros</Nav.Link>
                            <Nav.Link href="#futurasrotas" style={{color: "white"}}>Contatos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar><br/><br/><br/><br/>
            </>
        )
    }
}

export default NavBar;
```

E esse código importa duas novas coisas que ainda não temos
```jsx
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../assets/logoC.png'
```

*React-bootstrap* é biblioteca usada para criar os componentes internos da *navbar* então para baixá-lo no terminal digitamos
```console
foo@bar: /desktop/petsite$ yarn add react-bootstrap
```

Enquanto ele baixa a dependência, podemos ir criando a nova pasta que utilizaremos, a *assets*. *Assets* ficará dentro de *src* junto com *components* e *css* e dentro dela armazenaremos as imagens que utilizaremos no projeto. E dentro dela armazenaremos a [*logoC.png*](https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/logoC.png). Agora no arquivo *Home.js* iremos chamar o component *NavBar* através do import e colocá-lo dentro do *render* onde estáva a escrita da página.

```jsx
import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import NavBar from '../widgets/NavBar';
import '../../css/App.css';

class Home extends Component {
    render() {
        return (
            <>
                <Container>
                    <NavBar/>
                </Container>
            </>
        )
    }
}

export default Home;
```

Note que ao importar
```jsx
import NavBar from '../widgets/NavBar';
```

Tudo que fizemos em *NavBar.js* se resume a um único componente
```jsx
<NavBar/>
```

Então até o momento devemos ter<br>
<p align="center">
  <img src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_11.png">
</p>

E em mobile<br>
<p float="left">
  <img width="350" align="left" src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_12.png" hspace="20">
  <img width="350" align="left" src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_13.png" hspace="20">
</p>
<br><br><br><br><br><br><br>

---

<div id="HomeContent"></div>

### 5.2 Home Content

Agora iremos trabalhar com as informações que serão mostradas na página inicial. Então iremos adicionar o componente *HomeContent* assim como fizemos com a *NavBar*, devendo ficar assim

```jsx
<Container style={{ paddingLeft: 24, paddingTop: 24 }}>
   <NavBar/>
</Container>

<Container style={{ paddingLeft: 0, paddingRight: 0 }}>
   <HomeContent/>
</Container>
```

Como perceberam é só colocar logo abaixo de onde estava a *navbar* e dentro de outro container, esse que não tem nenhum espaçamento lateral, ou seja, as colunas do corpo da página são coladas na borda da tela, diferente da *navbar*. Então agora precisamos criar a classe desse componente *HomeContent*, em *widgets* juntamente à *NavBar.js* criaremos *HomeContent.js*, ainda na pasta *widgets* criaremos uma outra pasta chamada *subContent* e nela criaremos os seguintes arquivos

* *Logo.js*
* *PETD.js*
* *PETIcons.js*

Que são sub-componentes do componente *HomeContent* que não necessitam estar atrelados a ele, então separamos para deixar mais fácil de se ler e trabalhar com o mesmo que já ficou muito maior que os códigos até o momento e por conta disso colocarei em seguida o código completo dos 4 arquivos (*HomeContent.js*, *Logo.js*, *PETD.js* e *PETIcons.js*) e ir comentando pequenos trechos de cada um para que seja mais fácil de absorver o conteúdo.

* *HomeContent.js*
```jsx
import React, {Component} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {Zoom} from '@material-ui/core'
import Logo from './subContent/Logo'
import PETD from './subContent/PETD'
import PETIcons from './subContent/PETIcons'
import '../../css/App.css';

class HomeContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: '',
            align: '',
            display: ''
        }
    }

    async componentDidMount() {
        this.setState({
            checked: false,
            align: "left",
            display: 100
        });
        window.addEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        if(window.innerWidth < 515){
            this.setState({
                align: "center",
                display: 0
            });
        }else{
            this.setState({
                align: "left",
                display: 100
            });
        }
    }

    handleLoad = () => {
        this.setState({
            checked: true
        })
        this.updateDimensions();
    }

    render() {
        const {checked, align, display} = this.state
        return (
            <>
                <Row onLoad={this.handleLoad} xs={1} md={2}>
                    <Col>
                        <div>
                            <Zoom in={checked} style={{transitionDelay: checked ? '500ms' : '0ms'}}>
                                <Container>
                                    <Row>
                                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <Logo/>
                                        </Col>       
                                    </Row>  
                                </Container> 
                            </Zoom>
                            <br></br>

                            <Zoom in={checked} style={{transitionDelay: checked ? '750ms' : '0ms'}}>
                                <Container>
                                    <Row>
                                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            {/* PET description */}
                                            <PETD/>
                                        </Col>       
                                    </Row>  
                                </Container> 
                            </Zoom>     
                        </div>       
                    </Col>
                </Row>
                <br></br><br></br><br></br><br></br><br></br>
                <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Row xs={1} md={2}>
                        <Col>
                            {/* O alinhamento da div é alterado quando passa de determinado tamanho */}
                            <div align={align} style={{minWidth: "330px", maxHeight:"450px"}}>
                                <Zoom in={checked} style={{transitionDelay: checked ? '1000ms' : '0ms'}}>
                                    <Container>
                                        {/* What is PET */}
                                        <div style={{maxWidth: "300px"}} align="left">   
                                            <h1 align={align} style={{color: "white"}}>O que é?</h1>
                                            <p style={{color: "white"}}>
                                                O PET Ciência da Computação (PETComp) foi criado em dezembro de 2010 e é o 5º Grupo PET da UNIOESTE (1º do campus de Cascavel), destinado exclusivamente aos alunos regularmente matriculados no Curso. Sua aprovação junto ao MEC foi uma conquista do Prof. Dr. Clodis Boscarioli, muito bem recebida, após 5 tentativas de submissão de projeto por parte de vários professores.
                                            </p>
                                        </div>
                                    </Container>
                                </Zoom>
                            </div>
                        </Col>
                        <Col>
                            {/* Ícones */}
                            <br></br>
                            {/* Opacity é alterada pra 0 quando passa de uma determinado tamanho, então deixam de ser mostrados */}

                            <div style={{opacity: display}}>
                                <Zoom in={checked} style={{transitionDelay: checked ? '1250ms' : '0ms'}}>
                                    <Container>
                                        <PETIcons/>
                                    </Container>
                                </Zoom>
                            </div>
                        </Col>

                    </Row>
                </Container>
                <br></br><br></br><br></br><br></br><br></br>
                <Container style={{ paddingLeft: 0, paddingRight: 0, flexDirection: "row"}}>
                    <Row xs={1} md={2}>
                        <Col>
                            {/* Projeto, pesquisa e extenção */}
                            <div>
                                <Zoom in={checked} style={{transitionDelay: checked ? '1000ms' : '0ms'}}>
                                    <Container>
                                        <div align="center">
                                            <div style={{maxWidth: "300px"}} align="left">   
                                                <h1 align={align} style={{color: "white"}}>Pesquisa</h1>
                                                <p style={{color: "white"}}>
                                                    Para incentivar a pesquisa, no PET, todos os membros devem ter um projeto de iniciação cientifica.
                                                </p>
                                            </div>
                                        </div>
                                    </Container>
                                </Zoom>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Zoom in={checked} style={{transitionDelay: checked ? '1000ms' : '0ms'}}>
                                    <Container>
                                        <div style={{maxWidth: "300px"}} align="left">   
                                            <h1 align={align} style={{color: "white"}}>Ensino</h1>
                                            <p style={{color: "white"}}>
                                                O PET organiza eventos para compartilhar e adquirir conhecimento, como minicursos e palestras, que são abertos para os membros do PET e para os acadêmicos do curso de ciência da computação.
                                            </p>
                                        </div>
                                    </Container>
                                </Zoom>
                            </div>
                        </Col>
                        <Col>
                        <div>
                            <Zoom in={checked} style={{transitionDelay: checked ? '1000ms' : '0ms'}}>
                                <Container>
                                    <div style={{maxWidth: "300px"}} align="left">   
                                        <h1 align={align} style={{color: "white"}}>Extensão</h1>
                                        <p style={{color: "white"}}>
                                            Entre os projetos que o PET realiza, existem os projetos de extensão, que estabelecem uma conexão com a comunidade.
                                        </p>
                                    </div>
                                </Container>
                            </Zoom>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default HomeContent;
```

* *Logo.js*
```jsx
import React, {Component} from 'react'

import logo from '../../../assets/logo.png'

class Logo extends Component {
    render() {
        return (
            <>
                <div align="center">
                    <img
                            style={{paddingLeft: "0"}}
                            width={"300px"}
                            src={logo}
                    />{' '}
                </div>
            </>
        )
    }
}

export default Logo;
```

* *PETD.js*
```jsx
import React, {Component} from 'react'

class PETD extends Component {
    render() {
        return (
            <>
                <div align="center">
                    <div align="left" style={{maxWidth: "300px"}}>
                        <p style={{color: "white"}}>
                            O Programa de Educação Tutorial (PET) insere estudantes de graduação em projetos de educação tutorial com o objetivo de aplicar seus conhecimentos e ampliar sua formação.
                        </p>
                    </div>
                </div>  
            </>
        )
    }
}

export default PETD;
```

* *PETIcons.js*
```jsx
import React, {Component} from 'react'
import {MenuBook, FileCopy, Share} from '@material-ui/icons';

class Logo extends Component {
    render() {
        return (
            <>
                <div>   
                    <MenuBook style={{color: "#955dff", fontSize: 140}}/>
                    <FileCopy style={{color: "#955dff", fontSize: 140}}/>
                    <Share style={{color: "#955dff", fontSize: 140}}/>
                </div>
            </>
        )
    }
}

export default Logo;
```

Como havia dito diferente do que fizemos até agora apareceu **bastante** código e meio que do nada, eu decidi que seria mais fácil eu entregar o código completo e destrinchá-lo pouco a pouco já com o contexto global, então vamos lá que temos bastante coisa para cobrir

#### HomeContent.js

Já nas importações nos deparamos com coisas novas
```jsx
import {Zoom} from '@material-ui/core'
import Logo from './subContent/Logo'
import PETD from './subContent/PETD'
import PETIcons from './subContent/PETIcons'
```

Um componente chamado *Zoom* de uma biblioteca chamada ***@material-ui/core*** e os sub-componentes que criamos (*Logo.js*, *PETD.js* e *PETIcons.js*). Essa biblioteca *@material-ui/core* assim como a *react-bootstrap* precisa ser adicionada, então da mesma forma faremos para a *@material-ui/core*.

```console
foo@bar: /desktop/petsite$ yarn add @material-ui/core
```

Agora mais abaixo temos um novo trecho de código com um *constructor*
```jsx
constructor(props) {
    super(props);
    this.state = {
        checked: '',
        align: '',
        display: ''
    }
}
```

Um construtor é chamado juntamente a chamada de classe, que ocorre quando o componente é ativado, e esse construtor tem uma coisa importante pra gente que é o *state*, o *state* será usado por nós para trechos que sejam variáveis, quando usarmos será mais fácil de compreender.

```jsx
async componentDidMount() {
    this.setState({
        checked: false,
        align: "left",
        display: 100
    });
    window.addEventListener('resize', this.updateDimensions);
}
```

A função *componentDidMount* fica esperando que o componente seja montado na classe que o chamou, assim que isso acontecer ela solta as atualizações que foram feitas dentro dela. Então colocamos os valores inicias do nosso *state* através do *setState*. E a última linha é a janela que lança um evento sempre que ela mudar de tamanho, e esse evento é tratado pela seguinte função

```jsx
updateDimensions = () => {
    if(window.innerWidth < 515){
        this.setState({
            align: "center",
            display: 0
        });
    }else{
        this.setState({
            align: "left",
            display: 100
        });
    }
}
```

Em um momento do código sempre que a tela passar uma determinada quantidades de espaço, queremos mudar o alinhamento do componente de lateral para central, pois agora o mesmo será o único a ser mostrado, então é: caso seja menor que o determinado tamanho será alinhado no meio e o que acompanhava ele não será mais mostrado, caso contrário continua mostrando e alinhe a esquerda.

```jsx
handleLoad = () => {
    this.setState({
        checked: true
    })
    this.updateDimensions();
}
```

A função *handleLoad* seta o *state* e chama a função de redimencionamento de que acabamos de ver sempre que um componente, que o chame, é carregado.

```jsx
render() {
  ...
}
```

Agora o restante estará tudo dentro do *render*, então trarei os trechos parecendo que estão no nada, mas estão dentro do *render*.

```jsx
const {checked, align, display} = this.state
```

Assim que é renderizado nós criamos variáveis que irão armazenar os estados do *state* para que possamos usá-lo dentro do *render* sem ter que ficar citando o tempo todo que o componente que queremos é desmontado do *state*.

```jsx
<Row onLoad={this.handleLoad} xs={1} md={2}>
```

Aqui o primeiro elemento renderizado já chama a função que *handleLoad* que vimos anteriormente para fazer os tratamentos necessários. Ele é seguido de uma *Col* e uma *div* que engloba tudo, então os elementos que serão mostrados pertencerão a uma unica coluna no meio da tela.

```jsx
<Zoom in={checked} style={{transitionDelay: checked ? '500ms' : '0ms'}}>
    <Container>
        <Row>
            <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Logo/>
            </Col>       
        </Row>  
    </Container> 
</Zoom>
```

Agora temos o componente *Zoom* que foi importado dá *@material-ui/core*, o que ele faz basicamente é *Container* que estiver dentro dele irá mostrar seus elementos gradativamente como se estivesse saindo da tela

<p align="center">
  <img src="https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_14.gif">
</p>

Então tanto a [*logo*](https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/logo.png) que está na primeira *Row* sendo invocada pelo componente *Logo* que é do código *Logo.js* que consistem colocar a imagem dentro de uma *div* alinhada no centro e puxar imagem dos assets através do import

```jsx
import logo from '../../../assets/logo.png'
```

Que depois é usada em *src* da tag *img*

```jsx
<div align="center">
    <img
            style={{paddingLeft: "0"}}
            width={"300px"}
            src={logo}
    />{' '}
</div>
```

Ambos os componentes *Logo* e *PETD* que está logo abaixo
```jsx
<Zoom in={checked} style={{transitionDelay: checked ? '750ms' : '0ms'}}>
    <Container>
        <Row>
            <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                {/* PET description */}
                <PETD/>
            </Col>       
        </Row>  
    </Container> 
</Zoom>  
```

Usam o componente *Zoom* para animar sua transição, e para que um venha depois do outro é só aumentar o *transitionDelay* que fica dentro do *style* do *Zoom* que ele irá aparecer depois de x milissegundos que o componente foi chamado. No caso estou usando 250ms de diferença entre componentes. E o que o componente *PETD* tem é.

```jsx
<div align="center">
    <div align="left" style={{maxWidth: "300px"}}>
        <p style={{color: "white"}}>
            O Programa de Educação Tutorial (PET) insere estudantes de graduação em projetos de educação tutorial com o objetivo de aplicar seus conhecimentos e ampliar sua formação.
        </p>
    </div>
</div> 
```

Finalizando essa primeira *Row* vamos para a segunda que contém o trecho **O que é o PET?** e alguns ícones do lado, então foram separados em 2 diferentes *Col* 

```jsx
<Col>
    <div align={align} style={{minWidth: "330px", maxHeight:"450px"}}>
        <Zoom in={checked} style={{transitionDelay: checked ? '1000ms' : '0ms'}}>
            <Container>
                <div style={{maxWidth: "300px"}} align="left">   
                    <h1 align={align} style={{color: "white"}}>O que é?</h1>
                    <p style={{color: "white"}}>
                        O PET Ciência da Computação (PETComp) foi criado em dezembro de 2010 e é o 5º Grupo PET da UNIOESTE (1º do campus de Cascavel), destinado exclusivamente aos alunos regularmente matriculados no Curso. Sua aprovação junto ao MEC foi uma conquista do Prof. Dr. Clodis Boscarioli, muito bem recebida, após 5 tentativas de submissão de projeto por parte de vários professores.
                    </p>
                </div>
            </Container>
        </Zoom>
    </div>
</Col>
```

A primeira *Col* como podemos ver acima tem uma *div* que compreende tudo o que tem dentro dessa *Col* e seu alinhamento é definido pela *align* que veio do *state* então sempre que o *align* do *state* mudar o alinhamento dessa *div* mudará junto, então em seguida temos um componente *Zoom* igualmente o anterior, um *Container* e a *div* com a descrição do que é o PET, nela tem um título (*h1*) que também se utiliza do alinhamento ditado pelo *state* e um parágrafo (*p*).

```jsx
<Col>
    <div style={{opacity: display}}>
        <Zoom in={checked} style={{transitionDelay: checked ? '1250ms' : '0ms'}}>
            <Container>
                <PETIcons/>
            </Container>
        </Zoom>
    </div>
</Col>
```

A segunda *Col* tem uma *div* que tem sua opacidade ditada pelo *state*, se o *state* for mudado e o *display* for alterado para **0** toda essa *div* deixa de aparecer. E isso só acontece quando a janela for menor que uma quantidade, assim como o *align* e tudo é controlado pela função que vimos anteriormente, quando a janela for de um tamanho menor que o estipulado a descrição do que é o PET passa a ser alinhada centralmente e deixamos de ver os ícones, é como se retirassemos a segunda *Col*. E dentro dos componentes *Zoom* e *Container* temos o sub-componente *PETIcons* 

```jsx
<div>   
    <MenuBook style={{color: "#955dff", fontSize: 140}}/>
    <FileCopy style={{color: "#955dff", fontSize: 140}}/>
    <Share style={{color: "#955dff", fontSize: 140}}/>
</div>
```

Que é uma *div* com os componentes de ícone e suas cores e tamanhos, mas esses componentes de ícones foram chamados no *import* do próprio *PETIcons.js* que tem um peculiaridade 

```jsx
import {MenuBook, FileCopy, Share} from '@material-ui/icons';
```

Ele usa a biblioteca *@material-ui* assim como já importamos antes, mas agora é **/icons** e não mais **/core** então devemos baixar a biblioteca para essa também da mesma forma que fizemos para a */core*

```console
foo@bar: /desktop/petsite$ yarn add @material-ui/icons
```

Agora na terceira *Row*, ou seja, abaixo do que vimos agora, teremos as descrições de cada eixo da universidade, sendo então 3 *Cols*
```jsx
<Col>
    <div>
        <Zoom in={checked} style={{transitionDelay: checked ? '1000ms' : '0ms'}}>
            <Container>
                <div align="center">
                    <div style={{maxWidth: "300px"}} align="left">   
                        <h1 align={align} style={{color: "white"}}>Pesquisa</h1>
                        <p style={{color: "white"}}>
                            Para incentivar a pesquisa, no PET, todos os membros devem ter um projeto de iniciação cientifica.
                        </p>
                    </div>
                </div>
            </Container>
        </Zoom>
    </div>
</Col>
```

Então a primeira *Col* tem novamente uma *div* que compreende tudo, dentro da *div* o componente *Zoom*, um *Container* e 2 *divs* para controlar posicionamento dos elementos dentro do *Container* e alinhamento do texto, depois temos um título (*h1*) que se utiliza do alinhamento variável do *state* e um parágrafo (*p*) com a descrição do título e isso se repete exatamente igual para os outros 2 eixos só trocando o título e o parágrafo.

---

<div id="Footer"></div>

### 5.3 Footer

Agora o *Footer*, adicionaremos o componente *Footer* na *home* juntamente aos componentes *NavBar* e *HomeContent*, devendo ficar assim

```jsx
<Container style={{ paddingLeft: 24, paddingTop: 24 }}>
    <NavBar/>
</Container>

<Container style={{ paddingLeft: 0, paddingRight: 0 }}>
    <HomeContent/>
</Container>

<Container style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Footer/>
</Container>
```

E então criaremos o código para o componente, em *widgets* criamos o arquivo *Footer.js* e inserimos o seguinte código dentro

```jsx
import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import {Facebook, Instagram, GitHub, WhatsApp} from '@material-ui/icons';


class Footer extends Component {
    render() {
        return (
            <>
                <Row onLoad={this.handleLoad}>
                    <Col>
                        <div>
                            <div align="center">
                                <h1 style={{color: "white"}}>Alguma dúvida? Entre em contato.</h1>
                            </div>
                        </div>
                    </Col>    
                </Row><br></br><br></br><br></br>
                <Row>
                    <Col>
                        <div>
                            <div align="center">
                                <div align="center">
                                <a href="https://facebook.com/petcomp"><Facebook style={{color: "white", fontSize: 30}}/></a>{' '}
                                <a href="https://instagram.com/petcomp_unioeste"><Instagram style={{color: "white", fontSize: 30}}/></a>{' '}
                                <a href="https://github.com/petcomp-unioeste"><GitHub style={{color: "white", fontSize: 30}}/></a>{' '}
                                <a href="https://www.youtube.com/channel/UC7c6zwLrLbuqVa4sjUn20Jg"><YouTube style={{color: "white", fontSize: 30}}/></a>{' '}
                            </div>
                            </div>
                        </div>
                    </Col>    
                </Row><br></br>
                <Row>
                    <Col>
                        <div>
                            <div align="center">
                                <p style={{color: "white"}}>Rua Universitária, 1619. Cascavel, PR. Brasil. Bloco F, Sala 15</p>
                            </div>
                        </div>
                    </Col> 
                </Row>
                <Row>
                    <Col>
                        <div>
                            <div align="center">
                                <p style={{color: "white"}}><b>Unioeste - PETComp</b></p>
                            </div>
                        </div>
                    </Col> 
                </Row>                
            </>
        )
    }
}

export default Footer;
```

O nosso *footer* consiste em 4 elementos, logo 4 componentes *Row*. Sendo a primeira apenas com um título

```jsx
<Row onLoad={this.handleLoad}>
    <Col>
        <div>
            <div align="center">
                <h1 style={{color: "white"}}>Alguma dúvida? Entre em contato.</h1>
            </div>
        </div>
    </Col>    
</Row>
```

E só utilizamos 1 *Col*, pois não estamos dispondo mais de um elementos nessa mesma linha para ter que divid-los. Agora a segunda *Row* compreende os ícones para as mídias do PET.

```jsx
<Row>
  <Col>
      <div>
          <div align="center">
              <a href="https://facebook.com/petcomp"><Facebook style={{color: "white", fontSize: 30}}/></a>{' '}
              <a href="https://instagram.com/petcomp_unioeste"><Instagram style={{color: "white", fontSize: 30}}/></a>{' '}
              <a href="https://github.com/petcomp-unioeste"><GitHub style={{color: "white", fontSize: 30}}/></a>{' '}
              <a href="https://www.youtube.com/channel/UC7c6zwLrLbuqVa4sjUn20Jg"><YouTube style={{color: "white", fontSize: 30}}/></a>{' '}
          </div>
      </div>
  </Col>    
</Row>
```

Utilizando a *tag* de *link* (*a*) passamos os *links* quando o determinado ícone for clicado, esses ícones que foram importados aqui

```jsx
import {Facebook, Instagram, GitHub, WhatsApp, YouTube} from '@material-ui/icons';
```

E as últimas duas *Rows* são apenas parágrafos

```jsx
<Row>
    <Col>
        <div>
            <div align="center">
                <p style={{color: "white"}}>Rua Universitária, 1619. Cascavel, PR. Brasil. Bloco F, Sala 15</p>
            </div>
        </div>
    </Col> 
</Row>
<Row>
    <Col>
        <div>
            <div align="center">
                <p style={{color: "white"}}><b>Unioeste - PETComp</b></p>
            </div>
        </div>
    </Col> 
</Row>  
```

Diferenciando entre eles apenas que o último está em negrito devido a *tag* (*b*).

---

<div id="Routes"></div>

## 6. Arrumando as Rotas

Agora para que o site fique funcional, precisamos que os *links* da *NavBar* realmente levem para as páginas que ele deveria. Então vamos dar uma mudada nos *Nav.Link* .

```jsx
<Nav.Link href="/" style={{color: "white"}}><b>INÍCIO</b></Nav.Link>
<Nav.Link href="/Project" style={{color: "white"}}><b>PROJETOS</b></Nav.Link>
<Nav.Link href="/Member" style={{color: "white"}}><b>MEMBROS</b></Nav.Link>
<Nav.Link href="/Contact" style={{color: "white"}}><b>CONTATOS</b></Nav.Link>
```

Trocamos o *href* para as rotas serão definidas em *Routes.js* e colocamos para destacar o nome a *tag* (*b*), mas como não criamos os códigos para a página de projetos, membros e contatos e tampouco os colocamos na *Routes.js*, logo significa que sempre que tentarmos clicar nesses *links* seremos levados para a página *NotFound* então iremos dar uma repaginada nela.

```jsx
import React, {Component} from 'react'
import { Container } from "react-bootstrap";
import NavBar from '../widgets/NavBar';
import NotFoundContent from '../widgets/NotFoundContent';
import Footer from '../widgets/Footer';
import '../../css/App.css';

class NotFound extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingLeft: 24, paddingTop: 24 }}>
                    <NavBar/>
                </Container>

                <Container style={{ paddingLeft: 0, paddingRight: 0, height: "40vh" }}>
                    <NotFoundContent/>
                </Container>

                <Container style={{ paddingLeft: 0, paddingRight: 0}}>
                    <Footer/>
                </Container>
            </>
        )
    }
}

export default NotFound;
```

Agora aproveitamos os componentes *NavBar* e *Footer* que já fizemos e os adicionamos

```jsx
<Container style={{ paddingLeft: 24, paddingTop: 24 }}>
    <NavBar/>
</Container>

<Container style={{ paddingLeft: 0, paddingRight: 0, height: "50vh" }}>
    <NotFoundContent/>
</Container>

<Container style={{ paddingLeft: 0, paddingRight: 0}}>
    <Footer/>
</Container>
```

No mesmo formato que a *Home*. Como observado há um componente *NotFoundContent* que é o conteúdo que haverá na página, assim como *HomeContent* ele será criado na pasta *widgets* como *NotFoundContent.js*

```jsx
import React, {Component} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {Zoom} from '@material-ui/core'
import Logo from '../widgets/subContent/Logo'
import '../../css/App.css';

class NotFoundContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: ''
        }
    }

    async componentDidMount() {
        this.setState({
            checked: false
        });
    }

    handleLoad = () => {
        this.setState({
            checked: true
        })
    }

    render() {
        const {checked} = this.state
        return (
            <>
                <Row onLoad={this.handleLoad} xs={1} md={2}>
                    <Col>
                        <div>
                            <Zoom in={checked} style={{transitionDelay: checked ? '500ms' : '0ms'}}>
                                <Container>
                                    <Row>
                                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <Logo/>
                                        </Col>       
                                    </Row>  
                                </Container> 
                            </Zoom>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Zoom in={checked} style={{transitionDelay: checked ? '750ms' : '0ms'}}>
                                <Container>
                                    <Row>
                                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <h1 align="center" style={{color: "white"}}>Página não encontrada!</h1>
                                        </Col>       
                                    </Row>  
                                </Container> 
                            </Zoom>     
                        </div>       
                    </Col>
                </Row>
            </>
        )
    }
}

export default NotFoundContent;
```

Nele temos as funções para controlar o *checked* de *this.state* e poder usar o *Zoom* assim como vimos em *HomeContent* e dentro do conteúdo temos 2 componentes *Row*.

```jsx
<Row onLoad={this.handleLoad} xs={1} md={2}>
    <Col>
        <div>
            <Zoom in={checked} style={{transitionDelay: checked ? '500ms' : '0ms'}}>
                <Container>
                    <Row>
                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Logo/>
                        </Col>       
                    </Row>  
                </Container> 
            </Zoom>
        </div>
    </Col>
</Row>
```

No primeiro usamos o componente de *Logo*. 

```jsx
<Row>
    <Col>
        <div>
            <Zoom in={checked} style={{transitionDelay: checked ? '750ms' : '0ms'}}>
                <Container>
                    <Row>
                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <h1 align="center" style={{color: "white"}}>Página não encontrada!</h1>
                        </Col>       
                    </Row>  
                </Container> 
            </Zoom>     
        </div>       
    </Col>
</Row>
```

E na segunda *Row* um título (*h1*) com a mensagem de que a página não foi encontrada.

---

<div id="ProjectPage"></div>

## 7. Página de Projetos

```console
foo@bar: ~$ work in progress
```
