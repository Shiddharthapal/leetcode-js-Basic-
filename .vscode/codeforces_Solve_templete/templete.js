'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let idx = 0;

const next = () => input[idx++];

function solveOne() {
  const n = Number(next());
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Number(next()));
  }

  // your logic here
  let sum = 0;
  for (const x of arr) sum += x;

  return String(sum);
}

function main() {
  const t = Number(next());   // remove this if no test cases
  const res = [];
  for (let i = 0; i < t; i++) {
    res.push(solveOne());
  }
  console.log(res.join('\n'));
}

main();


//  A demo problem
'use strict';

const fs = require('fs');

const data = fs.readFileSync(0, 'utf8').trim();
if (data.length === 0) process.exit(0);

const input = data.split(/\s+/);
let idx = 0;
const next = () => input[idx++];

function solveOne() {
  const n = Number(next());

  const a = new Array(n);
  for (let i = 0; i < n; i++) a[i] = Number(next());

  const b = new Array(n);
  for (let i = 0; i < n; i++) b[i] = Number(next());

  // Start score is 0, so min=max=0
  let mn = 0;
  let mx = 0;

  for (let i = 0; i < n; i++) {
    const redMax = mx - a[i];
    const redMin = mn - a[i];

    const blueMax = b[i] - mn; // max from min because -k
    const blueMin = b[i] - mx; // min from max

    const newMx = Math.max(redMax, blueMax);
    const newMn = Math.min(redMin, blueMin);

    mx = newMx;
    mn = newMn;
  }

  return String(mx);
}

function main() {
  const t = Number(next());
  const out = [];
  for (let tc = 0; tc < t; tc++) {
    out.push(solveOne());
  }
  process.stdout.write(out.join('\n'));
}

main();

