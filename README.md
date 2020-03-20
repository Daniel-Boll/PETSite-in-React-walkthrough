# PETSite em React - Walkthrough

## Sumário

1. <a href="#PR">Pré-Requisitos</a><br>
  1.1 <a href="#CH">Chocolatey</a><br>
  1.2 <a href="#YN">Yarn</a>
    1. <a href="#YNW">Windows</a>
    2. <a href="#YNL">Linux</a>
  1.3 <a href="#VSC">VSCode</a>
2. <a href="#IR">Instalando o React</a>
3. <a href="#VC">Vendo o código</a>

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

<div id="YN"></div>

### 1.2	Yarn
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

<div id="VSC"></div>

### 1.3 VSCode [(Visual Studio Code)](https://github.com/microsoft/vscode)

Por fim a ferramente de edição de texto que estarei utilizando é o [Visual Studio Code](https://code.visualstudio.com/) que pode ser baixada clicando em ali ou com a seguinte linha
```console
foo@bar:~$ choco install vscode
```

___
<div id="IR"></div>

## 2. Instalando o React

Estando na sua área de trabalho, execute o comando para adicionar o *create-react-app*
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

---
<div id="VC"></div>

## 3. Vendo o código

Agora para que possamos acessar o código no terminal digitamos
```console
foo@bar: /desktop/petsite$ code .
```

Isso deve abrir o VSCode no diretório apontado, que no caso foi o atual. De cara já podemos ver algumas coisas que foram adicionadas no diretório.
![alt_text](https://github.com/Daniel-Boll/PETSite-in-React-walkthrough/blob/master/Imagens/React_02.png)

