// the random function in the demo code

export function Randomize() {
    const paths = ['characters/Cheek-resized.png', 'characters/Stormy-resized.png', 'characters/Pusheen-resized.png', 'characters/Sloth-resized.png', 'characters/Pip-resized.png',];

    // create all cards with random images
    const cards = [];
    for (let i = 0; i < paths.length; i++) {
        const content = {
            image: paths[i],
        };
        let pair = [content, content];
        cards.push(...pair);
    }

    for (let i = cards.length-1;  i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
    }

    return cards.map((content, index) => ({
        ...content,
        id: index,
        revealed: false,
    }));
};

