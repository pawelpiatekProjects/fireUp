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

<p>Reasons for choosing these technologies :</p>


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
    <li>mocks - this directory contains logic for simulating rest API requests</li>
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