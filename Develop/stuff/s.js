class Square
{
    constructor(color="")
    {
        this.color = color;
        this.text = "";
        this.settings = ` <rect x="33%" y="25%" width="100" height="100" stroke="black" fill=${color} stroke-width="1"/>`;
        
        

    }
    render()
    {
        return this.settings;
    }
    addText(text,textColor)
    {
        this.text = text;
        var a = `<text x="50%" y="50%" fill=${textColor} dominant-baseline="middle" text-anchor="middle">${text}</text>`;
        this.settings = this.settings + a;
    }
};
module.exports = Square;