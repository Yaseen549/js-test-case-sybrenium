

function include(file) {

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

/* Include Many js files */
include('https://github.com/Yaseen549/js-test-case-sybrenium/blob/main/js/main.js');
include('https://github.com/Yaseen549/js-test-case-sybrenium/blob/main/js/second.js');
// include('main.js');
// include('second.js');



// alert("Am an alert");
