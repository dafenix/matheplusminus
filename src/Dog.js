import React, {useEffect, useState} from 'react';
import lemming from "./lemmling_Cartoon_dog.svg";

function Dog(props) {
    const colors = ["black", "lightgreen", "red"];
    return (
        <div className="animal">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 77.627 104.059"
            {...props}
        >
            <g transform="matrix(.26458 0 0 .26458 -42.004 -136.013)">
                <path
                    d="M301.788 591.566c1.5-30.5 39-75 45.5-75.5s-14 70.5-19.5 75.5-25.5 1.5-26 0z"
                    fill="#784421"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinejoin="round"
                />
                <path
                    d="M347.288 516.056c-.52.04-1.25.372-2.12.937-.96 13.17-22.91 66.266-28.16 70.124-2.96 2.178-9.25 1.941-14.88.938-.15 1.18-.28 2.356-.34 3.5.5 1.5 20.5 5 26 0s26-76 19.5-75.5z"
                    fillOpacity={0.314}
                    fillRule="evenodd"
                />
                <path
                    d="M428.546 703.854a123.385 123.385 0 11-246.759 0 123.385 123.385 0 11246.759 0z"
                    fill="#a05a2c"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M405.556 684.376a95.387 95.387 0 11-190.766 0 95.387 95.387 0 11190.766 0z"
                    fillOpacity={0.314}
                />
                <path
                    d="M413.738 645.236c3.2 10.97 4.91 22.59 4.91 34.59 0 68.11-55.27 123.38-123.38 123.38-46.82 0-87.6-26.14-108.5-64.6 15.03 51.2 62.37 88.63 118.41 88.63 68.11 0 123.37-55.27 123.37-123.38 0-21.21-5.37-41.18-14.81-58.62z"
                    fillOpacity={0.314}
                />
                <path
                    d="M389.208 823.786c0 21.54-17.48 20.77-39.03 20.77-21.54 0-39.03.77-39.03-20.77 0-21.55 17.49-39.03 39.03-39.03 21.55 0 39.03 17.48 39.03 39.03zM299.188 823.786c0 21.54-17.48 20.77-39.03 20.77-11.98 0-22.7.24-29.86-3.25-5.72-2.79-9.17-7.96-9.17-17.52 0-21.55 17.49-39.03 39.03-39.03 21.55 0 39.03 17.48 39.03 39.03z"
                    fill="#a05a2c"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <g fill="none" stroke="#000" strokeWidth={4} strokeLinecap="round">
                    <path d="M274.518 841.407c3.5-11.33-.5-24.55-.5-24.55M256.488 843.927c-4.29-18.25.62-32.73.62-32.73M238.238 842.037c-8.81-13.85-1.26-25.18-1.26-25.18" />
                </g>
                <path
                    d="M400.556 670.876a95.387 95.387 0 11-190.766 0 95.387 95.387 0 11190.766 0z"
                    fill="#a05a2c"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M392.228 631.806c1.52 6.77 2.34 13.8 2.34 21.03 0 52.65-42.75 95.41-95.4 95.41-38.78 0-72.158-23.19-87.068-56.44 9.556 42.59 47.608 74.44 93.068 74.44 52.65 0 95.4-42.76 95.4-95.41 0-13.91-2.98-27.11-8.34-39.03z"
                    fillOpacity={0.314}
                />
                <path
                    d="M301.047 652.852a27.384 27.384 0 11-54.766 0 27.384 27.384 0 1154.766 0zM364.627 652.852a27.384 27.384 0 11-54.766 0 27.384 27.384 0 1154.766 0z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M290.348 655.994a8.498 8.498 0 11-16.997 0 8.498 8.498 0 1116.997 0zM336.928 655.994a8.498 8.498 0 11-16.997 0 8.498 8.498 0 1116.997 0zM330.518 717.296c0 13.77-15.08 24.95-25.07 24.95-10.75 0-25.06-11.18-25.06-24.95 0-13.78 11.23-17.28 25.06-17.28 13.84 0 25.07 3.5 25.07 17.28z" />
                <path
                    d="M370.678 790.576c4.72 6.48 7.53 14.47 7.53 23.09 0 12.47-5.84 23.56-14.91 30.76 15.09-.58 25.91-3.7 25.91-20.63 0-14.03-7.41-26.34-18.53-33.22z"
                    fillOpacity={0.314}
                />
                <g fill="none" stroke="#000" strokeWidth={4} strokeLinecap="round">
                    <path d="M336.9 841.407c-3.5-11.33.5-24.55.5-24.55M354.93 843.927c4.29-18.25-.62-32.73-.62-32.73M373.18 842.037c8.81-13.85 1.26-25.18 1.26-25.18" />
                </g>
                <path
                    d="M280.178 790.576c4.72 6.48 7.53 14.47 7.53 23.09 0 12.47-5.84 23.56-14.91 30.76 15.09-.58 25.91-3.7 25.91-20.63 0-14.03-7.41-26.34-18.53-33.22zM316.368 804.296a38.825 38.825 0 00-5.22 19.5c0 17.51 11.55 20.26 27.44 20.69-15.78-6.58-23.81-22.21-22.22-40.19z"
                    fillOpacity={0.314}
                />
                <path
                    d="M237.998 602.066c-54.92-3.88-83.53 62.3-76.03 81.8 6.1 15.85 39.79 31.84 38.43 17.3-4.41-47.18 54.73-97.89 37.6-99.1zM372.908 602.066c54.92-3.88 83.53 62.3 76.03 81.8-6.1 15.85-39.79 31.84-38.43 17.3 4.41-47.18-54.73-97.89-37.6-99.1z"
                    fill="#784421"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinejoin="round"
                />
                <path
                    d="M377.978 601.9c50.9 10.295 64.66 77.406 53.75 94.536-2.42 3.79-6.76 7.18-11.72 9.9 10.08-2.33 25.07-12.41 28.94-22.47 7.26-18.89-19.37-81.588-70.97-81.966z"
                    fillOpacity={0.314}
                    fillRule="evenodd"
                />
                <path
                    d="M270.498 886.376l72.77-15.76s12.42 19.95 26.82 8.58c14.39-11.37-5.74-22.66-5.74-22.66s20.21-11.03.34-20.94c-19.87-9.9-26.5 15.83-26.5 15.83l-70.52 12.45s-18.34-24.58-31.82-8.35c-13.47 16.23 5.02 26.4 5.02 26.4s-14.83 12.89 4.08 21.53c18.92 8.65 24.56-14.73 25.55-17.08z"
                    fill="#e3dbdb"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinejoin="round"
                />
                <path
                    d="M257.068 853.776c1.97 1.89 3.83 3.82 5.64 5.45.24-.04.47-.09.71-.13-1.74-1.74-3.9-3.67-6.35-5.32zm108.92-17.49c.34.46.64.95.92 1.45 2.01 6.02-6.4 10.95-9.51 14.3 1.13 2.21 3.89 3.67 6.12 5.58 1.91-1.1 19.07-12.18 2.47-21.33zm-134.02 35.93c.91 2.23 2.31 4.13 3.74 5.62 1.9-2.26-1.57-3.8-3.74-5.62zm134.14-14.55c.44.51.82 1.09 1.12 1.7 6.03 7.71-3.98 17.18-11.88 16.69-7.76-.17-10.84-7.66-15.72-12.38-24.26 5.25-50.26 10.84-74.52 16.09-2.47 4.05-3.34 9.33-6.64 13.06-4.95 7.84-15.94 7.03-22.56 1.67-.13-.07-.24-.17-.36-.25.67 3.13 3.25 6.4 9.41 9.22 18.92 8.65 24.55-14.74 25.54-17.09l74.52-16.09s10.69 20.29 25.08 8.92c11.7-9.24.58-18.42-3.99-21.54z"
                    fillOpacity={0.314}
                    fillRule="evenodd"
                />
                {props.smile && <path
                    d="M366.957 721.335c-4.92 14.051-24.416 34.841-27.733 35.467-8.01-4.44-56.663-3.944-64.672 1.162-9.006-5.419-25.918-20.339-29.327-37.204 70.858 59.241 125.13-7.796 121.73.576z"
                    fill="#fff"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />}
                {props.gangster && <image
                    width={360.12}
                    height={145.951}
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAEYCAYAAADPrtzUAAAABHNCSVQICAgIfAhkiAAABkZJREFU eJzt2cGN20AQAEGt4QTIEJR/TAqBDGH9PuB+hrgtsSqBGX44aOzjAQAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAANA2Vi/AT/sYc/UOAAAA73TMqUV/8Wf1AgAAAIBABwAAgASBDgAAAAECHQAAAAIEOgAA AAQIdAAAAAgQ6AAAABAg0AEAACBAoAMAAECAQAcAAIAAgQ4AAAABAh0AAAACBDoAAAAECHQAAAAI EOgAAAAQINABAAAgQKADAABAgEAHAACAAIEOAAAAAQIdAAAAAgQ6AAAABAh0AAAACBDoAAAAECDQ AQAAIECgAwAAQIBABwAAgACBDgAAAAECHQAAAAIEOgAAAAT8Xb0A9/Y6zyVzn9u2ZO7dvhe+yTHn WL3DJ9vHmKt3uNLd/vd3+16Ad/GCDgAAAAECHQAAAAIEOgAAAAQIdAAAAAgQ6AAAABAg0AEAACBA oAMAAECAQAcAAIAAgQ4AAAABAh0AAAACBDoAAAAECHQAAAAIEOgAAAAQINABAAAgQKADAABAgEAH AACAAIEOAAAAAQIdAAAAAgQ6AAAABAh0AAAACBDoAAAAECDQAQAAIECgAwAAQIBABwAAgACBDgAA AAECHQAAAAIEOgAAAAQIdAAAAAgQ6AAAABAwVi9Awz7GXL3DlV7nuWTuc9uWzL3b98I7HHO6mR/I fbuG+wafy31r8YIOAAAAAQIdAAAAAgQ6AAAABAh0AAAACBDoAAAAECDQAQAAIECgAwAAQIBABwAA gACBDgAAAAECHQAAAAIEOgAAAAQIdAAAAAgQ6AAAABAg0AEAACBAoAMAAECAQAcAAIAAgQ4AAAAB Ah0AAAACBDoAAAAECHQAAAAIEOgAAAAQINABAAAgQKADAABAgEAHAACAAIEOAAAAAQIdAAAAAgQ6 AAAABAh0AAAACBDoAAAAEDBWL8C97WPM1Ttc6XWeS+Y+t23J3Lt9L9c45nS7yHPfruG+8U3cNx4P L+gAAACQINABAAAgQKADAABAgEAHAACAAIEOAAAAAQIdAAAAAgQ6AAAABAh0AAAACBDoAAAAECDQ AQAAIECgAwAAQIBABwAAgACBDgAAAAECHQAAAAIEOgAAAAQIdAAAAAgQ6AAAABAg0AEAACBAoAMA AECAQAcAAIAAgQ4AAAABAh0AAAACBDoAAAAECHQAAAAIEOgAAAAQINABAAAgQKADAABAgEAHAACA AIEOAAAAAWP1ArDCPsZcvQN8umNONwRi3Df4f+4bK3lBBwAAgACBDgAAAAECHQAAAAIEOgAAAAQI dAAAAAgQ6AAAABAg0AEAACBAoAMAAECAQAcAAIAAgQ4AAAABAh0AAAACBDoAAAAECHQAAAAIEOgA AAAQINABAAAgQKADAABAgEAHAACAAIEOAAAAAQIdAAAAAgQ6AAAABAh0AAAACBDoAAAAECDQAQAA IECgAwAAQIBABwAAgACBDgAAAAECHQAAAAIEOgAAAAQIdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAbuIfkZdFK313H94AAAAASUVORK5CYII="
                    x={119.145}
                    y={625.811}
                />}
            </g>
        </svg>
        </div>
    );
}

export default Dog;
