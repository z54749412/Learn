### Haskell
>  Haskell（发音为/ˈhæskəl/）是一种标准化的，通用的纯函数程式语言，有非限定性语义和强静态类型。它的命名源自美国逻辑学家哈斯凯尔·加里，他在数理逻辑方面上的工作使得函数式编程语言有了广泛的基础。在Haskell中，“函数是第一类物件”。作为一门函数程式语言，主要控制结构是函数。Haskell语言是1990年在编程语言Miranda的基础上标准化的，并且以λ演算为基础发展而来。这也是为什么Haskell语言以希腊字母“λ”（Lambda）作为自己的标志。Haskell具有“证明即程序、命题为类型”的特征。 (引用自维基)

--------------

>  在纯种的函数式编程语言中，数据是不可变的，或者说没有变量这个概念，所有的数据一旦产生，就不能改变其中的值，如果要改变，那就只能生成一个新的数据。

--------------

>  这里粗略学习下haskell，主要为了理解下函数式编程思想。

#### 下载
>  apt-get install Haskell-platform  

#### 运行
>  命令行种输入 ghci
>  ![start](./start.png)

#### 命令
>  运算  

    ghci> 2 + 15

    17

    ghci> 49 * 100

    4900

    ghci> 1892 - 1472

    420

    ghci> 5 / 2

    2.5

>  boolean  

    ghci> True && False

    False

    ghci> True && True

    True

    ghci> False || True

    True

    ghci> not False

    True

    ghci> not (True && True)

    False

>  相等性  

    ghci> 5 == 5

    True

    ghci> 1 == 0

    False

    ghci> 5 /= 5

    False

    ghci> 5 /= 4

    True

    ghci> "hello" == "hello"

    True

    succ 8

    9

    ghci> min 9 10

    9

    ghci> min 3.4 3.2

    3.2

    ghci> max 100 101

    101  

>  函数调用拥有最高的优先级  

    ghci> succ 9 + max 5 4 + 1

    16

    ghci> (succ 9) + (max 5 4) + 1

    16

#### 装载函数  

>  :l filename.hs  

---------------------------

#### List  

` List 是最常用的数据结构. List 是一种单类型的数据结构， 可以用来存储多个类型相同的元素。我们可以在里面装一组数字或者一组字符，但不能把字符和数字装在一起。`

