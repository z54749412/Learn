{-
    匹配数字 输出对应字符
-}
lucky :: (Integral a) => a -> String

lucky 7 = "LUCKY NUMBER SEVEN!"

lucky 8 = "呀呀呀呀"

lucky x = "Sorry, you're out of luck, pal!"


sayMe :: (Integral a) => a -> String

sayMe 1 = "One!"

sayMe 2 = "Two!"

sayMe 3 = "Three!"

sayMe 4 = "Four!"

sayMe 5 = "Five!"

sayMe x = "Not between 1 and 5"

{-
    输出阶乘
-}
factorial :: (Integral a) => a -> a

factorial 0 = 1

factorial n = n * factorial (n - 1)


{-
    没有万能匹配
-}

charName :: Char -> String

charName 'a' = "Albert"

charName 'b' = "Broseph"

charName 'c' = "Cecil"

{-
    ghci> charName 'a'

    "Albert"

    ghci> charName 'b'

    "Broseph"

    ghci> charName 'h'  报错

    "*** Exception: tut.hs:(53,0)-(55,21): Non-exhaustive patterns in function charName

    **它告诉我们说，这个模式不够全面。因此，在定义模式时，一定要留一个万能匹配的模式，这样我们的进程就不会为了不可 预料的输入而崩溃了。**
-}
-- 加入万能匹配
charName' :: Char -> String

charName' 'a' = "Albert"

charName' 'b' = "Broseph"

charName' 'c' = "Cecil"

charName' x = "no find this"



addVectors :: (Num a) => (a, a) -> (a, a) -> (a, a)

addVectors a b = (fst a + fst b, snd a + snd b)

{- 
    addVectors (1,2) (2,3)
    (3,5)
-}

addVectors' :: (Num a) => (a, a) -> (a, a) -> (a, a)

addVectors' (x1, y1) (x2, y2) = (x1 + x2, y1 + y2)

{-
    addVectors' (1,2) (3,4)
    (4,6)
-}

first :: (a, b, c) -> a

first (x, _, _) = x

second :: (a, b, c) -> b

second (_, y, _) = y

third :: (a, b, c) -> c

third (_, _, z) = z

{-
    *Main> first (1,2,3)
    1
    *Main> first (1,23,3)
    1
    *Main> second  (1,23,3)
    23
    *Main> third (1,23,3)
    3
-}


tell :: (Show a) => [a] -> String

tell [] = "The list is empty"

tell (x:[]) = "The list has one element: " ++ show x

tell (x:y:[]) = "The list has two elements: " ++ show x ++ " and " ++ show y

tell (x:y:_) = "This list is long. The first two elements are: " ++ show x ++ " and " ++ show y


-- 重写length 方法

length' :: (Num b) => [a] -> b

length' [] = 0

length' (_:xs) = 1 + length' xs

-- sum 

sum' :: (Num a) => [a] -> a

sum' [] = 0

sum' (x:xs) = x + sum' xs


capital :: String -> String

capital "" = "Empty string, whoops!"

capital all@(x:xs) = "The first letter of " ++ all ++ " is " ++ [x]