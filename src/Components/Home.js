import {React} from 'react'
import logo from '../images/tabletennis.jpeg'


import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
    return (

                <div className = "container-fluid">   
               
                    <div className = "container" > 
                    <span className = "flex flex-center fs-20 font-bold">Tournament Images</span>
                                    <Carousel>
                            <Carousel.Item>
                                <img
                                className=" w-10"
                                src={logo}
                                width = "100%"
                                height = "400px"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo}
                                width = "100%"
                                height = "400px"
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo}
                                width = "100%"
                                height = "400px"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
    </div>    

    </div>    
            
       
    )
}
