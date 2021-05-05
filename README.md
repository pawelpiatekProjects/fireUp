<h1 align="center">
  Task description
</h1>

<p>Technologies used to solve task:</p>
<ul>
    <li>React + Typescript</li>
    <li><a href="https://styled-components.com/">Styled Components</a></li>
    <li><a href="https://ant.design/">Ant Design</a></li>
    <li><a href="https://openweathermap.org/">OpenWeather API</a></li>
    <li><a href="https://formik.org/">Formik</a></li>
    <li>Context</li>
</ul>

<p>Reasons for choosing these technologies:</p>
<ul>
    <li>Typescript - static types, useful concepts like: interfaces, generic methods. </li>
    <li>Styled Components - using styled components it is easy to inject props into components and dynamically
    styles of components.</li>
    <li>Ant design - this is one of the most popular react styling library. It is easy to use with React because 
    it has pre-prepared components. This library has also good documentation</li>
    <li>OpenWeather - good documentation and low entry level</li>
    <li>Formik - It is declarative. This is one of the most popular library for validation forms. It also allows to 
    use pre-prepared inputs for another libraries like Ant Design.</li>
    <li>Context - Context is a good solution of creating global application state. It has advantages of Redux
    while minimizing the amount of redundant code</li>
</ul>

<p>Features explanation:</p>
<ul>
    <li><b>Home page</b> - The home page was made according to mockup. At the top of the page there is a section with 4 buttons
    that change the content in the tab on the right. Below is a row of 4 photos with the filter applied. At the bottom 
    there is a carousel with photos and a section with 6 paragraphs. Images in the carousel are changed after the 
    arrows are clicked. After a few clicks, a popup appears.</li>
    <li><b>Weather page</b> - The weather forecast component uses OpenWeather API. The application is linked to this API with
    a key that is in .env file. After entering the city name and clicking the 'Search' button, the get request is sent 
    to the API with the appropriate url address, which contains the injected key and the city name. If the request does 
    not return an error, the screen will show information about the weather in the selected city and a photo that shows 
    the weather. If the request returns an error, a popup will appear.</li>
    <li><b>Sign In and Account page</b> - MSW js was used to mock sign in feature. In the mocks folder there are 3 files
    responsible for mocking requests: <b>'browser.ts'</b>, <b>'fixtures.ts'</b>, <b>'handlers.ts'</b>. The content of the
    files is described <a href="#mocks">below</a>. If the user is not logged in, after clicking the avatar, he will be 
    transferred to the sign in form. After logging in, he is transferred to the page that contains information about the
    user. In addition a token which was returned by MSW is set in the cookie.</li>
</ul>

<p>Sign In data:</p>
<ul>
    <li><b>email:</b> j.kowalski@email.com</li>
    <li><b>password: </b> 12345678</li>
</ul>

<h1 align="center">
  Screenshots
</h1>  



<h1 align="center">
  Directory structure
</h1>

```
|-- src
    |-- assets
        |-- images
        |-- styles
            |-- globalStyles.ts
            |-- variables.ts
    |-- Components
        |-- Account
            |-- Account.tsx
            |-- AccountController.tsx
            |-- AccountStyles.ts
        |-- App
            |-- App.tsx
            |-- AppStyles.ts
        |-- Home
            |-- BottomCard
                |-- BottomCard.tsx
                |-- bottomCardData.ts
                |-- BottomCardStyles.ts
            |-- Cards
                |-- Cards.tsx
                |-- cardsData.ts
                |-- CardStyles.ts
            |-- Carousel
                |-- Carousel.tsx
                |-- CarouselController.tsx
                |-- CarouselStyles.ts
            |-- ImagesRow
                |-- ImagesRow.tsx
                |-- ImagesRowStyles.ts
            |-- Home.tsx
            |-- HomeStyles.ts
        |-- Navigation
            |-- Navigation.tsx
            |-- NavigationController.tsx
            |-- NavigationStyles.ts
        |-- PopUp
            |-- PopUp.tsx
        |-- SignIn
            |-- SignInForm
                |-- SignInForm.tsx
                |-- SignInFormStyles.ts
            |-- SignIn.tsx
            |-- SignInController.tsx
            |-- signInStyles.ts
        |-- Weather
            |-- Weather.tsx
            |-- WeatherController.tsx
            |-- WeatherStyles.ts
    |-- contexts
        |-- PopUpcontext.tsx
    |-- mocks
        |-- shared
        |-- browser.ts
        |-- fixtures.ts
        |-- handlers.ts
    |-- shared
        |-- interfaces.ts
    |-- index.tsx
```

<h1 align="center">
  Directory structure explanation
</h1>

