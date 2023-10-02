tailwind.config = {
  theme: {
    extend: {
      colors: {
        nav_color: "rgba(22, 12, 109, 0.5)",
        btn_color: "#1BBF00",
        nav_li_color: "#EFF4FA",
        banner_part_1st_para_color: "FAFAFE",
        banner_part_2nd_para_color: "#E6E5F3",
        color_one: "#141135",
        color_two: "#726E9E",
        reason_box_color: "rgba(162, 169, 192, 0.15)",
        service_shadow_color: "rgba(162, 169, 192, 0.10)",
        service_readmore_white: "rgba(255, 255, 255, 0.3)",
        service_readmore_green: "rgba(25, 191, 0, 0.3)",
        transparent: "transparent",
        plan_color: "rgba(236, 237, 240, 0.5)",
        review_shadow_color: "rgba(171, 175, 199, 0.30)",
        impactShadow: "rgba(162, 169, 192, 0.25)",
      },
      backgroundImage: {
        bannerimg: "url('./images/bg.jpg')",
        statsbg: "url('./images/maww.jpg')",
        reason_bg: "url('./images/bg.png')",
        impactBg: "url('./images/impactBg.png')",
        othersBg: "url('./images/other_bg.png')",
      },
      fontFamily: {
        paprika: ["Paprika", "cursive"],
        sans: ["Open Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        sand: ["Quicksand", "sans-serif"],
      },
      boxShadow: {
        reason_box: "10px 30px 60px 0px",
        service_shadow: "0px 30px 60px 0px",
        lol: "0px 20px 60px 0px",
        haha: "0px 10px 60px 0px",
        review_shadow: "-15px 30px 50px 0px",
      },
      zIndex: {
        front: "200",
        behind: "-1",
      },
    },
  },
};
