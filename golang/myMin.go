package main

import "fmt"

func main() {
    n := []int{1,2,3,4,5,7,6}
	
    // Read n from input
    DisplayMinimumNumberFunction(n)
}

// https://www.hackerrank.com/contests/w30/challenges/find-the-minimum-number
func DisplayMinimumNumberFunction(n int) {
    //
    // WRITE YOUR CODE HERE
	min := 0
	for i := 0; i < len(n); i++ {
		if n[i] > n[i+1] {
			min = n[i]
		}
	}
	return max
    //
}