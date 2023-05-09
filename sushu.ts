const isPrime = () => {
  let res: number[] = [];
  let n: number = 100;

  for (let i = 1; i <= n; i++) {
    if (i === 2) res.push(i);
    else {
      let flag = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          flag = false;
          break;
        }
      }
      if (flag) res.push(i);
    }
  }
  console.log(res);
};

isPrime();
