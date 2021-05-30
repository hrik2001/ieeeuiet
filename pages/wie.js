import Bar from "../components/bar"
import Footer from "../components/footer"
import Head from "next/head"
import {Button , Card} from "reactstrap"

export default function WIE(props){
    return(
    <div>
        <Head>
            <title>WIE | IEEE UIET</title>
        </Head>
        <Bar color="white" background="#8b2b8d"/>
        <div>
        <div style={{background:'url("/WIE2.png") right center no-repeat' , backgroundSize:"cover"}}>
            <p style={{paddingTop:"15vh" , color:"#8b2b8d", fontSize:"5rem"}} className="test text-center">IEEE UIET WIE Affinity Group</p>
        </div>
        <div style={{backgroundColor:""}}>
            <p className="mx-2 " style={{color:"#8b2b8d" , fontSize:"1rem"}}>Although women contributed to the diverse fields of engineering in modern and historical times, they are often under-represented in the fields of engineering, both in academics and as a profession.
            IEEE Women in Engineering (WIE) is the largest international professional organization dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests to a career in engineering. <br /> <br />
            The WIE (Women In Engineering) affinity group of UIET strives to overcome this tradition of gender disparity. It envisions grooming as many women as possible into self-empowered, zealous and motivated contributors to the society. The mission of UIET WIE is to facilitate the global recruitment and retention of women in technical disciplines.</p>
        </div>
        <div style={{display:"flex" , alignItems:"center" , flexDirection:"row" , justifyContent:"center"}} className="flex-wrap">
        <img src="/r10_wie.png" />
        <img src="/IEEEUIET.png" style={{height:"180px"}} />
        </div>
        </div>
        <Footer />
    </div>
    )
}
