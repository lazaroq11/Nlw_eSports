import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/Marvel's%20Spider-Man%3A%20Miles%20Morales",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/518007_IGDB-285x380.jpg",
    alt: "Imagem do jogo Spiderman:Miles Morales"
  },
  {
    url: "https://www.twitch.tv/directory/game/The%20Last%20of%20Us",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33180_IGDB-144x192.jpg",
    alt: "Imagem do jogo The Last Of Us"
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },
  {
    url: "https://www.twitch.tv/directory/game/Heavy%20Rain",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/19423_IGDB-144x192.jpg",
    alt: "Imagem do jogo Heavy Rain"
  }
];

const channelListData = [
  {
    url: "https://www.twitch.tv/tck10",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/481114bb-2154-496a-81d9-715296bceda9-profile_image-150x150.png",
    alt: "Imagem de Tck10"
  },
  {
    url: "https://www.twitch.tv/casimito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-150x150.png",
    alt: "Imagem de Casimito"
  },
  {
    url: "https://www.twitch.tv/paulanobre",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/4c7852e2-1c05-42aa-8d35-ae79dc6ac3dc-profile_image-70x70.png",
    alt: "Imagemd de Paula Nobre"
  }
];

const socialListData = [
  {
    url: "https://www.linkedin.com/in/lazaroq11/",
    imageUrl: "/assets/linkedin.svg",
    alt: "Linkedin do Lázaro Queiroz"
  },
  {
    url: "https://github.com/lazaroq11",
    imageUrl: "/assets/github.svg",
    alt: "Github do Lázaro Queiroz"
  },
  {
    url: "https://www.youtube.com/channel/UCv5FtO4OoE4WxANG-WZXTsg",
    imageUrl: "/assets/youtube.svg",
    alt: "Youtube do Lázaro Queiroz"
  },
  
];

export default function App() {
  return (
    <div className="App">
      {/* Header Componente */}
      <Header />
      <main>
        <Section
          className="games-list"
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar"
        >
          {gamesListData.map((listData) => (
            <ListItem
              url={listData.url}
              imageUrl={listData.imageUrl}
              alt={listData.alt}
            />
          ))}
        </Section>
        <Section
          className="channel-list"
          title="Canais e Streamers"
          subtitle="Lista de Canais e transmissões que não perco"
        >
          {channelListData.map((channelData) => (
            <ListItem
              url={channelData.url}
              imageUrl={channelData.imageUrl}
              alt={channelData.alt}
            />
          ))}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map((socialData) => (
            <ListItem
              url={socialData.url}
              imageUrl={socialData.imageUrl}
              alt={socialData.alt}
            />
          ))}
        </Section>
      </main>
      {/* Sections */}
    </div>
  );
}
