(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cosmos-js", [], factory);
	else if(typeof exports === 'object')
		exports["cosmos-js"] = factory();
	else
		root["cosmos-js"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/getters.js":
/*!************************!*\
  !*** ./src/getters.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Getters; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
// Modifications copyright (C) 2019 Commonwealth Labs

/* eslint-env browser */





var RETRIES = 4;
function Getters(cosmosRESTURL) {
  // request and retry
  function get(_x) {
    return _get.apply(this, arguments);
  }

  function _get() {
    _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(path) {
      var _ref10,
          page,
          limit,
          all,
          tries,
          url,
          isTxsPagination,
          response,
          _args5 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _ref10 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {
                page: 1,
                limit: 30,
                all: false
              }, page = _ref10.page, limit = _ref10.limit, all = _ref10.all;
              tries = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : RETRIES;

            case 2:
              if (!tries) {
                _context5.next = 30;
                break;
              }

              _context5.prev = 3;
              url = cosmosRESTURL + path;
              isTxsPagination = path.startsWith('/txs?');
              if (isTxsPagination) url = url + "&page=".concat(page, "&limit=").concat(limit);
              _context5.next = 9;
              return fetch(url).then(function (res) {
                return res.json();
              });

            case 9:
              response = _context5.sent;

              if (response) {
                _context5.next = 12;
                break;
              }

              throw new Error('got empty response');

            case 12:
              if (!isTxsPagination) {
                _context5.next = 20;
                break;
              }

              if (!(!all || Number(response.page_number) >= Number(response.page_total))) {
                _context5.next = 15;
                break;
              }

              return _context5.abrupt("return", response.txs);

            case 15:
              _context5.t0 = response.txs;
              _context5.next = 18;
              return get(path, {
                page: page + 1,
                limit: limit,
                all: all
              });

            case 18:
              _context5.t1 = _context5.sent;
              return _context5.abrupt("return", _context5.t0.concat.call(_context5.t0, _context5.t1));

            case 20:
              // handle height wrappers
              // most responses are wrapped in a construct containing height and the actual result
              if (response.height !== undefined && response.result !== undefined) {
                response = response.result;
              }

              return _context5.abrupt("return", response);

            case 24:
              _context5.prev = 24;
              _context5.t2 = _context5["catch"](3);

              if (!(--tries === 0)) {
                _context5.next = 28;
                break;
              }

              throw _context5.t2;

            case 28:
              _context5.next = 2;
              break;

            case 30:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[3, 24]]);
    }));
    return _get.apply(this, arguments);
  }

  return {
    url: cosmosRESTURL,
    // meta
    connected: function connected() {
      return this.nodeVersion().then(function () {
        return true;
      }, function () {
        return false;
      });
    },
    nodeVersion: function nodeVersion() {
      return fetch(cosmosRESTURL + "/node_version").then(function (res) {
        return res.text();
      });
    },
    // coins
    account: function account(address) {
      var emptyAccount = {
        coins: [],
        sequence: "0",
        account_number: "0"
      };
      return get("/auth/accounts/".concat(address)).then(function (res) {
        // HACK, hope for: https://github.com/cosmos/cosmos-sdk/issues/3885
        var account = res.value || emptyAccount;

        if (res.type === "auth/DelayedVestingAccount") {
          if (!account.BaseVestingAccount) {
            console.error("SDK format of vesting accounts responses has changed");
            return emptyAccount;
          }

          account = Object.assign({}, account.BaseVestingAccount.BaseAccount, account.BaseVestingAccount);
          delete account.BaseAccount;
          delete account.BaseVestingAccount;
        }

        return account;
      })["catch"](function (err) {
        // if account not found, return null instead of throwing
        if (err.response && (err.response.data.includes("account bytes are empty") || err.response.data.includes("failed to prove merkle proof"))) {
          return emptyAccount;
        }

        throw err;
      });
    },
    txs: function txs(addr, paginationOptions) {
      return get("/txs?message.sender=".concat(addr), paginationOptions);
    },
    bankTxs: function bankTxs(addr, paginationOptions) {
      return Promise.all([get("/txs?message.sender=".concat(addr), paginationOptions), get("/txs?message.recipient=".concat(addr), paginationOptions)]).then(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 2),
            senderTxs = _ref2[0],
            recipientTxs = _ref2[1];

        return [].concat(senderTxs, recipientTxs);
      });
    },
    txsByHeight: function txsByHeight(height, paginationOptions) {
      return get("/txs?tx.height=".concat(height), paginationOptions);
    },
    tx: function tx(hash) {
      return get("/txs/".concat(hash));
    },

    /* ============ STAKE ============ */
    stakingTxs: function () {
      var _stakingTxs = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(address, valAddress, paginationOptions) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.all([get("/txs?message.action=create_validator&message.destination-validator=".concat(valAddress), paginationOptions), get("/txs?message.action=edit_validator&message.destination-validator=".concat(valAddress), paginationOptions), get("/txs?message.action=delegate&message.delegator=".concat(address)), get("/txs?message.action=begin_redelegate&message.delegator=".concat(address), paginationOptions), get("/txs?message.action=begin_unbonding&message.delegator=".concat(address), paginationOptions), get("/txs?message.action=unjail&message.source-validator=".concat(valAddress), paginationOptions)]).then(function (_ref3) {
                  var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, 6),
                      createValidatorTxs = _ref4[0],
                      editValidatorTxs = _ref4[1],
                      delegationTxs = _ref4[2],
                      redelegationTxs = _ref4[3],
                      undelegationTxs = _ref4[4],
                      unjailTxs = _ref4[5];

                  return [].concat(createValidatorTxs, editValidatorTxs, delegationTxs, redelegationTxs, undelegationTxs, unjailTxs);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function stakingTxs(_x2, _x3, _x4) {
        return _stakingTxs.apply(this, arguments);
      }

      return stakingTxs;
    }(),
    // Get all delegations information from a delegator
    delegations: function delegations(addr) {
      return get("/staking/delegators/".concat(addr, "/delegations"));
    },
    undelegations: function undelegations(addr) {
      return get("/staking/delegators/".concat(addr, "/unbonding_delegations"), true);
    },
    redelegations: function redelegations(addr) {
      return get("/staking/redelegations?delegator=".concat(addr));
    },
    // Query all validators that a delegator is bonded to
    delegatorValidators: function delegatorValidators(delegatorAddr) {
      return get("/staking/delegators/".concat(delegatorAddr, "/validators"));
    },
    // Get a list containing all the validator candidates
    validators: function validators() {
      return Promise.all([get("/staking/validators?status=unbonding"), get("/staking/validators?status=bonded"), get("/staking/validators?status=unbonded")]).then(function (validatorGroups) {
        var _ref5;

        return (_ref5 = []).concat.apply(_ref5, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(validatorGroups));
      });
    },
    // Get information from a validator
    validator: function validator(addr) {
      return get("/staking/validators/".concat(addr));
    },
    // Get all delegations to a validator
    validatorDelegations: function validatorDelegations(addr) {
      return get("/staking/validators/".concat(addr, "/delegations"));
    },
    // Get the list of the validators in the latest validator set
    validatorSet: function validatorSet() {
      return get("/validatorsets/latest");
    },
    // Query a delegation between a delegator and a validator
    delegation: function delegation(delegatorAddr, validatorAddr) {
      return get("/staking/delegators/".concat(delegatorAddr, "/delegations/").concat(validatorAddr), true);
    },
    unbondingDelegation: function unbondingDelegation(delegatorAddr, validatorAddr) {
      return get("/staking/delegators/".concat(delegatorAddr, "/unbonding_delegations/").concat(validatorAddr), true);
    },
    pool: function pool() {
      return get("/staking/pool");
    },
    stakingParameters: function stakingParameters() {
      return get("/staking/parameters");
    },

    /* ============ Slashing ============ */
    validatorSigningInfo: function validatorSigningInfo(pubKey) {
      return get("/slashing/validators/".concat(pubKey, "/signing_info"));
    },
    validatorSigningInfos: function validatorSigningInfos() {
      return get("/slashing/signing_infos");
    },

    /* ============ Governance ============ */
    proposals: function proposals() {
      return get("/gov/proposals");
    },
    proposal: function proposal(proposalId) {
      return get("/gov/proposals/".concat(proposalId));
    },
    proposer: function proposer(proposalId) {
      return get("/gov/proposals/".concat(proposalId, "/proposer"));
    },
    proposalVotes: function proposalVotes(proposalId) {
      return get("/gov/proposals/".concat(proposalId, "/votes"));
    },
    proposalVote: function proposalVote(proposalId, address) {
      return get("/gov/proposals/".concat(proposalId, "/votes/").concat(address));
    },
    proposalDeposits: function proposalDeposits(proposalId) {
      return get("/gov/proposals/".concat(proposalId, "/deposits"));
    },
    proposalDeposit: function proposalDeposit(proposalId, address) {
      return get("/gov/proposals/".concat(proposalId, "/deposits/").concat(address), true);
    },
    proposalTally: function proposalTally(proposalId) {
      return get("/gov/proposals/".concat(proposalId, "/tally"));
    },
    govDepositParameters: function govDepositParameters() {
      return get("/gov/parameters/deposit");
    },
    govTallyingParameters: function govTallyingParameters() {
      return get("/gov/parameters/tallying");
    },
    govVotingParameters: function govVotingParameters() {
      return get("/gov/parameters/voting");
    },
    governanceTxs: function () {
      var _governanceTxs = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(address) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", Promise.all([get("/txs?message.action=submit_proposal&message.proposer=".concat(address)), get("/txs?message.action=deposit&message.depositor=".concat(address)), get("/txs?message.action=vote&message.voter=".concat(address))]).then(function (_ref6) {
                  var _ref7 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref6, 3),
                      submitProposalTxs = _ref7[0],
                      depositTxs = _ref7[1],
                      voteTxs = _ref7[2];

                  return [].concat(submitProposalTxs, depositTxs, voteTxs);
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function governanceTxs(_x5) {
        return _governanceTxs.apply(this, arguments);
      }

      return governanceTxs;
    }(),

    /* ============ Explorer ============ */
    block: function block(blockHeight) {
      return get("/blocks/".concat(blockHeight));
    },
    latestBlock: function latestBlock() {
      return get("/blocks/latest");
    },

    /* ============ Distribution ============ */
    distributionTxs: function () {
      var _distributionTxs = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(address, valAddress) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", Promise.all([get("/txs?message.action=set_withdraw_address&message.delegator=".concat(address)), get("/txs?message.action=withdraw_delegator_reward&message.delegator=".concat(address)), get("/txs?message.action=withdraw_validator_rewards_all&message.source-validator=".concat(valAddress))]).then(function (_ref8) {
                  var _ref9 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref8, 3),
                      updateWithdrawAddressTxs = _ref9[0],
                      withdrawDelegationRewardsTxs = _ref9[1],
                      withdrawValidatorCommissionTxs = _ref9[2];

                  return [].concat(updateWithdrawAddressTxs, withdrawDelegationRewardsTxs, withdrawValidatorCommissionTxs);
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function distributionTxs(_x6, _x7) {
        return _distributionTxs.apply(this, arguments);
      }

      return distributionTxs;
    }(),
    delegatorRewards: function delegatorRewards(delegatorAddr) {
      return get("/distribution/delegators/".concat(delegatorAddr, "/rewards"));
    },
    delegatorRewardsFromValidator: function () {
      var _delegatorRewardsFromValidator = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(delegatorAddr, validatorAddr) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return get("/distribution/delegators/".concat(delegatorAddr, "/rewards/").concat(validatorAddr));

              case 2:
                _context4.t0 = _context4.sent;

                if (_context4.t0) {
                  _context4.next = 5;
                  break;
                }

                _context4.t0 = [];

              case 5:
                return _context4.abrupt("return", _context4.t0);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function delegatorRewardsFromValidator(_x8, _x9) {
        return _delegatorRewardsFromValidator.apply(this, arguments);
      }

      return delegatorRewardsFromValidator;
    }(),
    validatorDistributionInformation: function validatorDistributionInformation(validatorAddr) {
      return get("/distribution/validators/".concat(validatorAddr));
    },
    validatorRewards: function validatorRewards(validatorAddr) {
      return get("/distribution/validators/".concat(validatorAddr, "/rewards"));
    },
    distributionParameters: function distributionParameters() {
      return get("/distribution/parameters");
    },
    distributionOutstandingRewards: function distributionOutstandingRewards() {
      return get("/distribution/outstanding_rewards");
    },
    annualProvisionedTokens: function annualProvisionedTokens() {
      return get("/minting/annual-provisions");
    },
    inflation: function inflation() {
      return get("/minting/inflation");
    },
    mintingParameters: function mintingParameters() {
      return get("/minting/parameters");
    }
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, createSignedTransaction, createStdTx, createSignMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cosmos; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getters */ "./src/getters.js");
/* harmony import */ var _send__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send */ "./src/send.js");
/* harmony import */ var _simulate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./simulate */ "./src/simulate.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/messages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSignedTransaction", function() { return _send__WEBPACK_IMPORTED_MODULE_6__["createSignedTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStdTx", function() { return _send__WEBPACK_IMPORTED_MODULE_6__["createStdTx"]; });

/* harmony import */ var _signature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signature */ "./src/signature.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSignMessage", function() { return _signature__WEBPACK_IMPORTED_MODULE_9__["createSignMessage"]; });






