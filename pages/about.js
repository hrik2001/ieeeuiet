import Bar from "../components/bar"
import Footer from "../components/footer"
import Head from "next/head"
import {Button , Card} from "reactstrap"

export default function About(props){
    return(
    <div>
        <Head>
            <title>About | IEEE UIET</title>
        </Head>
        <Bar color="white" background="#0462A4"/>
        <Card className="about_card flex flex-row flex-wrap">
            <div className="about_card_banner mx-auto flex" >
                <img src="IEEEUIET.png" className="my-auto" />
            </div>
            <div className="about_card_text mx-auto pt-3">
                <h1 className="test mx-auto">IEEE UIET Student Branch, Chandigarh Subsection</h1>
                <p>IEEE-UIET student branch is a part of Delhi Section of region R-10 SAC of IEEE. The members form a part of a global community that is dedicated to advancing technological innovation and excellence for the benefit of humanity.
                IEEE UIET envisions a conducive environment in the campus which provides a plethora of opportunities for students to evolve in knowledge as well as to showcase their indigenous ideas through a number of amazing initiatives like ICAER, ADROIT, RAECS etc.
                Our core purpose is to foster technological innovation and excellence for the benefit of humanity, to fulfill which, we ensure that our members embark upon a fruitful journey of learning through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities.
                </p>
            </div>
        </Card>
        <Card className="about_card flex flex-row flex-wrap">
            <div className="about_card_banner mx-auto flex" >
                <img src="IEEEUIET.png" className="my-auto" />
            </div>
            <div className="about_card_text mx-auto pt-3">
                <h1 className="test mx-auto">University Institute of Engineering & Technology , Panjab University</h1>
                <p>IEEE-UIET student branch is a part of Delhi Section of region R-10 SAC of IEEE. The members form a part of a global community that is dedicated to advancing technological innovation and excellence for the benefit of humanity.
                IEEE UIET envisions a conducive environment in the campus which provides a plethora of opportunities for students to evolve in knowledge as well as to showcase their indigenous ideas through a number of amazing initiatives like ICAER, ADROIT, RAECS etc.
                Our core purpose is to foster technological innovation and excellence for the benefit of humanity, to fulfill which, we ensure that our members embark upon a fruitful journey of learning through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities.
                </p>
            </div>
        </Card>
        <Card className="about_card flex flex-row flex-wrap">
            <div className="about_card_banner mx-auto flex" >
                <img src="IEEEUIET.png" className="my-auto" />
            </div>
            <div className="about_card_text mx-auto pt-3">
                <h1 className="test mx-auto">IEEE UIET Student Branch, Chandigarh Subsection</h1>
                <p>IEEE-UIET student branch is a part of Delhi Section of region R-10 SAC of IEEE. The members form a part of a global community that is dedicated to advancing technological innovation and excellence for the benefit of humanity.
                IEEE UIET envisions a conducive environment in the campus which provides a plethora of opportunities for students to evolve in knowledge as well as to showcase their indigenous ideas through a number of amazing initiatives like ICAER, ADROIT, RAECS etc.
                Our core purpose is to foster technological innovation and excellence for the benefit of humanity, to fulfill which, we ensure that our members embark upon a fruitful journey of learning through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities.
                </p>
            </div>
        </Card>

        <Footer />
    </div>
    )
}
