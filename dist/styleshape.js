!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], t)
    : (e.styleshape = t(e.react));
})(this, function(e) {
  return (
    (e = e && e.hasOwnProperty("default") ? e.default : e),
    function(t) {
      return (
        void 0 === t && (t = "div"),
        function(n) {
          return e.forwardRef(function(r, f) {
            return e.createElement(
              t,
              Object.assign({}, r, {
                ref: f,
                style: Object.assign(
                  {},
                  "function" == typeof n ? n(r) : n,
                  r.style
                )
              })
            );
          });
        }
      );
    }
  );
});