// Modifications copyright (C) 2019 Commonwealth Labs




/*
* Sender object to build and send transactions
* Example:
* const cosmos = Cosmos("https://stargate.lunie.io", "cosmos1abcd1234")
* const msg = cosmos
* .MsgSend({toAddress: 'cosmos1abcd09876', amounts: [{ denom: 'stake', amount: 10 }})
* const gasEstimate = await msg.simulate()
* const ledgerSigner = ... // async (signMessage: string) => { signature: Buffer, publicKey: Buffer }
* const { included }= await msg.send({ gas: gasEstimate }, ledgerSigner)
* await included()
*/

var Cosmos =
/*#__PURE__*/
function () {
  function Cosmos(cosmosRESTURL) {
    var _this = this;

    var chainId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Cosmos);

    this.url = cosmosRESTURL;
    this.get = {};
    this.accounts = {}; // storing sequence numbers to not send two transactions with the same sequence number

    this.chainId = chainId;

    var getters = Object(_getters__WEBPACK_IMPORTED_MODULE_5__["default"])(cosmosRESTURL);

    Object.keys(getters).forEach(function (getter) {
      _this.get[getter] = getters[getter];
    }); // add message constructors to the Sender to provide a simple API

    Object.entries(_messages__WEBPACK_IMPORTED_MODULE_8__).forEach(function (_ref) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 2),
          name = _ref2[0],
          messageConstructor = _ref2[1];

      _this[name] = function (senderAddress, args) {
        var _this2 = this;

        var message = messageConstructor(senderAddress, args);
        return {
          message: message,
          simulate: function simulate(_ref3) {
            var _ref3$memo = _ref3.memo,
                memo = _ref3$memo === void 0 ? undefined : _ref3$memo;
            return _this2.simulate(senderAddress, {
              message: message,
              memo: memo
            });
          },
          send: function send(_ref4, signer) {
            var gas = _ref4.gas,
                gasPrices = _ref4.gasPrices,
                _ref4$memo = _ref4.memo,
                memo = _ref4$memo === void 0 ? undefined : _ref4$memo;
            return _this2.send(senderAddress, {
              gas: gas,
              gasPrices: gasPrices,
              memo: memo
            }, message, signer);
          }
        };
      };
    });

    this.MultiMessage = function (senderAddress) {
      var _ref5,
          _this3 = this;

      for (var _len = arguments.length, messageObjects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        messageObjects[_key - 1] = arguments[_key];
      }

      var allMessageObjects = (_ref5 = []).concat.apply(_ref5, messageObjects);

      var messages = allMessageObjects.map(function (_ref6) {
        var message = _ref6.message;
        return message;
      });
      return {
        messages: messages,
        simulate: function simulate(_ref7) {
          var _ref7$memo = _ref7.memo,
              memo = _ref7$memo === void 0 ? undefined : _ref7$memo;
          return _this3.simulate(senderAddress, {
            message: messages[0],
            memo: memo
          });
        },
        // TODO include actual mutli message simulation
        send: function send(_ref8, signer) {
          var gas = _ref8.gas,
              gasPrices = _ref8.gasPrices,
              _ref8$memo = _ref8.memo,
              memo = _ref8$memo === void 0 ? undefined : _ref8$memo;
          return _this3.send(senderAddress, {
            gas: gas,
            gasPrices: gasPrices,
            memo: memo
          }, messages, signer);
        }
      };
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Cosmos, [{
    key: "setChainId",
    value: function () {
      var _setChainId = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var chainId,
            _ref9,
            latestChainId,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                chainId = _args.length > 0 && _args[0] !== undefined ? _args[0] : this.chainId;

                if (chainId) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this.get.block('latest');

              case 4:
                _ref9 = _context.sent;
                latestChainId = _ref9.block_meta.header.chain_id;
                chainId = latestChainId;

              case 7:
                this.chainId = chainId;
                return _context.abrupt("return", chainId);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setChainId() {
        return _setChainId.apply(this, arguments);
      }

      return setChainId;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(senderAddress) {
        var _ref10, sequence, accountNumber;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.get.account(senderAddress);

              case 2:
                _ref10 = _context2.sent;
                sequence = _ref10.sequence;
                accountNumber = _ref10.account_number;
                this.accounts[senderAddress] = {
                  // prevent downgrading a sequence number as we assume we send a transaction that hasn't affected the remote sequence number yet
                  sequence: this.accounts[senderAddress] && sequence < this.accounts[senderAddress].sequence ? this.accounts[senderAddress].sequence : sequence,
                  accountNumber: accountNumber
                };
                return _context2.abrupt("return", this.accounts[senderAddress]);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAccount(_x) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
    /*
    * message: object
    * signer: async (signMessage: string) => { signature: Buffer, publicKey: Buffer }
    */

  }, {
    key: "send",
    value: function () {
      var _send2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(senderAddress, _ref11, messages, signer) {
        var gas, gasPrices, memo, chainId, _ref12, sequence, accountNumber, _ref13, hash, included;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                gas = _ref11.gas, gasPrices = _ref11.gasPrices, memo = _ref11.memo;
                _context3.next = 3;
                return this.setChainId();

              case 3:
                chainId = _context3.sent;
                _context3.next = 6;
                return this.getAccount(senderAddress);

              case 6:
                _ref12 = _context3.sent;
                sequence = _ref12.sequence;
                accountNumber = _ref12.accountNumber;
                _context3.next = 11;
                return Object(_send__WEBPACK_IMPORTED_MODULE_6__["default"])({
                  gas: gas,
                  gasPrices: gasPrices,
                  memo: memo
                }, messages, signer, this.url, chainId, accountNumber, sequence);

              case 11:
                _ref13 = _context3.sent;
                hash = _ref13.hash;
                included = _ref13.included;
                this.accounts[senderAddress].sequence = (parseInt(this.accounts[senderAddress].sequence) + 1).toString();
                return _context3.abrupt("return", {
                  hash: hash,
                  sequence: sequence,
                  included: included
                });

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function send(_x2, _x3, _x4, _x5) {
        return _send2.apply(this, arguments);
      }

      return send;
    }()
  }, {
    key: "simulate",
    value: function () {
      var _simulate2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(senderAddress, _ref14) {
        var message, _ref14$memo, memo, chainId, _ref15, sequence, accountNumber;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                message = _ref14.message, _ref14$memo = _ref14.memo, memo = _ref14$memo === void 0 ? undefined : _ref14$memo;
                _context4.next = 3;
                return this.setChainId();

              case 3:
                chainId = _context4.sent;
                _context4.next = 6;
                return this.getAccount(senderAddress);

              case 6:
                _ref15 = _context4.sent;
                sequence = _ref15.sequence;
                accountNumber = _ref15.accountNumber;
                return _context4.abrupt("return", Object(_simulate__WEBPACK_IMPORTED_MODULE_7__["default"])(this.url, senderAddress, chainId, message, memo, sequence, accountNumber));

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function simulate(_x6, _x7) {
        return _simulate2.apply(this, arguments);
      }

      return simulate;
    }()
  }]);

  return Cosmos;
}();





/***/ }),

/***/ "./src/messages.js":
/*!*************************!*\
  !*** ./src/messages.js ***!
  \*************************/
/*! exports provided: MsgSend, MsgDelegate, MsgUndelegate, MsgRedelegate, MsgSubmitProposal, MsgVote, MsgDeposit, MsgWithdrawDelegationReward, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgSend", function() { return MsgSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgDelegate", function() { return MsgDelegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgUndelegate", function() { return MsgUndelegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgRedelegate", function() { return MsgRedelegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgSubmitProposal", function() { return MsgSubmitProposal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgVote", function() { return MsgVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgDeposit", function() { return MsgDeposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgWithdrawDelegationReward", function() { return MsgWithdrawDelegationReward; });
// Bank
function MsgSend(senderAddress, _ref) {
  var toAddress = _ref.toAddress,
      amounts = _ref.amounts;
  return {
    type: "cosmos-sdk/MsgSend",
    value: {
      from_address: senderAddress,
      to_address: toAddress,
      amount: amounts.map(Coin)
    }
  };
} // Staking

function MsgDelegate(senderAddress, _ref2) {
  var validatorAddress = _ref2.validatorAddress,
      amount = _ref2.amount,
      denom = _ref2.denom;
  return {
    type: "cosmos-sdk/MsgDelegate",
    value: {
      delegator_address: senderAddress,
      validator_address: validatorAddress,
      amount: Coin({
        amount: amount,
        denom: denom
      })
    }
  };
}
function MsgUndelegate(senderAddress, _ref3) {
  var validatorAddress = _ref3.validatorAddress,
      amount = _ref3.amount,
      denom = _ref3.denom;
  return {
    type: "cosmos-sdk/MsgUndelegate",
    value: {
      validator_address: validatorAddress,
      delegator_address: senderAddress,
      amount: Coin({
        amount: amount,
        denom: denom
      })
    }
  };
}
function MsgRedelegate(senderAddress, _ref4) {
  var validatorSourceAddress = _ref4.validatorSourceAddress,
      validatorDestinationAddress = _ref4.validatorDestinationAddress,
      amount = _ref4.amount,
      denom = _ref4.denom;
  return {
    type: "cosmos-sdk/MsgBeginRedelegate",
    value: {
      delegator_address: senderAddress,
      validator_src_address: validatorSourceAddress,
      validator_dst_address: validatorDestinationAddress,
      amount: Coin({
        amount: amount,
        denom: denom
      })
    }
  };
} // Governance

function MsgSubmitProposal(senderAddress, _ref5) {
  var proposalType = _ref5.proposalType,
      title = _ref5.title,
      description = _ref5.description,
      initialDeposits = _ref5.initialDeposits;
  return {
    type: "cosmos-sdk/MsgSubmitProposal",
    value: {
      content: {
        type: 'cosmos-sdk/TextProposal',
        value: {
          title: title,
          description: description
        }
      },
      proposer: senderAddress,
      initial_deposit: initialDeposits.map(Coin)
    }
  };
}
function MsgVote(senderAddress, _ref6) {
  var proposalId = _ref6.proposalId,
      option = _ref6.option;
  return {
    type: "cosmos-sdk/MsgVote",
    value: {
      voter: senderAddress,
      proposal_id: proposalId,
      option: option
    }
  };
}
function MsgDeposit(senderAddress, _ref7) {
  var proposalId = _ref7.proposalId,
      amounts = _ref7.amounts;
  return {
    type: "cosmos-sdk/MsgDeposit",
    value: {
      depositor: senderAddress,
      proposal_id: proposalId,
      amount: amounts.map(Coin)
    }
  };
}
function MsgWithdrawDelegationReward(senderAddress, _ref8) {
  var validatorAddress = _ref8.validatorAddress;
  return {
    type: "cosmos-sdk/MsgWithdrawDelegationReward",
    value: {
      delegator_address: senderAddress,
      validator_address: validatorAddress
    }
  };
}

function Coin(_ref9) {
  var amount = _ref9.amount,
      denom = _ref9.denom;
  return {
    amount: String(amount),
    denom: denom
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  'MsgSend': MsgSend,
  'MsgDelegate': MsgDelegate,
  'MsgUndelegate': MsgUndelegate,
  'MsgRedelegate': MsgRedelegate,
  'MsgSubmitProposal': MsgSubmitProposal,
  'MsgVote': MsgVote,
  'MsgDeposit': MsgDeposit,
  'MsgWithdrawDelegationReward': MsgWithdrawDelegationReward
});

/***/ }),

