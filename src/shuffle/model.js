export default class ShuffleModel{
    data = [];

    rand2 = () => {
        const voc = {
            0 : -1,
            1 : 0,
        };
        return voc[~~(Math.random() * 2)];
    }

    shuffleData = () => {
        const shuffledImages = [...this.data];
        shuffledImages.sort(this.rand2);
        return shuffledImages;
    }
}