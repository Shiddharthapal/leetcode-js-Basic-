"use strict";

const fs = require("fs");

const data = fs.readFileSync(0, "utf8").trim();
if (data.length === 0) process.exit(0);

const input = data.split(/\s+/);
let idx = 0;

const t = Number(input[idx++]);
let out = [];

for (let tc = 0; tc < t; tc++) {
  const n = Number(input[idx++]);
  let a = new Array(n);
  for (let i = 0; i < n; i++) a[i] = Number(input[idx++]);

  // Sort
  a.sort((p, q) => p - q);

  // Build unique array
  let u = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || a[i] !== a[i - 1]) u.push(a[i]);
  }

  // Longest consecutive streak
  let best = 1;
  let cur = 1;
  for (let i = 1; i < u.length; i++) {
    if (u[i] === u[i - 1] + 1) {
      cur++;
    } else {
      cur = 1;
    }
    if (cur > best) best = cur;
  }

  out.push(String(best));
}

console.log(out.join("\n"));
