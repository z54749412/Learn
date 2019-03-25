var a = document.createElement('a')
a.id = "zzy"
a.href = "/CaiGou/Inquiry.aspx?sub_menu=CaiGou"
a.target = "mainFrame"
document.querySelector('body').appendChild(a)

setTimeout(() => {
  a.click();
  console.log(11111)
}, 3000);