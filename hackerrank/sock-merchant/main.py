from typing import List


def get_pairs(l: List) -> int:
    colors = set(l)
    pairs = 0
    for color in colors:
        pairs += l.count(color) // 2

    return pairs


if __name__ == "__main__":
    # test
    input_data1 = [1, 2, 1, 2, 1, 3, 2]
    assert get_pairs(input_data1) == 2

    input_data2 = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    assert get_pairs(input_data2) == 3

    print("done")