import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const About = () => {
    return(
        <div>
            <Header />
            <div className=" container clo-md-5">
            <h3> สวัสดีครับ </h3>
            <p className="title text-justify mt-4 mb-4">xxxxxxxxxxxxxxxxxxxxxx</p>
            <h4 className="text-success">จาก Ku Cafe</h4>
            </div>
            <Footer company= "KU" email = "thirawat.c@ku.th"/>

        </div>
    )
}

export default About;