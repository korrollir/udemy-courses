var count = -10;

while (count < 20) {
  console.log(count);
  count++;
};

for (i = -10; i < 20; i++) {
  console.log(i);
};

var count = 10

while (count < 41) {
  console.log(count);
  count+=2;
};

for (i = 10; i < 41; i+=2) {
  console.log(i);
};

var count = 300;

while (count < 334) {
  if (count % 2 !== 0) {
    console.log(count);
  };
  count++;
};

for (i = 300; i < 334; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  };
};

var count = 5;

while (count < 51) {
  if (count % 5 === 0 && count % 3 === 0) {
    console.log(count);
  };
  count++;
};

for (i = 5; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  };
}