/***/ "./src/send.js":
/*!*********************!*\
  !*** ./src/send.js ***!
  \*********************/
/*! exports provided: default, createSignedTransaction, queryTxInclusion, createStdTx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSignedTransaction", function() { return createSignedTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryTxInclusion", function() { return queryTxInclusion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStdTx", function() { return createStdTx; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _signature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signature */ "./src/signature.js");



/* eslint-env browser */

var DEFAULT_GAS_PRICE = [{
  amount: 2.5e-8.toFixed(9),
  denom: "uatom"
}];
function send(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
  return _send.apply(this, arguments);
}

function _send() {
  _send = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref, messages, signer, cosmosRESTURL, chainId, accountNumber, sequence) {
    var gas, _ref$gasPrices, gasPrices, _ref$memo, memo, signedTx, body, res;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            gas = _ref.gas, _ref$gasPrices = _ref.gasPrices, gasPrices = _ref$gasPrices === void 0 ? DEFAULT_GAS_PRICE : _ref$gasPrices, _ref$memo = _ref.memo, memo = _ref$memo === void 0 ? "" : _ref$memo;
            _context.next = 3;
            return createSignedTransaction({
              gas: gas,
              gasPrices: gasPrices,
              memo: memo
            }, messages, signer, chainId, accountNumber, sequence);

          case 3:
            signedTx = _context.sent;
            // broadcast transaction with signatures included
            body = createBroadcastBody(signedTx, "sync");
            _context.next = 7;
            return fetch("".concat(cosmosRESTURL, "/txs"), {
              method: "POST",
              headers: {
                'Content-Type': 'text/plain'
              },
              body: body
            }).then(function (res) {
              return res.json();
            }).then(assertOk);

          case 7:
            res = _context.sent;
            return _context.abrupt("return", {
              hash: res.txhash,
              sequence: sequence,
              included: function included() {
                return queryTxInclusion(res.txhash, cosmosRESTURL);
              }
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _send.apply(this, arguments);
}

function createSignedTransaction(_x8, _x9, _x10, _x11, _x12, _x13) {
  return _createSignedTransaction.apply(this, arguments);
} // wait for inclusion of a tx in a block
// Default waiting time: 60 * 3s = 180s

function _createSignedTransaction() {
  _createSignedTransaction = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2, messages, signer, chainId, accountNumber, sequence) {
    var gas, _ref2$gasPrices, gasPrices, _ref2$memo, memo, stdTx, signMessage, signature, publicKey, _ref6, signatureObject, signedTx;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            gas = _ref2.gas, _ref2$gasPrices = _ref2.gasPrices, gasPrices = _ref2$gasPrices === void 0 ? DEFAULT_GAS_PRICE : _ref2$gasPrices, _ref2$memo = _ref2.memo, memo = _ref2$memo === void 0 ? "" : _ref2$memo;
            // sign transaction
            stdTx = createStdTx({
              gas: gas,
              gasPrices: gasPrices,
              memo: memo
            }, messages);
            signMessage = Object(_signature__WEBPACK_IMPORTED_MODULE_2__["createSignMessage"])(stdTx, {
              sequence: sequence,
              accountNumber: accountNumber,
              chainId: chainId
            });
            _context2.prev = 3;
            _context2.next = 6;
            return signer(signMessage);

          case 6:
            _ref6 = _context2.sent;
            signature = _ref6.signature;
            publicKey = _ref6.publicKey;
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](3);
            throw new Error('Signing failed: ' + _context2.t0.message);

          case 14:
            signatureObject = Object(_signature__WEBPACK_IMPORTED_MODULE_2__["createSignature"])(signature, sequence, accountNumber, publicKey);
            signedTx = createSignedTransactionObject(stdTx, signatureObject);
            return _context2.abrupt("return", signedTx);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 11]]);
  }));
  return _createSignedTransaction.apply(this, arguments);
}