>  **Note**: 在 ghci 下，我们可以使用 \`\`let\`\` 关键字来定义一个常量。在 ghci   下运行 > \`\`let a=1\`\` 与在脚本中编写 \`\`a=1\`\` 是等价的。

    ghci> let lostNumbers = [4,8,15,16,23,48]

    ghci> lostNumbers

    [4,8,15,16,23,48]  

>  将两个 List 合并是很常见的操作，这可以通过 现。++ 运算符实

    ghci> [1,2,3,4] ++ [9,10,11,12]

    [1,2,3,4,9,10,11,12]

    ghci> "hello" ++ " " ++ "world"

    "hello world"

    ghci> ['w','o'] ++ ['o','t']

    "woot"

>  在使用 ++ 运算符处理长字符串时要格外小心(对长 List 也是同样)，Haskell 会遍历整个的 List( ++ 符号左边的那个)。在处 理较短的字符串时问题还不大，但要是在一个 5000 万长度的 List 上追加元素，那可得运行好一会儿了。所以说，用 : 运 算符往一个 List 前端插入元素会是更好的选择。

    ghci> 'A':" SMALL CAT"

    "A SMALL CAT"

    ghci> 5:[1,2,3,4,5]

    [5,1,2,3,4,5]  

>  若是要按照索引取得 List 中的元素，可以使用!!运算符，索引的下标为 0。  

    ghci> "Steve Buscemi" !! 6

    'B'

    ghci> [9.4,33.2,96.2,11.2,23.25] !! 1

    33.2  

` 但你若是试图在一个只含有 4 个元素的 List 中取它的第 6 个元素，就会报错。要小心！`  

>  List 同样也可以用来装 List，甚至是 List 的 List 的 List：

    ghci> let b = [[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3]]

    ghci> b

    [[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3]]

    ghci> b ++ [[1,1,1,1]]

    [[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3],[1,1,1,1]]

    ghci> [6,6,6]:b

    [[6,6,6],[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3]]

    ghci> b !! 2

    [1,2,2,3,4]  
 
>  List 中的 List 可以是不同长度，但必须得是相同的类型。如不可以在 List 中混合放置字符和数组相同，混合放置数值和字符 的 List 也是同样不可以的。当 List 内装有可比较的元素时，使用 > 和 >= 可以比较 List 的大小。它会先比较第一个元素， 若它们的值相等，则比较下一个，以此类推。

    ghci> [3,2,1] > [2,1,0]

    True

    ghci> [3,2,1] > [2,10,100]

    True

    ghci> [3,4,2] > [3,4]

    True

    ghci> [3,4,2] > [2,4]

    True

    ghci> [3,4,2] == [3,4,2]

    True  

>  **head** 返回一个 List 的头部，也就是 List 的首个元素。

    ghci> head [5,4,3,2,1]

    5

>  **tail** 返回一个 List 的尾部，也就是 List 除去头部之后的部分。

    ghci> tail [5,4,3,2,1]

    [4,3,2,1]  

>  **last** 返回一个 List 的最后一个元素。

    ghci> last [5,4,3,2,1]

    1

>  **init** 返回一个 List 除去最后一个元素的部分。

    ghci> init [5,4,3,2,1]

    [5,4,3,2]  

` 空list 没有上面那些方法，如果调用会报错`

>  **length** 返回一个 List 的长度。

    ghci> length [5,4,3,2,1]

    5  

>  **null** 检查一个 List 是否为空。如果是，则返回 True，否为空，否则返回False。应当避免使用xs==[]之类的语句来判断 List 是否为空。使用 null 会更好。  

    ghci> null [1,2,3]

    False

    ghci> null []

    True  

>  **reverse** 将一个 List 反转:  

    ghci> reverse [5,4,3,2,1]

    [1,2,3,4,5]

>  **take** 返回一个 List 的前几个元素：

    ghci> take 3 [5,4,3,2,1]

    [5,4,3]

    ghci> take 1 [3,9,3]

    [3]

    ghci> take 5 [1,2]

    [1,2]

    ghci> take 0 [6,6,6]

    []  

` 若是图取超过 List 长度的元素个数，只能得到原 List。若 take 0 个元素，则会得到一个空 List！drop 与 take 的用法大体相同，它会删除一个 List 中的前几个元素。`

    ghci> drop 3 [8,4,2,1,5,6]

    [1,5,6]

    ghci> drop 0 [1,2,3,4]

    [1,2,3,4]

    ghci> drop 100 [1,2,3,4]

    []

    Prelude> let b = [[1,2,3],[4,5]]

    [[1,2,3],[4,5]]

    Prelude> let c = drop 1 b

    Prelude> c

    [[4,5]]

    Prelude> b

    [[1,2,3],[4,5]]  


>  **maximum** 返回一个 List 中最大的那个元素。**minimun**返回最小的。

    ghci> minimum [8,4,2,1,5,6]

    1

    ghci> maximum [1,9,2,3,4]

    9  

>  **sum** 返回一个 List 中所有元素的和。**product**返回一个 List 中所有元素的积。

    ghci> sum [5,2,1,6,3,2,5,7]

    31

    ghci> product [6,2,1,2]

    24

    ghci> product [1,2,5,6,7,9,2,0]

    0

>  **elem** 判断一个元素是否在包含于一个 List，通常以中缀函数的形式调用它。

    ghci> 4 `elem` [3,4,5,6]

    True

    ghci> 10 `elem` [3,4,5,6]

    False

#### Range

>  **Range** 是构造 List 方法之一，而 其中的值必须是可枚举的，像 1、2、3、4...字符同样也可以枚举，字母表就是 A..Z 所有字符的枚举。

    ghci> [1..20]

    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    ghci> ['a'..'z']

    "abcdefghijklmnopqrstuvwxyz"

    ghci> ['K'..'Z']

    "KLMNOPQRSTUVWXYZ"  

> **Range** 枚举指定规律的字符

    ghci> [2,4..20]

    [2,4,6,8,10,12,14,16,18,20]

    ghci> [3,6..20]

    [3,6,9,12,15,18]  

` tip: 避免在 Range 中使用浮点数。`

    ghci> [0.1, 0.3 .. 1]

    [0.1,0.3,0.5,0.7,0.8999999999999999,1.0999999999999999]  

>>  由于 Haskell 是惰性的，它不会对无限长度的 List 求值，它会等着，看你会从它那儿取多少。  

    ghci> take 10 [3,6..]

` ！！！！！！ don‘t try [3,6..]   ！！！！！！！！`

>  List 的函数 **cycle** 接受一个 List 做参数并返回一个无限 List 。

    ghci> take 10 (cycle [1,2,3])

    [1,2,3,1,2,3,1,2,3,1]

    ghci> take 12 (cycle "LOL ")

    "LOL LOL LOL "  

>  **repeat** 接受一个值作参数，并返回一个仅包含该值的无限 List。

    ghci> take 10 (repeat 5)

    [5,5,5,5,5,5,5,5,5,5]  

` 如果只是想得到包含相同元素的 List ，使用 replicate 会更简单，如replicate 3 10，得[10,10,10]。`

#### List Comprehension  
` 本章见示例test01.hs`
    ghci> [x*2 | x <- [1..10]]

    [2,4,6,8,10,12,14,16,18,20]  

    ghci> [x*2 | x <- [1..10], x*2 >= 12]

    [12,14,16,18,20]  

    ghci> [ x | x <- [50..100], x `mod` 7 == 3]

    [52,59,66,73,80,87,94]

#### Tuple

>  从某种意义上讲，Tuple (元组)很像 List --都是将多个值存入一个个体的容器。但它们却有着本质的不同，一组数字的 List 就 是一组数字，它们的类型相同，且不关心其中包含元素的数量。而 Tuple 则要求你对需要组合的数据的数目非常的明确，它 的类型取决于其中项的数目与其各自的类型。Tuple 中的项由括号括起，并由逗号隔开。另外的不同之处就是 Tuple 中的项不必为同一类型，在 Tuple 里可以存入多态别项的组合。

    Prelude> ("t",1)
    
    ("t",1)

> **fst** 返回一个序对的首项。

    ghci> fst (8,11)

    8

    ghci> fst ("Wow", False)

    "Wow"  

> **snd** 返回序对的尾项。

    ghci> snd (8,11)

    11

    ghci> snd ("Wow", False)

    False

` Note：这两个函数仅对序对有效，而不能应用于三元组，四元组和五元组之上。稍后，我们将过一遍从 Tuple 中取数据的所有方式。`

>  **zip** 它可以用来生成一组序对 (Pair) 的 List。它取两个 List，然后将它们交叉配对，形成一组序 对的 List。它很简单，却很实用，尤其是你需要组合或是遍历两个 List 时。如下是个例子：

    ghci> zip [1,2,3,4,5] [5,5,5,5,5]

    [(1,5),(2,5),(3,5),(4,5),(5,5)]

    ghci> zip [1 .. 5] ["one", "two", "three", "four", "five"]

    [(1,"one"),(2,"two"),(3,"three"),(4,"four"),(5,"five")]

    ghci> zip [5,3,2,6,2,7,2,5,4,6,6] ["im","a","turtle"]

    [(5,"im"),(3,"a"),(2,"turtle")]

    ghci> zip [1..] ["apple", "orange", "cherry", "mango"]

    [(1,"apple"),(2,"orange"),(3,"cherry"),(4,"mango")]

#### Types and Typeclasses

##### Type
` Haskell 是 Static Type，这表示在编译时期每个表达式的类型都已经确定下来，这提高了代码的安全性。若 代码中有让布尔值与数字相除的动作，就不会通过编译。这样的好处就是与其让进程在运行时崩溃，不如在编译时就找出可 能的错误。Haskell 中所有东西都有类型。`
------
` 与 Java 和 Pascal 不同，Haskell 支持类型推导。写下一个数字，你就没必要另告诉 Haskell 说"它是个数字"，它自己能推导 出来。这样我们就不必在每个函数或表达式上都标明其类型了。在前面我们只简单涉及一下 Haskell 的类型方面的知识，但 是理解这一类型系统对于 Haskell 的学习是至关重要的。`

> 可以使用 ghci 来检测表达式的类型。使用**:t**命令后跟任何可用的表达式，即可得到该表达式的类型

    ghci> :t 'a'

    'a' :: Char

    ghci> :t True

    True :: Bool

    ghci> :t "HELLO!"

    "HELLO!" :: [Char]

    ghci> :t (True, 'a')

    (True, 'a') :: (Bool, Char)

    ghci> :t 4 == 5

    4 == 5 :: Bool

> 函数也有类型。编写函数时，给它一个明确的类型声明是个好习惯，比较短的函数就不用多此一举了。还记得前面那 个过滤大写字母的 List Comprehension 吗？给它加上类型声明便是这个样子：

    removeNonUppercase :: [Char] -> [Char]

    removeNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']]

> 要是多个参数的函数

    addThree :: Int -> Int -> Int -> Int

    addThree x y z = x + y + z

> **Integer** 表示...厄...也是整数，但它是无界的。这就意味着可以用它存放非常非常大的数，我是说非常大。它的效率不如 **Int** 高。

    factorial :: Integer -> Integer

    factorial n = product [1..n]

    ghci> factorial 50

    30414093201713378043612608166064768844377641568960512000000000000

> **Float** 表示单精度的浮点数。

    circumference :: Float -> Float

    circumference r = 2 * pi * r

    ghci> circumference 4.0

    25.132742

> **Double** 表示双精度的浮点数。

    circumference' :: Double -> Double

    circumference' r = 2 * pi * r

    ghci> circumference' 4.0

    25.132741228718345

> **Bool** 表示布尔值，它只有两种值： True 和 。

> **Char** 表示一个字符。一个字符由单引号括起，一组字符的 List 即为字符串。

> **Tuple** 的类型取决于它的长度及其中项的类型。注意，空 Tuple 同样也是个类型，它只有一种值：()。

    Prelude> :t ()

    () :: ()

    Prelude> :t (1,"t")

    (1,"t") :: Num a => (a, [Char])

##### Type variables



