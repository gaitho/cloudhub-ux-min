"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.varScaleY = exports.varScaleX = exports.varZoomInOut = exports.varBounceIn = exports.varBounce = exports.varFadeInDown = exports.varFadeInUp = exports.varFadeInLeft = exports.varFadeInRight = exports.varFadeIn = exports.varMediumClick = exports.varSmallClick = exports.varHover = exports.varPath = exports.varWrapBoth = exports.varWrapExit = exports.varWrapEnter = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

/**
 * Base Transition
 */
var varTransitionEnter = {
  duration: 0.56,
  ease: [0.43, 0.13, 0.23, 0.96]
};
var varTransitionExit = {
  duration: 0.36,
  ease: [0.43, 0.13, 0.23, 0.96]
};
/**
 * Wrap Enter
 */

var varWrapEnter = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
/**
 * Wrap Exit
 */

exports.varWrapEnter = varWrapEnter;
var varWrapExit = {
  exit: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
/**
 * Wrap Both
 */

exports.varWrapExit = varWrapExit;
var varWrapBoth = {
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};
/**
 * Wrap Path
 */

exports.varWrapBoth = varWrapBoth;
var varPath = {
  initial: {
    opacity: 0,
    pathLength: 0
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: (0, _objectSpread2.default)({}, varTransitionEnter)
  },
  exit: {
    opacity: 0,
    pathLength: 0,
    transition: (0, _objectSpread2.default)({}, varTransitionExit)
  }
};
/**
 * Hover
 */

exports.varPath = varPath;
var varHover = {
  hover: {
    scale: 1.1
  }
};
/**
 * Click
 */

exports.varHover = varHover;
var varSmallClick = {
  hover: {
    scale: 1.04
  },
  tap: {
    scale: 0.96
  }
};
exports.varSmallClick = varSmallClick;
var varMediumClick = {
  hover: {
    scale: 1.1
  },
  tap: {
    scale: 0.9
  }
};
/**
 * Fade In
 */

exports.varMediumClick = varMediumClick;
var varFadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: (0, _objectSpread2.default)({}, varTransitionEnter)
  },
  exit: {
    opacity: 0,
    transition: (0, _objectSpread2.default)({}, varTransitionEnter)
  }
};
/**
 * Fade In Right
 */

exports.varFadeIn = varFadeIn;
var varFadeInRight = {
  initial: {
    x: 80,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: (0, _objectSpread2.default)({}, varTransitionEnter)
  },
  exit: {
    x: 80,
    opacity: 0,
    transition: (0, _objectSpread2.default)({}, varTransitionExit)
  }
};
/**
 * Fade In Left
 */

exports.varFadeInRight = varFadeInRight;
var varFadeInLeft = {
  initial: {
    x: -80,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: (0, _objectSpread2.default)({}, varTransitionEnter)
  },
  exit: {
    x: -80,
    opacity: 0,
    transition: (0, _objectSpread2.default)({}, varTransitionExit)
  }
};
/**
 * Fade In Up
 */

exports.varFadeInLeft = varFadeInLeft;
var varFadeInUp = {
  initial: {
    y: 80,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: (0, _objectSpread2.default)({}, varTransitionEnter)
  },
  exit: {
    y: 80,
    opacity: 0,
    transition: (0, _objectSpread2.default)({}, varTransitionExit)
  }
};
/**
 * Fade In Down
 */

exports.varFadeInUp = varFadeInUp;
var varFadeInDown = {
  initial: {
    y: -80,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: (0, _objectSpread2.default)({}, varTransitionEnter)
  },
  exit: {
    y: -80,
    opacity: 0,
    transition: (0, _objectSpread2.default)({}, varTransitionExit)
  }
};
/**
 * Bounce
 */

exports.varFadeInDown = varFadeInDown;
var varBounce = {
  initial: {
    y: 80,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 1000
    }
  },
  exit: {
    y: -80,
    opacity: 0
  }
};
/**
 * Bounce In
 */

exports.varBounce = varBounce;
var varBounceIn = {
  initial: {
    scale: 1.2,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 1000
    }
  }
};
/**
 * Zoom In Out
 */

exports.varBounceIn = varBounceIn;
var varZoomInOut = {
  initial: {
    scale: 0.9,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: (0, _objectSpread2.default)({
      duration: 0.5
    }, varTransitionEnter)
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: (0, _objectSpread2.default)({
      duration: 1.5
    }, varTransitionExit)
  }
};
/**
 * ScaleX
 */

exports.varZoomInOut = varZoomInOut;
var varScaleX = {
  initial: {
    scaleX: 0,
    opacity: 0
  },
  animate: {
    scaleX: 1,
    opacity: 1,
    transition: (0, _objectSpread2.default)({
      duration: 0.5
    }, varTransitionEnter)
  },
  exit: {
    scaleX: 0,
    opacity: 0,
    transition: (0, _objectSpread2.default)({
      duration: 1.5
    }, varTransitionExit)
  }
};
/**
 * ScaleY
 */

exports.varScaleX = varScaleX;
var varScaleY = {
  initial: {
    scaleY: 0,
    opacity: 0
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: (0, _objectSpread2.default)({
      duration: 0.5
    }, varTransitionEnter)
  },
  exit: {
    scaleY: 0,
    opacity: 0,
    transition: (0, _objectSpread2.default)({
      duration: 1.5
    }, varTransitionExit)
  }
};
exports.varScaleY = varScaleY;