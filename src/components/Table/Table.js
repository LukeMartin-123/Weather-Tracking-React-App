import React from 'react'
import API from "../../utils/API"


function Table() {

    useEffect(() => {
        loadLocationData();
      }, []);
      
    function loadLocationData() {
        API.getLocations()
          .then((res) => setItems(res.data))
          .catch((err) => console.log(err));
      }


    return (
        <div className="location-table">
            
        </div>
    )
}

export default Table