function queryTxInclusion(_x14, _x15) {
  return _queryTxInclusion.apply(this, arguments);
} // attaches the request meta data to the message

function _queryTxInclusion() {
  _queryTxInclusion = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(txHash, cosmosRESTURL) {
    var iterations,
        timeout,
        includedTx,
        _args3 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            iterations = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 60;
            timeout = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : 3000;

          case 2:
            if (!(iterations-- > 0)) {
              _context3.next = 16;
              break;
            }

            _context3.prev = 3;
            _context3.next = 6;
            return fetch("".concat(cosmosRESTURL, "/txs/").concat(txHash)).then(function (response) {
              if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response.json());
              } else {
                var error = new Error(response.statusText || response.status);
                error.response = response;
                return Promise.reject(error);
              }
            });

          case 6:
            includedTx = _context3.sent;
            return _context3.abrupt("break", 16);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            _context3.next = 14;
            return new Promise(function (resolve) {
              return setTimeout(resolve, timeout);
            });

          case 14:
            _context3.next = 2;
            break;

          case 16:
            if (!(iterations <= 0)) {
              _context3.next = 18;
              break;
            }

            throw new Error("The transaction was still not included in a block. We can't say for certain it will be included in the future.");

          case 18:
            assertOk(includedTx);
            return _context3.abrupt("return", includedTx);

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return _queryTxInclusion.apply(this, arguments);
}

