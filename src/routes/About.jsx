import animatedLogo from "../assets/animated-logo.gif";
function About() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-3">
      <div className="bg-black rounded-2xl">
        <img src={animatedLogo} alt="" />
      </div>
      <h2 className="text-3xl font-bold">Hey there, never give up.</h2>
      <p className="text-justify p-6">
        Now is 17:32 5/15/2026 and I'va kinda finished this project. not
        completed, but enough. in any mood and situation, I never gave up. music
        is a light in many people's lives, specially me, and I hope to be a
        worthy listener (and player:). so i started this project to mix my two
        loves, front-end developing and song obsession. oh... I'm minu btw. I'm
        21 (minus about just two months). if you read this, I wish peace and
        calm for you, and I hope you share your ideas and comments with me. I'm
        grateful you checked my project.
      </p>
    </div>
  );
}
export default About;
