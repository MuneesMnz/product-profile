import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data,setData]=useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(()=>{
      switch (selected) {
        case 'featured':
          setData(featuredPortfolio)
          break;
        case 'web':
          setData(webPortfolio)
          break;
        case 'mobile':
          setData(mobilePortfolio)
          break;
        case 'design':
          setData(designPortfolio)
          break;
        case 'content':
          setData(contentPortfolio)
          break;
      
        default:
          setData(featuredPortfolio)
          break;
      }
  },[selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              key={item.id}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        {
          data?.map((value,index)=>{
              return(
                <div className="item" key={index}>
          <img
            src={value.img}
            alt={value.title}
          />
          <h3>{value.title}</h3>
        </div>
              )
          })
        }
        {/* <div className="item">
          <img
            src="https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1-768x432.png"
            alt=""
          />
          <h3>Item Title</h3>
        </div>
        <div className="item">
          <img
            src="https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1-768x432.png"
            alt=""
          />
          <h3>Item Title</h3>
        </div>
        <div className="item">
          <img
            src="https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1-768x432.png"
            alt=""
          />
          <h3>Item Title</h3>
        </div>
        <div className="item">
          <img
            src="https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1-768x432.png"
            alt=""
          />
          <h3>Item Title</h3>
        </div>
        <div className="item">
          <img
            src="https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1-768x432.png"
            alt=""
          />
          <h3>Item Title</h3> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
