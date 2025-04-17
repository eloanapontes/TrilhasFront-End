import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const goToAbout = () => navigate("/about");
  const goToContact = () => navigate("/contact");
  const goToAnimal = () => navigate("/animal/raposa");
  const goToRooms = () => navigate("/rooms");
  return (
    <div>
      <h1>Home</h1>
      <p>Bem vindo!</p>
      <button onClick={goToAbout}>About</button>
      <button onClick={goToContact}>Contact</button>
      <button onClick={goToAnimal}>Animal</button>
      <button onClick={goToRooms}>Rooms</button>
    </div>
  );
}

export default Home;