const colors = {
  base: {
    gray: {
      value: { h: "0", s: "0" },
    },
    purple: {
      value: { h: "252", s: "95" },
    },
    blue: {
      value: { h: "217", s: "100" },
    },
    green: {
      value: { h: "160", s: "82" },
    },
    orange: {
      value: { h: "16", s: "100" },
    },
    pink: {
      value: { h: "327", s: "100" },
    },
    yellow: {
      value: { h: "44", s: "100" },
    },
  },
};

const base = {};
Object.keys(colors.base).forEach((color) => {
  const variants = {};
  const value = colors.base[color].value;
  [
    "0",
    "5",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
    "60",
    "65",
    "70",
    "75",
    "80",
    "85",
    "90",
    "95",
    "100",
  ].forEach((l) => {
    if ((l === "0" || l === "100") && color !== "gray") {
      return;
    }
    variants[l] = {
      value: { ...value, l },
    };
  });
  base[color] = {
    ...variants,
  };
});

module.exports = {
  ...base,
};
