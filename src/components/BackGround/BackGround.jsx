import React from 'react'
import Particles from 'react-particles-js';
import './BackGround.css'

const BackGround = () => {
	return (
		<Particles className="particles"
		height="100vh"
		width="100vw"
			params={{
				"particles": {
					"number": {
						"value": 100,
						"density": {
							"enable": false
						}
					},
					"size": {
						"value": 1,
						"random": true,
						"anim": {
							"speed": 90,
							"size_min": 0.6
						}
					},
					"line_linked": {
						"enable": true
					},
					"move": {
						"random": true,
						"speed": 1.3,
						"direction": "random",
						"out_mode": "out"
					}
				},
				"interactivity": {
					"events": {
						"onhover": {
							"enable": true,
							"mode": "bubble"
						},
						"onclick": {
							"enable": false,
							"mode": "repulse"
						}
					},
					"modes": {
						"bubble": {
							"distance": 150,
							"duration": 2,
							"size": 0,
							"opacity": 0
						},
						"repulse": {
							"distance": 400,
							"duration": 4
						}
					}
				}
			}} />
	)
};


export default BackGround;