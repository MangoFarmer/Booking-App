import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Bengaluru,Singapore,Tokyo"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.news18.com/ibnlive/uploads/2022/06/bangalore.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bengaluru</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.nttdata.com/sg/en/-/media/nttdataapac/ndsg/about-us/aboutus-header-2732x1536.jpg?h=1536&iar=0&w=2732&rev=615bc45d9e914e6f87d35e88981b5943"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Singapore</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Tokyo</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;