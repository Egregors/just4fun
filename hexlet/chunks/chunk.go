package chunk

func chunk(list []string, n int) [][]string {
	var acc [][]string
	var i int

	for i = 0; i <= len(list)-n; i += n {
		acc = append(acc, list[i:i+n])
	}

	if i < len(list) {
		acc = append(acc, list[i:])
	}

	return acc
}

// [a, b, c, d, e] 2 -> 2 iter + 1 append => (len(list) / n) (+1)
