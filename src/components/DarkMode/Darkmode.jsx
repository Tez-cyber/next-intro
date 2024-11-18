"use client"
import React, { useContext } from 'react'
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import { ThemeContext } from '../../../context/ThemeContext'

const Darkmode = () => {
    const { toggle, mode } = useContext(ThemeContext)
    return (
    <div 
        onClick={toggle}
        className="w-12 h-6 border-solid border-[#53c29b70] pointer relative border-[1.5px] rounded-[30px] flex justify-between items-center p-1"
    >
        <div className="">
            <BsFillMoonFill />
        </div>
        <div className="">
            <BsFillSunFill />
        </div>
        <div 
            className=" w-4 h-4 bg-blogGreen rounded-full absolute"
            style={mode === "light" ? { left: "4px" } : { right: "4px" }}
        ></div>
    </div>
    )
}

export default Darkmode 