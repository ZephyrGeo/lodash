const slice = (array: (number | string)[], start: number, end: number) => {
  let length = array == null ? 0 : array.length;
  if (!length) return [];

  start = start == null ? 0 : start;
  end = end === undefined ? length : end;

  if (start < 0) {
    start = -start > length ? 0 : start + length;
  }

  if (end < 0) {
    end = -end > length ? length : end + length;
  }

  //   if (start >= end) return [];
  length = start > end ? 0 : (end - start) >>> 0;
  start >>>= 0;
};

    let result = []
    while() {
        result
    }

slice([1, 2, 3, "as"], -2, 3);