function createStdTx(_ref3, messages) {
  var gas = _ref3.gas,
      gasPrices = _ref3.gasPrices,
      memo = _ref3.memo;
  var fees = gasPrices.map(function (_ref4) {
    var amount = _ref4.amount,
        denom = _ref4.denom;
    return {
      amount: String(Math.round(amount * gas)),
      denom: denom
    };
  }).filter(function (_ref5) {
    var amount = _ref5.amount;
    return amount > 0;
  });
  return {
    msg: Array.isArray(messages) ? messages : [messages],
    fee: {
      amount: fees.length > 0 ? fees : null,
      gas: gas
    },
    signatures: null,
    memo: memo
  };
} // the broadcast body consists of the signed tx and a return type
// returnType can be block (inclusion in block), async (right away), sync (after checkTx has passed)

function createBroadcastBody(signedTx) {
  var returnType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "sync";
  return JSON.stringify({
    tx: signedTx,
    mode: returnType
  });
} // adds the signature object to the tx


function createSignedTransactionObject(tx, signature) {
  return Object.assign({}, tx, {
    signatures: [signature]
  });
} // assert that a transaction was sent successful


function assertOk(res) {
  if (Array.isArray(res)) {
    if (res.length === 0) throw new Error("Error sending transaction");
    res.forEach(assertOk);
  }

  if (res.error) {
    throw new Error(res.error);
  } // Sometimes we get back failed transactions, which shows only by them having a `code` property


  if (res.code) {
    var message = JSON.parse(res.raw_log).message;
    throw new Error(message);
  }

  if (!res.txhash) {
    var _message = res.message;
    throw new Error(_message);
  }

  return res;
}

