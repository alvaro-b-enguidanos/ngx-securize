// Object.defineProperty(window, 'getComputedStyle', {
//   value: () => ['-webkit-appearance']
// });

// Object.defineProperty(window, 'innerHeight', {
//   value: () => 100
// });

// Object.defineProperty(document.body.style, 'transform', {
//   value: () => {
//     return {
//       enumerable: true,
//       configurable: true
//     };
//   }
// });

// const mock = () => {
//   let storage = {};
//   return {
//     getItem: key => (key in storage ? storage[key] : null),
//     setItem: (key, value) => (storage[key] = value || ''),
//     removeItem: key => delete storage[key],
//     clear: () => (storage = {})
//   };
// };

// Object.defineProperty(window, 'sessionStorage', { value: mock() });
// //
