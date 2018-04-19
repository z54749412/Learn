--- 输入的数字乘2输出
double x = x*2

--- 输入数字 如果小于 100 乘 2 + 1输出 否则原数 + 1输出
doubleAll x = succ(if x > 100 then x else double x)
doubleSmallNumber' x = (if x > 100 then x else x*2) + 1

-- 这里把输入的 xs 赋值给 x 然后取奇数部分，如果小于10 输出 BOOM 否则输出 BANG
boomBangs xs = [ if x < 10 then "BOOM!" else "BANG!" | x <- xs, odd x]
{-
    ghci> boomBangs [7..13]  => 7 8 9 10 11 12 13
    基数 7 9 11 13
    小于10部分： 7 9
    大于10部分： 11 13 
    最终结果为： ["BOOM!","BOOM!","BANG!","BANG!"]
-}

-- 10 到 20 间所有不等于 13，15 或 19 的奇数
specialOdd list = [ x | x <- list, x /= 13, x /= 15, x /= 19, odd x]

-- 获取list长度
length' xs = sum [1 | _ <- xs]

{- 
    _表示我们并不关心从 List 中取什么值，与其弄个永远不用的变量，不如直接一个 _ 。
    这个函数将一个 List 中所有元素置 换为 1，并且使其相加求和。
    得到的结果便是我们的 List 长度。友情提示：字符串也是 List，完全可以使用 list comprehension 来处理字符串。
-}
-- 除去字符串中所有非大写字母的函数：
removeNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']]
{-
    removeNonUppercase "aabbccEEOO"
    => "EEOO"
-}

--- 取出list中每一项中的偶数
even' xxs = [ [ x | x <- xs, even x ] | xs <- xxs]

{-
    even' [[1,3,5,2,3,1,2,4,5],[1,2,3,4,5,6,7,8,9],[1,2,4,2,1,6,3,1,3,2,3,6]]
    => [[2,2,4],[2,4,6,8],[2,4,2,6,2,6]]
-}
conanO'Brien = "It's a-me, Conan O'Brien!"
it'world = "it is a world"
