"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getDiff = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// todo:
//  - [ ] stringify - to convert node to JSON | string
//
// cases:
//  k: v -> k: v   =    k: v
//  k: v -> k: v2  =  - k: v
//                    + k: v2
//  k: v -> -      =  - k: v
//  -    -> k: v   =  + k: v
//
// helpers
const getKeys = (a, b) => new Set(Object.keys(a).concat(Object.keys(b)));

const getDiff = (before, after) => {
  const keys = getKeys(before, after);

  const f = (acc, el) => {
    // console.log(`${acc} : ${el}`);
    // todo: dispatch this
    if (!_lodash.default.has(after, el)) {
      //  k: v -> -      =  - k: v
      return { ...acc,
        [`- ${el}`]: before[el]
      };
    }

    if (!_lodash.default.has(before, el)) {
      //  k: v -> -      =  - k: v
      return { ...acc,
        [`+ ${el}`]: after[el]
      };
    }

    if (_lodash.default.has(before, el) && _lodash.default.has(after, el)) {
      return before[el] === after[el] ? { ...acc,
        [el]: before[el]
      } : { ...acc,
        [`- ${el}`]: before[el],
        [`+ ${el}`]: after[el]
      };
    }

    return acc;
  };

  return [...keys].reduce(f, {});
};

