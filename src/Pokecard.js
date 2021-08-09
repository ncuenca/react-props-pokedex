/** Add a docstring here (don't need to say it returns a DOM element)
 * What are the props? 
 */

function Pokecard({ id, name, type, baseExperience }) { // destructures automatically
    // const { id, name, type, baseExperience } = props;
    const imgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const altText = `picture of ${name}`;
    
    return (
        <div className='pokecard'>
            <p>{name}</p>
            <img src={imgLink} alt={altText}/>
            <p>{type}</p>
            <p>{baseExperience}</p>
        </div>
    )
}

export default Pokecard;