import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CssReset";
import MenuBar from "../src/components/MenuBar";
import { StyledTimeline } from "../src/components/TimeLine.Js";

function HomePage() {
  return (
    <>
      <CSSReset/>
        <div>
          <MenuBar/>
          <Header />
          <TimeLine playlist={config.playlist} />
        </div>
    </>
  );
};

export default HomePage;

const StyledHead = styled.div`
    img {
      width: 80px;
      height: 80px;
      border-radius : 50%;
    }
    .info-user{
      display: flex;
      align-items: center;
      padding: 16px 32px;
      gap: 16px;
      padding-top: 70px;
    }
    .info{
    }
  `;
function Header() {
  return (
    <StyledHead>
      <section className="info-user">
        <img src={config.github} alt="" />
        <div className="info">
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHead>
  );
};

function TimeLine(props) {
  const playlistNames = Object.keys(props.playlist);
  return (
    <StyledTimeline>
      {playlistNames.map((name) => {
        const videos = props.playlist[name];
        return (
          <section>
            <h2>{name}</h2>
            <div>
              {videos.map((v) => {
                return (
                  <a href={v.url}>
                    <img src={v.thumb} alt="" />
                    <span>{v.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  )
};