"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentsOverrides;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Card = _interopRequireDefault(require("./Card"));

var _Chip = _interopRequireDefault(require("./Chip"));

var _Tabs = _interopRequireDefault(require("./Tabs"));

var _Form = _interopRequireDefault(require("./Form"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _Grid = _interopRequireDefault(require("./Grid"));

var _Lists = _interopRequireDefault(require("./Lists"));

var _Table = _interopRequireDefault(require("./Table"));

var _Alert = _interopRequireDefault(require("./Alert"));

var _Badge = _interopRequireDefault(require("./Badge"));

var _Paper = _interopRequireDefault(require("./Paper"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

var _Rating = _interopRequireDefault(require("./Rating"));

var _Slider = _interopRequireDefault(require("./Slider"));

var _Buttons = _interopRequireDefault(require("./Buttons"));

var _SvgIcon = _interopRequireDefault(require("./SvgIcon"));

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

var _Popover = _interopRequireDefault(require("./Popover"));

var _Stepper = _interopRequireDefault(require("./Stepper"));

var _Pickers = _interopRequireDefault(require("./Pickers"));

var _Skeleton = _interopRequireDefault(require("./Skeleton"));

var _Backdrop = _interopRequireDefault(require("./Backdrop"));

var _Snackbar = _interopRequireDefault(require("./Snackbar"));

var _Progress = _interopRequireDefault(require("./Progress"));

var _Timeline = _interopRequireDefault(require("./Timeline"));

var _TreeView = _interopRequireDefault(require("./TreeView"));

var _Container = _interopRequireDefault(require("./Container"));

var _Accordion = _interopRequireDefault(require("./Accordion"));

var _Typography = _interopRequireDefault(require("./Typography"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _Breadcrumbs = _interopRequireDefault(require("./Breadcrumbs"));

var _Autocomplete = _interopRequireDefault(require("./Autocomplete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------
function ComponentsOverrides(_ref) {
  var theme = _ref.theme;
  return (0, _merge.default)((0, _Tabs.default)({
    theme: theme
  }), (0, _Chip.default)({
    theme: theme
  }), (0, _Card.default)({
    theme: theme
  }), (0, _Form.default)({
    theme: theme
  }), (0, _Menu.default)({
    theme: theme
  }), (0, _Grid.default)({
    theme: theme
  }), (0, _Badge.default)({
    theme: theme
  }), (0, _Lists.default)({
    theme: theme
  }), (0, _Table.default)({
    theme: theme
  }), (0, _Paper.default)({
    theme: theme
  }), (0, _Alert.default)({
    theme: theme
  }), (0, _Rating.default)({
    theme: theme
  }), (0, _Dialog.default)({
    theme: theme
  }), (0, _Avatar.default)({
    theme: theme
  }), (0, _Slider.default)({
    theme: theme
  }), (0, _Pickers.default)({
    theme: theme
  }), (0, _Stepper.default)({
    theme: theme
  }), (0, _Tooltip.default)({
    theme: theme
  }), (0, _Popover.default)({
    theme: theme
  }), (0, _Buttons.default)({
    theme: theme
  }), (0, _SvgIcon.default)({
    theme: theme
  }), (0, _Skeleton.default)({
    theme: theme
  }), (0, _Timeline.default)({
    theme: theme
  }), (0, _TreeView.default)({
    theme: theme
  }), (0, _Backdrop.default)({
    theme: theme
  }), (0, _Snackbar.default)({
    theme: theme
  }), (0, _Progress.default)({
    theme: theme
  }), (0, _Container.default)({
    theme: theme
  }), (0, _Accordion.default)({
    theme: theme
  }), (0, _Typography.default)({
    theme: theme
  }), (0, _Pagination.default)({
    theme: theme
  }), (0, _Breadcrumbs.default)({
    theme: theme
  }), (0, _Autocomplete.default)({
    theme: theme
  }));
}