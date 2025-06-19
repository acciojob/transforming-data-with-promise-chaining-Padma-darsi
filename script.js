//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
    const input = document.getElementById("ip").value;
    const output = document.getElementById("output");
    const num = Number(input);

    output.textContent = ""; // Step 1

    Promise.resolve()
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            output.textContent = `Result: ${num}`;
            resolve(num);
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
  });