export const firefly = {
  fpsLimit: 60,
  particles: {
      move: {
          bounce: false,
          direction: "none",
          enable: true,
          outModes: "out",
          random: false,
          speed: 2,
          straight: false,
      },
  },
  number: { density: { enable: true, area: 800 }, value: 80 },
  opacity: {
      value: 0.5,
  },
  shape: {
      type: "circle",
  },
  size: {
      value: { min: 1, max: 5 },
  },
  themes: [
      {
          name: "light",
          default: {
              value: true,
              mode: "light",
          },
          options: {
              background: {
                  color: "#fff",
              },
              particles: {
                  color: {
                      value: "#000",
                  },
              },
          },
      },
      {
          name: "dark",
          default: {
              value: true,
              mode: "dark",
          },
          options: {
              particles: {
                  color: {
                      // value: "#75075E"
                      value: "#FD4495",
                  },
              },
          },
      },
  ],
};

export const links = (color)=>{
  return {
    fps_limit: 60,
    interactivity: {
        detect_on: "canvas",
        events: {
            onclick: { enable: true, mode: "push" },
            onhover: {
                enable: true,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
        },
        modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 },
        },
    },
    particles: {
        color: { value: color },
        line_linked: {
            color: color,
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
        },
        move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 2,
            straight: false,
        },
        number: { density: { enable: true, value_area: 800 }, value: 80 },
        opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5,
        },
        shape: {
            character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
            },
            image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100,
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle",
        },
        size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5,
        },
    },
    polygon: {
        draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
        move: { radius: 10 },
        scale: 1,
        type: "none",
        url: "",
    },
    retina_detect: true,
};
}

export const configs = {
    particles: {
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: {
            value: {
              min: 2,
              max: 4
            }
          },
          rate: {
            value: 100
          },
          particles: {
            life: {
              count: 1,
              duration: {
                value: {
                  min: 2,
                  max: 3
                }
              }
            },
            move: {
              speed: {
                min: 10,
                max: 15
              }
            }
          }
        }
      },
      number: {
        value: 80
      },
      color: {
        value: [
          "#3998D0",
          "#2EB6AF",
          "#A9BD33",
          "#FEC73B",
          "#F89930",
          "#F45623",
          "#D62E32",
          "#EB586E",
          "#9952CF"
        ]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: {
          min: 10,
          max: 15
        }
      },
      collisions: {
        enable: true,
        mode: "bounce"
      },
      move: {
        enable: true,
        speed: 3,
        outModes: "bounce"
      }
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "pop"
        }
      }
    },
    // background: {
    //   color: "#000000"
    // }
  };
  