<ul>
    <li>assets</li>
    <ul>
        <li>images</li>
        <li>styles</li>
        <ul>
            <li>variables.ts - this file contains global definition of variables that are used in project</li>
            <li>globalStyles.ts - this file contains GlobalStyle component which is created by:  styled components createGlobalStyle. This component is used in App.tsx</li>
        </ul>
    </ul>
    <li>components</li>
    <ul>
        <li>Account - component displayed on <b>'/account'</b> route</li>
        <ul>
            <li>Account.tsx - file which contains view of this component</li>
            <li>AccountController.tsx - file which contains logic of this component</li>
            <li>AccountStyles.ts - file which contains styled components of this component</li>
        </ul>
        <li>App - root component</li>
        <ul>
            <li>App.tsx</li>
            <li>AppStyles.tsx</li>
        </ul>
        <li>Home - component displayed on <b>'/home'</b> route</li>
        <ul>
            <li>BottomCard - component which is a child component of Home component. Bottom card is displayed on the bottom 
            of Home page next to Carousel. It contains list of paragraphs</li>
            <ul>
                <li>BottomCard.tsx - file which contains view of this component</li>
                <li>bottomCardData.ts- file which contains array of items displayed in BottomCard.tsx </li>
                <li>BottomCardStyles.ts - file which contains styled components of this component</li>
            </ul>
            <li>Cards - component which is a child component of Home component. It is displayed on the top of Home page.
            It contains 4 buttons and card which displays dynamic content after clicking buttons</li>
                <ul>
                    <li>Cards.tsx - file which contains view of this component</li>
                    <li>cardsData.ts - file which contains data displayed in Card.tsx and configuration information about 
                    buttons displayed on Cards.tsx</li>
                    <li>CardStyles.ts - file which contains styled components of this component</li>
                </ul>
            <li>Carousel - component which is a child component of Home component. It contains images carousel
            and logic for controlling it.</li>
            <ul>
                <li>Carouse.tsx - file which contains view of this component</li>
                <li>CarouselController.tsx - file which contains logic of this component</li>
                <li>CarouselStyles.ts - file which contains styled components of this component</li>
            </ul>
            <li>ImagesRow - component which is a child component of Home component. This component displayed 
            images in row</li>
            <ul>
                <li>ImagesRow.tsx - file which contains view of this component</li>
                <li>ImagesRowStyles.ts - file which contains styled components of this component</li>
            </ul>
            <li>Home.tsx - file which contains view of this component</li>
            <li>HomeStyles.ts - file which contains styled components of this component</li>
        </ul>
        <li>Navigation - Custom navigation component</li>
        <ul>
            <li>Navigation.tsx - file which contains view of this component</li>
            <li>NavigationController.tsx - file which contains logic of this component</li>
            <li>NavigationStyles.ts - file which contains styled components of this component</li>
        </ul>
        <li>PopUp</li>
            <ul>
                <li>PopUp.tsx - Modal which is controlled by PopUpContext</li>
            </ul>
        <li>SignIn - component displayed on <b>'/signIn'</b> route</li>
            <ul>
                <li>SignInForm - Component which contains form which is used for user Authentication. 
                <a href="https://formik.org/">Formik</a> was used for form validation.</li>
                <ul>
                    <li>SignInForm.tsx - file which contains view of this component</li>
                    <li>SignInFormStyles.ts - file which contains styled components of this component</li>
                </ul>
                <li>SignIn.tsx - file which contains view of this component</li>
                <li>SignInController.tsx - file which contains logic of this component</li>
                <li>SignInStyles.ts - file which contains styled components of this component</li>
            </ul>
        <li>Weather - SignIn  component displayed on <b>'/weather'</b> route. It implements feature related to weather
        forecast for selected city. This component uses <a href="https://openweathermap.org/">openweathermap</a> API</li>
        <ul>
            <li>Weather.tsx - file which contains view of this component</li>
            <li>WeatherController.tsx - file which contains logic of this component</li>
            <li>WeatherStyles.ts - file which contains styled components of this component</li>
        </ul>
    </ul>
    <li>contexts</li>
    <ul>
        <li>PopUpContext.tsx - this file contains context and context provider which are used for controlling PopUp</li>
    </ul>
    <li id="mocks">mocks - this directory contains logic for simulating rest API requests</li>
    <ul>
        <li>shared</li>
        <ul>
            <li>interfaces.ts - this file contains shared interfaces which are used in 'mocks' directory </li>
            <li>token.ts - this file contains features for creating and comparing fake tokens</li>
        </ul>
        <li>browser.ts - this file contains worker which is initialized in index.js and provides MSW features</li>
        <li>fixtures.ts - this file contains simulation of 'backend' data</li>
        <li>handlers.ts - this file contains list of endpoints</li>
    </ul>
    <li>shared</li>
</ul>