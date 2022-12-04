// this is the class defined in demo code

export default function MemoryCard({ data, handleClickCard }) {    
    return (
      <div
        className={`card ${data.revealed ? 'flip' : ''}`}
        onClick={handleClickCard}
      >
        <img
          data-content-index={data.id}
          className="card-front"
          src={data.image}
          
          alt="Click to flip the card!"
        />

        <img
          data-content-index={data.id}
          className="card-back"
          src="Pusheen-logo.png"
          alt={data.image}
        />
        </div>
    );
  }