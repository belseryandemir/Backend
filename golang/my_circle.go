package main

import (
    "fmt"
	"math"
)

func main() {
    var r float64

    fmt.Scanf("%f", &r)
    fmt.Println("R =", r)

    fmt.Printf("Area: %0.2f\n", area(r))
}

func area(r float64) (area float64) {
    //
    // WRITE YOUR CODE HERE
	Asquare := (r*2)*(r*2)
	pi := math.Pi
	Acircle := pi*(r*r)
	area = Asquare - Acircle
    //
    return area
}