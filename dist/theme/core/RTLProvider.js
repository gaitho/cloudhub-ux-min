"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function RTLProvider(_ref) {
  var direction = _ref.direction,
      children = _ref.children;
  var isRTL = direction === 'rtl';
  var jss = create({
    plugins: [].concat(_toConsumableArray(jssPreset().plugins), [rtl()])
  });
  var cache = createCache({
    key: isRTL ? 'rtl' : 'css',
    prepend: true,
    stylisPlugins: isRTL ? [rtlPlugin] : []
  });
  cache.compat = true;
  useEffect(function () {
    document.dir = direction;
  }, [direction]);
  return /*#__PURE__*/React.createElement(CacheProvider, {
    value: cache
  }, /*#__PURE__*/React.createElement(StylesProvider, {
    jss: jss
  }, children));
}

RTLProvider.propTypes = {
  direction: PropTypes.oneOf(['ltr', 'rtl']),
  children: PropTypes.node
};