// @import "jquery.draggableTouch.js";
// @import "myscriptfunctional.js";

// @import "main.js";
// @import "second.js";


// function include(file) {

// var script = document.createElement('script');
// script.src = file;
// script.type = 'text/javascript';
// script.defer = true;

// document.getElementsByTagName('head').item(0).appendChild(script);

// }

/* Include Many js files */
// include('jquery.draggableTouch.js');
// include('https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js');
// include('myscriptfunctional.js');

// function loadScript(url)
// {    
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = url;
//     head.appendChild(script);
// }

// loadScript('jquery.draggableTouch.js');
// loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js');
// loadScript('myscriptfunctional.js');



// function include(src, cb) {
//   arr = (src instanceof Array) ? src : [{
//     'src': src,
//     'cb': cb
//   }];
//   arr.forEach(function(item) {
//     _include(item.src, item.cb);
//   })

//   function _include(src, cb) {
//     var script = document.createElement("SCRIPT");
//     script.src = src;
//     script.async = true;
//     script.type = 'text/javascript';
//     script.onload = function() {
//       if (cb) cb()
//     }
//     document.getElementsByTagName("head")[0].appendChild(script);
//   }
// }

// include("jquery.draggableTouch.js");
// include("myscriptfunctional.js");
// include("https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js");
// include("/js/file1.js", function(){console.log("file1 loaded")});
// include([{src:"/js/file1.js"},{src:"/js/file2.js"},{src:"/js/file3.js"}]);



//  function scriptLoader(path, callback)
//         {
//             var script = document.createElement('script');
//             script.type = "text/javascript";
//             script.async = true;
//             script.src = path;
//             script.onload = function(){
//                 if(typeof(callback) == "function")
//                 {
//                     callback();
//                 }
//             }
//             try
//             {
//                 var scriptOne = document.getElementsByTagName('script')[0];
//                 scriptOne.parentNode.insertBefore(script, scriptOne);
//             }
//             catch(e)
//             {
//                 document.getElementsByTagName("head")[0].appendChild(script);
//             }
//         }


// scriptLoader('second.js',function(){
//     alert('file6 loaded');
// });


