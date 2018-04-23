maximum' :: (Ord a) => [a] -> a

maximum' [] = error "maximum of empty list" -- 第一个模式说，如果该 List 为空，崩溃

maximum' [x] = x -- 第二个模式也表示一个边缘条件，它说， 如果这个 List 仅包含单个元素，就回传该元素的值。

maximum' (x:xs)

    | x > maxTail = x

    | otherwise = maxTail

    where maxTail = maximum' xs

{-
    使用模式将其表示出来。
    第一个模式说，如果该 List 为空，崩溃！
    第二个模式也表示一个边缘条件，它说， 如果这个 List 仅包含单个元素，就回传该元素的值。
    第三个模式，运行动作的地方。 通过模式匹配，可以取得一个 List 的头部和尾部。这在使用递归处理 List 时是十分常 见的。出于习惯，我们用个 where 语句来表示 maxTail 作为该 List 中尾部的最大值，然后检查头部是否大于尾部的最大 值。若是，回传头部；若非，回传尾部的最大值。
-}

{-
    我们取个 List [2,5,1] 做例子来看看它的工作原理。
    当调用 maximum' 处理它时，前两个模式不会被匹配，
    而第三个模式匹 配了它并将其分为 2 与 [5,1] 。 
    where 子句再取 [5,1] 的最大值。
    于是再次与第三个模式匹配，并将 [5,1] 分割为 5 和 [1] 。
    继续， where 子句取 [1] 的最大值，这时终于到了边缘条件！回传 1 。
    进一步，将 5 与 [1] 中的最大值做比较，易得 5 ，现在我们就得到了[5,1] 的最大值。
    再进一步，将 2 与 [5,1] 中的最大值相比较，可得 5 更大，最终得 5 。
-}

{-
    用 max 函数重构

    maximum' :: (Ord a) => [a] -> a

    maximum' [] = error "maximum of empty list"

    maximum' [x] = x

    maximum' (x:xs) = max x (maximum' xs)
-}