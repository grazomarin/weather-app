function WeatherDetails() {

  return (
      <div className="details">
        <div className="details-head">
          <div className="details-head-searchCont">
            <input
              className="details-head-searchCont_input"
              type="text"
              placeholder="Search Location"
              id="search"
            />
            <div id="error">Enter a valid location</div>
          </div>
          <div className="details-head-buttons">
            <div className="details-head-buttons-search">
              <svg
                className="details-head-buttons-search_searchIcon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 487.95 487.95"
                style={{background: "new 0 0 487.95 487.95"}}
                // xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
			c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
			c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="details-head-buttons-cont">
              <h4 className="details-head-buttons_setUnit C active">
                C<span>&#176;</span>
              </h4>
              <h4 className="details-head-buttons_setUnit F">
                F<span>&#176;</span>
              </h4>
            </div>
          </div>
        </div>

        <div className="details-block">
          <h5>Weather Details</h5>
          <ul>
            <li>
              <span>feels like</span
              ><span><span id="feels_like"></span><span>&#176;</span></span>
            </li>
            <li>
              <span>min</span
              ><span><span id="min"></span><span>&#176;</span></span>
            </li>
            <li>
              <span>max</span
              ><span><span id="max"></span><span>&#176;</span></span>
            </li>
            <li>
              <span>clouds</span><span><span id="clouds"></span>%</span>
            </li>
            <li>
              <span>wind</span><span><span id="wind"></span></span>
            </li>
            <li>
              <span>humidity</span><span><span id="humidity"></span>%</span>
            </li>
            <li>
              <span>pressure</span><span><span id="pressure"></span>mb</span>
            </li>
          </ul>
        </div>
      </div>
  )

}

export default WeatherDetails;