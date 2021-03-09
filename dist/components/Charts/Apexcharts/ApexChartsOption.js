"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _styles = require("@material-ui/core/styles");

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    '@global': {
      // Tooltip
      '.apexcharts-tooltip,.apexcharts-xaxistooltip': {
        border: '0 !important',
        boxShadow: "".concat(theme.shadows[25].z24, " !important"),
        color: "".concat(theme.palette.text.primary, " !important"),
        borderRadius: "".concat(theme.shape.borderRadiusSm, "px !important"),
        backgroundColor: "".concat(theme.palette.background.default, " !important")
      },
      '.apexcharts-tooltip-title': {
        border: '0 !important',
        fontWeight: theme.typography.fontWeightBold,
        backgroundColor: "".concat(theme.palette.grey[50016], " !important"),
        color: theme.palette.text[theme.palette.mode === 'light' ? 'secondary' : 'primary']
      },
      '.apexcharts-xaxistooltip-bottom': {
        '&:before': {
          borderBottomColor: 'transparent !important'
        },
        '&:after': {
          borderBottomColor: "".concat(theme.palette.background.paper, " !important")
        }
      },
      // Legend
      '.apexcharts-legend': {
        padding: '0 !important'
      },
      '.apexcharts-legend-series': {
        alignItems: 'center',
        display: 'flex !important'
      },
      '.apexcharts-legend-marker': {
        marginTop: '2px !important',
        marginRight: '8px !important'
      },
      '.apexcharts-legend-text': {
        lineHeight: '18px',
        textTransform: 'capitalize'
      }
    }
  });
});

function ApexChartsOption() {
  useStyles();
  var theme = (0, _styles.useTheme)();
  var LABEL_TOTAL = (0, _objectSpread2.default)({
    show: true,
    label: 'Total',
    color: theme.palette.text.secondary
  }, theme.typography.subtitle2);
  var LABEL_VALUE = (0, _objectSpread2.default)({
    offsetY: 8,
    color: theme.palette.text.primary
  }, theme.typography.h3);
  return {
    // Colors
    colors: [theme.palette.primary.main, theme.palette.warning.main, theme.palette.info.main, theme.palette.error.main, theme.palette.success.main],
    // Chart
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      // animations: { enabled: false },
      foreColor: theme.palette.text.disabled,
      fontFamily: theme.typography.fontFamily
    },
    // States
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04
        }
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88
        }
      }
    },
    // Fill
    fill: {
      opacity: 1,
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    // Datalabels
    dataLabels: {
      enabled: false
    },
    // Stroke
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round'
    },
    // Grid
    grid: {
      strokeDashArray: 3,
      borderColor: theme.palette.divider
    },
    // Xaxis
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    // Markers
    markers: {
      size: 0,
      strokeColors: theme.palette.background.paper
    },
    // Tooltip
    tooltip: {
      x: {
        show: false
      }
    },
    // Legend
    legend: {
      show: true,
      fontSize: 13,
      position: 'top',
      horizontalAlign: 'right',
      markers: {
        radius: 12
      },
      itemMargin: {
        horizontal: 12
      },
      labels: {
        colors: theme.palette.text.primary
      }
    },
    // plotOptions
    plotOptions: {
      // Pie + Donut
      pie: {
        donut: {
          labels: {
            show: true,
            value: LABEL_VALUE,
            total: LABEL_TOTAL
          }
        }
      },
      // Radialbar
      radialBar: {
        track: {
          strokeWidth: '100%',
          background: theme.palette.grey[50016]
        },
        dataLabels: {
          value: LABEL_VALUE,
          total: LABEL_TOTAL
        }
      },
      // Radar
      radar: {
        polygons: {
          strokeWidth: 1,
          fill: {
            colors: ['transparent']
          },
          strokeColors: theme.palette.divider,
          connectorColors: theme.palette.divider
        }
      }
    }
  };
}

var _default = ApexChartsOption;
exports.default = _default;