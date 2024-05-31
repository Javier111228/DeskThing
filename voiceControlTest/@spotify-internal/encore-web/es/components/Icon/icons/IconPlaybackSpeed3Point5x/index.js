/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */
import React from 'react';
import { findClosestGlyphAvailable, Icon } from "../../";
export function IconPlaybackSpeed3Point5x(props) {
  var _props$autoMirror;

  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M6.443 1.725V.5H1.012V2h2.815L2.221 3.385l.799 1.252-.022.008.016-.004a2.91 2.91 0 01.215-.025l.035-.002.097-.007c.578-.05.932.103 1.136.284.207.185.333.464.333.81 0 .528-.471 1.012-1.27 1.012-.8 0-1.312-.572-1.367-1.193l-1.494.132c.12 1.355 1.244 2.561 2.861 2.561 1.35 0 2.77-.903 2.77-2.511 0-.722-.272-1.428-.835-1.93a2.555 2.555 0 00-.847-.498l1.795-1.549zM14.569.5h-3.75l-.887 3.87 1.314.638.189-.233.01-.014a1.27 1.27 0 011.028-.516c.707 0 1.263.562 1.263 1.234 0 .672-.556 1.234-1.263 1.234-.65 0-1.174-.476-1.253-1.073l-1.487.197a2.754 2.754 0 002.74 2.376c1.515 0 2.763-1.214 2.763-2.734s-1.248-2.734-2.763-2.734c-.223 0-.44.026-.647.075l.188-.82h2.555V.5zm.74 10.03l-1.97 1.97 1.97 1.97-1.06 1.06-1.97-1.97-1.97 1.97-1.06-1.06 1.969-1.97-1.97-1.97 1.06-1.06 1.97 1.97 1.97-1.97 1.06 1.06zM9.041 7.463a.956.956 0 11-1.912 0 .956.956 0 011.912 0z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M10.267 2.653V.985h-8.49v2h5.042L3.842 5.552l1.065 1.669-.012.005a1.762 1.762 0 01.208-.037 4.86 4.86 0 01.206-.018l.06-.004.149-.011c.968-.084 1.594.172 1.967.506.379.337.6.841.6 1.445 0 .988-.88 1.819-2.231 1.819-1.389 0-2.29-1-2.387-2.092l-1.992.177c.183 2.069 1.9 3.915 4.379 3.915 2.085 0 4.232-1.39 4.232-3.82 0-1.104-.416-2.177-1.27-2.938a3.96 3.96 0 00-1.626-.862l3.077-2.653zM15.454.985h5.84v2h-4.247l-.412 1.794c.411-.132.85-.203 1.304-.203 2.318 0 4.221 1.856 4.221 4.175 0 2.32-1.903 4.175-4.22 4.175-2.134 0-3.913-1.57-4.186-3.628l1.983-.263c.14 1.056 1.063 1.89 2.202 1.89 1.24 0 2.221-.986 2.221-2.174s-.98-2.175-2.22-2.175c-.747 0-1.403.359-1.806.908l-.014.018-.298.37-1.753-.852L15.454.985zm-3.715 11.689a.96.96 0 100-1.92.96.96 0 000 1.92zm10.303 3.923L19.5 19.14l2.543 2.543-1.414 1.414-2.543-2.543-2.543 2.543-1.414-1.415 2.543-2.542-2.543-2.543 1.414-1.415 2.543 2.543 2.543-2.543 1.414 1.415z\'/>'
  }];
  var closestSize = findClosestGlyphAvailable(iconList, props.iconSize || 24);

  var titleTag = function titleTag(title, titleId) {
    return title ? "<title ".concat(titleId ? "id=\"".concat(titleId, "\"") : "", ">").concat(title, "</title>") : "";
  };

  var descTag = function descTag(desc, descId) {
    return desc ? "<desc ".concat(descId ? "id=\"".concat(descId, "\"") : "", ">").concat(desc, "</desc>") : "";
  };

  var autoMirror = (_props$autoMirror = props.autoMirror) !== null && _props$autoMirror !== void 0 ? _props$autoMirror : false;
  return /*#__PURE__*/React.createElement(Icon, Object.assign({}, props, {
    autoMirror: autoMirror,
    viewBox: "0 0 ".concat(closestSize.size, " ").concat(closestSize.size),
    dangerouslySetInnerHTML: {
      __html: "".concat(titleTag(props.title, props.titleId)).concat(descTag(props.desc, props.descId)).concat(closestSize.svgContent)
    }
  }));
}
/**
 * @deprecated The name Experimental__IconPlaybackSpeed3Point5x is deprecated and will be archived soon. Use IconPlaybackSpeed3Point5x instead.
 */

export function Experimental__IconPlaybackSpeed3Point5x(props) {
  return /*#__PURE__*/React.createElement(IconPlaybackSpeed3Point5x, props);
}