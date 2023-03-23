import { Component } from "react";

// Transformez l’application.js en un composant basé sur une classe

class App extends Component {
  // Implémentez un état pour cette classe contenant un nom de personne ={ fullName,bio, imgSrc, profession} et un spectacle booléen.
  state = {
    person: {
      fullName: "Magloire Amani",
      bio: "Etudiant en Informatique",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Developer Web ",
    },

    // Créez un champ qui indique l’intervalle de temps écoulé depuis le montage du dernier composant à l’aide du cycle de vie du composant.
    shows: false,
    mountTime: new Date(),
  };

  // Ajoutez un bouton qui bascule l’état d’affichage. Lorsque l’état d’affichage est vrai, le profil de la personne apparaît.

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({ mountTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.shows && (
          <div>
            <img src={this.state.person.imgSrc} alt="" />
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>temps écoulé: {this.state.mountTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
