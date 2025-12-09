// /**
//  * @param {string} path
//  * @return {string}
//  */
// var simplifyPath = function (path) {
//   let tempStr = "";
//   let dotCount = 0;
//   let barCount = 0;
//   let i = 0;
//   let arr = path.split("");
//   let len = arr.length;
//   let flag = 0;
//   // console.log("🧞‍♂️  len --->", len);
//   while (i < len) {
//     if (arr[i] === ".") {
//       if (arr[i - 1] === "/") {
//         flag = 1;
//       }
//       dotCount += 1;
//       i++;
//       continue;
//     }
//     if (dotCount > 2) {
//       if (dotCount === 3) {
//         tempStr += "...";
//       } else {
//         for (let i = 0; i < dotCount; i++) {
//           tempStr += ".";
//         }
//       }
//     }
//     if (arr[i - 1] == "/" && arr[i] === "/") {
//       i++;
//       continue;
//     } else if (arr[i] === "/") {
//       if (dotCount === 2 && flag === 1) {
//         let j = i;
//         // console.log("🧞‍♂️  tempStr.length --->", tempStr.length);
//         barCount = 0;
//         while (j >= 0 && tempStr.length > 1 && flag === 1) {
//           if (tempStr[tempStr.length - 1] === "/") barCount++;
//           if (barCount > 1) {
//             barCount = 0;
//             break;
//           }
//           tempStr = tempStr.slice(0, -1);
//           // console.log("🧞‍♂️  tempStr --->", tempStr);
//           j--;
//         }
//       } else if (dotCount === 2) {
//         tempStr += "..";
//         dotCount = 0;
//       } else if (dotCount === 1 && flag === 0) {
//         tempStr += ".";
//         dotCount = 0;
//       }

//       if (i !== len - 1 && tempStr[tempStr.length - 1] !== "/") tempStr += "/";

//       flag = 0;
//       dotCount = 0;
//     }

//     if (arr[i] !== "/" && arr[i] !== ".") {
//       if (dotCount === 2) {
//         tempStr += "..";
//         dotCount = 0;
//       }
//       if (dotCount === 1) {
//         tempStr += ".";
//         dotCount = 0;
//       }
//       tempStr += arr[i];
//       // console.log("🧞‍♂️  tempStr --->", tempStr);
//     }
//     flag = 0;
//     dotCount = 0;
//     i++;
//   }
//   if (dotCount === 2 && flag === 1) {
//     let j = i;
//     // console.log("🧞‍♂️  tempStr.length --->", tempStr.length);
//     barCount = 0;
//     while (j >= 0 && tempStr.length > 1) {
//       if (tempStr[tempStr.length - 1] === "/") barCount++;
//       if (barCount > 1) {
//         barCount = 0;
//         break;
//       }
//       tempStr = tempStr.slice(0, -1);
//       // console.log("🧞‍♂️  tempStr --->", tempStr);
//       j--;
//     }
//   } else if (dotCount === 2) {
//     tempStr += "..";
//   }
//   if (dotCount === 1 && flag === 0) {
//     tempStr += ".";
//   }
//   if (dotCount === 3) {
//     tempStr += "...";
//   }
//   if (tempStr[tempStr.length - 1] === "/" && tempStr.length > 1)
//     tempStr = tempStr.slice(0, -1);
//   if (tempStr.length === 0) tempStr += "/";
//   return tempStr;
// };
// console.log(simplifyPath("/hello/world."));

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let array = [];
  let components = path.split("/");
  for (let component of components) {
    if (component === "." || component === "") {
      continue;
    } else if (component === "..") {
      if (array.length > 0) array.pop();
    } else {
      array.push(component);
    }
  }
  if (array.length === 0) return "/";
  return "/" + array.join("/");
};
console.log(simplifyPath("/.../a/../b/c/../d/./"));
