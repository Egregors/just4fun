solve :: [Int] -> [Int] -> [String]
solve nk xs = undefined
    where     

readIntList :: IO [Int]
readIntList = do
    line <- getLine
    return $ map read $ words line

main = do 
    _ <- readIntList
    [n, k] <- readIntList
    rest <- readIntList
    putStrLn $ show $ rest
    putStrLn $ show $ [n, k]



-- 2
-- 4 3
-- -1 -3 4 2
-- 4 2
-- 0 -1 2 1 