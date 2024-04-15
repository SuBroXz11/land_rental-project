import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { lands } from "../data";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import Map from './Map'
import TestProductGrid from './TestProductGrid'
import Slider from './Slider'
import Contact from "./Contact2";

export default function TestSingle() {
    const [landss, setLands] = useState(lands);
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts
    }, []);
    const selectedLand = landss.find((land) => land.id === parseInt(id));

    if (!selectedLand) {
        return <div>Land not found</div>;
    }

    const { image, desc, description, price } = selectedLand;

    return (
        <>
            <div className="align-element">
                <Slider />
                <div className='border-b border-base-300 pb-5 align-element py-20'>
                    <h2 className='text-3xl font-medium tracking-wider capitalize'>LAND FOR SALE</h2>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-gray-500 mr-2" style={{ color: 'red' }} />
                        <h2 className="text-gray-500 font-bold">{desc}</h2>
                    </div>
                    <span className="border-b border-base-300 pb-5"></span>
                </div>
            </div>

            <div className="my-10 align-element">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* First div takes 2 columns on medium and larger screens */}
                    <div className="md:col-span-2">
                        <h2 className='text-xl font-medium tracking-wider capitalize mb-5'>DESCRIPTION</h2>
                        <div className="" dangerouslySetInnerHTML={{ __html: description }} />




                        <div className=" my-5">
                            <h2 className='text-xl font-medium tracking-wider capitalize mb-5'>BASIC DETAILS</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs ">
                                {/* First row */}
                                <div className="border p-4">
                                    <h3 className="font-bold">Property Type: Land</h3>
                                </div>
                                <div className="border p-4">
                                    <h3 className="font-bold">Listing Type: <span className="te text-blue-400">For sale</span> -Properties</h3>
                                </div>
                                <div className="border p-4">
                                    <h3 className="font-bold">Listing ID: 9012</h3>
                                </div>

                                {/* Second row */}
                                <div className="border p-4">
                                    <h3 className="font-bold">Price: {price}</h3>
                                </div>
                                <div className="border p-4">
                                    <h3 className="font-bold">Per Aana /  Dhur Price: 3,100,000</h3>
                                </div>
                                <div className="border p-4">
                                    <h3 className="font-bold">View: Road</h3>
                                </div>

                                {/* Third row */}
                                <div className="border p-4">
                                    <h3 className="font-bold">Land Area: 5.13 Aana</h3>
                                </div>
                                <div className="border p-4 ">
                                    <h3 className="font-bold flex-wrap">Road Width: 13 ft</h3>
                                </div>
                            </div>

                        </div>
                        <div className=" my-5">
                            <h2 className='text-xl font-medium tracking-wider capitalize mb-5'>FEATURES</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs ">
                                {/* First row */}
                                <div className="border p-4">
                                    <h3 className="font-bold">Road Width: 13 ft</h3>
                                </div>
                                <div className="border p-4">
                                    <h3 className="font-bold">Owner Property: Yes</h3>
                                </div>
                            </div>

                        </div>
                        <div className=" my-5">
                            <h2 className='text-xl font-medium tracking-wider capitalize mb-5'>
                                ADDRESS MAP
                                <span className="border-b border-red-500"> </span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs ">
                                {/* First row */}
                                <div className="border p-4">
                                    <h3 className="font-bold">Country: Nepal</h3>
                                </div>
                                <div className="border p-4">
                                    <h3 className="font-bold">Pradesh: Bagmati</h3>
                                </div>
                                <div className="border p-4">
                                    <h3 className="font-bold">District: LP</h3>
                                </div>

                                {/* Second row */}
                                <div className="border p-4">
                                    <h3 className="font-bold">Gau / Nagarpalika: MM</h3>
                                </div>
                                <div className="border p-4">
                                    <h3 className="font-bold">Ward No.: Ward No. 8</h3>
                                </div>
                                <div className="border p-4">
                                    <h3 className="font-bold">Tole: Lubhu</h3>
                                </div>

                                {/* Third row */}
                                <div className="border p-4">
                                    <h3 className="font-bold">Street: Devisthan</h3>
                                </div>
                                <div className="border p-4 ">
                                    <h3 className="font-bold flex-wrap">Longitude: E85° 22' 45.2''</h3>
                                </div>
                                <div className="border p-4">
                                    <h3 className="font-bold">Latitude: N27° 38' 29.9''</h3>
                                </div>
                            </div>

                        </div>




                        <div className="video-container my-5">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/GOazCLv7hPM?si=W5-XGXxWFqxRyvGL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                    </div>
                    {/* Second div takes 1 column on all screens */}
                    <div className="md:col-span-1">
                        {/* PROPERTIES */}
                        <div className="">
                            <h2 className='text-xl font-medium tracking-wider capitalize mb-5'>LANDS FOR SALE -PROPERTIES</h2>
                            <div className="flex justify-between">
                                <div className="flex-grow">
                                    <span className="s justify-start">Listing ID : </span>
                                </div>
                                <div className="ml-auto">
                                    <span className="j justify-end">9012</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex-grow">
                                    <span className="s justify-start">Land Area : </span>
                                </div>
                                <div className="ml-auto">
                                    <span className="j justify-end">5.13 aana</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex-grow">
                                    <span className="s justify-start">Visits : </span>
                                </div>
                                <div className="ml-auto">
                                    <span className="j justify-end">47 in 4 days</span>
                                </div>
                            </div>
                        </div>
                        <h2 className='items-center text-3xl font-semibold text-center text-blue-500 my-3'>Rs {price}</h2>


                        <h2 className='text-xl font-medium tracking-wider capitalize mb-5 mt-20'>CONTACT INFO</h2>
                        <div className="card w-full shadow-xl hover:shadow-2xl transition duration-300 mb-20">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1 p-4 flex justify-center items-center">
                                    <FaUser className="text-5xl" />
                                </div>

                                <div className="col-span-2 p-2">
                                    <h2 className='text-xl font-medium tracking-wider capitalize mb-2'>neel thapa</h2>
                                    <h2 className='text-sm font-medium tracking-wider capitalize mb-2'>9877777777</h2>
                                    <h2 className='text-sm font-medium mb-2'>neel.thapa53@gmail.com</h2>
                                </div>
                            </div>

                        </div>


                        <div>
                            <h2 className='text-xl font-medium tracking-wider capitalize mb-5'>CONTACT VIA EMAIL</h2>
                            <Contact />
                        </div>



                    </div>
                </div>

                <div className="my-5 md:my-10">
                    <h2 className='text-2xl md:text-3xl font-medium tracking-wider capitalize'>PROPERTY ON MAP</h2>
                    <Map />
                </div>

                <div className="my-5 md:my-10">
                    <h2 className='text-2xl md:text-3xl font-medium tracking-wider capitalize'>YOU MAY ALSO LIKE THESE PROPERTIES</h2>
                    <TestProductGrid />
                </div>
            </div>
        </>
    );
}
