var points = [40, 100, 1, 5, 25, 10];
console.log(points);
function asending() {
points.sort(function (a, b) { return a - b });
console.log(points);
}
function dsesending() {
points.reverse(function (a, b) { return b - a });
console.log(points);
}
asending()
dsesending()


