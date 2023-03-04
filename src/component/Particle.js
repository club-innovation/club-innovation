import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

function Particle({ options }) {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0"
            }}
            options={options}
        />
    );
};

function Stars() {
    return (<Particle options={{
        autoPlay: true,
        background: {
            color: {
                value: "#070E21"
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1
        },
        backgroundMask: {
            composite: "destination-out",
            cover: {
                color: {
                    value: "#8CEFE9"
                },
                opacity: 1
            },
            enable: false
        },
        backgroundMode: {
            enable: true,
            zIndex: -1
        },
        detectRetina: true,
        fpsLimit: 60,
        infection: {
            cure: true,
            delay: 0,
            enable: false,
            infections: 0,
            stages: []
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onClick: {
                    enable: false,
                    mode: []
                },
                onDiv: {
                    selectors: [],
                    enable: false,
                    mode: [],
                    type: "circle"
                },
                onHover: {
                    enable: false,
                    mode: "attract",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10
                    }
                },
                resize: false
            },
            modes: {
                attract: {
                    distance: 200,
                    duration: 0.4,
                    speed: 0
                },
                bounce: {
                    distance: 200
                },
                bubble: {
                    distance: 200,
                    duration: 0.4
                },
                connect: {
                    distance: 80,
                    links: {
                        opacity: 0.5
                    },
                    radius: 60
                },
                grab: {
                    distance: 100,
                    links: {
                        blink: false,
                        consent: false,
                        opacity: 1
                    }
                },
                light: {
                    area: {
                        gradient: {
                            start: {
                                value: "#ffffff"
                            },
                            stop: {
                                value: "#000000"
                            }
                        },
                        radius: 1000
                    },
                    shadow: {
                        color: {
                            value: "#000000"
                        },
                        length: 2000
                    }
                },
                push: {
                    quantity: 4
                },
                remove: {
                    quantity: 2
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                    speed: 1
                },
                slow: {
                    factor: 3,
                    radius: 200
                },
                trail: {
                    delay: 0.005,
                    quantity: 5,
                    particles: {
                        color: {
                            value: "#ff0000",
                            animation: {
                                enable: true,
                                speed: 400,
                                sync: true
                            }
                        },
                        collisions: {
                            enable: false,
                            bounce: {
                                horizontal: {
                                    random: {}
                                },
                                vertical: {
                                    random: {}
                                }
                            }
                        },
                        links: {
                            enable: false,
                            shadow: {},
                            triangles: {}
                        },
                        move: {
                            outMode: "destroy",
                            speed: 5,
                            angle: {},
                            attract: {
                                rotate: {}
                            },
                            gravity: {},
                            noise: {
                                delay: {
                                    random: {}
                                }
                            },
                            outModes: {},
                            trail: {}
                        },
                        size: {
                            value: 5,
                            animation: {
                                enable: true,
                                speed: 5,
                                minimumValue: 1,
                                sync: true,
                                startValue: "min",
                                destroy: "max"
                            },
                            random: {}
                        },
                        bounce: {
                            horizontal: {
                                random: {}
                            },
                            vertical: {
                                random: {}
                            }
                        },
                        life: {
                            delay: {
                                random: {}
                            },
                            duration: {
                                random: {}
                            }
                        },
                        number: {
                            density: {}
                        },
                        opacity: {
                            animation: {},
                            random: {}
                        },
                        rotate: {
                            animation: {}
                        },
                        shadow: {
                            offset: {}
                        },
                        shape: {},
                        stroke: {
                            color: {
                                value: "",
                                animation: {
                                    enable: false,
                                    speed: 0,
                                    sync: false
                                }
                            }
                        },
                        twinkle: {
                            lines: {},
                            particles: {}
                        }
                    }
                }
            }
        },
        manualParticles: [],
        motion: {
            disable: false,
            reduce: {
                factor: 16,
                value: true
            }
        },
        particles: {
            bounce: {
                horizontal: {
                    random: {
                        enable: false,
                        minimumValue: 12
                    },
                    value: 1
                },
                vertical: {
                    random: {
                        enable: false,
                        minimumValue: 0.1
                    },
                    value: 1
                }
            },
            collisions: {
                bounce: {
                    horizontal: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1
                    },
                    vertical: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1
                    }
                },
                enable: true,
                mode: "bounce"
            },
            color: {
                value: "#cecece",
                animation: {
                    enable: false,
                    speed: 100,
                    sync: false
                }
            },
            life: {
                count: 37,
                delay: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 0,
                    sync: false
                },
                duration: {
                    random: {
                        enable: false,
                        minimumValue: 0.0001
                    },
                    value: 0,
                    sync: true
                }
            },
            links: {
                blink: true,
                color: {
                    value: "random"
                },
                consent: false,
                distance: 100,
                enable: true,
                frequency: 0,
                opacity: 1,
                shadow: {
                    blur: false,
                    color: {
                        value: "#00ff00"
                    },
                    enable: false
                },
                triangles: {
                    enable: false,
                    frequency: 0
                },
                width: 1,
                warp: false
            },
            move: {
                angle: {
                    offset: 45,
                    value: 90
                },
                attract: {
                    enable: false,
                    rotate: {
                        x: 3000,
                        y: 3000
                    }
                },
                direction: "none",
                distance: 0,
                enable: true,
                gravity: {
                    acceleration: 9.81,
                    enable: false,
                    maxSpeed: 50
                },
                noise: {
                    delay: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 0
                    },
                    enable: false
                },
                outModes: {
                    default: "out"
                },
                random: false,
                size: false,
                speed: .1,
                straight: false,
                trail: {
                    enable: false,
                    length: 10,
                    fillColor: {
                        value: "#000000"
                    }
                },
                vibrate: false,
                warp: false
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                    factor: 1000
                },
                limit: 0,
                value: 100
            },
            opacity: {
                random: {
                    enable: true,
                    minimumValue: 0.3
                },
                value: 0.8,
                animation: {
                    enable: true,
                    minimumValue: 0.3,
                    speed: 0.5,
                    sync: false
                }
            },
            reduceDuplicates: false,
            rotate: {
                random: false,
                value: 0,
                animation: {
                    enable: false,
                    speed: 0,
                    sync: false
                },
                direction: "clockwise",
                path: false
            },
            shadow: {
                blur: 51,
                color: {
                    value: "#000000"
                },
                enable: false,
                offset: {
                    x: 0,
                    y: 0
                }
            },
            shape: {
                options: {},
                type: "circle"
            },
            size: {
                random: {
                    enable: true,
                    minimumValue: 1
                },
                value: 3,
                animation: {
                    destroy: "none",
                    enable: true,
                    minimumValue: 1,
                    speed: 3,
                    startValue: "max",
                    sync: false
                }
            },
            stroke: {
                width: 0,
                color: {
                    value: "",
                    animation: {
                        enable: false,
                        speed: 0,
                        sync: false
                    }
                }
            },
            twinkle: {
                lines: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1
                },
                particles: {
                    enable: false,
                    frequency: 13,
                    opacity: 1
                }
            }
        },
        pauseOnBlur: false,
        pauseOnOutsideViewport: true,
        themes: []
    }} />);
};

