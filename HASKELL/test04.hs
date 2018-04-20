-- bmi 指数
bmiTell :: (RealFloat a) => a -> String

bmiTell bmi
{-
    将输入的数字比对，返回匹配成功的字符串
-}
    | bmi <= 18.5 = "You're underweight, you emo, you!"

    | bmi <= 25.0 = "You're supposedly normal. Pffft, I bet you're ugly!"

    | bmi <= 30.0 = "You're fat! Lose some weight, fatty!"

    | otherwise = "You're a whale, congratulations!"

-- 改进 输入体重身高 进行运算最终给出结论字符串

bmiTell' :: (RealFloat a) => a -> a -> String

bmiTell' weight height

    | weight / height ^ 2 <= 18.5 = "You're underweight, you emo, you!"

    | weight / height ^ 2 <= 25.0 = "You're supposedly normal. Pffft, I bet you're ugly!"

    | weight / height ^ 2 <= 30.0 = "You're fat! Lose some weight, fatty!"

    | otherwise = "You're a whale, congratulations!"


-- max 方法实现
max' :: (Ord a) => a -> a -> a

max' a b

    | a > b = a

    | otherwise = b

    
{-
    max' :: (Ord a) => a -> a -> a

    max' a b | a > b = a | otherwise = b
-}


-- compare 方法实现
myCompare :: (Ord a) => a -> a -> Ordering

-- Note：通过反单引号，我们不仅可以以中缀形式调用函数，也可以在定义函数的时候使用它。有时这样会更易读。
a `myCompare` b

    | a > b = GT

    | a == b = EQ

    | otherwise = LT

{-
    *Main> 1 `myCompare` 2
    LT
    *Main> 1 `myCompare` 1
    EQ
    *Main> 1 `myCompare` 0
    GT
-}

-- 注意对齐方式！！！！！

-- 使用where优化bmi

bmiTellOPT :: (RealFloat a) => a -> a -> String

bmiTellOPT weight height

    | bmi <= skinny = "You're underweight, you emo, you!"

    | bmi <= normal = "You're supposedly normal. Pffft, I bet you're ugly!"

    | bmi <= fat = "You're fat! Lose some weight, fatty!"

    | otherwise = "You're a whale, congratulations!"

    where   bmi = weight / height ^ 2

            skinny = 18.5

            normal = 25.0

            fat = 30.0
    {-
        where 优化
        where   bmi = weight / height ^ 2

                (skinny, normal, fat) = (18.5, 25.0, 30.0)
    -}

initials :: String -> String -> String

initials firstname lastname = [f] ++ ". " ++ [l] ++ "."

    where   (f:_) = firstname

            (l:_) = lastname