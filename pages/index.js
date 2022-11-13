import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red" 
    };

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


  const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

const Banner = styled.div`
    height:200px;
    background-color: red;
    background-image: url(${({bg})=> bg});
     background-size: cover;
     background-position: center;
`;

  function Header() {
    return (
        <StyledHeader>
            <Banner bg={config.banner}/>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

  function Timeline (propriedades) {
    console.log("dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    //statement
    //retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistNames) => {
                const videos = propriedades.playlists[playlistNames];
                return (
                    <section>
                        <h2>{playlistNames}</h2>
                        <div>
                            {
                                videos.map((video) => {
                                    return (
                                        <a href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
  }