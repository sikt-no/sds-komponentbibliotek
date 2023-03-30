const __colors = require("./color.base");

module.exports = {
  color: {
    theme: {
      value: { ...__colors.purple["10"].value },
    },
    background: {
      default: {
        value: { ...__colors.gray["0"].value },
      },
      neutral: {
        value: { ...__colors.purple["10"].value },
      },
      action: {
        value: { ...__colors.purple["20"].value },
      },
      success: {
        value: { ...__colors.green["10"].value },
      },
      danger: {
        value: { ...__colors.pink["15"].value },
      },
      warning: {
        value: { ...__colors.yellow["10"].value },
      },
      info: {
        value: { ...__colors.blue["20"].value },
      },
    },
    surface: {
      default: {
        value: "{color.background.default.value}",
      },
      neutral: {
        value: { ...__colors.gray["45"].value },
      },
      "neutral-hover": {
        value: { ...__colors.gray["50"].value },
      },
      "neutral-active": {
        value: { ...__colors.gray["40"].value },
      },
      action: {
        value: { ...__colors.purple["65"].value },
      },
      "action-hover": {
        value: { ...__colors.purple["70"].value },
      },
      "action-active": {
        value: { ...__colors.purple["60"].value },
      },
      success: {
        value: { ...__colors.green["25"].value },
      },
      "success-hover": {
        value: { ...__colors.green["30"].value },
      },
      "success-active": {
        value: { ...__colors.green["20"].value },
      },
      danger: {
        value: { ...__colors.pink["40"].value },
      },
      "danger-hover": {
        value: { ...__colors.pink["45"].value },
      },
      "danger-active": {
        value: { ...__colors.pink["35"].value },
      },
      warning: {
        value: { ...__colors.yellow["50"].value },
      },
      "warning-hover": {
        value: { ...__colors.yellow["55"].value },
      },
      "warning-active": {
        value: { ...__colors.yellow["45"].value },
      },
      info: {
        value: { ...__colors.blue["50"].value },
      },
      "info-hover": {
        value: { ...__colors.blue["55"].value },
      },
      "info-active": {
        value: { ...__colors.blue["45"].value },
      },
    },
    text: {
      default: {
        value: { ...__colors.gray["100"].value },
      },
      "default-hover": {
        value: { ...__colors.purple["80"].value },
      },
      "default-active": {
        value: { ...__colors.purple["70"].value },
      },
      "default-visited": {
        value: { ...__colors.blue["55"].value },
      },
      neutral: {
        value: { ...__colors.gray["60"].value },
      },
      action: {
        value: { ...__colors.purple["75"].value },
      },
      success: {
        value: { ...__colors.green["35"].value },
      },
      danger: {
        value: { ...__colors.pink["50"].value },
      },
      info: {
        value: { ...__colors.blue["60"].value },
      },
      onsurface: {
        default: {
          value: { ...__colors.purple["10"].value },
        },
        neutral: {
          value: { ...__colors.gray["100"].value },
        },
        action: {
          value: { ...__colors.gray["100"].value },
        },
        success: {
          value: { ...__colors.gray["100"].value },
        },
        danger: {
          value: { ...__colors.gray["100"].value },
        },
        warning: {
          value: { ...__colors.purple["10"].value },
        },
        info: {
          value: { ...__colors.gray["100"].value },
        },
      },
    },
  },
};
