function Pokecard(props) {
    const { id, name, type, baseExperience } = props;
    const imgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const altText = `picture of ${name}`;
    return (
        <div className='pokecard'>
            <p>{name}</p>
            <img src={imgLink} alt={altText}></img>
            <p>{type}</p>
            <p>{baseExperience}</p>
        </div>
    )
}

export default Pokecard;