exports.getDiff = getDiff;
var _default = getDiff;
exports.default = _default;
const b = {
  host: "hexlet.io",
  timeout: 50,
  proxy: "123.234.53.22",
  follow: false
};
const a = {
  timeout: 20,
  verbose: true,
  host: "hexlet.io"
};
const r = getDiff(b, a);
console.log(r);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2RpZmYuanMiXSwibmFtZXMiOlsiZ2V0S2V5cyIsImEiLCJiIiwiU2V0IiwiT2JqZWN0Iiwia2V5cyIsImNvbmNhdCIsImdldERpZmYiLCJiZWZvcmUiLCJhZnRlciIsImYiLCJhY2MiLCJlbCIsIl8iLCJoYXMiLCJyZWR1Y2UiLCJob3N0IiwidGltZW91dCIsInByb3h5IiwiZm9sbG93IiwidmVyYm9zZSIsInIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsTUFBTUEsT0FBTyxHQUFHLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVLElBQUlDLEdBQUosQ0FBUUMsTUFBTSxDQUFDQyxJQUFQLENBQVlKLENBQVosRUFBZUssTUFBZixDQUFzQkYsTUFBTSxDQUFDQyxJQUFQLENBQVlILENBQVosQ0FBdEIsQ0FBUixDQUExQjs7QUFFTyxNQUFNSyxPQUFPLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEtBQW1CO0FBQ3RDLFFBQU1KLElBQUksR0FBR0wsT0FBTyxDQUFDUSxNQUFELEVBQVNDLEtBQVQsQ0FBcEI7O0FBRUEsUUFBTUMsQ0FBQyxHQUFHLENBQUNDLEdBQUQsRUFBTUMsRUFBTixLQUFhO0FBQ25CO0FBQ0E7QUFFQSxRQUFJLENBQUNDLGdCQUFFQyxHQUFGLENBQU1MLEtBQU4sRUFBYUcsRUFBYixDQUFMLEVBQXVCO0FBQ25CO0FBQ0EsYUFBTyxFQUFFLEdBQUdELEdBQUw7QUFBVSxTQUFFLEtBQUlDLEVBQUcsRUFBVCxHQUFhSixNQUFNLENBQUNJLEVBQUQ7QUFBN0IsT0FBUDtBQUNIOztBQUVELFFBQUksQ0FBQ0MsZ0JBQUVDLEdBQUYsQ0FBTU4sTUFBTixFQUFjSSxFQUFkLENBQUwsRUFBd0I7QUFDcEI7QUFDQSxhQUFPLEVBQUUsR0FBR0QsR0FBTDtBQUFVLFNBQUUsS0FBSUMsRUFBRyxFQUFULEdBQWFILEtBQUssQ0FBQ0csRUFBRDtBQUE1QixPQUFQO0FBQ0g7O0FBRUQsUUFBSUMsZ0JBQUVDLEdBQUYsQ0FBTU4sTUFBTixFQUFjSSxFQUFkLEtBQXFCQyxnQkFBRUMsR0FBRixDQUFNTCxLQUFOLEVBQWFHLEVBQWIsQ0FBekIsRUFBMkM7QUFDdkMsYUFBT0osTUFBTSxDQUFDSSxFQUFELENBQU4sS0FBZUgsS0FBSyxDQUFDRyxFQUFELENBQXBCLEdBQ0QsRUFBRSxHQUFHRCxHQUFMO0FBQVUsU0FBQ0MsRUFBRCxHQUFNSixNQUFNLENBQUNJLEVBQUQ7QUFBdEIsT0FEQyxHQUVELEVBQUUsR0FBR0QsR0FBTDtBQUFVLFNBQUUsS0FBSUMsRUFBRyxFQUFULEdBQWFKLE1BQU0sQ0FBQ0ksRUFBRCxDQUE3QjtBQUFtQyxTQUFFLEtBQUlBLEVBQUcsRUFBVCxHQUFhSCxLQUFLLENBQUNHLEVBQUQ7QUFBckQsT0FGTjtBQUdIOztBQUVELFdBQU9ELEdBQVA7QUFDSCxHQXJCRDs7QUF1QkEsU0FBTyxDQUFDLEdBQUdOLElBQUosRUFBVVUsTUFBVixDQUFpQkwsQ0FBakIsRUFBb0IsRUFBcEIsQ0FBUDtBQUNILENBM0JNOzs7ZUE2QlFILE87O0FBRWYsTUFBTUwsQ0FBQyxHQUFHO0FBQ05jLEVBQUFBLElBQUksRUFBRSxXQURBO0FBRU5DLEVBQUFBLE9BQU8sRUFBRSxFQUZIO0FBR05DLEVBQUFBLEtBQUssRUFBRSxlQUhEO0FBSU5DLEVBQUFBLE1BQU0sRUFBRTtBQUpGLENBQVY7QUFNQSxNQUFNbEIsQ0FBQyxHQUFHO0FBQ05nQixFQUFBQSxPQUFPLEVBQUUsRUFESDtBQUVORyxFQUFBQSxPQUFPLEVBQUUsSUFGSDtBQUdOSixFQUFBQSxJQUFJLEVBQUU7QUFIQSxDQUFWO0FBTUEsTUFBTUssQ0FBQyxHQUFHZCxPQUFPLENBQUNMLENBQUQsRUFBSUQsQ0FBSixDQUFqQjtBQUNBcUIsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8vIHRvZG86XG4vLyAgLSBbIF0gc3RyaW5naWZ5IC0gdG8gY29udmVydCBub2RlIHRvIEpTT04gfCBzdHJpbmdcbi8vXG4vLyBjYXNlczpcbi8vICBrOiB2IC0+IGs6IHYgICA9ICAgIGs6IHZcbi8vICBrOiB2IC0+IGs6IHYyICA9ICAtIGs6IHZcbi8vICAgICAgICAgICAgICAgICAgICArIGs6IHYyXG4vLyAgazogdiAtPiAtICAgICAgPSAgLSBrOiB2XG4vLyAgLSAgICAtPiBrOiB2ICAgPSAgKyBrOiB2XG4vL1xuXG4vLyBoZWxwZXJzXG5jb25zdCBnZXRLZXlzID0gKGEsIGIpID0+IG5ldyBTZXQoT2JqZWN0LmtleXMoYSkuY29uY2F0KE9iamVjdC5rZXlzKGIpKSk7XG5cbmV4cG9ydCBjb25zdCBnZXREaWZmID0gKGJlZm9yZSwgYWZ0ZXIpID0+IHtcbiAgICBjb25zdCBrZXlzID0gZ2V0S2V5cyhiZWZvcmUsIGFmdGVyKTtcblxuICAgIGNvbnN0IGYgPSAoYWNjLCBlbCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHthY2N9IDogJHtlbH1gKTtcbiAgICAgICAgLy8gdG9kbzogZGlzcGF0Y2ggdGhpc1xuXG4gICAgICAgIGlmICghXy5oYXMoYWZ0ZXIsIGVsKSkge1xuICAgICAgICAgICAgLy8gIGs6IHYgLT4gLSAgICAgID0gIC0gazogdlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uYWNjLCBbYC0gJHtlbH1gXTogYmVmb3JlW2VsXSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFfLmhhcyhiZWZvcmUsIGVsKSkge1xuICAgICAgICAgICAgLy8gIGs6IHYgLT4gLSAgICAgID0gIC0gazogdlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uYWNjLCBbYCsgJHtlbH1gXTogYWZ0ZXJbZWxdIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5oYXMoYmVmb3JlLCBlbCkgJiYgXy5oYXMoYWZ0ZXIsIGVsKSkge1xuICAgICAgICAgICAgcmV0dXJuIGJlZm9yZVtlbF0gPT09IGFmdGVyW2VsXVxuICAgICAgICAgICAgICAgID8geyAuLi5hY2MsIFtlbF06IGJlZm9yZVtlbF0gfVxuICAgICAgICAgICAgICAgIDogeyAuLi5hY2MsIFtgLSAke2VsfWBdOiBiZWZvcmVbZWxdLCBbYCsgJHtlbH1gXTogYWZ0ZXJbZWxdIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH07XG5cbiAgICByZXR1cm4gWy4uLmtleXNdLnJlZHVjZShmLCB7fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREaWZmO1xuXG5jb25zdCBiID0ge1xuICAgIGhvc3Q6IFwiaGV4bGV0LmlvXCIsXG4gICAgdGltZW91dDogNTAsXG4gICAgcHJveHk6IFwiMTIzLjIzNC41My4yMlwiLFxuICAgIGZvbGxvdzogZmFsc2Vcbn07XG5jb25zdCBhID0ge1xuICAgIHRpbWVvdXQ6IDIwLFxuICAgIHZlcmJvc2U6IHRydWUsXG4gICAgaG9zdDogXCJoZXhsZXQuaW9cIlxufTtcblxuY29uc3QgciA9IGdldERpZmYoYiwgYSk7XG5jb25zb2xlLmxvZyhyKTtcbiJdfQ==