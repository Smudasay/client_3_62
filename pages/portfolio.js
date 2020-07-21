import Header from '../components/Header'
const portfolio = () => (
  <div className="page_portfolio">
    <Header title="portfolio" />
    <h1 className="title">ผลงานของเรา</h1>
    <div className="portfolio1">
      <div className="back-content">
        <p>ด้วยประสบการณ์ในวงการกว่า 20  ปี ทำให้บริษัทของเรามีกลุ่มลูกค้าที่หลากหลาย </p>
        <p>ทั้งองค์กร ภาครัฐภาคเอกชน ไม่ว่าจะเป็นในกลุ่ม อุตสาหกรรมอาหาร อุตสาหกรรมเกษตร </p>
        <p>อุตสาหกรรมโรงงาน อุตสาหกรรมครัวเรือน ห้างสรรพสินค้า เป็นต้น</p>
      </div>
    </div>
    <div className="thanks">
    <p>ทางบริษัทต้องขอขอบคุณลูกค้าที่ไว้วางใจให้เราดูแลท่าน </p>
    <p>และเลือกเราเป็นส่วนหนึ่งของความสำเร็จ </p>
    <p>เราสัญญาว่าจะรักษามาตรฐานการให้บริการ และพัฒนาให้ดียิ่งยิ่งขึ้นไป</p>
    </div>
    <div className="photo">
      <img src="/images/workcctv9.jpg"
        style={{
          width: "23%",
          height: "400px",
          borderRadius: "20px"
        }}
      />
      <img src="/images/workcctv5.jpg"
        style={{
          width: "23%",
          height: "400px",
          borderRadius: "20px"
        }}
      />
      <img src="/images/workcctv13.jpg"
        style={{
          width: "23%",
          height: "400px",
          borderRadius: "20px"
        }}
      />
    </div>
  </div>

)

export default portfolio