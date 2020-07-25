// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/main.js":[function(require,module,exports) {
var ops = prompt("Escriba la opcion que desea realizar del 1 al 15: \n" + "1) suma de dos elementos. \n" + "2) Calcular el promedio de 2 examenes. \n" + "3) Calcular Area de un rectangulo. \n" + "4) Calcular Area de un triangulo. \n" + "5) Calcular Area de un circunferencia. \n" + "6) Determinar el salario semanal. \n" + "7) Convertir pulgadas a metros. \n" + "8) Convertir soles a dolares. \n" + "9) convertir año de nacimiento a edad. \n" + "10) Determinar el menor de los trabajadores ingresados. \n" + "11) bono por antigudad. \n" + "12) calcular el salario 1500 en los proximos  6 años. \n" + "13) Calcular el promedio de 2 examenes. \n" + "14) Calcular el promedio de 2 examenes. \n" + "15) Calcular el promedio de 2 examenes.\n");

switch (parseInt(ops)) {
  case 1:
    ejercio1();
    break;

  case 2:
    ejercio2();
    break;

  case 3:
    ejercio3();
    break;

  case 4:
    ejercio4();
    break;

  case 5:
    ejercio5();
    break;

  case 6:
    ejercio6();
    break;

  case 7:
    ejercio7();
    break;

  case 8:
    ejercio8();
    break;

  case 9:
    ejercio9();
    break;

  case 10:
    ejercio10();
    break;

  case 11:
    ejercio11();
    break;

  case 12:
    ejercio12();
    break;

  case 13:
    ejercio13();
    break;

  case 14:
    ejercio14();
    break;

  case 15:
    ejercio15();
    break;

  default:
    alert("Elija la opcion correcta: 1 - 15 ");
    break;
}
/*Funciones */


function ejercio1() {
  var msg = alert("A continuacion ingrese los dos numero que desea sumar");
  var a = prompt("Primer numero");
  var b = prompt("Segundo numero");
  var resultado = parseInt(a) + parseInt(b);
  alert("El resultado de la suma es: " + resultado);
}

function ejercio2() {
  var msg = alert("A continuacion ingrese los 4 examenes que desea promediar");
  var a = prompt("Primer nota");
  var b = prompt("Segundo nota");
  var c = prompt("tercero nota");
  var d = prompt("cuarta nota");
  var resultado = (parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d)) / 4;
  alert("El promedio de tus 4 notas es: " + resultado);
}

function ejercio3() {
  var msg = alert("A continuacion ingrese la base y la altura para calcular el area del rectangulo");
  var a = prompt("Primer numero");
  var b = prompt("Segundo numero");
  var resultado = parseInt(a) * parseInt(b);
  alert("El resultado de la suma es: " + resultado);
}

function ejercio4() {
  var msg = alert("A continuacion ingrese la base y la altura para calcular el area del triangulo");
  var a = prompt("Primer numero");
  var b = prompt("Segundo numero");
  var resultado = parseInt(a) * parseInt(b) / 2;
  alert("El resultado de la suma es: " + resultado);
}

function ejercio5() {
  var msg = alert("A continuacion ingrese el diametro para saber la circunferencia");
  var a = prompt("ingrese el diametro");
  var resultado = parseInt(a) * Math.PI;
  alert("La circunferencia es: " + resultado);
}

function ejercio6() {
  var a = prompt("ingresar horas trabajadas");
  var b = prompt("ingresa precio por horas");
  var resultado = a * b * 7;
  alert("pago semanal: " + resultado);
}

function ejercio7() {
  var msg = alert("A continuacion ingrese la cantidad en metros para convertirlo a pulgadas");
  var a = prompt("Cantidad en metros");
  var resultado = parseInt(a) / 0.0254;
  alert(" ".concat(a, " metros equivale  a ").concat(resultado, " Pulgadas"));
}

function ejercio8() {
  var msg = alert("A continuacion ingrese la cantidad que desea convertir a dolares");
  var a = prompt("Cantidad en soles");
  var resultado = parseInt(a) / 3.45;
  alert(" ".concat(a, " Soles equivale a ").concat(resultado, " Dolares"));
}

function ejercio9() {
  var msg = alert("A continuacion ingrese el año en que nacio el trabajador");
  var a = prompt(" año de nacimiento");
  var hoy = new Date();
  var añoActual = hoy.getFullYear();
  var resultado = añoActual - parseInt(a);
  alert(" El trajador tiene ".concat(resultado, " a\xF1os"));
}

