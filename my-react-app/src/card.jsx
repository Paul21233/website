import profilePic from './assets/profile.jpg';

function Card() {
    return (
        <div className="card">
            <img className="card__img" src={profilePic} alt="my image"></img>
            <h2>Hey I am Sowrin</h2>
            <p>I am a student, studying CSE</p>
        </div>
    );
}

export default Card;