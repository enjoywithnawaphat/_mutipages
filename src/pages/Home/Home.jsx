import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* <h1 className="home-Htitle">Home</h1> */}
      <div className="home-title-container">
      <span className="home-Htitle">
        H
      </span>
      <span className="home-title">ome</span><br/>
      </div>
      <img src="./myself.jpg"/>
      <p>นายนวพรรษ ทองสุก 66069963 <br/>
       คณะเทคโนโลยีสารสนเทศ <br/>
       สาขาวิชาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
      </p>
      <h3>"ถ้าเราไม่ทำแล้วใครจะทำ"</h3>
    </div>
  );
}

export default Home;
