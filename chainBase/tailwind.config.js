/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnightblue: "#0e0c38",
        gray: {
          "100": "#868b93",
          "200": "#7e7e7e",
          "300": "rgba(26, 17, 29, 0.7)",
          "400": "rgba(255, 255, 255, 0.3)",
        },
        mediumblue: "#4b22f1",
        blueviolet: "#7347ff",
        azure: "#edfbff",
        white: "#fff",
        deepskyblue: "#27acff",
        fuchsia: "#fa3be7",
        steelblue: {
          "100": "#698abb",
          "200": "#2e5288",
        },
        darkgray: "#9a9a9a",
        forestgreen: "#00ac4f",
        dimgray: "rgba(84, 84, 84, 0.4)",
        red: "#ed1212",
        darkslategray: {
          "100": "#404b52",
          "200": "#3f3e50",
          "300": "#353442",
          "400": "#302f47",
          "500": "#333",
        },
        lightsteelblue: {
          "100": "rgba(165, 164, 197, 0.9)",
          "200": "rgba(165, 164, 197, 0.3)",
        },
        black: "#000",
        slategray: "rgba(115, 112, 145, 0.9)",
        darkblue: "#3b34bb",
        mediumslateblue: "#6159e0",
        silver: "#c4bebe",
        whitesmoke: "#eee",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "base-4": "16.4px",
        xl: "20px",
        "xl-9": "20.9px",
        "2xs-4": "10.4px",
        "2xl-7": "21.7px",
        "xl-5": "20.5px",
        "6xs-8": "6.8px",
        "mid-1": "17.1px",
        "base-2": "16.2px",
        "base-5": "15.5px",
        "8xs-1": "4.1px",
        "2xs-1": "10.1px",
        lgi: "19px",
        "9xs-2": "3.2px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      "base-8": "15.8px",
      "22xl-1": "41.1px",
      "6xl": "25px",
      "14xl": "33px",
      "2xs-4": "10.4px",
      "mini-6": "14.6px",
      "lg-8": "18.8px",
      "2xs-8": "10.8px",
      "4xl-8": "23.8px",
      "lgi-5": "19.5px",
      "mid-3": "17.3px",
      xs: "12px",
      "4xs-5": "8.5px",
      "xs-1": "11.1px",
      "3xl-2": "22.2px",
      lg: "18px",
      "3xs-1": "9.1px",
      base: "16px",
      "smi-4": "12.4px",
      "2xs-1": "10.1px",
      "3xs-6": "9.6px",
      "xs-2": "11.2px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
