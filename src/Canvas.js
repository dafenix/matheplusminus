import React, {useRef, useEffect, useState, useLayoutEffect} from 'react'
import {useWindowSize} from "./ShowWindowDimensions";

const Canvas = props => {

    const canvasRef = useRef(null)
    const [width, height] = useWindowSize();
    const draw = (ctx, frameCount) => {
        ctx.canvas.width = width;
        ctx.canvas.height = height / 100 * 40;
        ctx.clearRect(10, 50, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        let fontSize = 300;
        do {
            fontSize--;
            ctx.font = fontSize + "px " + "Arial";
        } while (ctx.measureText(props.placeholder + '00').width > ctx.canvas.width)
        const lineHeight = ctx.measureText('M').width;
        ctx.fillText(props.excercise.left + ' + ' +props.excercise.right +' = ' + props.result, 0, lineHeight + 20);

        //Placeholder for length of result to keep enough space
    }





    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId

        //Our draw came here
        const render = () => {
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw, width, height])

    return <canvas ref={canvasRef} {...props}/>
}

export default Canvas