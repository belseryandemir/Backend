package main

import (
    "fmt"
)

func main() {
    s := []int{1, 2, 3, 4, 5}
    for i, _ := range s {
        defer fmt.Println(s[i])
    }
}