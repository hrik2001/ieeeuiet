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
        <Card className="about_card">
            <img src="IEEEUIET.png" style={{width:"50vw"}} />
        </Card>

        <Footer />
    </div>
    )
}
