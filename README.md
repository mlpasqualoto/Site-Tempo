# Weather App

Este é um simples aplicativo de consulta de clima desenvolvido em HTML, CSS e JavaScript. O usuário pode inserir o nome de uma cidade e obter informações detalhadas de temperatura, condição climática, data e hora local.

- **Desktop**
![Captura de tela 2024-11-12 233931](https://github.com/user-attachments/assets/6342104e-31ad-4036-b80c-24da772cd5ef)

- **Mobile**
![Captura de tela 2024-11-12 234209](https://github.com/user-attachments/assets/e5da50fa-407d-42d3-9d26-c668ab85aeb6)

## Funcionalidades

- **Consulta de Clima e Hora Local**: O usuário insere o nome de uma cidade e recebe informações sobre a temperatura atual, mínimas e máximas do dia, condição climática (ex.: Ensolarado, Nublado), além da data e hora local.
- **Interface Responsiva**: Layout adaptável para dispositivos desktop e móveis, com um design limpo e fácil de usar.
- **Validação de Entrada**: Garante que o nome de cidade inserido seja válido antes de realizar a consulta, exibindo mensagens de erro para entradas inválidas.
- **Servidor Node.js com Express**: O servidor faz requisições às APIs e retorna os dados para a aplicação cliente, garantindo segurança das chaves de API.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização e responsividade do layout, incluindo `backdrop-filter` para efeito de desfoque.
- **JavaScript (Fetch API)**: Para interagir com o servidor e exibir os dados obtidos.
- **Node.js com Express**: Configuração do servidor que realiza as chamadas às APIs externas.
- **APIs**:
  - **OpenWeather**: Fornece dados meteorológicos.
  - **TimeZoneDB**: Fornece informações de fuso horário.

## Estrutura do Código

- **HTML**: Estrutura da interface, incluindo campos de entrada, botão de pesquisa e áreas de exibição de resultados.
- **CSS**: Estilos e ajustes responsivos para desktop e mobile.
- **JavaScript** (Frontend):
  - `main.js`:  
    - Função `getWeather(city)`: Realiza requisições ao servidor para dados de clima e horário e exibe os resultados.
    - Função `getCity()`: Valida o nome da cidade inserido e aciona a função de consulta.
    - Função `capitalizeFirstLetter(str)`: Formata o texto para exibir o dia da semana com a primeira letra maiúscula.
- **Node.js (Backend)**:
  - `server.js`: Configuração do servidor Express que utiliza as APIs OpenWeather e TimeZoneDB. A chave das APIs é armazenada em variáveis de ambiente.

## Configuração do Projeto

1. **Clone o repositório**:
    ```bash
    git clone <url-do-repositorio>
    cd weather-app
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Configuração de Variáveis de Ambiente**:

    Crie um arquivo `.env` na raiz do projeto e adicione suas chaves de API:

    ```plaintext
    API_KEY_OPENWEATHER=<sua_chave_da_api_openweather>
    API_KEY_TIMEZONE=<sua_chave_da_api_timezone>
    ```

4. **Execute o servidor**:
    ```bash
    node server.js
    ```


5. **Abra o arquivo HTML** (`index.html`) no navegador e use o campo de pesquisa para consultar o clima de uma cidade.

## Exemplo de Uso

Ao inserir o nome de uma cidade no campo de texto e pressionar o botão de pesquisa, a aplicação realiza a busca e exibe as informações de clima e horário local na tela.
