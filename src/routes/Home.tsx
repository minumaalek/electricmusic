import Header from "../components/Header";
import SongBoxContainer from "../components/SongBoxContainer";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
function Home() {
  const playlistsMap = [
    {
      id: 1,
      h2: "Your mood",
      Title: "Mood",
      Type: "list",
    },
    { id: 2, h2: "Top Bands", Title: "Top_bands", Type: "list" },
    { id: 3, h2: "Hard electric", Title: "Hard_electric", Type: "direct" },
    { id: 4, h2: "Soft electric", Title: "Soft_electric", Type: "direct" },
  ];
  return (
    <div>
      {/* <Loading /> */}
      <div className=" h-screen flex flex-col gap-2">
        <header className="w-full h-64 mb-4">
          <Header />
        </header>
        <main>
          <div className="flex flex-col gap-2">
            {playlistsMap.map((playlist) => {
              return (
                <SongBoxContainer
                  key={playlist.id}
                  boxTitle={playlist.h2}
                  playlistTitle={playlist.Title}
                  playlistType={playlist.Type}
                />
              );
            })}
          </div>
        </main>
        <footer>
          <div className="h-10"></div>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Home;
