
export interface Card {
    buttonName: string;
    cardTitle: string;
    cardContent: string;
    style?: {
        background: string;
        color: string;
    }
}

export interface WeatherData {
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    },
    weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[];
    name: string;
}

export interface User {
    login: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
}