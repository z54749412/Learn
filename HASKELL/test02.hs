factorial :: Integer -> Integer

factorial n = product [1..n]

-- ghci> factorial 50
-- 30414093201713378043612608166064768844377641568960512000000000000

circumference :: Float -> Float

circumference r = 2 * pi * r

--ghci> circumference 4.0
--25.132742

circumference' :: Double -> Double

circumference' r = 2 * pi * r

--ghci> circumference' 4.0
--25.132741228718345

lucky :: (Integral a) => a -> String

lucky 7 = "LUCKY NUMBER SEVEN!"

lucky 8 = "呀呀呀呀"

lucky x = "Sorry, you're out of luck, pal!"