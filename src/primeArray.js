const primeArray = [];

const isPrime = n => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 1; i <= 50; i++) {
    if (isPrime(i)) {
        primeArray.push(i, i);
    }
}

primeArray.sort(() => Math.random() - 0.5);

export default primeArray;

