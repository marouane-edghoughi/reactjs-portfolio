import React from 'react';
import Particles from 'react-tsparticles';

function ParticlesAnimation() {

    return(
        <Particles
            width='100vw'
            height="100vh"
            options={{
                particles: {
                    number: {
                        value: 200,
                        density: {
                            enable: true,
                            area: 1500
                        }
                    },
                    links: {
                        enable: true,
                        opacity: 0.04
                    },
                    move: {
                        direction: "right",
                        speed: 6
                    },
                    size: {
                        value: 1
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 3,
                            opacity_min: 0.05
                        }
                    }
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push"
                        }
                    },
                    modes: {
                        push: {
                            particles_nb: 1
                        }
                    }
                },
                detectRetina: true
            }}
        />
    );
}

export default ParticlesAnimation;