function Polygones() {
    return (<Particle options={{
        autoPlay: true,
        background: {
            color: {
                value: "#070E21"
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1
        },
        backgroundMask: {
            composite: "destination-out",
            cover: {
                color: {
                    value: "#fff"
                },
                opacity: 1
            },
            enable: false
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
            detectsOn: "window",
            events: {
                onClick: {
                    enable: false,
                    mode: []
                },
                onDiv: {
                    selectors: [],
                    enable: false,
                    mode: [],
                    type: "circle"
                },
                onHover: {
                    enable: false,
                    mode: "trail",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10
                    }
                },
                resize: true
            },
            modes: {
                attract: {
                    distance: 200,
                    duration: 0.4,
                    easing: "ease-out-quad",
                    factor: 1,
                    maxSpeed: 50,
                    speed: 1
                },
                bounce: {
                    distance: 200
                },
                bubble: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    divs: {
                        distance: 200,
                        duration: 0.4,
                        mix: false,
                        selectors: []
                    }
                },
                connect: {
                    distance: 80,
                    links: {
                        opacity: 0.5
                    },
                    radius: 60
                },
                grab: {
                    distance: 100,
                    links: {
                        blink: false,
                        consent: false,
                        opacity: 1
                    }
                },
                light: {
                    area: {
                        gradient: {
                            start: {
                                value: "#ffffff"
                            },
                            stop: {
                                value: "#000000"
                            }
                        },
                        radius: 1000
                    },
                    shadow: {
                        color: {
                            value: "#000000"
                        },
                        length: 2000
                    }
                },
                push: {
                    default: true,
                    groups: [],
                    quantity: 4
                },
                remove: {
                    quantity: 2
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    divs: {
                        distance: 200,
                        duration: 0.4,
                        factor: 100,
                        speed: 1,
                        maxSpeed: 50,
                        easing: "ease-out-quad",
                        selectors: []
                    }
                },
                slow: {
                    factor: 3,
                    radius: 200
                },
                trail: {
                    delay: 0.005,
                    pauseOnStop: true,
                    quantity: 5,
                    particles: {
                        color: {
                            value: "#ff0000",
                            animation: {
                                enable: true,
                                speed: 400,
                                sync: true
                            }
                        },
                        collisions: {
                            enable: false
                        },
                        links: {
                            enable: false
                        },
                        move: {
                            outModes: {
                                default: "destroy"
                            },
                            speed: 2
                        },
                        size: {
                            value: 5,
                            animation: {
                                enable: true,
                                speed: 5,
                                minimumValue: 1,
                                sync: true,
                                startValue: "min",
                                destroy: "max"
                            }
                        }
                    }
                }
            }
        },
        manualParticles: [],
        motion: {
            disable: false,
            reduce: {
                factor: 4,
                value: true
            }
        },
        particles: {
            bounce: {
                horizontal: {
                    random: {
                        enable: false,
                        minimumValue: 0.1
                    },
                    value: 1
                },
                vertical: {
                    random: {
                        enable: false,
                        minimumValue: 0.1
                    },
                    value: 1
                }
            },
            collisions: {
                bounce: {
                    horizontal: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1
                    },
                    vertical: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1
                    }
                },
                enable: true,
                mode: "bounce",
                overlap: {
                    enable: true,
                    retries: 0
                }
            },
            color: {
                value: "#8CEFE9",
                animation: {
                    h: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 50,
                        sync: false
                    },
                    s: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        sync: true
                    },
                    l: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        sync: true
                    }
                }
            },
            destroy: {
                mode: "none",
                split: {
                    count: 1,
                    factor: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 3
                    },
                    rate: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: {
                            min: 4,
                            max: 9
                        }
                    },
                    sizeOffset: true
                }
            },
            gradient: [],
            groups: {},
            life: {
                count: 0,
                delay: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 0,
                    sync: false
                },
                duration: {
                    random: {
                        enable: false,
                        minimumValue: 0.0001
                    },
                    value: 0,
                    sync: false
                }
            },
            links: {
                blink: false,
                color: {
                    value: "random"
                },
                consent: false,
                distance: 100,
                enable: true,
                frequency: 1,
                opacity: 1,
                shadow: {
                    blur: 5,
                    color: {
                        value: "#000"
                    },
                    enable: false
                },
                triangles: {
                    enable: false,
                    frequency: 1
                },
                width: 1,
                warp: false
            },
            move: {
                angle: {
                    offset: 0,
                    value: 90
                },
                attract: {
                    distance: 200,
                    enable: false,
                    rotate: {
                        x: 3000,
                        y: 3000
                    }
                },
                center: {
                    x: 50,
                    y: 50,
                    radius: 0
                },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                    acceleration: 9.81,
                    enable: false,
                    inverse: false,
                    maxSpeed: 50
                },
                path: {
                    clamp: true,
                    delay: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 0
                    },
                    enable: false,
                    options: {}
                },
                outModes: {
                    default: "out",
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out"
                },
                random: false,
                size: false,
                speed: .5,
                spin: {
                    acceleration: 0,
                    enable: false
                },
                straight: false,
                trail: {
                    enable: false,
                    length: 10,
                    fillColor: {
                        value: "#000000"
                    }
                },
                vibrate: false,
                warp: false
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                    factor: 1000
                },
                limit: 0,
                value: 100
            },
            opacity: {
                random: {
                    enable: true,
                    minimumValue: 0.3
                },
                value: {
                    min: 0.3,
                    max: 0.8
                },
                animation: {
                    count: 0,
                    enable: true,
                    speed: 0.5,
                    sync: false,
                    destroy: "none",
                    startValue: "random",
                    minimumValue: 0.3
                }
            },
            orbit: {
                animation: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    sync: false
                },
                enable: false,
                opacity: 1,
                rotation: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 45
                },
                width: 1
            },
            reduceDuplicates: false,
            repulse: {
                random: {
                    enable: false,
                    minimumValue: 0
                },
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1
            },
            roll: {
                darken: {
                    enable: false,
                    value: 0
                },
                enable: false,
                enlighten: {
                    enable: false,
                    value: 0
                },
                mode: "vertical",
                speed: 25
            },
            rotate: {
                random: {
                    enable: false,
                    minimumValue: 0
                },
                value: 0,
                animation: {
                    enable: false,
                    speed: 0,
                    sync: false
                },
                direction: "clockwise",
                path: false
            },
            shadow: {
                blur: 0,
                color: {
                    value: "#000"
                },
                enable: false,
                offset: {
                    x: 0,
                    y: 0
                }
            },
            shape: {
                options: {},
                type: "circle"
            },
            size: {
                random: {
                    enable: true,
                    minimumValue: 1
                },
                value: {
                    min: 1,
                    max: 3
                },
                animation: {
                    count: 0,
                    enable: true,
                    speed: 3,
                    sync: false,
                    destroy: "none",
                    startValue: "random",
                    minimumValue: 1
                }
            },
            stroke: {
                width: 0
            },
            tilt: {
                random: {
                    enable: false,
                    minimumValue: 0
                },
                value: 0,
                animation: {
                    enable: false,
                    speed: 0,
                    sync: false
                },
                direction: "clockwise",
                enable: false
            },
            twinkle: {
                lines: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1
                },
                particles: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1
                }
            },
            wobble: {
                distance: 5,
                enable: false,
                speed: 50
            },
            zIndex: {
                random: {
                    enable: false,
                    minimumValue: 0
                },
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1
            }
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        style: {},
        themes: [],
        zLayers: 100,
        emitters: []
    }} />);
};

export { Particle, Stars, Polygones };