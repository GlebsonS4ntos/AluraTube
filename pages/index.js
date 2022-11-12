import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import MenuBar from "../src/components/Menu/index.js";
import { StyledTimeline } from "../src/components/TimeLine.Js";
import { StyledFavorits } from "../src/components/Favorits.js"
import React from "react";


function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  return (
    <>
      <CSSReset />
      <div>
        <MenuBar valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
        <Header />
        <TimeLine searchValue={valorDoFiltro}  playlist={config.playlist} />
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
  `;

  const Banner = styled.div`
      height: 230px;
      background-color: red;
      background-image: url(${({bg}) => bg});
      background-size: cover;
      background-position: center;
      //object-fit: cover; seria usado caso a tag fosse uma img e estivese recebendo a imagem no parametro src
  `;
function Header() {
  return (
    <StyledHead>
      <Banner bg={config.banner}/>
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

function TimeLine({searchValue, ...props}) {
  const playlistNames = Object.keys(props.playlist);
  return (
    <StyledTimeline>
      {playlistNames.map((name) => {
        const videos = props.playlist[name];
        return (
          <section key={name}>
            <h2>{name}</h2>
            <div>
              {videos.filter((video) => {
                 const titleNormalized = video.title.toLowerCase();
                 const searchValueNormalized = searchValue.toLowerCase();
                 return titleNormalized.includes(searchValueNormalized)
              }).map((v) => {
                return (
                  <a key={v.url} href={v.url} target="_blank">
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
              <a key={youtuber.url} href={youtuber.url}>
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