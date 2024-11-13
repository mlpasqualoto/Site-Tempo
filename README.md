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

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização e responsividade do layout, incluindo `backdrop-filter` para efeito de desfoque.
- **JavaScript (Fetch API)**: Consulta à API [OpenWeather](https://openweathermap.org/) para dados meteorológicos e à API [TimeZoneDB](https://timezonedb.com/) para informações de fuso horário da cidade.

## Estrutura do Código

- **HTML**: Estrutura da interface, incluindo campos de entrada, botão de pesquisa e áreas de exibição de resultados.
- **CSS**: Estilos e ajustes responsivos para desktop e mobile.
- **JavaScript**:
  - Função `getWeather(city)`: Realiza requisições às APIs de clima e horário e exibe os resultados.
  - Função `getCity()`: Valida o nome da cidade inserido e aciona a função de consulta.
  - Função `capitalizeFirstLetter(str)`: Formata o texto para exibir o dia da semana com a primeira letra maiúscula.

## Exemplo de Uso

Ao inserir o nome de uma cidade no campo de texto e pressionar o botão de pesquisa, a aplicação realiza a busca e exibe as informações de clima e horário local na tela.
