function getTriangleArea(a, h) {
    if (a <= 0) {
        return("Nieprawidłowe dane");
    }
    else if ( h <= 0) {
        return("Nieprawidłowe dane");
    }
    else {
        return(a*h/2);
    }
}

console.log(getTriangleArea(10, 6))

let TriangleArea1 = getTriangleArea(6, 2);
console.log(TriangleArea1);

let TriangleArea2 = getTriangleArea(20, 4);
console.log(TriangleArea2);

let TriangleArea3 = getTriangleArea (10, 15);
console.log(TriangleArea3);