/***/ }),

/***/ "./src/signature.js":
/*!**************************!*\
  !*** ./src/signature.js ***!
  \**************************/
/*! exports provided: createSignMessage, createSignature, removeEmptyProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSignMessage", function() { return createSignMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSignature", function() { return createSignature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEmptyProperties", function() { return removeEmptyProperties; });
/*
The SDK expects a certain message format to serialize and then sign.

type StdSignMsg struct {
  ChainID       string      `json:"chain_id"`
  AccountNumber uint64      `json:"account_number"`
  Sequence      uint64      `json:"sequence"`
  Fee           auth.StdFee `json:"fee"`
  Msgs          []sdk.Msg   `json:"msgs"`
  Memo          string      `json:"memo"`
}
*/
function createSignMessage(jsonTx, _ref) {
  var sequence = _ref.sequence,
      accountNumber = _ref.accountNumber,
      chainId = _ref.chainId;
  // sign bytes need amount to be an array
  var fee = {
    amount: jsonTx.fee.amount || [],
    gas: jsonTx.fee.gas
  };
  return JSON.stringify(removeEmptyProperties({
    fee: fee,
    memo: jsonTx.memo,
    msgs: jsonTx.msg,
    // weird msg vs. msgs
    sequence: sequence,
    account_number: accountNumber,
    chain_id: chainId
  }));
}
function createSignature(signature, sequence, accountNumber, publicKey) {
  return {
    signature: signature.toString("base64"),
    account_number: accountNumber,
    sequence: sequence,
    pub_key: {
      type: "tendermint/PubKeySecp256k1",
      // TODO: allow other keytypes
      value: publicKey.toString("base64")
    }
  };
}
function removeEmptyProperties(jsonTx) {
  if (Array.isArray(jsonTx)) {
    return jsonTx.map(removeEmptyProperties);
  } // string or number


  if (typeof jsonTx !== "object") {
    return jsonTx;
  }

  var sorted = {};
  Object.keys(jsonTx).sort().forEach(function (key) {
    if (jsonTx[key] === undefined || jsonTx[key] === null) return;
    sorted[key] = removeEmptyProperties(jsonTx[key]);
  });
  return sorted;
}