function trabajador(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

function ejercio10() {
  trabajadores = [];
  var msg = alert("A continuacion ingrese los 3 trabajadores que desea saber el menor");
  var nombre1 = prompt("Nombre del primer trabajador");
  var edad1 = prompt("edad del primer trabajador");
  trabajadores.push(new trabajador(nombre1, parseInt(edad1)));
  var nombre2 = prompt("Nombre del segundo trabajador");
  var edad2 = prompt("edad del segundo trabajador");
  trabajadores.push(new trabajador(nombre2, parseInt(edad2)));
  var nombre3 = prompt("Nombre del tercero trabajador");
  var edad3 = prompt("edad del tercero trabajador");
  trabajadores.push(new trabajador(nombre3, parseInt(edad3)));

  if (trabajadores[0].edad < trabajadores[1].edad && trabajadores[0].edad < trabajadores[2].edad) {
    var menor = trabajadores[0].nombre;
    alert("".concat(menor, " es el menor ya que tiene ").concat(trabajadores[0].edad, " a\xF1os"));
  } else if (trabajadores[0].edad > trabajadores[1].edad && trabajadores[1].edad < trabajadores[2].edad) {
    var _menor = trabajadores[1].nombre;
    alert("".concat(_menor, " es el menor ya que tiene ").concat(trabajadores[1].edad, " a\xF1os"));
  } else {
    var _menor2 = trabajadores[2].nombre;
    alert("".concat(_menor2, " es el menor ya que tiene ").concat(trabajadores[2].edad, " a\xF1os")); // alert(trabajadores);
    // // alert(` El trajador tiene ${resultado} años`);
  }
}

function ejercio11() {
  var a = prompt("A continuacion ingrese la cantidad de años trabajados para obtener el bono");

  switch (parseInt(a)) {
    case 1:
      alert("Le corresponde un bono de 100 dolares por tener ".concat(a, " a\xF1os laborados"));
      break;

    case 2:
      alert("Le corresponde un bono de 200 dolares por tener ".concat(a, " a\xF1os laborados"));
      break;

    case 3:
      alert("Le corresponde un bono de 300 dolares por tener ".concat(a, " a\xF1os laborados"));
      break;

    case 4:
      alert("Le corresponde un bono de 400 dolares por tener ".concat(a, " a\xF1os laborados"));
      break;

    case 5:
      alert("Le corresponde un bono de 500 dolares por tener ".concat(a, " a\xF1os laborados"));
      break;

    default:
      if (parseInt(a) > 5) {
        alert("Le corresponde un bono de 1000 dolares por tener ".concat(a, " a\xF1os laborados"));
        break;
      } else {
        alert("No le corresponde bono por no contar con el tiempo minimo de a\xF1os o ingreso mal el tiempo estimado.");
        break;
      }

  }
}

function ejercio12() {
  var salario = 1500;
  alert("Se listara el incremento del sueldo en los proximos 6 a\xF1os (1500 sueldo base - 10% por a\xF1o).");

  for (var _index = 0; _index < 6; _index++) {
    var acumulador = salario * 0.10;
    var nuevoSalario = salario + acumulador;
    salario = nuevoSalario;
    alert("En el a\xF1o ".concat(_index + 1, " tien un salario de ").concat(salario, " ya que tiene un aumento del 10%"));
  }
}

function ejercio13() {
  var a = parseInt(prompt("Ingrese la cantidad de notas que ingresara para determinar cuantos aprobado y desaprobado hay en total :"));
  var cantAlumnos = [a];
  var aprobado = 0;
  var desaprobados = 0;

  for (var i = 0; i < a; i++) {
    cantAlumnos[i] = prompt("Nota numero ".concat(i + 1));
  }

  for (var j = 0; j < a; j++) {
    if (cantAlumnos[j] > 11) {
      aprobado++;
    } else {
      desaprobados++;
    }
  }

  alert("El numero de aprobados son : ".concat(aprobado, " \nEl numero de desaprobados son: ").concat(desaprobados));
}

function ejercio14() {
  var a = parseInt(prompt("Ingrese la cantidad de focos que contiene la caja para determinar los colores que hay :"));
  var focos = ['verde', 'blanco', 'rojo'];
  var rojo = 0;
  var blanco = 0;
  var verde = 0; // let aleatorio = Math.floor(Math.random() * 3);

  for (var i = 0; index < a; i++) {
    if (focos[Math.floor(Math.random() * 3)] === "verde") {
      verde++;
    } else if (focos[Math.floor(Math.random() * 3)] === "rojo") {
      rojo++;
    } else {
      blanco++;
    }
  }

  alert("Numero de focos de color verde: ".concat(verde, " \nNumero de focos de color rojo: ").concat(rojo, "\n Numero de focos de color blanco: ").concat(blanco));
}

function ejercio15() {
  var a = parseInt(prompt("Ingrese la edad del votante para determinar si votara o no :"));

  if (a >= 18) {
    alert("SI Puede VOTAR ya que cuenta con ".concat(a, " a\xF1os de Edad"));
  } else {
    alert("NO Puede VOTAR ya que cuenta con ".concat(a, " a\xF1os de Edad"));
  }
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59370" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map