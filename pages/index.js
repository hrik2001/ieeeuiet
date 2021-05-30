import Bar from "../components/bar"
import Footer from "../components/footer"
import Head from "next/head"
import {Button , Card} from "reactstrap"

export default function Index(props){
    return(
        <div>
        <Head>
        <title>IEEE UIET</title>
        </Head>
        <Bar color="white" background="#0462A4"/>
        <div style={{position:"relative" ,backgroundImage : 'url("/pu.png")', backgroundRepeat: "no-repeat", backgroundPosition:"center" , backgroundSize: "cover", height :"80vh" , width:"calc(100% - 20px)" , marginTop: "10px", borderRadius:"15px" ,border : "", marginLeft : "auto" , marginRight:"auto" }}>
        <div style={{position : "absolute" , bottom:"0px" , left:"20px"}}>
            <p style={{color:"white" , border:"", fontSize:"7rem", lineHeight:"80px" }}><b>IEEE</b></p>
            <p className="test" style={{color:"white" , border:"" , fontSize:"30px" , lineHeight:"30px" }}>📍 UIET, Panjab University</p>
        </div>
        </div>
        {/*<p className="test">Just a mere website</p>*/}
       <h1  className="test mt-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-red-500" style={{fontSize:"5rem"}}>
        Vision
        </h1>
        <div className="flex flex-wrap">
        <div className="cards">
            <img src="/telescope.webp" style={{width:"100%"}} />
            <hr style={{backgroundColor:"black" , height:"2px"}} />
            <h3 className="test mx-1">Awareness of Oppurtunity</h3>
            <p className="mx-1">The IEEE Student Branch at UIET endeavours to promote student awareness among students on the opportunities that exist in the field of engineering.</p>
        </div>
        <div className="cards">
            <img src="/key.webp" style={{width:"100%"}} />
            <hr style={{backgroundColor:"black" , height:"2px"}} />
            <h3 className="test mx-1">Bridge gap between industry and students</h3>
            <p className="mx-1">The IEEE Student Branch at UIET endeavours to promote student awareness among students on the opportunities that exist in the field of engineering.</p>
        </div> 
        <div className="cards">
            <img src="/Place.png" style={{width:"100%"}} />
            <hr style={{backgroundColor:"black" , height:"2px"}} />
            <h3 className="test mx-1">Conducive Environment</h3>
            <p className="mx-1">IEEE UIET envisions a conducive environment in the campus which provides a plethora of opportunities for students to evolve in knowledge as well as to showcase their indigenous ideas through a number of amazing initiatives.</p>
        </div> 
        </div>
        <div style={{width:"100%"}} className="flex flex-wrap">
            <div className="banner_cards" style={{position:"relative" ,height:"50vh" ,backgroundImage:'url("/grid.jpg")' , backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}>
                <div style={{border:"" , position:"absolute" , height:"100%" , width:"100%"}} className="flex flex-col justify-center">
                    <h1 className="test text-white text-center text-9xl my-auto">Excom</h1>
                </div>
            </div>
            <div className="banner_cards" style={{position:"relative" ,height:"50vh" ,backgroundImage:'url("/WIE.png")' , backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}>
                <div style={{border:"" , position:"absolute" , height:"100%" , width:"100%"}} className="flex flex-col justify-center">
                    <h1 style={{color:"#8b2b8d"}} className="test text-center text-9xl my-auto">WIE</h1>
                </div>
            </div>
        </div>
        <div style={{height:"50vh" , position:"relative"}} className="mt-10 flex">
            <div style={{border:"" , position:"absolute" , height:"100%" , width:"100%" , alignItems:"center"}} className="flex flex-col justify-center">
                <h2 style={{fontSize:"3rem"}} className="test text-center my-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-300">Want to stay updated?</h2>
                <hr style={{backgroundColor:"#84b3ee" , height:"2px" , width:"10%" , marginLeft:"auto", marginRight:"auto" , alignItems:"middle"}} className="my-auto"/>
                <Button style={{width:"20%"  , marginLeft:"auto" , marginRight:"auto"}} className="test my-auto bg-gradient-to-br from-blue-900 to-red-900">
                    <h2>See Latest Posts</h2>
                </Button>
            </div>
        </div>
        <Footer />
        </div>
    )
}
