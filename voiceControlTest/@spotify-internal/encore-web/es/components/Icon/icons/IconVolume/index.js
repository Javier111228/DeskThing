/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */
import React from 'react';
import { findClosestGlyphAvailable, Icon } from "../../";
export function IconVolume(props) {
  var _props$autoMirror;

  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z\'/><path d=\'M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M14.5 1.134A1 1 0 0115 2v20a1 1 0 01-1.5.866L2.846 16.712a5.445 5.445 0 010-9.424L13.5 1.135a1 1 0 011 0zM3.847 9.02a3.444 3.444 0 000 5.96L13 20.268V3.732L3.847 9.02zM17 20.127a8.504 8.504 0 000-16.253v2.125a6.502 6.502 0 010 12.003v2.125z\'/><path d=\'M17 16.032V7.968a4.5 4.5 0 010 8.064z\'/>'
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
 * @deprecated The name Experimental__IconVolume is deprecated and will be archived soon. Use IconVolume instead.
 */

export function Experimental__IconVolume(props) {
  return /*#__PURE__*/React.createElement(IconVolume, props);
}