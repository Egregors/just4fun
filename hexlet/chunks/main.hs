module Main where

chunk :: [String] -> Int -> [[String]]
chunk [] _ = []
chunk xs 0 = [xs]
chunk xs n 
    | length xs <= n = [xs]
    | otherwise = take n xs: chunk tail' n
    where 
        tail' = drop n xs

main = do
    print $ chunk [] 3                          -- []
    print $ chunk ["a", "b"] 0                  -- [["a","b"]]
    print $ chunk ["a", "b"] 4                  -- [["a","b"]]
    print $ chunk ["a", "b", "c", "d"] 2        -- [["a","b"],["c","d"]]
    print $ chunk ["a", "b", "c", "d"] 3        -- [["a","b","c"],["d"]]
    print $ chunk ["a", "b", "c", "d", "e"] 2   -- [["a","b"],["c","d"],["e"]]
    
-- [a, b, c, d, e] 2 -> 3 => len $ xs / n