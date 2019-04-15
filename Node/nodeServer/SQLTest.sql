use myblog;
-- show tables;

-- 关闭更新安全警告
-- SET SQL_SAFE_UPDATES = 0;

-- 增加语句
-- insert into users (username, `password`, realname) values ('zhangsi', '1234', '张四');

-- 查询语句
-- select * from users;
-- select id, username from users;
-- select * from users where username='zhangsan';
-- select * from users where username='zhangsan' or `password`='123';
-- select * from users where username='zhangsan' and `password`='123';
-- select * from users where username like '%zhang%' order by id;
-- select * from users where username like '%zhang%' order by id;
-- select * from users where username like '%zhang%' order by id desc;

-- 更新语句
-- update users set realname='李五' where id=4;
-- update users set username='liwu' where id=4;



-- delete from users where id=2;

-- 软删除
-- update users set state='0' where id=4;

-- select * from users where state=1;
-- 状态不等于0
-- select * from users where state<>1;

-- insert into blogs (title, content, createtime, author) values ('李四博客', '哈哈哈哈哈 嘻嘻嘻发三发凤双飞', 1555138775030, '李四');

-- select * from blogs;

-- select * from blogs where author='李四' order by createtime desc;

-- select * from blogs where title like '%哈%' order by createtime desc;
