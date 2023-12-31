import React, { useContext, useEffect, useState } from 'react'
import styles from './weatherToday.module.css'
import { getWeatherToday } from './helper';
import myContext from '../helpers/contextApi';

const WeatherToday = () => {

    const [weatherTodayData, setWeatherTodyData] = useState()

    const weatherValue = useContext(myContext)

    useEffect(
        () => {
            (async function () {
                const data = await getWeatherToday(weatherValue)
                setWeatherTodyData(data)
            })()
        }, [weatherValue])


    return (
        <div className={styles.weatherToday}>
            {weatherTodayData &&
                <>
                    <h4>Weather Today in {weatherTodayData.location.name + ', ' + weatherTodayData.location.country} </h4>
                    <div>
                        <div>
                            <p>Feels like</p>
                            <p className={styles.degree}>{weatherTodayData.current.feelslike_c}°</p></div>
                        <div>

                        </div>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <svg className="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="temp" theme="dark" data-testid="Icon" viewBox="0 0 24 24"><title>Temperature</title><path d="M10.333 15.48v.321c.971.357 1.667 1.322 1.667 2.456 0 1.438-1.12 2.604-2.5 2.604S7 19.695 7 18.257c0-1.134.696-2.099 1.667-2.456v-.322a2.084 2.084 0 0 1-1.25-1.91V5.583a2.083 2.083 0 1 1 4.166 0v7.986c0 .855-.514 1.589-1.25 1.91zM15.8 8.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm0-1.85a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
                                <p>High/Low</p>
                            </div>
                            <p>{weatherTodayData.forecast.forecastday[0].day.maxtemp_c}°/{weatherTodayData.forecast.forecastday[0].day.mintemp_c}°</p>
                        </li>
                        <li>
                            <div>
                                <svg className="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="wind" theme="dark" data-testid="Icon" viewBox="0 0 24 24"><title>Wind</title><path d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742" strokeWidth="2" stroke="currentColor" strokeLinecap="round" fill="none"></path></svg>
                                <p>Wind</p>
                            </div>
                            <p>{weatherTodayData.forecast.forecastday[0].hour[0].wind_kph} km/h</p>
                        </li>
                        <li>
                            <div>
                                <svg className="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="humidity" theme="dark" data-testid="Icon" viewBox="0 0 24 24"><title>Humidity</title><path fillRule="evenodd" d="M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4"></path></svg>
                                <p>Humidity</p>
                            </div>
                            <p>{weatherTodayData.forecast.forecastday[0].day.avghumidity}%</p>
                        </li>
                        <li>
                            <div>
                                <svg className="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="dewpoint" theme="dark" data-testid="Icon" viewBox="0 0 24 24"><title>Dew Point</title><path d="M17 8.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm0-1.85a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path><path fillRule="evenodd" d="M9.743 18.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M9.855 5c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772C9.245 5.14 9.54 5 9.855 5"></path></svg>
                                <p>Dew Point</p>
                            </div>
                            <p>24°</p>
                        </li>
                        <li>
                            <div>
                                <svg className="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="pressure" theme="dark" data-testid="Icon" viewBox="0 0 24 24"><title>Barometric Pressure</title><path d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"></path></svg>
                                <p>Pressure</p>
                            </div>
                            <p>{weatherTodayData.forecast.forecastday[0].hour[0].pressure_mb} mb</p>
                        </li>
                        <li>
                            <div>
                                <svg className="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="uv" theme="dark" data-testid="Icon" viewBox="0 0 24 24"><title>UV Level</title><path d="M7.4 5.598a.784.784 0 0 1 .25-.92c.335-.256.824-.197 1.02.062.066.063.066.063.08.085l2.406 3.152-.626.238a3.983 3.983 0 0 0-1.097.633l-.522.424L7.4 5.598zm4.539 2.358c-.21 0-.418.017-.625.05l-.664.106.09-.666.438-3.266c.013-.072.013-.072.012-.057a.783.783 0 0 1 .666-.616.78.78 0 0 1 .872.639l.006.038.507 3.933-.662-.108a3.957 3.957 0 0 0-.64-.053zm-7.781 3.19l.026-.004 3.934-.507-.108.662a3.98 3.98 0 0 0-.003 1.266l.105.664-.665-.09-3.265-.439a.784.784 0 0 1-.676-.679c-.054-.42.238-.809.63-.869l.022-.004zm11.504-.617a3.98 3.98 0 0 0-.632-1.097l-.425-.522.623-.256 3.056-1.256a.787.787 0 0 1 .916.253c.256.337.199.817-.104 1.063l-.045.037-3.151 2.405-.238-.627zm-1.205-1.672a3.984 3.984 0 0 0-1.095-.637l-.626-.24.41-.532 2.008-2.602c.059-.07.059-.07.046-.052a.78.78 0 0 1 1.306.227c.076.185.079.39.02.54l-.021.06-1.528 3.662-.52-.426zM4.595 7.793c.162-.387.611-.58.971-.441.017.004.017.004.055.02L9.283 8.9l-.425.52a3.985 3.985 0 0 0-.636 1.094l-.24.627-3.144-2.425a.784.784 0 0 1-.243-.924zm14.443 7.367c.054.045.054.045.044.04a.784.784 0 0 1 .199.884c-.163.386-.61.58-.964.443-.024-.006-.024-.006-.062-.022l-3.662-1.529.426-.52a3.98 3.98 0 0 0 .636-1.094l.241-.626 3.142 2.424zm1.332-3.303c.053.422-.239.809-.63.87l-.035.006-3.945.508.108-.662a3.999 3.999 0 0 0 .003-1.266l-.105-.663.665.09 3.272.44c.068.012.068.012.052.01a.784.784 0 0 1 .615.667zm-3.894 6.421c.024.068.024.068.017.053a.786.786 0 0 1-.27.87c-.332.25-.816.194-1.047-.091-.022-.023-.022-.023-.05-.058l-2.406-3.154.626-.237a3.977 3.977 0 0 0 1.097-.632l.523-.425 1.51 3.674zm-8.26-4.932c.151.397.365.767.633 1.097l.424.522-.622.256-3.054 1.255a.787.787 0 0 1-.92-.25.781.781 0 0 1-.154-.58c.027-.199.127-.379.227-.452.045-.046.045-.046.075-.069l3.153-2.406.238.627zm3.723 2.572c.209 0 .417-.016.625-.049l.662-.103-.089.664-.438 3.26-.012.062a.785.785 0 0 1-.666.618c-.048.005-.048.005-.101.006-.386 0-.714-.28-.764-.612-.01-.043-.01-.043-.014-.072l-.507-3.934.662.108c.213.035.427.052.642.052zM7.366 18.27l.006-.015L8.9 14.592l.52.426a3.99 3.99 0 0 0 1.094.636l.626.241-.41.531-2.012 2.609-.04.046a.788.788 0 0 1-.886.2.787.787 0 0 1-.428-1.011z"></path><path d="M11.911 14.322a2.411 2.411 0 1 0 0-4.822 2.411 2.411 0 0 0 0 4.822zm0 2a4.411 4.411 0 1 1 0-8.822 4.411 4.411 0 0 1 0 8.822z"></path></svg>
                                <p>UV Index</p>
                            </div>
                            <p>{weatherTodayData.current.uv} of 11</p>
                        </li>
                        <li>
                            <div>
                                <svg className="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="visibility" theme="dark" data-testid="Icon" width="1024" height="1024" viewBox="0 0 1024 1024"><title>Visibility</title><path d="M491.856 879.808c-60.48-5.056-110.848-25.184-171.328-55.424-120.96-55.424-216.704-146.112-292.256-256.96-25.248-40.352-30.24-80.64 0-126.016 80.608-115.872 186.464-211.68 317.472-272.096 110.816-50.4 226.752-50.4 337.664 0 136 60.48 241.824 156.224 317.44 282.208 15.104 25.216 25.12 65.504 10.048 85.728-105.792 191.424-256.992 367.84-519.04 342.56zm292.256-377.92c0-151.168-120.96-272.064-272.096-272.064-146.144 0-272.128 126.016-272.128 272.064 0 151.232 120.96 277.216 272.128 277.216 151.104-.032 272.096-125.984 272.096-277.216z"></path><path d="M789.808 500.416c0 156.896-125.472 287.52-282.336 282.336-156.864 0-282.336-130.656-282.336-287.488 0-146.4 130.656-277.12 282.336-277.12 156.896-.032 287.584 125.376 282.336 282.272zM512.752 348.832c-83.68 0-151.584 67.968-151.584 151.584 0 88.864 67.968 156.896 151.584 156.896 83.648 0 156.832-73.216 156.832-156.896-5.184-83.648-73.152-151.584-156.832-151.584z"></path></svg>
                                <p>Visibility</p>
                            </div>
                            <p>{weatherTodayData.forecast.forecastday[0].hour[0].vis_km} km</p>
                        </li>
                        <li>
                            <div>
                                <svg className="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="astro" name="phase-13" theme="dark" data-testid="Icon" width="1024" height="1024" viewBox="0 0 1024 1024"><title>Moon Phase - Day 13</title><path d="M516.795 58.589q-173.686 0-297.557 135.326T95.367 519.443t123.871 325.528 297.557 135.326q189.137 0 324.729-135.326t135.592-325.528-135.592-325.528T516.795 58.589zm0 956.87q-205.12 0-350.835-145.715T20.245 519.442 165.96 168.874 516.795 22.893q204.587 0 350.302 145.981t145.715 350.568-145.715 350.302-350.302 145.715z"></path></svg>
                                <p>Moon Phase</p>
                            </div>
                            <p>{weatherTodayData.forecast.forecastday[0].astro.moon_phase}</p>
                        </li>

                    </ul>
                </>}
        </div>
    )
}

export default WeatherToday
