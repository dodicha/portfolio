
function SearchBar () {
    return (
        <>
            <div className = 'flex justify-center w-maxcontent h-maxcontent bg-red-500 gap-10 mt-10'>
                <input className="h-10 bg-blue-600" placeholder="search city here" type="text"></input>
                <input className="h-10 bg-blue-600"  type="datetime-local"></input>
                <div className="flex p-1.5 gap-10 bg-slate-600 h-10 w-30">
                    <div>Purpose</div>
                    <div id="icon">&#9660;</div>
                </div>
            </div>

        </>
    )
}
export default SearchBar;   