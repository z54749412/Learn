const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
      author: 'zs',
      createTime: 1555033326176
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
      author: 'ls',
      createTime: 1555033334302
    }
  ]
}

module.exports = {
  getList
}