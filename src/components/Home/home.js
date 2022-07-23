import useEmblaCarousel from "embla-carousel-react"
import slider1 from "../../images/slider1.png"
import slider2 from "../../images/slider2.jpg"

function Home() {
    let [emol] = useEmblaCarousel()
    return (
        <div id="home1" ref={emol}>
            <div id="home2">
                <div id="home3" >
                    <img id="home4" src={slider1} />
                </div>
                <div id="home3">
                    <img id="home4" src={slider2} />
                </div>
            </div>
        </div>
    )
};

export default Home
