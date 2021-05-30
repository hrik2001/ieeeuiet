import React, { useState } from 'react';

export default function footer(props){
    return(<div className="mt-10 flex flex-wrap bg-gradient-to-r from-blue-700 to-green-500" style={{height:"50vh"}}>
        <div className="footer_div my-auto">
        <img className="ml-auto mr-auto" src="/logo.svg" />
        </div>
        <div className="footer_div my-auto">
        <h3 className="test text-white text-center">Panjab University.</h3>
        <br />
        <p className="test text-white text-center">Sector 14, Chandigarh, 160014</p>
        <p className="test text-white text-center">0172 253 4867</p>
        </div>

        </div>)
}
