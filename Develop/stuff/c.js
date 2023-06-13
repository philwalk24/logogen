// I had an issue where when all my classes were in
// the same file it would only draw squares. I was able
// to fix this by putting each shape class in its own file.
// I have no idea why this fixed it.
class Circle
{
    constructor(color="")
    {
        this.color = color;
        this.text = "";
        this.settings = `<circle cx="50%" cy="50%" r="40" stroke="black" stroke-width="2" fill="${color}" />`;
        
        

    }
    render()
    {
        return this.settings;
    }
    addText(text,textColor)
    {
        this.text = text;
        var a = `<text x="50%" y="50%" fill=${textColor} text-anchor="middle">${text}</text>`;
        this.settings = this.settings + a;
    }
};
module.exports = Circle;