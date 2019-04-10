import Control.Applicative ((<$>))

diff begin end = end - begin

main :: IO ()
main = do
  [sx, sy, tx, ty] <- map read . words <$> getLine :: IO [Int]
  putStr (concat $ replicate (diff sy ty) "U")
  putStr (concat $ replicate (diff sx tx) "R")
  putStr (concat $ replicate (diff sy ty) "D")
  putStr (concat $ replicate (diff sx tx) "L")
  putStr "L"
  putStr (concat $ replicate ((diff sy ty) + 1) "U")
  putStr (concat $ replicate ((diff sx tx) + 1) "R")
  putStr "D"
  putStr "R"
  putStr (concat $ replicate ((diff sy ty) + 1) "D")
  putStr (concat $ replicate ((diff sx tx) + 1) "L")
  putStr "U"