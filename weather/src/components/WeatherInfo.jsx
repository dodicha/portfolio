

function weatherByTime() {

}




function WeatherInfo() {
    return (
        <div className="flex flex-col items-center">

        
            <div className="w-300 bg-yellow-400 flex flex-col justify-center">

                <div className="flex flex-col  p-15 bg-gray-700 items-center">
                    <div>ICON</div>
                    <div>CITY</div>
                    <div>TEMP</div>
                </div>

                <div className="flex flex-row justify-between p-15">
                    <div>HUMIDITY</div>
                    <div>Wind Speed</div>
                </div>
                
            </div>
            
            <div className="flex flex-col w-maxcontent bg-blue-500">

                <div className="flex flex-row ">
                    <div>Temperature</div>
                    <div>Icon</div>
                </div>
                
                <div className="flex flex-row gap-15">
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                    <div>Sunday</div>


                </div>

            </div>
        </div>
    
    )
}
 export default WeatherInfo