const sign = ['|', '/', '-', '\\', '|'];

for (let i = 1; i <= 20; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${sign[i % 4]}   `);
  }, i * 1000);
}
