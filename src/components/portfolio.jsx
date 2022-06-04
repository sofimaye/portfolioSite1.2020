// 2-nd page
import React, {Component} from 'react';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const images = ["images/IMGnewsize.jpg", "images/IMGnewsize16.jpg",
    "images/IMGnewsize2.jpg", "images/IMGnewsize3.jpg", "images/IMGnewsize4.jpg",
    "images/IMGnewsize5.jpg", "images/IMGnewsize6.jpg", "images/IMGnewsize7.jpg",
    "images/IMGnewsize8.jpg"]

export class Portfolio extends Component {
    render() {
        return(
            <div id="grid" className="grid">
                <Gallery>
                {images.map((image, i) => (<div id="grid-item" className="grid-item">
                    <Item width="724" height="1024" original={image} thumbnail={image} key={i}>
                    {({ ref, open }) => (
                        <img alt="image" ref={ref} onClick={open} src={image} />
                    )}</Item></div>))}
                </Gallery>
            </div>
        )
    }
}
