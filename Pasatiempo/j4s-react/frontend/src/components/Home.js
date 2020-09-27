import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="text-white text-justify">
                <main role="main" className="inner cover">
                    <h1 className="cover-heading" align="center">WELCOME TO JOBS 4 STUDENTS</h1>
                    <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p className="lead">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi in enim fuga, beatae consequatur voluptates suscipit repellat illum quia dolorem atque praesentium nostrum nihil accusantium odit unde distinctio ipsa!
                    </p>
                </main>

                <footer className="mastfoot mt-auto">
                    <div className="inner">
                        <p align="center">Cover template for <Link to="https://getbootstrap.com/">Bootstrap</Link>, by <a href="https://www.facebook.com/javier.ruizzcadena">@FJRC</a>.</p>
                    </div>
                </footer>
            </div>
        )
    }
}