/***/ }),

/***/ "./src/simulate.js":
/*!*************************!*\
  !*** ./src/simulate.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return simulate; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-env browser */
var GAS_ADJUSTMENT = 2.3;
function simulate(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
  return _simulate.apply(this, arguments);
} // attaches the request meta data to the message

function _simulate() {
  _simulate = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cosmosRESTURL, senderAddress, chainId, msg, memo, sequence, accountNumber) {
    var type, path, url, fixedMessage, tx, _ref2, gasEstimate;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            type = msg.type;
            path = {
              'cosmos-sdk/MsgSend': function cosmosSdkMsgSend() {
                return "/bank/accounts/".concat(senderAddress, "/transfers");
              },
              'cosmos-sdk/MsgDelegate': function cosmosSdkMsgDelegate() {
                return "/staking/delegators/".concat(senderAddress, "/delegations");
              },
              'cosmos-sdk/MsgUndelegate': function cosmosSdkMsgUndelegate() {
                return "/staking/delegators/".concat(senderAddress, "/unbonding_delegations");
              },
              'cosmos-sdk/MsgBeginRedelegate': function cosmosSdkMsgBeginRedelegate() {
                return "/staking/delegators/".concat(senderAddress, "/redelegations");
              },
              'cosmos-sdk/MsgSubmitProposal': function cosmosSdkMsgSubmitProposal() {
                return "/gov/proposals";
              },
              'cosmos-sdk/MsgVote': function cosmosSdkMsgVote() {
                return "/gov/proposals/".concat(msg.value.proposal_id, "/votes");
              },
              'cosmos-sdk/MsgDeposit': function cosmosSdkMsgDeposit() {
                return "/gov/proposals/".concat(msg.value.proposal_id, "/deposits");
              },
              'cosmos-sdk/MsgWithdrawDelegationReward': function cosmosSdkMsgWithdrawDelegationReward() {
                return "/distribution/delegators/".concat(senderAddress, "/rewards");
              }
            }[type]();
            url = "".concat(cosmosRESTURL).concat(path); // the simulate endpoint is out of sync right now: https://github.com/cosmos/cosmos-sdk/issues/4929

            if (type === 'cosmos-sdk/MsgSubmitProposal') {
              fixedMessage = {
                type: 'cosmos-sdk/MsgSubmitProposal',
                value: {
                  title: msg.value.content.value.title,
                  description: msg.value.content.value.description,
                  proposal_type: 'Text',
                  proposer: msg.value.proposer,
                  initial_deposit: msg.value.initial_deposit
                }
              };
              msg = fixedMessage;
            }

            tx = createRESTPOSTObject(senderAddress, chainId, {
              sequence: sequence,
              accountNumber: accountNumber,
              memo: memo
            }, msg);
            _context.next = 7;
            return fetch(url, {
              method: "POST",
              headers: {
                'Content-Type': 'text/plain'
              },
              body: JSON.stringify(tx)
            }).then(function (res) {
              return res.json();
            });

          case 7:
            _ref2 = _context.sent;
            gasEstimate = _ref2.gas_estimate;
            return _context.abrupt("return", Math.round(gasEstimate * GAS_ADJUSTMENT));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _simulate.apply(this, arguments);
}

function createRESTPOSTObject(senderAddress, chainId, _ref, msg) {
  var sequence = _ref.sequence,
      accountNumber = _ref.accountNumber,
      memo = _ref.memo;
  var requestMetaData = {
    sequence: sequence,
    from: senderAddress,
    account_number: accountNumber,
    chain_id: chainId,
    simulate: true,
    memo: memo
  };
  return _objectSpread({
    base_req: requestMetaData
  }, msg.value);
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=cosmos.js.map