import React from 'react';


function Loading() {

    const style = {
        width:"100%",
        height:"500px",
        backgroundColor:"rgba(0,0,0,0.3)"
        
    }
  return (
    <div style={style} className="loader center">
      <i style={{marginLeft:"45%",marginTop:"15%"}} className="fa4x fa fa-spinner fa-spin" /><br></br>
      <span style={{marginLeft:"43%",marginTop:"17%"}}>Loading...</span>

    </div>
  );
}

export default Loading;