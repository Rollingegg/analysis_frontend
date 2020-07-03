import Mock from 'mockjs'

const domain = process.env.VUE_APP_BASE_API // 定义默认域名，随便写
const Random = Mock.Random

function getData () {
    const datalist = []
    for (let i = 0; i < 10; i++) {
        const newData = {
            value: Random.float(100, 10000, 0, 2),
            title: Random.csentence(5, 20), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        datalist.push(newData)
    }
    return datalist
}

const data = Mock.mock(RegExp(`${domain}/mock/item/sale/daily` + '.*'), 'get', getData)
export default { data }
