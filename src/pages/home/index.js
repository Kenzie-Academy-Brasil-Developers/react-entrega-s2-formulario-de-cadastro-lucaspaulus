import React from "react";
import {useParams} from "react-router-dom";
import WelcomeMsgLogin from "../../components/welcomeMsgLogin";

function Home() {
    const param = useParams()
    
    return (
        <>
            <WelcomeMsgLogin param={param}/> 
        </>
    )
}

export default Home;
