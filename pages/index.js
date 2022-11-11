import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import MenuBar from "../src/components/MenuBar";
import { StyledTimeline } from "../src/components/TimeLine.Js";
import { StyledFavorits } from "../src/components/Favorits.js"


function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <MenuBar />
        <Header />
        <TimeLine playlist={config.playlist} />
        <Favorits />
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
    .Banner{
      width: 100%;
      height: 230px;
      left: 0px;
      top: 56px;
      border-radius: 0%;
      object-fit: cover;
    }
  `;
function Header() {
  return (
    <StyledHead>
      <img src={config.banner} alt="Campo com girassois" className="Banner" />
      <section className="info-user">
        <img src={config.github} alt="" />
        <div>
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
                  <a href={v.url} target="_blank">
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

function Favorits() {
  return (
    <StyledFavorits>
      <section>
        <h2>Youtubers Favoritos</h2>
        <div>
          {config.YoutubersFavoritos.map((youtuber) => {
            return (
              <a href={youtuber.url}>
                <img src={youtuber.img} />
                <span> {youtuber.nome}</span>
              </a>
            )
          }
        )}
        </div>
      </section>
    </StyledFavorits>
  )
};