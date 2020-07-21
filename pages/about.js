import Header from '../components/Header'
const About = () => (
  <div className="page_about">
    <Header title="about" />
    <div className="home1">
      <div className="img_home1">
      </div>
      <h1 className="title">ABOUT US</h1>
    </div>

    <div className="home3">

      <div className="home31">
        <h1>2536</h1>
        <p>ก่อตั้งบริษัท คูลลิ่งเทค ซัพพลาย แอนด์ เซอร์วิส จำกัด </p>
        <p>หน่าย ออกแบบ และ ติดตั้ง ระบบเครื่องทำความเย็น</p>
        <p>ระบบไฟฟ้า เครื่องปรับอากาศ และ ห้องเย็น</p>

      </div>
      <div className="home32">
        <img src="/images/workcctv8.jpg" />
      </div>
    </div>
  </div>
)

export default About