"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _palette = require("./palette");

var _styles = require("cloudhub-components/dist/mui/styles");

// ----------------------------------------------------------------------
var BASE_LIGHT = (0, _palette.getLightColors)().grey[500];
var BASE_DARK = '#000000';
var PRIMARY = "0 8px 16px 0 ".concat((0, _styles.alpha)((0, _palette.getLightColors)().primary.main, 0.24));
var INFO = "0 8px 16px 0 ".concat((0, _styles.alpha)((0, _palette.getLightColors)().info.main, 0.24));
var SUCCESS = "0 8px 16px 0 ".concat((0, _styles.alpha)((0, _palette.getLightColors)().success.main, 0.24));
var WARNING = "0 8px 16px 0 ".concat((0, _styles.alpha)((0, _palette.getLightColors)().warning.main, 0.24));
var ERROR = "0 8px 16px 0 ".concat((0, _styles.alpha)((0, _palette.getLightColors)().error.main, 0.24));
var onLight1 = (0, _styles.alpha)(BASE_LIGHT, 0.2);
var onLight2 = (0, _styles.alpha)(BASE_LIGHT, 0.14);
var onLight3 = (0, _styles.alpha)(BASE_LIGHT, 0.12);
var onDark1 = (0, _styles.alpha)(BASE_DARK, 0.2);
var onDark2 = (0, _styles.alpha)(BASE_DARK, 0.14);
var onDark3 = (0, _styles.alpha)(BASE_DARK, 0.12);
var Shadows = {
  light: ['none', "0px 2px 1px -1px ".concat(onLight1, ",0px 1px 1px 0px ").concat(onLight2, ",0px 1px 3px 0px ").concat(onLight3), "0px 3px 1px -2px ".concat(onLight1, ",0px 2px 2px 0px ").concat(onLight2, ",0px 1px 5px 0px ").concat(onLight3), "0px 3px 3px -2px ".concat(onLight1, ",0px 3px 4px 0px ").concat(onLight2, ",0px 1px 8px 0px ").concat(onLight3), "0px 2px 4px -1px ".concat(onLight1, ",0px 4px 5px 0px ").concat(onLight2, ",0px 1px 10px 0px ").concat(onLight3), "0px 3px 5px -1px ".concat(onLight1, ",0px 5px 8px 0px ").concat(onLight2, ",0px 1px 14px 0px ").concat(onLight3), "0px 3px 5px -1px ".concat(onLight1, ",0px 6px 10px 0px ").concat(onLight2, ",0px 1px 18px 0px ").concat(onLight3), "0px 4px 5px -2px ".concat(onLight1, ",0px 7px 10px 1px ").concat(onLight2, ",0px 2px 16px 1px ").concat(onLight3), "0px 5px 5px -3px ".concat(onLight1, ",0px 8px 10px 1px ").concat(onLight2, ",0px 3px 14px 2px ").concat(onLight3), "0px 5px 6px -3px ".concat(onLight1, ",0px 9px 12px 1px ").concat(onLight2, ",0px 3px 16px 2px ").concat(onLight3), "0px 6px 6px -3px ".concat(onLight1, ",0px 10px 14px 1px ").concat(onLight2, ",0px 4px 18px 3px ").concat(onLight3), "0px 6px 7px -4px ".concat(onLight1, ",0px 11px 15px 1px ").concat(onLight2, ",0px 4px 20px 3px ").concat(onLight3), "0px 7px 8px -4px ".concat(onLight1, ",0px 12px 17px 2px ").concat(onLight2, ",0px 5px 22px 4px ").concat(onLight3), "0px 7px 8px -4px ".concat(onLight1, ",0px 13px 19px 2px ").concat(onLight2, ",0px 5px 24px 4px ").concat(onLight3), "0px 7px 9px -4px ".concat(onLight1, ",0px 14px 21px 2px ").concat(onLight2, ",0px 5px 26px 4px ").concat(onLight3), "0px 8px 9px -5px ".concat(onLight1, ",0px 15px 22px 2px ").concat(onLight2, ",0px 6px 28px 5px ").concat(onLight3), "0px 8px 10px -5px ".concat(onLight1, ",0px 16px 24px 2px ").concat(onLight2, ",0px 6px 30px 5px ").concat(onLight3), "0px 8px 11px -5px ".concat(onLight1, ",0px 17px 26px 2px ").concat(onLight2, ",0px 6px 32px 5px ").concat(onLight3), "0px 9px 11px -5px ".concat(onLight1, ",0px 18px 28px 2px ").concat(onLight2, ",0px 7px 34px 6px ").concat(onLight3), "0px 9px 12px -6px ".concat(onLight1, ",0px 19px 29px 2px ").concat(onLight2, ",0px 7px 36px 6px ").concat(onLight3), "0px 10px 13px -6px ".concat(onLight1, ",0px 20px 31px 3px ").concat(onLight2, ",0px 8px 38px 7px ").concat(onLight3), "0px 10px 13px -6px ".concat(onLight1, ",0px 21px 33px 3px ").concat(onLight2, ",0px 8px 40px 7px ").concat(onLight3), "0px 10px 14px -6px ".concat(onLight1, ",0px 22px 35px 3px ").concat(onLight2, ",0px 8px 42px 7px ").concat(onLight3), "0px 11px 14px -7px ".concat(onLight1, ",0px 23px 36px 3px ").concat(onLight2, ",0px 9px 44px 8px ").concat(onLight3), "0px 11px 15px -7px ".concat(onLight1, ",0px 24px 38px 3px ").concat(onLight2, ",0px 9px 46px 8px ").concat(onLight3), // Custom
  {
    z1: "0 1px 2px 0 ".concat((0, _styles.alpha)(BASE_LIGHT, 0.24)),
    z8: "0 8px 16px 0 ".concat((0, _styles.alpha)(BASE_LIGHT, 0.24)),
    z12: "0 0 2px 0 ".concat((0, _styles.alpha)(BASE_LIGHT, 0.24), ", 0 12px 24px 0 ").concat((0, _styles.alpha)(BASE_LIGHT, 0.24)),
    z16: "0 0 2px 0 ".concat((0, _styles.alpha)(BASE_LIGHT, 0.24), ", 0 16px 32px -4px ").concat((0, _styles.alpha)(BASE_LIGHT, 0.24)),
    z20: "0 0 2px 0 ".concat((0, _styles.alpha)(BASE_LIGHT, 0.24), ", 0 20px 40px -4px ").concat((0, _styles.alpha)(BASE_LIGHT, 0.24)),
    z24: "0 0 4px 0 ".concat((0, _styles.alpha)(BASE_LIGHT, 0.24), ", 0 24px 48px 0 ").concat((0, _styles.alpha)(BASE_LIGHT, 0.24)),
    primary: PRIMARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR
  }],
  dark: ['none', "0px 2px 1px -1px ".concat(onDark1, ",0px 1px 1px 0px ").concat(onDark2, ",0px 1px 3px 0px ").concat(onDark3), "0px 3px 1px -2px ".concat(onDark1, ",0px 2px 2px 0px ").concat(onDark2, ",0px 1px 5px 0px ").concat(onDark3), "0px 3px 3px -2px ".concat(onDark1, ",0px 3px 4px 0px ").concat(onDark2, ",0px 1px 8px 0px ").concat(onDark3), "0px 2px 4px -1px ".concat(onDark1, ",0px 4px 5px 0px ").concat(onDark2, ",0px 1px 10px 0px ").concat(onDark3), "0px 3px 5px -1px ".concat(onDark1, ",0px 5px 8px 0px ").concat(onDark2, ",0px 1px 14px 0px ").concat(onDark3), "0px 3px 5px -1px ".concat(onDark1, ",0px 6px 10px 0px ").concat(onDark2, ",0px 1px 18px 0px ").concat(onDark3), "0px 4px 5px -2px ".concat(onDark1, ",0px 7px 10px 1px ").concat(onDark2, ",0px 2px 16px 1px ").concat(onDark3), "0px 5px 5px -3px ".concat(onDark1, ",0px 8px 10px 1px ").concat(onDark2, ",0px 3px 14px 2px ").concat(onDark3), "0px 5px 6px -3px ".concat(onDark1, ",0px 9px 12px 1px ").concat(onDark2, ",0px 3px 16px 2px ").concat(onDark3), "0px 6px 6px -3px ".concat(onDark1, ",0px 10px 14px 1px ").concat(onDark2, ",0px 4px 18px 3px ").concat(onDark3), "0px 6px 7px -4px ".concat(onDark1, ",0px 11px 15px 1px ").concat(onDark2, ",0px 4px 20px 3px ").concat(onDark3), "0px 7px 8px -4px ".concat(onDark1, ",0px 12px 17px 2px ").concat(onDark2, ",0px 5px 22px 4px ").concat(onDark3), "0px 7px 8px -4px ".concat(onDark1, ",0px 13px 19px 2px ").concat(onDark2, ",0px 5px 24px 4px ").concat(onDark3), "0px 7px 9px -4px ".concat(onDark1, ",0px 14px 21px 2px ").concat(onDark2, ",0px 5px 26px 4px ").concat(onDark3), "0px 8px 9px -5px ".concat(onDark1, ",0px 15px 22px 2px ").concat(onDark2, ",0px 6px 28px 5px ").concat(onDark3), "0px 8px 10px -5px ".concat(onDark1, ",0px 16px 24px 2px ").concat(onDark2, ",0px 6px 30px 5px ").concat(onDark3), "0px 8px 11px -5px ".concat(onDark1, ",0px 17px 26px 2px ").concat(onDark2, ",0px 6px 32px 5px ").concat(onDark3), "0px 9px 11px -5px ".concat(onDark1, ",0px 18px 28px 2px ").concat(onDark2, ",0px 7px 34px 6px ").concat(onDark3), "0px 9px 12px -6px ".concat(onDark1, ",0px 19px 29px 2px ").concat(onDark2, ",0px 7px 36px 6px ").concat(onDark3), "0px 10px 13px -6px ".concat(onDark1, ",0px 20px 31px 3px ").concat(onDark2, ",0px 8px 38px 7px ").concat(onDark3), "0px 10px 13px -6px ".concat(onDark1, ",0px 21px 33px 3px ").concat(onDark2, ",0px 8px 40px 7px ").concat(onDark3), "0px 10px 14px -6px ".concat(onDark1, ",0px 22px 35px 3px ").concat(onDark2, ",0px 8px 42px 7px ").concat(onDark3), "0px 11px 14px -7px ".concat(onDark1, ",0px 23px 36px 3px ").concat(onDark2, ",0px 9px 44px 8px ").concat(onDark3), "0px 11px 15px -7px ".concat(onDark1, ",0px 24px 38px 3px ").concat(onDark2, ",0px 9px 46px 8px ").concat(onDark3), // Custums
  {
    z1: "0 1px 2px 0 ".concat((0, _styles.alpha)(BASE_DARK, 0.24)),
    z8: "0 8px 16px 0 ".concat((0, _styles.alpha)(BASE_DARK, 0.24)),
    z12: "0 0 2px 0 ".concat((0, _styles.alpha)(BASE_DARK, 0.24), ", 0 12px 24px 0 ").concat((0, _styles.alpha)(BASE_DARK, 0.24)),
    z16: "0 0 2px 0 ".concat((0, _styles.alpha)(BASE_DARK, 0.24), ", 0 16px 32px -4px ").concat((0, _styles.alpha)(BASE_DARK, 0.24)),
    z20: "0 0 2px 0 ".concat((0, _styles.alpha)(BASE_DARK, 0.24), ", 0 20px 40px -4px ").concat((0, _styles.alpha)(BASE_DARK, 0.24)),
    z24: "0 0 4px 0 ".concat((0, _styles.alpha)(BASE_DARK, 0.24), ", 0 24px 48px 0 ").concat((0, _styles.alpha)(BASE_DARK, 0.24)),
    primary: PRIMARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR
  }]
};
var _default = Shadows;
exports.default = _default;