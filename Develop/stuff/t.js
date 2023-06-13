class Triangle
{
    constructor(color="")
    {
        this.color = color;
        this.text = "";
        this.settings = `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
        
        

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
module.exports = Triangle;