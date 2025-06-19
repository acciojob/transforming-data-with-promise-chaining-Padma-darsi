//your JS code here. If required.
function operations() {
  const input = document.getElementById("ip").value;
  const output = document.getElementById("output");
  const num = Number(input);

  output.textContent = ""; // Step 1: Clear output

  Promise.resolve(num)
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          output.textContent = `Result: ${val}`;
          resolve(val);
        }, 2000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = val * 2;
          output.textContent = `Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = val - 3;
          output.textContent = `Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = val / 2;
          output.textContent = `Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const final = val + 10;
          output.textContent = `Final Result: ${final}`;
          resolve(final);
        }, 1000);
      });
    });
}
