-- 与100比较
compareWithHundred :: (Num a, Ord a) => a -> Ordering

compareWithHundred = compare 100

-- /10
divideByTen :: (Floating a) => a -> a

divideByTen = (/10)

-- 一个检查字符是否为大写的函数:
isUpperAlphanum :: Char -> Bool

isUpperAlphanum = (`elem` ['A'..'Z'])
{-
    isUpperAlphanum 'a'
    False
-}
