module Main where
import Data.List (group, sort)

get_pairs :: Ord a => [a] -> Int
get_pairs [] = 0
get_pairs xs = foldl (\acc x -> acc + length x `div` 2) 0 $ group $ sort xs

main = do
    
    -- test
    let input_data1 = [1, 2, 1, 2, 1, 3, 2]
    let input_data2 = [10, 20, 20, 10, 10, 30, 50, 10, 20]

    let r1 = get_pairs input_data1 == 2
    let r2 = get_pairs input_data2 == 3
    
    print r1
    print r2